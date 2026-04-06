// NotFound.jsx — EDura / SkillEdge style
// Colors: Navy #0D1B3E, Amber #F5A623, Light bg #F4F6FB
// Add to index.html: <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

import { useState, useEffect } from "react";

// ── SVG Icon Components ──────────────────────────────────────────────────────

const IconCourses = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

const IconPlay = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/>
  </svg>
);

const IconChat = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const IconBlog = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

// ── Data ─────────────────────────────────────────────────────────────────────

const POPULAR_LINKS = [
  { label: "Explore Courses", Icon: IconCourses, href: "/courses" },
  { label: "Enquiry Now!", Icon: IconPlay, href: null, action: "enquiry" },
  { label: "Contact Us", Icon: IconChat, href: "/contact" },
  { label: "Blogs", Icon: IconBlog, href: "/blogs" },
];

// ── Main Component ────────────────────────────────────────────────────────────

export default function NotFound({ onEnquiryClick, onBookDemoClick }) {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setDots((d) => (d + 1) % 4), 500);
    return () => clearInterval(id);
  }, []);


  const handleLinkClick = (e, link) => {
    if (link.action === "enquiry") {
      e.preventDefault();
      onEnquiryClick?.();
    }
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen bg-[#F4F6FB] flex flex-col">

      {/* Announcement bar */}
      <div className="bg-[#0D1B3E] text-white text-xs py-2 px-4 text-center tracking-wide">
        <span className="text-[#F5A623] font-semibold">New Batch Starting Soon</span>
        &nbsp;·&nbsp; Coding · UI/UX · Digital Marketing · Stock Market &nbsp;·&nbsp;
        <span className="text-[#F5A623] font-semibold">+91 99999 12345</span>
      </div>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center pt-[150px] px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-2xl overflow-hidden">

          {/* Navy top band with 404 */}
          <div className="bg-[#094E93] px-8 pt-10 pb-8 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="relative">
              <p className="text-[#F5A623] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                Error 404
              </p>
              <h1
                className="text-white font-extrabold leading-none"
                style={{ fontSize: "clamp(5rem, 18vw, 9rem)" }}
              >
                404
              </h1>
              <p className="text-blue-200 text-sm mt-1">
                Searching{".".repeat(dots)}
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="px-8 py-8 text-center">
            <h2 className="text-[#0D1B3E] font-bold text-2xl mb-2">
              Oops! Page Not Found
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto mb-8">
              Looks like this page went on a career break! The page you're looking for
              doesn't exist or may have been moved.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <a
                href="/"
                className="flex items-center justify-center gap-2 bg-[#094E93] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#162a5a] transition-colors"
              >
                ← Go Back Home
              </a>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-xs text-gray-400 uppercase tracking-wider">Or visit a popular page</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* Quick links — SVG icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {POPULAR_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href || "#"}
                  onClick={(e) => handleLinkClick(e, link)}
                  className="flex flex-col items-center gap-2 bg-[#F4F6FB] rounded-xl py-4 px-2 text-xs font-medium text-[#0D1B3E] hover:bg-[#e8edfa] transition-colors"
                >
                  <span className="text-[#094E93]">
                    <link.Icon />
                  </span>
                  {link.label}
                </a>
              ))}
            </div>

            {/* Free demo banner */}
            <div className="bg-[#FFF8EC] border border-[#F5A623]/30 rounded-xl px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-left">
                <p className="text-[#0D1B3E] font-semibold text-sm flex items-center gap-1.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                  Not sure where to start?
                </p>
                <p className="text-gray-500 text-xs mt-0.5">Book a free demo class — no commitment needed.</p>
              </div>
              <button
                onClick={onBookDemoClick}
                className="shrink-0 bg-[#F5A623] text-white text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-[#e09610] transition-colors"
              >
                Book Free Demo →
              </button>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}