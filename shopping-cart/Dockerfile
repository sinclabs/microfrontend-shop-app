FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN cd ./ui/ && npm install

RUN npm run build

CMD [ "npm", "start" ]

EXPOSE 3000
