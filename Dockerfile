FROM node:alpine

WORKDIR /myapp

COPY ./package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]