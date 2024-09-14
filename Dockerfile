# Stage 1: Build the Angular app
FROM node:18 AS build

WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 4200
EXPOSE 4200

# Command to run the app in development mode
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200", "--poll", "2000", "--disable-host-check"]
