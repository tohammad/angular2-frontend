
FROM node:latest
MAINTAINER author
LABEL Name=angular2-frontend Version=0.0.0 
COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/app && mv /tmp/node_modules /usr/src
WORKDIR /usr/src/app
COPY . /usr/src/app
EXPOSE 4200
CMD npm start
