import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-badge-wrap">
          <span className="badge badge-amber">
            <span>🎲</span> Open Source Connection Board for Conventions &
            Gatherings
          </span>
        </div>

        <h1 className="hero-title">
          The Private, Disconnected Connection Board for{" "}
          <span className="gradient-text-amber">Real-World Events</span>
        </h1>

        <p className="hero-subtitle">
          Bring attendees together without app store downloads or invasive
          tracking. Attendees can post instantly or use optional local
          passphrase accounts to manage multiple wishes and receive private
          Wishmail. Runs 100% offline on a Raspberry Pi kiosk or instantly on an
          AWS serverless stack.
        </p>

        <div className="hero-actions">
          <a href="#demos" className="btn btn-primary">
            Explore Live Demos ↗
          </a>
          <a href="#sandbox" className="btn btn-secondary">
            ⚡ Try Interactive Sandbox
          </a>
          <a
            href="https://wishboards.github.io/wishboard/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            Documentation ↗
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-value">100% Offline</div>
            <div className="stat-label">
              Local Wi-Fi captive portal on Raspberry Pi 4
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-value">Wishmail</div>
            <div className="stat-label">
              Private peer messaging & multi-wish local accounts
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-value">Free Tier</div>
            <div className="stat-label">
              AWS serverless deployment costs $0/month
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-value">Card Scanner</div>
            <div className="stat-label">
              OpenCV camera scanning for handwritten index cards
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
