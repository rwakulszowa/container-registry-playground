FROM node:14-alpine

# install simple http server for serving static content
# Note, that in a production environment, it's more common
# to use nginx for serving.
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package.json package-lock.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# Specify which env file to use.
# Can be set with `--build-arg ENV_FILE=some_file`,
# or through docker-compose.
ARG ENV_FILE=".env"

# Copy the specified env file.
COPY $ENV_FILE ./.env

# build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]
