"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';
/* ─── Keyframes ─────────────────────────────────────────────────────────────── */
const KF = `
  @keyframes floatA {
    0%,100% { transform:translateY(0px);  }
    50%      { transform:translateY(-14px); }
  }
  @keyframes floatB {
    0%,100% { transform:translateY(0px);  }
    50%      { transform:translateY(-12px); }
  }
  @keyframes floatC {
    0%,100% { transform:translateY(0px); }
    50%      { transform:translateY(-8px); }
  }
  @keyframes glow {
    0%,100% { box-shadow:0 0 0 0   rgba(9,78,147,0.5); }
    70%      { box-shadow:0 0 0 8px rgba(9,78,147,0);   }
  }
  @keyframes draw {
    from { clip-path:inset(0 100% 0 0); }
    to   { clip-path:inset(0 0   0 0); }
  }
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(24px); }
    to   { opacity:1; transform:translateY(0);    }
  }
`;

/* ─── Left Character ─────────────────────────────────────────────────────────── */
function CharLeft() {
  return (
    <svg width="210" height="250" viewBox="0 0 210 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="210" height="250" rx="22" fill="#EBF4FF" />
      <text x="15" y="165" fontSize="130" fontWeight="900"
        fill="rgba(9,78,147,0.06)" fontFamily="Plus Jakarta Sans,sans-serif">10</text>
      {/* Bubble */}
      <ellipse cx="165" cy="68" rx="36" ry="26" fill="#F5A623" opacity="0.9">
        <animate attributeName="ry" values="26;24;26" dur="3s" repeatCount="indefinite" />
      </ellipse>
      <path d="M140 82 L128 98 L152 88" fill="#F5A623" opacity="0.9" />
      <text x="165" y="65" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily="sans-serif">Placed!</text>
      <text x="165" y="77" textAnchor="middle" fontSize="8" fontWeight="500" fill="white" fontFamily="sans-serif">₹8 LPA</text>
      <circle cx="196" cy="140" r="7" fill="#094E93" />
      {/* People */}
      <ellipse cx="68" cy="98" rx="24" ry="26" fill="#D4956A" />
      <rect x="44" y="120" width="48" height="70" rx="14" fill="#2D2D2D" />
      <ellipse cx="108" cy="90" rx="26" ry="28" fill="#8B5E3C" />
      <rect x="82" y="114" width="52" height="82" rx="14" fill="#1A1A1A" />
      <ellipse cx="152" cy="100" rx="22" ry="24" fill="#C78B5E" />
      <rect x="130" y="120" width="44" height="66" rx="14" fill="#3D3D3D" />
      {/* Badge */}
      <rect x="48" y="210" width="114" height="26" rx="13" fill="white" stroke="#DDE5F8" strokeWidth="1" />
      <circle cx="66" cy="223" r="7" fill="#EAF2FB" />
      <path d="M63 223 L65.5 226 L70 220" stroke="#094E93" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <text x="78" y="227" fontSize="10" fontWeight="700" fill="#0D1E42" fontFamily="sans-serif">10,000+ Placed</text>
    </svg>
  );
}

