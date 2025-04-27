import json
import time

class StateCache:
    expiry: int
    data: dict

    def __init__(self):
        self.data = {}
        self.expiry = -1

cache = StateCache()       

def get_about_info():
    """Caching the about information to reduce disk I/O load"""

    now = int(time.time())
    if (not cache.expiry > 0) or cache.expiry < now:
        with open("./content/about.json") as f:
            about_info = json.load(f)

        cache.expiry = now + 30 # 30 seconds cache expiry
        cache.data = about_info

    return cache.data
