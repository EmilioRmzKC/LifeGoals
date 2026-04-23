# Use Node.js 20 image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Angular app
RUN npm run build

# Use nginx to serve the app
FROM nginx:alpine

# Copy built app to nginx
COPY --from=0 /app/dist/lifegoals /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]