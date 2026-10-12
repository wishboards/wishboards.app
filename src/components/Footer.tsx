import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <svg style={{ width: 26, height: 26 }} viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#1e293b" />
                <rect x="5" y="7" width="22" height="18" rx="3" fill="#fefcf9" stroke="#e2d9cc" strokeWidth="1.5" />
                <circle cx="16" cy="9" r="3" fill="#ef4444" />
              </svg>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#fff' }}>Wishboard</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              A private, disconnected social connection board for conventions, conferences, and community gatherings.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4>Live Demos</h4>
            <ul className="footer-links">
              <li>
                <a href="https://demo.wishboards.app" target="_blank" rel="noreferrer">
                  Lifestyle / Community Demo ↗
                </a>
              </li>
              <li>
                <a href="https://conference.wishboards.app" target="_blank" rel="noreferrer">
                  Professional / Conference Demo ↗
                </a>
              </li>
              <li>
                <a href="https://demo.wishboards.app/display" target="_blank" rel="noreferrer">
                  Big-Screen Corkboard (/display) ↗
                </a>
              </li>
              <li>
                <a href="https://demo.wishboards.app/poster" target="_blank" rel="noreferrer">
                  Wi-Fi Sign Generator (/poster) ↗
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4>Documentation</h4>
            <ul className="footer-links">
              <li>
                <a href="https://wishboards.github.io/wishboard/" target="_blank" rel="noreferrer">
                  Overview & Quickstart ↗
                </a>
              </li>
              <li>
                <a href="https://wishboards.github.io/wishboard/kiosk/" target="_blank" rel="noreferrer">
                  Raspberry Pi Kiosk Guide ↗
                </a>
              </li>
              <li>
                <a href="https://wishboards.github.io/wishboard/serverless/" target="_blank" rel="noreferrer">
                  AWS Serverless Architecture ↗
                </a>
              </li>
              <li>
                <a href="https://wishboards.github.io/wishboard/matching-rules/" target="_blank" rel="noreferrer">
                  Dynamic Matchmaking Rules ↗
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4>Open Source</h4>
            <ul className="footer-links">
              <li>
                <a href="https://github.com/wishboards/wishboard" target="_blank" rel="noreferrer">
                  wishboards/wishboard ↗
                </a>
              </li>
              <li>
                <a href="https://github.com/wishboards/matching-engine" target="_blank" rel="noreferrer">
                  wishboards/matching-engine ↗
                </a>
              </li>
              <li>
                <a href="https://github.com/wishboards/wishboards.app" target="_blank" rel="noreferrer">
                  wishboards/wishboards.app ↗
                </a>
              </li>
              <li>
                <a href="https://github.com/wishboards/wishboard/blob/main/LICENSE" target="_blank" rel="noreferrer">
                  MIT License ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new globalThis.Date().getFullYear()} Wishboard Project. All Rights Reserved.</div>
          <div style={{ display: 'flex', gap: 16 }}>
            <span>Privacy-First</span>
            <span>•</span>
            <span>Zero Tracking</span>
            <span>•</span>
            <span>Offline Capable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
