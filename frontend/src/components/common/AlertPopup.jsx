import { useState, useEffect, useRef, useCallback } from 'react'
import BookDemoForm from './BookDemoForm'

/* ══════════════════════════════════════════════════════════════════
   CONSTANTS
══════════════════════════════════════════════════════════════════ */
const SHOW_DURATION = 5000
const WAIT_DURATION = 30000
const FIRST_DELAY   = 4000

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
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
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
const ModalCloseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

/* ══════════════════════════════════════════════════════════════════
   POPUP DATA — sirf 2 buttons: Book Demo + Enquiry Now
══════════════════════════════════════════════════════════════════ */
const POPUPS = [
  {
    theme:   { card: '#4cbfbf', icon: '#3aadad', textCol: '#fff', subCol: 'rgba(255,255,255,0.88)' },
    svgIcon: <GraduationIcon col="white"/>,
    title:   'Book Your Free Demo Class!',
    desc:    'Limited seats — no commitment needed.',
  },
  {
    theme:   { card: '#f5c842', icon: '#e0b530', textCol: '#7a5500', subCol: 'rgba(100,65,0,0.82)' },
    svgIcon: <FireIcon col="rgba(100,65,0,0.85)"/>,
    title:   'Flat 40% OFF — Batch!',
    desc:    "Offer ends tonight. Grab before it's gone.",
  },
  {
    theme:   { card: '#e8546a', icon: '#d43e55', textCol: '#fff', subCol: 'rgba(255,255,255,0.88)' },
    svgIcon: <ClockIcon col="white"/>,
    title:   'Only Few Seats Left — Hurry!',
    desc:    'April batch bhar rahi hai. Jaldi enroll karo.',
  },
  {
    theme:   { card: '#4a90d9', icon: '#3578c4', textCol: '#fff', subCol: 'rgba(255,255,255,0.88)' },
    svgIcon: <BriefcaseIcon col="white"/>,
    title:   'Job Guarantee Ya Paise Wapas!',
    desc:    '94% placement rate. Resume + referrals free.',
  },
  {
    theme:   { card: '#4cba7a', icon: '#38a566', textCol: '#fff', subCol: 'rgba(255,255,255,0.88)' },
    svgIcon: <PhoneCallIcon col="white"/>,
    title:   'Free Counselling Call!',
    desc:    'Confused? Expert free mein guide karega.',
  },
]

