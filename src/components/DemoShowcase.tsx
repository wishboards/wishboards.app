import React from 'react';

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
            Explore active, real-world Wishboard stacks deployed serverless to AWS. Jump into attendee posting, live corkboards, and poster generation.
          </p>
        </div>

        <div className="demos-grid">
          {/* Demo 1: Lifestyle / Community */}
          <div className="demo-card">
            <div>
              <div className="demo-card-header">
                <span className="demo-icon">🎪</span>
                <span className="badge badge-emerald">Live Stack</span>
              </div>
              <h3 className="demo-title">Lifestyle & Community Meetup</h3>
              <p className="demo-desc">
                Tailored for gaming conventions, cosplay gatherings, fan meetups, and local community events. Features interest-based identity stickers, casual icebreakers, and room party coordination.
              </p>
              <div className="demo-tags">
                <span className="demo-tag">🎲 Tabletop Gaming</span>
                <span className="demo-tag">📸 Cosplay Photoshoots</span>
                <span className="demo-tag">✨ Social Meetups</span>
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
                  style={{ width: '100%' }}
                >
                  Launch Lifestyle Demo ↗
                </a>
              </div>
              <div className="demo-links-row">
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Quick Views:</span>
                <div className="demo-sublinks">
                  <a href="https://demo.wishboards.app/display" target="_blank" rel="noreferrer">
                    📺 Corkboard (/display)
                  </a>
                  <a href="https://demo.wishboards.app/poster" target="_blank" rel="noreferrer">
                    📄 Print Posters (/poster)
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
                Engineered for technical conferences, barcamps, and developer summits. Features bidirectional role matchmaking (Mentoring ↔ Seeking Mentor, Hiring ↔ Job Seeking) and Birds-of-a-Feather breakout coordination.
              </p>
              <div className="demo-tags">
                <span className="demo-tag">🤝 Mentorship Matching</span>
                <span className="demo-tag">💼 Engineering Hiring</span>
                <span className="demo-tag">⚡ Lightning Talks</span>
                <span className="demo-tag">💬 Birds of a Feather</span>
              </div>
            </div>

            <div>
              <div style={{ marginBottom: 20 }}>
                <a
                  href="https://conference.wishboards.app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Launch Conference Demo ↗
                </a>
              </div>
              <div className="demo-links-row">
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Quick Views:</span>
                <div className="demo-sublinks">
                  <a href="https://conference.wishboards.app/display" target="_blank" rel="noreferrer">
                    📺 Corkboard (/display)
                  </a>
                  <a href="https://conference.wishboards.app/poster" target="_blank" rel="noreferrer">
                    📄 Print Posters (/poster)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
