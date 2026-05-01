// import { useState, useMemo }  from "react";
// import { useEffect }          from "react";
// import { useCourses }         from "./Usecourses";
// import CoursesBanner          from "./components/coursesPage/CoursesBanner";
// import CoursesSidebar         from "./components/coursesPage/CoursesSidebar";
// import CoursesGrid            from "./components/coursesPage/CoursesGrid";

// // ─── SEO meta inject ─────────────────────────────────────────────
// function CoursesPageSEO() {
//   useEffect(() => {
//     document.title = "All Courses | Best Institute in Delhi — EduraIndia";

//     const setMeta = (name, content, prop = false) => {
//       const attr = prop ? "property" : "name";
//       let tag = document.querySelector(`meta[${attr}="${name}"]`);
//       if (!tag) { tag = document.createElement("meta"); tag.setAttribute(attr, name); document.head.appendChild(tag); }
//       tag.setAttribute("content", content);
//     };

//     setMeta("description", "Explore 125+ courses in Digital Marketing, Design, Coding, AI & Degree Programs at EduraIndia Delhi. 100% placement support.");
//     setMeta("robots", "index, follow");
//     setMeta("og:title",       "All Courses — EduraIndia Delhi", true);
//     setMeta("og:description", "125+ professional courses with placement support. Join EduraIndia, Delhi's top institute.", true);
//     setMeta("og:type",        "website", true);

//     // Breadcrumb + ItemList schema
//     const schemas = [
//       {
//         "@context": "https://schema.org",
//         "@type": "BreadcrumbList",
//         itemListElement: [
//           { "@type": "ListItem", position: 1, name: "Home",    item: "https://eduraindia.com" },
//           { "@type": "ListItem", position: 2, name: "Courses", item: "https://eduraindia.com/courses" },
//         ],
//       },
//     ];

//     schemas.forEach((schema, i) => {
//       let tag = document.querySelector(`script[data-seo="${i}"]`);
//       if (!tag) { tag = document.createElement("script"); tag.type = "application/ld+json"; tag.setAttribute("data-seo", i); document.head.appendChild(tag); }
//       tag.textContent = JSON.stringify(schema);
//     });

//     return () => document.querySelectorAll("script[data-seo]").forEach(t => t.remove());
//   }, []);

//   return null;
// }

// // ─── Duration bucket — matches sidebar filter values ─────────────
// function getDurBucket(months) {
//   if (!months) return "all";
//   if (months <= 3)  return "short";
//   if (months <= 6)  return "mid";
//   if (months < 12)  return "long";
//   return "year";
// }

// // ─── Main page ────────────────────────────────────────────────────
// export default function Courses() {
//   const [search,  setSearch]  = useState("");
//   const [cat,     setCat]     = useState("all");
//   const [dur,     setDur]     = useState("all");
//   const [debouncedSearch, setDebouncedSearch] = useState("");

//   // Debounce search — API call tab ho jab user 400ms ke baad ruke
//   useEffect(() => {
//     const t = setTimeout(() => setDebouncedSearch(search), 400);
//     return () => clearTimeout(t);
//   }, [search]);

//   // Fetch from backend — category aur search backend pe filter hote hain
//   const { courses, loading, error } = useCourses({
//     category: cat,
//     search:   debouncedSearch,
//   });

//   // Duration filter — frontend pe karo (lightweight)
//   const filtered = useMemo(() => {
//     if (dur === "all") return courses;
//     return courses.filter(c => getDurBucket(c.months) === dur);
//   }, [courses, dur]);

//   return (
//     <div className="font-jakarta bg-[#F4F7FF] min-h-screen">
//       <CoursesPageSEO />

//       <CoursesBanner />

//       <div className="max-w-[1400px] mx-auto px-4 sm:px-7 py-7 pb-16
//         grid grid-cols-1 lg:grid-cols-[272px_1fr] gap-6 items-start">

//         <CoursesSidebar
//           cat={cat} dur={dur}
//           onCat={setCat} onDur={setDur}
//           onClearCat={() => setCat("all")}
//           onClearDur={() => setDur("all")}
//         />

//         <CoursesGrid
//           courses={filtered}
//           loading={loading}
//           error={error}
//           search={search}
//           onSearch={setSearch}
//           cat={cat}
//           onClearCat={() => setCat("all")}
//           onClearDur={() => setDur("all")}
//         />
//       </div>
//     </div>
//   );
// }





























import { useState, useMemo }  from "react";
import { useEffect }          from "react";
import { useCourses }         from "./Usecourses";
import CoursesBanner          from "./components/coursesPage/CoursesBanner";
import CoursesSidebar         from "./components/coursesPage/CoursesSidebar";
import CoursesGrid            from "./components/coursesPage/CoursesGrid";

// ─── SEO meta inject ─────────────────────────────────────────────
function CoursesPageSEO() {
  useEffect(() => {
    document.title = "All Courses | Best Institute in Delhi — EduraIndia";

    const setMeta = (name, content, prop = false) => {
      const attr = prop ? "property" : "name";
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) { tag = document.createElement("meta"); tag.setAttribute(attr, name); document.head.appendChild(tag); }
      tag.setAttribute("content", content);
    };

    setMeta("description", "Explore 125+ courses in Digital Marketing, Design, Coding, AI & Degree Programs at EduraIndia Delhi. 100% placement support.");
    setMeta("robots", "index, follow");
    setMeta("og:title",       "All Courses — EduraIndia Delhi", true);
    setMeta("og:description", "125+ professional courses with placement support. Join EduraIndia, Delhi's top institute.", true);
    setMeta("og:type",        "website", true);

    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home",    item: "https://eduraindia.com" },
          { "@type": "ListItem", position: 2, name: "Courses", item: "https://eduraindia.com/courses" },
        ],
      },
    ];

    schemas.forEach((schema, i) => {
      let tag = document.querySelector(`script[data-seo="${i}"]`);
      if (!tag) { tag = document.createElement("script"); tag.type = "application/ld+json"; tag.setAttribute("data-seo", i); document.head.appendChild(tag); }
      tag.textContent = JSON.stringify(schema);
    });

    return () => document.querySelectorAll("script[data-seo]").forEach(t => t.remove());
  }, []);

  return null;
}

