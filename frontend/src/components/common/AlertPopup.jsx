import { useState, useEffect, useRef, useCallback } from 'react'

/* ══════════════════════════════════════════════════════════════════
   CONSTANTS
══════════════════════════════════════════════════════════════════ */
const SHOW_DURATION = 5000   // ms popup stays visible
const WAIT_DURATION = 30000  // ms between popups
const FIRST_DELAY   = 4000   // ms after page load before first popup

const TOP_POSITIONS = [90, 162, 234, 280]

/* ══════════════════════════════════════════════════════════════════
   SVG ICONS
══════════════════════════════════════════════════════════════════ */
const GraduationIcon = ({ col }) => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke={col} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
)
const FireIcon = ({ col }) => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke={col} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c0 0-4 4-4 8a4 4 0 008 0c0-1.5-.5-3-1-4 0 0-1 2-2 2s-1-1-1-2c0-1 1-3 1-3s-1 3 1 4c.7.4 1 1.2 1 2a2 2 0 01-4 0c0-2.8 2-6 2-7z"/>
  </svg>
)
const ClockIcon = ({ col }) => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke={col} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)
const BriefcaseIcon = ({ col }) => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke={col} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
  </svg>
)
const PhoneCallIcon = ({ col }) => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke={col} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 2.18 2 2 0 013.72 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

/* Button icons */
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)
const GiftIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>
  </svg>
)
const RocketIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M15 12v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
)
const InfoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
)
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 2.18 2 2 0 013.72 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
  </svg>
)
const EnquiryIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
)
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)
const SendIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
)

/* ══════════════════════════════════════════════════════════════════
   POPUP DATA
══════════════════════════════════════════════════════════════════ */
const POPUPS = [
  {
    theme:   { card: '#4cbfbf', icon: '#3aadad', textCol: '#fff', subCol: 'rgba(255,255,255,0.88)' },
    svgIcon: <GraduationIcon col="white"/>,
    title:   'Book Your Free Demo Class!',
    desc:    'Limited seats — no commitment needed.',
    mainBtn: { label: 'Book Now',      icon: <CalendarIcon/>, action: 'book'   },
    enqBtn:  { label: 'Enquiry Now',   icon: <EnquiryIcon/>,  action: 'enquiry'},
  },
  {
    theme:   { card: '#f5c842', icon: '#e0b530', textCol: '#7a5500', subCol: 'rgba(100,65,0,0.82)' },
    svgIcon: <FireIcon col="rgba(100,65,0,0.85)"/>,
    title:   'Flat 40% OFF — April Batch!',
    desc:    "Offer ends tonight. Grab before it's gone.",
    mainBtn: { label: 'Claim Offer',   icon: <GiftIcon/>,    action: 'offer'  },
    enqBtn:  { label: 'Enquiry Now',   icon: <EnquiryIcon/>, action: 'enquiry'},
  },
  {
    theme:   { card: '#e8546a', icon: '#d43e55', textCol: '#fff', subCol: 'rgba(255,255,255,0.88)' },
    svgIcon: <ClockIcon col="white"/>,
    title:   'Only 3 Seats Left — Hurry!',
    desc:    'April batch bhar rahi hai. Jaldi enroll karo.',
    mainBtn: { label: 'Enroll Now',    icon: <RocketIcon/>,  action: 'enroll' },
    enqBtn:  { label: 'Enquiry Now',   icon: <EnquiryIcon/>, action: 'enquiry'},
  },
  {
    theme:   { card: '#4a90d9', icon: '#3578c4', textCol: '#fff', subCol: 'rgba(255,255,255,0.88)' },
    svgIcon: <BriefcaseIcon col="white"/>,
    title:   'Job Guarantee Ya Paise Wapas!',
    desc:    '94% placement rate. Resume + referrals free.',
    mainBtn: { label: 'Know More',     icon: <InfoIcon/>,    action: 'info'   },
    enqBtn:  { label: 'Enquiry Now',   icon: <EnquiryIcon/>, action: 'enquiry'},
  },
  {
    theme:   { card: '#4cba7a', icon: '#38a566', textCol: '#fff', subCol: 'rgba(255,255,255,0.88)' },
    svgIcon: <PhoneCallIcon col="white"/>,
    title:   'Free Counselling Call!',
    desc:    'Confused? Expert free mein guide karega.',
    mainBtn: { label: 'Call Now',      icon: <PhoneIcon/>,   action: 'call'   },
    enqBtn:  { label: 'Enquiry Now',   icon: <EnquiryIcon/>, action: 'enquiry'},
  },
]

