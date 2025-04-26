from flask import abort
import requests
import typing
import time
import os

s = requests.Session()


def _build_msg(
    _name: str, email: str, sub: str, body: str, org: typing.Optional[str] = ""
):
    return f"""
## NEW MESSAGE
    
**Subject:** {sub}

**Sent:** <t:{int(time.time())}>

### NAME
`{_name}`

### EMAIL
`{email}`
{
    f"\n### ORGANIZATION\n{org}"
    if org else ""
}

### BODY
```
{body}
```

@everyone
-----------------------------

"""


def post_webhook_message(
    _name: str, email: str, sub: str, body: str, org: typing.Optional[str] = ""
):
    """Sends message to Discord channel via webhook"""
    data = {"content": _build_msg(_name, email, sub, body, org)}
    rs = s.post(os.environ["DISCORD_WEBHOOK_URL"], json=data)
    try:
        rs.raise_for_status()
    except requests.HTTPError as e:
        abort(e.response.status_code)
