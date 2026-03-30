// import { useState } from 'react';

// const mainTabs = ['Key Features','Our Advantage','Facilities & Tools'];

// // SVG Icon Components
// const Icons = {
//   Mobile: () => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
//       <rect x="5" y="2" width="14" height="20" rx="2"/>
//       <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5"/>
//     </svg>
//   ),
//   Graduation: () => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
//       <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
//       <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5"/>
//     </svg>
//   ),
//   Book: () => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
//       <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
//       <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
//     </svg>
//   ),
//   Bot: () => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
//       <rect x="3" y="11" width="18" height="10" rx="2"/>
//       <circle cx="12" cy="5" r="2"/>
//       <path d="M12 7v4"/>
//       <line x1="8" y1="16" x2="8" y2="16" strokeWidth="2.5"/>
//       <line x1="16" y1="16" x2="16" y2="16" strokeWidth="2.5"/>
//       <path d="M7 11V9a5 5 0 0 1 10 0v2"/>
//     </svg>
//   ),
//   Globe: () => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
//       <circle cx="12" cy="12" r="10"/>
//       <line x1="2" y1="12" x2="22" y2="12"/>
//       <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
//     </svg>
//   ),
//   Rocket: () => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
//       <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
//       <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
//       <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
//       <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
//     </svg>
//   ),
//   MessageCircle: () => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
//       <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
//     </svg>
//   ),
//   Trophy: () => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
//       <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
//       <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
//       <path d="M4 22h16"/>
//       <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
//       <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
//       <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
//     </svg>
//   ),
//   Monitor: () => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
//       <rect x="2" y="3" width="20" height="14" rx="2"/>
//       <line x1="8" y1="21" x2="16" y2="21"/>
//       <line x1="12" y1="17" x2="12" y2="21"/>
//     </svg>
//   ),
//   Briefcase: () => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
//       <rect x="2" y="7" width="20" height="14" rx="2"/>
//       <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
//     </svg>
//   ),
//   Target: () => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
//       <circle cx="12" cy="12" r="10"/>
//       <circle cx="12" cy="12" r="6"/>
//       <circle cx="12" cy="12" r="2"/>
//     </svg>
//   ),
//   BarChart: () => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
//       <line x1="18" y1="20" x2="18" y2="10"/>
//       <line x1="12" y1="20" x2="12" y2="4"/>
//       <line x1="6" y1="20" x2="6" y2="14"/>
//       <line x1="2" y1="20" x2="22" y2="20"/>
//     </svg>
//   ),
//   Bank: () => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
//       <line x1="3" y1="22" x2="21" y2="22"/>
//       <line x1="6" y1="18" x2="6" y2="11"/>
//       <line x1="10" y1="18" x2="10" y2="11"/>
//       <line x1="14" y1="18" x2="14" y2="11"/>
//       <line x1="18" y1="18" x2="18" y2="11"/>
//       <polygon points="12 2 20 7 4 7"/>
//     </svg>
//   ),
//   // Advantage panel icon variants
//   BookOpen: () => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
//       <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
//       <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
//     </svg>
//   ),
//   Users: () => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
//       <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
//       <circle cx="9" cy="7" r="4"/>
//       <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
//       <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
//     </svg>
//   ),
//   Layers: () => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
//       <polygon points="12 2 2 7 12 12 22 7 12 2"/>
//       <polyline points="2 17 12 22 22 17"/>
//       <polyline points="2 12 12 17 22 12"/>
//     </svg>
//   ),
//   Award: () => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
//       <circle cx="12" cy="8" r="7"/>
//       <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
//     </svg>
//   ),
//   Building: () => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
//       <rect x="3" y="3" width="18" height="18" rx="2"/>
//       <path d="M3 9h18"/>
//       <path d="M3 15h18"/>
//       <path d="M9 3v18"/>
//       <path d="M15 3v18"/>
//     </svg>
//   ),
// };

// const advIcons = [Icons.BookOpen, Icons.Users, Icons.Layers, Icons.Award, Icons.Building];

