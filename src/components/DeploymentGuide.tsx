import React from 'react';

export const DeploymentGuide: React.FC = () => {
  return (
    <section id="deployment" className="deploy-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-amber" style={{ marginBottom: 12 }}>
            Getting Started
          </span>
          <h2 className="section-title">Host a Wishboard for Your Event</h2>
          <p className="section-subtitle">
            Whether you want an offline hardware appliance on the floor or an instant serverless cloud stack, setup takes only a few minutes.
          </p>
        </div>

        <div className="deploy-grid">
          {/* Path 1: Hardware Kiosk */}
          <div className="deploy-box">
            <h3 className="deploy-box-title">
              <span>🍓</span> Raspberry Pi 4 Kiosk
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
              The gold standard for physical conventions. No cloud fees, zero venue Wi-Fi contracts, and complete offline autonomy.
            </p>

            <ol className="deploy-steps-list">
              <li className="deploy-step-item">
                <span className="step-num">1</span>
                <div>
                  <strong>Flash the Raspberry Pi Image</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: 4 }}>
                    Write the pre-configured Wishboard Raspberry Pi OS image to a micro-SD card using Raspberry Pi Imager.
                  </p>
                </div>
              </li>

              <li className="deploy-step-item">
                <span className="step-num">2</span>
                <div>
                  <strong>Connect to Screen & Power</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: 4 }}>
                    Plug the HDMI cable into any 1080p or 4K projector/monitor. Boot the Pi—it automatically opens the full-screen corkboard.
                  </p>
                </div>
              </li>

              <li className="deploy-step-item">
                <span className="step-num">3</span>
                <div>
                  <strong>Attendees Connect & Post</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: 4 }}>
                    Attendees scan the permanent Wi-Fi QR code on the display, join the local access point, and post wishes through the captive portal.
                  </p>
                </div>
              </li>
            </ol>

            <div style={{ marginTop: 24 }}>
              <a
                href="https://wishboards.github.io/wishboard/kiosk/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-sm"
              >
                Read Kiosk Hardware Guide →
              </a>
            </div>
          </div>

          {/* Path 2: AWS Serverless */}
          <div className="deploy-box">
            <h3 className="deploy-box-title">
              <span>☁️</span> AWS Serverless Cloud
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
              Instant zero-maintenance deployment for virtual, hybrid, or multi-venue conferences. Runs entirely in the AWS free tier.
            </p>

            <ol className="deploy-steps-list">
              <li className="deploy-step-item">
                <span className="step-num">1</span>
                <div>
                  <strong>Create a Free Turso Database</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: 4 }}>
                    Create a free hosted SQLite database in seconds:
                  </p>
                  <div className="code-snippet">turso db create my-con-board</div>
                </div>
              </li>

              <li className="deploy-step-item">
                <span className="step-num">2</span>
                <div>
                  <strong>Deploy with the Wishboard CLI</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: 4 }}>
                    Run the automated serverless deploy command:
                  </p>
                  <div className="code-snippet">npx wishboard serverless deploy --profile professional</div>
                </div>
              </li>

              <li className="deploy-step-item">
                <span className="step-num">3</span>
                <div>
                  <strong>Print Wi-Fi & Poster Materials</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: 4 }}>
                    Navigate to <code style={{ color: '#fbbf24' }}>/poster</code> on your deployed stack to generate printable QR signs for your venue.
                  </p>
                </div>
              </li>
            </ol>

            <div style={{ marginTop: 24 }}>
              <a
                href="https://wishboards.github.io/wishboard/serverless/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-sm"
              >
                Read Serverless Deploy Guide →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
