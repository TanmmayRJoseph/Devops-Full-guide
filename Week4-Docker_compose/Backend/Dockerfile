# ---------------------------
# 🧱 Stage 1: Base setup
# ---------------------------
# Using a small Node.js image (Alpine = lightweight Linux)
FROM node:18-alpine AS base

# Set working directory inside the container
WORKDIR /app

# Copy only package files first for better caching
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the app files (like src/, tsconfig.json, etc.)
COPY . .

# ---------------------------
# ⚙️ Stage 2: Development
# ---------------------------
FROM base AS development

# Set NODE_ENV to development (helps tools like nodemon)
ENV NODE_ENV=development

# Expose backend port (your API runs here)
EXPOSE 3000

# Run the dev server (usually using ts-node-dev or nodemon)
# 👉 Make sure "dev" script exists in package.json
CMD ["npm", "run", "dev"]

# ---------------------------
# 🚀 Stage 3: Production
# ---------------------------
FROM base AS production

# Set NODE_ENV to production
ENV NODE_ENV=production

# Remove dev dependencies to make image smaller
RUN npm ci --only=production

# Build TypeScript -> JavaScript
RUN npm run build

# Expose the same backend port for production
EXPOSE 3000

# Start compiled JS server from "dist"
# 👉 Make sure your build script outputs to dist/
CMD ["node", "dist/index.js"]

# ---------------------------
# 💬 Notes for Future Use
# ---------------------------
# - You can add environment variables here like DATABASE_URL or JWT_SECRET.
# - You can use a .dockerignore file to skip node_modules or .env from copying.
# - For debugging, you can use:
#   docker exec -it <container_name> sh
