import { useState, useEffect, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom'

// ── Filter icons ──────────────────────────────────────────────────────────────

const IcoGrid = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="1" y="1" width="6" height="6" rx="1" /><rect x="9" y="1" width="6" height="6" rx="1" />
    <rect x="1" y="9" width="6" height="6" rx="1" /><rect x="9" y="9" width="6" height="6" rx="1" />
  </svg>
);
const IcoComputer = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="1" y="2" width="14" height="9" rx="1.5" />
    <line x1="5" y1="14" x2="11" y2="14" />
    <line x1="8" y1="11" x2="8" y2="14" />
  </svg>
);
const IcoDesign = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M2 14l2-6 8-5 1 1-5 8-6 2z" />
    <circle cx="10" cy="6" r="1.5" />
  </svg>
);
const IcoCoding = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polyline points="5,4 1,8 5,12" /><polyline points="11,4 15,8 11,12" />
    <line x1="9" y1="3" x2="7" y2="13" />
  </svg>
);
const IcoMarketing = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M1 8h2l2 4 3-8 2 4h5" />
  </svg>
);
const IcoFinance = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
    <line x1="8" y1="1" x2="8" y2="15" />
    <path d="M11 4H6.5a2.5 2.5 0 000 5h3a2.5 2.5 0 010 5H5" />
  </svg>
);
const IcoData = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
    <ellipse cx="8" cy="4" rx="6" ry="2" />
    <path d="M2 4v4c0 1.1 2.7 2 6 2s6-.9 6-2V4" />
    <path d="M2 8v4c0 1.1 2.7 2 6 2s6-.9 6-2V8" />
  </svg>
);

// ── Course thumb icons ────────────────────────────────────────────────────────

