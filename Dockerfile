FROM node:16-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i --production
COPY . .
EXPOSE 1111
CMD [ "npm", "start" ]
