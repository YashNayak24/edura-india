import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";

// ─── Phone Number ─────────────────────────────────────────────────────────────
const PHONE_NUMBER = "+919217489565"; // ← apna number yahan daalo

// ─── SVG Icons ───────────────────────────────────────────────────────────────
const Icons = {
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
};

// ─── Chip Component ────────────────────────────────────────────────────────────
function Chip({ label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="px-3.5 py-[6px] rounded-full text-[11.5px] sm:text-[12.5px] font-semibold cursor-default select-none transition-all duration-200"
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
export default function Guidance() {
  const chips = ["1:1 Mentorship", "Resume Building", "Career Roadmap", "Interview Prep"];

  const btnStyle = {
    background: "#094E93",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "12px 26px",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    textDecoration: "none",
    fontFamily: "inherit",
  };

  return (
    <section className="bg-zinc-50 py-16 sm:py-20 lg:py-[88px]">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-9">

        {/* ── Section Header ── */}
        <div className="text-center mb-8 sm:mb-10">
          <div
            className="inline-flex items-center gap-[7px] border px-[14px] py-1 rounded-full text-[11px] font-bold tracking-[0.07em] uppercase mb-3"
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
            className="w-full sm:w-[90%] lg:w-[420px] lg:flex-shrink-0 rounded-[18px] overflow-hidden aspect-[4/3] relative"
            style={{ background: "#EAF2FB", border: "2px solid #094E93" }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(rgba(9,78,147,0.1) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="relative flex items-center justify-center w-full h-full z-0">
              <DotLottieReact
                src="https://lottie.host/f101c054-f61e-4300-8b63-35a895d9cb2a/ybTJGyoZgd.lottie"
                loop
                autoplay
                style={{ width: "auto", height: "100%" }}
              />
            </div>
            <div
              className="absolute bottom-4 left-4 backdrop-blur-sm rounded-[10px] px-3.5 py-2.5 flex items-center gap-2 shadow-[0_4px_16px_rgba(8,17,43,0.1)]"
              style={{ background: "rgba(255,255,255,0.92)", border: "1px solid #C5DAF0" }}
            >
              {Icons.star}
              <span className="text-[11px] sm:text-[12.5px] font-bold text-[#0D1E42] whitespace-nowrap z-10">
                1-on-1 with Industry Mentors
              </span>
            </div>
          </div>

          {/* ── Content ── */}
          <div className="flex-1 w-full">

            <div
              className="inline-block px-3 py-[3px] rounded-[5px] text-[10px] sm:text-[10.5px] font-bold tracking-[0.06em] uppercase mb-3 sm:mb-[14px]"
              style={{ background: "#EAF2FB", color: "#094E93" }}
            >
              Career Guidance
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold tracking-[-0.03em] text-[#0D1E42] mb-3 leading-[1.15]">
              Personalized Career Guidance
            </h3>

            <p className="text-sm sm:text-[14.5px] text-[#5A6A8A] leading-[1.75] font-medium mb-5">
              One-on-one mentoring, resume shaping, interview roadmap and placement strategy tailored to your goals — not a generic template.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {chips.map((chip) => (
                <Chip key={chip} label={chip} />
              ))}
            </div>

            {/* ── Call Now Button ── */}
            <style>{`
              @keyframes pulse-blue {
                0%, 100% { transform: scale(1); box-shadow: 0 6px 18px rgba(9,78,147,0.28); }
                50% { transform: scale(1.05); box-shadow: 0 8px 22px rgba(9,78,147,0.4); }
              }
              .pulse-blue { animation: pulse-blue 2s ease-in-out infinite; }
              .pulse-blue:hover { animation: none; transform: translateY(-2px); }
            `}</style>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="pulse-blue"
              style={btnStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#073E75";
                e.currentTarget.style.boxShadow = "0 10px 26px rgba(9,78,147,0.38)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#094E93";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              {Icons.phone}
              Call Now
            </a>

          </div>
        </div>

        {/* ── Footer Note ── */}
        <p className="text-center mt-8 text-[13px] sm:text-[13.5px] text-[#5A6A8A] font-medium">
          Trusted by <strong className="text-[#0D1E42]">20,000+ students</strong> — join thousands who've upskilled and succeeded with Edura.
        </p>

      </div>
    </section>
  );
}