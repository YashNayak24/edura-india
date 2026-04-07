// import { useState, useMemo } from 'react'

// /* ── DATA ── */
// const CATS = ['All Topics','Design','Coding','Digital Marketing','AI & Tech','Career Tips','Stock Market','Freelancing','Interview Prep']

// const ARTICLES = [
//   {
//     id:1, cat:'Design', catClass:'bg-[#E8F0FC] text-[#094E93]',
//     date:'Mar 28', read:'8 min', views:14200, likes:342,
//     title:'10 UI/UX Trends Designers Must Know in 2025',
//     excerpt:'Glassmorphism is out. Bento grids are in. Here\'s a complete breakdown of the design trends shaping products this year — with real examples from top companies.',
//     emoji:'🎨', imgBg:'linear-gradient(135deg,#1a237e,#283593,#3949ab)',
//     author:'Ankit Gupta', initials:'AG', authorBg:'linear-gradient(135deg,#F5A623,#e08800)',
//     illoAlt:false,
//   },
//   {
//     id:2, cat:'Coding', catClass:'bg-[#EFF6FF] text-[#1d4ed8]',
//     date:'Mar 25', read:'11 min', views:22800, likes:589,
//     title:'Full Stack in 2025: The Honest Roadmap for Beginners',
//     excerpt:'React, Node, MongoDB, AWS — knowing what to learn and in what order is half the battle. This guide breaks it down month by month with free resources included.',
//     emoji:'💻', imgBg:'linear-gradient(135deg,#0d1b2a,#1b263b,#415a77)',
//     author:'Rahul Sharma', initials:'RS', authorBg:'linear-gradient(135deg,#1e40af,#1d4ed8)',
//     illoAlt:true,
//   },
//   {
//     id:3, cat:'Digital Marketing', catClass:'bg-[#FEF3C7] text-[#d97706]',
//     date:'Mar 22', read:'7 min', views:18500, likes:421,
//     title:'How to Run Google Ads with ₹5,000: A Beginner\'s Playbook',
//     excerpt:'You don\'t need a big budget to get results from Google Ads. Here\'s a step-by-step guide to setting up, optimizing, and scaling your first campaign on a tight budget.',
//     emoji:'📊', imgBg:'linear-gradient(135deg,#7c2d12,#b45309,#d97706)',
//     author:'Priya Mehta', initials:'PM', authorBg:'linear-gradient(135deg,#0f766e,#0d9488)',
//     illoAlt:false,
//   },
//   {
//     id:4, cat:'Career Tips', catClass:'bg-[#ECFDF5] text-[#059669]',
//     date:'Mar 20', read:'9 min', views:31200, likes:712,
//     title:'LinkedIn Profile Tips That Recruiters Actually Notice',
//     excerpt:'Most LinkedIn profiles look the same. Here\'s how top candidates stand out — with real recruiter insights on what makes them click "Connect" vs scroll past.',
//     emoji:'🚀', imgBg:'linear-gradient(135deg,#064e3b,#065f46,#047857)',
//     author:'Sneha Kapoor', initials:'SK', authorBg:'linear-gradient(135deg,#7c3aed,#6d28d9)',
//     illoAlt:true,
//   },
//   {
//     id:5, cat:'AI & Tech', catClass:'bg-[#F5F3FF] text-[#7c3aed]',
//     date:'Mar 18', read:'6 min', views:27400, likes:634,
//     title:'AI Tools Every Freelancer Should Use in 2025',
//     excerpt:'From writing to design to client management — the AI tools that are actually saving freelancers 10+ hours per week, with honest reviews and pricing breakdowns.',
//     emoji:'🤖', imgBg:'linear-gradient(135deg,#312e81,#4c1d95,#6d28d9)',
//     author:'Vikram Das', initials:'VD', authorBg:'linear-gradient(135deg,#be185d,#db2777)',
//     illoAlt:false,
//   },
//   {
//     id:6, cat:'Stock Market', catClass:'bg-[#FFF1F2] text-[#be123c]',
//     date:'Mar 15', read:'10 min', views:19800, likes:398,
//     title:'How to Start SIP Investing: A Complete Guide for Beginners',
//     excerpt:'SIP is not just about picking a mutual fund and forgetting. Here\'s how to build a strategy that actually aligns with your financial goals and risk profile.',
//     emoji:'📈', imgBg:'linear-gradient(135deg,#7f1d1d,#991b1b,#b91c1c)',
//     author:'Arjun Nair', initials:'AN', authorBg:'linear-gradient(135deg,#0369a1,#0284c7)',
//     illoAlt:true,
//   },
//   {
//     id:7, cat:'Freelancing', catClass:'bg-[#FFF7ED] text-[#c2410c]',
//     date:'Mar 12', read:'8 min', views:24100, likes:502,
//     title:'How to Get Your First Client on Upwork (Without Experience)',
//     excerpt:'The cold truth: your profile is probably why you\'re not getting hired. Here\'s a proven 30-day strategy to land your first client and build momentum.',
//     emoji:'💼', imgBg:'linear-gradient(135deg,#78350f,#92400e,#b45309)',
//     author:'Kavya Reddy', initials:'KR', authorBg:'linear-gradient(135deg,#155e75,#0e7490)',
//     illoAlt:false,
//   },
//   {
//     id:8, cat:'Design', catClass:'bg-[#E8F0FC] text-[#094E93]',
//     date:'Mar 10', read:'5 min', views:16300, likes:289,
//     title:'Figma Auto Layout: The One Feature You\'re Underusing',
//     excerpt:'Auto Layout changed how designers build components — but most people only use 20% of what it can do. Here\'s the full breakdown with practical examples.',
//     emoji:'🎯', imgBg:'linear-gradient(135deg,#1e1b4b,#312e81,#4338ca)',
//     author:'Ankit Gupta', initials:'AG', authorBg:'linear-gradient(135deg,#F5A623,#e08800)',
//     illoAlt:true,
//   },
//   {
//     id:9, cat:'Interview Prep', catClass:'bg-[#F0FDF4] text-[#15803d]',
//     date:'Mar 8', read:'12 min', views:38600, likes:891,
//     title:'Top 50 HR Interview Questions (With Sample Answers)',
//     excerpt:'These questions appear in almost every first-round interview. We\'ve collected real answers from candidates who got hired at top companies in India.',
//     emoji:'🎙️', imgBg:'linear-gradient(135deg,#14532d,#166534,#15803d)',
//     author:'Meera Joshi', initials:'MJ', authorBg:'linear-gradient(135deg,#be185d,#9d174d)',
//     illoAlt:false,
//   },
//   {
//     id:10, cat:'Coding', catClass:'bg-[#EFF6FF] text-[#1d4ed8]',
//     date:'Mar 6', read:'9 min', views:21500, likes:445,
//     title:'Python for Beginners: From Zero to Your First Project',
//     excerpt:'No CS degree needed. This guide walks you through Python fundamentals with real mini-projects — so you\'re building things from day one, not just reading theory.',
//     emoji:'🐍', imgBg:'linear-gradient(135deg,#14532d,#15803d,#16a34a)',
//     author:'Rahul Sharma', initials:'RS', authorBg:'linear-gradient(135deg,#1e40af,#1d4ed8)',
//     illoAlt:false,
//   },
//   {
//     id:11, cat:'Design', catClass:'bg-[#E8F0FC] text-[#094E93]',
//     date:'Mar 4', read:'6 min', views:13200, likes:267,
//     title:'Color Theory for UI Designers: What Actually Matters',
//     excerpt:'Forget the complicated color wheel theory. Here\'s what actually matters when picking colors for apps and websites — with real before/after examples.',
//     emoji:'🎨', imgBg:'linear-gradient(135deg,#4a044e,#6b21a8,#7c3aed)',
//     author:'Ankit Gupta', initials:'AG', authorBg:'linear-gradient(135deg,#F5A623,#e08800)',
//     illoAlt:true,
//   },
//   {
//     id:12, cat:'Career Tips', catClass:'bg-[#ECFDF5] text-[#059669]',
//     date:'Mar 2', read:'7 min', views:29100, likes:623,
//     title:'How to Switch Careers Into Tech With No Experience',
//     excerpt:'Thousands of people make this switch every year in India. Here\'s the honest roadmap — what to learn, how long it takes, and what companies actually want.',
//     emoji:'🔄', imgBg:'linear-gradient(135deg,#0c4a6e,#0369a1,#0284c7)',
//     author:'Sneha Kapoor', initials:'SK', authorBg:'linear-gradient(135deg,#7c3aed,#6d28d9)',
//     illoAlt:false,
//   },
// ]

