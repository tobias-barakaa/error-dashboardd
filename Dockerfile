FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY package-lock.json ./

# Install all dependencies
RUN npm install

# Copy all source files
COPY . .

# Build the project
RUN npm run build

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "src/server.js"]