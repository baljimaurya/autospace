FROM node:18

WORKDIR /app

COPY package.json ./
COPY apps ./apps
COPY libs ./libs
RUN npm install --legacy-peer-deps
RUN npm install

COPY . .

RUN npx prisma generate

RUN yarn build

CMD ["node", "dist/main.js"]
