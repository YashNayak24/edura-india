import { useState } from 'react'

const PHONE_NUMBER = "919217489565"
const WHATSAPP_NUMBER = "919217489565"
const MAPS_LINK = "https://maps.google.com/?q=E-89,+Block+E,+Kalkaji,+New+Delhi,+Delhi+110019"

const FAQS = [
  { q:"How do I book a Free Demo Class?",               a:"Simply fill the contact form on this page or call/WhatsApp us. Our counsellor will schedule a free demo at a time convenient for you — no commitment required." },
  { q:"Are classes available online and offline both?", a:"Yes — both online (via Zoom/Google Meet) and offline (at our Delhi NCR centres) classes are available. You can switch modes anytime based on your convenience." },
  { q:"What courses do you offer?",                    a:"We offer 125+ courses including Graphic Designing, Video Editing, Digital Marketing, Web Development, Data Analytics, Stock Market Trading, C/C++/Java/Python, and more." },
  { q:"What are the batch timings?",                   a:"We have morning (8–11 AM), afternoon (12–3 PM), evening (4–7 PM), and weekend batches. New batches start every Monday so you never have to wait long." },
  { q:"Do you provide placement assistance?",          a:"Yes — 100% placement assistance is provided free of charge. Our dedicated placement cell works with every eligible student through mock interviews, resume building, and job referrals." },
]

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.99 2C6.474 2 2 6.474 2 11.99c0 1.75.48 3.39 1.29 4.81L2 22l5.34-1.37A9.953 9.953 0 0012 22c5.516 0 9.99-4.474 9.99-9.99C21.99 6.474 17.516 2 11.99 2z"

