FROM alpine

WORKDIR /usr/app

RUN apk add --update npm

COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]