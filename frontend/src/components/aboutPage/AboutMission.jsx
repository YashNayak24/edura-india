import { Reveal } from "./utils";
import { IconUsers, IconTrend, IconBolt, IconAcademic, IconMonitor, IconShield } from "./icons";

const BENTO = [
  {
    wide: true,
    bg: "bg-[#094E93]",
    iconBg: "bg-white/20",
    icon: <IconUsers size={26} color="white" />,
    tagColor: "text-white/60",
    tag: "45+ Mentors",
    titleColor: "text-white",
    title: "Real Industry Mentors",
    descColor: "text-white/75",
    desc: "Our faculty are working professionals — designers, developers, marketers — who bring live project experience, not just theory. 45+ industry mentors across 8 career tracks.",
  },
  {
    bg: "bg-green-50 border border-green-200",
    iconBg: "bg-green-100",
    icon: <IconTrend size={22} color="#16a34a" />,
    tagColor: "text-green-600",
    tag: "94% Rate",
    titleColor: "text-[#0A1628]",
    title: "Placement First",
    descColor: "text-gray-500",
    desc: "Every course includes dedicated placement support — resume prep, mock interviews, referrals. We don't stop until you're placed.",
  },
  {
    bg: "bg-amber-50 border border-amber-200",
    iconBg: "bg-amber-100",
    icon: <IconBolt size={22} color="#d97706" />,
    tagColor: "text-amber-600",
    tag: "New 2025",
    titleColor: "text-[#0A1628]",
    title: "AI-Integrated Curriculum",
    descColor: "text-gray-500",
    desc: "ChatGPT, Midjourney, Canva AI — real AI tools integrated from Week 1 in every course.",
  },
  // {
  //   bg: "bg-purple-50 border border-purple-200",
  //   iconBg: "bg-purple-100",
  //   icon: <IconAcademic size={22} color="#7c3aed" />,
  //   tagColor: "text-purple-600",
  //   tag: "Adobe + Google",
  //   titleColor: "text-[#0A1628]",
  //   title: "Recognised Certifications",
  //   descColor: "text-gray-500",
  //   desc: "Earn certifications that employers actually value — Adobe Creative, Google Career, and Microsoft-recognised skill certificates.",
  // },
  {
    bg: "bg-[#F4F8FF] border border-[#dce9fa]",
    iconBg: "bg-[#E8F0FC]",
    icon: <IconMonitor size={22} color="#094E93" />,
    tagColor: "text-[#094E93]",
    tag: "24/7 Access",
    titleColor: "text-[#0A1628]",
    title: "Lifetime LMS Access",
    descColor: "text-gray-500",
    desc: "Recorded lectures, PDF notes, revision tests — access anytime from mobile or desktop, forever.",
  },
  {
    bg: "bg-rose-50 border border-rose-200",
    iconBg: "bg-rose-100",
    icon: <IconShield size={22} color="#e11d48" />,
    tagColor: "text-rose-600",
    tag: "8+ Projects",
    titleColor: "text-[#0A1628]",
    title: "Portfolio from Day One",
    descColor: "text-gray-500",
    desc: "Build real, industry-level projects from the very first month so you graduate with a portfolio that speaks for itself.",
  },
];

export default function AboutMission() {
  return (
    <section className="bg-white py-[72px]">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* ── Header ── */}
        <Reveal className="flex justify-between items-end gap-4 flex-wrap mb-10">
          <h2 className="text-[clamp(26px,4vw,44px)] font-black text-[#0A1628] leading-[1.15]">
            Why 20,000+ Students<br />
            <span className="text-[#094E93]">Choose Edura</span>
          </h2>
          
        </Reveal>

        {/* ── Bento Grid ── */}
        <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {BENTO.map((card, i) => (
            <div
              key={i}
              className={`bento-card rounded-3xl p-7 flex flex-col gap-4 min-h-[200px]
                ${card.bg}
                ${card.wide ? "sm:col-span-2" : ""}
              `}
            >
              {/* Icon */}
              <div className={`w-[52px] h-[52px] rounded-2xl flex items-center justify-center ${card.iconBg}`}>
                {card.icon}
              </div>
              <div>
                <p className={`text-[11px] font-bold uppercase tracking-widest mb-1.5 ${card.tagColor}`}>
                  {card.tag}
                </p>
                <h3 className={`text-[18px] font-black mb-2 ${card.titleColor}`}>{card.title}</h3>
                <p className={`text-[13px] leading-relaxed ${card.descColor}`}>{card.desc}</p>
              </div>
            </div>
          ))}
        </Reveal>

      </div>
    </section>
  );
}