import React from "react";

export const FeaturePillars: React.FC = () => {
  const features = [
    {
      icon: "🛡️",
      title: "Privacy-First Local Accounts",
      desc: "No apps to install or email harvesting. Attendees can post wishes immediately or use lightweight 3-word passphrase accounts to manage multiple active wishes and receive private Wishmail from matches.",
    },
    {
      icon: "📡",
      title: "100% Disconnected Operation",
      desc: "Convention centers are infamous for dead zones and expensive venue Wi-Fi. The Raspberry Pi kiosk creates its own local Wi-Fi hotspot with an instant captive portal—no internet required.",
    },
    {
      icon: "⚡",
      title: "Intelligent Rules Engine",
      desc: "Powered by a dynamic matching engine that understands complementary connections (mentors ↔ mentees, hiring ↔ job seekers, game masters ↔ players) and identity sticker taxonomies.",
    },
    {
      icon: "📷",
      title: "Physical & Digital Crossover",
      desc: "Bridge paper index cards and live screens. Attendees can scan handwritten 3x5 cards at the kiosk camera using computer vision (OpenCV.js), or type wishes directly from their phone.",
    },
    {
      icon: "📺",
      title: "Big-Screen Kiosk Display",
      desc: "High-contrast split-screen corkboard designed for 1080p and 4K displays. Real-time organic card layout with permanent Wi-Fi onboarding instructions and dynamic font scaling.",
    },
    {
      icon: "💰",
      title: "Zero Ongoing Costs",
      desc: "Host locally for the cost of a Raspberry Pi, or deploy serverless to AWS completely within the Always Free Tier (Lambda, API Gateway, CloudFront, and hosted Turso libSQL).",
    },
    {
      icon: "🎛️",
      title: "Profile-Driven Configuration",
      desc: "Switch event contexts instantly without touching code. Profiles define custom stickers, categories, rules, and seed wishes in simple, version-controlled YAML files.",
    },
    {
      icon: "✨",
      title: "100% Open Source & Auditable",
      desc: "MIT-licensed with zero proprietary SDKs or third-party analytics trackers. Pair programming and fork-friendly tooling with automated quality gates and SonarQube verification.",
    },
  ];

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
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon-wrap">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
