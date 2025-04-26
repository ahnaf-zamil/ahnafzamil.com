from flask import Flask, render_template, request, flash, redirect, url_for, g
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from datetime import datetime

from app.service import discord

import json
import os
import re
import logging

app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ["SECRET_KEY"]

# Enabling logging
logging.basicConfig(level=logging.INFO)
app.logger.setLevel(logging.INFO)

limiter = Limiter(
    key_func=lambda: request.headers.get("X-Real-IP")
    or get_remote_address(),  # Use X-Real-IP header for NGINX reverse proxy
    app=app,
    default_limits=[],
    storage_uri=os.environ["REDIS_URI"]
)

EMAIL_REGEX = re.compile(r"[^@]+@[^@]+\.[^@]+")


def get_about_info():
    with open("./content/about.json") as f:
        about_info = json.load(f)
    return about_info


# Global app configuration


@app.context_processor
def inject_about():
    return dict(about=get_about_info(), year=datetime.now().year)


@app.errorhandler(429)
def ratelimit_handler(e):
    return render_template("errors/429.html"), 429


@app.errorhandler(Exception)
def internal_error(e):
    return render_template("errors/500.html"), 500


# Routes start here


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/contact", methods=["GET"])
def contact():
    return render_template("contact.html")


@app.route("/contact", methods=["POST"])
@limiter.limit("5 per minute")
def handle_contact_form():
    _name = request.form.get("name", "").strip()
    email = request.form.get("email", "").strip()
    organization = request.form.get("organization", "").strip()
    subject = request.form.get("subject", "").strip()
    message = request.form.get("message", "").strip()

    # Very simple validation
    errors = []

    if not (2 <= len(_name) <= 50):
        errors.append("Name must be between 2 and 50 characters.")
    if not (email and EMAIL_REGEX.match(email) and (5 <= len(email) <= 254)):
        errors.append("Invalid email address.")
    if organization and len(organization) > 100:
        errors.append("Organization name too long.")
    if not (5 <= len(subject) <= 100):
        errors.append("Subject must be between 5 and 100 characters.")
    if not (5 <= len(message) <= 1000):
        errors.append("Message must be between 5 and 1000 characters.")

    if errors:
        g.status = "error"
        for error in errors:
            flash(error, "error")
        return render_template("contact.html")

    # WIP: Integrate external API to send messages
    discord.post_webhook_message(_name, email, subject, message, organization)

    g.status = "success"
    return render_template("contact.html")


@app.route("/blog")
def blog():
    return render_template("wip.html")


@app.route("/projects")
def projects():
    return render_template("wip.html")