// const TRENDING = [
//   { title:'Is Freelancing Better Than a Job in 2025?', cat:'Career', views:'28K' },
//   { title:'How to Build Your Portfolio Website for Free', cat:'Design', views:'19K' },
//   { title:'Top 10 In-Demand Skills for 2025 (India)', cat:'Career', views:'45K' },
//   { title:'Meta Ads vs Google Ads: Which Converts Better?', cat:'Marketing', views:'17K' },
//   { title:'Python or JavaScript First? Honest Answer', cat:'Coding', views:'33K' },
// ]

// const TAGS = ['SEO','React','Figma','Python','Google Ads','UI Design','Freelancing','Stock Market','Content Writing','Data Science','Canva','Resume Tips','LinkedIn','Interview Prep','Meta Ads','Node.js','Branding','Video Editing']

// const COURSES = [
//   { name:'Graphic Design Pro', meta:'6 months · ₹25,000', emoji:'🎨', bg:'linear-gradient(135deg,#7c3aed,#4c1d95)', badge:'Design' },
//   { name:'Digital Marketing', meta:'4 months · ₹18,000', emoji:'📱', bg:'linear-gradient(135deg,#0369a1,#075985)', badge:'Marketing' },
//   { name:'Full Stack Web Dev', meta:'8 months · ₹32,000', emoji:'💻', bg:'linear-gradient(135deg,#0f172a,#1e293b)', badge:'Coding' },
// ]

// const SOCIALS = [
//   { name:'Facebook', count:'24.5K followers', emoji:'📘', bg:'#E8F0FC' },
//   { name:'Instagram', count:'18.2K followers', emoji:'📷', bg:'#FFF0F5' },
//   { name:'LinkedIn', count:'11.8K followers', emoji:'💼', bg:'#E8F4FD' },
//   { name:'YouTube', count:'9.4K subscribers', emoji:'▶️', bg:'#FFF0F0' },
// ]

// const MUST_READ = [
//   { title:'How to Get a Job With No Experience in India (2025 Guide)', cat:'Career', catCls:'bg-[#ECFDF5] text-[#059669]', time:'8 min' },
//   { title:'The Best Free Figma Plugins Every Designer Should Install', cat:'Design', catCls:'bg-[#E8F0FC] text-[#094E93]', time:'5 min' },
//   { title:'Freelancing on Upwork vs Fiverr: What Nobody Tells You', cat:'Career', catCls:'bg-[#ECFDF5] text-[#059669]', time:'9 min' },
//   { title:'How to Write a Resume That Actually Gets Shortlisted', cat:'Career', catCls:'bg-[#ECFDF5] text-[#059669]', time:'6 min' },
// ]

// const CAREER_CORNER = [
//   { title:'LinkedIn Profile Tips That Recruiters Told Us Work Best', cat:'Career', catCls:'bg-[#ECFDF5] text-[#059669]', time:'7 min' },
//   { title:'Mock Interview Questions for Digital Marketers in 2025', cat:'Marketing', catCls:'bg-[#FEF3C7] text-[#d97706]', time:'10 min' },
//   { title:'Salary Negotiation Scripts That Work Every Time', cat:'Career', catCls:'bg-[#ECFDF5] text-[#059669]', time:'5 min' },
//   { title:'How to Ace a Portfolio Presentation in 15 Minutes', cat:'Design', catCls:'bg-[#E8F0FC] text-[#094E93]', time:'6 min' },
// ]

// const fmtViews = n => n >= 1000 ? (n / 1000).toFixed(1) + 'K' : n

// /* ────────────────────────────────────────────
//    ARTICLE CARD — LIST VIEW
// ──────────────────────────────────────────── */
// function ArticleCardList({ article }) {
//   return (
//     <div className="bg-white rounded-[20px] overflow-hidden border border-[#e8edf5]
//       grid grid-cols-1 sm:grid-cols-[240px_1fr]
//       shadow-[0_2px_8px_rgba(0,0,0,0.05)]
//       transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_16px_48px_rgba(9,78,147,0.13)]">
//       <div className="flex items-center justify-center relative overflow-hidden min-h-[200px] sm:min-h-0"
//         style={{ background: article.imgBg }}>
//         <div className="absolute inset-0 pointer-events-none z-[1]"
//           style={{ backgroundImage:'linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px)', backgroundSize:'28px 28px' }}/>
//         <span className="text-[64px] relative z-[2]"
//           style={{
//             filter:'drop-shadow(0 10px 24px rgba(0,0,0,0.25))',
//             transform: article.illoAlt ? 'rotate(6deg)' : 'rotate(-8deg)',
//             animation: article.illoAlt ? 'floatIllo2 4.5s ease-in-out infinite' : 'floatIllo 4s ease-in-out infinite',
//           }}>
//           {article.emoji}
//         </span>
//       </div>
//       <div className="p-[24px_28px] flex flex-col">
//         <div className="flex items-center gap-2 mb-[10px] flex-wrap">
//           <span className={`text-[10px] font-bold uppercase tracking-[0.05em] px-[10px] py-[3px] rounded-full ${article.catClass}`}>
//             {article.cat}
//           </span>
//           <span className="text-[11px] text-[#9ca3af]">📅 {article.date}</span>
//           <span className="text-[11px] text-[#9ca3af]">⏱ {article.read}</span>
//           <span className="text-[11px] text-[#9ca3af]">👁 {fmtViews(article.views)}</span>
//           <span className="text-[11px] text-[#9ca3af]">❤ {fmtViews(article.likes)}</span>
//         </div>
//         <h3 className="text-[18px] font-extrabold text-[#0A1628] leading-[1.3] mb-2">{article.title}</h3>
//         <p className="text-[13px] text-[#6b7280] leading-[1.7] mb-auto pb-[14px] flex-1">{article.excerpt}</p>
//         <div className="flex items-center justify-between pt-[13px] border-t border-[#f0f3f8] mt-auto">
//           <div className="flex items-center gap-[9px]">
//             <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
//               style={{ background: article.authorBg }}>
//               {article.initials}
//             </div>
//             <div>
//               <div className="text-[12px] font-bold text-[#0A1628]">{article.author}</div>
//               <div className="text-[11px] text-[#9ca3af]">SkillEdge Expert</div>
//             </div>
//           </div>
//           <a href="#" className="text-[13px] font-bold text-[#094E93] flex items-center gap-1 transition-all duration-200 hover:gap-2">
//             Read Article →
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ────────────────────────────────────────────
//    ARTICLE CARD — GRID VIEW
// ──────────────────────────────────────────── */
// function ArticleCardGrid({ article }) {
//   return (
//     <div className="bg-white rounded-[18px] overflow-hidden border border-[#e8edf5]
//       flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.05)]
//       transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_16px_48px_rgba(9,78,147,0.13)]">
//       <div className="h-[180px] flex items-center justify-center relative overflow-hidden"
//         style={{ background: article.imgBg }}>
//         <div className="absolute inset-0 pointer-events-none"
//           style={{ backgroundImage:'linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)', backgroundSize:'28px 28px' }}/>
//         <span className="text-[52px] relative z-[1]"
//           style={{ filter:'drop-shadow(0 6px 16px rgba(0,0,0,0.25))', transform: article.illoAlt ? 'rotate(6deg)' : 'rotate(-8deg)' }}>
//           {article.emoji}
//         </span>
//         <div className="absolute bottom-[10px] left-[10px] z-[2]">
//           <span className={`text-[9px] font-bold uppercase tracking-[0.05em] px-2 py-[3px] rounded-full ${article.catClass}`}>{article.cat}</span>
//         </div>
//         <div className="absolute top-[10px] right-[10px] z-[2] bg-black/45 text-white text-[10px] font-semibold px-[9px] py-[3px] rounded-full">
//           ⏱ {article.read}
//         </div>
//       </div>
//       <div className="p-5 flex flex-col gap-[10px] flex-1">
//         <div className="flex gap-2 text-[11px] text-[#9ca3af]">
//           <span>📅 {article.date}</span><span>·</span><span>👁 {fmtViews(article.views)}</span>
//         </div>
//         <h3 className="text-[15px] font-extrabold text-[#0A1628] leading-[1.35]">{article.title}</h3>
//         <p className="text-[12px] text-[#6b7280] leading-[1.6] flex-1">
//           {article.excerpt.substring(0, 120)}…
//         </p>
//         <div className="flex items-center justify-between pt-3 border-t border-[#f0f3f8] mt-auto">
//           <div className="flex items-center gap-2">
//             <div className="w-[28px] h-[28px] rounded-full flex items-center justify-center text-[10px] font-bold text-white"
//               style={{ background: article.authorBg }}>{article.initials}</div>
//             <span className="text-[12px] font-bold text-[#0A1628]">{article.author}</span>
//           </div>
//           <a href="#" className="text-[11px] font-bold text-[#094E93]">Read →</a>
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ────────────────────────────────────────────
//    WHY SKILLEDGE PROMO
// ──────────────────────────────────────────── */
// function InlinePromoCard() {
//   return (
//     <div className="rounded-[20px] overflow-hidden p-8 relative border border-white/10"
//       style={{ background:'linear-gradient(135deg,#0A1628,#0F2248,#0D3070)' }}>
//       <div className="absolute inset-0 pointer-events-none"
//         style={{ backgroundImage:'radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)', backgroundSize:'22px 22px' }}/>
//       <div className="absolute w-[400px] h-[400px] rounded-full -top-24 -right-24 pointer-events-none"
//         style={{ background:'radial-gradient(circle,rgba(20,70,180,.35) 0%,transparent 70%)' }}/>
//       <div className="relative z-10">
//         <div className="flex items-center gap-2 text-[#F5A623] text-[11px] font-bold uppercase tracking-[0.12em] mb-4">
//           <span className="w-5 h-[2px] bg-[#F5A623]"/>
//           Why SkillEdge?
//         </div>
//         <h3 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-white leading-[1.2] mb-3">
//           Upskill with India's Most Trusted Career Training Institute
//         </h3>
//         <p className="text-[13px] leading-[1.75] mb-6" style={{ color:'rgba(255,255,255,0.6)' }}>
//           From beginner to job-ready in 3–8 months. Real projects, expert mentors, and 100% placement assistance — right here in Delhi NCR.
//         </p>
//         <div className="flex flex-col gap-3 mb-6">
//           {[
//             '20,000+ students successfully placed across top companies',
//             'Live projects + portfolio building from Day 1',
//             'EMI options available — no financial barrier to learning',
//           ].map(f => (
//             <div key={f} className="flex items-start gap-3">
//               <span className="w-5 h-5 rounded-[6px] flex items-center justify-center flex-shrink-0 mt-0.5 border"
//                 style={{ background:'rgba(245,166,35,0.15)', borderColor:'rgba(245,166,35,0.3)' }}>
//                 <svg viewBox="0 0 12 12" className="w-[10px] h-[10px]" fill="none" stroke="#F5A623" strokeWidth={2.5}>
//                   <polyline points="2,6 5,9 10,3"/>
//                 </svg>
//               </span>
//               <span className="text-[13px] leading-[1.5]" style={{ color:'rgba(255,255,255,0.75)' }}>{f}</span>
//             </div>
//           ))}
//         </div>
//         <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#094E93] text-white rounded-[12px]
//           text-[14px] font-bold cursor-pointer transition-colors duration-200 hover:bg-[#073E75]
//           shadow-[0_6px_20px_rgba(9,78,147,0.4)]" style={{ fontFamily:'inherit', border:'none' }}>
//           <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
//             <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 4.18 2 2 0 015 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 9.91"/>
//           </svg>
//           Enquiry Now
//         </button>
//       </div>
//     </div>
//   )
// }

