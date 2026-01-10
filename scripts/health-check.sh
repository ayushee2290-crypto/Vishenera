#!/bin/bash

# Vishenera Daily Health Check Script
# Run: ./scripts/health-check.sh

echo "=========================================="
echo "  VISHENERA DAILY HEALTH CHECK"
echo "  $(date)"
echo "=========================================="

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check website
echo -e "\n[1/6] Checking Website..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000)
if [ "$HTTP_CODE" = "200" ]; then
    echo -e "${GREEN}✓ Website responding (HTTP $HTTP_CODE)${NC}"
else
    echo -e "${RED}✗ Website issue (HTTP $HTTP_CODE)${NC}"
fi

# Check containers
echo -e "\n[2/6] Checking Containers..."
WEBSITE_STATUS=$(docker inspect --format='{{.State.Status}}' vishenera-website 2>/dev/null)
if [ "$WEBSITE_STATUS" = "running" ]; then
    echo -e "${GREEN}✓ vishenera-website: running${NC}"
else
    echo -e "${RED}✗ vishenera-website: $WEBSITE_STATUS${NC}"
fi

TUNNEL_STATUS=$(docker inspect --format='{{.State.Status}}' vishenera-cloudflared 2>/dev/null)
if [ "$TUNNEL_STATUS" = "running" ]; then
    echo -e "${GREEN}✓ vishenera-cloudflared: running${NC}"
else
    echo -e "${YELLOW}! vishenera-cloudflared: $TUNNEL_STATUS (optional)${NC}"
fi

# Check disk space
echo -e "\n[3/6] Checking Disk Space..."
DISK_USAGE=$(df -h /opt/vishenera | awk 'NR==2 {print $5}' | tr -d '%')
if [ "$DISK_USAGE" -lt 80 ]; then
    echo -e "${GREEN}✓ Disk usage: ${DISK_USAGE}%${NC}"
elif [ "$DISK_USAGE" -lt 90 ]; then
    echo -e "${YELLOW}! Disk usage: ${DISK_USAGE}% (Warning)${NC}"
else
    echo -e "${RED}✗ Disk usage: ${DISK_USAGE}% (Critical!)${NC}"
fi

# Check memory
echo -e "\n[4/6] Checking Memory..."
MEM_AVAILABLE=$(free -m | awk 'NR==2 {print $7}')
if [ "$MEM_AVAILABLE" -gt 1000 ]; then
    echo -e "${GREEN}✓ Available memory: ${MEM_AVAILABLE}MB${NC}"
elif [ "$MEM_AVAILABLE" -gt 500 ]; then
    echo -e "${YELLOW}! Available memory: ${MEM_AVAILABLE}MB (Low)${NC}"
else
    echo -e "${RED}✗ Available memory: ${MEM_AVAILABLE}MB (Critical!)${NC}"
fi

# Check for errors in logs
echo -e "\n[5/6] Checking Recent Logs..."
cd /opt/vishenera
ERROR_COUNT=$(docker-compose logs --tail 100 2>&1 | grep -ci "error")
if [ "$ERROR_COUNT" -eq 0 ]; then
    echo -e "${GREEN}✓ No errors in recent logs${NC}"
else
    echo -e "${YELLOW}! Found $ERROR_COUNT error mention(s) in recent logs${NC}"
fi

# Check pages
echo -e "\n[6/6] Checking All Pages..."
PAGES=("/" "/services" "/products" "/industries" "/contact")
ALL_OK=true
for page in "${PAGES[@]}"; do
    CODE=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000$page")
    if [ "$CODE" = "200" ]; then
        echo -e "${GREEN}✓ $page: OK${NC}"
    else
        echo -e "${RED}✗ $page: HTTP $CODE${NC}"
        ALL_OK=false
    fi
done

echo -e "\n=========================================="
if [ "$ALL_OK" = true ]; then
    echo -e "${GREEN}  ALL CHECKS PASSED ✓${NC}"
else
    echo -e "${RED}  SOME CHECKS NEED ATTENTION${NC}"
fi
echo "=========================================="
