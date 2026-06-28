FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY entrypoint.sh .

COPY upload.py .

RUN chmod 777 *.py

RUN pwd 

CMD [ "python" , "upload.py" ]
