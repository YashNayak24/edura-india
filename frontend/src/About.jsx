// // import AboutHero       from './components/aboutPage/AboutHero'
// // import AboutStats      from './components/aboutPage/AboutStats'
// // import AboutMission    from './components/aboutPage/AboutMission'
// // import AboutJourney    from './components/aboutPage/AboutJourney'
// // import AboutValues     from './components/aboutPage/AboutValues'
// // import AboutCTA        from './components/aboutPage/AboutCTA'

// // export default function About() {
// //   return (
// //     <div className="font-jakarta bg-white overflow-x-hidden">
// //       <AboutHero />
// //       <AboutStats />
// //       <AboutMission />
// //       <AboutJourney />
// //       <AboutValues />
// //       <AboutCTA />
// //     </div>
// //   )
// // }

// import { useEffect, useRef, useState } from "react";

// /* ── SVG Icon Components ── */
// const IconUsers = ({ size = 22, color = "currentColor" }) => (
//   <svg width={size} height={size} fill="none" stroke={color} strokeWidth="1.8" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
//   </svg>
// );
// const IconBook = ({ size = 22, color = "currentColor" }) => (
//   <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//   </svg>
// );
// const IconTrend = ({ size = 22, color = "currentColor" }) => (
//   <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//   </svg>
// );
// const IconStar = ({ size = 22, color = "currentColor" }) => (
//   <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
//   </svg>
// );
// const IconClock = ({ size = 22, color = "currentColor" }) => (
//   <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//   </svg>
// );
// const IconHome = ({ size = 22, color = "currentColor" }) => (
//   <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//   </svg>
// );
// const IconBolt = ({ size = 22, color = "currentColor" }) => (
//   <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
//   </svg>
// );
// const IconAcademic = ({ size = 22, color = "currentColor" }) => (
//   <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
//   </svg>
// );
// const IconMonitor = ({ size = 22, color = "currentColor" }) => (
//   <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//   </svg>
// );
// const IconShield = ({ size = 22, color = "currentColor" }) => (
//   <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//   </svg>
// );
// const IconTarget = ({ size = 22, color = "currentColor" }) => (
//   <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
//     <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" />
//   </svg>
// );
// const IconBriefcase = ({ size = 22, color = "currentColor" }) => (
//   <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//   </svg>
// );
// const IconLightbulb = ({ size = 22, color = "currentColor" }) => (
//   <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//   </svg>
// );
// const IconChat = ({ size = 22, color = "currentColor" }) => (
//   <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//   </svg>
// );
// const IconGlobe = ({ size = 22, color = "currentColor" }) => (
//   <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//   </svg>
// );
// const IconTrophy = ({ size = 22, color = "currentColor" }) => (
//   <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
//   </svg>
// );
// const IconWhatsApp = ({ size = 20 }) => (
//   <svg width={size} height={size} fill="white" viewBox="0 0 24 24">
//     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//   </svg>
// );

// /* ── Reveal Hook ── */
// function useReveal() {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);
//   return [ref, visible];
// }

