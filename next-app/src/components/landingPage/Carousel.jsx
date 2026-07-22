"use client";
import { useState, useEffect, useRef, useCallback } from 'react';

// SVG Icons
const BrochureIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'inline',verticalAlign:'middle',marginRight:5}}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'inline',verticalAlign:'middle',marginRight:5}}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="11" height="11" style={{display:'inline',verticalAlign:'middle',marginRight:3}}>
    <path d="M6 9H3.5a1.5 1.5 0 0 1 0-3H6M18 9h2.5a1.5 1.5 0 0 0 0-3H18" stroke="#094E93" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 3h12v10a6 6 0 0 1-12 0V3z" stroke="#094E93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 21h6M12 17v4" stroke="#094E93" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const BeIcon = () => (
  <svg viewBox="0 0 44 34" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="34">
    <text x="22" y="26" fontSize="20" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="900" fill="white" textAnchor="middle">Bē</text>
  </svg>
);

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l2.09 6.26H21l-5.47 3.97 2.09 6.26L12 14.52l-5.62 3.97 2.09-6.26L3 8.26h6.91L12 2z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const slides = [
  {
    bg:'#fff', badge:'BEST IN NCR', badgeBg:'#F5A623', badgeColor:'#fff',
    title:'Thrice the <blue>Creativity.</blue><br/>Triple the <blue>Success.</blue>',
    sub:'Now present at three locations across Delhi NCR.',
    btnPrimary:'Book a Free Demo →', btnOutline:'brochure',
    visualBg:'#F0F2F5', visual:'map'
  },
  
  {
    bg:'#fff', badge:'BEST IN DELHI NCR', badgeBg:'#F5A623', badgeColor:'#fff',
    title:'<blue>10 Years</blue> of Making<br/>Careers. <blue>10,000+</blue><br/>Success Stories.',
    sub:'Awarded the Best Design Training Institute in Delhi — Twice.',
    btnPrimary:'Book a Free Demo →', btnOutline:'brochure',
    visualBg:'#BFECFF', visual:'ten'
  },
  {
    bg:'#fff', badge:'BEST IN DELHI NCR', badgeBg:'#F5A623', badgeColor:'#fff',
    title:'<blue>Industry-ready<br/>Courses.</blue> By Industry-<br/>trained Experts.',
    sub:'AI for Creative Professionals · Graphics Design · Web Design · UI/UX · Full Stack · Motion Graphics',
    btnPrimary:'Book a Free Demo →', btnOutline:'brochure',
    visualBg:'#FFB5A7', visual:'monitor'
  },
  {
    bg:'#fff', badge:'BEST IN DELHI NCR', badgeBg:'#F5A623', badgeColor:'#fff',
    title:'Placement-focused<br/><blue>Training.</blue> Growth-<br/>focused <blue>Career.</blue>',
    sub:'100% placement guarantee. Holistic skills and personality development for every student.',
    btnPrimary:'Book a Free Demo →', btnOutline:'brochure',
    visualBg:'#FFB5A7', visual:'placement'
  },
  {
    bg:'#fff', badge:'BEST IN DELHI NCR', badgeBg:'#F5A623', badgeColor:'#fff',
    title:'Tailored <blue>Portfolios.</blue><br/>Transformed<br/><blue>Personalities.</blue>',
    sub:'Graphic Design · UI/UX Design · Web Design · Full Stack Development · Motion Graphics',
    btnPrimary:'Book a Free Demo →', btnOutline:'brochure',
    visualBg:'#C4B5FD', visual:'portfolio'
  },
];

function renderTitle(t, isDark) {
  const blue = isDark ? '#fff' : '#094E93';
  const gold = '#F5A623';
  return t
    .replace(/<blue>(.*?)<\/blue>/g, `<span style="color:${blue}">$1</span>`)
    .replace(/<gold>(.*?)<\/gold>/g, `<span style="color:${gold}">$1</span>`)
    .replace(/<w>(.*?)<\/w>/g, '<span style="color:#fff">$1</span>');
}

