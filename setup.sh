#!/bin/bash

echo "🔧 Starting project setup..."

# 1. Check Python version
echo "📌 Python version:"
python3 --version

# 2. Create virtual environment
echo "📁 Creating virtual environment..."
python3 -m venv venv

# 3. Activate virtual environment
echo "⚙️ Activating virtual environment..."
source venv/bin/activate

# 4. Upgrade pip
echo "⬆️ Upgrading pip..."
pip install --upgrade pip

# 5. Install required packages
if [ -f requirements.txt ]; then
    echo "📦 Installing dependencies from requirements.txt..."
    pip install -r requirements.txt
else
    echo "❗ requirements.txt not found!"
fi

# 6. Finish
echo "✅ Setup complete! Activate your environment using:"
echo "   source venv/bin/activate"
