# Use the latest Node.js image from the Docker Hub as the base image
FROM node:latest

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json file from the host to the working directory in the container
COPY package.json ./

# Copy all files from the host to the working directory in the container
COPY . .

# Install the dependencies specified in package.json
RUN npm install

# Copy the .next directory from the host to the working directory in the container
COPY .next ./.next

# Specify the command to run when the container starts
CMD ["npm", "run", "dev"]
