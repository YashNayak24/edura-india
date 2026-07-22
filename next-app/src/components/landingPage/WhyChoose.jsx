"use client";
import { useState } from "react";

const IcoRocket = ({ s, size = 24 }) => <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={s} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.5-2 4-2 4s2.5-.5 4-2l7.5-7.5-2-2-7.5 7.5z" /><path d="M20 4s-5 0-8 3l-1.5 1.5 2 2L14 9c3-3 6-5 6-5z" /><circle cx="15" cy="9" r="1" fill={s} stroke="none" /></svg>;
const IcoBrain = ({ s, size = 24 }) => <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={s} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>;
const IcoTrack = ({ s, size = 24 }) => <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={s} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="6" height="18" rx="1" /><rect x="9" y="8" width="6" height="13" rx="1" /><rect x="16" y="5" width="6" height="16" rx="1" /></svg>;
const IcoMentor = ({ s, size = 24 }) => <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={s} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>;
const IcoPortfolio = ({ s, size = 24 }) => <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={s} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>;
const IcoCareer = ({ s, size = 24 }) => <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={s} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>;

export default function WhyChoose({ onEnquiryClick }) {
  const [hov, setHov] = useState(null);

  const card = (id, extra = {}) => ({
    onMouseEnter: () => setHov(id),
    onMouseLeave: () => setHov(null),
    className: `wlh-card wlh-card-${id} rounded-3xl overflow-hidden border transition-all duration-250 cursor-default`,
    style: {
      boxShadow: hov === id ? '0 12px 40px rgba(0,0,0,0.08)' : '0 2px 12px rgba(0,0,0,0.04)',
      transform: hov === id ? 'translateY(-4px)' : 'translateY(0)',
      ...extra,
    },
  });
  //linear-gradient(160deg,#ffffff 0%,#f4f7ff 45%,#eaf0ff 100%)
  return (
    <section className="relative py-16 lg:py-28 overflow-hidden" style={{ background: '#f5f8ff' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');
        .wlh{font-family:'Sora',sans-serif;}
        @keyframes wlhp{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(1.35)}}
        .wlh-p{animation:wlhp 2s ease-in-out infinite}

        /* ── Bento Grid ── */
        .wlh-bento {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1rem;
        }

        /* Desktop spans (default) */
        .wlh-card-A { grid-column: span 5; }
        .wlh-card-B { grid-column: span 4; }
        .wlh-card-C { grid-column: span 3; }
        .wlh-card-D { grid-column: span 4; }
        .wlh-card-E { grid-column: span 4; }
        .wlh-card-F { grid-column: span 4; }
        .wlh-card-G { grid-column: span 6; }
        .wlh-card-H { grid-column: span 6; }

        /* Tablet: 768px – two-column feel */
        @media (max-width: 1023px) and (min-width: 640px) {
          .wlh-bento {
            grid-template-columns: repeat(2, 1fr);
          }
          .wlh-card-A { grid-column: span 1; }
          .wlh-card-B { grid-column: span 1; }
          .wlh-card-C { grid-column: span 2; }
          .wlh-card-D { grid-column: span 1; }
          .wlh-card-E { grid-column: span 1; }
          .wlh-card-F { grid-column: span 2; }
          .wlh-card-G { grid-column: span 1; }
          .wlh-card-H { grid-column: span 1; }
        }

        /* Mobile: single column */
        @media (max-width: 639px) {
          .wlh-bento {
            grid-template-columns: 1fr;
          }
          .wlh-card-A,
          .wlh-card-B,
          .wlh-card-C,
          .wlh-card-D,
          .wlh-card-E,
          .wlh-card-F,
          .wlh-card-G,
          .wlh-card-H {
            grid-column: span 1;
          }
        }
      `}</style>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(9,78,147,0.04) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(9,78,147,0.06),transparent 65%)' }} />

      <div className="wlh max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-9 relative z-10">

        {/* ── HEADER ── */}
        <div className="text-center mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-1.5 rounded-full text-[11.5px] font-bold uppercase tracking-wide border bg-white" style={{ borderColor: '#DDE5F8', color: '#094E93' }}>
            <span className="wlh-p w-2 h-2 rounded-full" style={{ background: '#22c55e' }} />
            Batch · Seats Filling Fast
          </div>
          <h2 className="font-extrabold leading-[1.1] tracking-tight mb-4" style={{ fontSize: 'clamp(26px,4vw,54px)', color: '#0D1E42' }}>
            Why Students Choose{" "}
            <span style={{ color: '#094E93' }}>Edura</span>{" "}
            <span className="inline sm:block">to Build Their Career</span>
          </h2>
          <p className="text-[14px] sm:text-[15px] leading-[1.85] max-w-xl mx-auto" style={{ color: '#5A6A8A' }}>
            8 job-ready tracks · real mentors · real projects · placement support till hired
          </p>
        </div>

        {/* ── BENTO GRID ── */}
        <div className="wlh-bento mb-5">

          {/* A — Hero */}
          <div {...card('A', { borderColor: '#DDE5F8', background: 'linear-gradient(145deg,#094E93 0%,#0A5FAD 60%,#2471C1 100%)' })}>
            <div className="relative p-7 lg:p-8 h-full flex flex-col justify-between min-h-[240px]">
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px,transparent 1px)', backgroundSize: '22px 22px' }} />
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(255,255,255,0.08),transparent 65%)', transform: 'translate(30%,-30%)' }} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  <IcoRocket s="white" size={22} />
                </div>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full mb-3" style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)' }}>🚀 Bilkul Zero Se Shuru Karo</div>
                <h3 className="text-[18px] sm:text-[20px] font-extrabold leading-tight text-white mb-2">Koi experience nahi? No problem.</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>Hum beginners ke liye bane hain — seedha industry-ready skills, step by step</p>
              </div>
              <div className="relative z-10 flex gap-5 mt-6">
                {[{ v: '125+', l: 'Courses' }, { v: '20K+', l: 'Students' }, { v: 'Free', l: 'Demo Class' }].map((s, i) => (
                  <div key={i}>
                    <div className="text-[22px] font-black leading-none text-white" style={{ letterSpacing: '-0.04em' }}>{s.v}</div>
                    <div className="text-[9px] font-semibold uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* B — Tracks */}
          <div {...card('B', { borderColor: '#bbf7e0', background: 'linear-gradient(135deg,#ECFDF5,#d1fae5)' })}>
            <div className="p-6 lg:p-7 h-full flex flex-col justify-between min-h-[240px]">
              <div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: '#DCFCE7' }}>
                  <IcoTrack s="#059669" size={22} />
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full mb-3 inline-block" style={{ background: '#FEF9C3', color: '#A16207' }}>⭐ Most Popular</span>
                <h3 className="text-[16px] lg:text-[17px] font-extrabold leading-tight mb-2" style={{ color: '#064E3B' }}>8 Career Tracks</h3>
                <p className="text-[12.5px] leading-relaxed" style={{ color: '#065F46' }}>Coding · Designing · Marketing · Stock Market · Video Editing · UI/UX · Data Science · AI Tools</p>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {['💻 Coding', '🎨 Designing', '📱 Marketing', '📈 Stock Market'].map((t, i) => (
                  <span key={i} className="text-[10.5px] font-bold px-2.5 py-1.5 rounded-xl text-center" style={{ background: 'rgba(255,255,255,0.6)', color: '#065F46', border: '1px solid #A7F3D0' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* C — CTA */}
          <div {...card('C', { borderColor: '#FDE68A', background: 'linear-gradient(145deg,#FFFBEB,#FEF3C7)' })}>
            <style>{`
    @keyframes pulse-btn {
      0%, 100% { transform: scale(1); box-shadow: 0 4px 14px rgba(217,119,6,0.3); }
      50% { transform: scale(1.06); box-shadow: 0 6px 20px rgba(217,119,6,0.5); }
    }
    .pulse-enroll {
      animation: pulse-btn 1.8s ease-in-out infinite;
    }
    .pulse-enroll:hover {
      animation: none;
      transform: scale(1.08);
      box-shadow: 0 6px 22px rgba(217,119,6,0.55);
    }
  `}</style>
            <div className="p-6 lg:p-7 h-full flex flex-col justify-between min-h-[240px]">
              <div>
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-[15px] lg:text-[16px] font-extrabold leading-tight mb-2" style={{ color: '#78350F' }}>Not sure where to begin? We'll guide you</h3>
                <p className="text-[12px] leading-relaxed" style={{ color: '#92400E' }}>Free counselling call — we'll suggest the best track for you</p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <button onClick={onEnquiryClick} className="w-full pulse-enroll text-white text-[12.5px] font-bold py-3 rounded-xl transition-all border-0 cursor-pointer" style={{ background: '#D97706', boxShadow: '0 4px 14px rgba(217,119,6,0.3)' }}>
                  Enquiry Now →
                </button>
                <span className="text-center text-[10px] font-medium" style={{ color: '#B45309' }}>No commitment · Completely free Guidance</span>
              </div>
            </div>
          </div>

          {/* D — AI Tools */}
          <div {...card('D', { borderColor: '#DDD6FE', background: 'linear-gradient(135deg,#F5F3FF,#EDE9FE)' })}>
            <div className="p-5 lg:p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white" style={{ boxShadow: '0 2px 8px rgba(124,58,237,0.12)' }}>
                <IcoBrain s="#7C3AED" size={20} />
              </div>
              <div>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full inline-block mb-2" style={{ background: '#EDE9FE', color: '#6D28D9' }}>New 2025</span>
                <div className="text-[14px] font-extrabold mb-1" style={{ color: '#3B0764' }}>AI Tools Integrated</div>
                <div className="text-[12px] leading-relaxed" style={{ color: '#5B21B6' }}>ChatGPT, Midjourney, Canva AI — real AI tools taught in every course, from week one.</div>
              </div>
            </div>
          </div>

          {/* E — Mentors */}
          <div {...card('E', { borderColor: '#FBCFE8', background: 'linear-gradient(135deg,#FFF0F6,#FCE7F3)' })}>
            <div className="p-5 lg:p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white" style={{ boxShadow: '0 2px 8px rgba(219,39,119,0.1)' }}>
                <IcoMentor s="#DB2777" size={20} />
              </div>
              <div>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full inline-block mb-2" style={{ background: '#FFF0F6', color: '#9D174D' }}>1-on-1</span>
                <div className="text-[14px] font-extrabold mb-1" style={{ color: '#831843' }}>Real Industry Mentors</div>
                <div className="text-[12px] leading-relaxed" style={{ color: '#9D174D' }}>45+ working professionals — not theory, they share actual field experience with you.</div>
              </div>
            </div>
          </div>

          {/* F — Checklist */}
          <div {...card('F', { borderColor: '#E8EDF5', background: 'white' })}>
            <div className="p-5 lg:p-6">
              <div className="text-[10px] font-black uppercase tracking-widest mb-4" style={{ color: '#94a3b8' }}>Har course mein milega</div>
              {[['Live + Recorded Classes', 'Flexible timing'], ['Industry Certificate', 'Globally recognized'], ['Real Projects', 'Portfolio ready'], ['WhatsApp Support', 'Direct mentor access']].map(([a, b], i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b last:border-b-0" style={{ borderColor: '#F1F5F9' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#EBF1FF' }}>
                      <svg viewBox="0 0 12 12" width="8" height="8" fill="none" stroke="#094E93" strokeWidth="2.5" strokeLinecap="round"><polyline points="2,6 5,9 10,3" /></svg>
                    </div>
                    <span className="text-[12px] font-semibold" style={{ color: '#0D1E42' }}>{a}</span>
                  </div>
                  <span className="text-[10.5px] font-medium ml-2 text-right" style={{ color: '#94a3b8' }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* G — Career */}
          <div {...card('G', { borderColor: '#C7D2FE', background: 'linear-gradient(135deg,#EEF2FF,#E0E7FF)' })}>
            <div className="p-6 lg:p-7 flex items-center gap-5">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'white', boxShadow: '0 4px 16px rgba(9,78,147,0.15)' }}>
                <IcoCareer s="#094E93" size={26} />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full inline-block mb-2" style={{ background: '#EEF2FF', color: '#094E93' }}>100% Guaranteed</span>
                <div className="text-[15px] lg:text-[17px] font-extrabold mb-1.5" style={{ color: '#1E1B4B' }}>Career support until you're hired</div>
                <div className="text-[12px] lg:text-[12.5px] leading-relaxed" style={{ color: '#4338CA' }}>Resume prep, mock interviews, direct referrals — we don't stop until you land the offer.
                  .</div>
              </div>
            </div>
          </div>

          {/* H — Portfolio */}
          <div {...card('H', { borderColor: '#BBF7D0', background: 'linear-gradient(135deg,#F0FDF4,#DCFCE7)' })}>
            <div className="p-6 lg:p-7 flex items-center gap-5">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'white', boxShadow: '0 4px 16px rgba(22,163,74,0.12)' }}>
                <IcoPortfolio s="#16A34A" size={26} />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full inline-block mb-2" style={{ background: '#DCFCE7', color: '#166534' }}>Project-Based</span>
                <div className="text-[15px] lg:text-[17px] font-extrabold mb-1.5" style={{ color: '#14532D' }}>Real portfolio from day one</div>
                <div className="text-[12px] lg:text-[12.5px] leading-relaxed" style={{ color: '#15803D' }}>8+ live projects per track. Graduate with a portfolio that speaks louder than any certificate.</div>
              </div>
            </div>
          </div>

        </div>



      </div>
    </section>
  );
}