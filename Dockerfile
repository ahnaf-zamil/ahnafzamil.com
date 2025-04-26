FROM python:3.13.3-slim

WORKDIR /server


COPY server.py .
COPY app/ ./app/
COPY requirements.txt .
COPY .env .

RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 8000

VOLUME ["/server/content"]

CMD gunicorn --log-level info --access-logfile - --error-logfile - -w 4 -b "0.0.0.0:8000" server:app 