from dotenv import load_dotenv
load_dotenv()

from werkzeug.middleware.proxy_fix import ProxyFix
from app import app

app.wsgi_app = ProxyFix(app.wsgi_app, x_for=1, x_proto=1, x_host=1, x_port=1)

if __name__ == "__main__":
    app.run(debug=True, port=5000, host="0.0.0.0")