function SlideVisual({ type, bg, border }) {
  const style = { background: bg, border: border||'none', borderRadius: 20, overflow:'hidden', width:'100%', aspectRatio:'440/340', display:'flex', alignItems:'center', justifyContent:'center' };
  const svgs = {
    map: (
      <svg viewBox="0 0 440 340" width="100%" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g1" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#F5E642" stopOpacity="0.6"/><stop offset="100%" stopColor="#F5E642" stopOpacity="0"/></radialGradient></defs>
        <ellipse cx="310" cy="160" rx="120" ry="120" fill="url(#g1)"/>
        <rect x="60" y="220" width="320" height="60" fill="#E8EAF0"/>
        <rect x="185" y="165" width="12" height="60" rx="3" fill="#C8CACC"/>
        <polygon points="185,165 197,165 191,148" fill="#B0B2B5"/>
        <path d="M220 225 Q225 200 230 225" fill="none" stroke="#B0B2B5" strokeWidth="8"/>
        <rect x="218" y="225" width="24" height="5" rx="1" fill="#B0B2B5"/>
        <path d="M120 160 C112 160 105 167 105 176 C105 186 120 200 120 200 C120 200 135 186 135 176 C135 167 128 160 120 160Z" fill="#094E93"/>
        <circle cx="120" cy="175" r="8" fill="white"/>
        <polygon points="115,200 125,200 122,230 118,230" fill="#094E93"/>
        <text x="120" y="252" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700" fill="#334" textAnchor="middle">Nirman Vihar</text>
        <text x="120" y="263" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif" fill="#778" textAnchor="middle">East Delhi</text>
        <path d="M200 130 C192 130 185 137 185 146 C185 156 200 170 200 170 C200 170 215 156 215 146 C215 137 208 130 200 130Z" fill="#094E93"/>
        <circle cx="200" cy="145" r="8" fill="white"/>
        <polygon points="195,170 205,170 202,200 198,200" fill="#094E93"/>
        <text x="200" y="220" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700" fill="#334" textAnchor="middle">Saket</text>
        <path d="M330 120 C319 120 310 130 310 141 C310 154 330 172 330 172 C330 172 350 154 350 141 C350 130 341 120 330 120Z" fill="#094E93"/>
        <circle cx="330" cy="140" r="10" fill="white"/>
        <polygon points="324,172 336,172 333,210 327,210" fill="#094E93"/>
        <text x="330" y="230" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700" fill="#334" textAnchor="middle">Pitampura</text>
        <rect x="230" y="60" width="130" height="30" rx="15" fill="white" stroke="#E0E4F0" strokeWidth="1"/>
        {/* Trophy SVG inline replacing 🏆 */}
        <g transform="translate(243,68)">
          <path d="M5 7H2.5a1.2 1.2 0 0 1 0-2.4H5M13 7h2.5a1.2 1.2 0 0 0 0-2.4H13" stroke="#094E93" strokeWidth="1.4" strokeLinecap="round"/>
          <path d="M5 2h8v7a4 4 0 0 1-8 0V2z" stroke="#094E93" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 16h4M9 13v3" stroke="#094E93" strokeWidth="1.4" strokeLinecap="round"/>
        </g>
        <text x="270" y="79" fontSize="11" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700" fill="#094E93" textAnchor="middle">Best in Delhi NCR</text>
      </svg>
    ),
    robot: (
      <svg viewBox="0 0 440 340" width="100%" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/></pattern></defs>
        <rect width="440" height="340" fill="url(#grid)"/>
        <rect x="130" y="120" width="90" height="100" rx="20" fill="white"/>
        <rect x="145" y="135" width="60" height="40" rx="8" fill="#0D1E42"/>
        <rect x="155" y="147" width="12" height="16" rx="3" fill="#60A5FA"/>
        <rect x="177" y="147" width="12" height="16" rx="3" fill="#60A5FA"/>
        <path d="M158 172 Q175 180 190 172" fill="none" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round"/>
        <rect x="170" y="100" width="6" height="22" rx="3" fill="white"/>
        <circle cx="173" cy="98" r="7" fill="#60A5FA"/>
        <circle cx="173" cy="98" r="4" fill="white"/>
        <rect x="90" y="135" width="42" height="16" rx="8" fill="white"/>
        <rect x="218" y="135" width="42" height="16" rx="8" fill="white"/>
        <circle cx="88" cy="143" r="12" fill="white"/>
        <circle cx="262" cy="143" r="12" fill="white"/>
        <rect x="148" y="218" width="18" height="35" rx="9" fill="white"/>
        <rect x="184" y="218" width="18" height="35" rx="9" fill="white"/>
        <rect x="26" y="100" width="90" height="40" rx="10" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        <text x="71" y="118" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fill="white" fontWeight="600" textAnchor="middle">Prompt</text>
        <text x="71" y="132" fontSize="8" fontFamily="Plus Jakarta Sans,sans-serif" fill="rgba(255,255,255,0.65)" textAnchor="middle">Which Course?</text>
        <rect x="235" y="88" width="70" height="32" rx="10" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
        {/* Wave/greeting SVG replacing 👋 */}
        <g transform="translate(242,96)">
          <path d="M8 2c0-1.1.9-2 2-2s2 .9 2 2v6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 5c0-1.1.9-2 2-2s2 .9 2 2v5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M4 6c0-1.1.9-2 2-2s2 .9 2 2v2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M4 8v4c0 4 3 6 6 6s6-2 6-6V10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
        <text x="262" y="109" fontSize="10" fontFamily="Plus Jakarta Sans,sans-serif" fill="white" fontWeight="700" textAnchor="middle">Hey!</text>
        <circle cx="370" cy="180" r="68" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
        <ellipse cx="370" cy="165" rx="42" ry="48" fill="rgba(255,255,255,0.08)"/>
        <circle cx="356" cy="155" r="6" fill="#60A5FA" opacity="0.7"/>
        <circle cx="384" cy="155" r="6" fill="#60A5FA" opacity="0.7"/>
        <path d="M356 178 Q370 186 384 178" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
        <rect x="310" y="230" width="100" height="50" rx="10" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        {/* ChatGPT-style icon replacing circle */}
        <circle cx="326" cy="252" r="7" fill="#10A37F"/>
        <g transform="translate(320,246)">
          <path d="M6 6l-3-3M6 6l3-3M6 6v-5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        </g>
        <text x="340" y="249" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fill="white" fontWeight="600">ChatGPT</text>
        <rect x="320" y="256" width="80" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
        <rect x="320" y="264" width="60" height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
        <rect x="24" y="200" width="80" height="26" rx="13" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        {/* Hexagon copilot icon replacing ⬡ */}
        <g transform="translate(33,208)">
          <path d="M7 1l6 3.5v7L7 15l-6-3.5v-7L7 1z" stroke="white" strokeWidth="1.2" fill="none"/>
        </g>
        <text x="53" y="217" fontSize="9" fontFamily="Plus Jakarta Sans,sans-serif" fill="white" fontWeight="600" textAnchor="middle">Copilot</text>
      </svg>
    ),
    ten: (
      <svg viewBox="0 0 440 340" width="100%" xmlns="http://www.w3.org/2000/svg">
        <text x="80" y="270" fontSize="240" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="900" fill="rgba(255,255,255,0.5)" letterSpacing="-20">10</text>
        <ellipse cx="148" cy="138" rx="28" ry="32" fill="#B5936A"/>
        <rect x="118" y="166" width="60" height="100" rx="14" fill="#2D2D2D"/>
        <ellipse cx="220" cy="118" rx="32" ry="36" fill="#8B6246"/>
        <rect x="188" y="150" width="64" height="120" rx="14" fill="#1A1A1A"/>
        <ellipse cx="292" cy="138" rx="28" ry="32" fill="#D4A574"/>
        <rect x="262" y="166" width="60" height="100" rx="14" fill="#3D3D3D"/>
        <ellipse cx="340" cy="100" rx="52" ry="38" fill="#F5E642" opacity="0.9"/>
        <circle cx="390" cy="180" r="8" fill="#0D1E42"/>
        <rect x="148" y="272" width="80" height="22" rx="6" fill="white" stroke="#E0E4F0" strokeWidth="1"/>
        {/* Checkmark replacing ✓ */}
        <g transform="translate(158,277)">
          <path d="M2 6l3 3 5-5" stroke="#094E93" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </g>
        <text x="194" y="287" fontSize="10" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700" fill="#094E93" textAnchor="middle">10,000+ Placed</text>
      </svg>
    ),
    monitor: (
      <svg viewBox="0 0 440 340" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="80" y="70" width="280" height="180" rx="12" fill="#FFDC5E" stroke="#E8C200" strokeWidth="2"/>
        <rect x="96" y="84" width="248" height="148" rx="6" fill="#7B5EA7"/>
        <rect x="196" y="248" width="48" height="18" rx="4" fill="#FFDC5E" stroke="#E8C200" strokeWidth="1.5"/>
        <rect x="172" y="264" width="96" height="10" rx="5" fill="#FFDC5E" stroke="#E8C200" strokeWidth="1.5"/>
        <ellipse cx="176" cy="122" rx="24" ry="26" fill="#D4A574"/>
        <rect x="152" y="144" width="48" height="80" rx="10" fill="#1A1A2E"/>
        <ellipse cx="264" cy="122" rx="22" ry="24" fill="#8B6246"/>
        <rect x="242" y="144" width="44" height="80" rx="10" fill="#2D2D4E"/>
        {/* Play button replacing triangle */}
        <circle cx="108" cy="288" r="22" fill="#F5A623"/>
        <polygon points="102,280 102,296 118,288" fill="white"/>
      </svg>
    ),
    placement: (
      <svg viewBox="0 0 440 340" width="100%" xmlns="http://www.w3.org/2000/svg">
        <text x="30" y="250" fontSize="148" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="900" fill="#0D1E42" letterSpacing="-6">100%</text>
        <rect x="148" y="120" width="200" height="160" rx="10" fill="white" stroke="#E0E4F0" strokeWidth="1.5"/>
        <rect x="148" y="120" width="200" height="24" rx="10" fill="#FFDC5E"/>
        <circle cx="164" cy="132" r="6" fill="rgba(0,0,0,0.2)"/>
        <rect x="156" y="144" width="184" height="128" rx="4" fill="#FFDC5E"/>
        <ellipse cx="248" cy="178" rx="26" ry="28" fill="#D4A574"/>
        <rect x="222" y="202" width="52" height="68" rx="10" fill="#2D2D4E"/>
        <circle cx="185" cy="240" r="30" fill="#F5A623" stroke="white" strokeWidth="2"/>
        <text x="185" y="235" fontSize="7" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700" fill="white" textAnchor="middle">100%</text>
        <text x="185" y="245" fontSize="6.5" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700" fill="white" textAnchor="middle">PLACEMENT</text>
        <text x="185" y="255" fontSize="6" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="600" fill="white" textAnchor="middle">GUARANTEE</text>
      </svg>
    ),
    portfolio: (
      <svg viewBox="0 0 440 340" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="120" y="80" width="200" height="200" rx="12" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="2" strokeDasharray="6 4"/>
        <rect x="116" y="76" width="10" height="10" rx="2" fill="white"/>
        <rect x="314" y="76" width="10" height="10" rx="2" fill="white"/>
        <rect x="116" y="274" width="10" height="10" rx="2" fill="white"/>
        <rect x="314" y="274" width="10" height="10" rx="2" fill="white"/>
        <ellipse cx="220" cy="148" rx="36" ry="38" fill="#8B6246"/>
        <rect x="182" y="182" width="76" height="110" rx="14" fill="#1C1C2E"/>
        <ellipse cx="310" cy="180" rx="50" ry="55" fill="#7C3AED" opacity="0.7"/>
        <rect x="60" y="140" width="44" height="34" rx="8" fill="#094E93"/>
        <text x="82" y="162" fontSize="14" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="900" fill="white" textAnchor="middle">Bē</text>
        <rect x="138" y="280" width="90" height="24" rx="6" fill="white" stroke="#E0E0F0" strokeWidth="1"/>
        <text x="183" y="296" fontSize="11" fontFamily="Plus Jakarta Sans,sans-serif" fontWeight="700" fill="#0D1E42" textAnchor="middle">Portfolio</text>
        <circle cx="260" cy="292" r="16" fill="#EA4C89"/>
        {/* Star shapes replacing ✦ */}
        <g transform="translate(100,107)">
          <path d="M0-7v14M-7 0h14M-5-5l10 10M5-5l-10 10" stroke="rgba(30,30,80,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
        <g transform="translate(330,82)">
          <path d="M0-5v10M-5 0h10M-3.5-3.5l7 7M3.5-3.5l-7 7" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
        </g>
      </svg>
    )
  };
  return <div style={style}>{svgs[type]}</div>;
}

