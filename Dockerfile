FROM node:12-alpine

RUN mkdir /app

ADD . /app

WORKDIR /app

EXPOSE 3000

CMD node index.js --bind 0.0.0.0:$PORT