import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// ─── SVG Icons ───────────────────────────────────────────────────────────────
const Icons = {
  career: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current" strokeWidth={2} fill="none">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  portal: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current" strokeWidth={2} fill="none">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  lms: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current" strokeWidth={2} fill="none">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  ),
  mock: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current" strokeWidth={2} fill="none">
      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
      <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-[#094E93]" strokeWidth={2} fill="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white" strokeWidth={2.5} fill="none">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 2.18 2 2 0 013.72 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
    </svg>
  ),
  send: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white" strokeWidth={2.5} fill="none">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-[#094E93]" strokeWidth={2} fill="none">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-[#094E93]" strokeWidth={2} fill="none">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
    </svg>
  ),
};

// ─── Tab Data ─────────────────────────────────────────────────────────────────
const tabs = [
  { key: "career", label: "Career Guidance", icon: Icons.career },
  { key: "portal", label: "Student Portal", icon: Icons.portal },
  { key: "lms", label: "LMS Access", icon: Icons.lms },
  { key: "mock", label: "Mock Interviews", icon: Icons.mock },
];

// ─── Panel Data ───────────────────────────────────────────────────────────────
const panels = {
  career: {
    lottieSrc: "https://lottie.host/f101c054-f61e-4300-8b63-35a895d9cb2a/ybTJGyoZgd.lottie",
    imgLabel: { icon: Icons.star, text: "1-on-1 with Industry Mentors" },
    imgCaption: "Career Guidance Session",
    tag: "Career Guidance",
    title: "Personalized Career Guidance",
    desc: "One-on-one mentoring, resume shaping, interview roadmap and placement strategy tailored to your goals — not a generic template.",
    chips: ["1:1 Mentorship", "Resume Building", "Career Roadmap", "Interview Prep"],
    btnLabel: "Call Now",
    btnIcon: Icons.phone,
  },
  portal: {
    lottieSrc: "https://lottie.host/f101c054-f61e-4300-8b63-35a895d9cb2a/ybTJGyoZgd.lottie",
    imgLabel: { icon: Icons.monitor, text: "Live Progress Tracking" },
    imgCaption: "Student Portal Dashboard",
    tag: "Student Portal",
    title: "Your Personal Learning Hub",
    desc: "Track your progress, submit assignments, view your schedule, and access all course resources from one centralised portal — available 24/7.",
    chips: ["Progress Tracking", "Assignment Submit", "Resource Library"],
    btnLabel: "Access Portal",
    btnIcon: Icons.send,
  },
  lms: {
    lottieSrc: "https://lottie.host/f101c054-f61e-4300-8b63-35a895d9cb2a/ybTJGyoZgd.lottie",
    imgLabel: { icon: Icons.clock, text: "Lifetime Access to Content" },
    imgCaption: "Learning Management System",
    tag: "LMS Access",
    title: "Full LMS Platform Access",
    desc: "Access recorded lectures, PDF notes, revision tests, and live class schedules anytime — from mobile or desktop with lifetime access included.",
    chips: ["Recorded Lectures", "PDF Notes", "Revision Tests", "Mobile Access"],
    btnLabel: "Explore LMS",
    btnIcon: Icons.send,
  },
  mock: {
    lottieSrc: "https://lottie.host/f101c054-f61e-4300-8b63-35a895d9cb2a/ybTJGyoZgd.lottie",
    imgLabel: { icon: Icons.star, text: "AI-Scored Feedback" },
    imgCaption: "Mock Interview Practice",
    tag: "Mock Interviews",
    title: "Real Mock Interview Sessions",
    desc: "Practice with real interview questions from top companies. Get AI-scored feedback, communication tips, and confidence-building exercises.",
    chips: ["Real Questions", "AI Feedback", "HR Round Prep", "Confidence Building"],
    btnLabel: "Book Mock Session",
    btnIcon: Icons.phone,
  },
};

