// import { useState } from "react";
// import { Reveal } from "./utils";
// import { IconWhatsApp, IconShield } from "./icons";

// /* ── CTA Variant 1: Blue banner with stats ── */
// function CTABanner() {
//   return (
//     <section className="bg-[#F4F6FB] py-8 px-6">
//       <div className="max-w-[1200px] mx-auto">
//         <Reveal>
//           <div className="relative overflow-hidden rounded-[28px] bg-[#094E93] dot-pattern">
//             <div className="relative z-10 flex flex-wrap items-center justify-between gap-8 px-10 py-10">

//               {/* Left: Copy */}
//               <div className="flex-1 min-w-[280px]">
//                 <p className="text-[11px] font-bold uppercase tracking-widest text-white/55 mb-3">
//                   Start Your Journey Today
//                 </p>
//                 <h2 className="text-[clamp(22px,3.5vw,38px)] font-black text-white leading-[1.2] mb-4">
//                   Ready to Build the Career You{" "}
//                   <span className="gradient-text">Deserve?</span>
//                 </h2>
//                 <p className="text-white/70 text-[14px] leading-relaxed mb-6 max-w-[360px]">
//                   Book a free demo class — no fees, no commitment. Talk to our counsellor and
//                   find the right course for your goals.
//                 </p>
//                 <div className="flex flex-wrap gap-2.5">
//                   {[["125+", "COURSES"], ["20K+", "STUDENTS"], ["94%", "PLACEMENT"], ["4.9★", "RATING"]].map(([v, l]) => (
//                     <div key={l} className="bg-white/10 border border-white/15 rounded-xl px-3.5 py-2 text-center">
//                       <div className="font-black text-white text-[16px]">{v}</div>
//                       <div className="text-[9px] text-white/50 font-bold tracking-wider mt-0.5">{l}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Right: Action buttons */}
//               <div className="flex flex-col gap-3 w-full max-w-[288px]">
//                 <button className="btn-shine w-full bg-white text-[#094E93] border-none rounded-2xl py-4 font-black text-[15px] flex flex-col items-center">
//                   <span>Call Now!</span>
//                   <span className="text-[11px] font-normal text-gray-400 mt-0.5">No commitment required</span>
//                 </button>

//                 <button className="w-full bg-[#25D366] hover:bg-[#1db954] transition-colors text-white border-none rounded-2xl py-3.5 font-black text-[15px] flex items-center justify-center gap-2.5">
//                   <IconWhatsApp size={20} />
//                   <div className="text-left">
//                     <div className="text-[15px] font-black leading-none">WhatsApp Us</div>
//                     <div className="text-[11px] font-normal opacity-80 mt-0.5">Chat instantly — 24/7</div>
//                   </div>
//                 </button>

//                 <p className="text-center text-white/45 text-[12px]">
//                   Or call us:{" "}
//                   <span className="text-white font-semibold">+91 92174 89565</span>
//                 </p>
//               </div>

//             </div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }


// /* ── Main export: all 3 CTAs composed ── */
// export default function AboutCTA() {
//   return (
//     <>
//       <CTABanner />
//     </>
//   );
// }








import { Reveal } from "./utils";
import { IconWhatsApp } from "./icons";

const PHONE_NUMBER = "919217489565"
const WHATSAPP_NUMBER = "919217489565"

function CTABanner() {
  const handleCall = () => {
    window.location.href = `tel:+${PHONE_NUMBER}`
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank")
  }

  return (
    <section className="bg-[#F4F6FB] py-6 px-3 sm:py-8 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-[20px] sm:rounded-[28px] bg-[#094E93] dot-pattern">
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between md:flex-row md:items-center md:justify-between gap-6 sm:gap-8 px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10 md:px-10 md:py-10">

              {/* Left: Copy */}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-white/55 mb-2 sm:mb-3">
                  Start Your Journey Today
                </p>
                <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[clamp(22px,3.5vw,38px)] font-black text-white leading-[1.2] mb-3 sm:mb-4">
                  Ready to Build the Career You{" "}
                  <span className="gradient-text">Deserve?</span>
                </h2>
                <p className="text-white/70 text-[13px] sm:text-[14px] leading-relaxed mb-5 sm:mb-6 max-w-full lg:max-w-[360px] md:max-w-[360px]">
                  Book a free demo class — no fees, no commitment. Talk to our counsellor and
                  find the right course for your goals.
                </p>

                {/* Stats — 2x2 grid on mobile, single row on sm+ */}
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-2.5">
                  {[["125+", "COURSES"], ["20K+", "STUDENTS"], ["94%", "PLACEMENT"], ["4.9★", "RATING"]].map(([v, l]) => (
                    <div
                      key={l}
                      className="bg-white/10 border border-white/15 rounded-xl px-3 py-2 sm:px-3.5 text-center"
                    >
                      <div className="font-black text-white text-[15px] sm:text-[16px]">{v}</div>
                      <div className="text-[8px] sm:text-[9px] text-white/50 font-bold tracking-wider mt-0.5">{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Action buttons */}
              <div className="flex flex-col gap-3 w-full lg:w-auto lg:min-w-[260px] lg:max-w-[288px] md:w-auto md:min-w-[260px] md:max-w-[288px]">
                <button
                  onClick={handleCall}
                  className="btn-shine w-full bg-white text-[#094E93] border-none rounded-2xl py-3.5 sm:py-4 font-black text-[14px] sm:text-[15px] flex flex-col items-center cursor-pointer hover:opacity-90 active:scale-[0.98] transition-all"
                >
                  <span>Call Now!</span>
                  <span className="text-[10px] sm:text-[11px] font-normal text-gray-400 mt-0.5">No commitment required</span>
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#1db954] active:bg-[#17a845] active:scale-[0.98] transition-all text-white border-none rounded-2xl py-3 sm:py-3.5 font-black text-[14px] sm:text-[15px] flex items-center justify-center gap-2 sm:gap-2.5 cursor-pointer"
                >
                  <IconWhatsApp size={18} />
                  <div className="text-left">
                    <div className="text-[14px] sm:text-[15px] font-black leading-none">WhatsApp Us</div>
                    <div className="text-[10px] sm:text-[11px] font-normal opacity-80 mt-0.5">Chat instantly — 24/7</div>
                  </div>
                </button>

                <p className="text-center text-white/45 text-[11px] sm:text-[12px]">
                  Or call us:{" "}
                  <a
                    href={`tel:+${PHONE_NUMBER}`}
                    className="text-white font-semibold hover:underline"
                  >
                    +91 92174 89565
                  </a>
                </p>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function AboutCTA() {
  return <CTABanner />;
}