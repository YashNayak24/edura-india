const quickLinks = ['Home','About Us','Courses','Placement Mastery','Gallery','Blogs','Contact Us','Privacy Policy','Refund Policy','Terms & Conditions'];
const courses = ['Basic Computer Course','Advanced Computer','Graphic Designing','Video Editing','Digital Marketing','Stock Market Trading','Data Analyst','Web Design & Dev','C / C++ / Java / Python','UI / UX Design'];
const branches = [
  {type:'Head Office',addr:'G-33, 1st Floor, Main Road Kalkaji, New Delhi-110019',phone:'+91 99999 96162'},
  {type:'Registered Office',addr:'H-18/B, 2nd Floor, Kalkaji Main Road, New Delhi-110019',phone:'+91 99999 12345'},
  {type:'Branch Office',addr:'Nirman Vihar, East Delhi - 110092',phone:'+91 99991 99651'},
];
const certs = ['Award-Winning Institute','Trusted Since 2015','20,000+ Students','100% Placement Support'];

export default function Footer() {
  return (
    <footer className="bg-[#024181] pt-16 pb-0 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'radial-gradient(rgba(255,255,255,0.03) 1px,transparent 1px)',backgroundSize:'28px 28px'}}/>
      <div className="absolute top-[-120px] right-[-80px] w-[360px] h-[360px] rounded-full pointer-events-none" style={{background:'radial-gradient(circle,rgba(26,79,214,0.15),transparent 65%)'}}/>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-10 relative z-10">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/7">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-[11px] flex items-center justify-center font-extrabold text-xl text-white" style={{background:'linear-gradient(135deg,#1A4FD6,#2D6BE4)'}}>S</div>
              <div>
                <div className="text-[18px] font-extrabold text-white tracking-tight font-jakarta leading-tight">SkillEdge</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-medium">Institute of Excellence</div>
              </div>
            </div>
            <p className="text-[13px] text-white/45 leading-[1.78] font-medium mb-5">SkillEdge is a premier training organisation committed to empowering learners with future-ready skills — trusted by 20,000+ students across Delhi NCR.</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {certs.map(c => (
                <div key={c} className="flex items-center gap-1.5 bg-white/5 border border-white/8 rounded-[7px] px-2.5 py-1.5 text-[10.5px] font-semibold text-white/50">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  {c}
                </div>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap">
              {['YT','FB','WA','IG','IN'].map(s => (
                <div key={s} className="w-9 h-9 rounded-[9px] bg-white/6 border border-white/8 flex items-center justify-center cursor-pointer hover:bg-[#1A4FD6] hover:border-[#1A4FD6] transition-all text-[11px] font-bold text-white/50 hover:text-white">{s}</div>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-[12px] font-bold text-white/90 tracking-[0.08em] uppercase mb-4 pb-2.5 border-b border-white/8">Quick Links</h4>
            <div className="flex flex-col gap-0.5">
              {quickLinks.map(l => (
                <button key={l} className="flex items-center gap-2 py-1.5 text-[13.5px] font-medium text-white/45 bg-transparent border-0 cursor-pointer text-left hover:text-white/90 transition-colors">
                  <span className="w-1 h-1 rounded-full bg-white/15 flex-shrink-0"/>
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-[12px] font-bold text-white/90 tracking-[0.08em] uppercase mb-4 pb-2.5 border-b border-white/8">Our Courses</h4>
            <div className="flex flex-col gap-0.5">
              {courses.map(c => (
                <button key={c} className="flex items-center gap-2 py-1.5 text-[13.5px] font-medium text-white/45 bg-transparent border-0 cursor-pointer text-left hover:text-white/90 transition-colors">
                  <span className="w-1 h-1 rounded-full bg-white/15 flex-shrink-0"/>
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-[12px] font-bold text-white/90 tracking-[0.08em] uppercase mb-4 pb-2.5 border-b border-white/8">Our Branches</h4>
            {branches.map(b => (
              <div key={b.type} className="mb-5 last:mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  <span className="text-[11px] font-extrabold text-white/80 tracking-[0.07em] uppercase">{b.type}</span>
                </div>
                <div className="pl-5 flex flex-col gap-1.5">
                  <div className="flex items-start gap-2 text-[12.5px] text-white/45 font-medium leading-[1.5]">
                    <svg className="w-3 h-3 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {b.addr}
                  </div>
                  <div className="flex items-center gap-2 text-[12.5px] text-white/45 font-medium">
                    <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81"/></svg>
                    <a href={`tel:${b.phone}`} className="text-white/45 no-underline hover:text-white/80 transition-colors">{b.phone}</a>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2 bg-white/6 border border-white/10 rounded-full px-4 py-2 text-[12px] font-semibold text-white/50 cursor-pointer hover:bg-[#1A4FD6]/20 hover:border-[#1A4FD6]/30 hover:text-white/80 transition-all w-fit mt-2">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              9+ Associated Branches
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5">
          <div className="text-[12.5px] text-white/30 font-medium">© 2026 <strong className="text-white/50">SkillEdge Institute.</strong> All rights reserved.</div>
          <div className="flex gap-5">
            {['Privacy Policy','Terms & Conditions','Refund Policy'].map(l => (
              <button key={l} className="text-[12px] text-white/25 font-medium bg-transparent border-0 cursor-pointer hover:text-white/60 transition-colors">{l}</button>
            ))}
          </div>
          <div className="text-[12px] text-white/30 font-medium">Website designed with ❤️</div>
        </div>
      </div>
    </footer>
  );
}