// /* ────────────────────────────────────────────
//    MUST READ + CAREER CORNER (side by side)
// ──────────────────────────────────────────── */
// function EditorialSection() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//       {[
//         { title:'Must Read', data: MUST_READ },
//         { title:'Career Corner', data: CAREER_CORNER },
//       ].map(({ title, data }) => (
//         <div key={title} className="bg-white rounded-[20px] p-7 border border-[#e8edf5] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
//           <div className="flex items-center gap-2 text-[16px] font-extrabold text-[#0A1628] pb-4 border-b-[1.5px] border-[#f0f3f8]">
//             {title}
//             <span className="flex-1 h-[1.5px] bg-[#f0f3f8]"/>
//           </div>
//           {data.map((item, i) => (
//             <div key={item.title}
//               className={`grid grid-cols-[54px_1fr] gap-3 py-4 ${i < data.length - 1 ? 'border-b border-[#f5f7fa]' : ''}`}>
//               <div className="text-[32px] font-black text-[#E8F0FC] leading-none text-center self-center">
//                 0{i + 1}
//               </div>
//               <div>
//                 <div className="text-[14px] font-bold text-[#0A1628] leading-[1.4] mb-[6px]">{item.title}</div>
//                 <div className="flex items-center gap-2 text-[11px] text-[#9ca3af]">
//                   <span className={`text-[9px] font-bold px-2 py-[2px] rounded-full ${item.catCls}`}>{item.cat}</span>
//                   <span>⏱ {item.time}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   )
// }

// /* ────────────────────────────────────────────
//    BOTTOM INFO — Trending + Tags (left) | Courses + Socials (right)
// ──────────────────────────────────────────── */
// function BottomInfoSection() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//       {/* LEFT: Trending Now + Explore Topics */}
//       <div className="flex flex-col gap-5">
//         <div className="bg-white rounded-[18px] p-[22px] border border-[#e8edf5] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
//           <div className="flex items-center gap-2 text-[12px] font-extrabold text-[#0A1628] uppercase tracking-[0.06em] mb-4">
//             <span className="w-1 h-[15px] bg-[#094E93] rounded-[2px]"/>
//             Trending Now
//           </div>
//           {TRENDING.map((t, i) => (
//             <div key={t.title} className={`flex gap-[14px] py-[11px] ${i < TRENDING.length - 1 ? 'border-b border-[#f5f7fa]' : ''}`}>
//               <div className="text-[26px] font-black text-[#E8F0FC] leading-none flex-shrink-0 w-[34px] text-center">
//                 0{i + 1}
//               </div>
//               <div>
//                 <div className="text-[13px] font-bold text-[#0A1628] leading-[1.4] mb-[3px]">{t.title}</div>
//                 <div className="flex items-center gap-2 text-[11px] text-[#9ca3af]">
//                   <span className="bg-[#E8F0FC] text-[#094E93] text-[9px] font-bold px-[7px] py-[2px] rounded-full">{t.cat}</span>
//                   <span>👁 {t.views}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="bg-white rounded-[18px] p-[22px] border border-[#e8edf5] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
//           <div className="flex items-center gap-2 text-[12px] font-extrabold text-[#0A1628] uppercase tracking-[0.06em] mb-4">
//             <span className="w-1 h-[15px] bg-[#094E93] rounded-[2px]"/>
//             Explore Topics
//           </div>
//           <div className="flex flex-wrap gap-[7px]">
//             {TAGS.map(t => (
//               <span key={t} className="px-[13px] py-[5px] bg-[#F0F4FA] rounded-full text-[12px] font-semibold text-[#6b7280]
//                 border border-[#e8edf5] cursor-default select-none hover:border-[#094E93] hover:text-[#094E93] transition-colors duration-150">
//                 {t}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* RIGHT: Related Courses + Follow Us */}
//       <div className="flex flex-col gap-5">
//         <div className="rounded-[18px] p-[22px] border border-[#fde68a]" style={{ background:'linear-gradient(135deg,#fffbeb,#fef8e1)' }}>
//           <div className="flex items-center gap-2 text-[11px] font-bold text-[#d97706] uppercase tracking-[0.07em] mb-4">
//             📚 Related Courses
//           </div>
//           {COURSES.map(c => (
//             <div key={c.name} className="flex items-center justify-between p-3 bg-white rounded-[12px] border border-[#fde68a] mb-[9px] last:mb-3">
//               <div className="flex items-center gap-[10px]">
//                 <div className="w-9 h-9 rounded-[10px] flex items-center justify-center text-[16px] flex-shrink-0"
//                   style={{ background: c.bg }}>{c.emoji}</div>
//                 <div>
//                   <div className="text-[13px] font-bold text-[#0A1628]">{c.name}</div>
//                   <div className="text-[11px] text-[#9ca3af] mt-[1px]">{c.meta}</div>
//                 </div>
//               </div>
//               <span className="text-[10px] font-bold bg-[#E8F0FC] text-[#094E93] px-[9px] py-[3px] rounded-full whitespace-nowrap self-start">
//                 {c.badge}
//               </span>
//             </div>
//           ))}
//           <a href="#" className="block text-center bg-[#094E93] text-white rounded-[10px] py-[11px] text-[13px] font-bold
//             transition-colors duration-200 hover:bg-[#073E75]">
//             View All Courses →
//           </a>
//         </div>