// const features = [
//   {Icon:Icons.Mobile,title:'Mobile App Access',desc:'Access the official SkillEdge app for announcements, resources, and important updates — anytime, anywhere.',ac:'blue'},
//   {Icon:Icons.Graduation,title:'Learning Management System',desc:'Access our LMS to manage your course, track your progress, and view all learning content easily.',ac:'purple'},
//   {Icon:Icons.Book,title:'Study Material & Assignments',desc:'Receive structured study materials, practical exercises, and assignments designed for skill-based learning.',ac:'green'},
//   {Icon:Icons.Bot,title:'AI Tutor Support',desc:'Get instant help from the SkillEdge AI Tutor to clear doubts and support your learning at any time of day.',ac:'pink'},
//   {Icon:Icons.Globe,title:'Student & Job Portal',desc:'Access the student portal to explore additional learning resources and live job opportunities from hiring partners.',ac:'gold'},
//   {Icon:Icons.Rocket,title:'Placement Mastery Program',desc:'Specialized training focused on resume building, mock interviews, and complete job readiness preparation.',ac:'teal'},
//   {Icon:Icons.MessageCircle,title:'WhatsApp Placement Cell',desc:'Stay updated with the latest job openings, hiring alerts, and placement updates via our dedicated channel.',ac:'red'},
//   {Icon:Icons.Trophy,title:'100% Placement Assistance',desc:'Receive dedicated career guidance and placement support — we stay with you until you land your dream job.',ac:'indigo'},
// ];

// const acColors = {blue:'#1A4FD6',purple:'#7C3AED',green:'#16A34A',pink:'#DB2777',gold:'#D97706',teal:'#0D9488',red:'#DC2626',indigo:'#4338CA'};
// const acBg = {blue:'#EEF4FF',purple:'#F3EEFF',green:'#ECFDF5',pink:'#FFF0F6',gold:'#FFFBEB',teal:'#F0FDFA',red:'#FEF2F2',indigo:'#EEF2FF'};

// const facilities = [
//   {Icon:Icons.Mobile,title:'SkillEdge Mobile App',desc:'Access courses, notes, announcements, and live class schedules from your smartphone at any time.',tag:'Free Access',tagBg:'#EEF4FF',tagColor:'#1A4FD6'},
//   {Icon:Icons.Monitor,title:'LMS Platform',desc:'Full-featured learning management system — track progress, submit assignments, and watch recorded lectures.',tag:'24/7 Live',tagBg:'#FEF3C7',tagColor:'#92600A'},
//   {Icon:Icons.Bot,title:'AI Tutor & Doubt Solver',desc:'Get instant AI-powered answers to your doubts — available 24/7, trained on our course content.',tag:'New',tagBg:'#DCFCE7',tagColor:'#166534'},
//   {Icon:Icons.Briefcase,title:'Student Job Portal',desc:'Browse live job listings, internship opportunities, and freelance projects directly from our hiring partners.',tag:'200+ Jobs',tagBg:'#FEE2E2',tagColor:'#991B1B'},
//   {Icon:Icons.Target,title:'Mock Interview Studio',desc:'Practice interviews with recorded AI feedback, real interview questions, and performance scoring.',tag:'New',tagBg:'#DCFCE7',tagColor:'#166534'},
//   {Icon:Icons.BarChart,title:'Progress Dashboard',desc:'Real-time progress tracking — see your course completion, assignment scores, and skill growth over time.',tag:'Live',tagBg:'#FEF3C7',tagColor:'#92600A'},
//   {Icon:Icons.MessageCircle,title:'WhatsApp Placement Cell',desc:'Stay updated with live job alerts, batch announcements, and career tips via our exclusive WhatsApp channel.',tag:'Free Join',tagBg:'#EEF4FF',tagColor:'#1A4FD6'},
//   {Icon:Icons.Bank,title:'No-Cost EMI (Bajaj Finserv)',desc:'Pay for your course in easy monthly installments with zero extra cost — 3 months to 30 months EMI available.',tag:'0% Interest',tagBg:'#FEE2E2',tagColor:'#991B1B'},
// ];

