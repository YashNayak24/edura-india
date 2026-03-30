// ContactForm.jsx  — "Book Free Demo" form with OTP verification
import { useState, useRef, useEffect } from "react";
import { submitEnquiry, verifyOTP, resendOTP } from "../../api/enquiry";

/* ── shared ─────────────────────────────── */
const inputCls =
  "w-full bg-[#F7F9FF] border border-[#DDE5F8] rounded-[10px] pl-10 pr-3 py-3 text-[14px] font-medium text-[#0D1E42] outline-none transition-all duration-[180ms] placeholder:text-[#B0BCCC] placeholder:font-normal focus:border-[#094E93] focus:bg-white focus:shadow-[0_0_0_3.5px_rgba(9,78,147,.08)] hover:border-[#C5D3E8]";

function FieldIcon({ children, top = false }) {
  return (
    <span className={`absolute left-[13px] ${top ? "top-[14px]" : "top-1/2 -translate-y-1/2"} pointer-events-none`}>
      <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" fill="none" stroke="#CBD5E1" strokeWidth={2}>
        {children}
      </svg>
    </span>
  );
}

function SLabel({ children }) {
  return (
    <div className="flex items-center gap-[9px] mb-[14px] text-[10.5px] font-bold text-[#5A6A8A] uppercase tracking-[.09em]">
      <span className="w-[14px] h-[2px] rounded-[2px] bg-[#094E93] flex-shrink-0" />
      {children}
      <span className="flex-1 h-px bg-[#DDE5F8]" />
    </div>
  );
}

/* ── OTP countdown ── */
function useCountdown(seconds) {
  const [left, setLeft] = useState(0);
  const ref = useRef(null);
  const start = (s = seconds) => {
    setLeft(s);
    clearInterval(ref.current);
    ref.current = setInterval(() => {
      setLeft((p) => { if (p <= 1) { clearInterval(ref.current); return 0; } return p - 1; });
    }, 1000);
  };
  useEffect(() => () => clearInterval(ref.current), []);
  return { left, start };
}

/* ────────────────────────────────────────────────────────────────────────────
   FormCard — Book Free Demo
───────────────────────────────────────────────────────────────────────────── */
const COURSES = [
  "Basic Computer Course","Advanced Computer Course","Graphic Designing",
  "Video Editing","Digital Marketing","Stock Market Trading","Data Analyst",
  "Web Design & Development","C / C++ / Java / Python",
];

