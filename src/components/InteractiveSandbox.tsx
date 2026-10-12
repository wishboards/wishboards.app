import React, { useState } from 'react';

interface WishCardData {
  id: string;
  topic: string;
  text: string;
  stickers: string[];
  role: string;
  tilt: number;
}

const INITIAL_CARDS: WishCardData[] = [
  {
    id: '1',
    topic: 'TABLETOP RPG',
    text: 'Looking for 2 players to join a Friday night Call of Cthulhu one-shot! Beginners welcome.',
    stickers: ['🎲 Tabletop', '🌙 Horror'],
    role: 'Game Master',
    tilt: -2.5,
  },
  {
    id: '2',
    topic: 'COSPLAY PHOTO',
    text: 'Freelance photographer looking for Cyberpunk cosplayers for a quick 15-min hall shoot at 3pm!',
    stickers: ['📸 Photo', '🤖 Cyberpunk'],
    role: 'Photographer',
    tilt: 1.8,
  },
  {
    id: '3',
    topic: 'TECH MENTORSHIP',
    text: 'Senior Staff Engineer happy to chat about distributed systems, Rust, or scaling architectures.',
    stickers: ['💼 Systems', '🦀 Rust'],
    role: 'Mentor',
    tilt: -1.2,
  },
  {
    id: '4',
    topic: 'SEEKING MENTOR',
    text: 'Junior frontend dev attending first unconference — would love advice on breaking into systems!',
    stickers: ['💻 Frontend', '🌱 Mentee'],
    role: 'Mentee',
    tilt: 2.2,
  },
];