const IcoBasicPC = () => (
  <svg viewBox="0 0 48 48" width="52" height="52" fill="none" stroke="white" strokeWidth="2">
    <rect x="6" y="8" width="36" height="24" rx="3" />
    <rect x="12" y="14" width="24" height="12" rx="1.5" fill="white" fillOpacity="0.2" />
    <line x1="14" y1="36" x2="34" y2="36" />
    <line x1="24" y1="32" x2="24" y2="36" />
    <rect x="10" y="17" width="8" height="3" rx="1" fill="white" fillOpacity="0.5" />
    <rect x="20" y="17" width="14" height="2" rx="1" fill="white" fillOpacity="0.3" />
    <rect x="20" y="21" width="10" height="2" rx="1" fill="white" fillOpacity="0.3" />
  </svg>
);
const IcoAdvPC = () => (
  <svg viewBox="0 0 48 48" width="52" height="52" fill="none" stroke="white" strokeWidth="2">
    <rect x="4" y="6" width="28" height="22" rx="3" />
    <rect x="8" y="10" width="20" height="14" rx="1.5" fill="white" fillOpacity="0.2" />
    <line x1="8" y1="32" x2="20" y2="32" />
    <line x1="14" y1="28" x2="14" y2="32" />
    <rect x="34" y="14" width="12" height="18" rx="2" fill="white" fillOpacity="0.15" />
    <line x1="36" y1="18" x2="44" y2="18" />
    <line x1="36" y1="22" x2="44" y2="22" />
    <line x1="36" y1="26" x2="41" y2="26" />
    <polyline points="10,16 13,20 18,13" strokeWidth="1.8" />
  </svg>
);
const IcoGraphic = () => (
  <svg viewBox="0 0 48 48" width="52" height="52" fill="none" stroke="white" strokeWidth="2">
    <circle cx="24" cy="24" r="16" />
    <circle cx="24" cy="24" r="8" fill="white" fillOpacity="0.15" />
    <line x1="24" y1="8" x2="24" y2="16" />
    <line x1="24" y1="32" x2="24" y2="40" />
    <line x1="8" y1="24" x2="16" y2="24" />
    <line x1="32" y1="24" x2="40" y2="24" />
    <circle cx="24" cy="24" r="3" fill="white" />
    <path d="M16 32 Q20 20 32 16" strokeDasharray="3 2" />
  </svg>
);
const IcoVideo = () => (
  <svg viewBox="0 0 48 48" width="52" height="52" fill="none" stroke="white" strokeWidth="2">
    <rect x="4" y="10" width="30" height="22" rx="3" />
    <polygon points="34,21 44,16 44,32 34,27" fill="white" fillOpacity="0.2" />
    <polygon points="13,16 13,28 23,22" fill="white" fillOpacity="0.6" strokeWidth="0" />
    <line x1="8" y1="36" x2="40" y2="36" strokeDasharray="3 2" />
  </svg>
);
const IcoDigital = () => (
  <svg viewBox="0 0 48 48" width="52" height="52" fill="none" stroke="white" strokeWidth="2">
    <circle cx="24" cy="24" r="14" />
    <path d="M24 10 Q16 18 16 24 Q16 30 24 38" />
    <path d="M24 10 Q32 18 32 24 Q32 30 24 38" />
    <line x1="10" y1="20" x2="38" y2="20" />
    <line x1="10" y1="28" x2="38" y2="28" />
    <polyline points="18,8 24,4 30,8" strokeWidth="1.8" />
  </svg>
);
const IcoStock = () => (
  <svg viewBox="0 0 48 48" width="52" height="52" fill="none" stroke="white" strokeWidth="2">
    <polyline points="6,36 14,24 20,30 28,16 34,22 42,10" strokeWidth="2.2" />
    <line x1="6" y1="38" x2="42" y2="38" />
    <line x1="6" y1="38" x2="6" y2="10" />
    <circle cx="42" cy="10" r="3" fill="white" fillOpacity="0.4" />
    <polyline points="38,6 42,10 38,14" />
  </svg>
);
const IcoDataA = () => (
  <svg viewBox="0 0 48 48" width="52" height="52" fill="none" stroke="white" strokeWidth="2">
    <rect x="6" y="28" width="8" height="14" rx="1.5" fill="white" fillOpacity="0.3" />
    <rect x="18" y="20" width="8" height="22" rx="1.5" fill="white" fillOpacity="0.4" />
    <rect x="30" y="12" width="8" height="30" rx="1.5" fill="white" fillOpacity="0.5" />
    <polyline points="6,26 14,18 22,22 30,10 38,14" strokeWidth="1.8" />
    <circle cx="38" cy="14" r="2.5" fill="white" />
  </svg>
);
const IcoWeb = () => (
  <svg viewBox="0 0 48 48" width="52" height="52" fill="none" stroke="white" strokeWidth="2">
    <rect x="4" y="8" width="40" height="30" rx="3" />
    <line x1="4" y1="16" x2="44" y2="16" />
    <circle cx="10" cy="12" r="2" fill="white" fillOpacity="0.5" />
    <circle cx="17" cy="12" r="2" fill="white" fillOpacity="0.5" />
    <rect x="10" y="22" width="12" height="10" rx="2" fill="white" fillOpacity="0.2" />
    <line x1="26" y1="22" x2="38" y2="22" />
    <line x1="26" y1="26" x2="36" y2="26" />
    <line x1="26" y1="30" x2="34" y2="30" />
  </svg>
);
const IcoCode = () => (
  <svg viewBox="0 0 48 48" width="52" height="52" fill="none" stroke="white" strokeWidth="2">
    <rect x="4" y="8" width="40" height="32" rx="3" />
    <line x1="4" y1="16" x2="44" y2="16" />
    <circle cx="10" cy="12" r="2" fill="white" fillOpacity="0.5" />
    <circle cx="17" cy="12" r="2" fill="white" fillOpacity="0.5" />
    <polyline points="14,24 10,28 14,32" />
    <polyline points="22,24 26,28 22,32" />
    <line x1="17" y1="22" x2="19" y2="34" />
    <polyline points="28,24 34,28 28,32" strokeWidth="1.8" />
  </svg>
);

const thumbIcons = {
  'Basic Computer Course': IcoBasicPC,
  'Advanced Computer Course': IcoAdvPC,
  'Graphic Designing': IcoGraphic,
  'Video Editing': IcoVideo,
  'Digital Marketing': IcoDigital,
  'Stock Market Trading': IcoStock,
  'Data Analyst': IcoDataA,
  'Web Design & Development': IcoWeb,
  'C / C++ / Java / Python': IcoCode,
};

const StarIcon = () => (
  <svg viewBox="0 0 12 12" width="12" height="12" fill="#F5A623">
    <polygon points="6,1 7.5,4.5 11,4.8 8.5,7 9.3,10.5 6,8.8 2.7,10.5 3.5,7 1,4.8 4.5,4.5" />
  </svg>
);

