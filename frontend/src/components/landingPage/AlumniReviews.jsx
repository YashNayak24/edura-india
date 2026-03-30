import { useState, useEffect, useRef } from "react";

const reviews = [
  {
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face",
    name: "Mansi Verma",
    role: "Graphic Designer",
    text: "I choose to learn from the best when it comes to graphic designing — Dice Academy is that place. I appreciate the care and attention evident in every aspect of the course: the institution, the excellent tutors, and the enthusiastic atmosphere.",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    name: "Rahul Kapoor",
    role: "UI/UX Designer",
    text: "The mentors at Dice Academy pushed me far beyond my limits. Every project felt real and industry-level. I owe my entire career trajectory to what I learnt here.",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    name: "Priya Sharma",
    role: "Brand Designer",
    text: "Joining Dice Academy was the best investment of my career. The community, the network, and the guidance I received here is something I cannot put a price on.",
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    name: "Arjun Joshi",
    role: "Motion Designer",
    text: "The atmosphere at Dice Academy is electric. Every single class inspired me to push my creative boundaries further than I ever thought possible.",
  },
];

/* ─── Stars ── */
function Stars() {
  return (
    <div className="flex gap-1 mb-5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-5 h-5" fill="#F5A623">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

/* ─── Review Card ── */
function ReviewCard({ review, state }) {
  const [hovered, setHovered] = useState(false);

  const base = "absolute top-0 left-0 right-0 transition-all duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]";
  const vis =
    state === "active" ? "opacity-100 translate-x-0 pointer-events-auto relative"
    : state === "exit" ? "opacity-0 -translate-x-10 pointer-events-none"
    : "opacity-0 translate-x-10 pointer-events-none";

  return (
    <div
      className={`${base} ${vis}
        bg-white rounded-[20px] p-8 sm:p-12
        flex flex-col sm:flex-row gap-8 sm:gap-12 items-center
        border border-[#DDE5F8] overflow-hidden
      `}
      style={{ boxShadow: "0 4px 40px rgba(9,78,147,0.07), 0 1px 4px rgba(0,0,0,0.04)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Big quote bg */}
      <span
        className="absolute top-[-30px] right-[30px] text-[200px] leading-none pointer-events-none select-none font-serif"
        style={{ color: "rgba(9,78,147,0.05)" }}
      >
        "
      </span>

      {/* Photo */}
      <div className="flex-shrink-0 w-full sm:w-[220px] h-[200px] sm:h-[220px] rounded-[16px] overflow-hidden relative">
        <img
          src={review.img}
          alt={review.name}
          className="w-full h-full object-cover transition-all duration-500"
          style={{ filter: hovered ? "grayscale(0%)" : "grayscale(100%)" }}
        />
        <div
          className="absolute inset-0 rounded-[16px]"
          style={{ background: "linear-gradient(135deg, rgba(9,78,147,0.15), transparent)" }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 relative z-10">
        <Stars />
        <p className="text-[17px] sm:text-[18px] leading-[1.8] text-[#5A6A8A] italic mb-7"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          "{review.text}"
        </p>
        <div className="flex items-center gap-4">
          <div className="w-8 h-[2px] rounded-full bg-[#094E93]" />
          <div>
            <div className="text-[19px] font-semibold text-[#0D1E42] font-jakarta">
              {review.name}
            </div>
            <div className="text-[13px] text-[#8A9ABF] mt-1 tracking-[0.5px] font-jakarta">
              {review.role}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Nav Button ── */
function NavBtn({ dir, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-12 h-12 rounded-full border-[1.5px] flex items-center justify-center
        transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
      style={{
        background:  hovered ? "#094E93" : "#fff",
        borderColor: hovered ? "#094E93" : "#DDE5F8",
        color:       hovered ? "#fff"    : "#5A6A8A",
        boxShadow:   hovered ? "0 6px 16px rgba(9,78,147,0.28)" : "0 2px 8px rgba(9,78,147,0.06)",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 transition-transform duration-200"
        strokeWidth={2.2}
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: hovered ? `translateX(${dir === -1 ? "-1.5px" : "1.5px"})` : "translateX(0)" }}
      >
        {dir === -1
          ? <polyline points="15 18 9 12 15 6" />
          : <polyline points="9 18 15 12 9 6"  />
        }
      </svg>
    </button>
  );
}

/* ─── Main Component ── */
export default function AlumniReviews() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState(null);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const goTo = (next) => {
    if (animating || next === current) return;
    setAnimating(true);
    setPrev(current);
    setCurrent(next);
    setTimeout(() => { setPrev(null); setAnimating(false); }, 450);
  };

  const changeSlide = (dir) => {
    goTo((current + dir + reviews.length) % reviews.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => changeSlide(1), 5000);
    return () => clearInterval(timerRef.current);
  }, [current, animating]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
      />

      <section className="bg-[#F4F7FF] px-5 sm:px-10 py-20 sm:py-[100px]">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-[7px] bg-[#EBF1FF] border border-[#DDE5F8]
            text-[#094E93] px-[14px] py-1 rounded-full text-[11px] font-bold tracking-[0.07em]
            uppercase mb-4 font-jakarta">
            Alumni Reviews
          </div>
          <h2 className="font-jakarta text-[clamp(28px,4vw,48px)] font-extrabold text-[#0D1E42]
            tracking-[-0.03em] mb-3">
            What Our <span className="text-[#094E93]">Alumni Speak</span>
          </h2>
          {/* <div
            className="w-14 h-[3px] rounded-full mx-auto my-4"
            style={{ background: "linear-gradient(90deg, #094E93, #0A5FAD)" }}
          /> */}
          <p className="text-[15px] text-[#5A6A8A] font-medium tracking-[0.3px] font-jakarta">
            Hear from our students about their experience at SkillEdge
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-[960px] mx-auto">
          <div className="relative min-h-[340px] sm:min-h-[280px]">
            {reviews.map((r, i) => {
              const state =
                i === current ? "active"
                : i === prev   ? "exit"
                : "hidden";
              return <ReviewCard key={i} review={r} state={state} />;
            })}
          </div>

          {/* Nav */}
          <div className="flex justify-center gap-4 mt-10">
            <NavBtn dir={-1} onClick={() => changeSlide(-1)} />
            <NavBtn dir={1}  onClick={() => changeSlide(1)}  />
          </div>
        </div>

      </section>
    </>
  );
}