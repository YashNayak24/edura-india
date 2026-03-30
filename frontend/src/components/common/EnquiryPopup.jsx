// /* ─────────────────────────────────────────────────────────────
//    EnquiryPopup.jsx  —  Props-controlled + OTP-verified backend

//    Usage:
//      const [showPopup, setShowPopup] = useState(false);
//      <button onClick={() => setShowPopup(true)}>Enquiry Now</button>
//      <EnquiryPopup open={showPopup} onClose={() => setShowPopup(false)} />
//    ───────────────────────────────────────────────────────────── */

// import { useState, useEffect, useRef } from "react";
// import { submitEnquiry, verifyOTP, resendOTP } from "../../api/enquiry";

// const courses = [
//   "Digital Marketing","Graphic Design","AI Course","Data Analyst",
//   "Business Analyst","Computer Course","Video Editing","Web Development",
// ];

// const highlights = [
//   { icon: "🎯", text: "Industry-Relevant Curriculum" },
//   { icon: "🏆", text: "Placement Assistance" },
//   { icon: "👨‍💻", text: "Live Project Training" },
//   { icon: "📜", text: "Certified Programme" },
// ];

// // ── OTP countdown hook ───────────────────────────────────────────────────────
// function useCountdown(seconds) {
//   const [left, setLeft] = useState(0);
//   const ref             = useRef(null);

//   const start = (s = seconds) => {
//     setLeft(s);
//     clearInterval(ref.current);
//     ref.current = setInterval(() => {
//       setLeft((prev) => {
//         if (prev <= 1) { clearInterval(ref.current); return 0; }
//         return prev - 1;
//       });
//     }, 1000);
//   };

//   useEffect(() => () => clearInterval(ref.current), []);
//   return { left, start };
// }

// // ════════════════════════════════════════════════════════════════════════════
// export default function EnquiryPopup({ open = false, onClose }) {
//   const [visible,   setVisible]   = useState(false);
//   const [step,      setStep]      = useState("form");   // "form" | "otp" | "success"
//   const [form,      setForm]      = useState({ name: "", phone: "", course: "" });
//   const [errors,    setErrors]    = useState({});
//   const [loading,   setLoading]   = useState(false);
//   const [apiError,  setApiError]  = useState("");
//   const [enquiryId, setEnquiryId] = useState(null);

//   /* OTP state */
//   const [otp,      setOtp]      = useState(["","","","","",""]);
//   const [otpError, setOtpError] = useState("");
//   const [resending,setResending]= useState(false);
//   const otpInputs               = useRef([]);
//   const { left: countdown, start: startCountdown } = useCountdown(120); // 2-min resend lock

//   const overlayRef = useRef(null);

//   /* ── lifecycle ── */
//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = "hidden";
//       requestAnimationFrame(() => setVisible(true));
//     }
//   }, [open]);

//   const resetAll = () => {
//     setStep("form");
//     setForm({ name: "", phone: "", course: "" });
//     setErrors({});
//     setApiError("");
//     setEnquiryId(null);
//     setOtp(["","","","","",""]);
//     setOtpError("");
//     setLoading(false);
//   };

//   const handleClose = () => {
//     setVisible(false);
//     setTimeout(() => {
//       resetAll();
//       document.body.style.overflow = "";
//       onClose?.();
//     }, 350);
//   };

//   useEffect(() => {
//     const onKey = (e) => { if (e.key === "Escape" && open) handleClose(); };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [open]);

//   const handleOverlayClick = (e) => {
//     if (e.target === overlayRef.current) handleClose();
//   };

//   /* ── Form change ── */
//   const handleChange = (field) => (ev) => {
//     setForm((f) => ({ ...f, [field]: ev.target.value }));
//     setErrors((er) => ({ ...er, [field]: undefined }));
//     setApiError("");
//   };

//   /* ── Form validation ── */
//   const validate = () => {
//     const e = {};
//     if (!form.name.trim())                              e.name   = "Name is required";
//     if (!/^\d{10}$/.test(form.phone.replace(/\s/g,""))) e.phone  = "Enter valid 10-digit number";
//     if (!form.course)                                   e.course = "Please select a course";
//     return e;
//   };

//   /* ── STEP 1: Submit form → request OTP ── */
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     const errs = validate();
//     if (Object.keys(errs).length) { setErrors(errs); return; }

//     setLoading(true);
//     setApiError("");
//     try {
//       const res = await submitEnquiry({
//         formType: "popup",
//         name:     form.name.trim(),
//         phone:    form.phone.replace(/\D/g,""),
//         course:   form.course,
//       });
//       setEnquiryId(res.enquiryId);
//       setStep("otp");
//       startCountdown(120);
//       // Focus first OTP box
//       setTimeout(() => otpInputs.current[0]?.focus(), 120);
//     } catch (err) {
//       setApiError(err.message || "Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ── OTP box key handlers ── */
//   const handleOtpChange = (idx, val) => {
//     if (!/^\d?$/.test(val)) return;
//     const next = [...otp];
//     next[idx] = val;
//     setOtp(next);
//     setOtpError("");
//     if (val && idx < 5) otpInputs.current[idx + 1]?.focus();
//     // auto-submit when all 6 filled
//     if (val && idx === 5) {
//       const full = [...next].join("");
//       if (full.length === 6) handleOtpVerify(full);
//     }
//   };

//   const handleOtpKeyDown = (idx, e) => {
//     if (e.key === "Backspace" && !otp[idx] && idx > 0)
//       otpInputs.current[idx - 1]?.focus();
//   };

//   const handleOtpPaste = (e) => {
//     const pasted = e.clipboardData.getData("text").replace(/\D/g,"").slice(0,6);
//     if (pasted.length === 6) {
//       setOtp(pasted.split(""));
//       handleOtpVerify(pasted);
//     }
//     e.preventDefault();
//   };

//   /* ── STEP 2: Verify OTP ── */
//   const handleOtpVerify = async (code) => {
//     const pin = code || otp.join("");
//     if (pin.length !== 6) { setOtpError("Enter all 6 digits"); return; }

//     setLoading(true);
//     setOtpError("");
//     try {
//       await verifyOTP({ enquiryId, otp: pin });
//       setStep("success");
//     } catch (err) {
//       setOtpError(err.message || "Invalid OTP. Please try again.");
//       setOtp(["","","","","",""]);
//       setTimeout(() => otpInputs.current[0]?.focus(), 50);
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ── Resend OTP ── */
//   const handleResend = async () => {
//     if (countdown > 0 || resending) return;
//     setResending(true);
//     setOtpError("");
//     try {
//       await resendOTP({ enquiryId });
//       startCountdown(120);
//       setOtp(["","","","","",""]);
//       setTimeout(() => otpInputs.current[0]?.focus(), 50);
//     } catch (err) {
//       setOtpError(err.message || "Could not resend OTP");
//     } finally {
//       setResending(false);
//     }
//   };