const filters = [
  { key: 'all', label: 'All Courses', Icon: IcoGrid },
  { key: 'computer', label: 'Computer', Icon: IcoComputer },
  { key: 'design', label: 'Design', Icon: IcoDesign },
  { key: 'coding', label: 'Coding', Icon: IcoCoding },
  { key: 'marketing', label: 'Marketing', Icon: IcoMarketing },
  { key: 'finance', label: 'Finance', Icon: IcoFinance },
  { key: 'data', label: 'Data', Icon: IcoData },
];

const courses = [
  { cat: 'computer', bg: 'linear-gradient(135deg,#094E93,#2471C1)', label: 'Computer', labelColor: '#094E93', rating: '4.7', title: 'Basic Computer Course', desc: 'Master the fundamentals — MS Office, internet basics, email, typing, and essential computer operations.', duration: '3 Months', badge: 'BEGINNER', tags: ['MS Office', 'Internet', 'Typing', 'Email'], highlights: ['Beginner Friendly', 'Hands-on Practice', 'Certificate Provided'] },
  { cat: 'computer', bg: 'linear-gradient(135deg,#4F46E5,#818CF8)', label: 'Computer', labelColor: '#4F46E5', rating: '4.8', title: 'Advanced Computer Course', desc: 'Advanced Excel, Tally, accounting software, hardware fundamentals, and networking essentials.', duration: '6 Months', badge: 'ADVANCED', tags: ['Adv. Excel', 'Tally', 'Networking', 'Hardware'], highlights: ['Job-Ready Skills', 'Industry Projects', 'Placement Support'] },
  { cat: 'design', bg: 'linear-gradient(135deg,#7C3AED,#A78BFA)', label: 'Design', labelColor: '#7C3AED', rating: '4.9', title: 'Graphic Designing', desc: 'Master visual storytelling — logos, branding, posters, social media creatives.', duration: '6 Months', badge: 'MOST POPULAR', tags: ['Photoshop', 'Illustrator', 'CorelDRAW', 'InDesign'], highlights: ['Portfolio Building', 'Live Projects', 'Freelance Ready'] },
  { cat: 'design', bg: 'linear-gradient(135deg,#DC2626,#FB923C)', label: 'Design', labelColor: '#DC2626', rating: '4.8', title: 'Video Editing', desc: 'Professional video editing — reels, YouTube content, ads, and cinematic edits using industry-standard tools.', duration: '3 Months', badge: 'TRENDING', tags: ['Premiere Pro', 'DaVinci', 'After Effects'], highlights: ['Reel Creation', 'YouTube Ready', 'Client Projects'] },
  { cat: 'marketing', bg: 'linear-gradient(135deg,#059669,#34D399)', label: 'Marketing', labelColor: '#059669', rating: '4.8', title: 'Digital Marketing', desc: 'Master SEO, social media, Google Ads, and content strategy — become a complete digital marketer.', duration: '4 Months', badge: 'HIGH DEMAND', tags: ['SEO', 'Google Ads', 'Meta Ads', 'Analytics'], highlights: ['100% Placement Help', 'Live Ad Campaigns', 'Agency Exposure'] },
  { cat: 'finance', bg: 'linear-gradient(135deg,#D97706,#FBBF24)', label: 'Finance', labelColor: '#D97706', rating: '4.7', title: 'Stock Market Trading', desc: 'Learn technical analysis, trading strategies, mutual funds, options, and how to manage a real investment portfolio.', duration: '3 Months', badge: 'NEW', tags: ['Technical Analysis', 'Options', 'Mutual Funds'], highlights: ['Live Market Practice', 'Expert Mentors', 'Portfolio Building'] },
  { cat: 'data', bg: 'linear-gradient(135deg,#0D9488,#2DD4BF)', label: 'Data', labelColor: '#0D9488', rating: '4.9', title: 'Data Analyst', desc: 'Master Excel, SQL, Python, Power BI, and Tableau to extract insights and drive data-backed decisions.', duration: '6 Months', badge: 'HOT', tags: ['SQL', 'Power BI', 'Python', 'Tableau'], highlights: ['Real Datasets', 'Dashboard Projects', 'High Salary Scope'] },
  { cat: 'coding design', bg: 'linear-gradient(135deg,#DB2777,#F472B6)', label: 'Coding · Design', labelColor: '#DB2777', rating: '4.9', title: 'Web Design & Development', desc: 'Build stunning responsive websites — UI design in Figma plus full front-end & back-end development.', duration: '8 Months', badge: 'HIGH DEMAND', tags: ['HTML/CSS', 'JavaScript', 'React', 'Figma'], highlights: ['Full Stack Coverage', 'Live Website Projects', 'Placement Support'] },
  { cat: 'coding', bg: 'linear-gradient(135deg,#094E93,#0D9488)', label: 'Coding', labelColor: '#094E93', rating: '4.8', title: 'C / C++ / Java / Python', desc: 'Build strong programming foundations — from C basics to OOPs in Java and data science with Python.', duration: '6 Months', badge: 'ESSENTIAL', tags: ['C / C++', 'Java', 'Python', 'OOPs'], highlights: ['Strong Logic Building', 'Multiple Languages', 'Interview Prep'] },
];

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
    <circle cx="8" cy="8" r="7" fill="#EBF1FF" />
    <polyline points="4.5,8 7,10.5 11.5,5.5" stroke="#094E93" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Courses() {
  const [filter, setFilter] = useState('all');
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const visible = courses.filter(c => filter === 'all' || c.cat.includes(filter));
  const safeIdx = activeIdx >= visible.length ? 0 : activeIdx;
  const current = visible[safeIdx];

  const handleFilter = (key) => { setFilter(key); setActiveIdx(0); };

  const goNext = useCallback(() => setActiveIdx(i => (i + 1) % visible.length), [visible.length]);
  const goPrev = useCallback(() => setActiveIdx(i => (i - 1 + visible.length) % visible.length), [visible.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(goNext, 3500);
    return () => clearInterval(id);
  }, [paused, goNext]);

  const ThumbIcon = thumbIcons[current.title] || IcoBasicPC;

  const scrollToDemo = () => {
    const section = document.getElementById('book-demo');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // setOpen(false); // mobile menu band karne ke liye
  };
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#EBF1FF] border border-[#DDE5F8] text-[#094E93] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-4">
            <svg viewBox="0 0 12 12" width="11" height="11" fill="#094E93">
              <polygon points="6,1 7.5,4.5 11,4.8 8.5,7 9.3,10.5 6,8.8 2.7,10.5 3.5,7 1,4.8 4.5,4.5" />
            </svg>
            Courses We Offer
          </div>
          <h2 className="font-jakarta font-extrabold tracking-tight text-[#0D1E42] mb-3" style={{ fontSize: 'clamp(26px,3.2vw,46px)' }}>
            Skills That Make You <span className="text-[#094E93]">Industry-Ready</span>
          </h2>
          <p className="text-[15px] text-[#5A6A8A] font-medium max-w-[520px] mx-auto leading-[1.7]">
            Our industry-focused curriculum, delivered by industry-trained instructors, boosts your career growth.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => handleFilter(f.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold font-jakarta cursor-pointer transition-all border
                ${filter === f.key
                  ? 'bg-[#094E93] text-white border-[#094E93]'
                  : 'bg-white text-[#5A6A8A] border-[#DDE5F8] hover:border-[#094E93]/30 hover:text-[#094E93] hover:bg-[#EBF1FF]'
                }`}
            >
              <f.Icon />
              {f.label}
            </button>
          ))}
        </div>

        {/* ── Big 2-column card ── */}
        <div className="bg-white border border-[#DDE5F8] rounded-[24px] overflow-hidden shadow-sm"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex flex-col lg:flex-row min-h-[420px]">

            {/* LEFT — Visual panel */}
            <div
              className="lg:w-[46%] relative flex flex-col items-center justify-center p-10 min-h-[280px]"
              style={{ background: current.bg }}
            >
              {/* Badge top-left */}
              <div className="absolute top-5 left-5 bg-white/18 border border-white/30 text-white px-3 py-1 rounded text-[10px] font-bold tracking-[0.06em] backdrop-blur-sm">
                {current.badge}
              </div>
              {/* Duration top-right */}
              <div className="absolute top-5 right-5 bg-black/25 text-white px-3 py-1 rounded text-[10.5px] font-bold backdrop-blur-sm">
                {current.duration}
              </div>

              {/* Icon */}
              <div className="w-[110px] h-[110px] rounded-full bg-white/15 border-2 border-white/25 flex items-center justify-center backdrop-blur-sm mb-5">
                <ThumbIcon />
              </div>

              {/* Course name pill */}
              <div className="bg-white/18 border border-white/28 text-white px-4 py-2 rounded-full text-[13px] font-bold tracking-[0.04em] backdrop-blur-sm text-center max-w-[240px]">
                {current.title}
              </div>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-1.5 bg-black/20 text-white px-3 py-1 rounded-full text-[12px] font-bold backdrop-blur-sm">
                <StarIcon />
                {current.rating} Rating
              </div>

              {/* Bottom row: prev/next arrows + dots */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                {/* Prev / Next buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={goPrev}
                    className="w-8 h-8 rounded-full bg-white/20 border border-white/35 text-white flex items-center justify-center hover:bg-white/35 transition-all cursor-pointer backdrop-blur-sm"
                  >
                    <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                      <polyline points="10,3 5,8 10,13" />
                    </svg>
                  </button>
                  <button
                    onClick={goNext}
                    className="w-8 h-8 rounded-full bg-white/20 border border-white/35 text-white flex items-center justify-center hover:bg-white/35 transition-all cursor-pointer backdrop-blur-sm"
                  >
                    <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                      <polyline points="6,3 11,8 6,13" />
                    </svg>
                  </button>
                </div>

                {/* Dots */}
                <div className="flex gap-1.5">
                  {visible.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      className={`rounded-full transition-all cursor-pointer border-0 ${i === safeIdx
                          ? 'w-5 h-2 bg-white'
                          : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Info panel */}
            <div className="lg:w-[54%] p-8 lg:p-10 flex flex-col justify-between">
              <div>
                {/* Category label */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-[10.5px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded"
                    style={{ color: current.labelColor, background: current.labelColor + '15' }}
                  >
                    {current.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[24px] lg:text-[28px] font-extrabold text-[#0D1E42] mb-3 tracking-tight leading-tight">
                  {current.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-[#5A6A8A] leading-[1.7] font-medium mb-5">
                  {current.desc}
                </p>

                {/* Highlights */}
                <div className="flex flex-col gap-2 mb-6">
                  {current.highlights.map(h => (
                    <div key={h} className="flex items-center gap-2 text-[13.5px] text-[#0D1E42] font-semibold">
                      <CheckIcon />
                      {h}
                    </div>
                  ))}
                </div>

                {/* Tools covered */}
                <div className="mb-6">
                  <p className="text-[11px] text-[#94A3B8] font-bold tracking-[0.08em] uppercase mb-2.5">
                    Tools Covered
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {current.tags.map(t => (
                      <span key={t} className="bg-[#F4F7FF] border border-[#DDE5F8] text-[#5A6A8A] px-3 py-1 rounded-lg text-[11.5px] font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div>
                <div className="h-px bg-[#DDE5F8] mb-5" />

                {/* Duration + CTA row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex gap-3">
                    <div className="bg-[#F4F7FF] border border-[#DDE5F8] rounded-xl px-4 py-3 text-center min-w-[100px]">
                      <p className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wide mb-0.5">Duration</p>
                      <p className="text-[15px] font-extrabold text-[#0D1E42]">{current.duration}</p>
                    </div>
                    <div className="bg-[#F4F7FF] border border-[#DDE5F8] rounded-xl px-4 py-3 text-center min-w-[100px]">
                      <p className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wide mb-0.5">Rating</p>
                      <p className="text-[15px] font-extrabold text-[#0D1E42] flex items-center justify-center gap-1"><StarIcon />{current.rating}</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 flex-1 sm:justify-end">
                    <button className="bg-transparent text-[#094E93] border-2 border-[#DDE5F8] rounded-[10px] px-5 py-2.5 text-[13px] font-bold font-jakarta cursor-pointer hover:border-[#094E93] hover:bg-[#EBF1FF] transition-all">
                        Details
                    </button>
                    <button
                      onClick={scrollToDemo}
                      className="bg-[#094E93] text-white border-0 rounded-[10px] px-5 py-2.5 text-[13px] font-bold font-jakarta cursor-pointer hover:bg-[#073E75] transition-all"
                      style={{ boxShadow: '0 4px 14px rgba(9,78,147,0.22)' }}
                    >
                      Book Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View all */}
        <div className="text-center mt-8">
          <Link to={"/courses"}>
            <button className="inline-flex items-center gap-2 bg-white text-[#094E93] border-2 border-[#DDE5F8] rounded-xl px-8 py-3.5 text-[14.5px] font-bold font-jakarta cursor-pointer hover:border-[#094E93] hover:-translate-y-0.5 transition-all hover:bg-[#EBF1FF]">
              View All Courses
              <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="#094E93" strokeWidth="2.5">
                <line x1="4" y1="10" x2="16" y2="10" />
                <polyline points="11,5 16,10 11,15" />
              </svg>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}