const KF = `
  @keyframes companiesFwd { 0% { transform:translateX(0) } 100% { transform:translateX(-50%) } }
  @keyframes companiesRev { 0% { transform:translateX(-50%) } 100% { transform:translateX(0) } }
`

/* ── Company data — replace logo URLs with your actual assets ── */
const ROW1 = [
    { name: "Asian Paints", logo: null },
    { name: "Bajaj Finserv", logo: null },
    { name: "Birlasoft", logo: null },
    { name: "Hero", logo: null },
    { name: "Kotak Mahindra", logo: null },
    { name: "Tech Mahindra", logo: null },
    { name: "Maruti Suzuki", logo: null },
    { name: "Muthoot Finance", logo: null },
]

const ROW2 = [
    { name: "BluEnt", logo: null },
    { name: "DTDC", logo: null },
    { name: "Pidilite", logo: null },
    { name: "Altitude Software", logo: null },
    { name: "Ogilvy", logo: null },
    { name: "WPP", logo: null },
    { name: "Dentsu", logo: null },
    { name: "Flipkart", logo: null },
]

/* ── Single company card ── */
function CompanyCard({ company }) {
    return (
        <div className="bg-white border border-[#DDE5F8] rounded-[18px] px-5 py-4
      flex items-center gap-3 min-w-[220px] flex-shrink-0 cursor-default
      transition-all duration-200 hover:border-[#094E93] hover:shadow-[0_8px_24px_rgba(9,78,147,0.12)]
      group">
            {company.logo ? (
                <img
                    src={company.logo}
                    alt={company.name}
                    className="h-9 w-auto max-w-[80px] object-contain flex-shrink-0
            grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                />
            ) : (
                /* Fallback initials avatar when no logo */
                <div className="w-10 h-10 rounded-[10px] bg-[#EBF1FF] flex items-center justify-center
          text-[#094E93] font-extrabold text-[15px] flex-shrink-0
          group-hover:bg-[#094E93] group-hover:text-white transition-all duration-200">
                    {company.name.charAt(0)}
                </div>
            )}
            <span className="text-[14px] font-bold text-[#0D1E42] leading-tight whitespace-nowrap">
                {company.name}
            </span>
        </div>
    )
}

/* ── Marquee row ── */
function CompanyRow({ items, reverse = false }) {
    const doubled = [...items, ...items]
    return (
        <div className="overflow-hidden">
            <div
                className="flex gap-4 w-max"
                style={{ animation: `${reverse ? 'companiesRev' : 'companiesFwd'} ${reverse ? '24s' : '22s'} linear infinite` }}
                onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
                onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
            >
                {doubled.map((c, i) => (
                    <CompanyCard key={`${c.name}-${i}`} company={c} />
                ))}
            </div>
        </div>
    )
}

/* ══ MAIN EXPORT ══ */
export default function HiringCompanies() {
    return (
        <>
            <style>{KF}</style>

            <section className="pt-10 py-16 overflow-hidden"
                style={{ background: "#eef4fb" }}>

                <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                        {/* ── LEFT: Text card ── */}
                        <div className="w-full  flex-shrink-0">
                            <div className="relative rounded-[24px] overflow-hidden p-8 sm:p-10"
                            >

                                {/* dot grid */}
                                <div className="absolute inset-0 pointer-events-none"
                                    style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1.5px,transparent 1.5px)', backgroundSize: '24px 24px' }} />
                                {/* glow */}
                                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
                                />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full pointer-events-none"
                                />

                                <div className="relative z-10">
                                    {/* Tag */}
                                    <div className="inline-flex items-center gap-2 bg-[#DBEAFE] 
                    text-[#094E93] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.08em] mb-6">
                                        <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5}>
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
                                        </svg>
                                        {/* Placement Partners */}
                                        Student Get Hired
                                    </div>
                                    
                                    <h2 className="text-[clamp(22px,2.8vw,40px)] font-extrabold tracking-[-0.03em] text-[#0D1E42] mb-2 leading-tight">
                                        Where Our Students {" "}
                                        <em className="not-italic" style={{ color: "#094E93" }}>Get Hired</em>
                                    </h2>

                                    {/* <p className="text-[14px] leading-[1.8]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                                        Our certificates are backed by leading companies. With a strong placement cell and
                                        100% job assistance, we enable students to enter their dream jobs with professional proficiency.
                                    </p> */}




                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ── Marquee rows (mobile + all screens below lg hero) ── */}
                <div className=" flex flex-col gap-4 ">
                    {/* <CompanyRow items={ROW1} reverse={false}/> */}
                    <CompanyRow items={ROW2} reverse={true} />
                    <CompanyRow items={[...ROW1, ...ROW2]} reverse={false} />
                </div>

            </section>
        </>
    )
}