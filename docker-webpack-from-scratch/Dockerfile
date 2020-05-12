FROM node:13.5-alpine3.10

WORKDIR /code
COPY ./package.json /code/package.json
COPY ./package-lock.json /code/package-lock.json
RUN npm install

COPY . /code

EXPOSE 8080

CMD ["cat", "webpack.config.js"]
