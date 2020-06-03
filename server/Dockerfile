FROM python:3.7

RUN apt-get update && apt-get install -y \
    curl \
    wget \
    nano \
    zip

WORKDIR /usr/src/app

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .