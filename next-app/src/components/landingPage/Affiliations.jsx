"use client";
// Tailwind + Plus Jakarta Sans
// Non-standard values (clamp, gradients, animations) use inline style where needed

const affiliations = [
  { abbr: "TL",   name: "Tally",           tag: "Authorized Partner" },
  { abbr: "AC",   name: "Adobe Creative",  tag: "Certified Trainer"  },
  { abbr: "MS",   name: "Microsoft",       tag: "Learn Partner"      },
  { abbr: "GG",   name: "Google",          tag: "Career Cert."       },
  { abbr: "HB",   name: "HubSpot",         tag: "Marketing"          },
  { abbr: "AW",   name: "AWS",             tag: "Cloud Skills"       },
  { abbr: "CN",   name: "Coursera",        tag: "Edu. Partner"       },
  { abbr: "MT",   name: "Meta",            tag: "Digital Ads"        },
  { abbr: "UD",   name: "Udemy",           tag: "Content Partner"    },
];
const doubled = [...affiliations, ...affiliations];

const pills = [
  "⭐ Best Computer Institute in Delhi",
  "Tally Authorized", "Adobe Certified", "Microsoft Partner",
  "Google Career Cert.", "HubSpot Academy", "AWS Educate",
  "Meta Blueprint", "Coursera Partner", "100% Placement",
];

const miniCards = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    h: "Industry Certified",
    p: "Certifications backed by global industry leaders.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    h: "Expert Trainers",
    p: "Faculty with 5–15 years of real industry experience.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    h: "Placement Support",
    p: "Career support till you're hired.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    h: "9+ Certifications",
    p: "Every course backed by recognized global partners.",
  },
];

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#FCD34D" stroke="#FCD34D" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const keyframes = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
  * { font-family: 'Plus Jakarta Sans', sans-serif; }
  @keyframes marq { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  @keyframes blink { 0%,100%{ opacity:1; } 50%{ opacity:.2; } }
  .animate-marq { animation: marq 36s linear infinite; }
  .animate-marq:hover { animation-play-state: paused; }
  .animate-blink { animation: blink 1.3s ease-in-out infinite; }
`;

export default function Affiliations() {
  return (
    <>
      <style>{keyframes}</style>

      <section
        className="py-16 overflow-hidden"
        style={{ background: "linear-gradient(150deg,#eef4ff,#e6effd,#dce9ff)" }}
      >
        <div className="max-w-6xl mx-auto px-7 sm:px-4">

          {/* Header */}
          <div className="text-center mb-11">
            <div className="inline-flex items-center gap-2 bg-white/90 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest text-blue-900 mb-5">
              <span className="animate-blink w-2 h-2 rounded-full bg-green-500 shrink-0" />
              OUR CREDENTIALS
            </div>
            <h2
              className="font-extrabold text-slate-900 leading-tight mb-2.5"
              style={{ fontSize: "clamp(26px,4vw,46px)", letterSpacing: "-1.5px" }}
            >
              Partnered with the World's Most<br />
              <em className="not-italic" style={{ color: "#094E93" }}>Trusted Industry Leaders</em>
            </h2>
            <p className="text-sm text-gray-500 font-medium">
              Tally · Adobe · Microsoft · Google · HubSpot · AWS · Meta · Coursera · Udemy
            </p>
          </div>

          {/* Blue box */}
          <div
            className="rounded-2xl p-9 mb-5"
            style={{ background: "linear-gradient(135deg,#073E75,#094E93)" }}
          >
            <p className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">
              Our Industry Partners
            </p>
            <h3 className="text-2xl font-extrabold text-white leading-snug mb-2.5">
              Globally Recognized Certifications
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-5 max-w-2xl">
              Every course is backed by world-class industry partners — your certificate is recognized by top employers across India and abroad.
            </p>
            <div className="flex flex-wrap gap-2">
              {pills.map((p, i) => (
                <span
                  key={i}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap cursor-default transition-colors duration-200 ${
                    i === 0
                      ? "bg-yellow-300 text-blue-900 border border-yellow-300"
                      : "border border-white/25 text-white hover:bg-white/10"
                  }`}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Mini cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-8">
            {miniCards.map(({ icon, h, p }) => (
              <div
                key={h}
                className="bg-white/90 backdrop-blur border border-blue-100 rounded-2xl p-5 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "#EEF3FF", color: "#094E93" }}
                >
                  {icon}
                </div>
                <p className="text-sm font-extrabold text-slate-900 mb-1">{h}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Marquee */}
        <div
          className="overflow-hidden relative"
          style={{
            maskImage: "linear-gradient(90deg,transparent,black 10%,black 90%,transparent)",
            WebkitMaskImage: "linear-gradient(90deg,transparent,black 10%,black 90%,transparent)",
          }}
        >
          <div className="animate-marq flex w-max py-2">
            {doubled.map((a, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 bg-white/85 border border-blue-100 rounded-2xl px-4 py-3 mx-2 cursor-default transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                style={{ minWidth: 160, flexShrink: 0 }}
              >
                <span className="text-base font-black" style={{ color: "#094E93" }}>{a.abbr}</span>
                <span className="w-px h-7 bg-gray-200 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-gray-900">{a.name}</div>
                  <div className="text-xs text-gray-400">{a.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stars bar */}
        <div className="max-w-6xl mx-auto px-7">
          <div className="mt-6 bg-white/80 border border-blue-100 rounded-2xl px-6 py-4 flex items-center gap-4 shadow-sm">
            <div className="flex gap-0.5 shrink-0">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong style={{ color: "#094E93" }}>Globally Recognized Certificates</strong> — Awarded the best computer course institute in Delhi. All certifications backed by leading industry partners like Adobe, Microsoft & Google.
            </p>
          </div>
        </div>

      </section>
    </>
  );
}