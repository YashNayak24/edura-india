"use client";
import { useState } from "react";
import BookDemoForm from "../common/BookDemoForm";
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

// ── Data ──────────────────────────────────────────────────────────────────────

const features = [
  { bg: '#EBF1FF', stroke: '#094E93', Icon: IcoMonitor, title: 'Online and Offline Classes', desc: 'Both online and offline classes available to suit your schedule.' },
  { bg: '#FEF3C7', stroke: '#D97706', Icon: IcoProject, title: 'Real Industry Projects', desc: 'Hands-on practice with real industry projects throughout the course.' },
  { bg: '#DCFCE7', stroke: '#16A34A', Icon: IcoRecord, title: 'Recorded Sessions & Study Material', desc: 'Get recorded sessions and study material for lifetime access.' },
  { bg: '#F3EEFF', stroke: '#7C3AED', Icon: IcoClock, title: 'Flexible Timings', desc: 'Flexible timings with weekday & weekend batches.' },
  { bg: '#FFF0F6', stroke: '#DB2777', Icon: IcoDemo, title: 'Free Demo Class Available', desc: 'Book your Free Demo Class or chat with us on WhatsApp!' },
];

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

          {/* ── Right: BookDemoForm component ── */}
          <BookDemoForm />

        </div>
      </div>
    </section>
  );
}