import { useReveal, useCounter, Reveal } from "./utils";
import { IconUsers, IconBook, IconTrend, IconStar, IconClock, IconHome } from "./icons";

/* ── Marquee items ── */
const MARQUEE_ITEMS = [
  "Adobe Certified Trainers",
  "Microsoft Learn Partner",
  "4.9★ Google Rating",
  "20,000+ Students Placed",
  "100% Placement Assistance",
  "Industry Expert Trainers",
  "Live + Recorded Sessions",
  "Delhi NCR's #1 Institute",
  "AI-Integrated Curriculum",
];

function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]; // duplicate for seamless -50% loop
  return (
    <div className="bg-[#094E93] py-3.5 overflow-hidden w-full">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center px-7 text-white/85 text-[13px] font-medium whitespace-nowrap flex-shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-[#F5A623] mr-2.5 flex-shrink-0" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Individual stat card with animated counter ── */
function StatCard({ icon, bg, target, suffix, label, color, decimals }) {
  const [ref, val]      = useCounter(target, suffix, decimals);
  const [rRef, visible] = useReveal();

  // merge both refs into the same DOM node
  const mergedRef = (el) => {
    ref.current  = el;
    rRef.current = el;
  };

  return (
    <div
      ref={mergedRef}
      className={`flex flex-col gap-3 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm
        hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(9,78,147,0.12)] cursor-default
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transition: "opacity 0.65s ease, transform 0.65s ease, box-shadow 0.3s ease" }}
    >
      <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: bg }}>
        {icon}
      </div>
      <div className="text-4xl font-black leading-none" style={{ color }}>{val}</div>
      <div className="text-[13px] text-gray-400 font-medium">{label}</div>
    </div>
  );
}

/* ── Stat data ── */
const STATS = [
  { icon: <IconUsers color="#094E93" />, bg: "#EFF6FF", target: 20000, suffix: "+",  label: "Students Trained",   color: "#094E93" },
  { icon: <IconBook  color="#7c3aed" />, bg: "#F5F3FF", target: 125,   suffix: "+",  label: "Industry Courses",   color: "#7c3aed" },
  { icon: <IconTrend color="#16a34a" />, bg: "#F0FDF4", target: 94,    suffix: "%",  label: "Placement Rate",     color: "#16a34a" },
  { icon: <IconStar  color="#d97706" />, bg: "#FFFBEB", target: 49,    suffix: "★",  label: "Google Rating",      color: "#d97706", decimals: true },
  { icon: <IconClock color="#e11d48" />, bg: "#FFF1F2", target: 8,     suffix: "+",  label: "Years Experience",   color: "#e11d48" },
  { icon: <IconHome  color="#0d9488" />, bg: "#F0FDFA", target: 3,     suffix: "",   label: "Delhi NCR Centres",  color: "#0d9488" },
];

export default function AboutStats() {
  return (
    <>
      {/* ── Marquee Bar ── */}
      <Marquee />

      {/* ── Stats Grid ── */}
      <section className="bg-white py-[72px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <Reveal className="text-center mb-12">
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#094E93] bg-[#E8F0FC] px-4 py-1.5 rounded-full mb-4">
              By The Numbers
            </span>
            <h2 className="text-[clamp(26px,4vw,40px)] font-black text-[#0A1628]">
              A Decade of <span className="text-[#094E93]">Impact</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3.5">
            {STATS.map((s, i) => (
              <StatCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}