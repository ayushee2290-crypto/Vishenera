# Vishenera Technologies Website

<div align="center">

![Vishenera Logo](https://img.shields.io/badge/Vishenera-Technologies-0ea5e9?style=for-the-badge)

**Engineering Intelligent Cloud & Digital Transformation**

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

[🌐 Live Website](https://vishenera.com) | [📖 Documentation](docs/) | [📧 Contact](https://vishenera.com/contact)

</div>

---

## 🚀 About Vishenera Technologies

Vishenera Technologies is a premier IT services company specializing in:

- ☁️ **CloudOps** - Cloud infrastructure management & optimization
- 🗄️ **DBOps** - Database operations & performance tuning
- 🚀 **AppOps** - Application deployment & CI/CD pipelines
- 📊 **Observability** - Monitoring, logging & alerting solutions
- 🤖 **AI Automation** - Intelligent chatbots & workflow automation
- 🔄 **Digital Transformation** - End-to-end enterprise modernization

---

## 📁 Project Structure

\`\`\`
vishenera/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/                # API routes
│   │   │   └── contact/        # Contact form API
│   │   ├── services/           # Services pages
│   │   ├── products/           # Products page
│   │   ├── industries/         # Industries page
│   │   ├── contact/            # Contact page
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Homepage
│   │
│   ├── components/
│   │   ├── layout/             # Navbar, Footer
│   │   ├── sections/           # Hero, Services, Products, etc.
│   │   └── ui/                 # ChatBot, Button components
│   │
│   └── lib/                    # Utility functions
│
├── docs/                       # Documentation
│   ├── ARCHITECTURE_DIAGRAM.md
│   ├── CLOUDFLARE_TUNNEL_SETUP.md
│   ├── OPERATIONS_MANUAL.md
│   └── SALES_PITCH_USECASES.md
│
├── scripts/                    # Operational scripts
│   ├── health-check.sh
│   └── backup.sh
│
├── docker-compose.yml          # Docker orchestration
├── Dockerfile                  # Container build
├── .env.example                # Environment template
└── README.md                   # This file
\`\`\`

---

## 🛠️ Quick Start

### Prerequisites

- Docker & Docker Compose
- Git

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/vishenera.git
   cd vishenera
   \`\`\`

2. **Configure environment**
   \`\`\`bash
   cp .env.example .env.local
   # Edit .env.local with your credentials
   \`\`\`

3. **Start the application**
   \`\`\`bash
   docker-compose up -d
   \`\`\`

4. **Access the website**
   \`\`\`
   http://localhost:3000
   \`\`\`

---

## 🐳 Docker Deployment

### Build and Run

\`\`\`bash
# Build and start all services
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop services
docker-compose down
\`\`\`

### Services

| Service | Container Name | Port | Description |
|---------|---------------|------|-------------|
| Website | vishenera-website | 3000 | Next.js web application |
| Tunnel | vishenera-cloudflared | - | Cloudflare secure tunnel |

---

## 🔒 Cloudflare Tunnel Setup

For secure public access without exposing ports:

1. Create a tunnel at [Cloudflare Zero Trust](https://one.dash.cloudflare.com/)
2. Copy the tunnel token
3. Add to \`.env.local\`:
   \`\`\`
   CF_TUNNEL_TOKEN=your-token-here
   \`\`\`
4. Restart services:
   \`\`\`bash
   docker-compose up -d
   \`\`\`

See [Cloudflare Tunnel Setup Guide](docs/CLOUDFLARE_TUNNEL_SETUP.md) for details.

---

## 📧 Contact Form Notifications

Contact form submissions are sent to:
- neeraj.vishen@gmail.com
- ayushee2290@gmail.com

### SMTP Configuration

1. Configure Gmail App Password
2. Add to \`.env.local\`:
   \`\`\`
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   \`\`\`
3. Rebuild: \`docker-compose up -d --build\`

---

## 📊 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Email | Nodemailer |
| Container | Docker |
| Tunnel | Cloudflare |

---

## 📖 Documentation

| Document | Description |
|----------|-------------|
| [Architecture Diagram](docs/ARCHITECTURE_DIAGRAM.md) | System architecture & data flows |
| [Operations Manual](docs/OPERATIONS_MANUAL.md) | Day-to-day operations guide |
| [Sales Pitch](docs/SALES_PITCH_USECASES.md) | Use cases & business scenarios |
| [Cloudflare Setup](docs/CLOUDFLARE_TUNNEL_SETUP.md) | Tunnel configuration guide |

---

## 🔧 Operational Scripts

\`\`\`bash
# Health check
./scripts/health-check.sh

# Backup
./scripts/backup.sh
\`\`\`

---

## 🏷️ Version

**Current Version:** v1.0.0 (vishenrafirstversion)

---

## 📄 License

Copyright © 2026 Vishenera Technologies. All rights reserved.

This software is proprietary and confidential.

---

## 📞 Contact

- **Website:** [vishenera.com](https://vishenera.com)
- **Email:** contact@vishenera.com
- **Support:** support@vishenera.com

---

<div align="center">

**Built with ❤️ by Vishenera Technologies**

*Engineering Intelligent Cloud & Digital Transformation*

</div>
