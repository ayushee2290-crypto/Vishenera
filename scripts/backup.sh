#!/bin/bash

# Vishenera Backup Script
# Creates compressed backup of the website

BACKUP_DIR="/opt/backups/vishenera"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/vishenera_backup_$DATE.tar.gz"

echo "=========================================="
echo "  VISHENERA BACKUP"
echo "  $(date)"
echo "=========================================="

# Create backup directory
mkdir -p $BACKUP_DIR

echo "Creating backup..."

# Create backup excluding node_modules and build files
tar -czf $BACKUP_FILE \
    --exclude='node_modules' \
    --exclude='.next' \
    --exclude='.git' \
    /opt/vishenera/ 2>/dev/null

if [ $? -eq 0 ]; then
    echo "✓ Backup created: $BACKUP_FILE"
    echo "  Size: $(du -h $BACKUP_FILE | cut -f1)"
else
    echo "✗ Backup failed!"
    exit 1
fi

# Keep only last 7 backups
echo ""
echo "Cleaning up old backups..."
ls -t $BACKUP_DIR/vishenera_backup_*.tar.gz 2>/dev/null | tail -n +8 | xargs -r rm
echo "✓ Cleanup complete"

echo ""
echo "Current backups:"
ls -lh $BACKUP_DIR/vishenera_backup_*.tar.gz 2>/dev/null

echo ""
echo "=========================================="
echo "  BACKUP COMPLETE"
echo "=========================================="
