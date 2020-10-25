# Use the alpine image to minimize container size
FROM node:14-alpine

# Create app directory. This is where we'll store all stuff.
WORKDIR /app

# Copy the package*.json files before copying source code.
# This improves build times (docker layers, and stuff).
COPY package.json package-lock.json ./

# Install js deps.
RUN npm install

# Copy the remaining source files now.
COPY . .

# Make the port visible.
# Should be kept in sync with .ts code.
EXPOSE 3000

# Run the thing.
CMD [ "npm", "start" ]