//   if (!open) return null;

//   return (
//     <>
//       {/* ── OVERLAY ── */}
//       <div
//         ref={overlayRef}
//         onClick={handleOverlayClick}
//         role="dialog"
//         aria-modal="true"
//         aria-label="Enquiry Form"
//         className="ep-overlay"
//         style={{ opacity: visible ? 1 : 0 }}
//       >
//         {/* ── CARD ── */}
//         <div
//           className="ep-card"
//           style={{
//             transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
//             opacity:   visible ? 1 : 0,
//           }}
//         >
//           {/* Close */}
//           <button className="ep-close" onClick={handleClose} aria-label="Close popup">✕</button>

//           {/* ── LEFT PANEL ── */}
//           <div className="ep-left">
//             <span className="ep-blob ep-blob-1" />
//             <span className="ep-blob ep-blob-2" />
//             <span className="ep-blob ep-blob-3" />
//             <div className="ep-left-inner">
//               <div className="ep-brand-badge">
//                 <span className="ep-brand-dot" />EDURA Institute
//               </div>
//               <h2 className="ep-title">
//                 Start Your<br /><span className="ep-yellow">Career Journey</span><br />with Experts
//               </h2>
//               <p className="ep-sub">Talk to our counsellor — zero obligations, just clarity.</p>
//               <div className="ep-highlights">
//                 {highlights.map((h) => (
//                   <div key={h.text} className="ep-hl-row">
//                     <span className="ep-hl-icon">{h.icon}</span>
//                     <span className="ep-hl-text">{h.text}</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="ep-trust">🔒 100% Private &nbsp;·&nbsp; ⚡ Quick Response</div>
//             </div>
//           </div>

//           {/* ── RIGHT PANEL ── */}
//           <div className="ep-right">

//             {/* ════ FORM STEP ════ */}
//             {step === "form" && (
//               <>
//                 <h3 className="ep-form-heading">Talk To Our Advisor</h3>
//                 <p className="ep-form-sub">Our counsellor will call within <strong>24 hours.</strong></p>

//                 {apiError && <p className="ep-api-error">{apiError}</p>}

//                 <form onSubmit={handleFormSubmit} noValidate className="ep-form">
//                   {/* Name */}
//                   <div className="ep-field">
//                     <div className={`ep-input-wrap ${errors.name ? "ep-wrap-error" : ""}`}>
//                       <svg className="ep-field-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
//                         <circle cx="10" cy="7" r="3.5"/>
//                         <path d="M3 17c0-3.3 3.1-6 7-6s7 2.7 7 6" strokeLinecap="round"/>
//                       </svg>
//                       <input type="text" placeholder="Your Full Name" value={form.name}
//                         onChange={handleChange("name")} className="ep-bare-input" />
//                     </div>
//                     {errors.name && <p className="ep-error">{errors.name}</p>}
//                   </div>

//                   {/* Phone */}
//                   <div className="ep-field">
//                     <div className={`ep-input-wrap ${errors.phone ? "ep-wrap-error" : ""}`}>
//                       <span className="ep-phone-prefix">+91 IN</span>
//                       <div className="ep-prefix-divider" />
//                       <svg className="ep-field-icon ep-field-icon-phone" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
//                         <rect x="5" y="2" width="10" height="16" rx="2"/>
//                         <circle cx="10" cy="15" r="0.8" fill="currentColor"/>
//                       </svg>
//                       <input type="tel" placeholder="Mobile Number" value={form.phone}
//                         onChange={handleChange("phone")} className="ep-bare-input"
//                         maxLength={10} inputMode="numeric" />
//                     </div>
//                     {errors.phone && <p className="ep-error">{errors.phone}</p>}
//                   </div>

//                   {/* Course */}
//                   <div className="ep-field">
//                     <div className={`ep-input-wrap ${errors.course ? "ep-wrap-error" : ""}`}>
//                       <svg className="ep-field-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
//                         <rect x="3" y="3" width="14" height="14" rx="2"/>
//                         <path d="M7 7h6M7 10h6M7 13h4" strokeLinecap="round"/>
//                       </svg>
//                       <select value={form.course} onChange={handleChange("course")}
//                         className="ep-bare-input ep-bare-select">
//                         <option value="">Select a Course</option>
//                         {courses.map((c) => <option key={c}>{c}</option>)}
//                       </select>
//                       <svg className="ep-chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
//                         <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     </div>
//                     {errors.course && <p className="ep-error">{errors.course}</p>}
//                   </div>

//                   <button type="submit" disabled={loading} className="ep-submit-btn">
//                     {loading ? (
//                       <span className="ep-spinner-row"><span className="ep-spinner" /> Sending OTP…</span>
//                     ) : (
//                       <>
//                         <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ marginRight:8, flexShrink:0 }}>
//                           <path d="M3 10h14M10 3l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                         <span>Enquiry Now!</span>
//                         <span className="ep-shine" />
//                       </>
//                     )}
//                   </button>
//                 </form>

//                 <p className="ep-safe-note">🔒 Your details are safe. No spam, ever.</p>
//               </>
//             )}

//             {/* ════ OTP STEP ════ */}
//             {step === "otp" && (
//               <div className="ep-otp-wrap">
//                 <div className="ep-otp-icon">📱</div>
//                 <h3 className="ep-form-heading" style={{ textAlign:"center" }}>Verify Your Number</h3>
//                 <p className="ep-form-sub" style={{ textAlign:"center" }}>
//                   We sent a 6-digit OTP to<br />
//                   <strong>WhatsApp +91 {form.phone}</strong>
//                 </p>

//                 {/* 6-box OTP input */}
//                 <div className="ep-otp-boxes" onPaste={handleOtpPaste}>
//                   {otp.map((digit, idx) => (
//                     <input
//                       key={idx}
//                       ref={(el) => (otpInputs.current[idx] = el)}
//                       className={`ep-otp-box ${otpError ? "ep-otp-box-err" : ""}`}
//                       type="text"
//                       inputMode="numeric"
//                       maxLength={1}
//                       value={digit}
//                       onChange={(e) => handleOtpChange(idx, e.target.value)}
//                       onKeyDown={(e) => handleOtpKeyDown(idx, e)}
//                     />
//                   ))}
//                 </div>