// /* ── Counter Hook ── */
// function useCounter(target, suffix = "", decimals = false) {
//   const ref = useRef(null);
//   const [val, setVal] = useState("0" + suffix);
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => {
//       if (!e.isIntersecting) return;
//       let cur = 0;
//       const step = Math.ceil(target / 55);
//       const t = setInterval(() => {
//         cur = Math.min(cur + step, target);
//         setVal(decimals ? (cur / 10).toFixed(1) + suffix : cur.toLocaleString() + suffix);
//         if (cur >= target) clearInterval(t);
//       }, 28);
//       obs.disconnect();
//     }, { threshold: 0.4 });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [target]);
//   return [ref, val];
// }

// /* ── Marquee ── */
// const MARQUEE_ITEMS = [
//   "ISO 9001:2015 Certified", "NSDC Approved", "4.9★ Google Rating",
//   "20,000+ Students Placed", "100% Placement Assistance", "Industry Expert Trainers",
//   "Live + Recorded Sessions", "Delhi NCR's #1 Institute", "AI-Integrated Curriculum"
// ];

// function Marquee() {
//   const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
//   return (
//     <div className="bg-[#094E93] py-3.5 overflow-hidden w-full">
//       <style>{`
//         @keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
//         .marquee-track { display: flex; width: max-content; animation: marqueeScroll 28s linear infinite; }
//         .marquee-track:hover { animation-play-state: paused; }
//       `}</style>
//       <div className="marquee-track">
//         {items.map((t, i) => (
//           <span key={i} className="inline-flex items-center px-7 text-white/85 text-[13px] font-medium whitespace-nowrap flex-shrink-0">
//             <span className="w-2 h-2 rounded-full bg-[#F5A623] mr-2.5 flex-shrink-0" />
//             {t}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ── Stat Card ── */
// function StatCard({ icon, bg, target, suffix, label, color, decimals }) {
//   const [ref, val] = useCounter(target, suffix, decimals);
//   const [rRef, visible] = useReveal();
//   const mergedRef = (el) => { ref.current = el; rRef.current = el; };
//   return (
//     <div
//       ref={mergedRef}
//       className={`flex flex-col gap-3 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(9,78,147,0.12)] cursor-default ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//       style={{ transition: "opacity 0.65s ease, transform 0.65s ease, box-shadow 0.3s ease" }}
//     >
//       <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: bg }}>
//         {icon}
//       </div>
//       <div className="text-4xl font-black leading-none" style={{ color }}>{val}</div>
//       <div className="text-[13px] text-gray-400 font-medium">{label}</div>
//     </div>
//   );
// }

// /* ── Reveal Wrapper ── */
// function Reveal({ children, delay = 0, className = "" }) {
//   const [ref, visible] = useReveal();
//   return (
//     <div
//       ref={ref}
//       className={className}
//       style={{
//         opacity: visible ? 1 : 0,
//         transform: visible ? "translateY(0)" : "translateY(24px)",
//         transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// /* ── Main App ── */
// export default function App() {
//   const [formData, setFormData] = useState({ name: "", phone: "", course: "" });

//   return (
//     <div className="font-[Plus_Jakarta_Sans,sans-serif] bg-[#F4F6FB] antialiased">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');
//         @keyframes gradientFlow { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
//         .gradient-text {
//           background: linear-gradient(90deg, #F5A623 0%, #ffdd66 20%, #F5A623 40%, #1a6fd4 60%, #F5A623 80%, #ffcc44 100%);
//           background-size: 400% 100%;
//           -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
//           animation: gradientFlow 4s ease-in-out infinite;
//         }
//         @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
//         @keyframes floatYSlow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
//         .float { animation: floatY 4s ease-in-out infinite; }
//         .float-slow { animation: floatYSlow 6s ease-in-out infinite; }
//         @keyframes shine { 0%{left:-100%} 100%{left:200%} }
//         .btn-shine { position:relative; overflow:hidden; }
//         .btn-shine::after { content:''; position:absolute; top:0; left:-100%; width:60%; height:100%; background:linear-gradient(120deg,transparent,rgba(255,255,255,0.28),transparent); animation:shine 3s ease infinite; }
//         @keyframes pulse-ring { 0%{box-shadow:0 0 0 0 rgba(245,166,35,0.5)} 70%{box-shadow:0 0 0 8px rgba(245,166,35,0)} 100%{box-shadow:0 0 0 0 rgba(245,166,35,0)} }
//         .pulse-dot { animation: pulse-ring 2s ease-out infinite; }
//         @keyframes fadeInUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
//         .fade-up-1 { animation: fadeInUp 0.8s ease 0.1s forwards; opacity:0; }
//         .fade-up-2 { animation: fadeInUp 0.8s ease 0.25s forwards; opacity:0; }
//         .fade-up-3 { animation: fadeInUp 0.8s ease 0.4s forwards; opacity:0; }
//         .bento-card { transition: box-shadow .3s ease, transform .3s ease; }
//         .bento-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(9,78,147,.14); }
//         .dot-pattern { background-image: radial-gradient(rgba(255,255,255,.1) 1px, transparent 1px); background-size: 22px 22px; }
//       `}</style>

//       {/* ── HERO ── */}
//       <section className="bg-white relative overflow-hidden  pt-[110px]">
//         <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
//           <defs><pattern id="hd" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.8" fill="#094E93" /></pattern></defs>
//           <rect width="100%" height="100%" fill="url(#hd)" />
//         </svg>
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#094E93] opacity-[0.04] rounded-full translate-x-1/3 -translate-y-1/4 pointer-events-none" />
//         <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-[#F5A623] opacity-[0.05] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

//         <div className="max-w-[1280px] mx-auto px-6 py-14 relative">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             {/* Left */}
//             <div>
              
//               <h1 className="fade-up-2 text-[clamp(36px,5vw,60px)] font-black leading-[1.08] mb-6 text-[#0A1628]">
//                 Empowering Careers<br />
//                 <span className="gradient-text">One Skill at a Time.</span>
//               </h1>
//               <p className="fade-up-3 text-gray-500 text-[clamp(15px,1.5vw,17px)] leading-[1.8] mb-8 max-w-[480px]">
//                 Founded in Delhi NCR, SkillEdge is a government-recognised skill training institute dedicated to bridging the gap between education and industry. We don't just teach — we place, mentor, and support until you land your dream job.
//               </p>
//               <div className="fade-up-3 flex gap-3 flex-wrap">
//                 <button className="btn-shine px-6 py-3.5 bg-[#094E93] text-white font-bold rounded-xl text-[15px] shadow-[0_8px_24px_rgba(9,78,147,.3)] hover:bg-[#073E75] transition-colors">Book Free Demo</button>
//                 <button className="px-6 py-3.5 border-2 border-[#094E93] text-[#094E93] font-bold rounded-xl text-[15px] hover:bg-[#094E93] hover:text-white transition-all">Explore Courses →</button>
//               </div>
//               <div className="fade-up-3 mt-7 flex flex-wrap gap-4 items-center">
//                 <span className="text-[12px] font-semibold text-gray-400 flex items-center gap-1.5"><IconTrophy size={14} color="#F5A623" /> ISO 9001:2015</span>
//                 <span className="text-[12px] font-semibold text-gray-400 flex items-center gap-1.5"><IconShield size={14} color="#094E93" /> NSDC Approved</span>
//                 <span className="text-[12px] font-semibold text-gray-400 flex items-center gap-1.5"><IconStar size={14} color="#F5A623" /> 4.9★ Google Rating</span>
//               </div>
//             </div>

//             {/* Right: Floating cards */}
//             <div className="relative flex justify-center items-center min-h-[380px] hidden lg:flex">
//               {/* Main card */}
//               <div className="float relative z-10 w-[280px] bg-gradient-to-br from-[#094E93] to-[#0A5FAD] rounded-[28px] p-7 text-white shadow-[0_24px_64px_rgba(9,78,147,.42)]">
//                 <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-[11px] font-bold">SE</div>
//                 <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-5">
//                   <IconTarget size={28} color="white" />
//                 </div>
//                 <div className="text-[22px] font-black">94% Placement</div>
//                 <div className="text-white/60 text-[13px] mt-1">Industry success rate</div>
//                 <div className="grid grid-cols-2 gap-2.5 mt-5">
//                   {[["20K+", "Students"], ["125+", "Courses"], ["4.9★", "Rating"], ["100%", "Support"]].map(([v, l]) => (
//                     <div key={l} className="bg-white/12 rounded-xl p-2.5 text-center">
//                       <div className="font-black text-[16px]">{v}</div>
//                       <div className="text-[10px] text-white/55 mt-0.5">{l}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               {/* Badge ISO */}
//               <div className="float-slow absolute left-[-32px] top-10 z-20 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(9,78,147,.16)] border border-gray-100">
//                 <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">ISO Certified</div>
//                 <div className="text-[14px] font-black text-[#094E93] flex items-center gap-1 mt-0.5"><IconTrophy size={13} color="#094E93" /> 9001:2015 ✓</div>
//               </div>
//               {/* Badge NSDC */}
//               <div className="float absolute right-[-16px] bottom-14 z-20 bg-[#F5A623] rounded-2xl px-4 py-3 shadow-[0_8px_20px_rgba(245,166,35,.3)]">
//                 <div className="text-[10px] text-white/75 font-semibold uppercase tracking-wider">NSDC Approved</div>
//                 <div className="text-[14px] font-black text-white flex items-center gap-1 mt-0.5"><IconShield size={13} color="white" /> Govt. Certified</div>
//               </div>
//               {/* Badge Batch */}
//               <div className="float-slow absolute left-[-16px] bottom-[-8px] z-20 bg-white rounded-2xl px-4 py-2.5 shadow-[0_8px_24px_rgba(9,78,147,.12)] border border-gray-100">
//                 <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Batch Started</div>
//                 <div className="text-[12px] font-black text-[#0A1628] flex items-center gap-1 mt-0.5">
//                   <span className="w-2 h-2 rounded-full bg-green-500 inline-block" /> Mon, Wed, Fri
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── MARQUEE ── */}
//       <Marquee />

