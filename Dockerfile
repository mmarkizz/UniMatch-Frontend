FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Собираем на этапе сборки образа, а не при запуске!
RUN npm run build