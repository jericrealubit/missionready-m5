FROM node:20-alpine

WORKDIR /app

RUN yarn global add nodemon

COPY ./trademe .

RUN npm install

RUN npm run build

CMD ["npm", "run", "dev"]
