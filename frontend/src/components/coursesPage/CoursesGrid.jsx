import { useState }    from "react";
import { useNavigate } from "react-router-dom";
import { CATEGORIES }  from "./courseData";  // sirf CATEGORIES aur DURATIONS ke liye — course data nahi

// ─── Badge colors map (badgeType ki jagah badge string use hota hai) ─
const BADGE_COLOR = {
  "Most Popular": "rgba(9,78,147,0.9)",
  "Hot":          "rgba(220,38,38,0.9)",
  "New":          "rgba(245,166,35,0.9)",
  "Trending":     "rgba(5,150,105,0.9)",
  "Bestseller":   "rgba(124,58,237,0.9)",
  "High Demand":  "rgba(219,39,119,0.9)",
};

// ─── Category gradients ───────────────────────────────────────────
const CAT_GRADIENT = {
  "Digital Marketing":  "linear-gradient(135deg,#059669,#34D399)",
  "Design":             "linear-gradient(135deg,#7C3AED,#A78BFA)",
  "Coding":             "linear-gradient(135deg,#DB2777,#F472B6)",
  "AI":                 "linear-gradient(135deg,#D97706,#FBBF24)",
  "Accounting & Finance":"linear-gradient(135deg,#094E93,#4D8BFF)",
  "default":            "linear-gradient(135deg,#094E93,#0A5FAD)",
};

// ─── Duration label ───────────────────────────────────────────────
const durLabel = (d) => d || "—";

// ─── Download icon ────────────────────────────────────────────────
const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" fill="none" stroke="white" strokeWidth={2.5}>
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

// ─── Skeleton card ────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="bg-white border border-[#DDE5F8] rounded-[18px] overflow-hidden animate-pulse">
      <div className="h-[160px] bg-[#E8EEFF]"/>
      <div className="p-[16px_18px_18px] flex flex-col gap-3">
        <div className="h-3 bg-[#E8EEFF] rounded w-1/3"/>
        <div className="h-4 bg-[#E8EEFF] rounded w-3/4"/>
        <div className="h-3 bg-[#E8EEFF] rounded w-full"/>
        <div className="h-3 bg-[#E8EEFF] rounded w-5/6"/>
        <div className="h-8 bg-[#E8EEFF] rounded-lg mt-2"/>
      </div>
    </div>
  );
}

