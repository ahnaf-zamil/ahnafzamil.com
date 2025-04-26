from flask import Flask, render_template
from datetime import datetime
import json

app = Flask(__name__)

def get_about_info():
    with open("./content/about.json") as f:
        about_info = json.load(f)
    return about_info

@app.context_processor
def inject_about():
    return dict(about=get_about_info(), year=datetime.now().year)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/contact")
def contact():
    return render_template("wip.html")

@app.route("/blog")
def blog():
    return render_template("wip.html")

@app.route("/projects")
def projects():
    return render_template("wip.html")