FROM node:18

WORKDIR /app

COPY package.json ./

RUN npm install --legacy-peer-deps
RUN npm install

COPY . .

RUN npx prisma generate

RUN yarn build
RUN ls -l

CMD ["node", "dist/main"]