// const advTabs = ['Job-ready Curriculum','Industry Mentors','Guided Portfolio','Placement Support','Modern Infrastructure'];
// const advContent = [
//   {tag:'Industry-Ready Curriculum',title:'Expert-made. Industry-vetted.',pts:[{hl:'Expert-made, expert-vetted:',p:'Designed by industry veterans and vetted by experts.'},{ hl:'Regular audit:',p:'We regularly audit our course content and delivery to keep it relevant.'}],stats:[['125+','Courses'],['6','Months Avg.'],['3/2','Classes/Week']]},
//   {tag:'Industry Mentors',title:'Learn from real practitioners.',pts:[{hl:'Active professionals:',p:'Our mentors are currently working professionals with deep hands-on experience.'},{ hl:'Personal mentorship:',p:'Get 1-on-1 career guidance, portfolio reviews, and interview coaching.'}],stats:[['45+','Expert Mentors'],['12+','Yrs Avg. Exp.'],['200+','Companies']]},
//   {tag:'Guided Portfolio',title:'Build work that gets you hired.',pts:[{hl:'Real project work:',p:'Every student works on industry-level live projects throughout the course.'},{ hl:'Mentor portfolio reviews:',p:'Industry mentors personally review and guide each student\'s portfolio.'}],stats:[['8+','Live Projects'],['100%','Portfolio Ready'],['Behance','Showcased']]},
//   {tag:'Placement Support',title:'100% Placement Assistance.',pts:[{hl:'Dedicated placement cell:',p:'A dedicated team works with every student from resume prep to final offer.'},{ hl:'200+ hiring partners:',p:'Active partnerships with 200+ companies hiring SkillEdge graduates.'}],stats:[['94%','Placement Rate'],['₹6.4L','Avg. Package'],['200+','Hiring Partners']]},
//   {tag:'Modern Infrastructure',title:'World-class learning environment.',pts:[{hl:'AI-powered labs:',p:'State-of-the-art computer labs with latest software, tools, and AI integrations.'},{ hl:'Hybrid learning model:',p:'Attend online or offline — our hybrid model gives students flexibility.'}],stats:[['3','NCR Locations'],['Online','+ Offline'],['24/7','LMS Access']]},
// ];

// export default function Features() {
//   const [main, setMain] = useState(0);
//   const [adv, setAdv] = useState(0);
//   const AdvIcon = advIcons[adv];

//   return (
//     <section className="bg-[#F7F9FF] py-16 lg:py-24 relative overflow-hidden">
//       <div className="max-w-[1240px] mx-auto px-4 sm:px-8 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-6">
//           <div className="inline-flex items-center gap-2 bg-[#EBF1FF] border border-[#DDE5F8] text-[#1A4FD6] px-4 py-1.5 rounded-full text-[11.5px] font-bold tracking-wider uppercase mb-4">
//             <svg viewBox="0 0 10 10" width="8" height="8" fill="currentColor"><polygon points="5,0 6.2,3.8 10,3.8 7,6.2 8.1,10 5,7.6 1.9,10 3,6.2 0,3.8 3.8,3.8"/></svg>
//             Everything You Need
//           </div>
//           <h2 className="font-jakarta font-extrabold tracking-tight text-[#0D1E42] mb-3" style={{fontSize:'clamp(26px,3.2vw,44px)'}}>Features, <span className="text-[#1A4FD6]">Advantages</span> &amp; Facilities</h2>
//           <p className="text-[15px] text-[#5A6A8A] font-medium max-w-[580px] mx-auto leading-[1.72]">Experience the perfect blend of learning, flexibility, and career support.</p>
//         </div>



//         {/* Main tabs */}
//         <div className="flex flex-wrap gap-2 justify-center mb-10">
//           {mainTabs.map((t,i) => (
//             <button key={t} onClick={()=>setMain(i)}
//               className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[13.5px] font-semibold font-jakarta cursor-pointer transition-all border ${i===main?'bg-[#1A4FD6] text-white border-[#1A4FD6]':'bg-white text-[#5A6A8A] border-[#DDE5F8] hover:border-[#1A4FD6]/30 hover:text-[#1A4FD6] hover:bg-[#EBF1FF]'}`}>
//               <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60"/>
//               {t}
//             </button>
//           ))}
//         </div>

