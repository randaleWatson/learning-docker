# Specify a base image
FROM alpine

WORKDIR /usr/app

# Install some dependencies
RUN apk add --update npm

COPY ./package.json ./

RUN npm install

COPY ./ ./

# Default command
CMD ["npm", "start"]