export const InteractiveSandbox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'writer' | 'matcher' | 'organizer'>('writer');

  // Writer state
  const [wishTopic, setWishTopic] = useState('BOARD GAMES');
  const [wishText, setWishText] = useState('Looking for 2 more players for Root tonight at 8pm in the hotel lobby!');
  const [selectedStickers, setSelectedStickers] = useState<string[]>(['🎲 Board Games', '🦊 Root']);
  const [activeRole, setActiveRole] = useState('Tabletop Gamer');
  const [cards, setCards] = useState<WishCardData[]>(INITIAL_CARDS);
  const [pinnedNotice, setPinnedNotice] = useState(false);

  // Matcher state
  const [selectedScenario, setSelectedScenario] = useState<'mentee' | 'gm' | 'photo'>('mentee');

  const availableRoles = ['Tabletop Gamer', 'Cosplayer', 'Game Master', 'Tech Seeker', 'Mentor'];

  const availableStickers = [
    '🎲 Board Games',
    '🦊 Root',
    '📸 Cosplay',
    '🦀 Rust',
    '💼 Systems',
    '🎮 Video Games',
    '🎨 Artist',
  ];

  const handleToggleSticker = (sticker: string) => {
    setSelectedStickers((prev) =>
      prev.includes(sticker) ? prev.filter((s) => s !== sticker) : [...prev, sticker]
    );
  };

  const handlePinWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wishText.trim()) return;

    const newCard: WishCardData = {
      id: String(globalThis.Date.now()),
      topic: wishTopic || 'COMMUNITY WISH',
      text: wishText,
      stickers: selectedStickers,
      role: activeRole,
      tilt: (Math.random() * 4) - 2,
    };

    setCards((prev) => [newCard, ...prev.slice(0, 4)]);
    setPinnedNotice(true);
    globalThis.setTimeout(() => setPinnedNotice(false), 2500);
  };

  return (
    <section id="sandbox" className="sandbox-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-amber" style={{ marginBottom: 12 }}>
            Interactive Demo
          </span>
          <h2 className="section-title">See Wishboard in Action</h2>
          <p className="section-subtitle">
            Experience the attendee and organizer workflows. Pure client interaction—no tracking, no signup.
          </p>
        </div>

        <div className="sandbox-container">
          <div className="sandbox-tabs">
            <button
              className={`sandbox-tab ${activeTab === 'writer' ? 'active' : ''}`}
              onClick={() => setActiveTab('writer')}
            >
              <span>✍️</span> Attendee: Post a Wish
            </button>
            <button
              className={`sandbox-tab ${activeTab === 'matcher' ? 'active' : ''}`}
              onClick={() => setActiveTab('matcher')}
            >
              <span>🔍</span> Dynamic Rule Matching
            </button>
            <button
              className={`sandbox-tab ${activeTab === 'organizer' ? 'active' : ''}`}
              onClick={() => setActiveTab('organizer')}
            >
              <span>⚡</span> Organizer: 5-Minute Setup
            </button>
          </div>

          <div className="sandbox-panel">
            {activeTab === 'writer' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 1fr) 1.2fr', gap: 36, alignItems: 'start' }}>
                <form onSubmit={handlePinWish} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>
                      Your Persona / Role
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {availableRoles.map((role) => (
                        <button
                          type="button"
                          key={role}
                          onClick={() => setActiveRole(role)}
                          style={{
                            padding: '4px 10px',
                            borderRadius: 6,
                            border: activeRole === role ? '1px solid var(--accent-amber)' : '1px solid var(--border-subtle)',
                            background: activeRole === role ? 'rgba(245, 158, 11, 0.15)' : 'var(--bg-tertiary)',
                            color: activeRole === role ? 'var(--accent-amber-light)' : 'var(--text-secondary)',
                            fontSize: '0.8rem',
                            cursor: 'pointer',
                            fontWeight: activeRole === role ? 600 : 400,
                          }}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>
                      Your Topic
                    </label>
                    <input
                      type="text"
                      value={wishTopic}
                      onChange={(e) => setWishTopic(e.target.value)}
                      placeholder="e.g. BOARD GAMES, COSPLAY, MENTORSHIP"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 8,
                        color: '#fff',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>
                      Wish Description
                    </label>
                    <textarea
                      value={wishText}
                      onChange={(e) => setWishText(e.target.value)}
                      rows={3}
                      placeholder="What are you hoping to find or offer?"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 8,
                        color: '#fff',
                        fontSize: '0.95rem',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 8 }}>
                      Attach Identity Stickers
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {availableStickers.map((sticker) => {
                        const isSelected = selectedStickers.includes(sticker);
                        return (
                          <button
                            type="button"
                            key={sticker}
                            onClick={() => handleToggleSticker(sticker)}
                            style={{
                              padding: '5px 12px',
                              borderRadius: 9999,
                              border: isSelected ? '1px solid var(--accent-amber)' : '1px solid var(--border-subtle)',
                              background: isSelected ? 'rgba(245, 158, 11, 0.18)' : 'var(--bg-tertiary)',
                              color: isSelected ? 'var(--accent-amber-light)' : 'var(--text-secondary)',
                              fontSize: '0.82rem',
                              cursor: 'pointer',
                              fontWeight: isSelected ? 600 : 400,
                              transition: 'all 0.15s ease',
                            }}
                          >
                            {sticker}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 8 }}>
                    <button type="submit" className="btn btn-primary">
                      📍 Pin to Corkboard
                    </button>
                    {pinnedNotice && (
                      <span style={{ color: 'var(--accent-emerald)', fontSize: '0.88rem', fontWeight: 600 }}>
                        ✓ Pinned to live board!
                      </span>
                    )}
                  </div>
                </form>

                {/* Simulated Corkboard */}
                <div>
                  <div style={{ marginBottom: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Simulated Big-Screen Corkboard (Auto-pruning live feed)
                    </span>
                    <button
                      type="button"
                      onClick={() => setCards(INITIAL_CARDS)}
                      style={{ background: 'none', border: 'none', color: 'var(--accent-amber)', fontSize: '0.8rem', cursor: 'pointer' }}
                    >
                      Reset Board
                    </button>
                  </div>
                  <div className="corkboard-preview">
                    {cards.map((c) => (
                      <div
                        key={c.id}
                        className="pin-card"
                        style={{ transform: `rotate(${c.tilt}deg)` }}
                      >
                        <div className="card-pushpin" />
                        <div className="card-topic">{c.topic}</div>
                        <div className="card-body-text">{c.text}</div>
                        <div className="card-stickers-row">
                          {c.stickers.map((s) => (
                            <span key={s} className="card-sticker-tag">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'matcher' && (
              <div>
                <div style={{ maxWidth: 720, margin: '0 auto 28px', textAlign: 'center' }}>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 14 }}>
                    Wishboard uses deterministic, profile-driven rules evaluated directly in SQLite. There are no opaque scoring models or synthetic percentage ratings.
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      Test Rule Scenario:
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedScenario('mentee')}
                      className={`btn btn-sm ${selectedScenario === 'mentee' ? 'btn-primary' : 'btn-secondary'}`}
                    >
                      Cross-Match: Mentee Looking for Mentor
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedScenario('gm')}
                      className={`btn btn-sm ${selectedScenario === 'gm' ? 'btn-primary' : 'btn-secondary'}`}
                    >
                      Attribute Match: #Tabletop Tag
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedScenario('photo')}
                      className={`btn btn-sm ${selectedScenario === 'photo' ? 'btn-primary' : 'btn-secondary'}`}
                    >
                      Cross-Match: Cosplayer ↔ Photographer
                    </button>
                  </div>
                </div>

                <div className="corkboard-preview">
                  {cards.map((c) => {
                    let matchRule: string | null = null;

                    if (selectedScenario === 'mentee') {
                      if (c.role === 'Mentor') {
                        matchRule = 'Rule: cross_match (Mentoring ↔ Mentee)';
                      }
                    } else if (selectedScenario === 'gm') {
                      if (c.stickers.some((s) => s.includes('Tabletop'))) {
                        matchRule = 'Rule: attribute_overlap (Sticker: 🎲 Tabletop)';
                      }
                    } else if (selectedScenario === 'photo') {
                      if (c.role === 'Photographer' || c.stickers.some((s) => s.includes('Photo'))) {
                        matchRule = 'Rule: cross_match (Cosplayer ↔ Photographer)';
                      }
                    }

                    const isMatch = matchRule !== null;

                    return (
                      <div
                        key={c.id}
                        className="pin-card"
                        style={{
                          transform: `rotate(${c.tilt}deg)`,
                          border: isMatch ? '2px solid var(--accent-amber)' : '1px solid var(--card-border)',
                          boxShadow: isMatch ? '0 10px 24px rgba(245, 158, 11, 0.35)' : '0 4px 12px rgba(0,0,0,0.2)',
                          opacity: isMatch ? 1 : 0.45,
                          zIndex: isMatch ? 5 : 1,
                        }}
                      >
                        <div className="card-pushpin" />
                        <div className="card-topic">{c.topic}</div>
                        <div className="card-body-text">{c.text}</div>
                        <div className="card-stickers-row" style={{ marginBottom: isMatch ? 10 : 0 }}>
                          {c.stickers.map((s) => (
                            <span key={s} className="card-sticker-tag">
                              {s}
                            </span>
                          ))}
                        </div>
                        {isMatch && (
                          <div style={{
                            fontSize: '0.74rem',
                            fontWeight: 600,
                            color: '#b45309',
                            background: '#fef3c7',
                            padding: '4px 8px',
                            borderRadius: 4,
                            border: '1px solid #fde68a',
                          }}>
                            ✓ {matchRule}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'organizer' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                <div style={{ background: 'var(--bg-tertiary)', borderRadius: 12, padding: 24, border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <span style={{ fontSize: '1.6rem' }}>🍓</span>
                    <h3 style={{ fontSize: '1.25rem' }}>100% Offline Kiosk (Raspberry Pi)</h3>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: 18 }}>
                    Designed for high-density convention halls with congested or non-existent Wi-Fi and zero cellular reception.
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <li>✓ <strong>Built-in Wi-Fi AP:</strong> Pi creates a dedicated local Wi-Fi network with instant captive portal.</li>
                    <li>✓ <strong>Big-Screen TV Display:</strong> Connect via HDMI for live animated corkboard display.</li>
                    <li>✓ <strong>Thermal Printing:</strong> Optionally connect an Esc/POS printer to print physical wish receipts.</li>
                    <li>✓ <strong>Zero Cloud Dependency:</strong> SQLite database resides directly on SD card.</li>
                  </ul>
                </div>

                <div style={{ background: 'var(--bg-tertiary)', borderRadius: 12, padding: 24, border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <span style={{ fontSize: '1.6rem' }}>☁️</span>
                    <h3 style={{ fontSize: '1.25rem' }}>AWS Serverless Cloud</h3>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: 18 }}>
                    Designed for hybrid events, multi-track conferences, or distributed communities. Deploys in minutes.
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <li>✓ <strong>100% Free Tier:</strong> Hosted Turso libSQL + AWS Lambda + API Gateway + CloudFront.</li>
                    <li>✓ <strong>Real-time WebSockets:</strong> Live synchronizing across thousands of attendee mobile devices.</li>
                    <li>✓ <strong>Custom Domain Ready:</strong> Deploys seamlessly to custom subdomains with automatic TLS.</li>
                    <li>✓ <strong>Ephemeral Auto-Teardown:</strong> Simple CLI cleanup command when the convention ends.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