/* ══════════════════════════════════════════════════════════════════
   ENQUIRY MODAL
══════════════════════════════════════════════════════════════════ */
function EnquiryModal({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', course: '' })
  const [sent, setSent] = useState(false)

  const courses = [
    'Graphic Designing','Video Editing','Digital Marketing',
    'UI/UX Design','Full Stack Web Development','Stock Market Trading',
    'Data Analyst','AI Tools Mastery','BCA with Industry Training',
  ]

  const handleSubmit = () => {
    if (!form.name || !form.phone) return
    setSent(true)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={e => e.target === e.currentTarget && onClose()}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"/>

      {/* Modal */}
      <div className="relative z-[10] bg-white rounded-[20px] w-full max-w-[420px]
        shadow-[0_24px_64px_rgba(0,0,0,0.2)] overflow-hidden">

        {/* Top gradient bar */}
        <div className="h-[3px]" style={{ background: 'linear-gradient(90deg,#094E93,#0A5FAD 50%,#F5A623)' }}/>

        {!sent ? (
          <div className="p-7">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-[18px] font-extrabold text-[#0D1E42] tracking-[-0.02em]">
                  Book Free Demo
                </h3>
                <p className="text-[12px] text-[#5A6A8A] font-medium mt-1">
                  Our counsellor will call within <span className="text-[#094E93] font-bold">24 hours.</span>
                </p>
              </div>
              <button onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#F4F7FF] border border-[#DDE5F8]
                  flex items-center justify-center text-[#5A6A8A] cursor-pointer
                  hover:bg-[#EBF1FF] hover:text-[#094E93] transition-all duration-150">
                <CloseIcon/>
              </button>
            </div>

            {/* Fields */}
            <div className="flex flex-col gap-3 mb-5">
              {/* Name */}
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                  viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth={2}>
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <input type="text" placeholder="Your Full Name"
                  value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full pl-10 pr-3 py-3 bg-[#F7F9FF] border border-[#DDE5F8] rounded-[10px]
                    text-[13.5px] font-medium text-[#0D1E42] outline-none transition-all duration-150
                    placeholder:text-[#B0BCCC] focus:border-[#094E93] focus:bg-white focus:shadow-[0_0_0_3px_rgba(9,78,147,0.08)]"/>
              </div>

              {/* Phone */}
              <div className="grid grid-cols-[80px_1fr] gap-2">
                <select className="bg-[#F7F9FF] border border-[#DDE5F8] rounded-[10px] px-2 py-3
                  text-[13px] font-medium text-[#0D1E42] outline-none cursor-pointer
                  focus:border-[#094E93] appearance-none text-center" style={{ fontFamily:'inherit' }}>
                  <option>+91 IN</option><option>+1 US</option><option>+44 UK</option>
                </select>
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                    viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth={2}>
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07"/>
                  </svg>
                  <input type="tel" placeholder="Mobile Number"
                    value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full pl-10 pr-3 py-3 bg-[#F7F9FF] border border-[#DDE5F8] rounded-[10px]
                      text-[13.5px] font-medium text-[#0D1E42] outline-none transition-all duration-150
                      placeholder:text-[#B0BCCC] focus:border-[#094E93] focus:bg-white focus:shadow-[0_0_0_3px_rgba(9,78,147,0.08)]"/>
                </div>
              </div>

              {/* Course */}
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                  viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth={2}>
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
                </svg>
                <select value={form.course} onChange={e => setForm(f => ({ ...f, course: e.target.value }))}
                  className="w-full pl-10 pr-8 py-3 bg-[#F7F9FF] border border-[#DDE5F8] rounded-[10px]
                    text-[13.5px] font-medium text-[#0D1E42] outline-none cursor-pointer appearance-none
                    focus:border-[#094E93] focus:bg-white"
                  style={{
                    fontFamily:'inherit',
                    backgroundImage:`url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%235A6A8A' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat:'no-repeat', backgroundPosition:'calc(100% - 12px) center',
                    color: form.course ? '#0D1E42' : '#B0BCCC',
                  }}>
                  <option value="" disabled>Select a Course</option>
                  {courses.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>

            {/* Submit */}
            <button onClick={handleSubmit}
              className="w-full flex items-center justify-center gap-2 py-[13px] text-white
                rounded-[11px] text-[14px] font-extrabold border-none cursor-pointer
                transition-all duration-200 hover:-translate-y-0.5"
              style={{ background:'linear-gradient(135deg,#094E93,#0A5FAD)', boxShadow:'0 6px 20px rgba(9,78,147,0.3)', fontFamily:'inherit' }}>
              <SendIcon/>
              Book Free Demo Class
            </button>

            <p className="text-center text-[11.5px] text-[#B0BCCC] font-medium mt-3 flex items-center justify-center gap-1.5">
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="#B0BCCC" strokeWidth={2}>
                <rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/>
              </svg>
              Your details are safe. No spam, ever.
            </p>
          </div>
        ) : (
          /* Success state */
          <div className="p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-[#ECFDF5] border-2 border-[#A7F3D0]
              flex items-center justify-center mx-auto mb-4">
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#059669" strokeWidth={2.5}>
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h3 className="text-[20px] font-extrabold text-[#0D1E42] mb-2">Request Sent!</h3>
            <p className="text-[13.5px] text-[#5A6A8A] font-medium leading-[1.7] mb-6">
              Our counsellor will call you within 24 hours. Thank you for choosing SkillEdge!
            </p>
            <button onClick={onClose}
              className="px-8 py-3 bg-[#094E93] text-white rounded-[10px] text-[13.5px] font-bold
                border-none cursor-pointer hover:bg-[#073E75] transition-colors"
              style={{ fontFamily:'inherit' }}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════════
   MAIN POPUP COMPONENT
══════════════════════════════════════════════════════════════════ */
export default function AlertPopup() {
  const [visible,    setVisible]    = useState(false)
  const [sliding,    setSliding]    = useState(false) // true = slid in, false = slid out
  const [popupIdx,   setPopupIdx]   = useState(0)
  const [barWidth,   setBarWidth]   = useState(100)
  const [topPos,     setTopPos]     = useState(18)
  const [showModal,  setShowModal]  = useState(false)

  const hideTimerRef  = useRef(null)
  const waitTimerRef  = useRef(null)
  const barAnimRef    = useRef(null)
  const pausedRef     = useRef(false)
  const elapsedRef    = useRef(0)
  const startTimeRef  = useRef(null)
  const remainRef     = useRef(SHOW_DURATION)

  /* ── Bar animation ── */
  const startBar = useCallback((remaining) => {
    clearTimeout(barAnimRef.current)
    setBarWidth((remaining / SHOW_DURATION) * 100)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setBarWidth(0)
      })
    })
  }, [])

  /* ── Slide out & schedule next ── */
  const slideOut = useCallback((scheduleNext) => {
    clearTimeout(hideTimerRef.current)
    // 1. Animate out (translateX back to 120%)
    setSliding(false)
    // 2. After animation completes, hide the element
    setTimeout(() => setVisible(false), 400)
    if (scheduleNext) {
      // setPopupIdx(i => (i + 1) % POPUPS.length)
      setTimeout(() => {
        setPopupIdx(i => (i + 1) % POPUPS.length)
      }, 2000)
      clearTimeout(waitTimerRef.current)
      waitTimerRef.current = setTimeout(() => show(), WAIT_DURATION)  
    }
  }, [])

  /* ── Show popup ── */
  const show = useCallback(() => {
    elapsedRef.current  = 0
    pausedRef.current   = false
    remainRef.current   = SHOW_DURATION
    const top = TOP_POSITIONS[Math.floor(Math.random() * TOP_POSITIONS.length)]
    setTopPos(top)
    // Mount the element first (visible=true, sliding=false => off-screen right)
    setVisible(true)
    setSliding(false)
    // Next frame: trigger slide-in by setting sliding=true
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSliding(true)
        startBar(SHOW_DURATION)
        startTimeRef.current = Date.now()
        hideTimerRef.current = setTimeout(() => {
          if (!pausedRef.current) slideOut(true)
        }, SHOW_DURATION  )
      })
    })
  }, [slideOut, startBar])

  /* ── Auto-start after page load ── */
  useEffect(() => {
    waitTimerRef.current = setTimeout(show, FIRST_DELAY)
    return () => {
      clearTimeout(waitTimerRef.current)
      clearTimeout(hideTimerRef.current)
    }
  }, [show])

  /* ── Hover pause / resume ── */
  const handleMouseEnter = () => {
    if (!sliding) return
    pausedRef.current = true
    elapsedRef.current += Date.now() - startTimeRef.current
    clearTimeout(hideTimerRef.current)
    const pct = (1 - elapsedRef.current / SHOW_DURATION) * 100
    setBarWidth(Math.max(0, pct))
  }

  const handleMouseLeave = () => {
    if (!sliding) return
    pausedRef.current = false
    const rem = SHOW_DURATION - elapsedRef.current
    remainRef.current = rem
    startTimeRef.current = Date.now()
    startBar(rem)
    hideTimerRef.current = setTimeout(() => {
      if (!pausedRef.current) slideOut(true)
    }, rem)
  }

  /* ── Button actions ── */
  const handleAction = (action) => {
    if (action === 'enquiry') { setShowModal(true); return }
    if (action === 'book')    { setShowModal(true); return }
    if (action === 'call')    { window.location.href = 'tel:+919999912345'; return }
    if (action === 'enroll')  { setShowModal(true); return }
    if (action === 'offer')   { setShowModal(true); return }
    if (action === 'info')    { window.location.href = '/courses'; return }
  }

  if (!visible) return showModal ? <EnquiryModal onClose={() => setShowModal(false)}/> : null

  const p = POPUPS[popupIdx]
  const { card: cardBg, icon: iconBg, textCol, subCol } = p.theme

  return (
    <>
      {/* ── Popup ── */}
      <div
        className="fixed z-[50] w-[300px]"
        style={{
          top: topPos,
          right: '18px',
          // ✅ translateX animation — GPU accelerated, smooth spring bounce in, ease-in out
          transform: sliding ? 'translateX(0)' : 'translateX(calc(100% + 36px))',
          transition: sliding
            ? 'transform 0.48s cubic-bezier(0.34, 1.35, 0.64, 1)'  // spring bounce on entry
            : 'transform 0.38s ease-in',                             // smooth exit to right
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="rounded-[10px] overflow-hidden flex items-stretch relative cursor-default"
          style={{ boxShadow: '0 6px 24px rgba(0,0,0,0.16)', background: cardBg }}>

          {/* Icon column */}
          <div className="w-[58px] flex-shrink-0 flex items-center justify-center"
            style={{ background: iconBg }}>
            {p.svgIcon}
          </div>

          {/* Content */}
          <div className="flex-1 px-3.5 pt-3 pb-3.5 pr-8">
            <div className="text-[13.5px] font-extrabold leading-[1.3] mb-1"
              style={{ color: textCol }}>{p.title}</div>
            <div className="text-[11.5px] font-medium leading-[1.45] mb-[9px]"
              style={{ color: subCol }}>{p.desc}</div>

            {/* ✅ Buttons — nowrap so they always stay on one row */}
            <div className="flex gap-[6px] items-center" style={{ flexWrap: 'nowrap' }}>

              {/* Main action button */}
              <button
                onClick={() => handleAction(p.mainBtn.action)}
                className="flex items-center gap-1.5 px-[11px] py-1 rounded-[6px]
                  text-[11px] font-extrabold cursor-pointer border-none
                  transition-all duration-150 hover:opacity-90 whitespace-nowrap"
                style={{ background: 'rgba(0,0,0,0.18)', color: textCol, fontFamily: 'inherit' }}>
                {p.mainBtn.icon}
                {p.mainBtn.label}
              </button>

              {/* Enquiry button */}
              <button
                onClick={() => handleAction(p.enqBtn.action)}
                className="flex items-center gap-1.5 px-[11px] py-1 rounded-[6px]
                  text-[11px] font-bold cursor-pointer
                  transition-all duration-150 hover:opacity-90 whitespace-nowrap"
                style={{
                  background: 'rgba(255,255,255,0.22)',
                  border: '1.5px solid rgba(255,255,255,0.5)',
                  color: textCol,
                  fontFamily: 'inherit',
                }}>
                {p.enqBtn.icon}
                {p.enqBtn.label}
              </button>
            </div>
          </div>

          {/* Timer bar */}
          <div className="absolute bottom-0 left-0 h-[3px] rounded-b-[10px]"
            style={{
              width: `${barWidth}%`,
              background: 'rgba(0,0,0,0.2)',
              transition: barWidth === 0
                ? `width ${remainRef.current}ms linear`
                : 'none',
            }}/>

          {/* Close */}
          <button
            onClick={() => slideOut(true)}
            className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center
              cursor-pointer bg-transparent border-none transition-opacity duration-150 hover:opacity-100 opacity-70"
            style={{ color: textCol }}>
            <CloseIcon/>
          </button>

        </div>
      </div>

      {/* ── Enquiry Modal ── */}
      {showModal && <EnquiryModal onClose={() => setShowModal(false)}/>}
    </>
  )
}