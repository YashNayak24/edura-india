"use client";
const CARDS = [
  {
    icoBg:"#EBF1FF", icoColor:"#094E93",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 2.18 2 2 0 013.72 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label:"Call Us", main:"+91 92174 89565", sub:"Mon – Sat · 9 AM – 7 PM",
    href:"tel:+919217489565", linkTxt:"Call Now", linkColor:"#094E93",
  },
  {
    icoBg:"#FEF3C7", icoColor:"#D97706",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label:"Email Us", main:"Indiaedura@gmail.com", sub:"Reply within 4–6 hours",
    href:"mailto:Indiaedura@gmail.com", linkTxt:"Send Email", linkColor:"#D97706",
  },
  {
    icoBg:"#DCFCE7", icoColor:"#16A34A",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.99 2C6.474 2 2 6.474 2 11.99c0 1.75.48 3.39 1.29 4.81L2 22l5.34-1.37A9.953 9.953 0 0012 22c5.516 0 9.99-4.474 9.99-9.99C21.99 6.474 17.516 2 11.99 2z"/>
      </svg>
    ),
    label:"WhatsApp", main:"+91 92174 89565", sub:"Chat instantly — 24/7",
    href:"https://wa.me/919217489565", linkTxt:"Open Chat", linkColor:"#16A34A",
  },
  {
    icoBg:"#F3EEFF", icoColor:"#7C3AED",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
    label:"Office Hours", main:"9 AM – 7 PM", sub:"Monday to Saturday",
  },
]

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" className="w-[13px] h-[13px]" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

export default function ContactCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[14px] mt-[-28px] relative z-10 mb-12">
      {CARDS.map(c => (
        <div key={c.label}
          className="bg-white border border-[#DDE5F8] rounded-[18px] p-[18px] sm:p-[22px]
            shadow-[0_6px_24px_rgba(9,78,147,.07)] transition-all duration-[220ms] cursor-default
            hover:-translate-y-[3px] hover:shadow-[0_14px_40px_rgba(9,78,147,.11)]
            hover:border-[rgba(9,78,147,.2)]">
          <div className="w-[42px] h-[42px] rounded-[11px] flex items-center justify-center mb-[14px]"
            style={{ background:c.icoBg, color:c.icoColor }}>
            {c.icon}
          </div>
          <div className="text-[10px] font-bold text-[#5A6A8A] uppercase tracking-[.08em] mb-[5px]">{c.label}</div>
          <div className="text-[13px] sm:text-[14px] font-extrabold text-[#0D1E42] mb-[3px] tracking-[-0.01em]">{c.main}</div>
          <div className="text-[11.5px] text-[#5A6A8A] font-medium mb-3">{c.sub}</div>
          {c.href && (
            <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              className="inline-flex items-center gap-[5px] text-[12px] font-bold transition-all duration-[180ms] hover:gap-2"
              style={{ color:c.linkColor }}>
              {c.linkTxt} <ArrowRight/>
            </a>
          )}
        </div>
      ))}
    </div>
  )
}