/* ─── Right Character ────────────────────────────────────────────────────────── */
function CharRight() {
  return (
    <svg width="220" height="250" viewBox="0 0 220 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="10" width="220" height="230" rx="22" fill="#EDE9FE" />
      <rect x="68" y="38" width="126" height="156" rx="6"
        stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeDasharray="6 4" fill="none" />
      <rect x="64" y="34" width="8" height="8" rx="2" fill="white" />
      <rect x="190" y="34" width="8" height="8" rx="2" fill="white" />
      <rect x="64" y="188" width="8" height="8" rx="2" fill="white" />
      <rect x="190" y="188" width="8" height="8" rx="2" fill="white" />
      <text x="38" y="80" fontSize="18" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">✳</text>
      <text x="186" y="52" fontSize="14" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">✳</text>
      <rect x="18" y="120" width="46" height="30" rx="7" fill="#1769FF" />
      <text x="41" y="141" textAnchor="middle" fontSize="13" fontWeight="700" fill="white" fontFamily="sans-serif">Bē</text>
      <ellipse cx="130" cy="100" rx="28" ry="30" fill="#8B5E3C" />
      <rect x="100" y="126" width="58" height="78" rx="16" fill="#1A1A2E" />
      <ellipse cx="174" cy="150" rx="32" ry="36" fill="#8B5CF6" opacity="0.75" />
      <circle cx="188" cy="195" r="11" fill="#EC4899" />
      <circle cx="188" cy="195" r="7" fill="#F472B6">
        <animate attributeName="r" values="7;9;7" dur="2s" repeatCount="indefinite" />
      </circle>
      <rect x="72" y="207" width="88" height="26" rx="13" fill="white" stroke="#E9D5FF" strokeWidth="1" />
      <text x="116" y="224" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#7C3AED" fontFamily="sans-serif">Portfolio</text>
    </svg>
  );
}

/* ─── Floating Info Badge (absolute) ────────────────────────────────────────── */
function AbsBadge({ iconBg, iconStroke, iconPath, title, sub, style }) {
  return (
    <div
      className="absolute z-20 flex items-center gap-2 bg-white border border-[#DDE5F8]
        rounded-[10px] px-3 py-2 whitespace-nowrap
        shadow-[0_6px_20px_rgba(9,78,147,0.1)]
        pointer-events-none"
      style={{ animation: "floatC 5s ease-in-out infinite", ...style }}
    >
      <div className="w-[26px] h-[26px] rounded-[7px] flex items-center justify-center flex-shrink-0"
        style={{ background: iconBg }}>
        <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" strokeWidth={2} fill="none" stroke={iconStroke}>
          {iconPath}
        </svg>
      </div>
      <div>
        <p className="text-[11px] font-bold text-[#0D1E42] leading-tight">{title}</p>
        <p className="text-[10px] font-medium text-[#5A6A8A]">{sub}</p>
      </div>
    </div>
  );
}

/* ─── Floating Pill ──────────────────────────────────────────────────────────── */
function Pill({ color, stroke, iconPath, label, style }) {
  return (
    <div
      className="absolute z-20 bg-white border border-[#DDE5F8] rounded-full
        px-3 py-[5px] text-[11px] font-semibold
        flex items-center gap-[5px] whitespace-nowrap
        shadow-[0_3px_10px_rgba(9,78,147,0.08)]
        pointer-events-none"
      style={{ color, ...style }}
    >
      <svg viewBox="0 0 24 24" className="w-[12px] h-[12px]" strokeWidth={2} fill="none" stroke={stroke}>
        {iconPath}
      </svg>
      {label}
    </div>
  );
}

/* ─── Stat ───────────────────────────────────────────────────────────────────── */
function Stat({ num, accent, label, noBorder }) {
  return (
    <div className={`px-5 sm:px-6 py-3.5 text-center ${noBorder ? "" : "border-r border-[#DDE5F8]"}`}>
      <div className="text-[18px] sm:text-[20px] font-black text-[#060E25] tracking-[-0.03em] leading-none">
        {num}<em className="not-italic" style={{ color: "#094E93" }}>{accent}</em>
      </div>
      <div className="text-[10px] font-semibold text-[#5A6A8A] mt-[3px] uppercase tracking-[0.06em]">{label}</div>
    </div>
  );
}

