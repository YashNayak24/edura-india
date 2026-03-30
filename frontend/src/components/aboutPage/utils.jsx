import { useEffect, useRef, useState } from "react";

/* ── Global Animations (inject once at top level) ── */
export const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

    @keyframes gradientFlow {
      0%   { background-position: 0%   50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0%   50%; }
    }
    .gradient-text {
      background: linear-gradient(90deg,#F5A623 0%,#ffdd66 20%,#F5A623 40%,#1a6fd4 60%,#F5A623 80%,#ffcc44 100%);
      background-size: 400% 100%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: gradientFlow 4s ease-in-out infinite;
    }

    @keyframes floatY     { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-14px)} }
    @keyframes floatYSlow { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-10px)} }
    .float      { animation: floatY     4s ease-in-out infinite; }
    .float-slow { animation: floatYSlow 6s ease-in-out infinite; }

    @keyframes shine { 0%{left:-100%} 100%{left:200%} }
    .btn-shine { position:relative; overflow:hidden; }
    .btn-shine::after {
      content:''; position:absolute; top:0; left:-100%; width:60%; height:100%;
      background:linear-gradient(120deg,transparent,rgba(255,255,255,0.28),transparent);
      animation:shine 3s ease infinite;
    }

    @keyframes pulse-ring {
      0%  { box-shadow:0 0 0 0   rgba(245,166,35,0.5); }
      70% { box-shadow:0 0 0 8px rgba(245,166,35,0);   }
      100%{ box-shadow:0 0 0 0   rgba(245,166,35,0);   }
    }
    .pulse-dot { animation: pulse-ring 2s ease-out infinite; }

    @keyframes fadeInUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
    .fade-up-1 { animation: fadeInUp 0.8s ease 0.10s forwards; opacity:0; }
    .fade-up-2 { animation: fadeInUp 0.8s ease 0.25s forwards; opacity:0; }
    .fade-up-3 { animation: fadeInUp 0.8s ease 0.40s forwards; opacity:0; }

    .bento-card { transition: box-shadow .3s ease, transform .3s ease; }
    .bento-card:hover { transform:translateY(-4px); box-shadow:0 16px 40px rgba(9,78,147,.14); }

    .dot-pattern {
      background-image: radial-gradient(rgba(255,255,255,.1) 1px, transparent 1px);
      background-size: 22px 22px;
    }

    @keyframes marqueeScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
    .marquee-track { display:flex; width:max-content; animation:marqueeScroll 28s linear infinite; }
    .marquee-track:hover { animation-play-state:paused; }
  `}</style>
);

/* ── useReveal — scroll-triggered fade-up ── */
export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ── useCounter — animated number counter ── */
export function useCounter(target, suffix = "", decimals = false) {
  const ref = useRef(null);
  const [val, setVal] = useState("0" + suffix);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        let cur = 0;
        const step = Math.ceil(target / 55);
        const t = setInterval(() => {
          cur = Math.min(cur + step, target);
          setVal(decimals ? (cur / 10).toFixed(1) + suffix : cur.toLocaleString() + suffix);
          if (cur >= target) clearInterval(t);
        }, 28);
        obs.disconnect();
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, suffix, decimals]);
  return [ref, val];
}

/* ── Reveal — generic scroll-reveal wrapper ── */
export function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}