// ─── Chip Component (with blue ring + border on hover) ────────────────────────
function Chip({ label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="
        relative bg-white text-[#0D1E42]
        px-3.5 py-[6px] rounded-full
        text-[11.5px] sm:text-[12.5px] font-semibold
        cursor-default select-none
        transition-all duration-200
      "
      style={{
        border: hovered ? "2px solid #094E93" : "2px solid #DDE5F8",
        color: hovered ? "#094E93" : "#0D1E42",
        background: hovered ? "#EAF2FB" : "#ffffff",
        boxShadow: hovered ? "0 0 0 3px rgba(9,78,147,0.13)" : "none",
      }}
    >
      {label}
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function FreeFeatures() {
  const [active, setActive] = useState("career");
  const panel = panels[active];

  return (
    <section className="bg-zinc-50 py-16 sm:py-20 lg:py-[88px]">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-9">

        {/* ── Section Header ── */}
        <div className="text-center mb-8 sm:mb-10">
          <div
            className="inline-flex items-center gap-[7px] border px-[14px] py-1 rounded-full
              text-[11px] font-bold tracking-[0.07em] uppercase mb-3"
            style={{ background: "#EAF2FB", borderColor: "#C5DAF0", color: "#094E93" }}
          >
            Free with Every Course
          </div>

          <h2 className="text-[clamp(22px,2.8vw,40px)] font-extrabold tracking-[-0.03em] text-[#0D1E42] mb-2 leading-tight">
            Free Features &amp;{" "}
            <em className="not-italic" style={{ color: "#094E93" }}>Mentorship</em> with Every Course
          </h2>

          <p className="text-sm sm:text-[15px] text-[#5A6A8A] font-medium max-w-[520px] mx-auto">
            Every course comes with complimentary services to boost your skills, confidence, and career growth.
          </p>
        </div>

        {/* ── Panel ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">

          {/* ── Lottie Box ── */}
          <div
            className="w-full sm:w-[90%] lg:w-[420px] lg:flex-shrink-0
              rounded-[18px] overflow-hidden aspect-[4/3] relative"
            style={{ background: "#EAF2FB", border: "2px solid #094E93" }}
          >
            {/* dot-grid overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(rgba(9,78,147,0.1) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            {/* Lottie */}
            <div className="relative flex items-center justify-center w-full h-full z-0">
              <DotLottieReact
                src={panel.lottieSrc}
                loop
                autoplay
                style={{ width: "auto", height: "100%" }}
              />
            </div>

            {/* Overlay Label */}
            <div
              className="absolute bottom-4 left-4 backdrop-blur-sm rounded-[10px]
                px-3.5 py-2.5 flex items-center gap-2
                shadow-[0_4px_16px_rgba(8,17,43,0.1)]"
              style={{ background: "rgba(255,255,255,0.92)", border: "1px solid #C5DAF0" }}
            >
              {panel.imgLabel.icon}
              <span className="text-[11px] sm:text-[12.5px] font-bold text-[#0D1E42] whitespace-nowrap z-10">
                {panel.imgLabel.text}
              </span>
            </div>
          </div>

          {/* ── Content ── */}
          <div className="flex-1 w-full">

            {/* Tag */}
            <div
              className="inline-block px-3 py-[3px] rounded-[5px]
                text-[10px] sm:text-[10.5px] font-bold tracking-[0.06em] uppercase
                mb-3 sm:mb-[14px]"
              style={{ background: "#EAF2FB", color: "#094E93" }}
            >
              {panel.tag}
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold tracking-[-0.03em] text-[#0D1E42] mb-3 leading-[1.15]">
              {panel.title}
            </h3>

            <p className="text-sm sm:text-[14.5px] text-[#5A6A8A] leading-[1.75] font-medium mb-5">
              {panel.desc}
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {panel.chips.map((chip) => (
                <Chip key={chip} label={chip} />
              ))}
            </div>

            {/* CTA Button */}
            <style>{`
  @keyframes pulse-blue {
    0%, 100% { transform: scale(1); box-shadow: 0 6px 18px rgba(9,78,147,0.28); }
    50% { transform: scale(1.05); box-shadow: 0 8px 22px rgba(9,78,147,0.4); }
  }
  .pulse-blue {
    animation: pulse-blue 2s ease-in-out infinite;
  }
  .pulse-blue:hover {
    animation: none;
    transform: translateY(-2px);
  }
`}</style>

            <button
              className="pulse-blue inline-flex items-center gap-2 text-white border-none rounded-[10px]
    px-5 sm:px-[26px] py-3 sm:py-[13px]
    text-[13px] sm:text-[14px] font-bold cursor-pointer
    transition-all duration-200 font-[inherit]"
              style={{
                background: "#094E93",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#073E75";
                e.currentTarget.style.boxShadow = "0 10px 26px rgba(9,78,147,0.38)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#094E93";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              {panel.btnIcon}
              {panel.btnLabel}
            </button>

          </div>
        </div>

        {/* ── Footer Note ── */}
        <p className="text-center mt-8 text-[13px] sm:text-[13.5px] text-[#5A6A8A] font-medium">
          Trusted by <strong className="text-[#0D1E42]">20,000+ students</strong> — join thousands who've upskilled and succeeded with SkillEdge.
        </p>

      </div>
    </section>
  );
}