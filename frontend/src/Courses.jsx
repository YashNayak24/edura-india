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

    // Breadcrumb + ItemList schema
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

// ─── Duration bucket — matches sidebar filter values ─────────────
function getDurBucket(months) {
  if (!months) return "all";
  if (months <= 3)  return "short";
  if (months <= 6)  return "mid";
  if (months < 12)  return "long";
  return "year";
}

// ─── Main page ────────────────────────────────────────────────────
export default function Courses() {
  const [search,  setSearch]  = useState("");
  const [cat,     setCat]     = useState("all");
  const [dur,     setDur]     = useState("all");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search — API call tab ho jab user 400ms ke baad ruke
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), 400);
    return () => clearTimeout(t);
  }, [search]);

  // Fetch from backend — category aur search backend pe filter hote hain
  const { courses, loading, error } = useCourses({
    category: cat,
    search:   debouncedSearch,
  });

  // Duration filter — frontend pe karo (lightweight)
  const filtered = useMemo(() => {
    if (dur === "all") return courses;
    return courses.filter(c => getDurBucket(c.months) === dur);
  }, [courses, dur]);

  return (
    <div className="font-jakarta bg-[#F4F7FF] min-h-screen">
      <CoursesPageSEO />

      <CoursesBanner />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-7 py-7 pb-16
        grid grid-cols-1 lg:grid-cols-[272px_1fr] gap-6 items-start">

        <CoursesSidebar
          cat={cat} dur={dur}
          onCat={setCat} onDur={setDur}
          onClearCat={() => setCat("all")}
          onClearDur={() => setDur("all")}
        />

        <CoursesGrid
          courses={filtered}
          loading={loading}
          error={error}
          search={search}
          onSearch={setSearch}
          cat={cat}
          onClearCat={() => setCat("all")}
          onClearDur={() => setDur("all")}
        />
      </div>
    </div>
  );
}