//         {/* Panel A: Key Features */}
//         {main === 0 && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {features.map(f => (
//               <div key={f.title} className="bg-white border border-[#DDE5F8] rounded-[18px] p-6 text-center group hover:-translate-y-1 hover:border-[#1A4FD6]/18 transition-all relative overflow-hidden cursor-default">
//                 <div className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{background:`linear-gradient(90deg,${acColors[f.ac]},${acColors[f.ac]}88)`}}/>
//                 <div className="w-16 h-16 rounded-[18px] flex items-center justify-center mx-auto mb-4" style={{background:acBg[f.ac],color:acColors[f.ac]}}>
//                   <f.Icon />
//                 </div>
//                 <div className="text-[14px] font-bold text-[#0D1E42] mb-2 leading-tight">{f.title}</div>
//                 <div className="text-[12.5px] text-[#5A6A8A] leading-[1.65] font-medium">{f.desc}</div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Panel B: Advantage */}
//         {main === 1 && (
//           <div className="bg-white border border-[#DDE5F8] rounded-[20px] overflow-hidden">
//             <div className="flex overflow-x-auto bg-[#F7F9FF] border-b border-[#DDE5F8]">
//               {advTabs.map((t,i) => (
//                 <button key={t} onClick={()=>setAdv(i)} className={`flex-shrink-0 px-5 py-3.5 text-[13px] font-semibold font-jakarta border-0 cursor-pointer transition-all border-b-2 whitespace-nowrap ${i===adv?'text-[#1A4FD6] bg-white border-[#1A4FD6] font-bold':'text-[#5A6A8A] bg-transparent border-transparent hover:text-[#1A4FD6]'}`}>{t}</button>
//               ))}
//             </div>
//             <div className="p-6 lg:p-10 flex flex-col lg:flex-row gap-10 items-start">
//               <div className="flex-1">
//                 <span className="inline-block bg-[#EBF1FF] text-[#1A4FD6] text-[10px] font-extrabold tracking-[0.1em] uppercase px-3 py-1 rounded mb-4">{advContent[adv].tag}</span>
//                 <h3 className="text-[22px] font-extrabold font-jakarta tracking-tight text-[#0D1E42] mb-5">{advContent[adv].title}</h3>
//                 {advContent[adv].pts.map((pt,i) => (
//                   <div key={i} className="py-4 border-b border-[#DDE5F8] last:border-b-0">
//                     <span className="inline-block bg-[#FEF3C7] text-[#92600A] px-2 py-0.5 rounded text-[12.5px] font-bold mb-1.5">{pt.hl}</span>
//                     <p className="text-[13.5px] text-[#5A6A8A] leading-[1.65]">{pt.p}</p>
//                   </div>
//                 ))}
//                 <div className="flex mt-5 bg-[#F7F9FF] rounded-xl border border-[#DDE5F8] overflow-hidden">
//                   {advContent[adv].stats.map(([n,l]) => (
//                     <div key={l} className="flex-1 p-3.5 border-r border-[#DDE5F8] last:border-r-0 text-center">
//                       <div className="text-[22px] font-black text-[#0D1E42] leading-none">{n}</div>
//                       <div className="text-[10px] text-[#5A6A8A] font-semibold mt-1 uppercase tracking-wider">{l}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="w-full lg:w-[280px] flex-shrink-0 rounded-2xl flex items-center justify-center p-8 border border-[#DDE5F8]" style={{background:'#F7F9FF',minHeight:240}}>
//                 <div className="text-center text-[#1A4FD6]">
//                   <div className="flex justify-center mb-3"><AdvIcon /></div>
//                   <div className="text-[15px] font-bold text-[#1A4FD6]">{advContent[adv].tag}</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Panel C: Facilities */}
//         {main === 2 && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {facilities.map(f => (
//               <div key={f.title} className="bg-white border border-[#DDE5F8] rounded-[18px] p-6 group hover:-translate-y-1 hover:border-[#1A4FD6]/20 transition-all cursor-default">
//                 <span className="mb-3.5 block text-[#1A4FD6]"><f.Icon /></span>
//                 <div className="text-[14px] font-bold text-[#0D1E42] mb-2 leading-tight">{f.title}</div>
//                 <div className="text-[12.5px] text-[#5A6A8A] leading-[1.65] font-medium mb-3">{f.desc}</div>
//                 <span className="inline-block text-[10.5px] font-bold px-2.5 py-1 rounded" style={{background:f.tagBg,color:f.tagColor}}>{f.tag}</span>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

















// import { useState } from "react";

// /* ── Data ── */
// const TICKER_ITEMS = [
//   { num: "20K+", label: "Students Mentored" },
//   { num: "125+", label: "Courses Available" },
//   { num: "45+",  label: "Industry Mentors" },
//   { num: "94%",  label: "Placement Rate" },
//   { num: "₹6.4L", label: "Avg Package" },
//   { num: "200+", label: "Hiring Partners" },
//   { num: "4.9★", label: "Google Rating" },
//   { num: "3",    label: "NCR Locations" },
// ];

