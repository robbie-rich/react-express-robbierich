FROM node

WORKDIR /home/app

COPY .babelrc ./
COPY .env ./
COPY package.json ./
COPY simple_express.js ./
COPY PlayerData.js ./
RUN npm install

# COPY * ./

EXPOSE 9000

CMD [ "npm", "start", "PORT=9000" ]