//       {/* ── STATS ── */}
//       <section className="bg-white py-[72px]">
//         <div className="max-w-[1280px] mx-auto px-6">
//           <Reveal className="text-center mb-12">
//             <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#094E93] bg-[#E8F0FC] px-4 py-1.5 rounded-full mb-4">By The Numbers</span>
//             <h2 className="text-[clamp(26px,4vw,40px)] font-black text-[#0A1628]">A Decade of <span className="text-[#094E93]">Impact</span></h2>
//           </Reveal>
//           <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3.5">
//             {[
//               { icon: <IconUsers color="#094E93" />, bg: "#EFF6FF", target: 20000, suffix: "+", label: "Students Trained", color: "#094E93" },
//               { icon: <IconBook color="#7c3aed" />, bg: "#F5F3FF", target: 125, suffix: "+", label: "Industry Courses", color: "#7c3aed" },
//               { icon: <IconTrend color="#16a34a" />, bg: "#F0FDF4", target: 94, suffix: "%", label: "Placement Rate", color: "#16a34a" },
//               { icon: <IconStar color="#d97706" />, bg: "#FFFBEB", target: 49, suffix: "★", label: "Google Rating", color: "#d97706", decimals: true },
//               { icon: <IconClock color="#e11d48" />, bg: "#FFF1F2", target: 8, suffix: "+", label: "Years Experience", color: "#e11d48" },
//               { icon: <IconHome color="#0d9488" />, bg: "#F0FDFA", target: 3, suffix: "", label: "Delhi NCR Centres", color: "#0d9488" },
//             ].map((s, i) => <StatCard key={i} {...s} />)}
//           </div>
//         </div>
//       </section>