/* ─── HERO ───────────────────────────────────────────────────────────────────── */
export default function HeroSection() {
  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 60); return () => clearTimeout(t); }, []);

  const scrollToDemo = () => {
    const section = document.getElementById('book-demo');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // setOpen(false); // mobile menu band karne ke liye
  };
  return (
    <section className="relative min-h-[700px] bg-white overflow-hidden flex items-center justify-center px-6 pt-[150px] pb-10 sm:min-h-screen">
      <style>{KF}</style>

      {/* ── BG layers ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse 65% 55% at 12% 18%, rgba(9,78,147,0.07) 0%, transparent 65%),
          radial-gradient(ellipse 45% 45% at 88% 82%, rgba(245,166,35,0.07) 0%, transparent 60%)
        `,
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(rgba(9,78,147,0.065) 1.5px, transparent 1.5px)",
        backgroundSize: "30px 30px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
      }} />

      {/* LEFT CHARACTER */}
      <div
        className="absolute top-20 left-6 z-10 hidden lg:block pointer-events-none"
        style={{
          animation: ready ? "floatA 6s ease-in-out infinite, fadeUp 0.85s 0.4s both" : "none",
          opacity: ready ? undefined : 0,
          maxWidth: "min(220px, 18vw)",
        }}
      >
        <CharLeft />
      </div>

      {/* ── SWAPPED: Coding pill now where Batch Started badge was ── */}
      <Pill color="#094E93" stroke="#094E93" label="Coding"
        iconPath={<><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>}
        style={{
          top: "50%",
          left: "10%",
          animation: "floatB 8s ease-in-out infinite",
        }}
      />

      {/* RIGHT CHARACTER */}
      <div
        className="absolute top-1/2 -translate-y-1/2 right-6 z-10 hidden lg:block pointer-events-none"
        style={{
          animation: ready ? "floatB 7s ease-in-out infinite, fadeUp 0.85s 0.5s both" : "none",
          opacity: ready ? undefined : 0,
          maxWidth: "min(230px, 18vw)",
        }}
      >
        <CharRight />
      </div>

      {/* ── SWAPPED: Stock Market pill now where Placement Ready badge was ── */}
      <Pill color="#D97706" stroke="#D97706" label="Stock Market"
        iconPath={<><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></>}
        style={{
          bottom: "40%",
          right: "10%",
          animation: "floatB 6s 0.8s ease-in-out infinite",
        }}
      />

      {/* ── SWAPPED: Batch Started badge now where Coding pill was ── */}
      <AbsBadge
        iconBg="#EAF2FB" iconStroke="#094E93"
        iconPath={<><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>}
        title="Batch Started" sub="Mon, Wed, Fri"
        style={{
          top: "24%",
          left: "3%",
          animationDelay: "0.3s",
        }}
      />

      {/* ── SWAPPED: Placement Ready badge now where Stock Market pill was ── */}
      <AbsBadge
        iconBg="#DCFCE7" iconStroke="#16A34A"
        iconPath={<polyline points="20 6 9 17 4 12" />}
        title="Placement Ready" sub="94% success rate"
        style={{
          bottom: "21%",
          right: "3%",
          animationDelay: "0.6s",
        }}
      />

      {/* Remaining pills — unchanged */}
      <Pill color="#059669" stroke="#059669" label="Marketing"
        iconPath={<path d="M22 12h-4l-3 9L9 3l-3 9H2" />}
        style={{ top: "16%", right: "3%", animation: "floatA 7s 0.5s ease-in-out infinite" }}
      />
      <Pill color="#7C3AED" stroke="#7C3AED" label="Designing"
        iconPath={<><circle cx="13.5" cy="6.5" r="2.5" /><path d="M17.5 10.5c1.5 2 1.5 5.5-2 7s-7.5.5-9-3 1-7 4-8" /></>}
        style={{ bottom: "26%", left: "3%", animation: "floatA 9s 1s ease-in-out infinite" }}
      />

      {/* CENTER CONTENT — unchanged */}
      <div
        className="relative z-10 text-center w-full px-0 lg:px-[240px] xl:px-[260px] max-w-[1200px]"
        style={{ animation: "fadeUp 0.85s 0.1s both" }}
      >
        {/* Tag */}
        <div className="inline-flex items-center gap-2 border px-[18px] py-[6px] rounded-full
          text-[11.5px] font-bold tracking-[0.07em] uppercase mb-6"
          style={{ background: "#EAF2FB", borderColor: "rgba(9,78,147,0.18)", color: "#094E93" }}>
          <span className="w-[7px] h-[7px] rounded-full flex-shrink-0 inline-block"
            style={{ background: "#094E93", animation: "glow 2s ease-in-out infinite" }} />
          Delhi NCR's #1 Skill Training Institute
        </div>

        {/* Heading */}
        <h1 className="font-black tracking-[-0.04em] leading-[1.05] text-[#060E25] mb-5"
          style={{ fontSize: "clamp(34px, 4.8vw, 68px)" }}>
          Learn Skills.<br />
          <span className="relative inline-block" style={{ color: "#F5A623" }}>
            Get Placed.
            <span className="absolute left-0 right-0 h-[5px]" style={{
              bottom: "-5px",
              background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 8'%3E%3Cpath d='M0 5 Q15 1 30 5 Q45 9 60 5 Q75 1 90 5 Q105 9 120 5' stroke='%23F5A623' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") center/cover no-repeat`,
              animation: "draw 0.8s 0.7s both",
            }} />
          </span>
          <br />
          <span style={{ color: "#094E93" }}>Build Your Career.</span>
        </h1>

        {/* Sub */}
        {/* <p className="text-[#5A6A8A] font-medium leading-[1.72] max-w-[520px] mx-auto mb-8"
          style={{ fontSize: "clamp(13px, 1.4vw, 17px)" }}>
          From <strong className="text-[#0D1E42] font-bold">Coding &amp; Web Dev</strong> to{" "}
          <strong className="text-[#0D1E42] font-bold">Digital Marketing, Graphic Design</strong> and{" "}
          <strong className="text-[#0D1E42] font-bold">Stock Market</strong> — Edura offers
          industry-ready courses with 100% placement assistance.
        </p> */}

        <p className="ani-3 text-[15.5px] text-[#5A6A8A] font-medium leading-[1.82] max-w-[520px] mx-auto mb-4">
          At <strong className="text-[#0D1E42] font-bold">EduraIndia</strong>, we are recognised as a
          professional computer training institute offering{" "}
          <strong className="text-[#0D1E42] font-bold">practical skills</strong> and{" "}
          <strong className="text-[#0D1E42] font-bold">professional development</strong> for both
          beginners and advanced learners — with expert guidance and strong career opportunities.
        </p>


        {/* CTAs */}
        <div className="flex gap-3 justify-center flex-wrap mb-8">
          <button
            onClick={scrollToDemo}
            className="inline-flex items-center gap-2 text-white rounded-[12px]
              px-6 py-[13px] text-[14px] font-bold cursor-pointer border-none
              transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "#094E93", boxShadow: "0 8px 24px rgba(9,78,147,0.3)", fontFamily: "inherit" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#073E75"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(9,78,147,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#094E93"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(9,78,147,0.3)"; }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" strokeWidth={2.5} fill="none" stroke="white">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            Book Free Demo
          </button>

          <Link href={"/courses"}>
            <button className="inline-flex items-center gap-2 bg-white text-[#094E93]
            border-[2px] border-[#DDE5F9] rounded-[12px]
            px-6 py-[13px] text-[14px] font-bold cursor-pointer
            transition-all duration-200 hover:-translate-y-0.5
            hover:border-[#094E93] hover:text-[#094E93] hover:bg-[#EAF2FB]"
              style={{ fontFamily: "inherit" }}>
              <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" strokeWidth={2.5} fill="none" stroke="currentColor">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              Explore Courses
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="inline-flex flex-wrap justify-center bg-[#F4F7FF] border border-[#DDE5F8] rounded-[14px] overflow-hidden">
          <Stat num="20" accent="K+" label="Students" />
          <Stat num="125" accent="+" label="Courses" />
          <Stat num="94" accent="%" label="Placement" />
          <Stat num="4.9" accent="★" label="Rating" noBorder />
        </div>



      </div>
    </section>
  );
}