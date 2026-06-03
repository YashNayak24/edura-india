// ContactForm.jsx — Main grid layout using BookDemoForm component
import BookDemoForm from "../common/BookDemoForm";

/* ── shared ─────────────────────────────── */
function SLabel({ children }) {
  return (
    <div className="flex items-center gap-[9px] mb-[14px] text-[10.5px] font-bold text-[#5A6A8A] uppercase tracking-[.09em]">
      <span className="w-[14px] h-[2px] rounded-[2px] bg-[#094E93] flex-shrink-0" />
      {children}
      <span className="flex-1 h-px bg-[#DDE5F8]" />
    </div>
  );
}

/* ── Branches ── */
const BRANCHES = [
  {
    type: "Branch Office", tag: "Branch", tagBg: "#F3EEFF", tagColor: "#7C3AED",
    addr: "B-6/7, Pocket D, Okhla Phase II, Okhla Industrial Estate, New Delhi, Delhi 110020",
    phone: "+91 92174 89565", tel: "tel:+919217489565"
  },
];

function BranchCard() {
  return (
    <div className="bg-white border border-[#DDE5F8] rounded-[20px] p-7 shadow-[0_12px_40px_rgba(9,78,147,.07)]">
      <SLabel>Our Locations</SLabel>
      <div className="flex flex-col gap-2">
        {BRANCHES.map((b) => (
          <div key={b.type} className="flex items-start gap-3 p-[13px] rounded-[12px] bg-[#F7F9FF] border border-[#DDE5F8] transition-all duration-200 cursor-default hover:border-[rgba(9,78,147,.2)] hover:bg-[#EBF1FF66] hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(9,78,147,.07)]">
            <div className="w-9 h-9 rounded-[9px] bg-[#EBF1FF] text-[#094E93] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-[7px] flex-wrap mb-1">
                <span className="text-[13px] font-extrabold text-[#0D1E42]">{b.type}</span>
                <span className="text-[9.5px] font-bold px-2 py-[2px] rounded-full" style={{ background: b.tagBg, color: b.tagColor }}>{b.tag}</span>
              </div>
              <div className="flex items-start gap-[5px] text-[12px] text-[#5A6A8A] font-medium leading-[1.5] mb-1">
                <svg viewBox="0 0 24 24" className="w-3 h-3 flex-shrink-0 mt-[2px]" fill="none" stroke="#5A6A8A" strokeWidth={2}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                {b.addr}
              </div>
              <div className="flex items-center gap-[5px] text-[12.5px] font-bold text-[#094E93]">
                <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="#094E93" strokeWidth={2}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07" />
                </svg>
                <a href={b.tel} className="hover:underline">{b.phone}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Hours & Socials ── */
const HOURS = [
  { day: "Mon – Fri", time: "8 AM – 7 PM" },
  { day: "Saturday",  time: "8 AM – 5 PM" },
  { day: "Sunday",    time: "Closed", closed: true },
];

const SOCIALS = [
  {
    label: "YouTube",
    href: "https://youtube.com/@edura",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FF0000">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/edura",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <defs>
          <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#f09433"/>
            <stop offset="25%"  stopColor="#e6683c"/>
            <stop offset="50%"  stopColor="#dc2743"/>
            <stop offset="75%"  stopColor="#cc2366"/>
            <stop offset="100%" stopColor="#bc1888"/>
          </linearGradient>
        </defs>
        <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/edura",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0A66C2">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/edura",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#1877F2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

function HoursSocialCard() {
  return (
    <div className="bg-white border border-[#DDE5F8] rounded-[20px] p-7 shadow-[0_12px_40px_rgba(9,78,147,.07)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">

        {/* Office Hours */}
        <div className="sm:pr-4 sm:border-r sm:border-[#DDE5F8] pb-4 sm:pb-0 border-b border-[#DDE5F8] sm:border-b-0">
          <SLabel>Office Hours</SLabel>
          {HOURS.map((h) => (
            <div key={h.day} className="flex justify-between items-center py-[7px] border-b border-[#F0F4FF] last:border-b-0">
              <span className="text-[12.5px] font-medium text-[#5A6A8A]">{h.day}</span>
              <span className={`text-[12.5px] font-bold ${h.closed ? "text-red-500" : "text-[#0D1E42]"}`}>{h.time}</span>
            </div>
          ))}
        </div>

        {/* Follow Us — bare icons with original colors */}
        <div className="sm:pl-4 pt-4 sm:pt-0">
          <SLabel>Follow Us</SLabel>
          <div className="flex flex-col gap-[10px]">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-[10px] group no-underline"
              >
                <span className="flex-shrink-0 transition-transform duration-150 group-hover:scale-[1.15]">
                  {s.icon}
                </span>
                <span className="text-[13px] font-semibold text-[#5A6A8A] transition-colors duration-150 group-hover:text-[#0D1E42]">
                  {s.label}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

/* ── Rating ── */
function RatingCard() {
  return (
    <div className="bg-white border border-[#DDE5F8] rounded-[20px] px-6 py-5 shadow-[0_12px_40px_rgba(9,78,147,.07)]">
      <div className="flex items-center justify-between flex-wrap gap-[14px]">
        <div>
          <div className="flex items-center gap-[3px] mb-[3px]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-[#F5A623]">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
            <span className="text-[15px] font-black text-[#0D1E42] ml-1">4.9</span>
          </div>
          <div className="text-[11.5px] text-[#5A6A8A] font-medium">Google Rating · 2,800+ reviews</div>
        </div>
        <div className="flex items-center gap-5">
          {[["20K+", "Students"], ["94%", "Placed"], ["125+", "Courses"]].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-[18px] font-black text-[#094E93] leading-none">{n}</div>
              <div className="text-[9px] font-bold text-[#5A6A8A] uppercase tracking-[.06em] mt-[3px]">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main Grid ── */
export default function MainGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 mb-14">
      <BookDemoForm />
      <div className="flex flex-col gap-[18px]">
        <BranchCard />
        <HoursSocialCard />
        <RatingCard />
      </div>
    </div>
  );
}