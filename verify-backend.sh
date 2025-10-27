#!/bin/bash

echo "================================================"
echo "  🔍 SAVORIA BACKEND VERIFICATION SCRIPT"
echo "================================================"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Check if server.js exists
echo "1️⃣  Checking backend files..."
if [ -f "server.js" ]; then
    echo -e "${GREEN}✅ server.js found${NC}"
else
    echo -e "${RED}❌ server.js NOT found${NC}"
    exit 1
fi

if [ -f "package.json" ]; then
    echo -e "${GREEN}✅ package.json found${NC}"
else
    echo -e "${RED}❌ package.json NOT found${NC}"
    exit 1
fi

# 2. Check if node_modules exists
echo ""
echo "2️⃣  Checking dependencies..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✅ Dependencies installed (node_modules exists)${NC}"
else
    echo -e "${YELLOW}⚠️  Dependencies not installed${NC}"
    echo "   Run: npm install"
    exit 1
fi

# 3. Check if server is running
echo ""
echo "3️⃣  Checking if server is running..."
if lsof -i :3000 >/dev/null 2>&1; then
    echo -e "${GREEN}✅ Server is running on port 3000${NC}"
    SERVER_RUNNING=true
else
    echo -e "${YELLOW}⚠️  Server is NOT running${NC}"
    echo "   Start it with: npm start"
    SERVER_RUNNING=false
fi

# 4. Test API endpoint (if server is running)
if [ "$SERVER_RUNNING" = true ]; then
    echo ""
    echo "4️⃣  Testing API endpoint..."
    
    RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/api/health)
    
    if [ "$RESPONSE" = "200" ]; then
        echo -e "${GREEN}✅ API is responding (HTTP 200)${NC}"
        
        # Get actual response
        API_DATA=$(curl -s http://localhost:3000/api/health)
        echo "   Response: $API_DATA"
    else
        echo -e "${RED}❌ API not responding properly (HTTP $RESPONSE)${NC}"
    fi
fi

# 5. Check database
echo ""
echo "5️⃣  Checking database..."
if [ -f "savoria.db" ]; then
    echo -e "${GREEN}✅ Database file exists (savoria.db)${NC}"
    
    # Check database size
    DB_SIZE=$(du -h savoria.db | cut -f1)
    echo "   Database size: $DB_SIZE"
    
    # Count tables
    TABLE_COUNT=$(sqlite3 savoria.db "SELECT COUNT(*) FROM sqlite_master WHERE type='table';" 2>/dev/null)
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Database has $TABLE_COUNT tables${NC}"
        
        # List tables
        echo ""
        echo "   📊 Tables in database:"
        sqlite3 savoria.db "SELECT name FROM sqlite_master WHERE type='table';" 2>/dev/null | while read table; do
            COUNT=$(sqlite3 savoria.db "SELECT COUNT(*) FROM $table;" 2>/dev/null)
            echo "      - $table ($COUNT records)"
        done
    fi
else
    echo -e "${YELLOW}⚠️  Database not yet created${NC}"
    echo "   It will be created when you start the server"
fi

# 6. Check .env file
echo ""
echo "6️⃣  Checking configuration..."
if [ -f ".env" ]; then
    echo -e "${GREEN}✅ .env file exists (email configured)${NC}"
else
    echo -e "${YELLOW}⚠️  No .env file found${NC}"
    echo "   Email notifications will not work"
    echo "   To enable: cp .env.example .env"
fi

# Summary
echo ""
echo "================================================"
echo "  📋 SUMMARY"
echo "================================================"

if [ "$SERVER_RUNNING" = true ]; then
    echo ""
    echo -e "${GREEN}🎉 Backend is SET UP and RUNNING!${NC}"
    echo ""
    echo "You can:"
    echo "  • Visit website: http://localhost:3000"
    echo "  • Test API: http://localhost:3000/api-test.html"
    echo "  • Check health: curl http://localhost:3000/api/health"
    echo ""
else
    echo ""
    echo -e "${YELLOW}⚙️  Backend is SET UP but NOT RUNNING${NC}"
    echo ""
    echo "To start the server:"
    echo "  npm start"
    echo ""
fi

echo "================================================"
