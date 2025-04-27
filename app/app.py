import traceback
from flask import Flask, render_template, request, flash, g, send_from_directory
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from datetime import datetime

from flask_migrate import Migrate

from app.service import discord, cloudflare
from app.util import cache, common
from app.util.db import db

import os
import re
import logging

app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ["SECRET_KEY"]
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ["DATABASE_URI"] 
db.init_app(app)

migrate = Migrate(app, db, compare_type=True)

# Enabling logging
gunicorn_logger = logging.getLogger('gunicorn.error')
if gunicorn_logger.handlers:
    app.logger.handlers = gunicorn_logger.handlers
    app.logger.setLevel(gunicorn_logger.level)

limiter = Limiter(
    key_func=common.get_client_ip,
    app=app,
    default_limits=[],
    storage_uri=os.environ["REDIS_URI"].strip() or "memory://" # Prod will always have a REDIS_URI
)

EMAIL_REGEX = re.compile(r"[^@]+@[^@]+\.[^@]+")

# Global app configuration


@app.context_processor
def inject_about():
    return dict(about=cache.get_about_info(), year=datetime.now().year)


@app.errorhandler(429)
def ratelimit_handler(e):
    return render_template("errors/429.html"), 429

@app.errorhandler(404)
def notfound_handler(e):
    return render_template("errors/404.html"), 404

@app.errorhandler(Exception)
def internal_error(e):
    app.logger.error(traceback.format_exc())
    return render_template("errors/500.html"), 500


# For web crawlers

@app.route('/robots.txt')
@app.route('/Robots.txt')
def robots():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'robots.txt')

@app.route('/sitemap.xml')
def sitemap():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'sitemap.xml')

# Routes start here


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/contact", methods=["GET"])
def contact():
    return render_template("contact.html", cf_site_key=os.environ["CF_SITE_KEY"])


@app.route("/contact", methods=["POST"])
@limiter.limit("5 per minute")
def handle_contact_form():
    _name = request.form.get("name", "").strip()
    email = request.form.get("email", "").strip()
    organization = request.form.get("organization", "").strip()
    subject = request.form.get("subject", "").strip()
    message = request.form.get("message", "").strip()
    cf_token = request.form.get("cf-turnstile-response", "").strip()

    # Very simple validation
    errors = []
    if not cf_token:
        errors.append("Invalid Cloudflare Turnstile token")
    if not (2 <= len(_name) <= 50):
        errors.append("Name must be between 2 and 50 characters.")
    if not (email and EMAIL_REGEX.match(email) and (5 <= len(email) <= 254)):
        errors.append("Invalid email address.")
    if organization and len(organization) > 100:
        errors.append("Organization name too long.")
    if not (5 <= len(subject) <= 100):
        errors.append("Subject must be between 5 and 100 characters.")
    if not (5 <= len(message) <= 2000):
        errors.append("Message must be between 5 and 2000 characters.")

    # Verifies Cloudflare Turnstile captcha
    if not cloudflare.verify_turnstile_token(cf_token):
        errors.append("Captcha failure")

    if errors:
        g.status = "error"
        for error in errors:
            flash(error, "error")
        return render_template("contact.html", cf_site_key=os.environ["CF_SITE_KEY"])

    # Posts message to a Discord webhook
    discord.post_webhook_message(_name, email, subject, message, organization)

    g.status = "success"
    return render_template("contact.html", cf_site_key=os.environ["CF_SITE_KEY"])


@app.route("/blog")
def blog():
    return render_template("wip.html")


@app.route("/projects")
def projects():
    return render_template("wip.html")
