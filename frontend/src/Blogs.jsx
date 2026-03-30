import { useState, useEffect } from "react";

// Tailwind + Google Fonts (add to index.html or import in main.jsx):
// <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;700&display=swap" rel="stylesheet">

const TARGET_DATE = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now

function useCountdown(target) {
  const calc = () => {
    const diff = target - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function Tile({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 border border-[#e8ff47]/30 bg-[#094E93] overflow-hidden"
        style={{ fontFamily: "'Bebas Neue', cursive" }}
      >
        
        {/* scan line effect */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(232,255,71,0.02) 2px, rgba(232,255,71,0.02) 4px)"
          }}
        />
        <span className="text-5xl md:text-6xl text-[#e8ff47] z-10 tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span
        className="mt-2 text-[10px] tracking-[0.3em] text-[#666] uppercase"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Blogs() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <div
      className="relative min-h-screen bg-[#] text-white flex flex-col overflow-hidden"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      {/* Background noise texture */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      {/* Accent glow blob */}
      <div
        className="pointer-events-none fixed top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #e8ff47 0%, transparent 70%)" }}
      />

      {/* Header */}
      <header className="flex items-center justify-between px-8 pt-8 md:px-16 md:pt-12">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#e8ff47] animate-pulse" />
          <span className="text-xs tracking-[0.25em] text-[#555] uppercase">Your Brand</span>
        </div>
        <span className="text-xs tracking-[0.2em] text-[#333] uppercase">Est. 2025</span>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-12 py-20">

        {/* Big heading */}
        <div className="relative">
          <p className="text-xs tracking-[0.4em] text-[#e8ff47] uppercase mb-4">
            Something big is coming
          </p>
          <h1
            className="text-[clamp(4rem,16vw,13rem)] leading-none font-normal tracking-tight text-[#094E93]"
            style={{ fontFamily: "'Bebas Neue', cursive" }}
          >
            COMING
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #094E93" }}>
              SOON
            </span>
          </h1>
          {/* horizontal rule accent */}
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#094E93]/40" />
            <div className="w-1.5 h-1.5 bg-[#e8ff47] rotate-45" />
            <div className="h-px w-16 bg-[#094E93]/40" />
          </div>
        </div>

        {/* Countdown */}
        <div className="flex gap-4 md:gap-6">
          <Tile value={days} label="Days" />
          <Tile value={hours} label="Hours" />
          <Tile value={minutes} label="Mins" />
          <Tile value={seconds} label="Secs" />
        </div>

        
      </main>

      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;700&display=swap');
      `}</style>
    </div>
  );
}