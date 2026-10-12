import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="brand-logo">
          <img
            src="/favicon.svg"
            alt="Wishboard"
            className="brand-icon"
            width="34"
            height="34"
            style={{ borderRadius: 8 }}
          />
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
