from ..util.common import get_client_ip
from flask import abort

import requests
import os

s = requests.Session()

def verify_turnstile_token(token: str):
    client_ip = get_client_ip()

    rs = s.post("https://challenges.cloudflare.com/turnstile/v0/siteverify", json={
        "secret": os.environ["CF_SECRET_KEY"],
        "response": token,
        "remoteip": client_ip
    })
    try:
        rs.raise_for_status()
    except requests.HTTPError as e:
        abort(e.response.status_code)
    data = rs.json()
    return data["success"]