export default function BottomSection() {
  const [open, setOpen] = useState(null)

  const handleCall = () => {
    window.location.href = `tel:+${PHONE_NUMBER}`
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank")
  }

  return (
    <>
      {/* ── Map ── */}
      <div className="rounded-[20px] overflow-hidden border border-[#DDE5F8] shadow-[0_8px_28px_rgba(9,78,147,.07)] mb-12">
        
        {/* Map Image — clickable, opens Google Maps */}
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noreferrer"
          className="block relative group"
        >
          <img
            src="/images/map_image.png"
            alt="Edura location map — E-89, Block E, Kalkaji, New Delhi"
            className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover object-center"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#094E93]/0 group-hover:bg-[#094E93]/10 transition-all duration-200 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white text-[#094E93] font-bold text-[13px] px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Open in Maps
            </span>
          </div>
        </a>

        {/* Footer bar */}
        <div className="bg-white border-t border-[#DDE5F8] px-4 py-3 sm:px-5 sm:py-4 flex items-center justify-between gap-3 flex-wrap">
          <div className="text-[12px] sm:text-[13px] font-semibold text-[#0D1E42]">
            Edura Institute -{" "}
            <span className="text-[#5A6A8A] font-medium">E-89, Block E, Kalkaji, New Delhi – 110019</span>
          </div>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-[6px] bg-[#094E93] text-white rounded-[9px] px-3 py-[8px] sm:px-4 sm:py-[9px] text-[12px] sm:text-[13px] font-bold transition-all duration-[180ms] hover:bg-[#0A5FAD] hover:-translate-y-px whitespace-nowrap"
          >
            <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] sm:w-[14px] sm:h-[14px]" fill="none" stroke="white" strokeWidth={2.5}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            Open in Maps
          </a>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="mb-14">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-[6px] bg-[#EBF1FF] border border-[#DDE5F8] text-[#094E93] px-[14px] py-1 rounded-full text-[11px] font-bold uppercase tracking-[.07em] mb-3">FAQ</div>
          <h2 className="text-[clamp(22px,3vw,36px)] font-extrabold text-[#0D1E42] tracking-[-0.03em]">
            Frequently Asked <span className="text-[#094E93]">Questions</span>
          </h2>
          <p className="text-[14.5px] text-[#5A6A8A] font-medium mt-2">Everything you need to know before joining Edura India.</p>
        </div>

        <div className="max-w-[760px] mx-auto flex flex-col gap-[10px]">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="bg-white rounded-[14px] overflow-hidden transition-all duration-[180ms]"
                style={{ border: isOpen ? "1.5px solid rgba(9,78,147,.25)" : "1.5px solid #DDE5F8", boxShadow: isOpen ? "0 6px 24px rgba(9,78,147,.08)" : "none" }}>
                <button className="w-full flex items-center justify-between gap-[14px] px-[18px] py-4 text-left cursor-pointer bg-transparent border-none"
                  style={{ fontFamily:"inherit" }} onClick={() => setOpen(isOpen ? null : i)}>
                  <span className="text-[13px] sm:text-[14px] font-bold text-[#0D1E42] leading-[1.4]">{f.q}</span>
                  <span className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center border transition-all duration-[220ms]"
                    style={{ background: isOpen ? "#094E93" : "#F7F9FF", borderColor: isOpen ? "#094E93" : "#DDE5F8", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
                    <svg viewBox="0 0 24 24" className="w-[13px] h-[13px]" fill="none" stroke={isOpen ? "#fff" : "#5A6A8A"} strokeWidth={2.5}>
                      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-[18px] pb-4">
                    <div className="h-px bg-[#DDE5F8] mb-[13px]"/>
                    <p className="text-[13px] sm:text-[13.5px] text-[#5A6A8A] font-medium leading-[1.72]">{f.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* ── CTA Strip ── */}
      <div className="rounded-[20px] overflow-hidden mb-14 relative shadow-[0_16px_48px_rgba(9,78,147,.25)]"
        style={{ background:"linear-gradient(135deg,#094E93,#0A5FAD)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px)", backgroundSize:"24px 24px" }}/>
        <div className="absolute top-[-40px] right-[-40px] w-[200px] h-[200px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(245,166,35,.12),transparent 70%)" }}/>

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 px-5 py-6 sm:px-7 sm:py-7 md:px-8">
          <div>
            <div className="text-[10px] sm:text-[10.5px] font-bold text-white/45 uppercase tracking-[.09em] mb-[5px]">Still Have Questions?</div>
            <div className="font-black text-white tracking-[-0.025em] leading-[1.15] text-[17px] sm:text-[20px] md:text-[clamp(17px,2.5vw,24px)]">
              Talk to our counsellor — <span className="text-[#F5A623]">it's free.</span>
            </div>
            <div className="text-[12px] sm:text-[13px] text-white/50 font-medium mt-1">Call · WhatsApp · Email — reach us any way you prefer.</div>
          </div>

          {/* Buttons — full width on mobile, auto on sm+ */}
          <div className="flex flex-col xs:flex-row sm:flex-row gap-[10px] flex-shrink-0">
            <button
              onClick={handleCall}
              className="inline-flex items-center justify-center gap-[7px] bg-white text-[#094E93] rounded-[10px] px-5 py-[11px] text-[13px] sm:text-[13.5px] font-bold transition-all duration-[180ms] hover:bg-[#EAF2FB] active:scale-[0.97] cursor-pointer border-none w-full xs:w-auto"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call Now
            </button>

            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-[7px] bg-[#25D366] text-white rounded-[10px] px-5 py-[11px] text-[13px] sm:text-[13.5px] font-bold transition-all duration-[180ms] hover:bg-[#1ebe59] active:scale-[0.97] cursor-pointer border-none w-full xs:w-auto"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 fill-white"><path d={WA_PATH}/></svg>
              WhatsApp
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pinpulse {
          0%,100% { box-shadow:0 0 0 6px rgba(9,78,147,.15); }
          50%      { box-shadow:0 0 0 12px rgba(9,78,147,.05); }
        }
      `}</style>
    </>
  )
}