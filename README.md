# wishboards.app

[![Deploy to AWS](https://github.com/wishboards/wishboards.app/actions/workflows/release.yml/badge.svg)](https://github.com/wishboards/wishboards.app/actions/workflows/release.yml)
[![CI](https://github.com/wishboards/wishboards.app/actions/workflows/ci.yml/badge.svg)](https://github.com/wishboards/wishboards.app/actions/workflows/ci.yml)

The official public web presence and live demonstration directory for the **[Wishboard](https://github.com/wishboards/wishboard)** project, hosted at **[wishboards.app](https://wishboards.app)**.

---

## Overview

Wishboard is an open-source, private, and disconnected social connection board engineered for conventions, conferences, unconferences, and community gatherings.

This repository contains the marketing, documentation showcase, and interactive simulator web application for `https://wishboards.app` (and `https://www.wishboards.app`).

### Key Highlights
- **Interactive Product Sandbox:** An engaging, client-side simulator demonstrating attendee wish creation with identity stickers, real-time deterministic rule matching, and kiosk vs. serverless setup comparisons.
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

### Continuous Deployment (CI/CD) & Automated Releases

This repository uses **[release-please](https://github.com/googleapis/release-please)** to maintain automated release changelogs and SemVer tagging. Merging a release pull request automatically initiates the AWS SAM deployment, synchronizes production static assets to S3, and invalidates the CloudFront cache.

---

## Related Repositories

- **[wishboards/wishboard](https://github.com/wishboards/wishboard):** The core open-source application repository (MIT License), containing the Raspberry Pi kiosk image, Express backend, React frontend, and unified deployment CLI.
- **[wishboards/matching-engine](https://github.com/wishboards/matching-engine):** Zero-dependency dynamic identity matchmaking and rules engine (MIT License).
- **[Documentation](https://wishboards.github.io/wishboard/):** Comprehensive guides for event hosts, kiosk hardware, and serverless architectures.

---

## License & Intellectual Property

Copyright © 2026 Peter 'Happy' Thomas / Wishboard Project. All Rights Reserved.

The website code, copywriting, design assets, trademarks, branding, and presentation of `wishboards.app` are proprietary and protected under copyright law. They are not licensed for redistribution or unauthorized commercial reproduction.

The underlying software engines and libraries are independently licensed under the MIT License:
- [`wishboards/wishboard`](https://github.com/wishboards/wishboard/blob/main/LICENSE) (MIT)
- [`wishboards/matching-engine`](https://github.com/wishboards/matching-engine/blob/main/LICENSE) (MIT)