// const STEPS = [
//   {
//     id: "01",
//     title: "100% Placement Guarantee",
//     desc: "Dedicated placement cell assists every student from resume prep to final offer — until you're placed in a renowned company.",
//     stats: ["94% placed", "200+ partners", "₹6.4L avg"],
//     tag: { label: "Placement Guaranteed", color: "bg-green-50 text-green-800" },
//   },
//   {
//     id: "02",
//     title: "AI-Integrated Curriculum",
//     desc: "Expert-made, regularly audited course content. Only the skills and tools the industry actually demands — nothing outdated.",
//     stats: ["125+ courses", "6 months avg"],
//     tag: { label: "Updated Every Quarter", color: "bg-blue-50 text-blue-700" },
//   },
//   {
//     id: "03",
//     title: "45+ Industry Mentors",
//     desc: "Active professionals with 12+ years average experience. Real 1-on-1 mentorship, portfolio reviews, and career coaching.",
//     stats: ["45+ mentors", "4.9★ rated"],
//     tag: { label: "Live Mentorship", color: "bg-violet-50 text-violet-700" },
//   },
//   {
//     id: "04",
//     title: "Guided Portfolio Building",
//     desc: "8+ real live projects per course. Mentor-reviewed portfolio showcased on Behance and Dribbble — work that gets you hired.",
//     stats: [],
//     tag: { label: "Portfolio Ready", color: "bg-amber-50 text-amber-800" },
//   },
//   {
//     id: "05",
//     title: "Holistic Soft Skills Training",
//     desc: "Communication, interview prep, resume building, LinkedIn coaching — we train you for the real world, not just the classroom.",
//     stats: [],
//     tag: { label: "Interview Ready", color: "bg-red-50 text-red-700" },
//   },
//   {
//     id: "06",
//     title: "Hybrid Online + Offline Classes",
//     desc: "3 NCR locations — Saket, Nirman Vihar, Pitampura — plus full online access. Learn how and where you want.",
//     stats: ["3 locations", "Online + offline"],
//     tag: { label: "Flexible Learning", color: "bg-teal-50 text-teal-700" },
//   },
// ];

// const FEATURE_CARDS = [
//   {
//     emoji: "🤖",
//     title: "AI Tutor & 24/7 Doubt Solver",
//     desc: "Instant AI-powered answers trained on all SkillEdge course content — clear any doubt at any time of day or night.",
//     accent: "before:bg-blue-600",
//     iconBg: "bg-blue-50",
//     tagLabel: "🟢 Live 24/7",
//     tagColor: "bg-green-100 text-green-800",
//     meta: "Instant Response",
//   },
//   {
//     emoji: "🖥️",
//     title: "Learning Management System (LMS)",
//     desc: "Track your progress, submit assignments, watch recorded lectures — full access 24/7 from any device.",
//     accent: "before:bg-violet-600",
//     iconBg: "bg-violet-50",
//     tagLabel: "Always On",
//     tagColor: "bg-violet-100 text-violet-700",
//     meta: "",
//   },
//   {
//     emoji: "📚",
//     title: "Study Material, Notes & Assignments",
//     desc: "Structured PDFs, video lectures, weekly assignments, and revision tests — everything organised for skill-based learning.",
//     accent: "before:bg-amber-400",
//     iconBg: "bg-amber-50",
//     tagLabel: "PDF + Video",
//     tagColor: "bg-amber-100 text-amber-800",
//     meta: "",
//   },
//   {
//     emoji: "📱",
//     title: "Mobile App + Student Job Portal",
//     desc: "Official SkillEdge app for courses & updates — plus access to live job listings, internships, and freelance projects from 200+ partners.",
//     accent: "before:bg-green-500",
//     iconBg: "bg-emerald-50",
//     tagLabel: "Free Access",
//     tagColor: "bg-green-100 text-green-800",
//     meta: "200+ Live Jobs",
//   },
//   {
//     emoji: "💬",
//     title: "WhatsApp Placement Cell",
//     desc: "Stay updated with live job alerts, hiring announcements, batch updates, and placement news via our exclusive WhatsApp channel.",
//     accent: "before:bg-pink-500",
//     iconBg: "bg-pink-50",
//     tagLabel: "Free to Join",
//     tagColor: "bg-pink-100 text-pink-700",
//     meta: "",
//   },
//   {
//     emoji: "🏆",
//     title: "UGC-Recognised Certification",
//     desc: "Industry-ready certification recognised by UGC. Get certified to advance your career, grow your freelance work, or launch a business.",
//     accent: "before:bg-teal-500",
//     iconBg: "bg-teal-50",
//     tagLabel: "UGC Recognised",
//     tagColor: "bg-teal-100 text-teal-700",
//     meta: "",
//   },
// ];

