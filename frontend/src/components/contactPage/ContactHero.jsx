export default function ContactHero() {
  return (
    <div className="relative bg-[#F0F5FF] px-7 pt-[150px] pb-20 overflow-hidden border-b border-[#DDE5F8]">

      {/* dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage:"radial-gradient(rgba(9,78,147,.045) 1px,transparent 1px)", backgroundSize:"24px 24px" }}/>

      {/* bottom wave into white */}
      <div className="absolute bottom-[-2px] left-0 right-0 h-12 bg-white"
        style={{ clipPath:"ellipse(52% 100% at 50% 100%)" }}/>

      {/* watermark */}
      <span
        className="absolute right-[-10px] top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none tracking-[-0.04em] whitespace-nowrap"
        style={{ fontSize:"clamp(80px,14vw,160px)", color:"rgba(9,78,147,.07)" }}
      >
        CONTACT
      </span>

      <div className="relative z-10 max-w-[1160px] mx-auto">

        {/* badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-[#DDE5F8] rounded-full
          px-[14px] py-[5px] mb-[22px] shadow-[0_2px_8px_rgba(9,78,147,.08)]">
          <span className="w-2 h-2 rounded-full bg-[#094E93] flex-shrink-0"
            style={{ animation:"glow 2s ease-in-out infinite" }}/>
          <span className="text-[11px] font-bold text-[#5A6A8A] uppercase tracking-[.07em]">
            We reply within 24 hours
          </span>
        </div>

        <h1 className="font-black tracking-[-0.04em] leading-[1.06] text-[#0D1E42] mb-[14px] max-w-[640px]"
          style={{ fontSize:"clamp(30px,5vw,58px)" }}>
          Get in Touch<br/>with <span className="text-[#094E93]">Edura</span>.
        </h1>

        <p className="text-[15.5px] text-[#5A6A8A] font-medium leading-[1.75] max-w-[500px] mb-7">
          Have questions about courses, admissions or placement? Reach out any way you prefer — we're always happy to help.
        </p>

        <div className="flex flex-wrap gap-2">
          {["Award-Winning Institute","Trusted Since 2015","4.9★ Google Rating","20,000+ Students"].map(c => (
            <span key={c} className="inline-flex items-center gap-[6px] bg-white border border-[#DDE5F8]
              rounded-full px-[13px] py-[5px] text-[11px] font-bold text-[#5A6A8A]
              shadow-[0_1px_4px_rgba(9,78,147,.06)]">
              <span className="w-[5px] h-[5px] rounded-full bg-[#094E93] flex-shrink-0"/>
              {c}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes glow {
          0%,100% { box-shadow:0 0 0 0 rgba(9,78,147,.4); }
          60%      { box-shadow:0 0 0 6px rgba(9,78,147,0); }
        }
      `}</style>
    </div>
  )
}