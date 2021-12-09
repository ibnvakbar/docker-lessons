# Common build stage
FROM node:14.14.0-alpine3.12 as base

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000

# instructions for production build 
FROM node:14.14.0-alpine3.12 as production-build
ENV NODE_ENV production

COPY package*.json ./
RUN npm install --only=production

COPY --from=0 /app/build/  ./build/

CMD ["npm", "run", "start"]
