import React from "react";

const FEATURES: readonly [string, string, string][] = [
  [
    "🛡️",
    "Privacy-First Local Accounts",
    "No apps to install or email harvesting. Attendees can post wishes immediately or use lightweight 3-word passphrase accounts to manage multiple active wishes and receive private Wishmail from matches.",
  ],
  [
    "📡",
    "100% Disconnected Operation",
    "Convention centers are infamous for dead zones and expensive venue Wi-Fi. The Raspberry Pi kiosk creates its own local Wi-Fi hotspot with an instant captive portal—no internet required.",
  ],
  [
    "⚡",
    "Intelligent Rules Engine",
    "Powered by a dynamic matching engine that understands complementary connections (mentors ↔ mentees, hiring ↔ job seekers, game masters ↔ players) and identity sticker taxonomies.",
  ],
  [
    "📷",
    "Physical & Digital Crossover",
    "Bridge paper index cards and live screens. Attendees can scan handwritten 3x5 cards at the kiosk camera using computer vision (OpenCV.js), or type wishes directly from their phone.",
  ],
  [
    "📺",
    "Big-Screen Kiosk Display",
    "High-contrast split-screen corkboard designed for 1080p and 4K displays. Real-time organic card layout with permanent Wi-Fi onboarding instructions and dynamic font scaling.",
  ],
  [
    "💰",
    "Zero Ongoing Costs",
    "Host locally for the cost of a Raspberry Pi, or deploy serverless to AWS completely within the Always Free Tier (Lambda, API Gateway, CloudFront, and hosted Turso libSQL).",
  ],
  [
    "🎛️",
    "Profile-Driven Configuration",
    "Switch event contexts instantly without touching code. Profiles define custom stickers, categories, rules, and seed wishes in simple, version-controlled YAML files.",
  ],
  [
    "✨",
    "100% Open Source & Auditable",
    "MIT-licensed with zero proprietary SDKs or third-party analytics trackers. Pair programming and fork-friendly tooling with automated quality gates and SonarQube verification.",
  ],
] as const;

export const FeaturePillars: React.FC = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-cyan" style={{ marginBottom: 12 }}>
            Engineered for Gatherings
          </span>
          <h2 className="section-title">
            Built for Real-World Event Realities
          </h2>
          <p className="section-subtitle">
            Most event apps demand invasive logins and fail when venue cellular
            towers saturate. Wishboard is architected differently from the
            ground up.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map(([icon, title, desc]) => (
            <div key={title} className="feature-card">
              <div className="feature-icon-wrap">{icon}</div>
              <h3 className="feature-title">{title}</h3>
              <p className="feature-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
