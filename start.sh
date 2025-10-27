#!/bin/bash

echo "🍽️  Starting Savoria Restaurant Server..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "⚠️  No .env file found. Creating from template..."
    cp .env.example .env
    echo "✅ Please edit .env file with your email credentials"
    echo ""
fi

# Start the server
echo "🚀 Starting server on http://localhost:3000"
echo ""
node server.js
