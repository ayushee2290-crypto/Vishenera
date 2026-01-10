#!/bin/bash

# Vishenera Technologies Website - Setup Script
# This script helps set up the development environment

set -e

echo "================================================"
echo "  Vishenera Technologies Website Setup"
echo "================================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if running as root
if [ "$EUID" -eq 0 ]; then
    echo -e "${YELLOW}Warning: Running as root. Consider using a regular user.${NC}"
fi

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

echo "Checking prerequisites..."
echo ""

# Check Node.js
if command_exists node; then
    NODE_VERSION=$(node -v)
    echo -e "${GREEN}✓ Node.js installed: $NODE_VERSION${NC}"
else
    echo -e "${RED}✗ Node.js not found${NC}"
    echo "  Install Node.js 18+ from: https://nodejs.org/"
fi

# Check npm
if command_exists npm; then
    NPM_VERSION=$(npm -v)
    echo -e "${GREEN}✓ npm installed: $NPM_VERSION${NC}"
else
    echo -e "${RED}✗ npm not found${NC}"
fi

# Check Docker
if command_exists docker; then
    DOCKER_VERSION=$(docker --version)
    echo -e "${GREEN}✓ Docker installed: $DOCKER_VERSION${NC}"
else
    echo -e "${YELLOW}○ Docker not found (optional for local development)${NC}"
fi

# Check Docker Compose
if command_exists docker-compose; then
    COMPOSE_VERSION=$(docker-compose --version)
    echo -e "${GREEN}✓ Docker Compose installed: $COMPOSE_VERSION${NC}"
elif command_exists docker && docker compose version >/dev/null 2>&1; then
    COMPOSE_VERSION=$(docker compose version)
    echo -e "${GREEN}✓ Docker Compose (plugin) installed: $COMPOSE_VERSION${NC}"
else
    echo -e "${YELLOW}○ Docker Compose not found (optional for local development)${NC}"
fi

echo ""
echo "================================================"
echo "  Setup Options"
echo "================================================"
echo ""
echo "1. Local Development (requires Node.js):"
echo "   npm install"
echo "   npm run dev"
echo ""
echo "2. Docker Deployment (requires Docker):"
echo "   docker-compose up -d --build"
echo ""
echo "3. Production Build (requires Node.js):"
echo "   npm install"
echo "   npm run build"
echo "   npm start"
echo ""
echo "================================================"
echo "  Quick Start"
echo "================================================"
echo ""

# If npm is available, offer to install
if command_exists npm; then
    read -p "Install dependencies now? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Installing dependencies..."
        npm install
        echo ""
        echo -e "${GREEN}✓ Dependencies installed successfully!${NC}"
        echo ""
        echo "To start development server:"
        echo "  npm run dev"
        echo ""
        echo "To build for production:"
        echo "  npm run build && npm start"
    fi
elif command_exists docker; then
    read -p "Build and run with Docker? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Building Docker image..."
        if command_exists docker-compose; then
            docker-compose up -d --build
        else
            docker compose up -d --build
        fi
        echo ""
        echo -e "${GREEN}✓ Container started successfully!${NC}"
        echo ""
        echo "Website available at: http://localhost:3000"
    fi
else
    echo -e "${RED}Please install Node.js or Docker to proceed.${NC}"
    echo ""
    echo "Node.js: https://nodejs.org/"
    echo "Docker: https://docker.com/"
fi

echo ""
echo "Documentation: See README.md for full instructions"
echo ""
