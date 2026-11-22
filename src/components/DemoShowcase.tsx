import React from "react";

export const DemoShowcase: React.FC = () => {
  return (
    <section id="demos" className="demos-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-emerald" style={{ marginBottom: 12 }}>
            Live Deployments
          </span>
          <h2 className="section-title">Experience Live Demonstrations</h2>
          <p className="section-subtitle">
            Explore active, real-world Wishboard stacks deployed serverless to
            AWS. Jump into attendee posting, live corkboards, and poster
            generation.
          </p>
        </div>

        <div className="demos-grid">
          {/* Demo 1: Lifestyle / Community */}
          <div className="demo-card">
            <div>
              <div className="demo-card-header">
                <span className="demo-icon">🎲</span>
                <span className="badge badge-emerald">Live Stack</span>
              </div>
              <h3 className="demo-title">Lifestyle & Community Meetup</h3>
              <p className="demo-desc">
                Tailored for gaming conventions, cosplay gatherings, fan
                meetups, and local community events. Features interest-based
                identity stickers, casual icebreakers, and room party
                coordination.
              </p>
              <div className="demo-tags">
                <span className="demo-tag">🎲 Tabletop Gaming</span>
                <span className="demo-tag">🎭 Cosplay Photoshoots</span>
                <span className="demo-tag">☕ Social Meetups</span>
                <span className="demo-tag">🍕 Room Parties</span>
              </div>
            </div>

            <div>
              <div style={{ marginBottom: 20 }}>
                <a
                  href="https://demo.wishboards.app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Launch Lifestyle Demo ↗
                </a>
              </div>
              <div className="demo-links-row">
                <span
                  style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}
                >
                  Quick Views:
                </span>
                <div className="demo-sublinks">
                  <a
                    href="https://demo.wishboards.app/display"
                    target="_blank"
                    rel="noreferrer"
                  >
                    📺 Corkboard (/display)
                  </a>
                  <a
                    href="https://demo.wishboards.app/poster"
                    target="_blank"
                    rel="noreferrer"
                  >
                    🪧 Print Posters (/poster)
                  </a>
                  <a
                    href="https://demo.wishboards.app/account"
                    target="_blank"
                    rel="noreferrer"
                  >
                    📬 Wishmail (/account)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Demo 2: Professional / Conference */}
          <div className="demo-card">
            <div>
              <div className="demo-card-header">
                <span className="demo-icon">💼</span>
                <span className="badge badge-cyan">Live Stack</span>
              </div>
              <h3 className="demo-title">Professional & Tech Unconference</h3>
              <p className="demo-desc">
                Engineered for technical conferences, barcamps, and developer
                summits. Features bidirectional role matchmaking (Mentoring ↔
                Seeking Mentor, Hiring ↔ Job Seeking) and Birds-of-a-Feather
                breakout coordination.
              </p>
              <div className="demo-tags">
                <span className="demo-tag">💡 Mentorship Matching</span>
                <span className="demo-tag">💼 Engineering Hiring</span>
                <span className="demo-tag">⚡ Lightning Talks</span>
                <span className="demo-tag">🤝 Birds of a Feather</span>
              </div>
            </div>

            <div>
              <div style={{ marginBottom: 20 }}>
                <a
                  href="https://conference.wishboards.app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Launch Conference Demo ↗
                </a>
              </div>
              <div className="demo-links-row">
                <span
                  style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}
                >
                  Quick Views:
                </span>
                <div className="demo-sublinks">
                  <a
                    href="https://conference.wishboards.app/display"
                    target="_blank"
                    rel="noreferrer"
                  >
                    📺 Corkboard (/display)
                  </a>
                  <a
                    href="https://conference.wishboards.app/poster"
                    target="_blank"
                    rel="noreferrer"
                  >
                    🪧 Print Posters (/poster)
                  </a>
                  <a
                    href="https://conference.wishboards.app/account"
                    target="_blank"
                    rel="noreferrer"
                  >
                    📬 Wishmail (/account)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary exploration: Optional AI comparison + Live Storybook catalog */}
        <div className="demos-secondary-grid">
          <div className="demo-card-secondary">
            <div>
              <div className="demo-card-secondary-header">
                <h3 className="demo-card-secondary-title">
                  Compare with Optional AI Enabled
                </h3>
                <span className="badge badge-amber">Opt-In Demo</span>
              </div>
              <p className="demo-card-secondary-desc">
                Runs the exact same <strong>Lifestyle</strong> event profile as{" "}
                <code>demo.wishboards.app</code>, with the optional Cloud AI
                provider turned on so you can compare human-in-the-loop tag
                suggestions and semantic search side-by-side against the default
                AI-off stack.
              </p>
            </div>
            <div className="demo-card-secondary-actions">
              <a
                href="https://ai.wishboards.app"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-sm"
              >
                Launch AI Comparison Demo ↗
              </a>
              <div className="demo-sublinks">
                <a
                  href="https://ai.wishboards.app/search"
                  target="_blank"
                  rel="noreferrer"
                >
                  🔍 Semantic Search (/search)
                </a>
                <a
                  href="https://wishboards.github.io/wishboard/ai-features/"
                  target="_blank"
                  rel="noreferrer"
                >
                  AI Docs ↗
                </a>
              </div>
            </div>
          </div>

          <div className="demo-card-secondary">
            <div>
              <div className="demo-card-secondary-header">
                <h3 className="demo-card-secondary-title">
                  UI Component Catalog (Storybook)
                </h3>
                <span className="badge badge-cyan">Live Catalog</span>
              </div>
              <p className="demo-card-secondary-desc">
                Inspect real production components (<code>WishCard</code>,{" "}
                <code>WishPreview</code>, <code>IdentityStickers</code>,{" "}
                <code>BottomSheet</code>, <code>WiFiQrCode</code>) across all 4
                theme presets (including WCAG AAA High Contrast), 5 tactile 3x5
                paper tints, and automated accessibility audits.
              </p>
            </div>
            <div className="demo-card-secondary-actions">
              <a
                href="https://wishboards.github.io/wishboard/storybook/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-sm"
              >
                Open Component Catalog ↗
              </a>
              <div className="demo-sublinks">
                <a
                  href="https://wishboards.github.io/wishboard/component-catalog/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Catalog Guide ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
