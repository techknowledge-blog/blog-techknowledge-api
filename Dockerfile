# Step 1: Use an official Node.js runtime as a base image
FROM node:23 AS builder

# Set working directory
WORKDIR /app

# Copy the rest of the application code
COPY package.json .

# Install dependencies
RUN npm install --legacy-peer-deps
RUN npm install --force @prisma/client


# Copy the rest of the application code
COPY . .

# Run prisma client generator
RUN npx prisma generate

# Build the NestJS application
RUN npm run build

# Remove unnecessary files
RUN npm prune --omit=dev --legacy-peer-deps

# Step 2: Create a lightweight production image
FROM node:23 AS production

# Set working directory
WORKDIR /app

# Copy built application and node_modules from the builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.env ./.env
COPY --from=builder /app/package.json ./

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "dist/src/main.js"]
