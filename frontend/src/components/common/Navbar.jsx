import { useState, useEffect } from 'react';
import logo from '../../assets/navbar_logo.png';
import { NavLink, Link } from 'react-router-dom'


const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Courses', path: '/courses' },
  { label: 'Contact', path: '/contact' },
  { label: 'Blogs', path: '/blogs' },
]

const IcoEnquiry = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    <line x1="9" y1="10" x2="15" y2="10" />
    <line x1="9" y1="14" x2="12" y2="14" />
  </svg>
);

const IcoDemo = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

// TopBar height = h-10 = 40px, Navbar height = 68px
const TOPBAR_H = 40;

export default function Navbar({ onEnquiryClick }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY && y > 40) setHidden(true);
      else if (y < lastY) setHidden(false);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToDemo = () => {
    const section = document.getElementById('book-demo');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen(false); // mobile menu band karne ke liye
  };

  return (
    <nav
      className="fixed left-0 right-0 z-40 bg-white/90 backdrop-blur-xl border-b border-[#DDE5F8]"
      style={{
        top: TOPBAR_H,
        boxShadow: '0 2px 14px rgba(13,27,110,0.07)',
        // When hiding: move up by topbar (40px) + navbar (68px) = 108px total so both vanish
        transform: hidden ? `translateY(-${TOPBAR_H + 68}px)` : 'translateY(0)',
        transition: 'transform 0.32s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-8 flex items-center h-[68px] justify-between gap-4">

        {/* Logo */}
        <Link to={"/"} className="flex items-center no-underline flex-shrink-0">
          <img src={logo} alt="EDURA" className="h-[44px] w-auto object-contain" />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex gap-0.5 items-center">
          {links.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              end  // sirf exact match par active hoga
              className={({ isActive }) =>
                `text-[14px] font-medium no-underline px-[15px] py-2 rounded-lg transition-all whitespace-nowrap
        ${isActive
                  ? 'text-[#094E93] bg-[#EBF1FF] font-bold'
                  : 'text-[#5A6A8A] hover:bg-[#F0F5FF] hover:text-[#094E93]'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop action buttons */}
        <div className="hidden md:flex gap-2.5 items-center flex-shrink-0">
          <button onClick={onEnquiryClick} className="flex items-center gap-2 bg-transparent text-[#094E93] border-2 border-[#094E93]/30 rounded-[9px] px-5 py-[9px] text-[13.5px] font-bold font-jakarta cursor-pointer hover:bg-[#EBF1FF] hover:border-[#094E93] hover:-translate-y-px transition-all whitespace-nowrap">
            <IcoEnquiry size={15} />
            Enquiry Now
          </button>
          <button onClick={scrollToDemo} className="flex items-center gap-2 text-white border-0 rounded-[9px] px-[22px] py-[11px] text-[13.5px] font-bold font-jakarta cursor-pointer hover:-translate-y-px transition-all whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg,#094E93,#0A5FAD)', boxShadow: '0 4px 14px rgba(9,78,147,0.3)' }}>
            <IcoDemo size={14} />
            Book Free Demo
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer" onClick={() => setOpen(!open)}>
          <span className={`block w-6 h-0.5 bg-[#0D1E42] transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#0D1E42] transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#0D1E42] transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[#DDE5F8] px-4 py-4 flex flex-col gap-2">
          {links.map(l => (
            <NavLink
              key={l.path}         // ✅ l.path (string)
              to={l.path}          // ✅ routing
              end
              onClick={() => setOpen(false)}  // ✅ click par menu band ho
              className={({ isActive }) =>
                `text-[14px] font-medium py-2 px-3 rounded-lg transition-all no-underline
          ${isActive
                  ? 'text-[#094E93] bg-[#EBF1FF] font-bold'
                  : 'text-[#5A6A8A] hover:bg-[#F0F5FF] hover:text-[#094E93]'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <div className="flex gap-2 mt-2">
            <button onClick={onEnquiryClick} className="flex-1 flex md:hidden items-center justify-center gap-2 bg-transparent text-[#094E93] border-2 border-[#094E93]/30 rounded-[9px] py-2.5 text-[13px] font-bold font-jakarta cursor-pointer hover:bg-[#EBF1FF] transition-all">
              <IcoEnquiry size={14} />
              Enquiry Now
            </button>
            <button onClick={scrollToDemo} className="flex-1 flex md:hidden items-center justify-center gap-2 text-white border-0 rounded-[9px] py-2.5 text-[13px] font-bold font-jakarta cursor-pointer"
              style={{ background: 'linear-gradient(135deg,#094E93,#0A5FAD)' }}>
              <IcoDemo size={13} />
              Book Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}










