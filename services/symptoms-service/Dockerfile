FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Cambiar el registry antes de instalar
RUN npm config set registry https://registry.npmmirror.com
RUN npm install --omit=dev

COPY . .

ENV PORT=3002
EXPOSE 3002

CMD ["npm", "start"]