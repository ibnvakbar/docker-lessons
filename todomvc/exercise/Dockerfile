# base image
FROM node:12

# set work directory and run dependencies
WORKDIR /app
RUN yarn global add http-server

# copy source code
COPY package*.json ./

# install project dependencies
RUN yarn

COPY . .

# expose port
EXPOSE 8080

# execute the application
CMD ["http-server", "/app"]
