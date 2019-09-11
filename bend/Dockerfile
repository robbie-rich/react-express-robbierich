FROM node

WORKDIR /home/app

COPY .babelrc ./
COPY .env ./
COPY package.json ./
COPY simple_express.js ./
RUN npm install

# COPY * ./

EXPOSE 9000

CMD [ "npm", "start" ]