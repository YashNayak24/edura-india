const KF = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@400;500;600;700;800;900&display=swap');

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes dotPulse {
    0%, 100% { opacity: 1;  transform: scale(1);   }
    50%       { opacity: .5; transform: scale(1.5); }
  }
  @keyframes floatCard {
    0%, 100% { transform: translateY(0px);  }
    50%       { transform: translateY(-7px); }
  }

  .ani-1 { animation: fadeUp .65s .05s both; }
  .ani-2 { animation: fadeUp .65s .15s both; }
  .ani-3 { animation: fadeUp .65s .25s both; }
  .ani-4 { animation: fadeUp .65s .35s both; }
  .ani-5 { animation: fadeUp .65s .45s both; }
  .pulse  { animation: dotPulse 2.2s ease-in-out infinite; }
  .float-1 { animation: floatCard 4s   ease-in-out infinite; }
  .float-2 { animation: floatCard 4s .5s ease-in-out infinite; }
  .float-3 { animation: floatCard 4s 1s ease-in-out infinite; }
`

export default function LandingAbout() {
  return (
    <>
      <style>{KF}</style>

      <section
        style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
        className="relative overflow-hidden bg-white"
      >
        {/* ── Soft top-surface gradient ── */}
        <div className="absolute top-0 left-0 right-0 h-[52%] pointer-events-none"
          style={{ background: "linear-gradient(180deg,#F4F7FF 0%,#fff 100%)" }} />

        {/* ── Dot-grid overlay ── */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(9,78,147,.12) 1.2px, transparent 1.2px)",
            backgroundSize: "26px 26px",
          }} />

        {/* ── Radial centre glow ── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(9,78,147,.06) 0%, transparent 70%)" }} />

        {/* ══ Content ══ */}
        <div className="relative z-10 max-w-[820px] mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center">

          {/* Badge */}
          <div className="ani-1 inline-flex items-center gap-2 rounded-full px-[18px] py-[6px] mb-7
            border border-[#DDE5F8] bg-[#EBF1FF]">
            <span className="pulse w-2 h-2 rounded-full bg-[#059669] flex-shrink-0" />
            <span className="text-[11px] font-bold text-[#094E93] uppercase tracking-[0.10em]">
              About EduraIndia
            </span>
          </div>

          {/* H1 */}
          <h1
            className="ani-2 font-black text-[#0D1E42] leading-[1.06] tracking-[-0.03em] mb-5 font-jakarta"
            style={{ fontSize: "clamp(30px, 5vw, 58px)", }}
          >
            Best Computer Institute<br />
            in Delhi for{" "}
            <span className="text-[#094E93]">Digital Marketing,</span>
            <br />
            <span className="text-[#094E93]">Data Analyst</span>{" "}
            <span className="text-[#5A6A8A] font-bold">&amp; More</span>
          </h1>

          {/* Description */}
          {/* <p className="ani-3 text-[15.5px] text-[#5A6A8A] font-medium leading-[1.82] max-w-[520px] mx-auto mb-10">
            At <strong className="text-[#0D1E42] font-bold">EduraIndia</strong>, we are recognised as a
            professional computer training institute offering{" "}
            <strong className="text-[#0D1E42] font-bold">practical skills</strong> and{" "}
            <strong className="text-[#0D1E42] font-bold">professional development</strong> for both
            beginners and advanced learners — with expert guidance and strong career opportunities.
          </p> */}

          <div className="ani-5 bg-[#F4F7FF] border border-[#DDE5F8] rounded-[18px] px-6 sm:px-7 py-6 text-left  mb-9">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[10px] bg-[#EBF1FF] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#094E93" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <div>
                <div className="text-[10.5px] font-extrabold text-[#094E93] uppercase tracking-[0.08em] mb-2">
                  About EduraIndia
                </div>
                <p className="text-[13.5px] text-[#5A6A8A] font-medium leading-[1.8] max-w-[680px]">
                  As one of the{" "}
                  <strong className="text-[#0D1E42]">best computer institutes in Delhi</strong>,
                  EduraIndia offers industry-relevant programs for both beginners and professionals.
                  Whether you are exploring{" "}
                  <strong className="text-[#0D1E42]">computer courses for beginners</strong> or
                  searching for a trusted{" "}
                  <strong className="text-[#0D1E42]">computer training institute near me</strong>,
                  our hands-on approach ensures real skills, expert guidance, and strong placement support.
                </p>
              </div>
            </div>
          </div>


          {/* ── Stat cards ── */}
          <div className="ani-4 grid grid-cols-3 gap-4">
            {[
              { num: "10+",   label: "Courses Offered",  delay: "float-1" },
              { num: "5000+", label: "Students Trained", delay: "float-2" },
              { num: "95%",   label: "Placement Rate",   delay: "float-3" },
            ].map(({ num, label, delay }) => (
              <div
                key={label}
                className={`${delay} bg-[#F4F7FF] border border-[#DDE5F8] rounded-2xl py-5 px-3 text-center`}
              >
                <div
                  className="font-black text-[#094E93] leading-none mb-1.5 font-jakarta"
                  style={{ fontSize: "clamp(28px,5vw,38px)", }}
                >
                  {num}
                </div>
                <div className="text-[11.5px] font-bold text-[#5A6A8A] uppercase tracking-[0.05em]">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* ── About SEO box ── */}
          
        </div>
      </section>
    </>
  )
}