// /* ── Marquee (CSS animation via inline style) ── */
// function Ticker() {
//   const all = [...TICKER_ITEMS, ...TICKER_ITEMS]; // duplicate for seamless loop
//   return (
//     <div className="bg-[#060E25] py-5 overflow-hidden relative">
//       {/* fade edges */}
//       <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
//         style={{ background: "linear-gradient(to right, #060E25, transparent)" }} />
//       <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
//         style={{ background: "linear-gradient(to left, #060E25, transparent)" }} />

//       <div
//         className="flex w-max"
//         style={{ animation: "tickr 35s linear infinite" }}
//       >
//         {all.map((item, i) => (
//           <span key={i} className="flex items-center">
//             <span className="flex items-center gap-3 px-10 whitespace-nowrap">
//               <span className="text-[22px] font-black text-white tracking-tight leading-none">
//                 {item.num.replace(/[K+%★L].*/, "")}
//                 <em className="not-italic text-[#F5A623]">
//                   {item.num.replace(/^[0-9₹.]+/, "")}
//                 </em>
//               </span>
//               <span className="text-[11px] font-semibold text-white/35 uppercase tracking-widest">
//                 {item.label}
//               </span>
//             </span>
//             <span className="text-white/10 text-3xl font-thin">·</span>
//           </span>
//         ))}
//       </div>

//       <style>{`@keyframes tickr{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
//     </div>
//   );
// }

// /* ── Main Component ── */
// export default function WhyChoose() {
//   const [activeStep, setActiveStep] = useState(0);

//   return (
//     <section className="bg-white overflow-hidden">

//       {/* ── Header ── */}
//       <div className="max-w-[1240px] mx-auto px-6 sm:px-9 pt-16 sm:pt-24 pb-12 sm:pb-14">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-end">

//           {/* Left */}
//           <div>
//             <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#DDE5F8] text-blue-700 text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
//               ✦ Why SkillEdge
//             </div>
//             <h2 className="text-[clamp(34px,4vw,58px)] font-extrabold tracking-tight leading-none text-[#0D1E42]">
//               Features,<br />
//               <span className="text-[#1A4FD6]">Facilities</span><br />
//               &amp; <span className="text-[#F5A623]">Advantages</span>
//             </h2>
//           </div>

//           {/* Right */}
//           <div className="pb-1">
//             <p className="text-[15px] text-[#5A6A8A] leading-[1.8] font-medium mb-6">
//               Everything you need to learn, grow, and get placed — all under one roof. SkillEdge is built differently, for students who want results.
//             </p>
//             <div className="flex flex-wrap gap-3">
//               <button className="bg-[#1A4FD6] text-white text-[14px] font-bold px-6 py-3 rounded-xl shadow-[0_6px_20px_rgba(26,79,214,0.28)] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(26,79,214,0.38)] active:scale-[0.98] transition-all duration-200">
//                 Book Free Demo →
//               </button>
//               <button className="bg-transparent text-[#1A4FD6] border-2 border-[#DDE5F8] text-[14px] font-bold px-5 py-3 rounded-xl hover:border-[#1A4FD6] hover:bg-blue-50 transition-all duration-200">
//                 Explore Courses
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── Marquee Ticker ── */}
//       <Ticker />

//       {/* ── 2-col Content Grid ── */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#F4F7FF]">

//         {/* LEFT — Steps */}
//         <div className="lg:border-r border-[#DDE5F8] px-6 sm:px-9 py-12 lg:sticky lg:top-0 lg:self-start">

//           {/* section label */}
//           <div className="flex items-center gap-3 mb-8">
//             <div className="flex-1 h-px bg-[#DDE5F8]" />
//             <span className="text-[11px] font-bold text-[#5A6A8A] tracking-[0.1em] uppercase whitespace-nowrap">
//               Our Advantages
//             </span>
//           </div>

