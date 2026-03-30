// ── SVG icon components ──────────────────────────────────────────────────────

const IcoMonitor = ({ stroke }) => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke={stroke} strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const IcoProject = ({ stroke }) => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke={stroke} strokeWidth="2">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="12" y2="17" />
  </svg>
);

const IcoRecord = ({ stroke }) => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke={stroke} strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polygon points="10,8 16,12 10,16" />
  </svg>
);

const IcoClock = ({ stroke }) => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke={stroke} strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const IcoDemo = ({ stroke }) => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke={stroke} strokeWidth="2">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    <line x1="9" y1="10" x2="15" y2="10" />
    <line x1="9" y1="14" x2="12" y2="14" />
  </svg>
);

// form input icon components
const IcoUser = () => (
  <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" fill="none" stroke="#CBD5E1" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IcoMail = () => (
  <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" fill="none" stroke="#CBD5E1" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IcoPhone = () => (
  <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" fill="none" stroke="#CBD5E1" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1.18 2 2 0 013.72 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const IcoMsg = () => (
  <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" fill="none" stroke="#CBD5E1" strokeWidth="2">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);

const IcoClipboard = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="white" strokeWidth="2">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <line x1="9" y1="12" x2="15" y2="12" />
    <line x1="9" y1="16" x2="12" y2="16" />
  </svg>
);

const IcoBook = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="white" strokeWidth="2.5">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    <line x1="9" y1="7" x2="15" y2="7" />
    <line x1="9" y1="11" x2="13" y2="11" />
  </svg>
);

const IcoLock = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="#B0BCCC" strokeWidth="2">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 018 0v4" />
  </svg>
);

// ── Feature data ──────────────────────────────────────────────────────────────

const features = [
  {
    bg: '#EBF1FF', stroke: '#094E93', Icon: IcoMonitor,
    title: 'Online and Offline Classes',
    desc: 'Both online and offline classes available to suit your schedule.'
  },
  {
    bg: '#FEF3C7', stroke: '#D97706', Icon: IcoProject,
    title: 'Real Industry Projects',
    desc: 'Hands-on practice with real industry projects throughout the course.'
  },
  {
    bg: '#DCFCE7', stroke: '#16A34A', Icon: IcoRecord,
    title: 'Recorded Sessions & Study Material',
    desc: 'Get recorded sessions and study material for lifetime access.'
  },
  {
    bg: '#F3EEFF', stroke: '#7C3AED', Icon: IcoClock,
    title: 'Flexible Timings',
    desc: 'Flexible timings with weekday & weekend batches.'
  },
  {
    bg: '#FFF0F6', stroke: '#DB2777', Icon: IcoDemo,
    title: 'Free Demo Class Available',
    desc: 'Book your Free Demo Class or chat with us on WhatsApp!'
  },
];

const inputCls = 'w-full bg-[#F7F9FF] border-[1.5px] border-[#DDE5F8] rounded-[10px] py-3 px-4 pl-10 text-[14px] font-medium text-[#0D1E42] font-jakarta outline-none focus:border-[#094E93] focus:bg-white transition-all placeholder:text-[#B0BCCC] placeholder:font-normal';

// ── Component ─────────────────────────────────────────────────────────────────

