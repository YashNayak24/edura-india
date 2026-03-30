const PlacementIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" stroke={color} strokeWidth="2"/>
    <path d="M15 8h2a1 1 0 0 1 1 1v1" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CareerIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <path d="M2 20h20" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 20V10" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 20V4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 20v-6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 4l3 3-3 3-3-3 3-3z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const CurriculumIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2"/>
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M4.929 4.929l1.414 1.414M17.657 17.657l1.414 1.414M4.929 19.071l1.414-1.414M17.657 6.343l1.414-1.414" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const InstructorIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <circle cx="12" cy="7" r="4" stroke={color} strokeWidth="2"/>
    <path d="M4 21v-1a8 8 0 0 1 16 0v1" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 3.5s1 .5 1 2" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19 6l2-1" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const HolisticIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <path d="M12 2a5 5 0 0 1 5 5c0 5-5 9-5 9S7 12 7 7a5 5 0 0 1 5-5z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="12" cy="7" r="2" stroke={color} strokeWidth="1.5"/>
    <path d="M5 20c2-2 4-3 7-3s5 1 7 3" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const HybridIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <rect x="2" y="3" width="9" height="7" rx="1.5" stroke={color} strokeWidth="2"/>
    <rect x="13" y="3" width="9" height="7" rx="1.5" stroke={color} strokeWidth="2"/>
    <rect x="2" y="14" width="9" height="7" rx="1.5" stroke={color} strokeWidth="2"/>
    <rect x="13" y="14" width="9" height="7" rx="1.5" stroke={color} strokeWidth="2"/>
  </svg>
);

const CommunityIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <circle cx="9" cy="7" r="3" stroke={color} strokeWidth="2"/>
    <circle cx="17" cy="9" r="2.5" stroke={color} strokeWidth="2"/>
    <path d="M3 20v-1a6 6 0 0 1 12 0v1" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M17 14a5 5 0 0 1 4 5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CertifiedIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
    <path d="M12 2l2.09 6.26H21l-5.47 3.97 2.09 6.26L12 14.52l-5.62 3.97 2.09-6.26L3 8.26h6.91L12 2z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    <path d="M9 21l3-2 3 2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 19v3" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const icons = [PlacementIcon, CareerIcon, CurriculumIcon, InstructorIcon, HolisticIcon, HybridIcon, CommunityIcon, CertifiedIcon];

const items = [
  {color:'#34D399',border:'rgba(52,211,153,0.4)',bg:'rgba(52,211,153,0.06)',title:'100% Placement Guaranteed!!',desc:'We have a dedicated placement cell that assists every student in securing a job in a renowned company — from resume prep to final offer.',rev:false},
  {color:'#A78BFA',border:'rgba(167,139,250,0.4)',bg:'rgba(167,139,250,0.06)',title:'Career-oriented Skill Training',desc:"Don't just settle for a job. Look beyond to build a long-lasting and successful career. Our training programs are designed to prepare you for just that.",rev:true},
  {color:'#FBBF24',border:'rgba(245,158,11,0.4)',bg:'rgba(245,158,11,0.06)',title:'Industry-focussed Curriculum',desc:'Skills that are in demand. Tools that are in trend. Training that makes you ready for the industry from the word GO.',rev:false},
  {color:'#60A5FA',border:'rgba(96,165,250,0.4)',bg:'rgba(96,165,250,0.06)',title:'Industry Trained Instructors',desc:'Each of our teachers has hands-on experience with industry projects, workflow, requirements and trends.',rev:true},
  {color:'#F472B6',border:'rgba(244,114,182,0.4)',bg:'rgba(244,114,182,0.06)',title:'Holistic Training Program',desc:'Besides imparting technical skills, we train our students in soft skills — communication, interview skills, and personality development.',rev:false},
  {color:'#2DD4BF',border:'rgba(45,212,191,0.4)',bg:'rgba(45,212,191,0.06)',title:'Hybrid Training Modules',desc:'Classes are conducted across the week and delivered through both online and offline methods — total flexibility for every student.',rev:true},
  {color:'#FB923C',border:'rgba(251,146,60,0.4)',bg:'rgba(251,146,60,0.06)',title:'Community Access',desc:'Our mentors are in regular touch with students to provide the right career advice and support — even after course completion.',rev:false},
  {color:'#34D399',border:'rgba(52,211,153,0.4)',bg:'rgba(52,211,153,0.06)',title:'Get Certified',desc:'Grow your career by joining our exclusive industry-ready courses. Get certified today to advance your career with SkillEdge Institute.',rev:true},
];

export default function CareerSection() {
  return (
    <section className="bg-[#16202E] py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',backgroundSize:'48px 48px'}}/>
      <div className="max-w-[960px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-jakarta font-extrabold tracking-tight text-white mb-3.5" style={{fontSize:'clamp(26px,3vw,42px)'}}>Why Build Your Career With Us?</h2>
          <p className="text-[15px] text-white/50 max-w-[680px] mx-auto leading-[1.75] font-medium">Our top-notch faculty team consists of the brightest minds of industry who not only equip students with thorough practical knowledge, but also help them build work portfolios and provide unwavering support in securing their dream job.</p>
        </div>

        {/* Desktop zigzag / Mobile stacked */}
        <div className="relative zz-line">
          {items.map((it, i) => {
            const Icon = icons[i];
            return (
              <div key={it.title} className={`flex flex-col sm:flex-row items-center gap-6 sm:gap-12 py-8 relative ${it.rev ? 'sm:flex-row-reverse' : ''}`}>
                {/* Text */}
                <div className={`flex-1 text-center sm:text-right ${it.rev ? 'sm:text-left' : ''}`}>
                  <h3 className="text-[17px] font-bold mb-2.5 leading-tight" style={{color:it.color}}>{it.title}</h3>
                  <p className="text-[13.5px] text-white/50 leading-[1.72] font-medium">{it.desc}</p>
                </div>
                {/* Diamond icon */}
                <div className="flex-shrink-0 w-20 h-20 relative flex items-center justify-center">
                  <div className="w-20 h-20 rounded-xl flex items-center justify-center" style={{transform:'rotate(45deg)',border:`1.5px dashed ${it.border}`,background:it.bg}}>
                    <span style={{transform:'rotate(-45deg)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                      <Icon color={it.color} />
                    </span>
                  </div>
                </div>
                {/* Empty flex-1 for spacing on desktop */}
                <div className="flex-1 hidden sm:block"/>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}