import { useState } from "react";
import { Reveal } from "./utils";
import { IconWhatsApp, IconShield } from "./icons";

/* ── CTA Variant 1: Blue banner with stats ── */
function CTABanner() {
  return (
    <section className="bg-[#F4F6FB] py-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-[#094E93] dot-pattern">
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-8 px-10 py-10">

              {/* Left: Copy */}
              <div className="flex-1 min-w-[280px]">
                <p className="text-[11px] font-bold uppercase tracking-widest text-white/55 mb-3">
                  Start Your Journey Today
                </p>
                <h2 className="text-[clamp(22px,3.5vw,38px)] font-black text-white leading-[1.2] mb-4">
                  Ready to Build the Career You{" "}
                  <span className="gradient-text">Deserve?</span>
                </h2>
                <p className="text-white/70 text-[14px] leading-relaxed mb-6 max-w-[360px]">
                  Book a free demo class — no fees, no commitment. Talk to our counsellor and
                  find the right course for your goals.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {[["125+", "COURSES"], ["20K+", "STUDENTS"], ["94%", "PLACEMENT"], ["4.9★", "RATING"]].map(([v, l]) => (
                    <div key={l} className="bg-white/10 border border-white/15 rounded-xl px-3.5 py-2 text-center">
                      <div className="font-black text-white text-[16px]">{v}</div>
                      <div className="text-[9px] text-white/50 font-bold tracking-wider mt-0.5">{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Action buttons */}
              <div className="flex flex-col gap-3 w-full max-w-[288px]">
                <button className="btn-shine w-full bg-white text-[#094E93] border-none rounded-2xl py-4 font-black text-[15px] flex flex-col items-center">
                  <span>Call Now!</span>
                  <span className="text-[11px] font-normal text-gray-400 mt-0.5">No commitment required</span>
                </button>

                <button className="w-full bg-[#25D366] hover:bg-[#1db954] transition-colors text-white border-none rounded-2xl py-3.5 font-black text-[15px] flex items-center justify-center gap-2.5">
                  <IconWhatsApp size={20} />
                  <div className="text-left">
                    <div className="text-[15px] font-black leading-none">WhatsApp Us</div>
                    <div className="text-[11px] font-normal opacity-80 mt-0.5">Chat instantly — 24/7</div>
                  </div>
                </button>

                <p className="text-center text-white/45 text-[12px]">
                  Or call us:{" "}
                  <span className="text-white font-semibold">+91 99999 12345</span>
                </p>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


/* ── Main export: all 3 CTAs composed ── */
export default function AboutCTA() {
  return (
    <>
      <CTABanner />
    </>
  );
}