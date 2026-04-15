import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

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
const IcoData = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
    <ellipse cx="8" cy="4" rx="6" ry="2" />
    <path d="M2 4v4c0 1.1 2.7 2 6 2s6-.9 6-2V4" />
    <path d="M2 8v4c0 1.1 2.7 2 6 2s6-.9 6-2V8" />
  </svg>
);
const IcoWebDev = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="1" y="2" width="14" height="10" rx="1.5" />
    <line x1="1" y1="6" x2="15" y2="6" />
    <line x1="5" y1="14" x2="11" y2="14" />
  </svg>
);
const IcoJava = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polyline points="5,4 1,8 5,12" /><polyline points="11,4 15,8 11,12" />
  </svg>
);

// ── Course thumb icons ────────────────────────────────────────────────────────
const IcoBasicPC = () => (
  <svg viewBox="0 0 48 48" width="52" height="52" fill="none" stroke="white" strokeWidth="2">
    <rect x="6" y="8" width="36" height="24" rx="3" />
    <rect x="12" y="14" width="24" height="12" rx="1.5" fill="white" fillOpacity="0.2" />
    <line x1="14" y1="36" x2="34" y2="36" />
    <line x1="24" y1="32" x2="24" y2="36" />
  </svg>
);
const IcoAdvPC = () => (
  <svg viewBox="0 0 48 48" width="52" height="52" fill="none" stroke="white" strokeWidth="2">
    <rect x="4" y="6" width="28" height="22" rx="3" />
    <rect x="8" y="10" width="20" height="14" rx="1.5" fill="white" fillOpacity="0.2" />
    <line x1="8" y1="32" x2="20" y2="32" />
    <line x1="14" y1="28" x2="14" y2="32" />
    <rect x="34" y="14" width="12" height="18" rx="2" fill="white" fillOpacity="0.15" />
  </svg>
);
const IcoGraphic = () => (
  <svg viewBox="0 0 48 48" width="52" height="52" fill="none" stroke="white" strokeWidth="2">
    <circle cx="24" cy="24" r="16" />
    <circle cx="24" cy="24" r="8" fill="white" fillOpacity="0.15" />
    <circle cx="24" cy="24" r="3" fill="white" />
  </svg>
);
const IcoVideo = () => (
  <svg viewBox="0 0 48 48" width="52" height="52" fill="none" stroke="white" strokeWidth="2">
    <rect x="4" y="10" width="30" height="22" rx="3" />
    <polygon points="34,21 44,16 44,32 34,27" fill="white" fillOpacity="0.2" />
    <polygon points="13,16 13,28 23,22" fill="white" fillOpacity="0.6" strokeWidth="0" />
  </svg>
);
const IcoDigital = () => (
  <svg viewBox="0 0 48 48" width="52" height="52" fill="none" stroke="white" strokeWidth="2">
    <circle cx="24" cy="24" r="14" />
    <path d="M24 10 Q16 18 16 24 Q16 30 24 38" />
    <path d="M24 10 Q32 18 32 24 Q32 30 24 38" />
    <line x1="10" y1="20" x2="38" y2="20" />
    <line x1="10" y1="28" x2="38" y2="28" />
  </svg>
);
const IcoWebDesign = () => (
  <svg viewBox="0 0 48 48" width="52" height="52" fill="none" stroke="white" strokeWidth="2">
    <rect x="4" y="8" width="40" height="30" rx="3" />
    <line x1="4" y1="16" x2="44" y2="16" />
    <circle cx="10" cy="12" r="2" fill="white" fillOpacity="0.5" />
    <circle cx="17" cy="12" r="2" fill="white" fillOpacity="0.5" />
    <rect x="10" y="22" width="12" height="10" rx="2" fill="white" fillOpacity="0.2" />
    <line x1="26" y1="22" x2="38" y2="22" />
    <line x1="26" y1="26" x2="36" y2="26" />
  </svg>
);
const IcoWebDev2 = () => (
  <svg viewBox="0 0 48 48" width="52" height="52" fill="none" stroke="white" strokeWidth="2">
    <rect x="4" y="8" width="40" height="32" rx="3" />
    <line x1="4" y1="16" x2="44" y2="16" />
    <circle cx="10" cy="12" r="2" fill="white" fillOpacity="0.5" />
    <circle cx="17" cy="12" r="2" fill="white" fillOpacity="0.5" />
    <polyline points="14,24 10,28 14,32" />
    <polyline points="22,24 26,28 22,32" />
    <line x1="17" y1="22" x2="19" y2="34" />
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
const IcoJavaIcon = () => (
  <svg viewBox="0 0 48 48" width="52" height="52" fill="none">
    {/* Steam - 3 wavy lines */}
    <path
      d="M18 8 Q16.5 6.5 18 5 Q19.5 3.5 18 2"
      fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round"
    />
    <path
      d="M24 9 Q22.5 7 24 5.5 Q25.5 4 24 2.5"
      fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round"
    />
    <path
      d="M30 8 Q28.5 6.5 30 5 Q31.5 3.5 30 2"
      fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round"
    />

    {/* Cup body - tapered shape */}
    <path
      d="M13 13 L15 34 Q15 36 24 36 Q33 36 33 34 L35 13 Z"
      fill="white" fillOpacity="0.92"
    />

    {/* Horizontal ripple lines inside cup */}
    <path d="M16 18 Q20 16.5 28 18 Q32 19 32 19" fill="none" stroke="#094E93" strokeWidth="1.3" strokeLinecap="round" opacity="0.4"/>
    <path d="M15.5 22 Q20 20.5 28.5 22 Q32 23 32.5 23" fill="none" stroke="#094E93" strokeWidth="1.3" strokeLinecap="round" opacity="0.4"/>
    <path d="M15.5 26 Q20 24.5 28.5 26 Q32 27 32.5 27" fill="none" stroke="#094E93" strokeWidth="1.3" strokeLinecap="round" opacity="0.4"/>

    {/* Handle */}
    <path
      d="M33 17 Q40 17 40 22.5 Q40 28 33 28"
      fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"
    />

    {/* Saucer - ellipse base */}
    <ellipse cx="24" cy="37.5" rx="11" ry="2.2" fill="white" fillOpacity="0.85"/>
    {/* Saucer outer rim */}
    <ellipse cx="24" cy="38.5" rx="13.5" ry="2.5" fill="none" stroke="white" strokeWidth="1.6" strokeOpacity="0.7"/>

    {/* Saucer bottom swirl line */}
    <path
      d="M14 41 Q19 43.5 24 43 Q29 42.5 34 41"
      fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6"
    />
  </svg>
);

const thumbIcons = {
  'Basic Computer Course': IcoBasicPC,
  'Advanced Computer Course': IcoAdvPC,
  'Graphic Designing': IcoGraphic,
  'Video Editing': IcoVideo,
  'Digital Marketing': IcoDigital,
  'Web Design': IcoWebDesign,
  'Web Development': IcoWebDev2,
  'Data Analyst': IcoDataA,
  'Java Programming': IcoJavaIcon,
};

const StarIcon = () => (
  <svg viewBox="0 0 12 12" width="12" height="12" fill="#F5A623">
    <polygon points="6,1 7.5,4.5 11,4.8 8.5,7 9.3,10.5 6,8.8 2.7,10.5 3.5,7 1,4.8 4.5,4.5" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
    <circle cx="8" cy="8" r="7" fill="#EBF1FF" />
    <polyline points="4.5,8 7,10.5 11.5,5.5" stroke="#094E93" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const filters = [
  { key: 'all',       label: 'All Courses', Icon: IcoGrid },
  { key: 'computer',  label: 'Computer',    Icon: IcoComputer },
  { key: 'design',    label: 'Design',      Icon: IcoDesign },
  { key: 'coding',    label: 'Coding',      Icon: IcoCoding },
  { key: 'marketing', label: 'Marketing',   Icon: IcoMarketing },
  // { key: 'webdev',    label: 'Web Dev',     Icon: IcoWebDev },
  { key: 'data',      label: 'Data',        Icon: IcoData },
  // { key: 'java',      label: 'Java',        Icon: IcoJava },
];

const courses = [
  {
    cat: 'computer',
    img: 'https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_1200/v1776103037/basic_alfeiv.png',
    label: 'Computer', labelColor: '#094E93',
    rating: '4.7', title: 'Basic Computer Course',
    desc: 'Master the fundamentals — MS Office, internet basics, email, typing, and essential computer operations.',
    duration: '1-3 Months', badge: 'BEGINNER',
    tags: ['MS Office', 'Internet', 'Typing', 'Email'],
    highlights: ['Beginner Friendly', 'Hands-on Practice', 'Certificate Provided'],
  },
  {
    cat: 'computer',
    img: 'https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_1200/v1776075884/advance_computer_wdtuwu.png',
    label: 'Computer', labelColor: '#4F46E5',
    rating: '4.8', title: 'Advanced Computer Course',
    desc: 'Advanced Excel, Tally, accounting software, hardware fundamentals, and networking essentials.',
    duration: '1-2 Years', badge: 'ADVANCED',
    tags: ['Adv. Excel', 'Tally', 'Networking', 'Hardware'],
    highlights: ['Job-Ready Skills', 'Industry Projects', 'Placement Support'],
  },
  {
    cat: 'design',
    img: 'https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_1200/v1776075893/graphic_design_eqjria.png',
    label: 'Design', labelColor: '#7C3AED',
    rating: '4.9', title: 'Graphic Designing',
    desc: 'Master visual storytelling — logos, branding, posters, social media creatives using industry tools.',
    duration: '3–6 Months', badge: 'MOST POPULAR',
    tags: ['Photoshop', 'Illustrator', 'CorelDRAW', 'InDesign'],
    highlights: ['Portfolio Building', 'Live Projects', 'Freelance Ready'],
  },
  {
    cat: 'design',
    img: 'https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_1200/v1776075903/video_editing_pnq7oa.png',
    label: 'Design', labelColor: '#DC2626',
    rating: '4.8', title: 'Video Editing',
    desc: 'Professional video editing — reels, YouTube content, ads, and cinematic edits using industry-standard tools.',
    duration: '3–6 Months', badge: 'TRENDING',
    tags: ['Premiere Pro', 'DaVinci Resolve', 'After Effects'],
    highlights: ['Reel Creation', 'YouTube Ready', 'Client Projects'],
  },
  {
    cat: 'marketing',
    img: 'https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_1200/v1776075889/digital_marketing_vrlm1o.png',
    label: 'Marketing', labelColor: '#059669',
    rating: '4.8', title: 'Digital Marketing',
    desc: 'Master SEO, social media, Google Ads, and content strategy — become a complete digital marketer.',
    duration: '3–6 Months', badge: 'HIGH DEMAND',
    tags: ['SEO', 'Google Ads', 'Meta Ads', 'Analytics'],
    highlights: ['100% Placement Help', 'Live Ad Campaigns', 'Agency Exposure'],
  },
  {
    cat: 'design',
    img: 'https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_1200/v1776075905/web_design_fgdsg2.png',
    label: 'Web Dev', labelColor: '#DB2777',
    rating: '4.9', title: 'Web Design',
    desc: 'Design stunning responsive websites using Figma, HTML, CSS — master UI/UX principles and prototyping.',
    duration: '3–5 Months', badge: 'POPULAR',
    tags: ['Figma', 'HTML/CSS', 'Bootstrap', 'UI/UX'],
    highlights: ['Portfolio Projects', 'Client-Ready Designs', 'Figma Mastery'],
  },
  {
    cat: 'coding',
    img: 'https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_1200/v1776075906/web_development_zqs1vh.png',
    label: 'Web Dev', labelColor: '#0369A1',
    rating: '4.9', title: 'Web Development',
    desc: 'Build full-stack websites — front-end with React, back-end with Node.js, and deploy real-world projects.',
    duration: '4-6 Months', badge: 'HIGH DEMAND',
    tags: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'],
    highlights: ['Full Stack Coverage', 'Live Website Projects', 'Placement Support'],
  },
  {
    cat: 'data',
    img: 'https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_1200/v1776075888/data_analyst_n3hjbv.png',
    label: 'Data', labelColor: '#0D9488',
    rating: '4.9', title: 'Data Analyst',
    desc: 'Master Excel, SQL, Python, Power BI, and Tableau to extract insights and drive data-backed decisions.',
    duration: '3–6 Months', badge: 'HOT',
    tags: ['SQL', 'Power BI', 'Python', 'Tableau'],
    highlights: ['Real Datasets', 'Dashboard Projects', 'High Salary Scope'],
  },
  {
    cat: 'coding',
    img: 'https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_1200/v1776075894/java_ngylwi.png',
    label: 'Java', labelColor: '#B45309',
    rating: '4.8', title: 'Java Programming',
    desc: 'Build strong OOP foundations, data structures, and real-world Java applications from scratch.',
    duration: '4–6 Months', badge: 'ESSENTIAL',
    tags: ['Core Java', 'OOPs', 'Collections', 'JDBC'],
    highlights: ['Strong Logic Building', 'OOP Mastery', 'Interview Prep'],
  },
  
];

export default function Courses() {
  const [filter, setFilter] = useState('all');
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const visible = courses.filter(c => filter === 'all' || c.cat === filter);
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
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        <div
          className="bg-white border border-[#DDE5F8] rounded-[24px] overflow-hidden shadow-sm"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex flex-col lg:flex-row min-h-[420px]">

            {/* LEFT — Image panel */}
            <div
              className="lg:w-[46%] relative flex flex-col items-center justify-center p-10 min-h-[280px]"
              style={{
                backgroundImage: `url(${current.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dark overlay */}
              {/* <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.38)' }} /> */}

              {/* Badge top-left */}
              <div className="absolute top-5 left-5 z-10 bg-black/25 border border-white/30 text-white px-3 py-1 rounded text-[10px] font-bold tracking-[0.06em] backdrop-blur-sm">
                {current.badge}
              </div>
              {/* Duration top-right */}
              <div className="absolute top-5 right-5 z-10 bg-black/25 text-white px-3 py-1 rounded text-[10.5px] font-bold backdrop-blur-sm">
                {current.duration}
              </div>

              {/* Icon + title + rating */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-[110px] h-[110px] rounded-full bg-black/25 border-2 border-white/25 flex items-center justify-center backdrop-blur-sm mb-5"
                  // style={{ color: current.labelColor, background: current.labelColor + '15' }}
                >
                  <ThumbIcon />
                </div>
                <div className="bg-black/25 border border-white/[0.28] text-white px-4 py-2 rounded-full text-[13px] font-bold tracking-[0.04em] backdrop-blur-sm text-center max-w-[240px]">
                  {current.title}
                </div>
                <div className="mt-4 flex items-center gap-1.5 bg-black/20 text-white px-3 py-1 rounded-full text-[12px] font-bold backdrop-blur-sm">
                  <StarIcon />
                  {current.rating} Rating
                </div>
              </div>

              {/* Bottom row: arrows + dots */}
              <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={goPrev}
                    className="w-8 h-8 rounded-full bg-black/25 border border-white/35 text-white flex items-center justify-center hover:bg-white/35 transition-all cursor-pointer backdrop-blur-sm"
                  >
                    <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                      <polyline points="10,3 5,8 10,13" />
                    </svg>
                  </button>
                  <button
                    onClick={goNext}
                    className="w-8 h-8 rounded-full bg-black/25 border border-white/35 text-white flex items-center justify-center hover:bg-white/35 transition-all cursor-pointer backdrop-blur-sm"
                  >
                    <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                      <polyline points="6,3 11,8 6,13" />
                    </svg>
                  </button>
                </div>
                <div className="flex gap-1.5">
                  {visible.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      className={`rounded-full transition-all cursor-pointer border-0 ${
                        i === safeIdx ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
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
                      <p className="text-[15px] font-extrabold text-[#0D1E42] flex items-center justify-center gap-1">
                        <StarIcon />{current.rating}
                      </p>
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
          <Link to="/courses">
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