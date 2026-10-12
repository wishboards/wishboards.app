# wishboards.app

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Deploy to AWS](https://github.com/wishboards/wishboards.app/actions/workflows/deploy.yml/badge.svg)](https://github.com/wishboards/wishboards.app/actions/workflows/deploy.yml)

The official public web presence and live demonstration directory for the **[Wishboard](https://github.com/wishboards/wishboard)** project, hosted at **[wishboards.app](https://wishboards.app)**.

---

## Overview

Wishboard is an open-source, private, and disconnected social connection board engineered for conventions, conferences, unconferences, and community gatherings.

This repository contains the marketing, documentation showcase, and interactive simulator web application for `https://wishboards.app` (and `https://www.wishboards.app`).

### Key Highlights
- **Interactive Product Sandbox:** An engaging, pure-client simulator showing attendee wish creation with identity stickers, real-time complementary role matching, and kiosk vs. serverless setup comparisons.
- **Live Demonstrations Showcase:** Direct directory linking to live production demo stacks:
  - [demo.wishboards.app](https://demo.wishboards.app) — Lifestyle & Community Meetup profile.
  - [conference.wishboards.app](https://conference.wishboards.app) — Professional & Tech Unconference profile.
- **Zero Cloud Costs:** Infrastructure runs 100% within the AWS Always Free Tier via Amazon CloudFront (OAC) and Amazon S3.

---

## Tech Stack & Architecture

- **Frontend:** React 19, TypeScript, Vite.
- **Styling:** Custom Vanilla CSS design system with responsive dark-mode aesthetics and fluid micro-animations.
- **Hosting & CDN:** AWS CloudFront distribution with Origin Access Control (OAC) in front of a private S3 bucket.
- **Edge Routing:** CloudFront Functions for 301 redirection (`www.wishboards.app` → `wishboards.app`) and single-page application routing.
- **DNS & TLS:** Amazon Route 53 alias records paired with AWS Certificate Manager (ACM).

---

## Local Development

```bash
# Clone the repository
git clone https://github.com/wishboards/wishboards.app.git
cd wishboards.app

# Install dependencies
npm install

# Start local development server
npm run dev

# Run production build and type-checking
npm run build

# Run linter
npm run lint
```

---

## AWS Deployment

### Infrastructure as Code (AWS SAM)

The infrastructure is defined in [`template.yaml`](template.yaml). To deploy manually using the AWS SAM CLI:

```bash
# Build the SAM artifacts
sam build

# Deploy to AWS CloudFront + S3
sam deploy --guided
```

### Continuous Deployment (CI/CD)

Pushing changes to the `main` branch automatically triggers the [Deploy to AWS](.github/workflows/deploy.yml) GitHub Actions workflow, which runs linting, building, SAM stack deployment, asset synchronization, and CloudFront cache invalidation.

---

## Related Repositories

- **[wishboards/wishboard](https://github.com/wishboards/wishboard):** The core application repository, containing the Raspberry Pi kiosk image, Express backend, React frontend, and unified deployment CLI.
- **[wishboards/matching-engine](https://github.com/wishboards/matching-engine):** Zero-dependency dynamic identity matchmaking and rules engine.
- **[Documentation](https://wishboards.github.io/wishboard/):** Comprehensive guides for event hosts, kiosk hardware, and serverless architectures.

---

## License

MIT © [Wishboard Contributors](https://github.com/wishboards/wishboard)
