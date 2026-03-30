const STATS = [
  { val:"18,000+", lbl:"Students Enrolled", icon:<><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></> },
  { val:"4.8 / 5", lbl:"Avg. Rating",       icon:<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/> },
  { val:"92%",     lbl:"Placement Rate",    icon:<><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></> },
  { val:"125+",    lbl:"Total Courses",     icon:<><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></> },
]

export default function CoursesBanner() {
  return (
    <div className="relative px-4 sm:px-7 pt-[150px] pb-8 overflow-hidden"
      style={{ background:"linear-gradient(135deg,#094E93,#0A5FAD)" }}>

      {/* pattern overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}/>

      <div className="max-w-[1400px] mx-auto relative">
        
        <div className="text-[clamp(22px,3vw,34px)] font-black text-white tracking-[-0.04em] mb-[6px]">
          All Courses — 125+ Programs
        </div>
        <div className="text-[14px] text-white/75 font-medium mb-5">
          Design · Coding · Marketing · AI · Degree Programs · Short Term Certifications
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-5 sm:gap-6">
          {STATS.map(s => (
            <div key={s.lbl} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/15 border border-white/20 rounded-[8px] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke="white" strokeWidth={2}>
                  {s.icon}
                </svg>
              </div>
              <div>
                <div className="text-[15px] font-extrabold text-white leading-none">{s.val}</div>
                <div className="text-[11px] text-white/70 font-semibold mt-[2px]">{s.lbl}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}