FROM node

WORKDIR /home/app

COPY package.json ./
COPY src ./src
COPY public ./public
RUN npm i

# COPY build/ ./
COPY wait-for-it.sh ./
RUN chmod +x ./wait-for-it.sh

CMD [ "npm", "start"]

# CMD [ "serve", "-s", "build", "-l", "3000"]