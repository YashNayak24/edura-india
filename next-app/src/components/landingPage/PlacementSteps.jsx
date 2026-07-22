"use client";
const steps = [
  {
    id: 1,
    title: "Profile Optimization",
    desc: "Build a powerful LinkedIn profile that attracts recruiters and opens the right career opportunities for you.",
    icon: (
      <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="#094E93" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Networking Strategy",
    desc: "Learn how to connect with the right professionals and grow your network to accelerate career growth.",
    icon: (
      <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Recruiter Visibility",
    desc: "Optimise your profile so recruiters can easily discover you — appear in the right searches at the right time.",
    icon: (
      <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="#7C3AED" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Job Opportunities",
    desc: "Use smart strategies to discover and apply for the best job opportunities that match your skills and goals.",
    icon: (
      <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="#16A34A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
];

export default function PlacementSteps({onEnquiryClick}) {
  return (
    <section
      className="w-full py-16 sm:py-16 px-4"
      style={{ background: "linear-gradient(160deg, #eef2ff 0%, #e8edff 100%)" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-[36px] sm:text-[40px] md:text-[46px] font-extrabold tracking-tight leading-tight text-[#0D1E42] mb-2">
            Placement{" "}
            <span className="text-[#094E93]">Mastery</span>
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#5A6A8A] max-w-lg mx-auto leading-relaxed">
            Build a powerful placement presence that opens career opportunities for you.
          </p>
        </div>

        {/* Steps grid */}
        <div className="relative">

          {/* Horizontal connector — visible on md+ only */}
          <div
            className="hidden md:block absolute z-0"
            style={{
              top: "60px",
              left: "calc(12.5%)",
              right: "calc(12.5%)",
              height: "2px",
              background:
                "linear-gradient(to right, #c5d4f7 0%, #094E93 30%, #094E93 70%, #c5d4f7 100%)",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-8 md:gap-2 relative z-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center px-3 group cursor-default"
              >
                {/* Circle */}
                <div className="relative mb-6">
                  {/* Number badge */}
                  <div
                    className="absolute z-10 flex items-center justify-center rounded-full text-white font-bold border-[2.5px] border-white select-none"
                    style={{
                      width: "30px",
                      height: "30px",
                      fontSize: "13px",
                      background: "#094E93",
                      top: "-3px",
                      right: "-3px",
                    }}
                  >
                    {step.id}
                  </div>

                  {/* Icon circle */}
                  <div
                    className="flex items-center justify-center rounded-full bg-white transition-all duration-300 ease-out group-hover:-translate-y-1.5 "
                    style={{
                      width: "100px",
                      height: "100px",
                      border: "1.5px solid #D8E2F8",
                      boxShadow: "0 4px 18px rgba(9,78,147,0.09), 0 1px 4px rgba(9,78,147,0.06)",
                      transition: "border 0.25s ease, box-shadow 0.25s ease, transform 0.3s ease",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.border = "2px solid #094E93";
                      e.currentTarget.style.boxShadow = "0 8px 28px rgba(9,78,147,0.22)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.border = "1.5px solid #D8E2F8";
                      e.currentTarget.style.boxShadow = "0 4px 18px rgba(9,78,147,0.09), 0 1px 4px rgba(9,78,147,0.06)";
                    }}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[15.5px] font-extrabold text-[#0D1E42] mb-2 tracking-tight leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[13.5px] text-[#5A6A8A] leading-[1.7] font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <button
          onClick={onEnquiryClick}
            className="inline-flex items-center gap-3 text-white font-bold text-[15px] px-10 py-[15px] rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98] select-none"
            style={{
              background: "#073E75",
              boxShadow: "0 8px 32px rgba(7,62,117,0.38)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="19"
              height="19"
              fill="none"
              stroke="white"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            Enquiry Now!
          </button>
        </div>

      </div>
    </section>
  );
}