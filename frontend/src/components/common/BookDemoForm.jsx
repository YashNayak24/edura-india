// BookDemoForm.jsx — Standalone "Book Free Demo" form with OTP verification
import { useState, useRef, useEffect } from "react";
import { submitEnquiry, verifyOTP, resendOTP } from "../../api/enquiry";

/* ── shared ─────────────────────────────── */
const inputCls =
  "w-full bg-[#F7F9FF] border border-[#DDE5F8] rounded-[10px] pl-10 pr-3 py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-medium text-[#0D1E42] outline-none transition-all duration-[180ms] placeholder:text-[#B0BCCC] placeholder:font-normal focus:border-[#094E93] focus:bg-white focus:shadow-[0_0_0_3.5px_rgba(9,78,147,.08)] hover:border-[#C5D3E8]";

function FieldIcon({ children, top = false }) {
  return (
    <span className={`absolute left-[13px] ${top ? "top-[12px] sm:top-[14px]" : "top-1/2 -translate-y-1/2"} pointer-events-none`}>
      <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] sm:w-[17px] sm:h-[17px]" fill="none" stroke="#CBD5E1" strokeWidth={2}>
        {children}
      </svg>
    </span>
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
      setLeft((p) => {
        if (p <= 1) { clearInterval(ref.current); return 0; }
        return p - 1;
      });
    }, 1000);
  };
  useEffect(() => () => clearInterval(ref.current), []);
  return { left, start };
}

const COURSES = [
  "Basic Computer Course", "Advanced Computer Course", "Graphic Designing",
  "Video Editing", "Digital Marketing", "Stock Market Trading", "Data Analyst",
  "Web Design & Development", "C / C++ / Java / Python",
];