//         <div className="bg-white rounded-[18px] p-[22px] border border-[#e8edf5] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
//           <div className="flex items-center gap-2 text-[12px] font-extrabold text-[#0A1628] uppercase tracking-[0.06em] mb-4">
//             <span className="w-1 h-[15px] bg-[#094E93] rounded-[2px]"/>
//             Follow Us
//           </div>
//           {SOCIALS.map(s => (
//             <div key={s.name} className="flex items-center justify-between py-[10px] px-[14px] rounded-[12px] border border-[#e8edf5]
//               mb-[9px] last:mb-0 transition-colors duration-200 hover:border-[#094E93] cursor-pointer">
//               <div className="flex items-center gap-[10px]">
//                 <div className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center text-[16px]"
//                   style={{ background: s.bg }}>{s.emoji}</div>
//                 <div>
//                   <div className="text-[13px] font-bold text-[#0A1628]">{s.name}</div>
//                   <div className="text-[11px] text-[#9ca3af]">{s.count}</div>
//                 </div>
//               </div>
//               <span className="text-[12px] font-bold text-[#094E93] cursor-pointer">Follow</span>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   )
// }

// /* ────────────────────────────────────────────
//    LOAD MORE BUTTON
// ──────────────────────────────────────────── */
// function LoadMoreBtn({ loading, onClick }) {
//   return (
//     <div className="flex justify-center py-2">
//       <button
//         onClick={onClick}
//         disabled={loading}
//         className="flex items-center gap-[10px] px-9 py-4 bg-white text-[#094E93]
//           border-2 border-[#094E93] rounded-[14px] text-[14px] font-bold cursor-pointer
//           transition-all duration-300 shadow-[0_4px_16px_rgba(9,78,147,0.12)]
//           hover:bg-[#094E93] hover:text-white hover:shadow-[0_8px_28px_rgba(9,78,147,0.3)]
//           disabled:opacity-60"
//         style={{ fontFamily:'inherit' }}>
//         {loading ? (
//           <>
//             <svg viewBox="0 0 24 24" className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" strokeWidth={2.5}>
//               <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
//             </svg>
//             Loading…
//           </>
//         ) : (
//           <>
//             <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
//               <path d="M12 5v14M5 12l7 7 7-7"/>
//             </svg>
//             Load More Articles
//           </>
//         )}
//       </button>
//     </div>
//   )
// }

// /* ────────────────────────────────────────────
//    MAIN EXPORT
// ──────────────────────────────────────────── */
// export default function BlogContent() {
//   const [activeCat, setActiveCat] = useState('All Topics')
//   const [sort,      setSort]      = useState('recent')
//   const [view,      setView]      = useState('list')
//   const [visible,   setVisible]   = useState(5)
//   const [loading,   setLoading]   = useState(false)

//   const filtered = useMemo(() => {
//     let arts = activeCat === 'All Topics' ? [...ARTICLES] : ARTICLES.filter(a => a.cat === activeCat)
//     if (sort === 'popular')  arts.sort((a, b) => b.likes - a.likes)
//     if (sort === 'trending') arts.sort((a, b) => b.views - a.views)
//     return arts
//   }, [activeCat, sort])

//   const slice = filtered.slice(0, visible)

//   const handleLoadMore = () => {
//     setLoading(true)
//     setTimeout(() => { setVisible(v => v + 3); setLoading(false) }, 600)
//   }

//   const handleCatChange = (c) => { setActiveCat(c); setVisible(5) }
//   const handleViewChange = (v) => { setView(v); setVisible(5) }

//   return (
//     <>
//       {/* ── Category tabs — sticky ── */}
//       <div className="bg-white border-b border-[#e8edf5] sticky top-[66px] shadow-[0_1px_0_rgba(0,0,0,0.04)] z-20">
//         <div className="max-w-[1280px] mx-auto px-5 py-3 flex gap-1 overflow-x-auto" style={{ scrollbarWidth:'none' }}>
//           {CATS.map(c => (
//             <button key={c}
//               onClick={() => handleCatChange(c)}
//               className={`px-[18px] py-2 rounded-full border-[1.5px] text-[13px] font-semibold cursor-pointer
//                 whitespace-nowrap transition-all duration-200 flex-shrink-0
//                 ${activeCat === c
//                   ? 'bg-[#094E93] text-white border-[#094E93]'
//                   : 'bg-white text-[#6b7280] border-[#e5e7eb] hover:bg-[#094E93] hover:text-white hover:border-[#094E93]'
//                 }`}
//               style={{ fontFamily:'inherit' }}>
//               {c}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* ── Main content — full width ── */}
//       <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-11">

//         {/* Sort / View bar */}
//         <div className="flex items-center justify-between flex-wrap gap-3 mb-[22px]">
//           <p className="text-[14px] font-medium text-[#9ca3af]">
//             Showing <span className="text-[#0A1628] font-bold">{filtered.length} article{filtered.length !== 1 ? 's' : ''}</span>
//           </p>
//           <div className="flex items-center gap-[10px]">
//             <select value={sort} onChange={e => setSort(e.target.value)}
//               className="px-[14px] py-[9px] border-[1.5px] border-[#e5e7eb] rounded-[10px]
//                 text-[13px] font-semibold text-[#6b7280] bg-white cursor-pointer outline-none"
//               style={{ fontFamily:'inherit' }}>
//               <option value="recent">Most Recent</option>
//               <option value="popular">Most Popular</option>
//               <option value="trending">Trending</option>
//             </select>
//             {[
//               { v:'list', icon:<><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></> },
//               { v:'grid', icon:<><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></> },
//             ].map(({ v, icon }) => (
//               <button key={v} onClick={() => handleViewChange(v)}
//                 className="px-3 py-[9px] rounded-[10px] border-[1.5px] cursor-pointer transition-all duration-150"
//                 style={{ background: view === v ? '#094E93' : '#fff', borderColor: view === v ? '#094E93' : '#e5e7eb', fontFamily:'inherit' }}>
//                 <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" fill="none"
//                   stroke={view === v ? '#fff' : '#6b7280'} strokeWidth={2}>{icon}</svg>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* ════════ GRID VIEW ════════ */}
//         {view === 'grid' && (
//           <div className="flex flex-col gap-[28px]">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//               {slice.map(a => <ArticleCardGrid key={a.id} article={a}/>)}
//             </div>

//             {/* Load More in grid */}
//             {visible < filtered.length && (
//               <LoadMoreBtn loading={loading} onClick={handleLoadMore}/>
//             )}

//             {/* Editorial + bottom info always at end */}
//             <EditorialSection/>
//             <BottomInfoSection/>
//           </div>
//         )}

//         {/* ════════ LIST VIEW ════════
//             Order:
//               card 1, 2, 3
//               → Why SkillEdge promo
//               card 4, 5
//               → Must Read + Career Corner (side by side)
//               card 6, 7, 8… (loaded via Load More, appended below editorial)
//               → Load More button  (shown when more cards available)
//               → Trending + Tags + Courses + Socials (always at bottom)
//         ════════ */}
//         {view === 'list' && (() => {
//           const first3  = slice.slice(0, 3)   // cards 1-3
//           const next2   = slice.slice(3, 5)   // cards 4-5
//           const rest    = slice.slice(5)       // cards 6+

