FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm ci

# Copy all source files
COPY . .

# Build the Astro project
RUN npm run build

# Production stage
FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY package-lock.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy built files and server.js from builder
# Note: server.js is in src/ directory, so copy it from there
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/server.js ./server.js

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]