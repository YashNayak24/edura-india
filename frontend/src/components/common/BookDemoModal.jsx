import { useEffect, useState } from 'react'
import BookDemoForm from './BookDemoForm'

const ModalCloseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

export default function BookDemoModal({ open = false, onClose }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      requestAnimationFrame(() => setVisible(true))
    }
  }, [open])

  const handleClose = () => {
    setVisible(false)
    setTimeout(() => {
      document.body.style.overflow = ''
      onClose?.()
    }, 350)
  }

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape' && open) handleClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(4px)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.35s ease',
      }}
    >
      <div
        className="relative w-full max-w-[540px] max-h-[90vh] overflow-y-auto rounded-[20px]"
        style={{
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.88) translateY(20px)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.42s cubic-bezier(.22,1,.36,1), opacity 0.35s ease',
        }}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 border border-[#DDE5F8] text-[#5A6A8A] hover:text-[#0D1E42] hover:bg-white transition-all cursor-pointer"
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}
        >
          <ModalCloseIcon />
        </button>
        <BookDemoForm />
      </div>
    </div>
  )
}