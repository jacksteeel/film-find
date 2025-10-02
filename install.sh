#!/bin/bash

# Film Find - Installation Script
echo "🎞️  Film Find - Installation Script"
echo "===================================="
echo ""

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo ""

# Check npm cache permissions
echo "🔍 Checking npm cache permissions..."
if [ -d "$HOME/.npm" ]; then
    if [ ! -w "$HOME/.npm" ]; then
        echo "⚠️  npm cache has permission issues. Attempting to fix..."
        sudo chown -R $(whoami) "$HOME/.npm"
        echo "✅ Fixed npm cache permissions"
    else
        echo "✅ npm cache permissions OK"
    fi
fi
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Installation complete!"
    echo ""
    echo "🚀 To start the development server, run:"
    echo "   npm run dev"
    echo ""
    echo "Then open http://localhost:3000 in your browser"
else
    echo ""
    echo "❌ Installation failed. Please check the errors above."
    echo ""
    echo "💡 Try these alternatives:"
    echo "   1. Run: sudo chown -R \$(whoami) ~/.npm && npm install"
    echo "   2. Or use Yarn: npm install -g yarn && yarn install"
    exit 1
fi