// ─────────────────────────────────────────────────────────────────
//  parseDurationToMonths
//  course.duration is a STRING like "3-6 Months" or "1-2 Years"
//  We take the MAX value of the range and convert to months.
//
//  Examples:
//    "1-3 Months" → 3
//    "3-6 Months" → 6
//    "4-8 Months" → 8
//    "1-2 Years"  → 24
//    "2-4 Months" → 4
// ─────────────────────────────────────────────────────────────────
function parseDurationToMonths(durationStr) {
  if (!durationStr || typeof durationStr !== "string") return null;

  const s = durationStr.toLowerCase().trim();

  // "1-2 Years" or "2 Years" → convert to months (×12)
  if (s.includes("year")) {
    const m = s.match(/(\d+)\s*(?:-\s*(\d+))?\s*year/);
    if (m) {
      const maxVal = m[2] ? parseInt(m[2]) : parseInt(m[1]);
      return maxVal * 12;
    }
  }

  // "3-6 Months" or "3 Months" → take the MAX number
  if (s.includes("month")) {
    const m = s.match(/(\d+)\s*(?:-\s*(\d+))?\s*month/);
    if (m) {
      return m[2] ? parseInt(m[2]) : parseInt(m[1]);
    }
  }

  return null;
}

// ─────────────────────────────────────────────────────────────────
//  getDurBucket
//  Maps a parsed month count to the sidebar filter bucket:
//
//  short  →  ≤  3 months
//  mid    →  ≤  6 months
//  long   →  ≤ 12 months
//  year   →  > 12 months
// ─────────────────────────────────────────────────────────────────
function getDurBucket(durationStr) {
  const months = parseDurationToMonths(durationStr);
  if (months === null) return "unknown";
  if (months <= 3)  return "short";
  if (months <= 6)  return "mid";
  if (months <= 12) return "long";
  return "year";
}

// ─── Main page ────────────────────────────────────────────────────
export default function Courses() {
  const [search,  setSearch]  = useState("");
  const [cat,     setCat]     = useState("all");
  const [dur,     setDur]     = useState("all");
  const [levels,  setLevels]  = useState([]);   // [] = show all
  const [modes,   setModes]   = useState([]);   // [] = show all

  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), 400);
    return () => clearTimeout(t);
  }, [search]);

  // Backend fetch (category + search filtered on server)
  const { courses, loading, error } = useCourses({
    category: cat,
    search:   debouncedSearch,
  });

  // ─── Frontend filters: duration + level + mode ────────────────
  const filtered = useMemo(() => {
    let result = courses;

    // Duration — uses parsed duration string from course.duration
    if (dur !== "all") {
      result = result.filter(c => getDurBucket(c.duration) === dur);
    }

    // Level — match course.level (exact string from DB)
    if (levels.length > 0) {
      result = result.filter(c => c.level && levels.includes(c.level));
    }

    // Mode — match course.mode (exact string from DB)
    if (modes.length > 0) {
      result = result.filter(c => c.mode && modes.includes(c.mode));
    }

    return result;
  }, [courses, dur, levels, modes]);

  // Toggle helpers (multi-select)
  const toggleLevel = (val) =>
    setLevels(prev => prev.includes(val) ? prev.filter(l => l !== val) : [...prev, val]);

  const toggleMode = (val) =>
    setModes(prev => prev.includes(val) ? prev.filter(m => m !== val) : [...prev, val]);

  // Clear everything
  const clearAll = () => {
    setCat("all");
    setDur("all");
    setLevels([]);
    setModes([]);
    setSearch("");
  };

  return (
    <div className="font-jakarta bg-[#F4F7FF] min-h-screen">
      <CoursesPageSEO />
      <CoursesBanner />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-7 py-7 pb-16
        grid grid-cols-1 lg:grid-cols-[272px_1fr] gap-6 items-start">

        <CoursesSidebar
          cat={cat}       dur={dur}
          levels={levels} modes={modes}
          onCat={setCat}  onDur={setDur}
          onToggleLevel={toggleLevel}
          onToggleMode={toggleMode}
          onClearCat={() => setCat("all")}
          onClearDur={() => setDur("all")}
          onClearLevels={() => setLevels([])}
          onClearModes={() => setModes([])}
          onClearAll={clearAll}
        />

        <CoursesGrid
          courses={filtered}
          loading={loading}
          error={error}
          search={search}
          onSearch={setSearch}
          cat={cat}
          dur={dur}
          levels={levels}
          modes={modes}
          onClearCat={() => setCat("all")}
          onClearDur={() => setDur("all")}
          onClearLevel={(l) => setLevels(prev => prev.filter(x => x !== l))}
          onClearMode={(m) => setModes(prev => prev.filter(x => x !== m))}
          onClearAll={clearAll}
        />
      </div>
    </div>
  );
}