//                 {otpError && <p className="ep-error" style={{ textAlign:"center", marginTop:6 }}>{otpError}</p>}

//                 <button
//                   className="ep-submit-btn"
//                   style={{ marginTop:18 }}
//                   disabled={loading || otp.join("").length !== 6}
//                   onClick={() => handleOtpVerify()}
//                 >
//                   {loading ? (
//                     <span className="ep-spinner-row"><span className="ep-spinner" /> Verifying…</span>
//                   ) : (
//                     <><span>Verify OTP</span><span className="ep-shine" /></>
//                   )}
//                 </button>

//                 {/* Resend */}
//                 <p className="ep-resend-note">
//                   {countdown > 0 ? (
//                     <>Resend in <strong>{Math.floor(countdown/60)}:{String(countdown%60).padStart(2,"0")}</strong></>
//                   ) : (
//                     <button
//                       className="ep-resend-btn"
//                       onClick={handleResend}
//                       disabled={resending}
//                     >
//                       {resending ? "Resending…" : "Resend OTP"}
//                     </button>
//                   )}
//                 </p>

//                 <button
//                   className="ep-back-btn"
//                   onClick={() => { setStep("form"); setOtp(["","","","","",""]); setOtpError(""); }}
//                 >
//                   ← Change number
//                 </button>
//               </div>
//             )}

//             {/* ════ SUCCESS STEP ════ */}
//             {step === "success" && (
//               <div className="ep-success">
//                 <div className="ep-success-ring">
//                   <span className="ep-success-check">✓</span>
//                 </div>
//                 <h3 className="ep-success-title">You're All Set!</h3>
//                 <p className="ep-success-msg">
//                   Hi <strong>{form.name}</strong>, our counsellor will call you within <strong>24 hours</strong>.
//                 </p>
//                 <div className="ep-success-chips">
//                   <span className="ep-schip">📞 Call Scheduled</span>
//                   <span className="ep-schip">✉️ Confirmation Sent</span>
//                   <span className="ep-schip">💬 WhatsApp Sent</span>
//                 </div>
//                 <button className="ep-done-btn" onClick={handleClose}>Close ✕</button>
//               </div>
//             )}

//           </div>{/* end right */}
//         </div>{/* end card */}
//       </div>{/* end overlay */}

//       {/* ── STYLES ── */}
//       <style>{`
//         .ep-overlay {
//           position: fixed; inset: 0; z-index: 9999;
//           display: flex; align-items: center; justify-content: center; padding: 16px;
//           background: rgba(4,14,38,0.78);
//           backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
//           transition: opacity 0.35s ease;
//         }
//         .ep-card {
//           position: relative; width: 100%; max-width: 820px;
//           border-radius: 24px; overflow: hidden; background: #fff;
//           box-shadow: 0 32px 96px rgba(9,78,147,0.28), 0 0 0 1px rgba(9,78,147,0.07);
//           transition: transform 0.42s cubic-bezier(.22,1,.36,1), opacity 0.35s ease;
//           display: flex; flex-direction: row;
//         }
//         /* LEFT */
//         .ep-left {
//           position: relative; width: 42%; flex-shrink: 0;
//           background: linear-gradient(145deg, #073E75 0%, #094E93 50%, #0A5FAD 100%);
//           overflow: hidden; padding: 36px 28px;
//           display: flex; align-items: center;
//         }
//         .ep-left-inner { position: relative; z-index: 1; width: 100%; }
//         .ep-blob { position: absolute; border-radius: 50%; background: rgba(255,255,255,0.07); pointer-events: none; animation: ep-float 4s ease-in-out infinite; }
//         .ep-blob-1 { width:220px; height:220px; top:-90px; right:-70px; }
//         .ep-blob-2 { width:130px; height:130px; bottom:-60px; left:-40px; animation-delay:-2s; }
//         .ep-blob-3 { width:90px; height:90px; top:55%; right:10px; opacity:.4; animation-delay:-4s; }
//         @keyframes ep-float { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-14px) scale(1.05); } }
//         .ep-brand-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.13); border: 1px solid rgba(255,255,255,0.22); color: #dbeafe; font-size: 11px; font-weight: 700; padding: 5px 12px; border-radius: 999px; letter-spacing: 0.06em; margin-bottom: 18px; }
//         .ep-brand-dot { width: 7px; height: 7px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 7px #4ade80; flex-shrink: 0; animation: ep-glow 1.5s ease-in-out infinite; }
//         @keyframes ep-glow { 0%,100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.5); } 50% { box-shadow: 0 0 0 6px rgba(74,222,128,0); } }
//         .ep-title { font-size: 26px; font-weight: 900; color: #fff; line-height: 1.25; margin: 0 0 10px; }
//         .ep-yellow { color: #fbbf24; }
//         .ep-sub { font-size: 13px; color: rgba(255,255,255,0.7); margin: 0 0 22px; line-height: 1.6; }
//         .ep-highlights { display: flex; flex-direction: column; gap: 10px; margin-bottom: 22px; }
//         .ep-hl-row { display: flex; align-items: center; gap: 10px; }
//         .ep-hl-icon { width: 30px; height: 30px; border-radius: 8px; background: rgba(255,255,255,0.12); display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; }
//         .ep-hl-text { font-size: 12.5px; font-weight: 600; color: #e0eaff; }
//         .ep-trust { font-size: 11px; color: rgba(255,255,255,0.5); }