/* ────────────────────────────────────────────────────────────────────────────
   BookDemoForm — exported default
───────────────────────────────────────────────────────────────────────────── */
export default function BookDemoForm({formHead}) {
  const [step,      setStep]      = useState("form");
  const [form,      setForm]      = useState({ name: "", email: "", phone: "", course: "", message: "" });
  const [errors,    setErrors]    = useState({});
  const [loading,   setLoading]   = useState(false);
  const [apiError,  setApiError]  = useState("");
  const [enquiryId, setEnquiryId] = useState(null);

  /* OTP */
  const [otp,       setOtp]       = useState(["", "", "", "", "", ""]);
  const [otpError,  setOtpError]  = useState("");
  const [resending, setResending] = useState(false);
  const otpRefs = useRef([]);
  const { left: countdown, start: startCountdown } = useCountdown(120);

  /* Validate */
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name required";
    if (!form.email.trim()) {
      e.email = "Email required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = "Invalid email";
    }
    if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "10-digit number required";
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
        phone:    form.phone.replace(/\D/g, ""),
        course:   form.course,
        email:    form.email.trim(),
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
    if (val && idx < 5) otpRefs.current[idx + 1]?.focus();
    if (val && idx === 5) { const full = [...next].join(""); if (full.length === 6) handleVerify(full); }
  };
  const handleOtpKeyDown = (idx, e) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) otpRefs.current[idx - 1]?.focus();
  };
  const handleOtpPaste = (e) => {
    const p = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (p.length === 6) { setOtp(p.split("")); handleVerify(p); }
    e.preventDefault();
  };

  /* STEP 2 – verify */
  const handleVerify = async (code) => {
    const pin = code || otp.join("");
    if (pin.length !== 6) { setOtpError("Enter all 6 digits"); return; }
    setLoading(true); setOtpError("");
    try {
      await verifyOTP({ enquiryId, otp: pin });
      setStep("success");
    } catch (err) {
      setOtpError(err.message || "Invalid OTP");
      setOtp(["", "", "", "", "", ""]);
      setTimeout(() => otpRefs.current[0]?.focus(), 50);
    } finally { setLoading(false); }
  };

  /* Resend */
  const handleResend = async () => {
    if (countdown > 0 || resending) return;
    setResending(true); setOtpError("");
    try {
      await resendOTP({ enquiryId });
      startCountdown(120); setOtp(["", "", "", "", "", ""]);
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
    <div className="bg-white border border-[#DDE5F8] rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 md:p-7 shadow-[0_12px_40px_rgba(9,78,147,.07)] relative overflow-hidden w-full">
      {/* Top gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[16px] sm:rounded-t-[20px]"
        style={{ background: "linear-gradient(90deg,#094E93,#0A5FAD 50%,#F5A623)" }} />

      {/* Header */}
      <div className="flex items-start sm:items-center gap-3 sm:gap-[14px] mb-4 sm:mb-5 mt-1">
        <div className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] rounded-[11px] sm:rounded-[13px] flex items-center justify-center flex-shrink-0 shadow-[0_5px_16px_rgba(9,78,147,.28)]"
          style={{ background: "linear-gradient(135deg,#094E93,#0A5FAD)" }}>
          <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]" fill="none" stroke="white" strokeWidth={2}>
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
            <line x1="9" y1="7" x2="15" y2="7" /><line x1="9" y1="11" x2="13" y2="11" />
          </svg>
        </div>
        <div className="flex-1 min-w0">
          <h2 className="text-[16px] sm:text-[18px] font-extrabold text-[#0D1E42] tracking-[-0.02em] leading-tight">{formHead || "Book Your Free Demo"}</h2>
          <p className="text-[11px] sm:text-[12px] text-[#5A6A8A] font-medium mt-[2px]">
            Fill in — our counsellor will call within <strong className="text-[#094E93]">24 hours.</strong>
          </p>
        </div>
        <div className="bg-[#F7F9FF] border border-[#DDE5F8] rounded-[8px] sm:rounded-[10px] px-[8px] sm:px-[10px] py-[5px] sm:py-[6px] text-center flex-shrink-0">
          <div className="text-[13px] sm:text-[14px] font-black text-[#094E93] leading-none">24h</div>
          <div className="text-[8px] sm:text-[8.5px] font-bold text-[#5A6A8A] uppercase tracking-[.06em] mt-[2px]">callback</div>
        </div>
      </div>

      <div className="h-px bg-[#DDE5F8] mb-4 sm:mb-5" />

      {apiError && (
        <div className="bg-red-50 border border-red-200 rounded-[10px] p-3 mb-4 text-[12px] sm:text-[13px] text-red-600">{apiError}</div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-[10px] sm:gap-[11px] mb-4">

          {/* Name */}
          <div>
            <div className="relative">
              <FieldIcon><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></FieldIcon>
              <input className={`${inputCls} ${errors.name ? "border-red-400" : ""}`} type="text" placeholder="Your Full Name" value={form.name} onChange={chg("name")} />
            </div>
            {errors.name && <p className="text-[11px] sm:text-[11.5px] text-red-500 mt-1 pl-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <div className="relative">
              <FieldIcon><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></FieldIcon>
              <input className={`${inputCls} ${errors.email ? "border-red-400" : ""}`} type="email" placeholder="Your Email Address" value={form.email} onChange={chg("email")} />
            </div>
            {errors.email && <p className="text-[11px] sm:text-[11.5px] text-red-500 mt-1 pl-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <div className="grid grid-cols-[76px_1fr] sm:grid-cols-[88px_1fr] gap-2">
              <div className="bg-[#F7F9FF] border border-[#DDE5F8] rounded-[10px] px-2 sm:px-3 py-2.5 sm:py-3 text-[12px] sm:text-[14px] font-medium text-[#0D1E42] flex items-center justify-center select-none whitespace-nowrap">
                +91 IN
              </div>
              <div className="relative">
                <FieldIcon><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07" /></FieldIcon>
                <input className={`${inputCls} ${errors.phone ? "border-red-400" : ""}`} type="tel" placeholder="Mobile Number" value={form.phone} onChange={chg("phone")} maxLength={10} inputMode="numeric" />
              </div>
            </div>
            {errors.phone && <p className="text-[11px] sm:text-[11.5px] text-red-500 mt-1 pl-1">{errors.phone}</p>}
          </div>

          {/* Course */}
          <div>
            <div className="relative">
              <FieldIcon><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></FieldIcon>
              <select
                className={`${inputCls} cursor-pointer appearance-none ${errors.course ? "border-red-400" : ""}`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='%23B0BCCC' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "calc(100% - 12px) center",
                  fontFamily: "inherit"
                }}
                value={form.course} onChange={chg("course")}
              >
                <option value="" disabled>Select a Course</option>
                {COURSES.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            {errors.course && <p className="text-[11px] sm:text-[11.5px] text-red-500 mt-1 pl-1">{errors.course}</p>}
          </div>

          {/* Message */}
          <div className="relative">
            <FieldIcon top><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></FieldIcon>
            <textarea
              className={`${inputCls} resize-none leading-[1.6] h-[76px] sm:h-[86px]`}
              placeholder="Your message or query (optional)…"
              value={form.message}
              onChange={chg("message")}
            />
          </div>
        </div>

        <button type="submit" disabled={loading}
          className="w-full flex items-center justify-center gap-2 sm:gap-[9px] text-white rounded-[10px] sm:rounded-[11px] py-[12px] sm:py-[14px] text-[13.5px] sm:text-[14.5px] font-extrabold border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(9,78,147,.38)] active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ background: "linear-gradient(135deg,#094E93,#0A5FAD)", boxShadow: "0 7px 20px rgba(9,78,147,.28)", fontFamily: "inherit" }}>
          {loading ? (
            <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending OTP…</>
          ) : (
            <><svg viewBox="0 0 24 24" className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" fill="none" stroke="white" strokeWidth={2.5}><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>{formHead || "Book Your Free Demo"}</>
          )}
        </button>
      </form>

      <div className="flex items-center justify-center gap-[5px] mt-[10px] sm:mt-[11px] text-[11px] sm:text-[11.5px] text-[#B0BCCC] font-medium">
        <svg viewBox="0 0 24 24" className="w-[12px] h-[12px] sm:w-[13px] sm:h-[13px]" fill="none" stroke="#B0BCCC" strokeWidth={2}>
          <rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 018 0v4" />
        </svg>
        Your details are safe. No spam, ever.
      </div>
    </div>
  );

  /* ── OTP STEP ── */
  if (step === "otp") return (
    <div className="bg-white border border-[#DDE5F8] rounded-[16px] sm:rounded-[20px] p-5 sm:p-7 shadow-[0_12px_40px_rgba(9,78,147,.07)] flex flex-col items-center text-center w-full relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[16px] sm:rounded-t-[20px]"
        style={{ background: "linear-gradient(90deg,#094E93,#0A5FAD 50%,#F5A623)" }} />

      <div className="text-[32px] sm:text-4xl mb-2 sm:mb-3 mt-2">📱</div>
      <h2 className="text-[16px] sm:text-[18px] font-extrabold text-[#0D1E42] mb-1">Verify Your Number</h2>
      <p className="text-[12px] sm:text-[13px] text-[#5A6A8A] mb-5 sm:mb-6 leading-relaxed">
        We sent a 6-digit OTP to<br />
        <strong className="text-[#0D1E42]"> {form.email}</strong>
        
      </p>

      {/* 6-box OTP — responsive sizing */}
      <div className="flex gap-1.5 sm:gap-3 mb-2 w-full justify-center" onPaste={handleOtpPaste}>
        {otp.map((d, i) => (
          <input key={i} ref={(el) => (otpRefs.current[i] = el)}
            type="text" inputMode="numeric" maxLength={1} value={d}
            onChange={(e) => handleOtpChange(i, e.target.value)}
            onKeyDown={(e) => handleOtpKeyDown(i, e)}
            className={`w-9 h-11 sm:w-11 sm:h-14 border-2 rounded-[10px] sm:rounded-[12px] text-center text-[18px] sm:text-[22px] font-black text-[#0D1E42] outline-none transition-all duration-150 font-mono
              ${otpError ? "border-red-400 bg-red-50" : "border-[#DDE5F8] bg-[#F7F9FF] focus:border-[#094E93] focus:bg-white focus:shadow-[0_0_0_3px_rgba(9,78,147,.08)]"}`}
          />
        ))}
      </div>

      {otpError && <p className="text-[11.5px] sm:text-[12px] text-red-500 mb-3">{otpError}</p>}

      <button
        disabled={loading || otp.join("").length !== 6}
        onClick={() => handleVerify()}
        className="w-full flex items-center justify-center gap-2 text-white rounded-[10px] sm:rounded-[11px] py-[12px] sm:py-[13px] text-[13.5px] sm:text-[14.5px] font-extrabold border-none cursor-pointer mt-3 mb-3 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: "linear-gradient(135deg,#094E93,#0A5FAD)", boxShadow: "0 7px 20px rgba(9,78,147,.28)", fontFamily: "inherit" }}
      >
        {loading
          ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Verifying…</>
          : "Verify & Confirm"}
      </button>

      <p className="text-[12px] sm:text-[12.5px] text-[#5A6A8A] mb-2">
        {countdown > 0
          ? <>Resend in <strong>{Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, "0")}</strong></>
          : <button onClick={handleResend} disabled={resending}
            className="text-[#094E93] font-bold underline bg-none border-none cursor-pointer text-[12px] sm:text-[12.5px]">
            {resending ? "Resending…" : "Resend OTP"}
          </button>
        }
      </p>
      <button onClick={() => { setStep("form"); setOtp(["", "", "", "", "", ""]); setOtpError(""); }}
        className="text-[11.5px] sm:text-[12px] text-[#94a3b8] bg-none border-none cursor-pointer hover:text-[#475569]">
        ← Change number
      </button>
    </div>
  );

  /* ── SUCCESS STEP ── */
  return (
    <div className="bg-white border border-[#DDE5F8] rounded-[16px] sm:rounded-[20px] p-6 sm:p-10 shadow-[0_12px_40px_rgba(9,78,147,.07)] flex flex-col items-center text-center w-full">
      <div className="w-[58px] h-[58px] sm:w-[72px] sm:h-[72px] rounded-full flex items-center justify-center mb-4 sm:mb-5"
        style={{ background: "linear-gradient(135deg,#073E75,#0A5FAD)", boxShadow: "0 0 0 10px rgba(9,78,147,.08), 0 8px 24px rgba(9,78,147,.3)" }}>
        <span className="text-[24px] sm:text-[30px] text-white font-black">✓</span>
      </div>
      <h2 className="text-[18px] sm:text-[20px] font-black text-[#094E93] mb-2">You're All Set!</h2>
      <p className="text-[12px] sm:text-[13px] text-[#475569] leading-relaxed mb-4 sm:mb-5">
        Hi <strong>{form.name}</strong>, your demo class for <strong>{form.course}</strong> is booked.
        Our counsellor will call within <strong>24 hours</strong>.
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {["📞 Call Scheduled", "💬 WhatsApp Sent", "✉️ Email Sent"].map((c) => (
          <span key={c} className="text-[11px] sm:text-[12px] font-semibold text-[#094E93] bg-[#EBF1FF] rounded-[7px] sm:rounded-[8px] px-2.5 sm:px-3 py-[4px] sm:py-[5px]">{c}</span>
        ))}
      </div>
    </div>
  );
}