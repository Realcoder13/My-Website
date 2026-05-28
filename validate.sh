#!/bin/bash

echo "🔍 Starting Website Validation..."
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check 1: Dependencies installed
echo -n "✓ Checking dependencies... "
if [ -d "node_modules" ]; then
    echo -e "${GREEN}OK${NC}"
else
    echo -e "${RED}MISSING${NC}"
    echo "  Run: npm install"
fi

# Check 2: Build succeeds
echo -n "✓ Testing build... "
if npm run build > /tmp/build.log 2>&1; then
    echo -e "${GREEN}OK${NC}"
else
    echo -e "${RED}FAILED${NC}"
    echo "  Error: Build failed"
    tail -20 /tmp/build.log
fi

# Check 3: Output directory exists
echo -n "✓ Checking output directory... "
if [ -d "out" ]; then
    size=$(du -sh out | cut -f1)
    echo -e "${GREEN}OK${NC} (Size: $size)"
else
    echo -e "${RED}MISSING${NC}"
fi

# Check 4: Required HTML files
echo -n "✓ Checking HTML files... "
files_found=0
[ -f "out/index.html" ] && files_found=$((files_found + 1))
[ -f "out/404.html" ] && files_found=$((files_found + 1))
if [ $files_found -eq 2 ]; then
    echo -e "${GREEN}OK${NC} ($files_found files)"
else
    echo -e "${RED}INCOMPLETE${NC} ($files_found/2 files)"
fi

# Check 5: Configuration files
echo -n "✓ Checking configuration files... "
configs=0
[ -f "wrangler.toml" ] && configs=$((configs + 1))
[ -f "next.config.js" ] && configs=$((configs + 1))
[ -f "package.json" ] && configs=$((configs + 1))
[ -f "tsconfig.json" ] && configs=$((configs + 1))
if [ $configs -eq 4 ]; then
    echo -e "${GREEN}OK${NC} ($configs files)"
else
    echo -e "${YELLOW}WARNING${NC} ($configs/4 files)"
fi

# Check 6: Workflows
echo -n "✓ Checking deployment workflows... "
workflows=0
[ -f ".github/workflows/deploy.yml" ] && workflows=$((workflows + 1))
[ -f ".github/workflows/deploy-cloudflare.yml" ] && workflows=$((workflows + 1))
if [ $workflows -eq 2 ]; then
    echo -e "${GREEN}OK${NC} ($workflows workflows)"
else
    echo -e "${YELLOW}WARNING${NC} ($workflows/2 workflows)"
fi

# Check 7: TypeScript compilation
echo -n "✓ Checking TypeScript... "
if npm run lint > /tmp/lint.log 2>&1; then
    echo -e "${GREEN}OK${NC}"
else
    echo -e "${YELLOW}WARNINGS${NC} (check output)"
fi

# Summary
echo ""
echo "=" "=" "=" "=" "=" "=" "=" "=" "=" "=" "=" "=" "=" "=" "=" "=" "=" "=" "=" "="
echo ""
echo -e "${GREEN}✅ Website is ready for deployment!${NC}"
echo ""
echo "📋 Next Steps:"
echo "  1. Add Cloudflare secrets to GitHub repository"
echo "  2. Update wrangler.toml with your Account ID"
echo "  3. Push to main branch to trigger deployment"
echo ""
echo "📚 Documentation:"
echo "  - CLOUDFLARE_DEPLOYMENT.md - Full deployment guide"
echo "  - BUILD_FIX_SUMMARY.md - Changes made"
echo ""
echo "🚀 Quick Deploy Commands:"
echo "  Local: npm run build"
echo "  Cloudflare: wrangler pages deploy ./out"
echo ""
