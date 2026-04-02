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
    addr: "Nirman Vihar, East Delhi – 110092",
    phone: "+91 99991 99651", tel: "tel:+919999199651"
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
const HOURS   = [{ day: "Mon – Fri", time: "9 AM – 7 PM" }, { day: "Saturday", time: "9 AM – 5 PM" }, { day: "Sunday", time: "Closed", closed: true }];
const SOCIALS = [{ label: "YouTube", abbr: "Y", bg: "#FEE2E2", color: "#DC2626" }, { label: "Instagram", abbr: "Ig", bg: "#FFF0F6", color: "#DB2777" }, { label: "LinkedIn", abbr: "in", bg: "#EBF1FF", color: "#094E93" }, { label: "Facebook", abbr: "f", bg: "#EEF2FF", color: "#1D4ED8" }];

function HoursSocialCard() {
  return (
    <div className="bg-white border border-[#DDE5F8] rounded-[20px] p-7 shadow-[0_12px_40px_rgba(9,78,147,.07)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
        <div className="sm:pr-4 sm:border-r sm:border-[#DDE5F8] pb-4 sm:pb-0 border-b border-[#DDE5F8] sm:border-b-0">
          <SLabel>Office Hours</SLabel>
          {HOURS.map((h) => (
            <div key={h.day} className="flex justify-between items-center py-[7px] border-b border-[#F0F4FF] last:border-b-0">
              <span className="text-[12.5px] font-medium text-[#5A6A8A]">{h.day}</span>
              <span className={`text-[12.5px] font-bold ${h.closed ? "text-red-600" : "text-[#0D1E42]"}`}>{h.time}</span>
            </div>
          ))}
        </div>
        <div className="sm:pl-4 pt-4 sm:pt-0">
          <SLabel>Follow Us</SLabel>
          {SOCIALS.map((s) => (
            <div key={s.label} className="flex items-center gap-[9px] mb-2 last:mb-0 cursor-pointer group">
              <div className="w-7 h-7 rounded-[7px] flex items-center justify-center text-[11.5px] font-black flex-shrink-0 transition-transform duration-150 group-hover:scale-[1.08]"
                style={{ background: s.bg, color: s.color }}>{s.abbr}</div>
              <span className="text-[13px] font-semibold text-[#5A6A8A] transition-colors duration-150 group-hover:text-[#0D1E42]">{s.label}</span>
            </div>
          ))}
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
      <BookDemoForm />   {/* ← sirf yeh line bachi, poora form alag file mein hai */}
      <div className="flex flex-col gap-[18px]">
        <BranchCard />
        <HoursSocialCard />
        <RatingCard />
      </div>
    </div>
  );
}