//         /* RIGHT */
//         .ep-right { flex: 1; padding: 36px 32px 32px; position: relative; display: flex; flex-direction: column; justify-content: center; }
//         .ep-close { position: absolute; top: 14px; right: 14px; z-index: 10; width: 32px; height: 32px; border-radius: 50%; background: #f1f5f9; border: none; color: #64748b; font-size: 13px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s, transform 0.3s, color 0.2s; }
//         .ep-close:hover { background: #fee2e2; color: #ef4444; transform: rotate(90deg); }
//         .ep-form-heading { font-size: 22px; font-weight: 800; color: #0f172a; margin: 0 0 4px; }
//         .ep-form-sub { font-size: 13px; color: #64748b; margin: 0 0 24px; line-height: 1.5; }
//         .ep-form-sub strong { color: #0f172a; }
//         .ep-api-error { background: #fff5f5; border: 1px solid #fecaca; border-radius: 10px; padding: 10px 14px; font-size: 13px; color: #dc2626; margin-bottom: 14px; }
//         .ep-form { display: flex; flex-direction: column; gap: 14px; }
//         .ep-field { display: flex; flex-direction: column; gap: 5px; }
//         .ep-input-wrap { display: flex; align-items: center; border: 1.5px solid #e2e8f0; border-radius: 14px; background: #f8fafc; overflow: hidden; transition: border-color 0.2s, box-shadow 0.2s; height: 52px; }
//         .ep-input-wrap:focus-within { border-color: #094E93; background: #fff; box-shadow: 0 0 0 3px rgba(9,78,147,0.09); }
//         .ep-wrap-error { border-color: #f87171 !important; background: #fff5f5; box-shadow: 0 0 0 3px rgba(248,113,113,0.09) !important; }
//         .ep-field-icon { width: 18px; height: 18px; flex-shrink: 0; color: #94a3b8; margin: 0 10px 0 14px; }
//         .ep-field-icon-phone { margin-left: 8px; }
//         .ep-bare-input { flex: 1; border: none; outline: none; background: transparent; font-size: 14px; color: #1e293b; padding: 0 14px 0 0; font-family: inherit; height: 100%; }
//         .ep-bare-input::placeholder { color: #94a3b8; }
//         .ep-phone-prefix { padding: 0 12px; font-size: 13px; font-weight: 700; color: #334155; white-space: nowrap; flex-shrink: 0; height: 100%; display: flex; align-items: center; background: #f1f5f9; }
//         .ep-prefix-divider { width: 1px; height: 28px; background: #e2e8f0; flex-shrink: 0; }
//         .ep-bare-select { appearance: none; cursor: pointer; padding-right: 32px !important; }
//         .ep-chevron { width: 16px; height: 16px; color: #94a3b8; flex-shrink: 0; margin-right: 12px; pointer-events: none; }
//         .ep-error { font-size: 11.5px; color: #ef4444; margin: 0; padding-left: 4px; }

//         /* SUBMIT */
//         .ep-submit-btn { position: relative; overflow: hidden; width: 100%; height: 52px; border-radius: 14px; border: none; cursor: pointer; background: linear-gradient(135deg, #073E75, #094E93, #1565c0); color: #fff; font-size: 15px; font-weight: 800; letter-spacing: 0.02em; box-shadow: 0 6px 20px rgba(9,78,147,0.4); display: flex; align-items: center; justify-content: center; transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s; margin-top: 4px; }
//         .ep-submit-btn:hover:not(:disabled) { opacity: .93; transform: translateY(-2px); box-shadow: 0 10px 26px rgba(9,78,147,0.48); }
//         .ep-submit-btn:active:not(:disabled) { transform: translateY(0); }
//         .ep-submit-btn:disabled { opacity: .6; cursor: not-allowed; }
//         .ep-shine { position: absolute; inset: 0; background: linear-gradient(105deg,transparent 38%,rgba(255,255,255,0.22) 50%,transparent 62%); transform: translateX(-100%); }
//         .ep-submit-btn:hover .ep-shine { animation: ep-shine 0.65s ease forwards; }
//         @keyframes ep-shine { to { transform: translateX(100%); } }
//         .ep-spinner-row { display: flex; align-items: center; gap: 8px; }
//         .ep-spinner { width: 15px; height: 15px; flex-shrink: 0; border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff; border-radius: 50%; animation: ep-spin 0.7s linear infinite; }
//         @keyframes ep-spin { to { transform: rotate(360deg); } }
//         .ep-safe-note { font-size: 11.5px; color: #94a3b8; margin: 14px 0 0; text-align: center; }

//         /* OTP STEP */
//         .ep-otp-wrap { display: flex; flex-direction: column; align-items: center; padding: 4px 0; }
//         .ep-otp-icon { font-size: 36px; margin-bottom: 10px; }
//         .ep-otp-boxes { display: flex; gap: 10px; margin: 8px 0 0; }
//         .ep-otp-box { width: 42px; height: 52px; border: 2px solid #e2e8f0; border-radius: 12px; background: #f8fafc; text-align: center; font-size: 22px; font-weight: 800; color: #0f172a; outline: none; transition: border-color 0.18s, box-shadow 0.18s; font-family: 'Courier New', monospace; caret-color: #094E93; }
//         .ep-otp-box:focus { border-color: #094E93; background: #fff; box-shadow: 0 0 0 3px rgba(9,78,147,0.09); }
//         .ep-otp-box-err { border-color: #f87171 !important; }
//         .ep-resend-note { font-size: 12.5px; color: #64748b; margin: 14px 0 8px; text-align: center; }
//         .ep-resend-btn { background: none; border: none; color: #094E93; font-weight: 700; font-size: 12.5px; cursor: pointer; padding: 0; text-decoration: underline; }
//         .ep-back-btn { background: none; border: none; color: #94a3b8; font-size: 12px; cursor: pointer; margin-top: 4px; padding: 4px; transition: color 0.2s; }
//         .ep-back-btn:hover { color: #475569; }

//         /* SUCCESS */
//         .ep-success { text-align: center; padding: 8px 0; animation: ep-pop 0.45s cubic-bezier(.22,1,.36,1) both; }
//         @keyframes ep-pop { from { opacity:0; transform: scale(0.88) translateY(16px); } to { opacity:1; transform: scale(1) translateY(0); } }
//         .ep-success-ring { width: 72px; height: 72px; border-radius: 50%; margin: 0 auto 16px; background: linear-gradient(135deg, #073E75, #0A5FAD); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 0 10px rgba(9,78,147,0.08), 0 8px 24px rgba(9,78,147,0.3); animation: ep-bounce 0.5s 0.1s cubic-bezier(.22,1,.36,1) both; }
//         .ep-success-check { font-size: 30px; color: #fff; }
//         @keyframes ep-bounce { from { transform: scale(0.4); opacity: 0; } to { transform: scale(1); opacity: 1; } }
//         .ep-success-title { font-size: 20px; font-weight: 900; color: #094E93; margin: 0 0 8px; }
//         .ep-success-msg { font-size: 13px; color: #475569; margin: 0 0 16px; line-height: 1.6; }
//         .ep-success-chips { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 20px; }
//         .ep-schip { font-size: 12px; font-weight: 600; color: #094E93; background: #EBF1FF; border-radius: 8px; padding: 5px 12px; }
//         .ep-done-btn { padding: 10px 28px; border-radius: 10px; border: none; background: linear-gradient(135deg, #073E75, #0A5FAD); color: #fff; font-size: 13px; font-weight: 700; cursor: pointer; box-shadow: 0 4px 14px rgba(9,78,147,0.28); transition: opacity 0.2s, transform 0.2s; }
//         .ep-done-btn:hover { opacity: .9; transform: translateY(-1px); }