function OutlineButtonContent({ type, isDark }) {
  if (type === 'brochure') {
    return <><BrochureIcon /> Get Brochure</>;
  }
  if (type === 'phone') {
    return <><PhoneIcon /> Free Career Session</>;
  }
  return type;
}

export default function Carousel() {
  const [cur, setCur] = useState(0);
  const timerRef = useRef(null);
  const TOTAL = slides.length;

  const goTo = useCallback((n) => { setCur((n + TOTAL) % TOTAL); }, [TOTAL]);

  useEffect(() => {
    timerRef.current = setInterval(() => setCur(c => (c + 1) % TOTAL), 5000);
    return () => clearInterval(timerRef.current);
  }, [TOTAL]);

  const handleNav = (dir) => { clearInterval(timerRef.current); goTo(cur + dir); timerRef.current = setInterval(() => setCur(c => (c + 1) % TOTAL), 5000); };

  const s = slides[cur];
  const isDark = s.bg.includes('gradient') || s.bg.includes('#');
  const titleColor = isDark && s.bg.includes('gradient') ? '#fff' : '#0D1E42';
  const subColor = isDark && s.bg.includes('gradient') ? 'rgba(255,255,255,0.72)' : '#5A6A8A';

  return (
    <section className="relative w-full overflow-hidden">
      {/* Slide */}
      <div style={{ background: s.bg, transition: 'background 0.4s' }}>
        <div className="max-w-[1260px] mx-auto px-4 sm:px-10 lg:px-20 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[420px] lg:min-h-[520px]">
          {/* Left */}
          <div>
            <span className="inline-block px-3.5 py-1.5 rounded-[5px] text-[11.5px] font-extrabold tracking-[0.06em] uppercase mb-5" style={{background:s.badgeBg,color:s.badgeColor,border:s.badgeBorder||'none'}}>{s.badge}</span>
            <h2 className="font-jakarta font-extrabold leading-[1.1] tracking-tight mb-4" style={{fontSize:'clamp(28px,3.4vw,48px)',color:titleColor}} dangerouslySetInnerHTML={{__html:renderTitle(s.title,isDark&&s.bg.includes('gradient'))}}/>
            <p className="text-[14.5px] leading-[1.72] mb-7 max-w-[440px] font-medium" style={{color:subColor}}>{s.sub}</p>
            {s.stats && (
              <div className="flex gap-7 mb-7">
                {s.stats.map(([n,l]) => (
                  <div key={l}>
                    <div className="text-[26px] font-extrabold font-jakarta leading-none tracking-tight text-white">{n.replace('+','')}<em className="text-[#F5A623] not-italic">+</em></div>
                    <div className="text-[11px] font-semibold mt-0.5 text-white/55">{l}</div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex gap-3 flex-wrap">
              <button className="border-0 rounded-[10px] px-5 py-3 text-[14px] font-bold font-jakarta cursor-pointer hover:-translate-y-0.5 transition-all" style={{background:s.btnPrimaryBg||'#094E93',color:s.btnPrimaryColor||'#fff',boxShadow:'0 6px 20px rgba(9,78,147,0.28)'}}>{s.btnPrimary}</button>
              <button className="rounded-[10px] px-5 py-3 text-[14px] font-bold font-jakarta cursor-pointer transition-all flex items-center" style={{background:'transparent',color:s.btnOutlineDark?'#fff':'#094E93',border:s.btnOutlineDark?'2px solid rgba(255,255,255,0.35)':'2px solid rgba(9,78,147,0.3)'}}>
                <OutlineButtonContent type={s.btnOutline} isDark={s.btnOutlineDark} />
              </button>
            </div>
          </div>
          {/* Right */}
          <div className="hidden sm:block">
            <SlideVisual type={s.visual} bg={s.visualBg} border={s.visualBorder}/>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={()=>handleNav(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 border border-[#DDE5F8] flex items-center justify-center text-lg font-extrabold text-[#094E93] cursor-pointer hover:bg-[#094E93] hover:text-white transition-all" style={{boxShadow:'0 4px 16px rgba(8,17,43,0.12)'}}>←</button>
      <button onClick={()=>handleNav(1)} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 border border-[#DDE5F8] flex items-center justify-center text-lg font-bold text-[#094E93] cursor-pointer hover:bg-[#094E93] hover:text-white transition-all" style={{boxShadow:'0 4px 16px rgba(8,17,43,0.12)'}}>→</button>

      {/* Dots */}
      <div className="flex gap-2 justify-center py-4">
        {slides.map((_,i) => (
          <button key={i} onClick={()=>{clearInterval(timerRef.current);goTo(i);timerRef.current=setInterval(()=>setCur(c=>(c+1)%TOTAL),5000);}}
            className={`h-2 border-0 cursor-pointer transition-all p-0 rounded-full ${i===cur?'w-7 bg-[#094E93]':'w-2 bg-[#DDE5F8]'}`}/>
        ))}
      </div>

      
    </section>
  );
}