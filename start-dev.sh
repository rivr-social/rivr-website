#!/bin/bash

# Kill any existing Next.js dev processes
pkill -f "next dev" || true

# Wait a moment for processes to fully terminate
sleep 2

# Start the development server with auto-restart on crashes
while true; do
    echo "Starting Next.js development server on port 4000..."
    PORT=4000 npm run dev
    echo "Development server crashed. Restarting in 3 seconds..."
    sleep 3
done