FROM node:latest
WORKDIR /project2
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm","start"]