function FormCard() {
  const [step,      setStep]      = useState("form");   // "form"|"otp"|"success"
  const [form,      setForm]      = useState({ name:"", email:"", countryCode:"+91 IN", phone:"", course:"", message:"" });
  const [errors,    setErrors]    = useState({});
  const [loading,   setLoading]   = useState(false);
  const [apiError,  setApiError]  = useState("");
  const [enquiryId, setEnquiryId] = useState(null);

  /* OTP */
  const [otp,       setOtp]      = useState(["","","","","",""]);
  const [otpError,  setOtpError] = useState("");
  const [resending, setResending]= useState(false);
  const otpRefs = useRef([]);
  const { left: countdown, start: startCountdown } = useCountdown(120);

  /* Validate */
  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name  = "Name required";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!/^\d{10}$/.test(form.phone.replace(/\s/g,""))) e.phone = "10-digit number required";
    if (!form.course) e.course = "Please select a course";
    return e;
  };

  /* STEP 1 – submit */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true); setApiError("");
    try {
      const res = await submitEnquiry({
        formType: "demo",
        name:     form.name.trim(),
        phone:    form.phone.replace(/\D/g,""),
        course:   form.course,
        email:    form.email.trim() || undefined,
        message:  form.message.trim() || undefined,
      });
      setEnquiryId(res.enquiryId);
      setStep("otp");
      startCountdown(120);
      setTimeout(() => otpRefs.current[0]?.focus(), 100);
    } catch (err) {
      setApiError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* OTP box handlers */
  const handleOtpChange = (idx, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp]; next[idx] = val; setOtp(next); setOtpError("");
    if (val && idx < 5) otpRefs.current[idx+1]?.focus();
    if (val && idx === 5) { const full = [...next].join(""); if (full.length===6) handleVerify(full); }
  };
  const handleOtpKeyDown = (idx, e) => {
    if (e.key==="Backspace" && !otp[idx] && idx>0) otpRefs.current[idx-1]?.focus();
  };
  const handleOtpPaste = (e) => {
    const p = e.clipboardData.getData("text").replace(/\D/g,"").slice(0,6);
    if (p.length===6) { setOtp(p.split("")); handleVerify(p); }
    e.preventDefault();
  };

  /* STEP 2 – verify */
  const handleVerify = async (code) => {
    const pin = code || otp.join("");
    if (pin.length!==6) { setOtpError("Enter all 6 digits"); return; }
    setLoading(true); setOtpError("");
    try {
      await verifyOTP({ enquiryId, otp: pin });
      setStep("success");
    } catch (err) {
      setOtpError(err.message || "Invalid OTP");
      setOtp(["","","","","",""]);
      setTimeout(() => otpRefs.current[0]?.focus(), 50);
    } finally { setLoading(false); }
  };

  /* Resend */
  const handleResend = async () => {
    if (countdown>0 || resending) return;
    setResending(true); setOtpError("");
    try {
      await resendOTP({ enquiryId });
      startCountdown(120); setOtp(["","","","","",""]);
      setTimeout(() => otpRefs.current[0]?.focus(), 50);
    } catch (err) { setOtpError(err.message || "Could not resend OTP"); }
    finally { setResending(false); }
  };

  const chg = (field) => (ev) => {
    setForm((f) => ({ ...f, [field]: ev.target.value }));
    setErrors((er) => ({ ...er, [field]: undefined }));
    setApiError("");
  };

  /* ── FORM STEP ── */
  if (step === "form") return (
    <div className="bg-white border border-[#DDE5F8] rounded-[20px] p-7 shadow-[0_12px_40px_rgba(9,78,147,.07)] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[20px]"
        style={{ background:"linear-gradient(90deg,#094E93,#0A5FAD 50%,#F5A623)" }}/>

      {/* header */}
      <div className="flex items-center gap-[14px] mb-5 mt-1">
        <div className="w-[46px] h-[46px] rounded-[13px] flex items-center justify-center flex-shrink-0 shadow-[0_5px_16px_rgba(9,78,147,.28)]"
          style={{ background:"linear-gradient(135deg,#094E93,#0A5FAD)" }}>
          <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="white" strokeWidth={2}>
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
            <line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="13" y2="11"/>
          </svg>
        </div>
        <div className="flex-1">
          <h2 className="text-[18px] font-extrabold text-[#0D1E42] tracking-[-0.02em]">Book Your Free Demo</h2>
          <p className="text-[12px] text-[#5A6A8A] font-medium mt-[2px]">
            Fill in — our counsellor will call within <strong className="text-[#094E93]">24 hours.</strong>
          </p>
        </div>
        <div className="bg-[#F7F9FF] border border-[#DDE5F8] rounded-[10px] px-[10px] py-[6px] text-center flex-shrink-0">
          <div className="text-[14px] font-black text-[#094E93] leading-none">24h</div>
          <div className="text-[8.5px] font-bold text-[#5A6A8A] uppercase tracking-[.06em] mt-[2px]">callback</div>
        </div>
      </div>
      <div className="h-px bg-[#DDE5F8] mb-5"/>

      {apiError && (
        <div className="bg-red-50 border border-red-200 rounded-[10px] p-3 mb-4 text-[13px] text-red-600">{apiError}</div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-[11px] mb-4">
          {/* Name */}
          <div>
            <div className="relative">
              <FieldIcon><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></FieldIcon>
              <input className={`${inputCls} ${errors.name?"border-red-400":""}`} type="text" placeholder="Your Full Name" value={form.name} onChange={chg("name")}/>
            </div>
            {errors.name && <p className="text-[11.5px] text-red-500 mt-1 pl-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <div className="relative">
              <FieldIcon><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></FieldIcon>
              <input className={`${inputCls} ${errors.email?"border-red-400":""}`} type="email" placeholder="Your Email Address" value={form.email} onChange={chg("email")}/>
            </div>
            {errors.email && <p className="text-[11.5px] text-red-500 mt-1 pl-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <div className="grid grid-cols-[88px_1fr] gap-2">
              <select
                className="bg-[#F7F9FF] border border-[#DDE5F8] rounded-[10px] px-3 py-3 text-[14px] font-medium text-[#0D1E42] outline-none cursor-pointer appearance-none focus:border-[#094E93] hover:border-[#C5D3E8] transition-all duration-[180ms]"
                style={{fontFamily:"inherit"}}
                value={form.countryCode}
                onChange={chg("countryCode")}
              >
                <option>+91 IN</option><option>+1 US</option><option>+44 UK</option><option>+971 UAE</option>
              </select>
              <div className="relative">
                <FieldIcon><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07"/></FieldIcon>
                <input className={`${inputCls} ${errors.phone?"border-red-400":""}`} type="tel" placeholder="Mobile Number" value={form.phone} onChange={chg("phone")} maxLength={10} inputMode="numeric"/>
              </div>
            </div>
            {errors.phone && <p className="text-[11.5px] text-red-500 mt-1 pl-1">{errors.phone}</p>}
          </div>

          {/* Course */}
          <div>
            <div className="relative">
              <FieldIcon><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></FieldIcon>
              <select
                className={`${inputCls} cursor-pointer appearance-none ${errors.course?"border-red-400":""}`}
                style={{ backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='%23B0BCCC' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat:"no-repeat", backgroundPosition:"calc(100% - 12px) center", fontFamily:"inherit" }}
                value={form.course} onChange={chg("course")}
              >
                <option value="" disabled>Select a Course</option>
                {COURSES.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            {errors.course && <p className="text-[11.5px] text-red-500 mt-1 pl-1">{errors.course}</p>}
          </div>

          {/* Message */}
          <div className="relative">
            <FieldIcon top><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></FieldIcon>
            <textarea className={`${inputCls} resize-none leading-[1.6] h-[86px]`} placeholder="Your message or query (optional)…" value={form.message} onChange={chg("message")}/>
          </div>
        </div>

        <button type="submit" disabled={loading}
          className="w-full flex items-center justify-center gap-[9px] text-white rounded-[11px] py-[14px] text-[14.5px] font-extrabold border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(9,78,147,.38)] disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ background:"linear-gradient(135deg,#094E93,#0A5FAD)", boxShadow:"0 7px 20px rgba(9,78,147,.28)", fontFamily:"inherit" }}>
          {loading ? (
            <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/>Sending OTP…</>
          ) : (
            <><svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="white" strokeWidth={2.5}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>Book Free Demo Class</>
          )}
        </button>
      </form>

      <div className="flex items-center justify-center gap-[5px] mt-[11px] text-[11.5px] text-[#B0BCCC] font-medium">
        <svg viewBox="0 0 24 24" className="w-[13px] h-[13px]" fill="none" stroke="#B0BCCC" strokeWidth={2}>
          <rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/>
        </svg>
        Your details are safe. No spam, ever.
      </div>
    </div>
  );

  /* ── OTP STEP ── */
  if (step === "otp") return (
    <div className="bg-white border border-[#DDE5F8] rounded-[20px] p-7 shadow-[0_12px_40px_rgba(9,78,147,.07)] flex flex-col items-center text-center">
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[20px]"
        style={{ background:"linear-gradient(90deg,#094E93,#0A5FAD 50%,#F5A623)", position:"relative", height:3, borderRadius:"20px 20px 0 0", margin:"-28px -28px 24px" }}/>

      <div className="text-4xl mb-3">📱</div>
      <h2 className="text-[18px] font-extrabold text-[#0D1E42] mb-1">Verify Your Number</h2>
      <p className="text-[13px] text-[#5A6A8A] mb-6 leading-relaxed">
        We sent a 6-digit OTP to<br/>
        <strong className="text-[#0D1E42]">WhatsApp +91 {form.phone}</strong>
        {form.email && <><br/><span className="text-[12px]">and <strong>{form.email}</strong></span></>}
      </p>

      {/* 6-box OTP */}
      <div className="flex gap-3 mb-2" onPaste={handleOtpPaste}>
        {otp.map((d, i) => (
          <input key={i} ref={(el) => (otpRefs.current[i]=el)}
            type="text" inputMode="numeric" maxLength={1} value={d}
            onChange={(e) => handleOtpChange(i, e.target.value)}
            onKeyDown={(e) => handleOtpKeyDown(i, e)}
            className={`w-11 h-14 border-2 rounded-[12px] text-center text-[22px] font-black text-[#0D1E42] outline-none transition-all duration-150 font-mono
              ${otpError ? "border-red-400 bg-red-50" : "border-[#DDE5F8] bg-[#F7F9FF] focus:border-[#094E93] focus:bg-white focus:shadow-[0_0_0_3px_rgba(9,78,147,.08)]"}`}
          />
        ))}
      </div>

      {otpError && <p className="text-[12px] text-red-500 mb-3">{otpError}</p>}

      <button
        disabled={loading || otp.join("").length!==6}
        onClick={() => handleVerify()}
        className="w-full flex items-center justify-center gap-2 text-white rounded-[11px] py-[13px] text-[14.5px] font-extrabold border-none cursor-pointer mt-3 mb-3 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background:"linear-gradient(135deg,#094E93,#0A5FAD)", boxShadow:"0 7px 20px rgba(9,78,147,.28)", fontFamily:"inherit" }}
      >
        {loading
          ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/>Verifying…</>
          : "Verify & Confirm"}
      </button>

      <p className="text-[12.5px] text-[#5A6A8A] mb-2">
        {countdown > 0
          ? <>Resend in <strong>{Math.floor(countdown/60)}:{String(countdown%60).padStart(2,"0")}</strong></>
          : <button onClick={handleResend} disabled={resending}
              className="text-[#094E93] font-bold underline bg-none border-none cursor-pointer text-[12.5px]">
              {resending ? "Resending…" : "Resend OTP"}
            </button>
        }
      </p>
      <button onClick={() => { setStep("form"); setOtp(["","","","","",""]); setOtpError(""); }}
        className="text-[12px] text-[#94a3b8] bg-none border-none cursor-pointer hover:text-[#475569]">
        ← Change number
      </button>
    </div>
  );

  /* ── SUCCESS STEP ── */
  return (
    <div className="bg-white border border-[#DDE5F8] rounded-[20px] p-10 shadow-[0_12px_40px_rgba(9,78,147,.07)] flex flex-col items-center text-center">
      <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center mb-5"
        style={{ background:"linear-gradient(135deg,#073E75,#0A5FAD)", boxShadow:"0 0 0 12px rgba(9,78,147,.08), 0 8px 24px rgba(9,78,147,.3)" }}>
        <span className="text-[30px] text-white font-black">✓</span>
      </div>
      <h2 className="text-[20px] font-black text-[#094E93] mb-2">You're All Set!</h2>
      <p className="text-[13px] text-[#475569] leading-relaxed mb-5">
        Hi <strong>{form.name}</strong>, your demo class for <strong>{form.course}</strong> is booked.
        Our counsellor will call within <strong>24 hours</strong>.
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {["📞 Call Scheduled","💬 WhatsApp Sent", ...(form.email?["✉️ Email Sent"]:[])].map((c) => (
          <span key={c} className="text-[12px] font-semibold text-[#094E93] bg-[#EBF1FF] rounded-[8px] px-3 py-[5px]">{c}</span>
        ))}
      </div>
    </div>
  );
}

/* ── Branches, Hours, Rating — unchanged ── */
const BRANCHES = [
  { type:"Branch Office",     tag:"Branch",     tagBg:"#F3EEFF", tagColor:"#7C3AED", addr:"Nirman Vihar, East Delhi – 110092",                        phone:"+91 99991 99651", tel:"tel:+919999199651" },
];
function BranchCard() {
  return (
    <div className="bg-white border border-[#DDE5F8] rounded-[20px] p-7 shadow-[0_12px_40px_rgba(9,78,147,.07)]">
      <SLabel>Our Locations</SLabel>
      <div className="flex flex-col gap-2">
        {BRANCHES.map((b) => (
          <div key={b.type} className="flex items-start gap-3 p-[13px] rounded-[12px] bg-[#F7F9FF] border border-[#DDE5F8] transition-all duration-200 cursor-default hover:border-[rgba(9,78,147,.2)] hover:bg-[#EBF1FF66] hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(9,78,147,.07)]">
            <div className="w-9 h-9 rounded-[9px] bg-[#EBF1FF] text-[#094E93] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-[7px] flex-wrap mb-1">
                <span className="text-[13px] font-extrabold text-[#0D1E42]">{b.type}</span>
                <span className="text-[9.5px] font-bold px-2 py-[2px] rounded-full" style={{ background:b.tagBg, color:b.tagColor }}>{b.tag}</span>
              </div>
              <div className="flex items-start gap-[5px] text-[12px] text-[#5A6A8A] font-medium leading-[1.5] mb-1">
                <svg viewBox="0 0 24 24" className="w-3 h-3 flex-shrink-0 mt-[2px]" fill="none" stroke="#5A6A8A" strokeWidth={2}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {b.addr}
              </div>
              <div className="flex items-center gap-[5px] text-[12.5px] font-bold text-[#094E93]">
                <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="#094E93" strokeWidth={2}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07"/></svg>
                <a href={b.tel} className="hover:underline">{b.phone}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const HOURS   = [{ day:"Mon – Fri",time:"9 AM – 7 PM" },{ day:"Saturday",time:"9 AM – 5 PM" },{ day:"Sunday",time:"Closed",closed:true }];
const SOCIALS = [{ label:"YouTube",abbr:"Y",bg:"#FEE2E2",color:"#DC2626" },{ label:"Instagram",abbr:"Ig",bg:"#FFF0F6",color:"#DB2777" },{ label:"LinkedIn",abbr:"in",bg:"#EBF1FF",color:"#094E93" },{ label:"Facebook",abbr:"f",bg:"#EEF2FF",color:"#1D4ED8" }];

function HoursSocialCard() {
  return (
    <div className="bg-white border border-[#DDE5F8] rounded-[20px] p-7 shadow-[0_12px_40px_rgba(9,78,147,.07)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
        <div className="sm:pr-4 sm:border-r sm:border-[#DDE5F8] pb-4 sm:pb-0 border-b border-[#DDE5F8] sm:border-b-0">
          <SLabel>Office Hours</SLabel>
          {HOURS.map((h) => (
            <div key={h.day} className="flex justify-between items-center py-[7px] border-b border-[#F0F4FF] last:border-b-0">
              <span className="text-[12.5px] font-medium text-[#5A6A8A]">{h.day}</span>
              <span className={`text-[12.5px] font-bold ${h.closed?"text-red-600":"text-[#0D1E42]"}`}>{h.time}</span>
            </div>
          ))}
        </div>
        <div className="sm:pl-4 pt-4 sm:pt-0">
          <SLabel>Follow Us</SLabel>
          {SOCIALS.map((s) => (
            <div key={s.label} className="flex items-center gap-[9px] mb-2 last:mb-0 cursor-pointer group">
              <div className="w-7 h-7 rounded-[7px] flex items-center justify-center text-[11.5px] font-black flex-shrink-0 transition-transform duration-150 group-hover:scale-[1.08]"
                style={{ background:s.bg, color:s.color }}>{s.abbr}</div>
              <span className="text-[13px] font-semibold text-[#5A6A8A] transition-colors duration-150 group-hover:text-[#0D1E42]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RatingCard() {
  return (
    <div className="bg-white border border-[#DDE5F8] rounded-[20px] px-6 py-5 shadow-[0_12px_40px_rgba(9,78,147,.07)]">
      <div className="flex items-center justify-between flex-wrap gap-[14px]">
        <div>
          <div className="flex items-center gap-[3px] mb-[3px]">
            {[...Array(5)].map((_,i) => (
              <svg key={i} viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-[#F5A623]">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
            <span className="text-[15px] font-black text-[#0D1E42] ml-1">4.9</span>
          </div>
          <div className="text-[11.5px] text-[#5A6A8A] font-medium">Google Rating · 2,800+ reviews</div>
        </div>
        <div className="flex items-center gap-5">
          {[["20K+","Students"],["94%","Placed"],["125+","Courses"]].map(([n,l]) => (
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

export default function MainGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 mb-14">
      <FormCard />
      <div className="flex flex-col gap-[18px]">
        <BranchCard />
        <HoursSocialCard />
        <RatingCard />
      </div>
    </div>
  );
}