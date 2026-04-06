import { useState } from 'react'

const KF = `
  @keyframes gradFlow {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes shine {
    0%   { left: -100%; }
    100% { left: 200%; }
  }
  @keyframes dotBlink {
    0%,100% { opacity: 1; }
    50%      { opacity: .3; }
  }
  @keyframes floatUp {
    0%,100% { transform: translateY(0px); }
    50%     { transform: translateY(-6px); }
  }
  @keyframes gridFade {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .grad-text {
    background: linear-gradient(90deg,#F5A623 0%,#ffcc55 25%,#F5A623 50%,#e8920a 75%,#F5A623 100%);
    background-size: 300% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradFlow 3s ease-in-out infinite;
  }

  .search-btn-shine {
    position: relative;
    overflow: hidden;
  }
  .search-btn-shine::after {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 60%; height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.22), transparent);
    animation: shine 3s ease infinite;
  }

  .hero-search-input:focus {
    outline: none;
  }
  .hero-search-input::placeholder {
    color: #9ca3af;
  }

  .stat-item {
    position: relative;
    padding-right: 28px;
  }
  .stat-item:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0; top: 50%;
    transform: translateY(-50%);
    width: 1px; height: 28px;
    background: rgba(255,255,255,0.12);
  }

  .hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px;
    border-radius: 100px;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    color: rgba(255,255,255,0.65);
    font-size: 12px;
    font-weight: 500;
    cursor: default;
    transition: background 0.2s, border-color 0.2s;
    white-space: nowrap;
  }
  .hero-tag:hover {
    background: rgba(255,255,255,0.12);
    border-color: rgba(255,255,255,0.22);
    color: rgba(255,255,255,0.9);
  }

  .trust-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: rgba(255,255,255,0.5);
  }
  .trust-badge-dot {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: rgba(255,255,255,0.25);
  }
`

const HERO_STATS = [
  { n: '200+', l: 'Articles' },
  { n: '12',   l: 'Categories' },
  { n: '48K',  l: 'Monthly Readers' },
  { n: '4.9★', l: 'Avg. Rating' },
]

const QUICK_TAGS = ['UI/UX Design', 'Python', 'Google Ads', 'Career Tips', 'Stock Market', 'Freelancing']

export default function BlogHero() {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)

  const handleSearch = () => {
    if (query.trim()) alert(`Searching: "${query}"`)
  }

  return (
    <>
      <style>{KF}</style>

      <section
        className="relative overflow-hidden "
        style={{
          background: 'linear-gradient(160deg, #050E1F 0%, #091B40 30%, #0B2860 55%, #0A3A85 100%)',
          paddingTop: '150px',
          paddingBottom: '80px',
        }}
      >
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none "
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            animation: 'gridFade 1s ease forwards',
          }}
        />

        {/* Top-right glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '700px', height: '700px',
            borderRadius: '50%',
            top: '-200px', right: '-150px',
            background: 'radial-gradient(circle, rgba(25,80,210,0.38) 0%, transparent 65%)',
          }}
        />

        {/* Bottom-left accent glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '400px', height: '400px',
            borderRadius: '50%',
            bottom: '-120px', left: '-60px',
            background: 'radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)',
          }}
        />

        {/* ── MAIN CONTENT — centered ── */}
        <div className="relative z-10 max-w-[760px] mx-auto px-6 sm:px-8 text-center">

          {/* Label pill */}
          <div
            className="inline-flex items-center gap-2 mb-7"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.14)',
              color: 'rgba(255,255,255,0.8)',
              fontSize: '11px',
              fontWeight: 700,
              padding: '6px 16px',
              borderRadius: '100px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            <span
              style={{
                width: 7, height: 7,
                borderRadius: '50%',
                background: '#F5A623',
                flexShrink: 0,
                animation: 'dotBlink 2s ease-in-out infinite',
              }}
            />
            SkillEdge Knowledge Hub
          </div>

          {/* Headline */}
          <h1
            className="font-black text-white mb-5 tracking-[-0.025em]"
            style={{ fontSize: 'clamp(40px, 6vw, 68px)', lineHeight: 1.0 }}
          >
            Learn. Grow.<br />
            <span className="grad-text">Get Placed.</span>
          </h1>

          {/* Subtext */}
          <p
            className="mx-auto mb-10"
            style={{
              fontSize: '16px',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.58)',
              maxWidth: '520px',
            }}
          >
            Insights, tutorials, career tips, and industry trends — written by professionals who've been there. Stay ahead, stay hired.
          </p>

          {/* ── SEARCH BAR ── */}
          <div
            className="relative mx-auto mb-5"
            style={{ maxWidth: '580px' }}
          >
            {/* Outer glow ring when focused */}
            <div
              style={{
                position: 'absolute',
                inset: '-3px',
                borderRadius: '18px',
                background: focused
                  ? 'linear-gradient(90deg, rgba(9,78,147,0.6), rgba(245,166,35,0.3), rgba(9,78,147,0.6))'
                  : 'transparent',
                transition: 'background 0.3s ease',
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                background: focused ? '#ffffff' : 'rgba(255,255,255,0.94)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'background 0.2s ease',
                boxShadow: focused
                  ? '0 16px 48px rgba(0,0,0,0.4)'
                  : '0 8px 32px rgba(0,0,0,0.28)',
              }}
            >
              {/* Search icon inside input */}
              <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '18px', flexShrink: 0 }}>
                <svg
                  viewBox="0 0 24 24"
                  width="18" height="18"
                  fill="none"
                  stroke={focused ? '#094E93' : '#9ca3af'}
                  strokeWidth={2.2}
                  style={{ transition: 'stroke 0.2s' }}
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>

              <input
                type="text"
                value={query}
                className="hero-search-input"
                onChange={e => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
                placeholder="Search articles, tutorials, career tips…"
                style={{
                  flex: 1,
                  padding: '16px 14px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#0A1628',
                  background: 'transparent',
                  border: 'none',
                  fontFamily: 'inherit',
                }}
              />

              {/* Clear button */}
              {query && (
                <button
                  onClick={() => setQuery('')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#9ca3af',
                    fontSize: '18px',
                    flexShrink: 0,
                    fontFamily: 'inherit',
                  }}
                >
                  ×
                </button>
              )}

              {/* Search button */}
              <button
                onClick={handleSearch}
                className="search-btn-shine"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0 24px',
                  background: '#094E93',
                  color: '#fff',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                  fontFamily: 'inherit',
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#073E75'}
                onMouseLeave={e => e.currentTarget.style.background = '#094E93'}
              >
                Search
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Quick tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', alignSelf: 'center', marginRight: '2px' }}>
              Popular:
            </span>
            {QUICK_TAGS.map(tag => (
              <span key={tag} className="hero-tag">{tag}</span>
            ))}
          </div>

          

        </div>
      </section>
    </>
  )
}