//         /* MOBILE */
//         @media (max-width: 600px) {
//           .ep-overlay { padding: 12px; }
//           .ep-card { flex-direction: column; max-width: 100%; border-radius: 20px; }
//           .ep-left { width: 100%; padding: 20px 20px 16px; }
//           .ep-title { font-size: 20px; margin-bottom: 6px; }
//           .ep-sub { margin-bottom: 0; }
//           .ep-highlights { display: none; }
//           .ep-trust { display: none; }
//           .ep-right { padding: 20px 20px 22px; }
//           .ep-form-heading { font-size: 18px; }
//           .ep-input-wrap { height: 46px; }
//           .ep-submit-btn { height: 46px; font-size: 14px; }
//           .ep-otp-box { width: 38px; height: 46px; font-size: 20px; }
//         }
//       `}</style>
//     </>
//   );
// }















/* ─────────────────────────────────────────────────────────────
   EnquiryPopup.jsx  —  Props-controlled + OTP via Email

   Usage:
     const [showPopup, setShowPopup] = useState(false);
     <button onClick={() => setShowPopup(true)}>Enquiry Now</button>
     <EnquiryPopup open={showPopup} onClose={() => setShowPopup(false)} />
   ───────────────────────────────────────────────────────────── */

import { useState, useEffect, useRef } from "react";
import { submitEnquiry, verifyOTP, resendOTP } from "../../api/enquiry";

const courses = [
  "Digital Marketing","Graphic Design","AI Course","Data Analyst",
  "Business Analyst","Computer Course","Video Editing","Web Development",
];

const highlights = [
  { icon: "🎯", text: "Industry-Relevant Curriculum" },
  { icon: "🏆", text: "Placement Assistance" },
  { icon: "👨‍💻", text: "Live Project Training" },
  { icon: "📜", text: "Certified Programme" },
];

