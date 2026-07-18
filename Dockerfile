FROM node:22-alpine

WORKDIR /rubiks-web

COPY package*.json .
RUN npm install
COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

