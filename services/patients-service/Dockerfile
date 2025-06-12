FROM node:18-alpine

WORKDIR /app

# Usar un mirror confiable de npm para evitar errores 503
RUN npm config set registry https://registry.npmmirror.com

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

ENV PORT=3001
EXPOSE 3001

CMD ["npm", "start"]