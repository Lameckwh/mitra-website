# Use an official Node.js runtime as the base image
FROM docker.io/library/node:20-slim

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if present) to install dependencies
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the Next.js project files
COPY . .

# Expose port 3000 for the Next.js dev server
EXPOSE 3000

# Start the Next.js development server
CMD ["npm", "run", "dev"]