//       {/* ── OUR STORY ── */}
//       <section className="bg-[#F4F6FB] py-[72px]">
//         <div className="max-w-[1280px] mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//             {/* Timeline */}
//             <Reveal>
//               <span className="text-[11px] font-bold uppercase tracking-widest text-[#094E93] bg-[#E8F0FC] px-3.5 py-1.5 rounded-full">Our Journey</span>
//               <h2 className="text-[clamp(26px,4vw,44px)] font-black text-[#0A1628] mt-5 mb-8 leading-[1.15]">
//                 From a Small<br />Classroom to<br /><span className="text-[#094E93]">20,000+ Careers</span>
//               </h2>
//               <div className="space-y-0">
//                 {[
//                   { year: "2018", title: "Founded in Delhi NCR", desc: "Started with 3 courses and a vision to make quality skill training accessible to all." },
//                   { year: "2020", title: "NSDC Partnership", desc: "Became NSDC approved and launched government-certified programs nationwide." },
//                   { year: "2022", title: "ISO 9001:2015 Certified", desc: "Achieved ISO certification and expanded to 50+ courses across 8 verticals." },
//                   { year: "2024", title: "20,000+ Students Placed", desc: "Crossed the milestone with an industry-leading 94% placement success rate." },
//                 ].map((item, i, arr) => (
//                   <div key={i} className="flex gap-5 relative">
//                     {i < arr.length - 1 && <div className="absolute left-[19px] top-10 w-0.5 h-full bg-[#E8F0FC] z-0" />}
//                     <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#094E93] text-white text-[12px] font-bold flex items-center justify-center z-10 mt-0.5 shadow-[0_4px_12px_rgba(9,78,147,.3)]">{i + 1}</div>
//                     <div className="pb-8">
//                       <span className="text-[11px] font-bold text-[#F5A623] uppercase tracking-wider">{item.year}</span>
//                       <h4 className="font-black text-[#0A1628] text-[16px] mt-0.5">{item.title}</h4>
//                       <p className="text-gray-400 text-[13px] mt-1.5 leading-relaxed">{item.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Reveal>
//             {/* Mission/Vision */}
//             <Reveal delay={150} className="flex flex-col gap-4">
//               <div className="bg-gradient-to-br from-[#094E93] to-[#0A5FAD] rounded-3xl p-8 text-white shadow-[0_16px_48px_rgba(9,78,147,.25)]">
//                 <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center mb-4"><IconTarget size={26} color="white" /></div>
//                 <h3 className="text-[22px] font-black mb-3">Our Mission</h3>
//                 <p className="text-white/80 leading-relaxed text-[14px]">To empower every student with industry-ready skills, real-world projects, and personalized mentorship — so that no talented person remains unemployed due to lack of guidance.</p>
//               </div>
//               <div className="bg-[#F5A623] rounded-3xl p-8 text-white shadow-[0_16px_48px_rgba(245,166,35,.2)]">
//                 <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4"><IconGlobe size={26} color="white" /></div>
//                 <h3 className="text-[22px] font-black mb-3">Our Vision</h3>
//                 <p className="text-white/85 leading-relaxed text-[14px]">To become India's most trusted skill training platform, where every learner graduates with confidence, a certificate, and a confirmed job offer.</p>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* ── WHY CHOOSE US — Bento ── */}
//       <section className="bg-white py-[72px]">
//         <div className="max-w-[1280px] mx-auto px-6">
//           <Reveal className="flex justify-between items-end gap-4 flex-wrap mb-10">
//             <h2 className="text-[clamp(26px,4vw,44px)] font-black text-[#0A1628] leading-[1.15]">
//               Why 20,000+ Students<br /><span className="text-[#094E93]">Choose SkillEdge</span>
//             </h2>
//             <p className="text-gray-400 text-[14px] max-w-[220px] leading-relaxed text-right">Every feature designed to get you from learning to earning — fast.</p>
//           </Reveal>
//           <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
//             {/* Large card */}
//             <div className="bento-card sm:col-span-2 bg-gradient-to-br from-[#094E93] to-[#1240B8] rounded-3xl p-7 flex flex-col gap-4 min-h-[220px]">
//               <div className="w-13 h-13 w-[52px] h-[52px] bg-white/20 rounded-2xl flex items-center justify-center"><IconUsers size={26} color="white" /></div>
//               <div>
//                 <p className="text-[11px] font-bold uppercase tracking-widest text-white/60 mb-1.5">45+ Mentors</p>
//                 <h3 className="text-[20px] font-black text-white mb-2">Real Industry Mentors</h3>
//                 <p className="text-[13px] text-white/75 leading-relaxed">Our faculty are working professionals — designers, developers, marketers — who bring live project experience, not just theory. 45+ industry mentors across 8 career tracks.</p>
//               </div>
//             </div>
//             <div className="bento-card bg-green-50 border border-green-200 rounded-3xl p-7 flex flex-col gap-4">
//               <div className="w-[52px] h-[52px] bg-green-100 rounded-2xl flex items-center justify-center"><IconTrend size={22} color="#16a34a" /></div>
//               <div>
//                 <p className="text-[11px] font-bold uppercase tracking-widest text-green-600 mb-1.5">94% Rate</p>
//                 <h3 className="text-[18px] font-black text-[#0A1628] mb-2">Placement First</h3>
//                 <p className="text-[13px] text-gray-500 leading-relaxed">Every course includes dedicated placement support — resume prep, mock interviews, referrals. We don't stop until you're placed.</p>
//               </div>
//             </div>
//             <div className="bento-card bg-amber-50 border border-amber-200 rounded-3xl p-7 flex flex-col gap-4">
//               <div className="w-[52px] h-[52px] bg-amber-100 rounded-2xl flex items-center justify-center"><IconBolt size={22} color="#d97706" /></div>
//               <div>
//                 <p className="text-[11px] font-bold uppercase tracking-widest text-amber-600 mb-1.5">New 2025</p>
//                 <h3 className="text-[18px] font-black text-[#0A1628] mb-2">AI-Integrated Curriculum</h3>
//                 <p className="text-[13px] text-gray-500 leading-relaxed">ChatGPT, Midjourney, Canva AI — real AI tools integrated from Week 1 in every course.</p>
//               </div>
//             </div>
//             <div className="bento-card bg-purple-50 border border-purple-200 rounded-3xl p-7 flex flex-col gap-4">
//               <div className="w-[52px] h-[52px] bg-purple-100 rounded-2xl flex items-center justify-center"><IconAcademic size={22} color="#7c3aed" /></div>
//               <div>
//                 <p className="text-[11px] font-bold uppercase tracking-widest text-purple-600 mb-1.5">UGC + NSDC</p>
//                 <h3 className="text-[18px] font-black text-[#0A1628] mb-2">Recognised Certifications</h3>
//                 <p className="text-[13px] text-gray-500 leading-relaxed">Earn certifications that employers actually value — UGC-recognised degrees and NSDC-approved skill certificates.</p>
//               </div>
//             </div>
//             <div className="bento-card bg-[#F4F8FF] border border-[#dce9fa] rounded-3xl p-7 flex flex-col gap-4">
//               <div className="w-[52px] h-[52px] bg-[#E8F0FC] rounded-2xl flex items-center justify-center"><IconMonitor size={22} color="#094E93" /></div>
//               <div>
//                 <p className="text-[11px] font-bold uppercase tracking-widest text-[#094E93] mb-1.5">24/7 Access</p>
//                 <h3 className="text-[18px] font-black text-[#0A1628] mb-2">Lifetime LMS Access</h3>
//                 <p className="text-[13px] text-gray-500 leading-relaxed">Recorded lectures, PDF notes, revision tests — access anytime from mobile or desktop, forever.</p>
//               </div>
//             </div>
//             <div className="bento-card bg-rose-50 border border-rose-200 rounded-3xl p-7 flex flex-col gap-4">
//               <div className="w-[52px] h-[52px] bg-rose-100 rounded-2xl flex items-center justify-center"><IconShield size={22} color="#e11d48" /></div>
//               <div>
//                 <p className="text-[11px] font-bold uppercase tracking-widest text-rose-600 mb-1.5">8+ Projects</p>
//                 <h3 className="text-[18px] font-black text-[#0A1628] mb-2">Portfolio from Day One</h3>
//                 <p className="text-[13px] text-gray-500 leading-relaxed">Build real, industry-level projects from the very first month so you graduate with a portfolio that speaks for itself.</p>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ── CTA BANNER 1 ── */}
//       <section className="bg-[#F4F6FB] py-8 px-6">
//         <div className="max-w-[1200px] mx-auto">
//           <Reveal>
//             <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#094E93] via-[#0A5FAD] to-[#1240B8] dot-pattern">
//               <div className="relative z-10 flex flex-wrap items-center justify-between gap-8 px-10 py-10">
//                 <div className="flex-1 min-w-[280px]">
//                   <p className="text-[11px] font-bold uppercase tracking-widest text-white/55 mb-3">Start Your Journey Today</p>
//                   <h2 className="text-[clamp(22px,3.5vw,38px)] font-black text-white leading-[1.2] mb-4">Ready to Build the Career You <span className="gradient-text">Deserve?</span></h2>
//                   <p className="text-white/70 text-[14px] leading-relaxed mb-6 max-w-[360px]">Book a free demo class — no fees, no commitment. Talk to our counsellor and find the right course for your goals.</p>
//                   <div className="flex flex-wrap gap-2.5">
//                     {[["125+", "COURSES"], ["20K+", "STUDENTS"], ["94%", "PLACEMENT"], ["4.9★", "RATING"]].map(([v, l]) => (
//                       <div key={l} className="bg-white/10 border border-white/15 rounded-xl px-3.5 py-2 text-center">
//                         <div className="font-black text-white text-[16px]">{v}</div>
//                         <div className="text-[9px] text-white/50 font-bold tracking-wider mt-0.5">{l}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-3 w-full max-w-[288px]">
//                   <button className="btn-shine w-full bg-white text-[#094E93] border-none rounded-2xl py-4 font-black text-[15px] flex flex-col items-center">
//                     <span>Book Free Demo</span>
//                     <span className="text-[11px] font-normal text-gray-400 mt-0.5">No commitment required</span>
//                   </button>
//                   <button className="w-full bg-[#25D366] hover:bg-[#1db954] transition-colors text-white border-none rounded-2xl py-3.5 font-black text-[15px] flex items-center justify-center gap-2.5">
//                     <IconWhatsApp size={20} />
//                     <div className="text-left">
//                       <div className="text-[15px] font-black leading-none">WhatsApp Us</div>
//                       <div className="text-[11px] font-normal opacity-80 mt-0.5">Chat instantly — 24/7</div>
//                     </div>
//                   </button>
//                   <p className="text-center text-white/45 text-[12px]">Or call us: <span className="text-white font-semibold">+91 99999 12345</span></p>
//                 </div>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ── CORE VALUES ── */}
//       <section className="bg-white py-[72px]">
//         <div className="max-w-[1280px] mx-auto px-6">
//           <Reveal className="text-center mb-10">
//             <span className="text-[11px] font-bold uppercase tracking-widest text-[#094E93] bg-[#E8F0FC] px-4 py-1.5 rounded-full">What Drives Us</span>
//             <h2 className="text-[clamp(26px,4vw,40px)] font-black text-[#0A1628] mt-4">Our Core Values</h2>
//           </Reveal>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
//             {[
//               { icon: <IconTarget size={22} color="#094E93" />, bg: "#E8F0FC", title: "Placement First", desc: "Every curriculum decision is made with one goal — your employment. We track, mentor, and push until you're hired." },
//               { icon: <IconBriefcase size={22} color="#7c3aed" />, bg: "#EDE9FE", title: "Expert-Led Learning", desc: "All trainers are industry professionals with 5+ years of real work experience, not just academic teachers." },
//               { icon: <IconLightbulb size={22} color="#d97706" />, bg: "#FEF3C7", title: "Project-Based Training", desc: "You build real industry projects, work on live campaigns, and graduate with a portfolio — not just a certificate." },
//               { icon: <IconChat size={22} color="#0d9488" />, bg: "#CCFBF1", title: "1-on-1 Mentorship", desc: "Personalized career roadmaps, resume reviews, and mock interviews tailored to your specific goals." },
//               { icon: <IconMonitor size={22} color="#e11d48" />, bg: "#FFE4E6", title: "Flexible Learning", desc: "Online, offline, weekday and weekend batches — because your schedule matters and learning shouldn't wait." },
//               { icon: <IconTrophy size={22} color="#F5A623" />, bg: "#FEF3C7", title: "Proven Track Record", desc: "94% placement rate, 4.9★ Google rating, and 20,000+ success stories that speak for themselves." },
//             ].map((v, i) => (
//               <Reveal key={i} delay={i * 60}>
//                 <div className="flex gap-4 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(9,78,147,.12)] transition-all duration-300">
//                   <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: v.bg }}>{v.icon}</div>
//                   <div>
//                     <h4 className="font-black text-[#0A1628] mb-1">{v.title}</h4>
//                     <p className="text-[13px] text-gray-400 leading-relaxed">{v.desc}</p>
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── TEAM ── */}
//       <section className="bg-[#F4F6FB] py-[72px]">
//         <div className="max-w-[1280px] mx-auto px-6">
//           <Reveal className="text-center mb-10">
//             <span className="text-[11px] font-bold uppercase tracking-widest text-[#094E93] bg-[#E8F0FC] px-4 py-1.5 rounded-full">Meet the Experts</span>
//             <h2 className="text-[clamp(26px,4vw,40px)] font-black text-[#0A1628] mt-4">Our Lead Mentors</h2>
//             <p className="text-gray-400 mt-3 max-w-[480px] mx-auto text-[14px]">Industry professionals who've worked at top companies and now dedicate their expertise to shaping your career.</p>
//           </Reveal>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             {[
//               { initials: "RS", name: "Rahul Sharma", role: "Full Stack Lead", exp: "8+ years · Ex-Google", bg: "#094E93" },
//               { initials: "PM", name: "Priya Mehta", role: "Digital Marketing", exp: "7+ years · Ex-Deloitte", bg: "#0A5FAD" },
//               { initials: "AG", name: "Ankit Gupta", role: "UI/UX & Design", exp: "6+ years · Ex-Amazon", bg: "#F5A623" },
//               { initials: "SV", name: "Sneha Verma", role: "AI & Data Science", exp: "5+ years · Ex-Microsoft", bg: "#073E75" },
//             ].map((m, i) => (
//               <Reveal key={i} delay={i * 80}>
//                 <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(9,78,147,.15)] transition-all duration-300">
//                   <div className="w-[52px] h-[52px] rounded-2xl text-white font-black text-[17px] flex items-center justify-center mb-4" style={{ background: m.bg }}>{m.initials}</div>
//                   <h4 className="font-black text-[#0A1628] text-[15px]">{m.name}</h4>
//                   <p className="text-[#094E93] text-[12px] font-semibold mt-0.5">{m.role}</p>
//                   <p className="text-gray-400 text-[11px] mt-1">{m.exp}</p>
//                   <div className="mt-3.5 flex gap-3">
//                     <a href="#" className="text-[12px] text-gray-400 font-semibold hover:text-[#094E93] transition-colors no-underline">LinkedIn</a>
//                     <a href="#" className="text-[12px] text-gray-400 font-semibold hover:text-[#094E93] transition-colors no-underline">Twitter</a>
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA SPLIT FORM ── */}
//       <section className="bg-white py-8 px-6">
//         <div className="max-w-[1200px] mx-auto">
//           <Reveal>
//             <div className="rounded-[28px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-[0_20px_60px_rgba(9,78,147,.1)]">
//               {/* Left */}
//               <div className="dot-pattern bg-gradient-to-br from-[#094E93] to-[#073E75] p-12 flex flex-col justify-center">
//                 <p className="text-[11px] font-bold uppercase tracking-widest text-[#F5A623] mb-4">Take The First Step</p>
//                 <h2 className="text-[clamp(22px,3vw,38px)] font-black text-white leading-[1.2] mb-4">Your Dream Career Starts With One <span className="gradient-text">Free Class.</span></h2>
//                 <p className="text-white/70 text-[14px] leading-relaxed mb-7">Join 20,000+ students who transformed their careers with SkillEdge. No risk. No commitment.</p>
//                 <div className="flex gap-2.5 flex-wrap">
//                   <button className="btn-shine bg-[#F5A623] text-white border-none rounded-xl px-5 py-3 font-bold text-[14px]">Book Free Demo →</button>
//                   <button className="bg-white/10 border border-white/25 text-white rounded-xl px-5 py-3 font-semibold text-[14px]">Explore Courses</button>
//                 </div>
//                 <div className="mt-7 flex flex-wrap gap-2.5">
//                   {["✓ ISO 9001:2015", "✓ NSDC Approved", "✓ 4.9★ Google"].map(t => (
//                     <span key={t} className="text-[12px] font-semibold text-white/55 border border-white/20 rounded-full px-3 py-1">{t}</span>
//                   ))}
//                 </div>
//               </div>
//               {/* Right: Form */}
//               <div className="bg-white p-12 flex flex-col justify-center gap-5">
//                 <div>
//                   <h3 className="text-[24px] font-black text-[#0A1628]">Book Your Free Session</h3>
//                   <p className="text-gray-400 text-[13px] mt-1">Fill in & our team will call you within 24 hours.</p>
//                 </div>
//                 <div className="flex flex-col gap-3">
//                   <input className="w-full border-[1.5px] border-gray-200 rounded-xl px-4 py-3 text-[14px] font-medium focus:border-[#094E93] focus:ring-2 focus:ring-[#094E93]/10 outline-none transition-all" placeholder="Your Full Name" type="text" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
//                   <input className="w-full border-[1.5px] border-gray-200 rounded-xl px-4 py-3 text-[14px] font-medium focus:border-[#094E93] focus:ring-2 focus:ring-[#094E93]/10 outline-none transition-all" placeholder="Mobile Number" type="tel" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} />
//                   <select className="w-full border-[1.5px] border-gray-200 rounded-xl px-4 py-3 text-[14px] font-medium text-gray-500 bg-white focus:border-[#094E93] outline-none transition-all" value={formData.course} onChange={e => setFormData(p => ({ ...p, course: e.target.value }))}>
//                     <option value="">Select Course Interest</option>
//                     <option>Full Stack Web Development</option>
//                     <option>Digital Marketing</option>
//                     <option>Graphic Design Pro</option>
//                     <option>AI & Data Science</option>
//                     <option>UI/UX Design</option>
//                     <option>Stock Market</option>
//                   </select>
//                   <button className="btn-shine w-full bg-[#094E93] text-white border-none rounded-xl py-3.5 font-black text-[14px] shadow-[0_8px_24px_rgba(9,78,147,.3)] hover:bg-[#073E75] transition-colors">Book Free Demo Class</button>
//                   <p className="text-center text-gray-400 text-[12px]"><IconShield size={12} color="#9ca3af" className="inline" /> Your details are safe. No spam, ever.</p>
//                 </div>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ── CERTIFICATIONS ── */}
//       <section className="bg-[#F4F6FB] py-14 px-6 text-center">
//         <div className="max-w-[1000px] mx-auto">
//           <Reveal>
//             <h3 className="text-[clamp(20px,3vw,28px)] font-black text-[#0A1628] mb-7">Trusted & Recognised By</h3>
//             <div className="flex flex-wrap justify-center gap-3.5">
//               {[
//                 { icon: <IconTrophy size={22} color="#F5A623" />, title: "ISO 9001:2015", sub: "Quality Certified" },
//                 { icon: <IconShield size={22} color="#094E93" />, title: "NSDC Approved", sub: "Govt. of India" },
//                 { icon: <IconGlobe size={22} color="#4285F4" />, title: "Google Partner", sub: "Certified Training" },
//                 { icon: <IconBook size={22} color="#1877F2" />, title: "Meta Blueprint", sub: "Marketing Partner" },
//                 { icon: <IconStar size={22} color="#F5A623" />, title: "4.9★ Rating", sub: "Google Reviews" },
//               ].map((c, i) => (
//                 <div key={i} className="flex items-center gap-3 bg-white border-[1.5px] border-gray-200 rounded-2xl px-5 py-3.5 hover:border-[#094E93] hover:shadow-[0_4px_20px_rgba(9,78,147,.1)] transition-all cursor-default">
//                   {c.icon}
//                   <div className="text-left">
//                     <div className="font-black text-[#0A1628] text-[13px]">{c.title}</div>
//                     <div className="text-gray-400 text-[11px]">{c.sub}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ── FINAL CTA DARK ── */}
//       <section className="bg-[#F4F6FB] py-8 px-6 pb-16">
//         <div className="max-w-[1200px] mx-auto">
//           <Reveal>
//             <div className="relative bg-[#0A1628] rounded-[28px] overflow-hidden text-center py-[72px] px-8">
//               <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[#094E93] opacity-20 blur-[80px] -translate-y-1/2 pointer-events-none" />
//               <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#F5A623] opacity-10 blur-[80px] translate-y-1/2 pointer-events-none" />
//               <div className="relative z-10">
//                 <div className="inline-flex items-center gap-2 bg-white/7 border border-white/12 text-white/65 text-[11px] font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
//                   <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] pulse-dot inline-block" />
//                   Limited Seats — Next Batch Starting Soon
//                 </div>
//                 <h2 className="text-[clamp(26px,5vw,52px)] font-black text-white mb-4">Ready to Start Your Journey?</h2>
//                 <p className="text-gray-500 text-[clamp(14px,1.5vw,18px)] mb-9 max-w-[500px] mx-auto leading-relaxed">Join 20,000+ students who chose SkillEdge and got placed in their dream companies.</p>
//                 <div className="flex gap-3.5 justify-center flex-wrap mb-7">
//                   <button className="btn-shine px-9 py-4 bg-[#F5A623] text-white border-none rounded-2xl font-black text-[16px] hover:bg-[#e8920a] transition-colors">Book Free Demo Class</button>
//                   <button className="px-9 py-4 bg-white/7 text-white border border-white/18 rounded-2xl font-bold text-[16px] hover:bg-white/14 transition-colors">Explore Courses</button>
//                 </div>
//                 <div className="flex flex-wrap justify-center gap-5 text-[13px] text-gray-600">
//                   <span>✓ No commitment required</span>
//                   <span>✓ Reply within 24 hours</span>
//                   <span>✓ Free career counselling</span>
//                 </div>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>
//     </div>
//   );
// }

import { GlobalStyles } from "./components/aboutPage/utils";
import AboutHero    from "./components/aboutPage/AboutHero";
import AboutStats   from "./components/aboutPage/AboutStats";
import AboutJourney from "./components/aboutPage/AboutJourney";
import AboutMission from "./components/aboutPage/AboutMission";
import AboutValues  from "./components/aboutPage/AboutValues";
import AboutCTA     from "./components/aboutPage/AboutCTA";

 
export default function About() {
  return (
    <div className="font-[Plus_Jakarta_Sans,sans-serif] bg-[#F4F6FB] antialiased overflow-x-hidden">
      {/* Inject all global keyframes + utility classes once */}
      <GlobalStyles />
 
      <AboutHero />
      <AboutStats />
      <AboutJourney />
      <AboutMission />
      <AboutValues />
      <AboutCTA />
    </div>
  );
}