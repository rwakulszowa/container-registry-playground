# Pull a recommended image provided by cypress.io
# This is the thinnest version - cypress itself is not included.
FROM cypress/base:12

# Use a dedicated folder for all our stuff.
WORKDIR /tests

# Install cypress.
RUN npm install --save-dev cypress

# Verify that Cypress has been installed correctly.
RUN npx cypress verify

# Copy test files.
COPY . .

# Run the tests.
CMD [ "npx", "cypress", "run" ]
