FROM node:16.15-alpine
ENV APP_ROOT /home/api

WORKDIR $APP_ROOT

COPY ./package.json $APP_ROOT
COPY ./yarn.lock $APP_ROOT

RUN yarn install 

COPY . $APP_ROOT

EXPOSE 8080