FROM node:12-alpine AS base

WORKDIR /app
COPY package*.json ./
RUN NODE_ENV=dev npm install
COPY . /app

CMD ["npm", "run", "serve"]

FROM base as build
RUN npm run build

# Make final image
FROM nginx:1.13.12-alpine as production

WORKDIR /app
COPY package*.json ./
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]