//           return (
//             <div className="flex flex-col gap-[22px]">

//               {/* Cards 1-3 */}
//               {first3.map(a => <ArticleCardList key={a.id} article={a}/>)}

//               {/* Why SkillEdge — always shown after 3 cards */}
//               {first3.length === 3 && <InlinePromoCard/>}

//               {/* Cards 4-5 */}
//               {next2.map(a => <ArticleCardList key={a.id} article={a}/>)}

//               {/* Must Read + Career Corner — shown once we have >= 5 cards */}
//               {slice.length >= 5 && <EditorialSection/>}

//               {/* Cards 6+ — appended below editorial on Load More */}
//               {rest.length > 0 && (
//                 <div className="flex flex-col gap-[22px]">
//                   {rest.map(a => <ArticleCardList key={a.id} article={a}/>)}
//                 </div>
//               )}

//               {/* Load More button */}
//               {visible < filtered.length && (
//                 <LoadMoreBtn loading={loading} onClick={handleLoadMore}/>
//               )}

//               {/* Bottom info: Trending + Topics + Courses + Socials */}
//               <BottomInfoSection/>

//             </div>
//           )
//         })()}

//       </div>

//       <style>{`
//         @keyframes floatIllo  { 0%,100%{transform:rotate(-8deg) translateY(0)} 50%{transform:rotate(-8deg) translateY(-7px)} }
//         @keyframes floatIllo2 { 0%,100%{transform:rotate(6deg) translateY(0)} 50%{transform:rotate(6deg) translateY(-5px)} }
//       `}</style>
//     </>
//   )
// }



import { useState, useMemo } from 'react'

/* ── DATA ── */
const CATS = ['All Topics','Design','Coding','Digital Marketing','AI & Tech','Career Tips','Stock Market','Freelancing','Interview Prep']

const ARTICLES = [
  {
    id:1, cat:'Design', catClass:'bg-[#E8F0FC] text-[#094E93]',
    date:'Mar 28', read:'8 min', views:14200, likes:342,
    title:'10 UI/UX Trends Designers Must Know in 2025',
    excerpt:'Glassmorphism is out. Bento grids are in. Here\'s a complete breakdown of the design trends shaping products this year — with real examples from top companies.',
    emoji:'🎨', imgBg:'linear-gradient(135deg,#1a237e,#283593,#3949ab)',
    author:'Ankit Gupta', initials:'AG', authorBg:'linear-gradient(135deg,#F5A623,#e08800)',
    illoAlt:false,
  },
  {
    id:2, cat:'Coding', catClass:'bg-[#EFF6FF] text-[#1d4ed8]',
    date:'Mar 25', read:'11 min', views:22800, likes:589,
    title:'Full Stack in 2025: The Honest Roadmap for Beginners',
    excerpt:'React, Node, MongoDB, AWS — knowing what to learn and in what order is half the battle. This guide breaks it down month by month with free resources included.',
    emoji:'💻', imgBg:'linear-gradient(135deg,#0d1b2a,#1b263b,#415a77)',
    author:'Rahul Sharma', initials:'RS', authorBg:'linear-gradient(135deg,#1e40af,#1d4ed8)',
    illoAlt:true,
  },
  {
    id:3, cat:'Digital Marketing', catClass:'bg-[#FEF3C7] text-[#d97706]',
    date:'Mar 22', read:'7 min', views:18500, likes:421,
    title:'How to Run Google Ads with ₹5,000: A Beginner\'s Playbook',
    excerpt:'You don\'t need a big budget to get results from Google Ads. Here\'s a step-by-step guide to setting up, optimizing, and scaling your first campaign on a tight budget.',
    emoji:'📊', imgBg:'linear-gradient(135deg,#7c2d12,#b45309,#d97706)',
    author:'Priya Mehta', initials:'PM', authorBg:'linear-gradient(135deg,#0f766e,#0d9488)',
    illoAlt:false,
  },
  {
    id:4, cat:'Career Tips', catClass:'bg-[#ECFDF5] text-[#059669]',
    date:'Mar 20', read:'9 min', views:31200, likes:712,
    title:'LinkedIn Profile Tips That Recruiters Actually Notice',
    excerpt:'Most LinkedIn profiles look the same. Here\'s how top candidates stand out — with real recruiter insights on what makes them click "Connect" vs scroll past.',
    emoji:'🚀', imgBg:'linear-gradient(135deg,#064e3b,#065f46,#047857)',
    author:'Sneha Kapoor', initials:'SK', authorBg:'linear-gradient(135deg,#7c3aed,#6d28d9)',
    illoAlt:true,
  },
  {
    id:5, cat:'AI & Tech', catClass:'bg-[#F5F3FF] text-[#7c3aed]',
    date:'Mar 18', read:'6 min', views:27400, likes:634,
    title:'AI Tools Every Freelancer Should Use in 2025',
    excerpt:'From writing to design to client management — the AI tools that are actually saving freelancers 10+ hours per week, with honest reviews and pricing breakdowns.',
    emoji:'🤖', imgBg:'linear-gradient(135deg,#312e81,#4c1d95,#6d28d9)',
    author:'Vikram Das', initials:'VD', authorBg:'linear-gradient(135deg,#be185d,#db2777)',
    illoAlt:false,
  },
  {
    id:6, cat:'Stock Market', catClass:'bg-[#FFF1F2] text-[#be123c]',
    date:'Mar 15', read:'10 min', views:19800, likes:398,
    title:'How to Start SIP Investing: A Complete Guide for Beginners',
    excerpt:'SIP is not just about picking a mutual fund and forgetting. Here\'s how to build a strategy that actually aligns with your financial goals and risk profile.',
    emoji:'📈', imgBg:'linear-gradient(135deg,#7f1d1d,#991b1b,#b91c1c)',
    author:'Arjun Nair', initials:'AN', authorBg:'linear-gradient(135deg,#0369a1,#0284c7)',
    illoAlt:true,
  },
  {
    id:7, cat:'Freelancing', catClass:'bg-[#FFF7ED] text-[#c2410c]',
    date:'Mar 12', read:'8 min', views:24100, likes:502,
    title:'How to Get Your First Client on Upwork (Without Experience)',
    excerpt:'The cold truth: your profile is probably why you\'re not getting hired. Here\'s a proven 30-day strategy to land your first client and build momentum.',
    emoji:'💼', imgBg:'linear-gradient(135deg,#78350f,#92400e,#b45309)',
    author:'Kavya Reddy', initials:'KR', authorBg:'linear-gradient(135deg,#155e75,#0e7490)',
    illoAlt:false,
  },
  {
    id:8, cat:'Design', catClass:'bg-[#E8F0FC] text-[#094E93]',
    date:'Mar 10', read:'5 min', views:16300, likes:289,
    title:'Figma Auto Layout: The One Feature You\'re Underusing',
    excerpt:'Auto Layout changed how designers build components — but most people only use 20% of what it can do. Here\'s the full breakdown with practical examples.',
    emoji:'🎯', imgBg:'linear-gradient(135deg,#1e1b4b,#312e81,#4338ca)',
    author:'Ankit Gupta', initials:'AG', authorBg:'linear-gradient(135deg,#F5A623,#e08800)',
    illoAlt:true,
  },
  {
    id:9, cat:'Interview Prep', catClass:'bg-[#F0FDF4] text-[#15803d]',
    date:'Mar 8', read:'12 min', views:38600, likes:891,
    title:'Top 50 HR Interview Questions (With Sample Answers)',
    excerpt:'These questions appear in almost every first-round interview. We\'ve collected real answers from candidates who got hired at top companies in India.',
    emoji:'🎙️', imgBg:'linear-gradient(135deg,#14532d,#166534,#15803d)',
    author:'Meera Joshi', initials:'MJ', authorBg:'linear-gradient(135deg,#be185d,#9d174d)',
    illoAlt:false,
  },
  {
    id:10, cat:'Coding', catClass:'bg-[#EFF6FF] text-[#1d4ed8]',
    date:'Mar 6', read:'9 min', views:21500, likes:445,
    title:'Python for Beginners: From Zero to Your First Project',
    excerpt:'No CS degree needed. This guide walks you through Python fundamentals with real mini-projects — so you\'re building things from day one, not just reading theory.',
    emoji:'🐍', imgBg:'linear-gradient(135deg,#14532d,#15803d,#16a34a)',
    author:'Rahul Sharma', initials:'RS', authorBg:'linear-gradient(135deg,#1e40af,#1d4ed8)',
    illoAlt:false,
  },
  {
    id:11, cat:'Design', catClass:'bg-[#E8F0FC] text-[#094E93]',
    date:'Mar 4', read:'6 min', views:13200, likes:267,
    title:'Color Theory for UI Designers: What Actually Matters',
    excerpt:'Forget the complicated color wheel theory. Here\'s what actually matters when picking colors for apps and websites — with real before/after examples.',
    emoji:'🎨', imgBg:'linear-gradient(135deg,#4a044e,#6b21a8,#7c3aed)',
    author:'Ankit Gupta', initials:'AG', authorBg:'linear-gradient(135deg,#F5A623,#e08800)',
    illoAlt:true,
  },
  {
    id:12, cat:'Career Tips', catClass:'bg-[#ECFDF5] text-[#059669]',
    date:'Mar 2', read:'7 min', views:29100, likes:623,
    title:'How to Switch Careers Into Tech With No Experience',
    excerpt:'Thousands of people make this switch every year in India. Here\'s the honest roadmap — what to learn, how long it takes, and what companies actually want.',
    emoji:'🔄', imgBg:'linear-gradient(135deg,#0c4a6e,#0369a1,#0284c7)',
    author:'Sneha Kapoor', initials:'SK', authorBg:'linear-gradient(135deg,#7c3aed,#6d28d9)',
    illoAlt:false,
  },
]

