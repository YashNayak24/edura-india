"use client";
import { IconTrophy, IconShield, IconStar, IconTarget } from "./icons";
import Link from 'next/link'

export default function AboutHero({ onBookDemoClick }) {
  return (
    <section className="bg-white relative overflow-hidden pt-[110px]">
      {/* ── BG Dot Pattern ── */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hd" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.8" fill="#094E93" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hd)" />
      </svg>

      {/* ── BG Orbs ── */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#094E93] opacity-[0.04] rounded-full translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-[#F5A623] opacity-[0.05] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 py-14 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ── */}
          <div>
            <h1 className="fade-up-2 text-[clamp(36px,5vw,60px)] font-black leading-[1.08] mb-6 text-[#094E93]">
              Empowering Careers<br />
              <span className="gradient-text">One Skill at a Time.</span>
            </h1>

            <p className="fade-up-3 text-gray-500 text-[clamp(15px,1.5vw,17px)] leading-[1.8] mb-8 max-w-[480px]">
              {/* Founded in Delhi NCR, SkillEdge is an industry-leading skill training
              institute dedicated to bridging the gap between education and employment. We
              don't just teach — we place, mentor, and support until you land your dream job. */}
              At EduraIndia, we believe that the right skills can completely transform your future. Our goal is simple — to help you move from learning to earning with confidence. We don’t just teach concepts, we focus on practical knowledge that prepares you for real-world challenges.
              With expert guidance, hands-on training, and industry-relevant courses, we support you at every step of your journey. Whether you are starting fresh or upgrading your skills, EduraIndia helps you build a career that actually grows.

            </p>

            <div className="fade-up-3 flex gap-3 flex-wrap">
              <button
                onClick={onBookDemoClick}
                className="btn-shine px-6 py-3.5 bg-[#094E93] text-white font-bold rounded-xl text-[15px] shadow-[0_8px_24px_rgba(9,78,147,.3)] hover:bg-[#073E75] transition-colors">
                Book Free Demo
              </button>
              <Link href={"/courses"}>
                <button className="px-6 py-3.5 border-2 border-[#094E93]/30 text-[#094E93] font-bold rounded-xl text-[15px] hover:bg-[#EBF1FF] hover:border-[#094E93] hover:">
                  Explore Courses →
                </button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="fade-up-3 mt-7 flex flex-wrap gap-4 items-center">
              <span className="text-[12px] font-semibold text-gray-400 flex items-center gap-1.5">
                <IconTrophy size={14} color="#F5A623" /> Adobe Certified
              </span>
              <span className="text-[12px] font-semibold text-gray-400 flex items-center gap-1.5">
                <IconShield size={14} color="#094E93" /> Microsoft Partner
              </span>
              <span className="text-[12px] font-semibold text-gray-400 flex items-center gap-1.5">
                <IconStar size={14} color="#F5A623" /> 4.9★ Google Rating
              </span>
            </div>
          </div>

          {/* ── Right: Floating Card Stack ── */}
          <div className="relative justify-center items-center min-h-[380px] hidden lg:flex">

            {/* Main card */}
            <div className="float relative z-10 w-[280px] bg-gradient-to-br from-[#094E93] to-[#0A5FAD] rounded-[28px] p-7 text-white shadow-[0_24px_64px_rgba(9,78,147,.42)]">
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-[11px] font-bold">
                SE
              </div>
              <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-5">
                <IconTarget size={28} color="white" />
              </div>
              <div className="text-[22px] font-black">94% Placement</div>
              <div className="text-white/60 text-[13px] mt-1">Industry success rate</div>
              <div className="grid grid-cols-2 gap-2.5 mt-5">
                {[["20K+", "Students"], ["125+", "Courses"], ["4.9★", "Rating"], ["100%", "Support"]].map(([v, l]) => (
                  <div key={l} className="bg-white/[0.12] rounded-xl p-2.5 text-center">
                    <div className="font-black text-[16px]">{v}</div>
                    <div className="text-[10px] text-white/55 mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Badge — ISO */}
            <div className="float-slow absolute left-[-32px] top-10 z-20 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(9,78,147,.16)] border border-gray-100">
              <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Adobe Certified</div>
              <div className="text-[14px] font-black text-[#094E93] flex items-center gap-1 mt-0.5">
                <IconTrophy size={13} color="#094E93" /> Trainer ✓
              </div>
            </div>

            {/* Badge — Industry */}
            <div className="float absolute right-[-16px] bottom-14 z-20 bg-[#F5A623] rounded-2xl px-4 py-3 shadow-[0_8px_20px_rgba(245,166,35,.3)]">
              <div className="text-[10px] text-white/75 font-semibold uppercase tracking-wider">Industry Certified</div>
              <div className="text-[14px] font-black text-white flex items-center gap-1 mt-0.5">
                <IconShield size={13} color="white" /> Globally Recognized
              </div>
            </div>

            {/* Badge — Batch */}
            <div className="float-slow absolute left-[-16px] bottom-[-8px] z-20 bg-white rounded-2xl px-4 py-2.5 shadow-[0_8px_24px_rgba(9,78,147,.12)] border border-gray-100">
              <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Batch Started</div>
              <div className="text-[12px] font-black text-[#0A1628] flex items-center gap-1 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                Mon, Wed, Fri
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}