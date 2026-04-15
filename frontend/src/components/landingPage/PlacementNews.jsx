const students = [
  { id:1, name:"Urvashi",   company:"Xgraphics.com",    role:"UI Designer",        initials:"UV", color:"#e879a0" },
  { id:2, name:"Mr Subham", company:"EikoMP",           role:"Dev Lead",            initials:"SB", color:"#38bdf8" },
  { id:3, name:"Mr Sahil",  company:"Zobox",            role:"Frontend Developer",  initials:"SL", color:"#fb923c" },
  { id:4, name:"Mr Rohit",  company:"Branding Pioneer", role:"Brand Strategist",    initials:"RK", color:"#a78bfa" },
  { id:5, name:"Ms Priya",  company:"TechNova",         role:"Full Stack Dev",      initials:"PR", color:"#34d399" },
  { id:6, name:"Mr Aman",   company:"DesignHub",        role:"UX Researcher",       initials:"AM", color:"#f472b6" },
  { id:7, name:"Ms Neha",   company:"CloudSoft",        role:"Data Analyst",        initials:"NH", color:"#fbbf24" },
  { id:8, name:"Mr Vikas",  company:"PixelCraft",       role:"Motion Designer",     initials:"VK", color:"#60a5fa" },
]

const doubled = [...students, ...students]

const KF = `
  @keyframes marquee-scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes blink-dot {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.25; }
  }
  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee-scroll 34s linear infinite;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  .marquee-viewport:hover .marquee-track {
    animation-play-state: paused;
  }
  .live-dot {
    animation: blink-dot 1.2s ease-in-out infinite;
  }
`

/* ── Check SVG icon ── */
const CheckIcon = () => (
  <span className="w-[15px] h-[15px] rounded-full bg-[#DCFCE7] flex items-center justify-center flex-shrink-0">
    <svg viewBox="0 0 24 24" className="w-[9px] h-[9px]" fill="none" stroke="#16A34A" strokeWidth={3}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  </span>
)

export default function PlacementNews() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"/>
      <style>{KF}</style>

      <section className="py-14 sm:py-16 overflow-hidden"
  style={{
    background: "linear-gradient(160deg, #EEF4FF 0%, #E8F0FD 50%, #DCE9FF 100%)",
    fontFamily: "'Plus Jakarta Sans', sans-serif",  // ✅ Fixed
  }}>

  <div className="text-center mb-10 px-5">

    {/* Live badge */}
    <div className="inline-flex items-center gap-[7px] bg-[#FEE2E2] border border-[#FECACA]
      rounded-full px-[14px] py-[5px] mb-[14px]">
      <span className="live-dot w-2 h-2 rounded-full bg-[#EF4444] flex-shrink-0"/>
      <span className="text-[11px] font-bold tracking-[0.6px] uppercase text-[#DC2626]">
        Live Update
      </span>
    </div>

    <h2
      className="font-black text-[#0D1B2A] leading-[1.1] tracking-[-0.5px]"
      style={{ fontSize: "clamp(28px, 4.5vw, 50px)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      Placement <span style={{ color: "#094E93" }}>News</span>
    </h2>

    <p style={{
      fontSize: "15px",
      color: "#6B7280",
      fontWeight: 500,
      marginTop: "8px",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      Our students are getting placed at top companies
    </p>
  </div>

        {/* ── Marquee ── */}
        <div className="marquee-viewport relative overflow-hidden
          before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[110px] before:z-[2]
          before:bg-gradient-to-r before:from-[#EEF4FF] before:to-transparent before:pointer-events-none
          after:absolute after:right-0 after:top-0 after:bottom-0 after:w-[110px] after:z-[2]
          after:bg-gradient-to-l after:from-[#DCE9FF] after:to-transparent after:pointer-events-none">

          <div className="marquee-track" style={{ paddingBlock: "10px" }}>
            {doubled.map((s, i) => (
              <div key={`${s.id}-${i}`}
                className="flex items-center gap-[40px]
                  rounded-[22px] px-[30px] py-4 mx-[9px]
                  cursor-default select-none
                  transition-all duration-[250ms]
                  hover:-translate-y-[3px]
                  hover:shadow-lg"
                style={{
                  minWidth: "200px",
                  background: "rgba(255,255,255,0.82)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1px solid rgba(9,78,147,0.10)",
                }}>

                {/* Avatar */}
                <div
                  className="w-[50px] h-[50px] rounded-full flex items-center justify-center
                    text-[15px] font-extrabold text-white flex-shrink-0
                    border-[2.5px] border-white/75"
                  style={{
                    background: `linear-gradient(135deg, ${s.color}cc, ${s.color})`,
                    boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
                  }}>
                  {s.initials}
                </div>

                {/* Info */}
                <div>
                  {/* Placed label */}
                  <div className="flex items-center gap-1 mb-[3px]">
                    <CheckIcon/>
                    <span className="text-[11px] font-bold text-[#16A34A] tracking-[0.2px]">
                      Placed
                    </span>
                  </div>

                  <div className="text-[15px] font-extrabold text-[#111827] leading-[1.2]">
                    {s.name}
                  </div>
                  <div className="text-[11.5px] text-[#9CA3AF] font-medium mt-[1px]">{s.role}</div>
                  <div className="text-[12.5px] font-bold text-[#094E93] mt-[2px]">{s.company}</div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}