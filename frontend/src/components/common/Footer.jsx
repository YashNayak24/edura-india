// SkillEdge Footer — Fully Responsive (Mobile / Tablet / Desktop)

import logo from '../../assets/footer_logo.png';

const quickLinks = [
  'Home', 'About Us', 'Courses', 'Placement Mastery',
  'Gallery', 'Blogs', 'Contact Us', 'Privacy Policy',
  'Refund Policy', 'Terms & Conditions',
];

const courses = [
  'Basic Computer Course', 'Advanced Computer', 'Graphic Designing',
  'Video Editing', 'Digital Marketing', 'Stock Market Trading',
  'Data Analyst', 'Web Design & Dev', 'C / C++ / Java / Python', 'UI / UX Design',
];

const certs = [
  'Award-Winning Institute',
  'Trusted Since 2015',
  '20,000+ Students',
  '100% Placement Support',
];

const socialLinks = [
  {
    title: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="#FF0000" width="26" height="26">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="#1877F2" width="26" height="26">
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
      </svg>
    ),
  },
  {
    title: 'WhatsApp',
    href: 'https://wa.me/919217489565',
    icon: (
      <svg viewBox="0 0 24 24" fill="#25D366" width="26" height="26">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07a8.17 8.17 0 0 1-2.4-1.49 9.04 9.04 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51H7.8c-.2 0-.52.07-.79.37C6.74 7.75 6 8.43 6 9.9c0 1.48 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.22 1.37.19 1.88.11.57-.08 1.76-.72 2.01-1.42.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.8h-.02a9.76 9.76 0 0 1-4.98-1.37l-.36-.21-3.7.97 1-3.62-.23-.37A9.79 9.79 0 0 1 2.24 12c0-5.4 4.4-9.8 9.82-9.8 2.62 0 5.08 1.02 6.93 2.87a9.75 9.75 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.82 9.8zm8.35-18.15A11.8 11.8 0 0 0 12.03.2C5.49.2.17 5.52.17 12.06c0 2.09.54 4.13 1.58 5.93L.1 23.8l5.94-1.56a11.84 11.84 0 0 0 5.98 1.61h.01C18.57 23.85 23.9 18.53 23.9 12c0-3.16-1.23-6.13-3.5-8.36z" />
      </svg>
    ),
  },
  {
    title: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26">
        <defs>
          <linearGradient id="igF" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F58529" />
            <stop offset="50%" stopColor="#DD2A7B" />
            <stop offset="100%" stopColor="#8134AF" />
          </linearGradient>
        </defs>
        <path fill="url(#igF)" d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12c0-3.2.01-3.58.07-4.85C2.38 3.86 3.9 2.31 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24c3.26 0 3.67-.01 4.95-.07 4.35-.2 6.78-2.62 6.98-6.98C23.99 15.67 24 15.26 24 12c0-3.26-.01-3.67-.07-4.95C23.73 2.7 21.3.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32A6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
      </svg>
    ),
  },
  {
    title: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="#0A66C2" width="26" height="26">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
];

// ─── Responsive CSS injected once ────────────────────────────────────────────
const css = `
    .footer-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.8fr 0.9fr 0.95fr;
      gap: 36px 48px;
      padding-bottom: 44px;
      border-bottom: 1px solid rgba(255,255,255,0.07);
    }

    /* Tablet: 2 columns */
    @media (max-width: 900px) {
      .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 32px 36px;
      }
    }

    /* Mobile: 1 column */
    @media (max-width: 540px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 28px;
      }
    }

    .footer-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 52px 40px 0;
      position: relative;
      z-index: 1;
    }

    @media (max-width: 900px) {
      .footer-inner {
        padding: 44px 28px 0;
      }
    }

    @media (max-width: 540px) {
      .footer-inner {
        padding: 36px 18px 0;
      }
    }

    .footer-bottom {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 17px 0 18px;
    }

    @media (max-width: 540px) {
      .footer-bottom {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        padding: 14px 0 16px;
      }
      .footer-bottom-links {
        flex-wrap: wrap;
        gap: 12px !important;
      }
    }

    .footer-col-brand {
      /* spans full width on tablet only for brand col if needed */
    }

    /* On tablet: brand col spans both columns */
    @media (max-width: 900px) and (min-width: 541px) {
      .footer-col-brand {
        grid-column: 1 / -1;
      }
    }

    .footer-social-link {
      opacity: 1;
      transition: opacity 0.18s, transform 0.18s;
      display: flex;
    }
    .footer-social-link:hover {
      transform: translateY(-2px);
    }

    .footer-nav-link {
      display: flex;
      align-items: center;
      gap: 9px;
      padding: 6.5px 0;
      font-size: 13px;
      font-weight: 500;
      color: rgba(255,255,255,0.42);
      text-decoration: none;
      transition: color 0.18s, padding-left 0.18s;
    }
    .footer-nav-link:hover {
      color: rgba(255,255,255,0.9);
      padding-left: 4px;
    }

    .footer-map-link {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      margin-bottom: 10px;
      background: rgba(245,166,35,0.08);
      border: 1px solid rgba(245,166,35,0.2);
      border-radius: 50px;
      padding: 7px 16px;
      font-size: 12px;
      font-weight: 600;
      color: #F5A623;
      text-decoration: none;
      transition: background 0.2s;
    }
    .footer-map-link:hover {
      background: rgba(245,166,35,0.16);
    }

    .footer-phone-link {
      font-size: 12.5px;
      color: rgba(255,255,255,0.45);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.18s;
    }
    .footer-phone-link:hover {
      color: #F5A623;
    }

    .footer-bottom-policy {
      font-size: 12px;
      color: rgba(255,255,255,0.25);
      font-weight: 500;
      text-decoration: none;
      transition: color 0.18s;
    }
    .footer-bottom-policy:hover {
      color: rgba(255,255,255,0.65);
    }
  `;