//           <div className="space-y-0">
//             {STEPS.map((step, idx) => (
//               <div
//                 key={step.id}
//                 onClick={() => setActiveStep(idx)}
//                 className={`flex gap-5 py-5 border-b border-[#DDE5F8] last:border-b-0 cursor-pointer group transition-all duration-200`}
//               >
//                 {/* Number box */}
//                 <div
//                   className={`w-9 h-9 rounded-[10px] flex items-center justify-center text-[13px] font-extrabold flex-shrink-0 mt-0.5 border-[1.5px] transition-all duration-200
//                     ${activeStep === idx
//                       ? "bg-[#1A4FD6] text-white border-[#1A4FD6]"
//                       : "bg-white text-[#5A6A8A] border-[#DDE5F8] group-hover:bg-[#1A4FD6] group-hover:text-white group-hover:border-[#1A4FD6]"
//                     }`}
//                 >
//                   {step.id}
//                 </div>

//                 {/* Body */}
//                 <div className="flex-1 min-w-0">
//                   <div
//                     className={`text-[15px] font-bold mb-1.5 transition-colors duration-200
//                       ${activeStep === idx ? "text-[#1A4FD6]" : "text-[#0D1E42] group-hover:text-[#1A4FD6]"}`}
//                   >
//                     {step.title}
//                   </div>
//                   <div className="text-[13px] text-[#5A6A8A] leading-relaxed font-medium">
//                     {step.desc}
//                   </div>

//                   {/* Stats pills */}
//                   {step.stats.length > 0 && (
//                     <div className="flex flex-wrap gap-2 mt-3">
//                       {step.stats.map((s, i) => (
//                         <span key={i} className="bg-[#F4F7FF] border border-[#DDE5F8] rounded-[7px] px-2.5 py-1 text-[11.5px] font-bold text-[#0D1E42]">
//                           {s}
//                         </span>
//                       ))}
//                     </div>
//                   )}

//                   {/* Tag */}
//                   <span className={`inline-flex items-center mt-2.5 text-[10.5px] font-bold px-2.5 py-1 rounded-[5px] ${step.tag.color}`}>
//                     {step.tag.label}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT — Feature Cards */}
//         <div className="px-6 sm:px-9 py-10 lg:py-12">

//           {/* section label */}
//           <div className="flex items-center gap-3 mb-6">
//             <span className="text-[11px] font-bold text-[#5A6A8A] tracking-[0.1em] uppercase whitespace-nowrap">
//               Features &amp; Facilities
//             </span>
//             <div className="flex-1 h-px bg-[#DDE5F8]" />
//           </div>

//           <div className="space-y-3.5">
//             {FEATURE_CARDS.map((card, i) => (
//               <div
//                 key={i}
//                 className={`relative bg-white border border-[#DDE5F8] rounded-2xl px-5 py-[18px] flex items-start gap-4
//                   hover:border-blue-200 hover:shadow-[0_8px_28px_rgba(26,79,214,0.08)] hover:translate-x-1
//                   transition-all duration-200 overflow-hidden group cursor-default
//                   before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px]
//                   before:scale-y-0 before:origin-top before:transition-transform before:duration-250
//                   hover:before:scale-y-100 ${card.accent}`}
//               >
//                 {/* Icon */}
//                 <div className={`w-12 h-12 rounded-[13px] flex items-center justify-center text-[22px] flex-shrink-0 ${card.iconBg}`}>
//                   {card.emoji}
//                 </div>

//                 {/* Body */}
//                 <div className="flex-1 min-w-0">
//                   <div className="text-[14.5px] font-bold text-[#0D1E42] mb-1">{card.title}</div>
//                   <div className="text-[12.5px] text-[#5A6A8A] leading-relaxed font-medium">{card.desc}</div>
//                   <div className="flex items-center justify-between mt-2.5">
//                     <span className={`text-[10px] font-bold px-2 py-0.5 rounded-[4px] uppercase tracking-wide ${card.tagColor}`}>
//                       {card.tagLabel}
//                     </span>
//                     {card.meta && (
//                       <span className="text-[11px] text-[#5A6A8A] font-semibold">{card.meta}</span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

    

//     </section>
//   );
// }