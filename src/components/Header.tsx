import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="brand-logo">
          <svg className="brand-icon" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#1e293b" />
            <rect
              x="5"
              y="7"
              width="22"
              height="18"
              rx="3"
              fill="#fefcf9"
              stroke="#e2d9cc"
              strokeWidth="1.5"
              transform="rotate(-3 16 16)"
            />
            <circle cx="16" cy="9" r="3" fill="#ef4444" />
            <circle cx="16" cy="9" r="1.2" fill="#fca5a5" />
            <line x1="8" y1="14" x2="24" y2="14" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8" y1="18" x2="19" y2="18" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="gradient-text">Wishboard</span>
        </a>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="#sandbox" className="nav-link">
                Interactive Demo
              </a>
            </li>
            <li>
              <a href="#demos" className="nav-link">
                Live Demos
              </a>
            </li>
            <li>
              <a href="#features" className="nav-link">
                Features
              </a>
            </li>
            <li>
              <a href="#deployment" className="nav-link">
                Deploy
              </a>
            </li>
            <li>
              <a
                href="https://wishboards.github.io/wishboard/"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                Docs ↗
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a
            href="https://github.com/wishboards/wishboard"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary btn-sm"
          >
            ★ GitHub
          </a>
          <a href="#demos" className="btn btn-primary btn-sm">
            Explore Demos
          </a>
        </div>
      </div>
    </header>
  );
};