/* ══════════════════════════════════════════════════════════════════
   BOOK DEMO MODAL
══════════════════════════════════════════════════════════════════ */
function BookDemoModal({ onClose }) {
  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
      onClick={handleBackdrop}
    >
      <div
        className="relative w-full max-w-[480px] max-h-[90vh] overflow-y-auto rounded-[20px]"
        style={{ animation: 'modalPop 0.35s cubic-bezier(0.34,1.35,0.64,1) both' }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 border border-[#DDE5F8] text-[#5A6A8A] hover:text-[#0D1E42] hover:bg-white transition-all cursor-pointer"
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}
        >
          <ModalCloseIcon />
        </button>
        <BookDemoForm />
      </div>
      <style>{`
        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.88) translateY(20px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
      `}</style>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════════
   MAIN POPUP COMPONENT
══════════════════════════════════════════════════════════════════ */
export default function AlertPopup({ onEnquiryClick }) {
  const [visible,       setVisible]       = useState(false)
  const [sliding,       setSliding]       = useState(false)
  const [popupIdx,      setPopupIdx]      = useState(0)
  const [barWidth,      setBarWidth]      = useState(100)
  const [topPos,        setTopPos]        = useState(18)
  const [showBookModal, setShowBookModal] = useState(false)

  const hideTimerRef  = useRef(null)
  const waitTimerRef  = useRef(null)
  const barAnimRef    = useRef(null)
  const pausedRef     = useRef(false)
  const elapsedRef    = useRef(0)
  const startTimeRef  = useRef(null)
  const remainRef     = useRef(SHOW_DURATION)

  const startBar = useCallback((remaining) => {
    clearTimeout(barAnimRef.current)
    setBarWidth((remaining / SHOW_DURATION) * 100)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setBarWidth(0)
      })
    })
  }, [])

  const slideOut = useCallback((scheduleNext) => {
    clearTimeout(hideTimerRef.current)
    setSliding(false)
    setTimeout(() => setVisible(false), 400)
    if (scheduleNext) {
      setTimeout(() => {
        setPopupIdx(i => (i + 1) % POPUPS.length)
      }, 2000)
      clearTimeout(waitTimerRef.current)
      waitTimerRef.current = setTimeout(() => show(), WAIT_DURATION)
    }
  }, [])

  const show = useCallback(() => {
    elapsedRef.current = 0
    pausedRef.current  = false
    remainRef.current  = SHOW_DURATION
    const top = TOP_POSITIONS[Math.floor(Math.random() * TOP_POSITIONS.length)]
    setTopPos(top)
    setVisible(true)
    setSliding(false)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSliding(true)
        startBar(SHOW_DURATION)
        startTimeRef.current = Date.now()
        hideTimerRef.current = setTimeout(() => {
          if (!pausedRef.current) slideOut(true)
        }, SHOW_DURATION)
      })
    })
  }, [slideOut, startBar])

  useEffect(() => {
    waitTimerRef.current = setTimeout(show, FIRST_DELAY)
    return () => {
      clearTimeout(waitTimerRef.current)
      clearTimeout(hideTimerRef.current)
    }
  }, [show])

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

  const popup = POPUPS[popupIdx]

  return (
    <>
      {visible && (
        <div
          className="fixed z-[50] w-[300px]"
          style={{
            top: topPos,
            right: '18px',
            transform: sliding ? 'translateX(0)' : 'translateX(calc(100% + 36px))',
            transition: sliding
              ? 'transform 0.48s cubic-bezier(0.34, 1.35, 0.64, 1)'
              : 'transform 0.38s ease-in',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="rounded-[10px] overflow-hidden flex items-stretch relative cursor-default"
            style={{ boxShadow: '0 6px 24px rgba(0,0,0,0.16)', background: popup.theme.card }}
          >
            {/* Icon column */}
            <div
              className="w-[58px] flex-shrink-0 flex items-center justify-center"
              style={{ background: popup.theme.icon }}
            >
              {popup.svgIcon}
            </div>

            {/* Content */}
            <div className="flex-1 px-3.5 pt-3 pb-3.5 pr-8">
              <div
                className="text-[13.5px] font-extrabold leading-[1.3] mb-1"
                style={{ color: popup.theme.textCol }}
              >
                {popup.title}
              </div>
              <div
                className="text-[11.5px] font-medium leading-[1.45] mb-[9px]"
                style={{ color: popup.theme.subCol }}
              >
                {popup.desc}
              </div>

              {/* ── 2 Buttons only ── */}
              <div className="flex gap-[6px] items-center" style={{ flexWrap: 'nowrap' }}>
                {/* Book Demo */}
                <button
                  onClick={() => { slideOut(true); setShowBookModal(true) }}
                  className="flex items-center gap-1.5 px-[11px] py-1 rounded-[6px] text-[11px] font-extrabold cursor-pointer border-none transition-all duration-150 hover:opacity-90 whitespace-nowrap"
                  style={{ background: 'rgba(0,0,0,0.18)', color: popup.theme.textCol, fontFamily: 'inherit' }}
                >
                  <CalendarIcon />
                  Book Demo
                </button>

                {/* Enquiry Now */}
                <button
                  onClick={() => { slideOut(true); onEnquiryClick?.() }}
                  className="flex items-center gap-1.5 px-[11px] py-1 rounded-[6px] text-[11px] font-bold cursor-pointer transition-all duration-150 hover:opacity-90 whitespace-nowrap"
                  style={{
                    background: 'rgba(255,255,255,0.22)',
                    border: '1.5px solid rgba(255,255,255,0.5)',
                    color: popup.theme.textCol,
                    fontFamily: 'inherit',
                  }}
                >
                  <EnquiryIcon />
                  Enquiry Now
                </button>
              </div>
            </div>

            {/* Timer bar */}
            <div
              className="absolute bottom-0 left-0 h-[3px] rounded-b-[10px]"
              style={{
                width: `${barWidth}%`,
                background: 'rgba(0,0,0,0.2)',
                transition: barWidth === 0
                  ? `width ${remainRef.current}ms linear`
                  : 'none',
              }}
            />

            {/* Close */}
            <button
              onClick={() => slideOut(true)}
              className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center cursor-pointer bg-transparent border-none transition-opacity duration-150 hover:opacity-100 opacity-70"
              style={{ color: popup.theme.textCol }}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      )}

      {/* Book Demo Modal */}
      {showBookModal && (
        <BookDemoModal onClose={() => setShowBookModal(false)} />
      )}
    </>
  )
}