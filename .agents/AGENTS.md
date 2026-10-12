# Project Style Guidelines & Conventions: wishboards.app

This document outlines the core coding conventions, architectural invariants, git workflows, and content fidelity principles for **wishboards.app**. All autonomous agents and developers working on this repository must adhere to these rules.

---

## 1. Project Context & Purpose

- **Description:** The official public web presence, interactive showcase, and live demonstration directory for the Wishboard ecosystem (`https://wishboards.app` and `https://www.wishboards.app`).
- **Tech Stack:** React 19, TypeScript, Vite, and custom Vanilla CSS.
- **Hosting & Infrastructure:** AWS CloudFront distribution (with Origin Access Control and edge redirect CloudFront Functions) in front of an Amazon S3 static website bucket, provisioned via AWS SAM (`template.yaml`).
- **Intellectual Property:** The website copy, branding, design assets, and domain identity are proprietary (All Rights Reserved), presenting open-source MIT core software (`wishboards/wishboard` and `wishboards/matching-engine`).

---

## 2. Invariant: Fidelity to Shipped Implementation

- **Strict Alignment with Core Software:** The marketing site, interactive demonstrations, sandbox widgets, and public documentation must strictly and faithfully reflect the actual capabilities and architecture of the core Wishboard application and matching engine.
- **Zero Hallucinated Features:** It is strictly forbidden to invent or simulate features (such as synthetic "match confidence percentages", arbitrary "high/low match" tiers, or simulated AI scoring) that do not exist in the matching engine.
- **Rule Engine Accuracy:** All interactive matchmaking demonstrations must faithfully illustrate the actual dynamic rule types (`cross_match`, `acceptance`, `enrichment`, `expansion`, and `exclusion`) and deterministic attribute matching logic documented in the core repository ADRs and `docs/src/content/docs/matching-rules.md`.
- **Truth in Marketing:** The marketing site must never make promises or describe workflows that the actual project doesn't deliver.

---

## 3. Coding & Syntax Conventions

- **Global Accessors:** In TypeScript files, always prefer `globalThis` over `window`, `self`, or `global` to align with environment-agnostic execution and static analysis conventions.
- **Conventional Commits:** Always use conventional commit structures (`feat:`, `fix:`, `refactor:`, `docs:`, `chore:`) for git commits and Pull Request titles.
- **Never Lead a Title with an Emoji:** `release-please` conventional-commits parser requires the type at the very start of the subject. A leading emoji makes the commit unparseable and drops it from the changelog.
- **Pure CSS / Design Tokens:** Use Vanilla CSS design tokens (`src/index.css`) rather than ad-hoc utility frameworks. Maintain sleek dark-mode aesthetics, rich typography (`Outfit` and `Inter`), and subtle, non-distracting micro-animations.

---

## 4. Git, CI/CD & Deployment Workflows

- **Release-Driven Deployments:** Site releases and versioning are managed via `release-please` (`release-please-config.json` and `.release-please-manifest.json`). Merging a release pull request automatically initiates the AWS SAM deployment, synchronizes production static assets to S3, and invalidates the CloudFront cache.
- **Continuous Integration:** The `CI` workflow (`.github/workflows/ci.yml`) runs ESLint, type-checking, and the Vite production build on every push and pull request.
- **Dependency Hygiene:** Dependabot updates are scheduled weekly and grouped by minor/patch versions (`.github/dependabot.yml`).
- **Windows / PowerShell Shell Safety (`--body-file`):** When authoring Pull Request descriptions or issue bodies using the GitHub CLI (`gh`), never pass multiline or markdown strings inline. Always write the text to a temporary scratch file and pass `--body-file <path>` to prevent PowerShell quote/escape corruption.
