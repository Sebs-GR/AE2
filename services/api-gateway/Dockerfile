FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Cambiar el registry antes de instalar
RUN npm config set registry https://registry.npmmirror.com
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]