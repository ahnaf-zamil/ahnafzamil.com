from flask import request
from flask_limiter.util import get_remote_address

def get_client_ip():
    """Use X-Real-IP header for NGINX reverse proxy"""
    return request.headers.get("X-Real-IP") or get_remote_address()
