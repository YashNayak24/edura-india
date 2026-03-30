import { useState } from 'react';

const tabs = [
  {
    label:'Job-ready Curriculum', tag:'Industry-Ready Curriculum', title:'Expert-made. Industry-vetted.',
    pts:[
      {hl:'Expert-made, expert-vetted:',p:"Designed by industry veterans and vetted by experts. Our curriculum only includes the topics and skills that the industry actually demands today."},
      {hl:'Regular audit:',p:"We regularly audit our course content and delivery to keep it relevant to ever-changing industry trends and practices."}
    ],
    stats:[['125+','Courses'],['6','Months Avg.'],['3/2','Classes/Week']],
    visualBg:'#7B5EA7',
    visualIcon: (
      <svg viewBox="0 0 80 80" width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="14" width="56" height="44" rx="6" stroke="white" strokeWidth="2.5" strokeOpacity="0.6"/>
        <rect x="16" y="24" width="22" height="3" rx="1.5" fill="white" fillOpacity="0.8"/>
        <rect x="16" y="31" width="36" height="2.5" rx="1.25" fill="white" fillOpacity="0.4"/>
        <rect x="16" y="37" width="30" height="2.5" rx="1.25" fill="white" fillOpacity="0.4"/>
        <rect x="16" y="43" width="34" height="2.5" rx="1.25" fill="white" fillOpacity="0.4"/>
        <circle cx="55" cy="52" r="12" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="2" strokeOpacity="0.5"/>
        <path d="M50 52l3.5 3.5L60 48" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M38 66l-4 6M42 66l-2 6M46 66l0 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4"/>
        <path d="M32 72h16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4"/>
      </svg>
    )
  },
  {
    label:'Industry Mentors', tag:'Industry Mentors', title:'Learn from the best in the field.',
    pts:[
      {hl:'Real practitioners:',p:"Our mentors are not just teachers — they are active industry professionals with years of hands-on experience at top companies."},
      {hl:'1-on-1 mentorship:',p:"Get personal guidance, career advice, and portfolio reviews from mentors who have built the very skills you are learning."}
    ],
    stats:[['45+','Expert Mentors'],['12+','Yrs Avg. Exp.'],['200+','Companies']],
    visualBg:'#1A4FD6',
    visualIcon: (
      <svg viewBox="0 0 80 80" width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="12" stroke="white" strokeWidth="2.5" strokeOpacity="0.8"/>
        <path d="M10 58c0-10 8-16 18-16s18 6 18 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.8"/>
        <circle cx="55" cy="30" r="8" stroke="white" strokeWidth="2" strokeOpacity="0.5"/>
        <path d="M44 56c0-7 5-11 11-11s11 4 11 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5"/>
        <path d="M49 22l2.5 2.5L56 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7"/>
      </svg>
    )
  },
  {
    label:'Guided Portfolio', tag:'Guided Portfolio', title:'Build work that gets you hired.',
    pts:[
      {hl:'Real project work:',p:"Every student works on industry-level live projects throughout the course — your portfolio reflects real capability, not just assignments."},
      {hl:'Mentor portfolio reviews:',p:"Industry mentors personally review and guide each student's portfolio to ensure it meets the standards top companies expect."}
    ],
    stats:[['8+','Live Projects'],['100%','Portfolio Ready'],['Behance','Showcased']],
    visualBg:'#5B21B6',
    visualIcon: (
      <svg viewBox="0 0 80 80" width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="16" width="44" height="52" rx="5" stroke="white" strokeWidth="2.5" strokeOpacity="0.6"/>
        <rect x="10" y="16" width="44" height="14" rx="5" fill="white" fillOpacity="0.15"/>
        <circle cx="18" cy="23" r="3" fill="white" fillOpacity="0.7"/>
        <circle cx="26" cy="23" r="3" fill="white" fillOpacity="0.7"/>
        <rect x="18" y="38" width="28" height="2.5" rx="1.25" fill="white" fillOpacity="0.5"/>
        <rect x="18" y="44" width="22" height="2.5" rx="1.25" fill="white" fillOpacity="0.35"/>
        <rect x="18" y="50" width="26" height="2.5" rx="1.25" fill="white" fillOpacity="0.35"/>
        <circle cx="60" cy="54" r="14" fill="white" fillOpacity="0.12" stroke="white" strokeWidth="2" strokeOpacity="0.5"/>
        <path d="M55 54l3.5 3.5L65 49" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    label:'Placement Support', tag:'Placement Support', title:'100% Placement Assistance.',
    pts:[
      {hl:'Dedicated placement cell:',p:"A dedicated team works with every student from resume prep to mock interviews to final offer letter — until you are placed."},
      {hl:'200+ hiring partners:',p:"We have active partnerships with 200+ companies hiring SkillEdge graduates across design, development, and marketing."}
    ],
    stats:[['94%','Placement Rate'],['₹6.4L','Avg. Package'],['200+','Hiring Partners']],
    visualBg:'#B45309',
    visualIcon: (
      <svg viewBox="0 0 80 80" width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="26" width="52" height="34" rx="5" stroke="white" strokeWidth="2.5" strokeOpacity="0.6"/>
        <path d="M28 26v-6a12 12 0 0124 0v6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.6"/>
        <circle cx="40" cy="43" r="8" stroke="white" strokeWidth="2.5" strokeOpacity="0.8"/>
        <path d="M36 43l2.5 2.5L44 38" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 60l4-6M40 60v-6M60 60l-4-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4"/>
      </svg>
    )
  },
  {
    label:'Modern Infrastructure', tag:'Modern Infrastructure', title:'World-class learning environment.',
    pts:[
      {hl:'AI-powered labs:',p:"State-of-the-art computer labs with latest software, tools, and AI integrations — train on exactly what the industry uses."},
      {hl:'Hybrid learning model:',p:"Attend online or offline — our hybrid model gives students the flexibility to choose what works best for their schedule."}
    ],
    stats:[['3','NCR Locations'],['Online','+ Offline'],['24/7','LMS Access']],
    visualBg:'#065F46',
    visualIcon: (
      <svg viewBox="0 0 80 80" width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="22" width="50" height="34" rx="5" stroke="white" strokeWidth="2.5" strokeOpacity="0.6"/>
        <rect x="16" y="30" width="14" height="10" rx="2" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
        <rect x="34" y="30" width="14" height="10" rx="2" fill="white" fillOpacity="0.5" stroke="white" strokeWidth="1.5" strokeOpacity="0.7"/>
        <rect x="16" y="44" width="14" height="4" rx="2" fill="white" fillOpacity="0.2"/>
        <rect x="34" y="44" width="14" height="4" rx="2" fill="white" fillOpacity="0.2"/>
        <path d="M24 56v6M42 56v6M16 62h34" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5"/>
        <circle cx="62" cy="30" r="12" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="2" strokeOpacity="0.5"/>
        <path d="M57 30c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="62" cy="38" r="1.5" fill="white"/>
      </svg>
    )
  },
];

export default function Advantage() {
  const [active, setActive] = useState(0);
  const t = tabs[active];

  return (
    <section className="bg-[#F7F9FF] py-16 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-jakarta font-extrabold tracking-tight text-[#0D1E42] mb-2" style={{fontSize:'clamp(26px,3vw,42px)'}}>
            The <span className="text-[#1A4FD6]">SkillEdge</span> Advantage
          </h2>
          <p className="text-[15px] text-[#5A6A8A] font-medium">Why should you enroll in a course at SkillEdge Institute?</p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto bg-white border border-[#DDE5F8] rounded-xl mb-6" style={{scrollbarWidth:'none'}}>
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 flex-1 min-w-[120px] px-4 py-3.5 text-[12.5px] font-semibold font-jakarta border-0 cursor-pointer transition-all border-r border-[#DDE5F8] last:border-r-0
                ${i === active ? 'bg-[#1A4FD6] text-white font-bold' : 'bg-transparent text-[#5A6A8A] hover:bg-[#EBF1FF] hover:text-[#1A4FD6]'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left content */}
          <div className="flex-1">
            <span className="inline-block bg-[#EBF1FF] text-[#1A4FD6] text-[10.5px] font-extrabold tracking-[0.1em] uppercase px-3 py-1 rounded mb-4">
              {t.tag}
            </span>
            <h3 className="text-[22px] font-extrabold font-jakarta tracking-tight text-[#0D1E42] mb-5">{t.title}</h3>

            <div className="flex flex-col">
              {t.pts.map((pt, i) => (
                <div key={i} className="py-4 border-b border-[#DDE5F8] last:border-b-0">
                  <span className="inline-block bg-[#FEF3C7] text-[#92600A] px-2 py-0.5 rounded text-[12.5px] font-bold mb-1.5">{pt.hl}</span>
                  <p className="text-[13.5px] text-[#5A6A8A] leading-[1.65]">{pt.p}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex mt-5 bg-[#F7F9FF] rounded-xl border border-[#DDE5F8] overflow-hidden">
              {t.stats.map(([n, l]) => (
                <div key={l} className="flex-1 p-3.5 border-r border-[#DDE5F8] last:border-r-0 text-center">
                  <div className="text-[24px] font-black text-[#0D1E42] leading-none tracking-tight">{n}</div>
                  <div className="text-[10px] text-[#5A6A8A] font-semibold mt-1 uppercase tracking-wider">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div
            className="w-full lg:w-[320px] flex-shrink-0 rounded-[18px] overflow-hidden border border-white/10 transition-all duration-300"
            style={{ background: t.visualBg, minHeight: 260, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <div className="text-center p-8 flex flex-col items-center gap-4">
              {/* SVG icon */}
              <div className="w-[100px] h-[100px] rounded-[24px] flex items-center justify-center" style={{background:'rgba(255,255,255,0.12)',border:'1.5px solid rgba(255,255,255,0.2)'}}>
                {t.visualIcon}
              </div>
              {/* Label */}
              <div className="text-white font-bold text-[15px] tracking-tight text-center leading-tight">{t.tag}</div>
              {/* Decorative dots */}
              <div className="flex gap-2 mt-1">
                {tabs.map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full transition-all" style={{background: i === active ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)'}}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}