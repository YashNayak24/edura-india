import { Reveal } from "./utils";
import {
  IconTarget, IconBriefcase, IconLightbulb,
  IconChat, IconMonitor, IconTrophy,
  IconGlobe, IconStar, IconBook, IconShield,
} from "./icons";

/* ── Core Values data ── */
const VALUES = [
  { icon: <IconTarget   size={22} color="#094E93" />, bg: "#E8F0FC", title: "Placement First",       desc: "Every curriculum decision is made with one goal — your employment. We track, mentor, and push until you're hired." },
  { icon: <IconBriefcase size={22} color="#7c3aed" />, bg: "#EDE9FE", title: "Expert-Led Learning",   desc: "All trainers are industry professionals with 5+ years of real work experience, not just academic teachers." },
  { icon: <IconLightbulb size={22} color="#d97706" />, bg: "#FEF3C7", title: "Project-Based Training", desc: "You build real industry projects, work on live campaigns, and graduate with a portfolio — not just a certificate." },
  { icon: <IconChat      size={22} color="#0d9488" />, bg: "#CCFBF1", title: "1-on-1 Mentorship",     desc: "Personalized career roadmaps, resume reviews, and mock interviews tailored to your specific goals." },
  { icon: <IconMonitor   size={22} color="#e11d48" />, bg: "#FFE4E6", title: "Flexible Learning",     desc: "Online, offline, weekday and weekend batches — because your schedule matters and learning shouldn't wait." },
  { icon: <IconTrophy    size={22} color="#F5A623" />, bg: "#FEF3C7", title: "Proven Track Record",   desc: "94% placement rate, 4.9★ Google rating, and 20,000+ success stories that speak for themselves." },
];

/* ── Team data ── */
const TEAM = [
  { initials: "RS", name: "Rahul Sharma", role: "Full Stack Lead",   exp: "8+ years · Ex-Google",    bg: "#094E93" },
  { initials: "PM", name: "Priya Mehta",  role: "Digital Marketing", exp: "7+ years · Ex-Deloitte",  bg: "#0A5FAD" },
  { initials: "AG", name: "Ankit Gupta",  role: "UI/UX & Design",    exp: "6+ years · Ex-Amazon",    bg: "#F5A623" },
  { initials: "SV", name: "Sneha Verma",  role: "AI & Data Science", exp: "5+ years · Ex-Microsoft", bg: "#073E75" },
];

/* ── Certification badges ── */
const CERTS = [
  { icon: <IconTrophy size={22} color="#F5A623" />, title: "Adobe Certified",   sub: "Creative Trainer"    },
  { icon: <IconShield size={22} color="#094E93" />, title: "Microsoft Partner", sub: "Learn Programme"     },
  { icon: <IconGlobe  size={22} color="#4285F4" />, title: "Google Partner",    sub: "Certified Training"  },
  { icon: <IconBook   size={22} color="#1877F2" />, title: "Meta Blueprint",    sub: "Marketing Partner"   },
  { icon: <IconStar   size={22} color="#F5A623" />, title: "4.9★ Rating",       sub: "Google Reviews"      },
];

export default function AboutValues() {
  return (
    <>
      {/* ════ CORE VALUES ════ */}
      <section className="bg-white py-[72px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <Reveal className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#094E93] bg-[#E8F0FC] px-4 py-1.5 rounded-full">
              What Drives Us
            </span>
            <h2 className="text-[clamp(26px,4vw,40px)] font-black text-[#0A1628] mt-4">Our Core Values</h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {VALUES.map((v, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="flex gap-4 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(9,78,147,.12)] transition-all duration-300">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: v.bg }}
                  >
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-[#0A1628] mb-1">{v.title}</h4>
                    <p className="text-[13px] text-gray-400 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════ TEAM ════ */}
      {/* <section className="bg-[#F4F6FB] py-[72px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <Reveal className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#094E93] bg-[#E8F0FC] px-4 py-1.5 rounded-full">
              Meet the Experts
            </span>
            <h2 className="text-[clamp(26px,4vw,40px)] font-black text-[#0A1628] mt-4">Our Lead Mentors</h2>
            <p className="text-gray-400 mt-3 max-w-[480px] mx-auto text-[14px]">
              Industry professionals who've worked at top companies and now dedicate their expertise to shaping your career.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map((m, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(9,78,147,.15)] transition-all duration-300">
                  <div
                    className="w-[52px] h-[52px] rounded-2xl text-white font-black text-[17px] flex items-center justify-center mb-4"
                    style={{ background: m.bg }}
                  >
                    {m.initials}
                  </div>
                  <h4 className="font-black text-[#0A1628] text-[15px]">{m.name}</h4>
                  <p className="text-[#094E93] text-[12px] font-semibold mt-0.5">{m.role}</p>
                  <p className="text-gray-400 text-[11px] mt-1">{m.exp}</p>
                  <div className="mt-3.5 flex gap-3">
                    <a href="#" className="text-[12px] text-gray-400 font-semibold hover:text-[#094E93] transition-colors no-underline">
                      LinkedIn
                    </a>
                    <a href="#" className="text-[12px] text-gray-400 font-semibold hover:text-[#094E93] transition-colors no-underline">
                      Twitter
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* ════ CERTIFICATIONS ════ */}
      <section className="bg-[#F4F6FB] py-14 px-6 text-center">
        <div className="max-w-[1000px] mx-auto">
          <Reveal>
            <h3 className="text-[clamp(20px,3vw,28px)] font-black text-[#0A1628] mb-7">
              Trusted & Recognised By
            </h3>
            <div className="flex flex-wrap justify-center gap-3.5">
              {CERTS.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white border-[1.5px] border-gray-200 rounded-2xl px-5 py-3.5 hover:border-[#094E93] hover:shadow-[0_4px_20px_rgba(9,78,147,.1)] transition-all cursor-default"
                >
                  {c.icon}
                  <div className="text-left">
                    <div className="font-black text-[#0A1628] text-[13px]">{c.title}</div>
                    <div className="text-gray-400 text-[11px]">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}