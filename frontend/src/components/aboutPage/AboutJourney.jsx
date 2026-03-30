import { Reveal } from "./utils";
import { IconTarget, IconGlobe } from "./icons";

const TIMELINE = [
  { year: "2018", title: "Founded in Delhi NCR",      desc: "Started with 3 courses and a vision to make quality skill training accessible to all." },
  { year: "2020", title: "NSDC Partnership",           desc: "Became NSDC approved and launched government-certified programs nationwide." },
  { year: "2022", title: "ISO 9001:2015 Certified",    desc: "Achieved ISO certification and expanded to 50+ courses across 8 verticals." },
  { year: "2024", title: "20,000+ Students Placed",    desc: "Crossed the milestone with an industry-leading 94% placement success rate." },
];

export default function AboutJourney() {
  return (
    <section className="bg-[#F4F6FB] py-[72px]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: Timeline ── */}
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#094E93] bg-[#E8F0FC] px-3.5 py-1.5 rounded-full">
              Our Journey
            </span>
            <h2 className="text-[clamp(26px,4vw,44px)] font-black text-[#0A1628] mt-5 mb-8 leading-[1.15]">
              From a Small<br />Classroom to<br />
              <span className="text-[#094E93]">20,000+ Careers</span>
            </h2>

            <div>
              {TIMELINE.map((item, i) => (
                <div key={i} className="flex gap-5 relative">
                  {/* Vertical connector line */}
                  {i < TIMELINE.length - 1 && (
                    <div className="absolute left-[19px] top-10 w-0.5 h-full bg-[#E8F0FC] z-0" />
                  )}
                  {/* Step circle */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#094E93] text-white text-[12px] font-bold flex items-center justify-center z-10 mt-0.5 shadow-[0_4px_12px_rgba(9,78,147,.3)]">
                    {i + 1}
                  </div>
                  <div className="pb-8">
                    <span className="text-[11px] font-bold text-[#F5A623] uppercase tracking-wider">{item.year}</span>
                    <h4 className="font-black text-[#0A1628] text-[16px] mt-0.5">{item.title}</h4>
                    <p className="text-gray-400 text-[13px] mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── Right: Mission + Vision ── */}
          <Reveal delay={150} className="flex flex-col gap-4">
            {/* Mission */}
            <div className="bg-gradient-to-br from-[#094E93] to-[#0A5FAD] rounded-3xl p-8 text-white shadow-[0_16px_48px_rgba(9,78,147,.25)]">
              <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center mb-4">
                <IconTarget size={26} color="white" />
              </div>
              <h3 className="text-[22px] font-black mb-3">Our Mission</h3>
              <p className="text-white/80 leading-relaxed text-[14px]">
                To empower every student with industry-ready skills, real-world projects, and
                personalized mentorship — so that no talented person remains unemployed due to
                lack of guidance.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#F5A623] rounded-3xl p-8 text-white shadow-[0_16px_48px_rgba(245,166,35,.2)]">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <IconGlobe size={26} color="white" />
              </div>
              <h3 className="text-[22px] font-black mb-3">Our Vision</h3>
              <p className="text-white/85 leading-relaxed text-[14px]">
                To become India's most trusted skill training platform, where every learner
                graduates with confidence, a certificate, and a confirmed job offer.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}