# Cloudflare Tunnel Setup Guide for Vishenera Technologies

## Overview

This guide walks you through setting up Cloudflare Tunnel for secure public access to your Vishenera website without exposing your server's IP address.

## Prerequisites

- A Cloudflare account (free or paid)
- A domain added to Cloudflare (e.g., vishenera.com)
- The Vishenera website running on Docker

## Step-by-Step Setup

### Step 1: Create a Cloudflare Tunnel

1. **Log in to Cloudflare Dashboard**
   - Go to [https://one.dash.cloudflare.com/](https://one.dash.cloudflare.com/)
   - Sign in with your Cloudflare account

2. **Navigate to Zero Trust**
   - Click on "Zero Trust" in the sidebar
   - If prompted, set up your Zero Trust account (free)

3. **Create a Tunnel**
   - Go to **Networks** → **Tunnels**
   - Click **Create a tunnel**
   - Choose **Cloudflared** as the connector
   - Name your tunnel: `vishenera-website`
   - Click **Save tunnel**

4. **Copy the Tunnel Token**
   - After creating the tunnel, you'll see a token
   - Copy the token that looks like: `eyJhIjoixxxx...`
   - **Keep this token secure!**

### Step 2: Configure the Tunnel Token

1. **Edit the environment file**
   ```bash
   nano /opt/vishenera/.env.local
   ```

2. **Add your tunnel token**
   ```bash
   CF_TUNNEL_TOKEN=eyJhIjoixxxx...your-full-token-here
   ```

3. **Save and exit** (Ctrl+X, Y, Enter)

### Step 3: Configure Public Hostname in Cloudflare

1. **Back in Cloudflare Dashboard**
   - In your tunnel configuration, click **Configure**
   - Go to **Public Hostname** tab
   - Click **Add a public hostname**

2. **Configure the hostname**
   ```
   Subdomain: (leave blank for root domain, or use 'www')
   Domain: vishenera.com
   Path: (leave blank)
   
   Service:
   Type: HTTP
   URL: vishenera-web:3000
   ```

3. **Additional Settings** (recommended)
   ```
   ✅ No TLS Verify (since we're connecting to internal HTTP)
   ```

4. **Save hostname**

### Step 4: Start the Services

1. **Stop current containers**
   ```bash
   cd /opt/vishenera
   docker-compose down
   ```

2. **Rebuild and start with Cloudflare Tunnel**
   ```bash
   docker-compose up -d --build
   ```

3. **Check that both services are running**
   ```bash
   docker-compose ps
   ```
   
   You should see:
   ```
   NAME                    STATUS
   vishenera-website       running (healthy)
   vishenera-cloudflared   running
   ```

4. **Check Cloudflare Tunnel logs**
   ```bash
   docker logs vishenera-cloudflared
   ```
   
   Look for: `Connection registered`

### Step 5: Verify Public Access

1. **Check Cloudflare Dashboard**
   - Go back to Networks → Tunnels
   - Your tunnel should show as **HEALTHY** (green status)

2. **Test public access**
   ```bash
   curl -I https://vishenera.com
   ```
   
   You should see HTTP 200 OK response.

3. **Open in browser**
   - Visit `https://vishenera.com`
   - Your website should be accessible securely!

## Benefits of Cloudflare Tunnel

| Feature | Benefit |
|---------|---------|
| **No exposed ports** | Server's IP is hidden from the internet |
| **Automatic SSL** | Cloudflare provides free SSL certificates |
| **DDoS Protection** | Built-in protection against attacks |
| **Global CDN** | Content served from Cloudflare's edge |
| **Zero Trust Security** | Enterprise-grade access control |
| **No static IP needed** | Works even if your IP changes |

## Troubleshooting

### Tunnel shows "Inactive"
```bash
# Check cloudflared logs
docker logs vishenera-cloudflared

# Verify token is set
docker-compose config | grep TUNNEL_TOKEN
```

### Cannot connect to website
```bash
# Verify website is running
curl http://localhost:3000

# Check network connectivity
docker network inspect vishenera-network
```

### SSL/Certificate errors
- Ensure your domain DNS is proxied through Cloudflare (orange cloud)
- Wait a few minutes for DNS propagation

## Security Recommendations

1. **Enable Access Policies** (Zero Trust → Access → Applications)
   - Restrict access to admin routes
   - Enable MFA for sensitive areas

2. **Enable Web Application Firewall (WAF)**
   - Go to Security → WAF
   - Enable managed rules

3. **Configure Rate Limiting**
   - Protect against abuse
   - Set limits on contact form submissions

## Commands Reference

```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f

# Restart cloudflared only
docker-compose restart cloudflared

# Check tunnel status
docker logs vishenera-cloudflared
```

## Support

For issues with:
- **Cloudflare Tunnel**: [Cloudflare Community](https://community.cloudflare.com/)
- **Vishenera Website**: Contact the development team

---
*Last Updated: January 10, 2026*
