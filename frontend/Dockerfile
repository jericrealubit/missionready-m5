FROM node:20-alpine

WORKDIR /app

COPY ./trademe .

RUN npm install

RUN npm run build

CMD ["npm", "run", "dev"]