export default function ContactForm() {
  return (
    <section id="book-demo" className="bg-white pb-0">

      {/* ── Blue header strip ── */}
      <div className="relative text-center py-12 px-4 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#094E93,#0A5FAD)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px,transparent 1px)', backgroundSize: '26px 26px' }} />
        <div className="absolute bottom-[-2px] left-0 right-0 h-12 bg-white"
          style={{ clipPath: 'ellipse(52% 100% at 50% 100%)' }} />
        <h2 className="font-jakarta font-extrabold tracking-tight text-white mb-2.5 relative z-10"
          style={{ fontSize: 'clamp(24px,3vw,42px)' }}>
          Start Your <span className="text-[#F5A623]">Online or Offline</span> Learning Journey Today
        </h2>
        <p className="text-[15px] text-white/65 font-medium relative z-10">
          Learn from industry experts · Real projects · 100% placement support
        </p>
      </div>

      {/* ── Content grid ── */}
      <div className="max-w-[1160px] mx-auto px-4 sm:px-8 pb-16 -mt-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* ── Left: What You Get ── */}
          <div className="bg-white border-[2px] border-[#DDE5F8] rounded-[20px] p-6 lg:p-8 hover:border-[#094E93]"
            style={{ boxShadow: '0 12px 36px rgba(9,78,147,0.07)' }}>
            <div className="text-[11px] font-bold text-[#5A6A8A] tracking-[0.09em] uppercase mb-4 flex items-center gap-2">
              What You Get <span className="flex-1 h-px bg-[#DDE5F8]" />
            </div>

            {features.map(f => (
              <div key={f.title}
                className="flex items-center gap-3 p-3 rounded-[10px] bg-[#F7F9FF] border border-[#DDE5F8] mb-2 last:mb-0 hover:border-[#094E93]/20 hover:bg-[#EBF1FF] transition-all">
                <div className="w-[34px] h-[34px] rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: f.bg }}>
                  <f.Icon stroke={f.stroke} />
                </div>
                <div className="text-[13.5px] font-medium text-[#5A6A8A]">
                  <strong className="text-[#0D1E42] font-bold">{f.title}</strong> — {f.desc}
                </div>
              </div>
            ))}

            {/* Stats row */}
            <div className="flex mt-4 bg-white rounded-xl border border-[#DDE5F8] overflow-hidden">
              {[['20K+', 'Students'], ['94%', 'Placement'], ['4.9★', 'Rating']].map(([n, l]) => (
                <div key={l} className="flex-1 p-3 text-center border-r border-[#DDE5F8] last:border-r-0">
                  <div className="text-[20px] font-black text-[#0D1E42] leading-none">
                    {n.replace('+', '')}
                    <span className="text-[#094E93] text-[18px]">{n.includes('+') ? '+' : ''}</span>
                  </div>
                  <div className="text-[9.5px] text-[#5A6A8A] font-semibold mt-0.5 uppercase tracking-wider">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="bg-white border-[2px] border-[#DDE5F8] rounded-[20px] p-6 lg:p-8 hover:border-[#094E93]"
            style={{ boxShadow: '0 12px 36px rgba(9,78,147,0.07)' }}>

            {/* Form header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-[13px] flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#094E93,#0A5FAD)', boxShadow: '0 4px 14px rgba(9,78,147,0.25)' }}>
                <IcoClipboard />
              </div>
              <div>
                <h3 className="text-[17px] font-extrabold font-jakarta text-[#0D1E42] tracking-tight">Drop Your Details</h3>
                <p className="text-[12px] text-[#5A6A8A] font-medium mt-0.5">
                  Fill in &amp; our team will call you to schedule a{' '}
                  <strong className="text-[#094E93]">Free Demo!</strong>
                </p>
              </div>
            </div>

            <div className="h-px bg-[#DDE5F8] mb-5" />

            {/* Fields */}
            <div className="flex flex-col gap-3">

              {/* Name */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
                  <IcoUser />
                </span>
                <input type="text" placeholder="Your Name" className={inputCls} />
              </div>

              {/* Email */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
                  <IcoMail />
                </span>
                <input type="email" placeholder="Your Email" className={inputCls} />
              </div>

              {/* Phone */}
              <div className="grid grid-cols-3 gap-2">
                <select className="bg-[#F7F9FF] border-[1.5px] border-[#DDE5F8] rounded-[10px] py-3 px-3 text-[14px] font-medium text-[#0D1E42] font-jakarta outline-none focus:border-[#094E93] transition-all">
                  <option>+91 IN</option>
                  <option>+1 US</option>
                  <option>+44 UK</option>
                </select>
                <div className="col-span-2 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
                    <IcoPhone />
                  </span>
                  <input type="tel" placeholder="Mobile Number" className={inputCls} />
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <span className="absolute left-3 top-3.5 flex items-start">
                  <IcoMsg />
                </span>
                <textarea
                  placeholder="Your Message"
                  rows={3}
                  className="w-full bg-[#F7F9FF] border-[1.5px] border-[#DDE5F8] rounded-[10px] py-3 px-4 pl-10 text-[14px] font-medium text-[#0D1E42] font-jakarta outline-none focus:border-[#094E93] focus:bg-white transition-all placeholder:text-[#B0BCCC] placeholder:font-normal resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              className="w-full mt-4 flex items-center justify-center gap-2.5 text-white border-0 rounded-[11px] py-3.5 text-[14.5px] font-extrabold font-jakarta cursor-pointer hover:-translate-y-0.5 transition-all"
              style={{ background: 'linear-gradient(135deg,#094E93,#0A5FAD)', boxShadow: '0 7px 20px rgba(9,78,147,0.28)' }}>
              <IcoBook />
              Book Free Demo Class
            </button>

            {/* Privacy note */}
            <div className="text-center mt-3 text-[11.5px] text-[#B0BCCC] flex items-center justify-center gap-1.5">
              <IcoLock />
              Your details are safe. No spam, ever.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}