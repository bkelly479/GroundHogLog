FROM node:10-slim
maintainer Brendan Kelly

workdir /groundhoglog

copy ./bin ./bin
copy ./public ./public
copy ./routes ./routes
copy ./views ./views

copy ./package.json .
copy app.js .

run npm install
# cmd ["npm start"]