export default function Footer() {
  return (
    <>
      <style>{css}</style>

      <footer style={{
        background: 'linear-gradient(160deg,#011e4a 0%,#013a82 55%,#012f6b 100%)',
        fontFamily: "'Plus Jakarta Sans','DM Sans',sans-serif",
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 0,
        transform: 'translateZ(0)',       // 👈 GPU layer isolate karo
        willChange: 'auto',               // 👈 yeh bhi add karo
        isolation: 'isolate',             // 👈 stacking context fix
      }}>
        {/* Dot texture */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, transform: 'translateZ(0)',
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px,transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
        <div style={{
          position: 'absolute', top: -100, right: -100, width: 420, height: 420,
          borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(circle,rgba(29,90,244,0.18),transparent 65%)'
        }} />
        <div style={{
          position: 'absolute', bottom: -60, left: -80, width: 300, height: 300,
          borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(circle,rgba(245,166,35,0.07),transparent 65%)'
        }} />

        {/* Gold accent line */}
        <div style={{ height: 3, background: 'linear-gradient(90deg,#F5A623 0%,#F5A623 30%,rgba(29,90,244,0.6) 60%,transparent 100%)', position: 'relative', zIndex: 1 }} />

        <div className="footer-inner">
          <div className="footer-grid">

            {/* COL 1: Brand */}
            <div className="footer-col-brand">
              <div style={{ marginBottom: 18 }}>
                <img
                  src={logo}
                  alt="EDURA"
                  style={{ height: 52, width: 'auto', objectFit: 'contain', display: 'block' }}
                />
              </div>

              <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.42)', lineHeight: 1.8, marginBottom: 18, maxWidth: 260 }}>
                Edura India is a trusted training institute in Delhi offering job-oriented courses with hands-on training, 100% placement support, and experienced trainers to help you build job-ready skills.              </p>

              {/* Trust badges */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 22 }}>
                {certs.map(c => (
                  <div key={c} style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 8, padding: '6px 12px', fontSize: 11.5, fontWeight: 600, color: 'rgba(255,255,255,0.55)'
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                      stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {c}
                  </div>
                ))}
              </div>

              {/* Social icons */}
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
                {socialLinks.map(s => (
                  <a key={s.title} href={s.href} title={s.title} className="footer-social-link">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* COL 2: Quick Links */}
            <div>
              <h4 style={{
                fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.13em',
                textTransform: 'uppercase', margin: '0 0 16px', paddingBottom: 11, borderBottom: '1px solid rgba(255,255,255,0.07)'
              }}>
                Quick Links
              </h4>
              {quickLinks.map(l => (
                <a key={l} href="#" className="footer-nav-link">
                  <span style={{ width: 5, height: 5, borderRadius: 2, background: 'rgba(245,166,35,0.5)', flexShrink: 0 }} />
                  {l}
                </a>
              ))}
            </div>

            {/* COL 3: Courses */}
            <div>
              <h4 style={{
                fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.13em',
                textTransform: 'uppercase', margin: '0 0 16px', paddingBottom: 11, borderBottom: '1px solid rgba(255,255,255,0.07)'
              }}>
                Our Courses
              </h4>
              {courses.map(c => (
                <a key={c} href="#" className="footer-nav-link">
                  <span style={{ width: 5, height: 5, borderRadius: 2, background: 'rgba(29,144,244,0.5)', flexShrink: 0 }} />
                  {c}
                </a>
              ))}
            </div>

            {/* COL 4: Contact */}
            <div>
              <h4 style={{
                fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.13em',
                textTransform: 'uppercase', margin: '0 0 16px', paddingBottom: 11, borderBottom: '1px solid rgba(255,255,255,0.07)'
              }}>
                Contact Us
              </h4>

              <div style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 12, padding: '16px 18px', marginBottom: 14
              }}>
                {/* Branch label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 12 }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: 6, background: 'rgba(245,166,35,0.12)',
                    border: '1px solid rgba(245,166,35,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Head Office
                  </span>
                </div>

                {/* Address */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 10 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke="rgba(255,255,255,0.28)" strokeWidth="1.75"
                    strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                    B-6/7, Pocket D, Okhla Phase II,<br/>Okhla Industrial Estate,<br/>New Delhi, Delhi 110020
                  </span>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke="rgba(255,255,255,0.28)" strokeWidth="1.75"
                    strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 4.91" />
                  </svg>
                  <a href="tel:+919217489565" className="footer-phone-link">
                    +91 92174 89565
                  </a>
                </div>
              </div>

              {/* Map link */}
              <a
                href="https://maps.google.com/?q=E-89,Block+E,Kalkaji,New+Delhi+110019"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-map-link"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                View on Map
              </a>

              {/* 9+ branches pill */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 50, padding: '7px 16px', fontSize: 12, fontWeight: 600,
                color: 'rgba(255,255,255,0.5)'
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                9+ Associated Branches
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)', fontWeight: 500 }}>
              © 2026 <strong style={{ color: 'rgba(255,255,255,0.48)', fontWeight: 700 }}>Edura India.</strong> All rights reserved.
            </div>
            <div className="footer-bottom-links" style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {['Privacy Policy', 'Terms & Conditions', 'Refund Policy'].map(l => (
                <a key={l} href="#" className="footer-bottom-policy">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}