const TRENDING = [
  { title:'Is Freelancing Better Than a Job in 2025?', cat:'Career', views:'28K' },
  { title:'How to Build Your Portfolio Website for Free', cat:'Design', views:'19K' },
  { title:'Top 10 In-Demand Skills for 2025 (India)', cat:'Career', views:'45K' },
  { title:'Meta Ads vs Google Ads: Which Converts Better?', cat:'Marketing', views:'17K' },
  { title:'Python or JavaScript First? Honest Answer', cat:'Coding', views:'33K' },
]

const TAGS = ['SEO','React','Figma','Python','Google Ads','UI Design','Freelancing','Stock Market','Content Writing','Data Science','Canva','Resume Tips','LinkedIn','Interview Prep','Meta Ads','Node.js','Branding','Video Editing']

const COURSES = [
  { name:'Graphic Design Pro', meta:'6 months · ₹25,000', emoji:'🎨', bg:'linear-gradient(135deg,#7c3aed,#4c1d95)', badge:'Design' },
  { name:'Digital Marketing', meta:'4 months · ₹18,000', emoji:'📱', bg:'linear-gradient(135deg,#0369a1,#075985)', badge:'Marketing' },
  { name:'Full Stack Web Dev', meta:'8 months · ₹32,000', emoji:'💻', bg:'linear-gradient(135deg,#0f172a,#1e293b)', badge:'Coding' },
]

const SOCIALS = [
  { name:'Facebook', count:'24.5K followers', emoji:'📘', bg:'#E8F0FC' },
  { name:'Instagram', count:'18.2K followers', emoji:'📷', bg:'#FFF0F5' },
  { name:'LinkedIn', count:'11.8K followers', emoji:'💼', bg:'#E8F4FD' },
  { name:'YouTube', count:'9.4K subscribers', emoji:'▶️', bg:'#FFF0F0' },
]

const MUST_READ = [
  { title:'How to Get a Job With No Experience in India (2025 Guide)', cat:'Career', catCls:'bg-[#ECFDF5] text-[#059669]', time:'8 min' },
  { title:'The Best Free Figma Plugins Every Designer Should Install', cat:'Design', catCls:'bg-[#E8F0FC] text-[#094E93]', time:'5 min' },
  { title:'Freelancing on Upwork vs Fiverr: What Nobody Tells You', cat:'Career', catCls:'bg-[#ECFDF5] text-[#059669]', time:'9 min' },
  { title:'How to Write a Resume That Actually Gets Shortlisted', cat:'Career', catCls:'bg-[#ECFDF5] text-[#059669]', time:'6 min' },
]

const CAREER_CORNER = [
  { title:'LinkedIn Profile Tips That Recruiters Told Us Work Best', cat:'Career', catCls:'bg-[#ECFDF5] text-[#059669]', time:'7 min' },
  { title:'Mock Interview Questions for Digital Marketers in 2025', cat:'Marketing', catCls:'bg-[#FEF3C7] text-[#d97706]', time:'10 min' },
  { title:'Salary Negotiation Scripts That Work Every Time', cat:'Career', catCls:'bg-[#ECFDF5] text-[#059669]', time:'5 min' },
  { title:'How to Ace a Portfolio Presentation in 15 Minutes', cat:'Design', catCls:'bg-[#E8F0FC] text-[#094E93]', time:'6 min' },
]

const fmtViews = n => n >= 1000 ? (n / 1000).toFixed(1) + 'K' : n