// ─── Course Card ──────────────────────────────────────────────────
function CourseCard({ course, listView }) {
  const navigate  = useNavigate();
  const gradient  = CAT_GRADIENT[course.category] || CAT_GRADIENT["default"];
  const badgeBg   = BADGE_COLOR[course.badge]     || "rgba(9,78,147,0.9)";
  const thumbUrl  = course.thumbnail?.url;

  return (
    <div
      onClick={() => navigate(`/courses/${course.slug}`)}
      className={`bg-white border border-[#DDE5F8] rounded-[18px] overflow-hidden
        flex transition-all duration-[240ms] group cursor-pointer
        hover:-translate-y-[5px] hover:shadow-[0_18px_48px_rgba(9,78,147,0.1)] hover:border-[rgba(9,78,147,0.18)]
        ${listView ? "flex-row max-h-[180px]" : "flex-col"}`}
      style={{ animation: "fadeUp .35s ease both" }}
    >
      {/* ── Thumbnail ── */}
      <div className={`relative overflow-hidden flex items-center justify-center flex-shrink-0
        ${listView ? "w-[220px] min-w-[220px]" : "h-[160px]"}`}>

        {thumbUrl ? (
          <img src={thumbUrl} alt={course.thumbnail.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.07]"/>
        ) : (
          <div className="absolute inset-0 transition-transform duration-[400ms] group-hover:scale-[1.07]" style={{ background: gradient }}/>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/28"/>

        {course.badge && (
          <span className="absolute top-3 left-3 z-10 text-[9.5px] font-extrabold tracking-[0.07em]
            uppercase px-[9px] py-[3px] rounded-[5px] text-white backdrop-blur-[8px]"
            style={{ background: badgeBg }}>
            {course.badge}
          </span>
        )}

        <span className="absolute bottom-[10px] right-[10px] z-10 bg-black/50 text-white
          text-[10.5px] font-bold px-[9px] py-[3px] rounded-[5px] backdrop-blur-[6px]">
          {durLabel(course.duration)}
        </span>
      </div>

      {/* ── Body ── */}
      <div className={`flex flex-col flex-1 ${listView ? "p-[14px_18px] overflow-hidden" : "p-[16px_18px_18px]"}`}>

        {/* Category + Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.07em] px-[9px] py-[3px] rounded-full bg-[#EBF1FF] text-[#094E93]">
            {course.category}
          </span>
          {course.rating?.average > 0 && (
            <div className="flex items-center gap-[5px]">
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="#094E93">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              <span className="text-[11.5px] font-extrabold text-[#0D1E42]">{course.rating.average}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <div className="text-[15.5px] font-extrabold text-[#0D1E42] mb-[10px] leading-[1.25] tracking-[-0.025em]">
          {course.title}
        </div>

        {/* Description */}
        <div className={`text-[12.5px] text-[#5A6A8A] font-medium leading-[1.65] mb-[14px] flex-1
          ${listView ? "line-clamp-2" : ""}`}>
          {course.description}
        </div>

        {/* Meta pills */}
        <div className="flex flex-wrap gap-[6px] mb-3">
          {course.duration && (
            <div className="flex items-center gap-1 bg-[#F4F7FF] border border-[#DDE5F8] rounded-[6px] px-[9px] py-[3px] text-[11px] font-semibold text-[#5A6A8A]">
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="#5A6A8A" strokeWidth={2}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {course.duration}
            </div>
          )}
          {course.mode && (
            <div className="flex items-center gap-1 bg-[#F4F7FF] border border-[#DDE5F8] rounded-[6px] px-[9px] py-[3px] text-[11px] font-semibold text-[#5A6A8A]">
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="#5A6A8A" strokeWidth={2}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              {course.mode}
            </div>
          )}
        </div>

        {/* Skills tags — grid view only */}
        {!listView && course.skillsCovered?.length > 0 && (
          <div className="flex flex-wrap gap-[5px] mb-[14px]">
            {course.skillsCovered.slice(0, 4).map(s => (
              <span key={s} className="bg-[#F4F7FF] border border-[#DDE5F8] text-[#5A6A8A] text-[10px] font-bold px-2 py-[2px] rounded-[4px]">
                {s}
              </span>
            ))}
            {course.skillsCovered.length > 4 && (
              <span className="bg-[#F4F7FF] border border-[#DDE5F8] text-[#5A6A8A] text-[10px] font-bold px-2 py-[2px] rounded-[4px]">
                +{course.skillsCovered.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-[#DDE5F8] pt-[14px] mt-auto flex items-center justify-start gap-[7px]">
          <button
            onClick={e => { e.stopPropagation(); navigate(`/courses/${course.slug}`); }}
            className="px-[14px] py-2 text-[#094E93] border-[1.5px] border-[#DDE5F8] rounded-[8px]
              text-[12px] font-bold bg-transparent cursor-pointer transition-all duration-[180ms]
              hover:border-[#094E93] hover:bg-[#EBF1FF]"
            style={{ fontFamily: "inherit" }}>
            Details
          </button>
          {course.curriculumPdfUrl && (
            <a
              href={course.curriculumPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="inline-flex items-center gap-[6px] px-4 py-2 text-white border-none rounded-[8px]
                text-[12px] font-bold cursor-pointer transition-all duration-[180ms]
                hover:-translate-y-px hover:shadow-[0_6px_16px_rgba(9,78,147,0.35)] whitespace-nowrap no-underline"
              style={{ background: "#094E93", boxShadow: "0 3px 10px rgba(9,78,147,0.25)", fontFamily: "inherit" }}>
              <DownloadIcon/>
              Download Brochure
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ══ MAIN EXPORT ════════════════════════════════════════════════════
export default function CoursesGrid({ courses, loading, error, search, onSearch, cat, onClearCat, onClearDur }) {
  const [sortBy,   setSortBy]   = useState("popular");
  const [listView, setListView] = useState(false);

  const catLabel = CATEGORIES.find(c => c.val === cat)?.label || "All Categories";

  const sorted = [...courses].sort((a, b) => {
    if (sortBy === "rating")   return (b.rating?.average || 0) - (a.rating?.average || 0);
    if (sortBy === "newest")   return new Date(b.createdAt) - new Date(a.createdAt);
    if (sortBy === "students") return (b.studentsEnrolled || 0) - (a.studentsEnrolled || 0);
    return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);  // popular default
  });

  return (
    <main>

      {/* ── Search bar ── */}
      <div className="relative mb-4">
        <svg viewBox="0 0 24 24" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" fill="none" stroke="#8A9ABF" strokeWidth={2}>
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="text"
          value={search}
          onChange={e => onSearch(e.target.value)}
          placeholder="Search courses, skills..."
          className="w-full pl-10 pr-4 py-[10px] bg-white border-[1.5px] border-[#DDE5F8] rounded-[12px]
            text-[13.5px] text-[#0D1E42] outline-none transition-all duration-150
            focus:border-[#094E93] focus:shadow-[0_0_0_3px_rgba(9,78,147,0.08)]"
          style={{ fontFamily: "inherit" }}
        />
        {search && (
          <button onClick={() => onSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A9ABF] hover:text-[#0D1E42] bg-transparent border-none cursor-pointer p-0">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        )}
      </div>

      {/* ── Sort bar ── */}
      <div className="flex items-center justify-between bg-white border border-[#DDE5F8]
        rounded-[12px] px-[18px] py-3 mb-5 gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-bold text-[#0D1E42]">Courses</span>
          <span className="text-[12.5px] text-[#5A6A8A]">
            Showing <strong className="text-[#094E93]">{sorted.length}</strong> results
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[12.5px] font-semibold text-[#5A6A8A] hidden sm:block">Sort by:</span>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}
            className="py-[6px] pl-[10px] pr-7 border-[1.5px] border-[#DDE5F8] rounded-[8px]
              text-[12.5px] font-semibold text-[#0D1E42] bg-[#F4F7FF] outline-none cursor-pointer appearance-none"
            style={{
              fontFamily: "inherit",
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%235A6A8A' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat", backgroundPosition: "right 8px center",
            }}>
            <option value="popular">Most Popular</option>
            <option value="newest">Newest First</option>
            <option value="rating">Highest Rated</option>
            <option value="students">Most Students</option>
          </select>

          {/* Grid / List toggle */}
          <div className="flex gap-1">
            {[
              { mode: false, icon: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></> },
              { mode: true,  icon: <><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></> },
            ].map(({ mode, icon }) => (
              <button key={String(mode)} onClick={() => setListView(mode)}
                className="w-8 h-8 rounded-[7px] border-[1.5px] flex items-center justify-center cursor-pointer transition-all duration-150"
                style={{ background: listView === mode ? "#094E93" : "#F4F7FF", borderColor: listView === mode ? "#094E93" : "#DDE5F8" }}>
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" fill="none" stroke={listView === mode ? "#fff" : "#5A6A8A"} strokeWidth={2}>{icon}</svg>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Active filter tag ── */}
      <div className="flex items-center gap-2 flex-wrap mb-[18px]">
        <span className="text-[12px] font-bold text-[#5A6A8A]">Active:</span>
        <span onClick={onClearCat}
          className="flex items-center gap-[6px] bg-[#EBF1FF] border border-[rgba(9,78,147,0.2)]
            text-[#094E93] text-[11.5px] font-bold px-[10px] py-1 rounded-full cursor-pointer hover:bg-[#D6E4FF]">
          {catLabel}
          <svg viewBox="0 0 24 24" className="w-[11px] h-[11px]" fill="none" stroke="#094E93" strokeWidth={2.5}>
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </span>
      </div>

      {/* ── States: loading / error / empty / cards ── */}
      {loading ? (
        <div className={`grid gap-[18px] ${listView ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"}`}>
          {[1, 2, 3, 4, 5, 6].map(i => <SkeletonCard key={i}/>)}
        </div>
      ) : error ? (
        <div className="text-center py-16">
          <div className="text-[18px] font-extrabold text-[#DC2626] mb-2">Something went wrong</div>
          <div className="text-[14px] text-[#5A6A8A]">{error}</div>
        </div>
      ) : sorted.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-[#F4F7FF] rounded-[16px] mx-auto mb-4 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#8A9ABF" strokeWidth={1.5}>
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <div className="text-[18px] font-extrabold text-[#0D1E42] mb-2">No courses found</div>
          <div className="text-[14px] text-[#5A6A8A]">Try adjusting your filters or search term</div>
        </div>
      ) : (
        <div className={`grid gap-[18px] ${listView ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"}`}>
          {sorted.map(c => <CourseCard key={c._id} course={c} listView={listView}/>)}
        </div>
      )}

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </main>
  );
}