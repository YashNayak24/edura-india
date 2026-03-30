const featureRows = ['Mobile App Access','LMS Platform','Study Material','Placement Program','WhatsApp Cell','Job Portal','100% Placement','Certification'];

// SVG icons for providers
const IcoLaptop = () => (
  <svg viewBox="0 0 40 40" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="9" width="28" height="18" rx="3" stroke="#5A6A8A" strokeWidth="2"/>
    <rect x="10" y="13" width="20" height="10" rx="1.5" fill="#DDE5F8"/>
    <path d="M2 29h36" stroke="#5A6A8A" strokeWidth="2" strokeLinecap="round"/>
    <path d="M15 29l-2 4M25 29l2 4" stroke="#5A6A8A" strokeWidth="2" strokeLinecap="round"/>
    <path d="M11 33h18" stroke="#5A6A8A" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IcoGrad = () => (
  <svg viewBox="0 0 40 40" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="20,7 36,15 20,23 4,15" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M10 18v8c0 0 4 5 10 5s10-5 10-5v-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="36" y1="15" x2="36" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="36" cy="26" r="2" fill="white"/>
    <path d="M16 30l2 4M24 30l-2 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6"/>
  </svg>
);

const IcoPlay = () => (
  <svg viewBox="0 0 40 40" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="32" height="22" rx="4" stroke="#5A6A8A" strokeWidth="2"/>
    <circle cx="20" cy="19" r="6" fill="#DDE5F8" stroke="#5A6A8A" strokeWidth="1.5"/>
    <polygon points="18,16 18,22 24,19" fill="#5A6A8A"/>
    <path d="M12 34h16" stroke="#5A6A8A" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 30l-1 4M24 30l1 4" stroke="#5A6A8A" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const providers = [
  {name:'Other Platforms', sub:'Generic online courses', IcoComp: IcoLaptop, features:[false,false,false,false,false,false,false,false], star:false},
  {name:'SkillEdge Institute', sub:'Your career partner', IcoComp: IcoGrad, features:[true,true,true,true,true,true,true,true], star:true},
  {name:'YouTube Learning', sub:'Free but unstructured', IcoComp: IcoPlay, features:[false,false,false,false,false,false,false,false], star:false},
];

// Row feature icons (SVG per row)
const rowIcons = [
  // Mobile App
  <svg key="app" viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="#1A4FD6" strokeWidth="1.8"><rect x="5" y="1" width="10" height="18" rx="2.5"/><circle cx="10" cy="15.5" r="1" fill="#1A4FD6"/></svg>,
  // LMS
  <svg key="lms" viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="#1A4FD6" strokeWidth="1.8"><rect x="2" y="3" width="16" height="12" rx="2"/><line x1="6" y1="17" x2="14" y2="17"/><line x1="10" y1="15" x2="10" y2="17"/></svg>,
  // Study Material
  <svg key="study" viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="#1A4FD6" strokeWidth="1.8"><path d="M4 3h9l3 3v11H4V3z"/><path d="M13 3v3h3"/><line x1="7" y1="9" x2="13" y2="9"/><line x1="7" y1="12" x2="11" y2="12"/></svg>,
  // Placement
  <svg key="place" viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="#1A4FD6" strokeWidth="1.8"><rect x="3" y="7" width="14" height="10" rx="2"/><path d="M7 7V5a3 3 0 016 0v2"/><circle cx="10" cy="12" r="1.5" fill="#1A4FD6"/></svg>,
  // WhatsApp
  <svg key="wa" viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="#1A4FD6" strokeWidth="1.8"><path d="M17 3H3a1 1 0 00-1 1v10a1 1 0 001 1h3l2 3 2-3h7a1 1 0 001-1V4a1 1 0 00-1-1z"/><line x1="6" y1="8" x2="14" y2="8"/><line x1="6" y1="11" x2="10" y2="11"/></svg>,
  // Job Portal
  <svg key="job" viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="#1A4FD6" strokeWidth="1.8"><rect x="2" y="6" width="16" height="12" rx="2"/><path d="M7 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/><line x1="2" y1="11" x2="18" y2="11"/></svg>,
  // 100% Placement
  <svg key="100" viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="#1A4FD6" strokeWidth="1.8"><circle cx="10" cy="10" r="8"/><polyline points="6,10 9,13 14,8"/></svg>,
  // Certification
  <svg key="cert" viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="#1A4FD6" strokeWidth="1.8"><rect x="2" y="3" width="16" height="12" rx="2"/><line x1="6" y1="7" x2="14" y2="7"/><line x1="6" y1="10" x2="10" y2="10"/><path d="M12 16l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

export default function Comparison() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#EBF1FF] border border-[#DDE5F8] text-[#1A4FD6] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-4">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="#1A4FD6"><polygon points="8,1 10,6 15,6 11,9 12.5,14 8,11 3.5,14 5,9 1,6 6,6"/></svg>
            Why Choose Us
          </div>
          <h2 className="font-jakarta font-extrabold tracking-tight text-[#0D1E42] mb-3" style={{fontSize:'clamp(24px,3vw,42px)'}}>
            Why Choose <span className="text-[#1A4FD6]">SkillEdge</span>?
          </h2>
          <p className="text-[15px] text-[#5A6A8A] font-medium">Compare the learning experience — not just the content.</p>
        </div>

        {/* ── DESKTOP TABLE ── */}
        <div className="hidden lg:block bg-white rounded-[20px] border border-[#DDE5F8] overflow-hidden" style={{boxShadow:'0 8px 32px rgba(26,79,214,0.07)'}}>

          {/* Header row */}
          <div className="grid bg-[#060E25]" style={{gridTemplateColumns:'2fr 1fr 1fr 1fr'}}>
            <div className="p-5 flex items-center">
              <span className="text-[11px] font-bold text-white/30 tracking-[0.1em] uppercase">Features</span>
            </div>
            {providers.map((p, i) => (
              <div key={p.name} className={`p-5 text-center border-l border-white/6 relative ${i===1?'bg-[#1A4FD6]':''}`}>
                {i===1 && (
                  <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 bg-[#F5A623] text-[#060E25] px-3 py-0.5 rounded-full text-[10px] font-extrabold tracking-[0.05em] whitespace-nowrap">Best Choice</div>
                )}
                {/* Provider icon */}
                <div className={`w-10 h-10 rounded-xl mx-auto mb-2.5 flex items-center justify-center ${i===1?'bg-white/15':'bg-white/6'}`}>
                  <p.IcoComp/>
                </div>
                <div className="text-[13.5px] font-bold text-white/90">{p.name}</div>
                <div className="text-[11px] text-white/45 font-medium mt-0.5">{p.sub}</div>
              </div>
            ))}
          </div>

          {/* Feature rows */}
          {featureRows.map((fr, idx) => (
            <div key={fr} className="grid border-t border-[#DDE5F8] hover:bg-[#F7F9FF] transition-colors" style={{gridTemplateColumns:'2fr 1fr 1fr 1fr'}}>
              <div className="p-3.5 pl-6 flex items-center gap-3 text-[13.5px] font-semibold text-[#0D1E42]">
                <div className="w-7 h-7 rounded-[7px] bg-[#EBF1FF] flex items-center justify-center flex-shrink-0">
                  {rowIcons[idx]}
                </div>
                {fr}
              </div>
              {providers.map((p, i) => (
                <div key={p.name} className={`p-3.5 flex items-center justify-center border-l border-[#DDE5F8] ${i===1?'bg-[#1A4FD6]/3':''}`}>
                  {p.features[idx] ? (
                    <div className="w-7 h-7 rounded-full bg-[#DCFCE7] flex items-center justify-center">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-[#FEE2E2] flex items-center justify-center">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}

          {/* Footer row */}
          <div className="grid border-t border-[#DDE5F8] bg-[#F7F9FF]" style={{gridTemplateColumns:'2fr 1fr 1fr 1fr'}}>
            <div className="p-5"/>
            {providers.map((p, i) => (
              <div key={p.name} className="p-4 flex items-center justify-center border-l border-[#DDE5F8]">
                {i===1 ? (
                  <button className="bg-[#1A4FD6] text-white border-0 rounded-[10px] px-5 py-3 text-[13px] font-bold font-jakarta cursor-pointer hover:bg-[#1240B8] hover:-translate-y-px transition-all" style={{boxShadow:'0 4px 14px rgba(26,79,214,0.25)'}}>
                    Enroll Now
                  </button>
                ) : (
                  <span className="text-[12px] text-[#5A6A8A] font-medium">Not Recommended</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE CARDS ── */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-3 gap-4">
          {providers.map(p => (
            <div key={p.name} className={`bg-white rounded-[20px] overflow-hidden border-2 relative ${p.star?'border-[#1A4FD6] -translate-y-2':'border-[#DDE5F8]'}`}>
              {p.star && (
                <div className="absolute top-[-11px] left-1/2 -translate-x-1/2 bg-[#F5A623] text-[#060E25] px-3 py-0.5 rounded-full text-[10px] font-extrabold whitespace-nowrap">✦ Best Choice</div>
              )}
              <div className={`p-5 text-center border-b border-[#DDE5F8] ${p.star?'bg-[#1A4FD6]':''}`}>
                {/* SVG icon */}
                <div className={`w-12 h-12 rounded-xl mx-auto mb-2.5 flex items-center justify-center ${p.star?'bg-white/15':'bg-[#F4F7FF]'}`}>
                  <p.IcoComp/>
                </div>
                <div className={`text-[15px] font-extrabold ${p.star?'text-white':'text-[#0D1E42]'}`}>{p.name}</div>
                <div className={`text-[11.5px] font-medium mt-1 ${p.star?'text-white/60':'text-[#5A6A8A]'}`}>{p.sub}</div>
              </div>
              <div className="p-4">
                {featureRows.map((fr, j) => (
                  <div key={fr} className="flex items-center gap-2.5 py-2 border-b border-[#DDE5F8] last:border-b-0">
                    {p.features[j] ? (
                      <div className="w-5 h-5 rounded-full bg-[#DCFCE7] flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-[#FEE2E2] flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 flex-1">
                      <span className="opacity-60">{rowIcons[j]}</span>
                      <span className={`text-[12px] font-medium ${p.features[j]?'text-[#0D1E42]':'text-[#5A6A8A]'}`}>{fr}</span>
                    </div>
                  </div>
                ))}
                {p.star && (
                  <button className="mt-4 w-full bg-[#1A4FD6] text-white border-0 rounded-[10px] py-3 text-[13px] font-bold font-jakarta cursor-pointer" style={{boxShadow:'0 4px 14px rgba(26,79,214,0.25)'}}>
                    Enroll Now →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}