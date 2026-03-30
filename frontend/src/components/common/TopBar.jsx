// const tickers = ["Join <b>Graphic Design Pro</b> Course — April Batch","Master <b>UI / UX Design</b> with Industry Experts","<b>100% Placement</b> Assistance Guaranteed","New: <b>Web Development</b> Batch — Limited Seats","AI Tools Mastery — <b>Enroll Now</b>"];

// const topBarStyles = `
//   @keyframes topbar-blink { 0%,100%{opacity:1} 50%{opacity:0.15} }
//   @keyframes topbar-amber-ring { 0%{box-shadow:0 0 0 0 rgba(251,191,36,0.75)} 70%{box-shadow:0 0 0 5px rgba(251,191,36,0)} 100%{box-shadow:0 0 0 0 rgba(251,191,36,0)} }
//   @keyframes topbar-green-ring { 0%{box-shadow:0 0 0 0 rgba(52,211,153,0.75)} 70%{box-shadow:0 0 0 5px rgba(52,211,153,0)} 100%{box-shadow:0 0 0 0 rgba(52,211,153,0)} }
//   @keyframes topbar-bouncy { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
//   @keyframes tb-tick { from{transform:translateX(0)} to{transform:translateX(-50%)} }
//   .tb-dot-blink { animation: topbar-blink 1s step-start infinite; }
//   .tb-btn-batch { animation: topbar-amber-ring 1.6s ease infinite, topbar-bouncy 1.8s ease-in-out infinite; }
//   .tb-btn-job { animation: topbar-green-ring 1.5s ease infinite; }
//   .tb-ticker { display:flex; animation: tb-tick 11s linear infinite; }
// `;

// export default function TopBar() {
//   const content = [...tickers,...tickers].map((t,i) => (
//     <span key={i} className="whitespace-nowrap px-6 text-[11px] text-white/70 flex items-center gap-2 flex-shrink-0">
//       <span className="tb-dot-blink w-1 h-1 rounded-full bg-[#FCD34D] flex-shrink-0 inline-block"/>
//       <span dangerouslySetInnerHTML={{__html: t.replace(/<b>/g,'<b class="text-[#FCD34D] font-bold">')}}/>
//     </span>
//   ));

//   return (
//     <>
//       <style>{topBarStyles}</style>
//       <div className="sticky top-0 z-50 h-10 flex items-center overflow-hidden relative px-2 sm:px-3 md:px-5" style={{background:'#024181'}}>
//         <div className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10" style={{background:'linear-gradient(to right, transparent, #024181)'}}/>
//         <div className="flex-1 overflow-hidden min-w-0">
//           <div className="tb-ticker">{content}</div>
//         </div>
//         <div className="flex gap-2 items-center pl-2 sm:pl-3 flex-shrink-0 z-20">
//           {/* Phone: hidden on small, visible md+ */}
//           <button className="hidden md:block text-[#FCD34D] font-bold text-[11.5px] bg-transparent border-0 cursor-pointer font-jakarta whitespace-nowrap">
//             +91 99999 12345
//           </button>
//           {/* Upcoming Batch: always visible */}
//           <button className="tb-btn-batch flex items-center gap-1.5 rounded-full px-3 py-[3px] text-[10.5px] font-extrabold font-jakarta cursor-pointer border-0 whitespace-nowrap" style={{background:'#FCD34D', color:'#78350F'}}>
//             🔥 Upcoming Batch
//           </button>
//           {/* Job Opening: md+ only */}
//           <button className="tb-btn-job hidden md:flex items-center gap-1.5 rounded-full px-3 py-[3px] text-[10.5px] font-extrabold font-jakarta cursor-pointer border-0 whitespace-nowrap" style={{background:'#059669', color:'#fff'}}>
//             ✦ Job Opening
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }






















import { useState, useEffect } from 'react';

const tickers = ["Join <b>Graphic Design Pro</b> Course — April Batch","Master <b>UI / UX Design</b> with Industry Experts","<b>100% Placement</b> Assistance Guaranteed","New: <b>Web Development</b> Batch — Limited Seats","AI Tools Mastery — <b>Enroll Now</b>"];

const topBarStyles = `
  @keyframes topbar-blink { 0%,100%{opacity:1} 50%{opacity:0.15} }
  @keyframes topbar-amber-ring { 0%{box-shadow:0 0 0 0 rgba(251,191,36,0.75)} 70%{box-shadow:0 0 0 5px rgba(251,191,36,0)} 100%{box-shadow:0 0 0 0 rgba(251,191,36,0)} }
  @keyframes topbar-green-ring { 0%{box-shadow:0 0 0 0 rgba(52,211,153,0.75)} 70%{box-shadow:0 0 0 5px rgba(52,211,153,0)} 100%{box-shadow:0 0 0 0 rgba(52,211,153,0)} }
  @keyframes topbar-bouncy { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
  @keyframes tb-tick { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  .tb-dot-blink { animation: topbar-blink 1s step-start infinite; }
  .tb-btn-batch { animation: topbar-amber-ring 1.6s ease infinite, topbar-bouncy 1.8s ease-in-out infinite; }
  .tb-btn-job { animation: topbar-green-ring 1.5s ease infinite; }
  .tb-ticker { display:flex; animation: tb-tick 11s linear infinite; }
`;

export default function TopBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY && y > 40) setHidden(true);
      else if (y < lastY) setHidden(false);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const content = [...tickers,...tickers].map((t,i) => (
    <span key={i} className="whitespace-nowrap px-6 text-[11px] text-white/70 flex items-center gap-2 flex-shrink-0">
      <span className="tb-dot-blink w-1 h-1 rounded-full bg-[#FCD34D] flex-shrink-0 inline-block"/>
      <span dangerouslySetInnerHTML={{__html: t.replace(/<b>/g,'<b class="text-[#FCD34D] font-bold">')}}/>
    </span>
  ));

  return (
    <>
      <style>{topBarStyles}</style>
      <div
        className="fixed top-0 left-0 right-0 z-50 h-10 flex items-center overflow-hidden px-5 sm:px-5 md:px-14 lg:px-24 xl:px-24"
        style={{
          background: '#024181',
          transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 0.32s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10" style={{background:'linear-gradient(to right, transparent, #024181)'}}/>
        <div className="flex-1 overflow-hidden min-w-0">
          <div className="tb-ticker">{content}</div>
        </div>
        <div className="flex gap-2 items-center pl-2 sm:pl-3 flex-shrink-0 z-20">
          <button className="hidden md:block text-[#FCD34D] font-bold text-[11.5px] bg-transparent border-0 cursor-pointer font-jakarta whitespace-nowrap">
            +91 99999 12345
          </button>
          <button className="tb-btn-batch flex items-center gap-1.5 rounded-full px-3 py-[3px] text-[10.5px] font-extrabold font-jakarta cursor-pointer border-0 whitespace-nowrap" style={{background:'#FCD34D', color:'#78350F'}}>
            🔥 Upcoming Batch
          </button>
          <button className="tb-btn-job hidden md:flex items-center gap-1.5 rounded-full px-3 py-[3px] text-[10.5px] font-extrabold font-jakarta cursor-pointer border-0 whitespace-nowrap" style={{background:'#059669', color:'#fff'}}>
            ✦ Job Opening
          </button>
        </div>
      </div>
    </>
  );
}