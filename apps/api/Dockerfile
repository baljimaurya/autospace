FROM node:18

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

RUN npx prisma generate

RUN npm build

CMD ["node", "dist/main"]