/* ────────────────────────────────────────────
   ARTICLE CARD — LIST VIEW
──────────────────────────────────────────── */
function ArticleCardList({ article }) {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden border border-[#e8edf5]
      grid grid-cols-1 sm:grid-cols-[240px_1fr]
      shadow-[0_2px_8px_rgba(0,0,0,0.05)]
      transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_16px_48px_rgba(9,78,147,0.13)]">
      <div className="flex items-center justify-center relative overflow-hidden min-h-[200px] sm:min-h-0"
        style={{ background: article.imgBg }}>
        <div className="absolute inset-0 pointer-events-none z-[1]"
          style={{ backgroundImage:'linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px)', backgroundSize:'28px 28px' }}/>
        <span className="text-[64px] relative z-[2]"
          style={{
            filter:'drop-shadow(0 10px 24px rgba(0,0,0,0.25))',
            transform: article.illoAlt ? 'rotate(6deg)' : 'rotate(-8deg)',
            animation: article.illoAlt ? 'floatIllo2 4.5s ease-in-out infinite' : 'floatIllo 4s ease-in-out infinite',
          }}>
          {article.emoji}
        </span>
      </div>
      <div className="p-[24px_28px] flex flex-col">
        <div className="flex items-center gap-2 mb-[10px] flex-wrap">
          <span className={`text-[10px] font-bold uppercase tracking-[0.05em] px-[10px] py-[3px] rounded-full ${article.catClass}`}>
            {article.cat}
          </span>
          <span className="text-[11px] text-[#9ca3af]">📅 {article.date}</span>
          <span className="text-[11px] text-[#9ca3af]">⏱ {article.read}</span>
          <span className="text-[11px] text-[#9ca3af]">👁 {fmtViews(article.views)}</span>
          <span className="text-[11px] text-[#9ca3af]">❤ {fmtViews(article.likes)}</span>
        </div>
        <h3 className="text-[18px] font-extrabold text-[#0A1628] leading-[1.3] mb-2">{article.title}</h3>
        <p className="text-[13px] text-[#6b7280] leading-[1.7] mb-auto pb-[14px] flex-1">{article.excerpt}</p>
        <div className="flex items-center justify-between pt-[13px] border-t border-[#f0f3f8] mt-auto">
          <div className="flex items-center gap-[9px]">
            <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
              style={{ background: article.authorBg }}>
              {article.initials}
            </div>
            <div>
              <div className="text-[12px] font-bold text-[#0A1628]">{article.author}</div>
              <div className="text-[11px] text-[#9ca3af]">SkillEdge Expert</div>
            </div>
          </div>
          <a href="#" className="text-[13px] font-bold text-[#094E93] flex items-center gap-1 transition-all duration-200 hover:gap-2">
            Read Article →
          </a>
        </div>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────
   ARTICLE CARD — GRID VIEW
──────────────────────────────────────────── */
function ArticleCardGrid({ article }) {
  return (
    <div className="bg-white rounded-[18px] overflow-hidden border border-[#e8edf5]
      flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.05)]
      transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_16px_48px_rgba(9,78,147,0.13)]">
      <div className="h-[180px] flex items-center justify-center relative overflow-hidden"
        style={{ background: article.imgBg }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)', backgroundSize:'28px 28px' }}/>
        <span className="text-[52px] relative z-[1]"
          style={{ filter:'drop-shadow(0 6px 16px rgba(0,0,0,0.25))', transform: article.illoAlt ? 'rotate(6deg)' : 'rotate(-8deg)' }}>
          {article.emoji}
        </span>
        <div className="absolute bottom-[10px] left-[10px] z-[2]">
          <span className={`text-[9px] font-bold uppercase tracking-[0.05em] px-2 py-[3px] rounded-full ${article.catClass}`}>{article.cat}</span>
        </div>
        <div className="absolute top-[10px] right-[10px] z-[2] bg-black/45 text-white text-[10px] font-semibold px-[9px] py-[3px] rounded-full">
          ⏱ {article.read}
        </div>
      </div>
      <div className="p-5 flex flex-col gap-[10px] flex-1">
        <div className="flex gap-2 text-[11px] text-[#9ca3af]">
          <span>📅 {article.date}</span><span>·</span><span>👁 {fmtViews(article.views)}</span>
        </div>
        <h3 className="text-[15px] font-extrabold text-[#0A1628] leading-[1.35]">{article.title}</h3>
        <p className="text-[12px] text-[#6b7280] leading-[1.6] flex-1">
          {article.excerpt.substring(0, 120)}…
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-[#f0f3f8] mt-auto">
          <div className="flex items-center gap-2">
            <div className="w-[28px] h-[28px] rounded-full flex items-center justify-center text-[10px] font-bold text-white"
              style={{ background: article.authorBg }}>{article.initials}</div>
            <span className="text-[12px] font-bold text-[#0A1628]">{article.author}</span>
          </div>
          <a href="#" className="text-[11px] font-bold text-[#094E93]">Read →</a>
        </div>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────
   WHY SKILLEDGE PROMO
──────────────────────────────────────────── */
function InlinePromoCard() {
  return (
    <div className="rounded-[20px] overflow-hidden p-8 relative border border-white/10"
      style={{ background:'linear-gradient(135deg,#0A1628,#0F2248,#0D3070)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage:'radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)', backgroundSize:'22px 22px' }}/>
      <div className="absolute w-[400px] h-[400px] rounded-full -top-24 -right-24 pointer-events-none"
        style={{ background:'radial-gradient(circle,rgba(20,70,180,.35) 0%,transparent 70%)' }}/>
      <div className="relative z-10">
        <div className="flex items-center gap-2 text-[#F5A623] text-[11px] font-bold uppercase tracking-[0.12em] mb-4">
          <span className="w-5 h-[2px] bg-[#F5A623]"/>
          Why SkillEdge?
        </div>
        <h3 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-white leading-[1.2] mb-3">
          Upskill with India's Most Trusted Career Training Institute
        </h3>
        <p className="text-[13px] leading-[1.75] mb-6" style={{ color:'rgba(255,255,255,0.6)' }}>
          From beginner to job-ready in 3–8 months. Real projects, expert mentors, and 100% placement assistance — right here in Delhi NCR.
        </p>
        <div className="flex flex-col gap-3 mb-6">
          {[
            '20,000+ students successfully placed across top companies',
            'Live projects + portfolio building from Day 1',
            'EMI options available — no financial barrier to learning',
          ].map(f => (
            <div key={f} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-[6px] flex items-center justify-center flex-shrink-0 mt-0.5 border"
                style={{ background:'rgba(245,166,35,0.15)', borderColor:'rgba(245,166,35,0.3)' }}>
                <svg viewBox="0 0 12 12" className="w-[10px] h-[10px]" fill="none" stroke="#F5A623" strokeWidth={2.5}>
                  <polyline points="2,6 5,9 10,3"/>
                </svg>
              </span>
              <span className="text-[13px] leading-[1.5]" style={{ color:'rgba(255,255,255,0.75)' }}>{f}</span>
            </div>
          ))}
        </div>
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#094E93] text-white rounded-[12px]
          text-[14px] font-bold cursor-pointer transition-colors duration-200 hover:bg-[#073E75]
          shadow-[0_6px_20px_rgba(9,78,147,0.4)]" style={{ fontFamily:'inherit', border:'none' }}>
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 4.18 2 2 0 015 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 9.91"/>
          </svg>
          Enquiry Now
        </button>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────
   MUST READ + CAREER CORNER (side by side)
──────────────────────────────────────────── */
function EditorialSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {[
        { title:'Must Read', data: MUST_READ },
        { title:'Career Corner', data: CAREER_CORNER },
      ].map(({ title, data }) => (
        <div key={title} className="bg-white rounded-[20px] p-7 border border-[#e8edf5] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-2 text-[16px] font-extrabold text-[#0A1628] pb-4 border-b-[1.5px] border-[#f0f3f8]">
            {title}
            <span className="flex-1 h-[1.5px] bg-[#f0f3f8]"/>
          </div>
          {data.map((item, i) => (
            <div key={item.title}
              className={`grid grid-cols-[54px_1fr] gap-3 py-4 ${i < data.length - 1 ? 'border-b border-[#f5f7fa]' : ''}`}>
              <div className="text-[32px] font-black text-[#E8F0FC] leading-none text-center self-center">
                0{i + 1}
              </div>
              <div>
                <div className="text-[14px] font-bold text-[#0A1628] leading-[1.4] mb-[6px]">{item.title}</div>
                <div className="flex items-center gap-2 text-[11px] text-[#9ca3af]">
                  <span className={`text-[9px] font-bold px-2 py-[2px] rounded-full ${item.catCls}`}>{item.cat}</span>
                  <span>⏱ {item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

/* ────────────────────────────────────────────
   BOTTOM INFO
   Row 1 (same x-axis): Trending Now | Explore Topics
   Row 2 (same x-axis): Related Courses | Follow Us
──────────────────────────────────────────── */
function BottomInfoSection() {
  return (
    <div className="flex flex-col gap-5">

      {/* ── Row 1: Trending Now + Explore Topics ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Trending Now */}
        <div className="bg-white rounded-[18px] p-[22px] border border-[#e8edf5] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-2 text-[12px] font-extrabold text-[#0A1628] uppercase tracking-[0.06em] mb-4">
            <span className="w-1 h-[15px] bg-[#094E93] rounded-[2px]"/>
            Trending Now
          </div>
          {TRENDING.map((t, i) => (
            <div key={t.title} className={`flex gap-[14px] py-[11px] ${i < TRENDING.length - 1 ? 'border-b border-[#f5f7fa]' : ''}`}>
              <div className="text-[26px] font-black text-[#E8F0FC] leading-none flex-shrink-0 w-[34px] text-center">
                0{i + 1}
              </div>
              <div>
                <div className="text-[13px] font-bold text-[#0A1628] leading-[1.4] mb-[3px]">{t.title}</div>
                <div className="flex items-center gap-2 text-[11px] text-[#9ca3af]">
                  <span className="bg-[#E8F0FC] text-[#094E93] text-[9px] font-bold px-[7px] py-[2px] rounded-full">{t.cat}</span>
                  <span>👁 {t.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Topics */}
        <div className="bg-white rounded-[18px] p-[22px] border border-[#e8edf5] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-2 text-[12px] font-extrabold text-[#0A1628] uppercase tracking-[0.06em] mb-4">
            <span className="w-1 h-[15px] bg-[#094E93] rounded-[2px]"/>
            Explore Topics
          </div>
          <div className="flex flex-wrap gap-[7px]">
            {TAGS.map(t => (
              <span key={t} className="px-[13px] py-[5px] bg-[#F0F4FA] rounded-full text-[12px] font-semibold text-[#6b7280]
                border border-[#e8edf5] cursor-default select-none hover:border-[#094E93] hover:text-[#094E93] transition-colors duration-150">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* ── Row 2: Related Courses + Follow Us ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Related Courses */}
        <div className="rounded-[18px] p-[22px] border border-[#fde68a]" style={{ background:'linear-gradient(135deg,#fffbeb,#fef8e1)' }}>
          <div className="flex items-center gap-2 text-[11px] font-bold text-[#d97706] uppercase tracking-[0.07em] mb-4">
            📚 Related Courses
          </div>
          {COURSES.map(c => (
            <div key={c.name} className="flex items-center justify-between p-3 bg-white rounded-[12px] border border-[#fde68a] mb-[9px] last:mb-3">
              <div className="flex items-center gap-[10px]">
                <div className="w-9 h-9 rounded-[10px] flex items-center justify-center text-[16px] flex-shrink-0"
                  style={{ background: c.bg }}>{c.emoji}</div>
                <div>
                  <div className="text-[13px] font-bold text-[#0A1628]">{c.name}</div>
                  <div className="text-[11px] text-[#9ca3af] mt-[1px]">{c.meta}</div>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-[#E8F0FC] text-[#094E93] px-[9px] py-[3px] rounded-full whitespace-nowrap self-start">
                {c.badge}
              </span>
            </div>
          ))}
          <a href="#" className="block text-center bg-[#094E93] text-white rounded-[10px] py-[11px] text-[13px] font-bold
            transition-colors duration-200 hover:bg-[#073E75]">
            View All Courses →
          </a>
        </div>

        {/* Follow Us */}
        <div className="bg-white rounded-[18px] p-[22px] border border-[#e8edf5] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-2 text-[12px] font-extrabold text-[#0A1628] uppercase tracking-[0.06em] mb-4">
            <span className="w-1 h-[15px] bg-[#094E93] rounded-[2px]"/>
            Follow Us
          </div>
          {SOCIALS.map(s => (
            <div key={s.name} className="flex items-center justify-between py-[10px] px-[14px] rounded-[12px] border border-[#e8edf5]
              mb-[9px] last:mb-0 transition-colors duration-200 hover:border-[#094E93] cursor-pointer">
              <div className="flex items-center gap-[10px]">
                <div className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center text-[16px]"
                  style={{ background: s.bg }}>{s.emoji}</div>
                <div>
                  <div className="text-[13px] font-bold text-[#0A1628]">{s.name}</div>
                  <div className="text-[11px] text-[#9ca3af]">{s.count}</div>
                </div>
              </div>
              <span className="text-[12px] font-bold text-[#094E93] cursor-pointer">Follow</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

/* ────────────────────────────────────────────
   LOAD MORE BUTTON
──────────────────────────────────────────── */
function LoadMoreBtn({ loading, onClick }) {
  return (
    <div className="flex justify-center py-2">
      <button
        onClick={onClick}
        disabled={loading}
        className="flex items-center gap-[10px] px-9 py-4 bg-white text-[#094E93]
          border-2 border-[#094E93] rounded-[14px] text-[14px] font-bold cursor-pointer
          transition-all duration-300 shadow-[0_4px_16px_rgba(9,78,147,0.12)]
          hover:bg-[#094E93] hover:text-white hover:shadow-[0_8px_28px_rgba(9,78,147,0.3)]
          disabled:opacity-60"
        style={{ fontFamily:'inherit' }}>
        {loading ? (
          <>
            <svg viewBox="0 0 24 24" className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
            </svg>
            Loading…
          </>
        ) : (
          <>
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
            Load More Articles
          </>
        )}
      </button>
    </div>
  )
}

/* ────────────────────────────────────────────
   MAIN EXPORT
──────────────────────────────────────────── */
export default function BlogContent() {
  const [activeCat, setActiveCat] = useState('All Topics')
  const [sort,      setSort]      = useState('recent')
  const [view,      setView]      = useState('list')
  const [visible,   setVisible]   = useState(5)
  const [loading,   setLoading]   = useState(false)

  const filtered = useMemo(() => {
    let arts = activeCat === 'All Topics' ? [...ARTICLES] : ARTICLES.filter(a => a.cat === activeCat)
    if (sort === 'popular')  arts.sort((a, b) => b.likes - a.likes)
    if (sort === 'trending') arts.sort((a, b) => b.views - a.views)
    return arts
  }, [activeCat, sort])

  const slice = filtered.slice(0, visible)

  const handleLoadMore = () => {
    setLoading(true)
    setTimeout(() => { setVisible(v => v + 3); setLoading(false) }, 600)
  }

  const handleCatChange  = (c) => { setActiveCat(c); setVisible(5) }
  const handleViewChange = (v) => { setView(v);      setVisible(5) }

  return (
    <>
      {/* Category tabs — sticky */}
      <div className="bg-white border-b border-[#e8edf5] sticky top-[66px] shadow-[0_1px_0_rgba(0,0,0,0.04)] z-20">
        <div className="max-w-[1280px] mx-auto px-5 py-3 flex gap-1 overflow-x-auto" style={{ scrollbarWidth:'none' }}>
          {CATS.map(c => (
            <button key={c}
              onClick={() => handleCatChange(c)}
              className={`px-[18px] py-2 rounded-full border-[1.5px] text-[13px] font-semibold cursor-pointer
                whitespace-nowrap transition-all duration-200 flex-shrink-0
                ${activeCat === c
                  ? 'bg-[#094E93] text-white border-[#094E93]'
                  : 'bg-white text-[#6b7280] border-[#e5e7eb] hover:bg-[#094E93] hover:text-white hover:border-[#094E93]'
                }`}
              style={{ fontFamily:'inherit' }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Main content — full width */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-11">

        {/* Sort / View bar */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-[22px]">
          <p className="text-[14px] font-medium text-[#9ca3af]">
            Showing <span className="text-[#0A1628] font-bold">{filtered.length} article{filtered.length !== 1 ? 's' : ''}</span>
          </p>
          <div className="flex items-center gap-[10px]">
            <select value={sort} onChange={e => setSort(e.target.value)}
              className="px-[14px] py-[9px] border-[1.5px] border-[#e5e7eb] rounded-[10px]
                text-[13px] font-semibold text-[#6b7280] bg-white cursor-pointer outline-none"
              style={{ fontFamily:'inherit' }}>
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="trending">Trending</option>
            </select>
            {[
              { v:'list', icon:<><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></> },
              { v:'grid', icon:<><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></> },
            ].map(({ v, icon }) => (
              <button key={v} onClick={() => handleViewChange(v)}
                className="px-3 py-[9px] rounded-[10px] border-[1.5px] cursor-pointer transition-all duration-150"
                style={{ background: view === v ? '#094E93' : '#fff', borderColor: view === v ? '#094E93' : '#e5e7eb', fontFamily:'inherit' }}>
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" fill="none"
                  stroke={view === v ? '#fff' : '#6b7280'} strokeWidth={2}>{icon}</svg>
              </button>
            ))}
          </div>
        </div>

        {/* ════ GRID VIEW ════ */}
        {view === 'grid' && (
          <div className="flex flex-col gap-[28px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {slice.map(a => <ArticleCardGrid key={a.id} article={a}/>)}
            </div>
            {visible < filtered.length && <LoadMoreBtn loading={loading} onClick={handleLoadMore}/>}
            <EditorialSection/>
            <BottomInfoSection/>
          </div>
        )}

        {/* ════ LIST VIEW ════ */}
        {view === 'list' && (() => {
          const first3 = slice.slice(0, 3)
          const next2  = slice.slice(3, 5)
          const rest   = slice.slice(5)

          return (
            <div className="flex flex-col gap-[22px]">
              {first3.map(a => <ArticleCardList key={a.id} article={a}/>)}
              {first3.length === 3 && <InlinePromoCard/>}
              {next2.map(a => <ArticleCardList key={a.id} article={a}/>)}
              {slice.length >= 5 && <EditorialSection/>}
              {rest.length > 0 && (
                <div className="flex flex-col gap-[22px]">
                  {rest.map(a => <ArticleCardList key={a.id} article={a}/>)}
                </div>
              )}
              {visible < filtered.length && <LoadMoreBtn loading={loading} onClick={handleLoadMore}/>}
              <BottomInfoSection/>
            </div>
          )
        })()}

      </div>

      <style>{`
        @keyframes floatIllo  { 0%,100%{transform:rotate(-8deg) translateY(0)} 50%{transform:rotate(-8deg) translateY(-7px)} }
        @keyframes floatIllo2 { 0%,100%{transform:rotate(6deg) translateY(0)} 50%{transform:rotate(6deg) translateY(-5px)} }
      `}</style>
    </>
  )
}