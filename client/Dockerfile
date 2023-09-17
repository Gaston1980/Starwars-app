
FROM node:17-alpine as BUILD_IMAGE

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]