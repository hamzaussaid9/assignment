FROM node:14-alpine

WORKDIR /backend

COPY package*.json ./
RUN npm install --only=production

COPY . .

EXPOSE 1500

CMD ["npm", "start"]