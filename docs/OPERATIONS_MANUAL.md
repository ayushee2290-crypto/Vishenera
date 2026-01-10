# Vishenera Technologies - Operations Manual

## Daily Operations Guide

This document provides day-to-day operational procedures for managing the Vishenera Technologies website and infrastructure.

---

## Table of Contents

1. [Quick Start Commands](#quick-start-commands)
2. [Daily Health Checks](#daily-health-checks)
3. [Common Operations](#common-operations)
4. [Monitoring & Alerts](#monitoring--alerts)
5. [Troubleshooting Guide](#troubleshooting-guide)
6. [Backup & Recovery](#backup--recovery)
7. [Security Operations](#security-operations)
8. [Contact Form Management](#contact-form-management)
9. [Update & Deployment](#update--deployment)
10. [Emergency Procedures](#emergency-procedures)

---

## Quick Start Commands

### Essential Commands Reference Card

```bash
# ========================================
# DOCKER OPERATIONS
# ========================================

# Start all services
cd /opt/vishenera
docker-compose up -d

# Stop all services
docker-compose down

# Restart all services
docker-compose restart

# View service status
docker-compose ps

# View logs (all services)
docker-compose logs -f

# View logs (specific service)
docker-compose logs -f vishenera-web
docker-compose logs -f cloudflared

# Rebuild and restart (after code changes)
docker-compose up -d --build

# ========================================
# HEALTH CHECKS
# ========================================

# Check if website is responding
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000

# Check all pages
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/services
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/products
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/contact

# Check container health
docker inspect --format='{{.State.Health.Status}}' vishenera-website

# ========================================
# RESOURCE MONITORING
# ========================================

# Check container resource usage
docker stats --no-stream

# Check disk space
df -h

# Check memory usage
free -h

# ========================================
# GIT OPERATIONS
# ========================================

# Pull latest changes
git pull origin main

# View recent commits
git log --oneline -10

# Check current branch
git branch -v
```

---

## Daily Health Checks

### Morning Checklist ☀️

Perform these checks at the start of each business day:

```
□ 1. Website Accessibility Check
     Command: curl -I https://vishenera.com
     Expected: HTTP 200 OK

□ 2. Container Status
     Command: docker-compose ps
     Expected: All services "Up" and "healthy"

□ 3. Disk Space Check
     Command: df -h /opt/vishenera
     Alert if: Usage > 80%

□ 4. Memory Usage
     Command: free -h
     Alert if: Available < 1GB

□ 5. Recent Logs Review
     Command: docker-compose logs --tail 50
     Look for: Errors, warnings, unusual patterns

□ 6. Cloudflare Tunnel Status
     Location: Cloudflare Dashboard > Zero Trust > Tunnels
     Expected: Status "HEALTHY" (green)

□ 7. Contact Form Test (Weekly)
     Action: Submit test form
     Verify: Email received by notification addresses
```

### Automated Health Check Script

Create this script at `/opt/vishenera/scripts/health-check.sh`:

```bash
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
    echo -e "${YELLOW}! vishenera-cloudflared: $TUNNEL_STATUS${NC}"
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
ERROR_COUNT=$(docker-compose logs --tail 100 2>&1 | grep -ci "error")
if [ "$ERROR_COUNT" -eq 0 ]; then
    echo -e "${GREEN}✓ No errors in recent logs${NC}"
else
    echo -e "${YELLOW}! Found $ERROR_COUNT error(s) in recent logs${NC}"
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
    echo -e "${GREEN}  ALL CHECKS PASSED${NC}"
else
    echo -e "${RED}  SOME CHECKS FAILED${NC}"
fi
echo "=========================================="
```

---

## Common Operations

### Starting the Website

```bash
# Navigate to project directory
cd /opt/vishenera

# Start all services in background
docker-compose up -d

# Verify services are running
docker-compose ps

# Check logs for successful startup
docker-compose logs --tail 20
```

### Stopping the Website

```bash
# Graceful shutdown
docker-compose down

# Force stop (if needed)
docker-compose down --timeout 10
```

### Restarting Services

```bash
# Restart all services
docker-compose restart

# Restart specific service
docker-compose restart vishenera-web

# Full restart (rebuild)
docker-compose down && docker-compose up -d --build
```

### Viewing Logs

```bash
# View all logs (follow mode)
docker-compose logs -f

# View last 100 lines
docker-compose logs --tail 100

# View specific service logs
docker-compose logs -f vishenera-web

# View logs with timestamps
docker-compose logs -f -t

# Search logs for errors
docker-compose logs | grep -i error

# Search logs for specific text
docker-compose logs | grep "contact"
```

### Checking Resource Usage

```bash
# Container CPU and memory usage
docker stats --no-stream

# Detailed container info
docker inspect vishenera-website

# Docker disk usage
docker system df

# Clean up unused Docker resources
docker system prune -f
```

---

## Monitoring & Alerts

### Key Metrics to Monitor

| Metric | Normal Range | Warning | Critical |
|--------|--------------|---------|----------|
| Website Response Time | < 500ms | 500-1000ms | > 1000ms |
| HTTP Status | 200 | 4xx | 5xx |
| Container Memory | < 512MB | 512-1024MB | > 1024MB |
| Container CPU | < 50% | 50-80% | > 80% |
| Disk Usage | < 70% | 70-90% | > 90% |
| Log Error Rate | 0 | 1-5/hour | > 5/hour |

### Setting Up Alerts (Optional)

For advanced monitoring, consider these options:

1. **Cloudflare Health Checks**
   - Navigate to: Cloudflare Dashboard > Traffic > Health Checks
   - Add endpoint: https://vishenera.com
   - Alert on: 3 consecutive failures

2. **Uptime Robot (Free)**
   - Sign up at: https://uptimerobot.com
   - Add monitor: HTTPS://vishenera.com
   - Alert via: Email, Slack, or SMS

3. **Grafana + Prometheus (Advanced)**
   - For detailed metrics and dashboards
   - Requires additional setup

---

## Troubleshooting Guide

### Problem: Website Not Accessible

```bash
# Step 1: Check if containers are running
docker-compose ps

# Step 2: Check container logs
docker-compose logs --tail 50 vishenera-web

# Step 3: Test local access
curl -I http://localhost:3000

# Step 4: Check Cloudflare tunnel
docker-compose logs --tail 20 cloudflared

# Step 5: Restart services
docker-compose restart
```

### Problem: Slow Website Performance

```bash
# Check container resource usage
docker stats --no-stream

# Check for memory issues
free -h

# Check disk I/O
iostat -x 1 5

# Check for many error logs (can slow down)
docker-compose logs --tail 500 | grep -c error

# Rebuild if needed
docker-compose up -d --build --force-recreate
```

### Problem: Container Won't Start

```bash
# Check detailed error
docker-compose logs vishenera-web

# Check Docker daemon
sudo systemctl status docker

# Remove and recreate container
docker-compose rm -f vishenera-web
docker-compose up -d vishenera-web

# Full reset (last resort)
docker-compose down -v
docker-compose up -d --build
```

### Problem: Cloudflare Tunnel Disconnected

```bash
# Check tunnel logs
docker logs vishenera-cloudflared

# Verify tunnel token is set
echo $CF_TUNNEL_TOKEN

# Restart tunnel
docker-compose restart cloudflared

# Check Cloudflare dashboard for tunnel status
# https://one.dash.cloudflare.com/ > Networks > Tunnels
```

### Problem: Contact Form Not Sending Emails

```bash
# Check if SMTP is configured
grep SMTP /opt/vishenera/.env.local

# Check API logs for errors
docker-compose logs --tail 100 vishenera-web | grep -i contact

# Test with curl
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test","email":"test@test.com","message":"Test message"}'
```

---

## Backup & Recovery

### What to Backup

```
Priority 1 (Critical):
├── /opt/vishenera/.env.local          # Environment secrets
├── /opt/vishenera/docker-compose.yml  # Container config
└── /opt/vishenera/                    # All source code

Priority 2 (Important):
├── Cloudflare Tunnel token            # Store securely
└── SMTP credentials                    # Store securely
```

### Backup Script

Create `/opt/vishenera/scripts/backup.sh`:

```bash
#!/bin/bash

# Vishenera Backup Script

BACKUP_DIR="/opt/backups/vishenera"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/vishenera_backup_$DATE.tar.gz"

# Create backup directory
mkdir -p $BACKUP_DIR

# Create backup
tar -czf $BACKUP_FILE \
    --exclude='node_modules' \
    --exclude='.next' \
    --exclude='.git' \
    /opt/vishenera/

echo "Backup created: $BACKUP_FILE"

# Keep only last 7 backups
ls -t $BACKUP_DIR/vishenera_backup_*.tar.gz | tail -n +8 | xargs -r rm

echo "Cleanup complete. Current backups:"
ls -lh $BACKUP_DIR/
```

### Recovery Procedure

```bash
# 1. Stop current services
cd /opt/vishenera
docker-compose down

# 2. Backup current state (just in case)
mv /opt/vishenera /opt/vishenera.old

# 3. Extract backup
tar -xzf /opt/backups/vishenera/vishenera_backup_XXXXXX.tar.gz -C /opt/

# 4. Restore environment file
# Copy .env.local from secure storage

# 5. Rebuild and start
cd /opt/vishenera
docker-compose up -d --build

# 6. Verify everything works
./scripts/health-check.sh
```

---

## Security Operations

### Regular Security Tasks

**Weekly:**
- Review Cloudflare security events
- Check for failed login attempts (if auth enabled)
- Review access logs for suspicious patterns

**Monthly:**
- Update Docker images
- Review and rotate credentials if needed
- Check for package vulnerabilities

### Update Docker Images

```bash
# Pull latest base images
docker pull node:20-alpine
docker pull cloudflare/cloudflared:latest

# Rebuild with latest images
docker-compose build --no-cache
docker-compose up -d
```

### Check for Vulnerabilities

```bash
# Scan Docker image
docker scout quickview vishenera-vishenera-web:latest

# Or use Trivy (if installed)
trivy image vishenera-vishenera-web:latest
```

---

## Contact Form Management

### Notification Recipients

Contact form submissions are sent to:
- **neeraj.vishen@gmail.com**
- **ayushee2290@gmail.com**

### Changing Recipients

1. Edit the API route:
```bash
nano /opt/vishenera/src/app/api/contact/route.ts
```

2. Find and update:
```typescript
const NOTIFICATION_EMAILS = [
  'neeraj.vishen@gmail.com',
  'ayushee2290@gmail.com'
];
```

3. Rebuild and deploy:
```bash
docker-compose up -d --build
```

### Testing Contact Form

```bash
# Send test submission
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "service": "CloudOps",
    "message": "This is a test message"
  }'
```

---

## Update & Deployment

### Deploying Code Changes

```bash
# 1. Navigate to project
cd /opt/vishenera

# 2. Pull latest changes
git pull origin main

# 3. Rebuild and restart
docker-compose up -d --build

# 4. Verify deployment
curl -I http://localhost:3000

# 5. Check logs for errors
docker-compose logs --tail 50
```

### Rollback Procedure

```bash
# 1. Find previous working commit
git log --oneline -10

# 2. Checkout previous version
git checkout <commit-hash>

# 3. Rebuild
docker-compose up -d --build

# 4. Verify
./scripts/health-check.sh
```

---

## Emergency Procedures

### Website Down - Quick Recovery

```bash
# Quick restart (try first)
docker-compose restart

# If that fails, full restart
docker-compose down
docker-compose up -d

# If still failing, rebuild
docker-compose down
docker-compose up -d --build --force-recreate
```

### Emergency Contacts

| Role | Contact | When to Call |
|------|---------|--------------|
| Primary Admin | neeraj.vishen@gmail.com | Any critical issue |
| Backup Admin | ayushee2290@gmail.com | If primary unavailable |

### Escalation Matrix

| Severity | Response Time | Examples |
|----------|---------------|----------|
| Critical | 15 minutes | Complete outage, data breach |
| High | 1 hour | Partial outage, major feature broken |
| Medium | 4 hours | Minor feature issues, slow performance |
| Low | Next business day | UI bugs, non-urgent improvements |

---

## Command Reference Quick Card

Print this and keep it handy:

```
┌──────────────────────────────────────────────────────────────┐
│             VISHENERA QUICK COMMAND REFERENCE                │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  START:      docker-compose up -d                            │
│  STOP:       docker-compose down                             │
│  RESTART:    docker-compose restart                          │
│  REBUILD:    docker-compose up -d --build                    │
│  STATUS:     docker-compose ps                               │
│  LOGS:       docker-compose logs -f                          │
│  HEALTH:     curl -I http://localhost:3000                   │
│                                                              │
│  PROJECT DIR: /opt/vishenera                                 │
│  ENV FILE:    /opt/vishenera/.env.local                      │
│  LOGS:        docker-compose logs                            │
│                                                              │
│  CLOUDFLARE:  https://one.dash.cloudflare.com                │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

*Document Version: 1.0 | Created: January 10, 2026*
*Last Updated: January 10, 2026*