// ── OTP countdown hook ───────────────────────────────────────────────────────
function useCountdown(seconds) {
  const [left, setLeft] = useState(0);
  const ref             = useRef(null);

  const start = (s = seconds) => {
    setLeft(s);
    clearInterval(ref.current);
    ref.current = setInterval(() => {
      setLeft((prev) => {
        if (prev <= 1) { clearInterval(ref.current); return 0; }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => () => clearInterval(ref.current), []);
  return { left, start };
}

// ════════════════════════════════════════════════════════════════════════════
export default function EnquiryPopup({ open = false, onClose }) {
  const [visible,   setVisible]   = useState(false);
  const [step,      setStep]      = useState("form");   // "form" | "otp" | "success"
  const [form,      setForm]      = useState({ name: "", phone: "", email: "", course: "" });
  const [errors,    setErrors]    = useState({});
  const [loading,   setLoading]   = useState(false);
  const [apiError,  setApiError]  = useState("");
  const [enquiryId, setEnquiryId] = useState(null);

  /* OTP state */
  const [otp,       setOtp]      = useState(["","","","","",""]);
  const [otpError,  setOtpError] = useState("");
  const [resending, setResending]= useState(false);
  const otpInputs               = useRef([]);
  const { left: countdown, start: startCountdown } = useCountdown(120);

  const overlayRef = useRef(null);

  /* ── lifecycle ── */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => setVisible(true));
    }
  }, [open]);

  const resetAll = () => {
    setStep("form");
    setForm({ name: "", phone: "", email: "", course: "" });
    setErrors({});
    setApiError("");
    setEnquiryId(null);
    setOtp(["","","","","",""]);
    setOtpError("");
    setLoading(false);
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      resetAll();
      document.body.style.overflow = "";
      onClose?.();
    }, 350);
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape" && open) handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) handleClose();
  };

  /* ── Form change ── */
  const handleChange = (field) => (ev) => {
    setForm((f) => ({ ...f, [field]: ev.target.value }));
    setErrors((er) => ({ ...er, [field]: undefined }));
    setApiError("");
  };

  /* ── Form validation ── */
  const validate = () => {
    const e = {};
    if (!form.name.trim())                                              e.name   = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))         e.email  = "Enter a valid email address";
    if (!/^\d{10}$/.test(form.phone.replace(/\s/g,"")))                e.phone  = "Enter valid 10-digit number";
    if (!form.course)                                                   e.course = "Please select a course";
    return e;
  };

  /* ── STEP 1: Submit form → request OTP on email ── */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    setApiError("");
    try {
      const res = await submitEnquiry({
        formType:  "popup",
        name:      form.name.trim(),
        phone:     form.phone.replace(/\D/g,""),
        email:     form.email.trim(),
        course:    form.course,
        otpChannel: "email",          // ← tells backend to send OTP to email
      });
      setEnquiryId(res.enquiryId);
      setStep("otp");
      startCountdown(120);
      setTimeout(() => otpInputs.current[0]?.focus(), 120);
    } catch (err) {
      setApiError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ── OTP box key handlers ── */
  const handleOtpChange = (idx, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    setOtpError("");
    if (val && idx < 5) otpInputs.current[idx + 1]?.focus();
    if (val && idx === 5) {
      const full = [...next].join("");
      if (full.length === 6) handleOtpVerify(full);
    }
  };

  const handleOtpKeyDown = (idx, e) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0)
      otpInputs.current[idx - 1]?.focus();
  };

  const handleOtpPaste = (e) => {
    const pasted = e.clipboardData.getData("text").replace(/\D/g,"").slice(0,6);
    if (pasted.length === 6) {
      setOtp(pasted.split(""));
      handleOtpVerify(pasted);
    }
    e.preventDefault();
  };

  /* ── STEP 2: Verify OTP ── */
  const handleOtpVerify = async (code) => {
    const pin = code || otp.join("");
    if (pin.length !== 6) { setOtpError("Enter all 6 digits"); return; }

    setLoading(true);
    setOtpError("");
    try {
      await verifyOTP({ enquiryId, otp: pin });
      setStep("success");
    } catch (err) {
      setOtpError(err.message || "Invalid OTP. Please try again.");
      setOtp(["","","","","",""]);
      setTimeout(() => otpInputs.current[0]?.focus(), 50);
    } finally {
      setLoading(false);
    }
  };

  /* ── Resend OTP ── */
  const handleResend = async () => {
    if (countdown > 0 || resending) return;
    setResending(true);
    setOtpError("");
    try {
      await resendOTP({ enquiryId, otpChannel: "email" });   // ← email resend
      startCountdown(120);
      setOtp(["","","","","",""]);
      setTimeout(() => otpInputs.current[0]?.focus(), 50);
    } catch (err) {
      setOtpError(err.message || "Could not resend OTP");
    } finally {
      setResending(false);
    }
  };

  if (!open) return null;

  return (
    <>
      {/* ── OVERLAY ── */}
      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-label="Enquiry Form"
        className="ep-overlay"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {/* ── CARD ── */}
        <div
          className="ep-card"
          style={{
            transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
            opacity:   visible ? 1 : 0,
          }}
        >
          {/* Close */}
          <button className="ep-close" onClick={handleClose} aria-label="Close popup">✕</button>

          {/* ── LEFT PANEL ── */}
          <div className="ep-left">
            <span className="ep-blob ep-blob-1" />
            <span className="ep-blob ep-blob-2" />
            <span className="ep-blob ep-blob-3" />
            <div className="ep-left-inner">
              <div className="ep-brand-badge">
                <span className="ep-brand-dot" />EDURA Institute
              </div>
              <h2 className="ep-title">
                Start Your<br /><span className="ep-yellow">Career Journey</span><br />with Experts
              </h2>
              <p className="ep-sub">Talk to our counsellor — zero obligations, just clarity.</p>
              <div className="ep-highlights">
                {highlights.map((h) => (
                  <div key={h.text} className="ep-hl-row">
                    <span className="ep-hl-icon">{h.icon}</span>
                    <span className="ep-hl-text">{h.text}</span>
                  </div>
                ))}
              </div>
              <div className="ep-trust">🔒 100% Private &nbsp;·&nbsp; ⚡ Quick Response</div>
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="ep-right">

            {/* ════ FORM STEP ════ */}
            {step === "form" && (
              <>
                <h3 className="ep-form-heading">Talk To Our Advisor</h3>
                <p className="ep-form-sub">Our counsellor will call within <strong>24 hours.</strong></p>

                {apiError && <p className="ep-api-error">{apiError}</p>}

                <form onSubmit={handleFormSubmit} noValidate className="ep-form">
                  {/* Name */}
                  <div className="ep-field">
                    <div className={`ep-input-wrap ${errors.name ? "ep-wrap-error" : ""}`}>
                      <svg className="ep-field-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <circle cx="10" cy="7" r="3.5"/>
                        <path d="M3 17c0-3.3 3.1-6 7-6s7 2.7 7 6" strokeLinecap="round"/>
                      </svg>
                      <input type="text" placeholder="Your Full Name" value={form.name}
                        onChange={handleChange("name")} className="ep-bare-input" />
                    </div>
                    {errors.name && <p className="ep-error">{errors.name}</p>}
                  </div>

                  {/* Email — required for OTP */}
                  <div className="ep-field">
                    <div className={`ep-input-wrap ${errors.email ? "ep-wrap-error" : ""}`}>
                      <svg className="ep-field-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M2.5 4.5h15a1 1 0 011 1v9a1 1 0 01-1 1h-15a1 1 0 01-1-1v-9a1 1 0 011-1z" strokeLinecap="round"/>
                        <path d="M2.5 5.5l7.5 5.5 7.5-5.5" strokeLinecap="round"/>
                      </svg>
                      <input
                        type="email"
                        placeholder="Your Email Address"
                        value={form.email}
                        onChange={handleChange("email")}
                        className="ep-bare-input"
                      />
                    </div>
                    {errors.email && <p className="ep-error">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div className="ep-field">
                    <div className={`ep-input-wrap ${errors.phone ? "ep-wrap-error" : ""}`}>
                      <span className="ep-phone-prefix">+91 IN</span>
                      <div className="ep-prefix-divider" />
                      <svg className="ep-field-icon ep-field-icon-phone" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="5" y="2" width="10" height="16" rx="2"/>
                        <circle cx="10" cy="15" r="0.8" fill="currentColor"/>
                      </svg>
                      <input type="tel" placeholder="Mobile Number" value={form.phone}
                        onChange={handleChange("phone")} className="ep-bare-input"
                        maxLength={10} inputMode="numeric" />
                    </div>
                    {errors.phone && <p className="ep-error">{errors.phone}</p>}
                  </div>

                  {/* Course */}
                  <div className="ep-field">
                    <div className={`ep-input-wrap ${errors.course ? "ep-wrap-error" : ""}`}>
                      <svg className="ep-field-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="3" y="3" width="14" height="14" rx="2"/>
                        <path d="M7 7h6M7 10h6M7 13h4" strokeLinecap="round"/>
                      </svg>
                      <select value={form.course} onChange={handleChange("course")}
                        className="ep-bare-input ep-bare-select">
                        <option value="">Select a Course</option>
                        {courses.map((c) => <option key={c}>{c}</option>)}
                      </select>
                      <svg className="ep-chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {errors.course && <p className="ep-error">{errors.course}</p>}
                  </div>

                  <button type="submit" disabled={loading} className="ep-submit-btn">
                    {loading ? (
                      <span className="ep-spinner-row"><span className="ep-spinner" /> Sending OTP…</span>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ marginRight:8, flexShrink:0 }}>
                          <path d="M3 10h14M10 3l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Enquiry Now!</span>
                        <span className="ep-shine" />
                      </>
                    )}
                  </button>
                </form>

                <p className="ep-safe-note">🔒 Your details are safe. No spam, ever.</p>
              </>
            )}

            {/* ════ OTP STEP ════ */}
            {step === "otp" && (
              <div className="ep-otp-wrap">
                {/* Email icon instead of phone */}
                <div className="ep-otp-icon-wrap">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#094E93" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <h3 className="ep-form-heading" style={{ textAlign:"center" }}>Check Your Email</h3>
                <p className="ep-form-sub" style={{ textAlign:"center" }}>
                  We sent a 6-digit OTP to<br />
                  <strong>{form.email}</strong>
                </p>

                {/* 6-box OTP input */}
                <div className="ep-otp-boxes" onPaste={handleOtpPaste}>
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={(el) => (otpInputs.current[idx] = el)}
                      className={`ep-otp-box ${otpError ? "ep-otp-box-err" : ""}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(idx, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                    />
                  ))}
                </div>

                {otpError && <p className="ep-error" style={{ textAlign:"center", marginTop:6 }}>{otpError}</p>}

                <button
                  className="ep-submit-btn"
                  style={{ marginTop:18 }}
                  disabled={loading || otp.join("").length !== 6}
                  onClick={() => handleOtpVerify()}
                >
                  {loading ? (
                    <span className="ep-spinner-row"><span className="ep-spinner" /> Verifying…</span>
                  ) : (
                    <><span>Verify OTP</span><span className="ep-shine" /></>
                  )}
                </button>

                {/* Resend */}
                <p className="ep-resend-note">
                  Didn't receive it? Check spam folder or&nbsp;
                  {countdown > 0 ? (
                    <>resend in <strong>{Math.floor(countdown/60)}:{String(countdown%60).padStart(2,"0")}</strong></>
                  ) : (
                    <button
                      className="ep-resend-btn"
                      onClick={handleResend}
                      disabled={resending}
                    >
                      {resending ? "Resending…" : "Resend OTP"}
                    </button>
                  )}
                </p>

                <button
                  className="ep-back-btn"
                  onClick={() => { setStep("form"); setOtp(["","","","","",""]); setOtpError(""); }}
                >
                  ← Change email
                </button>
              </div>
            )}

            {/* ════ SUCCESS STEP ════ */}
            {step === "success" && (
              <div className="ep-success">
                <div className="ep-success-ring">
                  <span className="ep-success-check">✓</span>
                </div>
                <h3 className="ep-success-title">You're All Set!</h3>
                <p className="ep-success-msg">
                  Hi <strong>{form.name}</strong>, our counsellor will call you within <strong>24 hours</strong>.
                </p>
                <div className="ep-success-chips">
                  <span className="ep-schip">📞 Call Scheduled</span>
                  <span className="ep-schip">✉️ Confirmation Sent</span>
                </div>
                <button className="ep-done-btn" onClick={handleClose}>Close ✕</button>
              </div>
            )}

          </div>{/* end right */}
        </div>{/* end card */}
      </div>{/* end overlay */}

      {/* ── STYLES ── */}
      <style>{`
        .ep-overlay {
          position: fixed; inset: 0; z-index: 9999;
          display: flex; align-items: center; justify-content: center; padding: 16px;
          background: rgba(4,14,38,0.78);
          backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
          transition: opacity 0.35s ease;
        }
        .ep-card {
          position: relative; width: 100%; max-width: 820px;
          border-radius: 24px; overflow: hidden; background: #fff;
          box-shadow: 0 32px 96px rgba(9,78,147,0.28), 0 0 0 1px rgba(9,78,147,0.07);
          transition: transform 0.42s cubic-bezier(.22,1,.36,1), opacity 0.35s ease;
          display: flex; flex-direction: row;
        }
        /* LEFT */
        .ep-left {
          position: relative; width: 42%; flex-shrink: 0;
          background: linear-gradient(145deg, #073E75 0%, #094E93 50%, #0A5FAD 100%);
          overflow: hidden; padding: 36px 28px;
          display: flex; align-items: center;
        }
        .ep-left-inner { position: relative; z-index: 1; width: 100%; }
        .ep-blob { position: absolute; border-radius: 50%; background: rgba(255,255,255,0.07); pointer-events: none; animation: ep-float 4s ease-in-out infinite; }
        .ep-blob-1 { width:220px; height:220px; top:-90px; right:-70px; }
        .ep-blob-2 { width:130px; height:130px; bottom:-60px; left:-40px; animation-delay:-2s; }
        .ep-blob-3 { width:90px; height:90px; top:55%; right:10px; opacity:.4; animation-delay:-4s; }
        @keyframes ep-float { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-14px) scale(1.05); } }
        .ep-brand-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.13); border: 1px solid rgba(255,255,255,0.22); color: #dbeafe; font-size: 11px; font-weight: 700; padding: 5px 12px; border-radius: 999px; letter-spacing: 0.06em; margin-bottom: 18px; }
        .ep-brand-dot { width: 7px; height: 7px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 7px #4ade80; flex-shrink: 0; animation: ep-glow 1.5s ease-in-out infinite; }
        @keyframes ep-glow { 0%,100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.5); } 50% { box-shadow: 0 0 0 6px rgba(74,222,128,0); } }
        .ep-title { font-size: 26px; font-weight: 900; color: #fff; line-height: 1.25; margin: 0 0 10px; }
        .ep-yellow { color: #fbbf24; }
        .ep-sub { font-size: 13px; color: rgba(255,255,255,0.7); margin: 0 0 22px; line-height: 1.6; }
        .ep-highlights { display: flex; flex-direction: column; gap: 10px; margin-bottom: 22px; }
        .ep-hl-row { display: flex; align-items: center; gap: 10px; }
        .ep-hl-icon { width: 30px; height: 30px; border-radius: 8px; background: rgba(255,255,255,0.12); display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; }
        .ep-hl-text { font-size: 12.5px; font-weight: 600; color: #e0eaff; }
        .ep-trust { font-size: 11px; color: rgba(255,255,255,0.5); }

        /* RIGHT */
        .ep-right { flex: 1; padding: 36px 32px 32px; position: relative; display: flex; flex-direction: column; justify-content: center; }
        .ep-close { position: absolute; top: 14px; right: 14px; z-index: 10; width: 32px; height: 32px; border-radius: 50%; background: #f1f5f9; border: none; color: #64748b; font-size: 13px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s, transform 0.3s, color 0.2s; }
        .ep-close:hover { background: #fee2e2; color: #ef4444; transform: rotate(90deg); }
        .ep-form-heading { font-size: 22px; font-weight: 800; color: #0f172a; margin: 0 0 4px; }
        .ep-form-sub { font-size: 13px; color: #64748b; margin: 0 0 24px; line-height: 1.5; }
        .ep-form-sub strong { color: #0f172a; }
        .ep-api-error { background: #fff5f5; border: 1px solid #fecaca; border-radius: 10px; padding: 10px 14px; font-size: 13px; color: #dc2626; margin-bottom: 14px; }
        .ep-form { display: flex; flex-direction: column; gap: 14px; }
        .ep-field { display: flex; flex-direction: column; gap: 5px; }
        .ep-input-wrap { display: flex; align-items: center; border: 1.5px solid #e2e8f0; border-radius: 14px; background: #f8fafc; overflow: hidden; transition: border-color 0.2s, box-shadow 0.2s; height: 52px; }
        .ep-input-wrap:focus-within { border-color: #094E93; background: #fff; box-shadow: 0 0 0 3px rgba(9,78,147,0.09); }
        .ep-wrap-error { border-color: #f87171 !important; background: #fff5f5; box-shadow: 0 0 0 3px rgba(248,113,113,0.09) !important; }
        .ep-field-icon { width: 18px; height: 18px; flex-shrink: 0; color: #94a3b8; margin: 0 10px 0 14px; }
        .ep-field-icon-phone { margin-left: 8px; }
        .ep-bare-input { flex: 1; border: none; outline: none; background: transparent; font-size: 14px; color: #1e293b; padding: 0 14px 0 0; font-family: inherit; height: 100%; }
        .ep-bare-input::placeholder { color: #94a3b8; }
        .ep-phone-prefix { padding: 0 12px; font-size: 13px; font-weight: 700; color: #334155; white-space: nowrap; flex-shrink: 0; height: 100%; display: flex; align-items: center; background: #f1f5f9; }
        .ep-prefix-divider { width: 1px; height: 28px; background: #e2e8f0; flex-shrink: 0; }
        .ep-bare-select { appearance: none; cursor: pointer; padding-right: 32px !important; }
        .ep-chevron { width: 16px; height: 16px; color: #94a3b8; flex-shrink: 0; margin-right: 12px; pointer-events: none; }
        .ep-error { font-size: 11.5px; color: #ef4444; margin: 0; padding-left: 4px; }

        /* SUBMIT */
        .ep-submit-btn { position: relative; overflow: hidden; width: 100%; height: 52px; border-radius: 14px; border: none; cursor: pointer; background: linear-gradient(135deg, #073E75, #094E93, #1565c0); color: #fff; font-size: 15px; font-weight: 800; letter-spacing: 0.02em; box-shadow: 0 6px 20px rgba(9,78,147,0.4); display: flex; align-items: center; justify-content: center; transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s; margin-top: 4px; }
        .ep-submit-btn:hover:not(:disabled) { opacity: .93; transform: translateY(-2px); box-shadow: 0 10px 26px rgba(9,78,147,0.48); }
        .ep-submit-btn:active:not(:disabled) { transform: translateY(0); }
        .ep-submit-btn:disabled { opacity: .6; cursor: not-allowed; }
        .ep-shine { position: absolute; inset: 0; background: linear-gradient(105deg,transparent 38%,rgba(255,255,255,0.22) 50%,transparent 62%); transform: translateX(-100%); }
        .ep-submit-btn:hover .ep-shine { animation: ep-shine 0.65s ease forwards; }
        @keyframes ep-shine { to { transform: translateX(100%); } }
        .ep-spinner-row { display: flex; align-items: center; gap: 8px; }
        .ep-spinner { width: 15px; height: 15px; flex-shrink: 0; border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff; border-radius: 50%; animation: ep-spin 0.7s linear infinite; }
        @keyframes ep-spin { to { transform: rotate(360deg); } }
        .ep-safe-note { font-size: 11.5px; color: #94a3b8; margin: 14px 0 0; text-align: center; }

        /* OTP STEP */
        .ep-otp-wrap { display: flex; flex-direction: column; align-items: center; padding: 4px 0; }
        .ep-otp-icon-wrap { width: 64px; height: 64px; border-radius: 18px; background: #EBF1FF; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
        .ep-otp-boxes { display: flex; gap: 10px; margin: 8px 0 0; }
        .ep-otp-box { width: 42px; height: 52px; border: 2px solid #e2e8f0; border-radius: 12px; background: #f8fafc; text-align: center; font-size: 22px; font-weight: 800; color: #0f172a; outline: none; transition: border-color 0.18s, box-shadow 0.18s; font-family: 'Courier New', monospace; caret-color: #094E93; }
        .ep-otp-box:focus { border-color: #094E93; background: #fff; box-shadow: 0 0 0 3px rgba(9,78,147,0.09); }
        .ep-otp-box-err { border-color: #f87171 !important; }
        .ep-resend-note { font-size: 12.5px; color: #64748b; margin: 14px 0 8px; text-align: center; line-height: 1.6; }
        .ep-resend-btn { background: none; border: none; color: #094E93; font-weight: 700; font-size: 12.5px; cursor: pointer; padding: 0; text-decoration: underline; }
        .ep-back-btn { background: none; border: none; color: #94a3b8; font-size: 12px; cursor: pointer; margin-top: 4px; padding: 4px; transition: color 0.2s; }
        .ep-back-btn:hover { color: #475569; }

        /* SUCCESS */
        .ep-success { text-align: center; padding: 8px 0; animation: ep-pop 0.45s cubic-bezier(.22,1,.36,1) both; }
        @keyframes ep-pop { from { opacity:0; transform: scale(0.88) translateY(16px); } to { opacity:1; transform: scale(1) translateY(0); } }
        .ep-success-ring { width: 72px; height: 72px; border-radius: 50%; margin: 0 auto 16px; background: linear-gradient(135deg, #073E75, #0A5FAD); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 0 10px rgba(9,78,147,0.08), 0 8px 24px rgba(9,78,147,0.3); animation: ep-bounce 0.5s 0.1s cubic-bezier(.22,1,.36,1) both; }
        .ep-success-check { font-size: 30px; color: #fff; }
        @keyframes ep-bounce { from { transform: scale(0.4); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .ep-success-title { font-size: 20px; font-weight: 900; color: #094E93; margin: 0 0 8px; }
        .ep-success-msg { font-size: 13px; color: #475569; margin: 0 0 16px; line-height: 1.6; }
        .ep-success-chips { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 20px; }
        .ep-schip { font-size: 12px; font-weight: 600; color: #094E93; background: #EBF1FF; border-radius: 8px; padding: 5px 12px; }
        .ep-done-btn { padding: 10px 28px; border-radius: 10px; border: none; background: linear-gradient(135deg, #073E75, #0A5FAD); color: #fff; font-size: 13px; font-weight: 700; cursor: pointer; box-shadow: 0 4px 14px rgba(9,78,147,0.28); transition: opacity 0.2s, transform 0.2s; }
        .ep-done-btn:hover { opacity: .9; transform: translateY(-1px); }

        /* MOBILE */
        @media (max-width: 600px) {
          .ep-overlay { padding: 12px; }
          .ep-card { flex-direction: column; max-width: 100%; border-radius: 20px; }
          .ep-left { width: 100%; padding: 20px 20px 16px; }
          .ep-title { font-size: 20px; margin-bottom: 6px; }
          .ep-sub { margin-bottom: 0; }
          .ep-highlights { display: none; }
          .ep-trust { display: none; }
          .ep-right { padding: 20px 20px 22px; }
          .ep-form-heading { font-size: 18px; }
          .ep-input-wrap { height: 46px; }
          .ep-submit-btn { height: 46px; font-size: 14px; }
          .ep-otp-box { width: 38px; height: 46px; font-size: 20px; }
        }
      `}</style>
    </>
  );
}