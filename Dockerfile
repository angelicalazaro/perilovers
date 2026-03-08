FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
COPY client/package*.json ./client/
COPY server/package*.json ./server/
RUN npm install

# Copy all source files
COPY . .

# Build the React client (output → client/dist)
RUN npm run build --workspace=client

# Run the server from its own directory (dotenv finds .env here)
WORKDIR /app/server

EXPOSE 3310

CMD ["npx", "tsx", "./src/main"]
