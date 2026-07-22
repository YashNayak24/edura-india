"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

const courses = [
  { id: 1, image: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776177616/coding_b99b9m.png", route: "courses/full-stack-developer-course-delhi", title: "Coding" },
  { id: 2, image: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776177607/data_analyst_zhrd9v.png", route: "/courses/data-analyst-course-delhi", title: "Data Analyst" },
  { id: 3, image: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776177619/digital_marketing_h6mjpq.png", route: "/courses/digital-marketing-course-delhi", title: "Digital Marketing" },
  { id: 4, image: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776177620/graphic_design_bkd7kf.png", route: "/courses/web-designing-course-delhi", title: "Graphic Design" },
];

export default function CoursePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const router = useRouter();
  const navigate = router.push;

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => { setCurrentIndex(p => (p + 1) % courses.length); setFadeIn(true); }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const handleClose = useCallback(() => setIsVisible(false), []);

  const handleImageClick = useCallback(() => {
    navigate(courses[currentIndex].route);
    setIsVisible(false);
  }, [currentIndex, navigate]);

  const handleDotClick = useCallback((index) => {
    setFadeIn(false);
    setTimeout(() => { setCurrentIndex(index); setFadeIn(true); }, 300);
  }, []);

  if (!isVisible) return null;
  const current = courses[currentIndex];

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-lg" onClick={handleClose} aria-hidden="true" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
        <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg" style={{ animation: "popupEnter 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards" }}>
          
          {/* Close Button */}
          <button onClick={handleClose} className="absolute top-3 right-3 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-500 hover:text-gray-900 hover:scale-110 transition-all duration-200 border border-gray-200" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Card */}
          <div className="rounded-2xl overflow-hidden shadow-2xl cursor-pointer group" onClick={handleImageClick} title={`Go to ${current.title} course`}>
            <div className="relative w-full aspect-square bg-white">
              {courses.map((course, idx) => (
                <img
                  key={course.id}
                  src={course.image}
                  alt={`Edura ${course.title} course`}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ opacity: idx === currentIndex ? (fadeIn ? 1 : 0) : 0, transition: "opacity 0.3s ease-in-out" }}
                  draggable={false}
                  referrerPolicy="no-referrer"        // ← external URLs ke liye zaruri
                  crossOrigin="anonymous"             // ← CORS issues avoid karne ke liye
                  onError={(e) => { e.target.style.opacity = 0; }}  // ← broken image hide ho jaye
                />
              ))}
              <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="bg-white/90 text-gray-800 text-sm font-semibold px-4 py-1.5 rounded-full shadow">{current.title} Course →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes popupEnter { from { opacity:0; transform:scale(0.85) translateY(20px); } to { opacity:1; transform:scale(1) translateY(0); } }`}</style>
    </>
  );
}
