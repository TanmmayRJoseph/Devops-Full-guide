# -----------------------------
# 🧱 Stage 1: Development
# -----------------------------
# Using lightweight Node image for dev
FROM node:20-slim AS development

# Create a working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for caching
COPY package*.json ./

# Install all dependencies (including dev)
RUN npm install --no-audit --no-fund

# Copy all files from project into container
COPY . .

# Expose Vite’s default port
EXPOSE 5173

# Start Vite development server (hot reload mode)
CMD ["npm", "run", "dev"]

# -----------------------------
# 🚀 Stage 2: Production Build
# -----------------------------
FROM node:20-slim AS build

WORKDIR /app

# Copy package files and install only production dependencies
COPY package*.json ./
RUN npm install --production --no-audit --no-fund

# Copy source code and build the app
COPY . .
RUN npm run build

# -----------------------------
# 🌐 Stage 3: Production Serve
# -----------------------------
# Use a small, secure web server image to serve static files
FROM nginx:1.27-alpine AS production

# Copy built files from previous build stage into Nginx's public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Nginx automatically serves the app, no CMD needed

# -----------------------------
# 💬 Notes (For Future You 😄)
# -----------------------------
# - In production, only static files from "dist" are served — much faster and safer.
# - You can customize nginx.conf if you want routing support (e.g. React Router).
# - To switch between dev & prod:
#     docker build --target development -t frontend-dev .
#     docker build --target production -t frontend-prod .
# - Always add a `.dockerignore` to skip node_modules and other junk files.
