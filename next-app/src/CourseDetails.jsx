"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { useCourse } from "./Usecourses";
import BookDemoForm from "./components/common/BookDemoForm";
import AlumniReviews from "./components/landingPage/AlumniReviews";

/* ═══════════════════════════════════════════════════
   BRAND COLORS
   Primary:   #094E93  Secondary: #0A5FAD
   Dark:      #073E75  Navy:      #0d1b3e
   Accent:    #F59E0B  BG light:  #EEF4FB
   ═══════════════════════════════════════════════════ */

/* ── Icons ───────────────────────────────────────────────────────── */
const GraduationCapIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" /></svg>);
const SearchIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>);
const BriefcaseIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>);
const StarIcon = ({ className = "w-4 h-4" }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>);
const ClockIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>);
const TargetIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>);
const CurrencyRupeeIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 3h12M6 8h12M6 13l8.5 8M6 13c0 0 4 0 5.5-2.5S13.5 8 11 8" /></svg>);
const BookOpenIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>);
const TrendingUpIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>);
const GlobeIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>);
const PenToolIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>);
const SmartphoneIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>);
const MailIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>);
const CpuIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>);
const ShoppingCartIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>);
const UsersIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>);
const DownloadIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>);
const PhoneIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18L6.5 2a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.64 9.5a16 16 0 0 0 6.86 6.86l1.56-1.61a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>);
const AwardIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>);
const ZapIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>);
const ShieldIcon = ({ className = "w-4 h-4" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>);
const MapPinIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>);
const BarChartIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>);
const VideoIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>);
const LinkIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>);
const ActivityIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>);
const FileTextIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>);
const MicIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>);
const InfinityIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 12c-2-2.5-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.5 6-4z" /><path d="M12 12c2 2.5 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.5-6 4z" /></svg>);
const NetworkIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="5" r="3" /><circle cx="5" cy="19" r="3" /><circle cx="19" cy="19" r="3" /><line x1="12" y1="8" x2="5" y2="16" /><line x1="12" y1="8" x2="19" y2="16" /></svg>);
const CheckBadgeIcon = ({ className = "w-5 h-5" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /><polyline points="9 12 11 14 15 10" /></svg>);
const ChevronDownIcon = ({ className = "w-4 h-4" }) => (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9" /></svg>);

/* ── Takeaway icon map ───────────────────────────────────────────── */
const TAKEAWAY_ICONS = [
  <BriefcaseIcon className="w-6 h-6" />,
  <AwardIcon className="w-6 h-6" />,
  <PenToolIcon className="w-6 h-6" />,
  <UsersIcon className="w-6 h-6" />,
  <CpuIcon className="w-6 h-6" />,
  <FileTextIcon className="w-6 h-6" />,
  <MicIcon className="w-6 h-6" />,
  <InfinityIcon className="w-6 h-6" />,
  <NetworkIcon className="w-6 h-6" />,
  <CheckBadgeIcon className="w-6 h-6" />,
];

/* ── Scroll Reveal Hook ──────────────────────────────────────────── */
function useFadeIn(delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => setVisible(true), delay); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return [ref, visible];
}

/* ── Global Styles ───────────────────────────────────────────────── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
    @keyframes fadeUp     { 0%{opacity:0;transform:translateY(20px)} 100%{opacity:1;transform:translateY(0)} }
    @keyframes scaleIn    { 0%{opacity:0;transform:scale(0.9)} 100%{opacity:1;transform:scale(1)} }
    @keyframes slideRight { 0%{opacity:0;transform:translateX(-20px)} 100%{opacity:1;transform:translateX(0)} }
    @keyframes toolsFwd   { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
    @keyframes toolsRev   { 0%{transform:translateX(-50%)} 100%{transform:translateX(0)} }
    .animate-fadeUp    { animation: fadeUp .6s ease both; }
    .animate-scaleIn   { animation: scaleIn .5s ease both; }
    .animate-slideRight{ animation: slideRight .5s ease both; }
    .sora    { font-family: 'Sora', sans-serif; }
    .dm-sans { font-family: 'DM Sans', sans-serif; }
  `}</style>
);

/* ── SEO Inject ──────────────────────────────────────────────────── */
function CourseDetailSEO({ course }) {
  useEffect(() => {
    if (!course) return;
    const seo = course.seo || {};
    document.title = seo.metaTitle || `${course.title} | EduraIndia`;

    const setMeta = (name, content, prop = false) => {
      if (!content) return;
      const attr = prop ? "property" : "name";
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) { tag = document.createElement("meta"); tag.setAttribute(attr, name); document.head.appendChild(tag); }
      tag.setAttribute("content", content);
    };

    setMeta("description", seo.metaDescription || course.description);
    setMeta("keywords", seo.keywords?.join(", "));
    setMeta("robots", "index, follow");
    setMeta("og:title", seo.ogTitle || course.title, true);
    setMeta("og:description", seo.ogDescription || course.description, true);
    setMeta("og:image", seo.ogImage?.url || course.bannerImage?.url, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", seo.canonicalUrl, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", seo.twitterTitle || course.title);
    setMeta("twitter:description", seo.twitterDescription || course.description);
    setMeta("twitter:image", seo.twitterImage?.url || seo.ogImage?.url);

    const canonical = seo.canonicalUrl || `https://eduraindia.com/courses/${course.slug}`;
    let link = document.querySelector("link[rel='canonical']");
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = canonical;

    const schemas = [
      {
        "@context": "https://schema.org", "@type": "Course",
        "name": course.title, "description": seo.metaDescription || course.description,
        "url": canonical, "image": course.thumbnail?.url,
        "inLanguage": course.language || "hi-IN", "educationalLevel": course.level,
        "provider": { "@type": "Organization", "name": "EduraIndia", "sameAs": "https://eduraindia.com" },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": course.mode === "Online" ? "online" : course.mode === "Offline" ? "onsite" : "blended",
          "location": { "@type": "Place", "name": "EduraIndia, South Delhi" },
        },
        ...(course.price?.amount && { "offers": { "@type": "Offer", "price": course.price.amount, "priceCurrency": course.price.currency || "INR", "availability": "https://schema.org/InStock" } }),
      },
      ...(course.faqs?.length ? [{
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": course.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
      }] : []),
      {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://eduraindia.com" },
          { "@type": "ListItem", "position": 2, "name": "Courses", "item": "https://eduraindia.com/courses" },
          { "@type": "ListItem", "position": 3, "name": course.title, "item": canonical },
        ],
      },
    ].filter(Boolean);

    schemas.forEach((schema, i) => {
      let tag = document.querySelector(`script[data-seo="${i}"]`);
      if (!tag) { tag = document.createElement("script"); tag.type = "application/ld+json"; tag.setAttribute("data-seo", i); document.head.appendChild(tag); }
      tag.textContent = JSON.stringify(schema);
    });

    return () => {
      document.querySelectorAll("script[data-seo]").forEach(t => t.remove());
      document.querySelector("link[rel='canonical']")?.remove();
    };
  }, [course]);
  return null;
}

/* ── Loading Skeleton ────────────────────────────────────────────── */
function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-[420px] bg-[#DDE5F8]" />
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="h-6 bg-[#DDE5F8] rounded w-1/4" />
          <div className="h-10 bg-[#DDE5F8] rounded w-3/4" />
          <div className="h-4 bg-[#DDE5F8] rounded w-full" />
          <div className="h-4 bg-[#DDE5F8] rounded w-5/6" />
        </div>
        <div className="h-64 bg-[#DDE5F8] rounded-2xl" />
      </div>
    </div>
  );
}

/* ══ HERO SECTION ════════════════════════════════════════════════ */
function HeroSection({ course, onEnquiryClick, onBookDemoClick }) {
  const [ref, visible] = useFadeIn();
  return (
    <section ref={ref} className={`bg-white pt-[150px] px-4 sm:px-6 lg:px-10 py-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-14 items-start">

        {/* LEFT */}
        <div>
          {course.badge && (
            <div className={`inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 sora ${visible ? "animate-scaleIn" : ""}`} style={{ animationDelay: "0.1s" }}>
              <StarIcon className="w-3 h-3 text-amber-500" /> {course.badge}
            </div>
          )}

          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d1b3e] leading-tight mb-4 sora ${visible ? "animate-fadeUp" : ""}`} style={{ animationDelay: "0.15s" }}>
            {course.title}
          </h1>

          <div className={`flex flex-wrap items-center gap-3 mb-5 ${visible ? "animate-fadeUp" : ""}`} style={{ animationDelay: "0.25s" }}>
            {course.rating?.average > 0 && (
              <>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className={`w-4 h-4 ${i < Math.round(course.rating.average) ? "text-amber-400" : "text-slate-300"}`} />)}
                </div>
                <span className="font-bold text-sm text-slate-800 sora">{course.rating.average}</span>
                <span className="text-slate-400 text-sm dm-sans">({course.rating.count} reviews)</span>
              </>
            )}
            {course.studentsEnrolled > 0 && (
              <span className="bg-[#EEF4FB] border border-blue-100 px-3 py-0.5 rounded-full text-xs font-semibold text-slate-600 flex items-center gap-1 dm-sans">
                <GraduationCapIcon className="w-3 h-3" /> {course.studentsEnrolled.toLocaleString()}+ Students
              </span>
            )}
            {course.language && (
              <span className="bg-[#EEF4FB] border border-blue-100 px-3 py-0.5 rounded-full text-xs font-semibold text-slate-600 flex items-center gap-1 dm-sans">
                <GlobeIcon className="w-3 h-3" /> {course.language}
              </span>
            )}
            {course.mode && (
              <span className="bg-[#EEF4FB] border border-blue-100 px-3 py-0.5 rounded-full text-xs font-semibold text-slate-600 flex items-center gap-1 dm-sans">
                <MapPinIcon className="w-3 h-3" /> {course.mode}
              </span>
            )}
          </div>

          <div className={`text-slate-500 text-base leading-relaxed mb-6 dm-sans ${visible ? "animate-fadeUp" : ""}`} style={{ animationDelay: "0.3s" }}>
            <p>{course.description}</p>
            {course.description2 && (
              <p className="mt-3">{course.description2}</p>
            )}
          </div>

          {course.descriptionHighlight && (
            <div className={`bg-[#EEF4FB] border-l-4 border-[#094E93] rounded-r-xl p-4 mb-7 italic text-slate-700 text-sm leading-relaxed dm-sans ${visible ? "animate-slideRight" : ""}`} style={{ animationDelay: "0.35s" }}>
              {course.descriptionHighlight}
            </div>
          )}

          <div className={`grid grid-cols-2 sm:grid-cols-4 border border-slate-200 rounded-2xl overflow-hidden shadow-sm mb-7 ${visible ? "animate-scaleIn" : ""}`} style={{ animationDelay: "0.4s" }}>
            {[
              { Icon: ClockIcon, val: course.duration, label: "Duration" },
              { Icon: TargetIcon, val: course.placementRate, label: "Placement" },
              { Icon: CurrencyRupeeIcon, val: course.averageSalary, label: "Avg Salary" },
              { Icon: BookOpenIcon, val: course.totalLectures ? `${course.totalLectures}+` : null, label: "Lectures" },
            ].filter(s => s.val).map(({ Icon, val, label }, i, arr) => (
              <div key={i} className={`flex flex-col items-center justify-center py-5 px-2 hover:bg-[#EEF4FB] transition-colors group cursor-default ${i < arr.length - 1 ? "border-r border-slate-200" : ""}`}>
                <Icon className="w-6 h-6 text-[#094E93] mb-1.5 group-hover:scale-110 transition-transform duration-200" />
                <div className="text-lg font-extrabold text-[#0d1b3e] sora">{val}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide mt-0.5 dm-sans">{label}</div>
              </div>
            ))}
          </div>

          {course.curriculumPdfUrl && (
            <a href={course.curriculumPdfUrl} target="_blank" rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 no-underline sora ${visible ? "animate-fadeUp" : ""}`}
              style={{ animationDelay: "0.5s", background: "linear-gradient(135deg, #094E93, #0A5FAD)", boxShadow: "0 4px 20px rgba(9,78,147,0.4)" }}>
              <DownloadIcon className="w-4 h-4" /> Download Curriculum PDF
            </a>
          )}
        </div>

        {/* RIGHT — Card */}
        <div className={`flex flex-col gap-4 lg:sticky lg:top-20 ${visible ? "animate-fadeUp" : ""}`} style={{ animationDelay: "0.2s" }}>
          <div className="w-full h-[350px] rounded-2xl flex items-center justify-center relative overflow-hidden group"
            style={{ background: "linear-gradient(135deg, #094E93 0%, #0d1b3e 100%)" }}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#073E75]/50 to-transparent" />
            {course.thumbnail?.url ? (
              <img src={course.thumbnail.url} alt={course.thumbnail.alt} className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <div className="w-20 h-20 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <BarChartIcon className="w-10 h-10 text-white" />
              </div>
            )}
            {course.badge && (
              <span className="absolute top-3 left-3 bg-amber-400 text-[#0d1b3e] px-3 py-0.5 rounded-full text-xs font-extrabold uppercase sora">{course.badge}</span>
            )}
            {course.duration && (
              <span className="absolute bottom-3 right-3 bg-black/50 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 sora">
                <ClockIcon className="w-3 h-3" /> {course.duration}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 flex flex-col gap-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <AwardIcon className="w-7 h-7 text-[#094E93]" />
              <div className="font-bold text-sm text-[#0d1b3e] sora">Certification</div>
              <div className="text-xs text-slate-500 dm-sans">Google + Meta + EduraIndia</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 flex flex-col gap-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <BriefcaseIcon className="w-7 h-7 text-emerald-600" />
              <div className="font-bold text-sm text-[#0d1b3e] sora">Placement</div>
              <div className="text-xs text-slate-500 dm-sans">{course.placementRate || "95%"} Success Rate</div>
            </div>
          </div>

          <div className="rounded-2xl p-5 text-white"
            style={{ background: "linear-gradient(135deg, #094E93 0%, #0d1b3e 100%)" }}>

            {/* Quote Icon */}
            <div>
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#f59e0b" style={{ opacity: 0.85 }}>
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Category label */}
            <p className="text-xs italic mt-1.5 mb-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>
              Career Guidance
            </p>

            {/* Heading */}
            <h2 className="text-2xl font-black leading-tight mb-1">
              Talk to an expert — chart your career path today
            </h2>

            {/* Subtext */}
            <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Free 30-min session with certified counsellors
            </p>

            {/* Buttons */}
            <div className="flex gap-2.5">
              <button
                onClick={onEnquiryClick}
                className="flex-1 text-white py-2.5 rounded-lg font-bold text-sm transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #094E93, #0A5FAD)" }}>
                Enquiry Now!
              </button>
              <button
                onClick={onBookDemoClick}
                className="flex-1 border text-white py-2.5 rounded-lg font-semibold text-sm transition-colors sora"
                style={{ borderColor: "rgba(255,255,255,0.3)", background: "transparent" }}>
                Free Demo
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ══ OVERVIEW + FORM SECTION ═════════════════════════════════════ */
// ✅ counsellingRef prop add kiya — form wale div pe lagaya
function OverviewSection({ course, counsellingRef }) {
  const [ref, visible] = useFadeIn();
  if (!course.overview?.description && !course.keyFeatures?.length) return null;
  return (
    <section ref={ref} className={`bg-[#EEF4FB] px-4 sm:px-6 lg:px-10 py-14 lg:py-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start">
        <div>
          <span className="inline-flex items-center gap-1.5 bg-blue-100 text-[#094E93] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3 sora">
            <BookOpenIcon className="w-3.5 h-3.5" /> Course Overview
          </span>

          {course.overview?.title && (
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1b3e] leading-snug mb-5 sora">
              {course.overview.title}
            </h2>
          )}

          {course.overview?.description && (
            <div className="text-slate-500 text-sm sm:text-base leading-relaxed space-y-3 mb-8 dm-sans">
              {course.overview.description.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}

          {course.prerequisites?.length > 0 && (
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 bg-blue-100 text-[#094E93] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 sora">
                Prerequisites
              </span>
              <ul className="flex flex-col gap-2">
                {course.prerequisites.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-500 dm-sans">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#094E93] flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">{i + 1}</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {course.keyFeatures?.length > 0 && (
            <>
              <span className="inline-flex items-center gap-1.5 bg-blue-100 text-[#094E93] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-5 sora">
                <ZapIcon className="w-3.5 h-3.5" /> Key Features
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {course.keyFeatures.map((text, i) => (
                  <div key={i}
                    className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 hover:border-[#094E93] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 group"
                    style={visible ? { animation: "fadeUp .5s ease both", animationDelay: `${i * 0.04}s` } : {}}>
                    <div className="w-9 h-9 bg-[#EEF4FB] group-hover:bg-blue-100 rounded-lg flex items-center justify-center text-[#094E93] flex-shrink-0 transition-colors">
                      <ZapIcon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 sora">{text}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* ✅ Counselling Form — ref yahan lagaya */}
        <div ref={counsellingRef}>
          <BookDemoForm formHead="Get Free Counselling" />
        </div>

      </div>
    </section>
  );
}

/* ══ SKILLS SECTION ══════════════════════════════════════════════ */
function SkillsSection({ course }) {
  const [ref, visible] = useFadeIn();
  if (!course.skillsCovered?.length) return null;
  return (
    <section ref={ref} className={`bg-white px-4 sm:px-6 lg:px-10 py-14 lg:py-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 bg-blue-100 text-[#094E93] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3 sora">
            <CpuIcon className="w-3.5 h-3.5" /> Skills You'll Master
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1b3e] mt-2 sora">
            {course.skillsCovered.length} In-demand <span className="text-[#094E93]">Skills Covered</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {course.skillsCovered.map((s, i) => (
            <div key={i}
              className="flex items-center gap-2.5 bg-[#EEF4FB] border border-blue-100 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:border-[#094E93] hover:text-[#094E93] hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 cursor-default sora"
              style={visible ? { animation: "fadeUp .4s ease both", animationDelay: `${i * 0.04}s` } : {}}>
              <ZapIcon className="w-4 h-4 text-[#094E93] flex-shrink-0" />
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ TOOLS SECTION ═══════════════════════════════════════════════ */
function ToolsSection({ course }) {
  const [ref, visible] = useFadeIn();
  if (!course.toolsCovered?.length) return null;

  const half = Math.ceil(course.toolsCovered.length / 2);
  const row1 = course.toolsCovered.slice(0, half);
  const row2 = course.toolsCovered.slice(half);

  const ToolRow = ({ items, rev }) => (
    <div className="overflow-hidden">
      <div className="flex gap-4 w-max" style={{ animation: `${rev ? "toolsRev 20s" : "toolsFwd 22s"} linear infinite` }}>
        {[...items, ...items].map((tool, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-3 min-w-[200px] hover:border-[#094E93] hover:shadow-lg transition-all duration-200 flex-shrink-0 group cursor-default">
            {tool.image?.url ? (
              <img src={tool.image.url} alt={tool.image.alt} className="w-9 h-9 object-contain flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
            ) : (
              <div className="w-9 h-9 bg-[#094E93]/10 rounded-xl flex items-center justify-center text-[#094E93] font-extrabold text-lg flex-shrink-0">
                {tool.name[0]}
              </div>
            )}
            <div>
              <div className="text-sm font-bold text-[#0d1b3e] sora">{tool.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section ref={ref} className={`bg-[#EEF4FB] py-14 lg:py-20 overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 bg-blue-100 text-[#094E93] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3 sora">
          <ZapIcon className="w-3.5 h-3.5" /> Tools You'll Learn
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1b3e] mt-2 sora">
          Industry-standard <span className="text-[#094E93]">Tools & Platforms</span>
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <ToolRow items={row1} rev={false} />
        {row2.length > 0 && <ToolRow items={row2} rev={true} />}
      </div>
    </section>
  );
}

/* ══ TAKEAWAYS SECTION ═══════════════════════════════════════════ */
function TakeawaysSection({ course }) {
  const [ref, visible] = useFadeIn();
  if (!course.keyTakeaways?.length) return null;
  return (
    <section ref={ref} className={`bg-white px-4 sm:px-6 lg:px-10 py-14 lg:py-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 bg-blue-100 text-[#094E93] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3 sora">
            <AwardIcon className="w-3.5 h-3.5" /> What You'll Get
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1b3e] mt-2 sora">
            Key <span className="text-[#094E93]">Takeaways</span> from This Course
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {course.keyTakeaways.map((text, i) => (
            <div key={i}
              className="group bg-[#EEF4FB] border border-blue-100 rounded-2xl p-5 text-center hover:bg-[#0d1b3e] hover:border-[#0d1b3e] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 cursor-default"
              style={visible ? { animation: "scaleIn .45s ease both", animationDelay: `${i * 0.05}s` } : {}}>
              <div className="w-12 h-12 bg-white group-hover:bg-white/10 rounded-xl flex items-center justify-center text-[#094E93] group-hover:text-white mx-auto mb-3 shadow-sm transition-all duration-300">
                {TAKEAWAY_ICONS[i] || <AwardIcon className="w-6 h-6" />}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0d1b3e] group-hover:text-white leading-snug transition-colors duration-300 sora">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ CAREER SECTION ══════════════════════════════════════════════ */
function CareerSection({ course, onCounsellingClick }) {
  const [ref, visible] = useFadeIn();
  if (!course.careerOpportunities?.length) return null;
  return (
    <section ref={ref} className={`bg-[#EEF4FB] px-4 sm:px-6 lg:px-10 py-14 lg:py-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-blue-100 text-[#094E93] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3 sora">
            <TrendingUpIcon className="w-3.5 h-3.5" /> Career Scope
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1b3e] mt-2 sora">
            Career <span className="text-[#094E93]">Opportunities</span> After This Course
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto dm-sans">
            Unlock high-demand roles across top industries and build a future-proof career.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {course.careerOpportunities.map(({ title, description }, i) => (
            <div key={i}
              className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-default"
              style={visible ? { animation: "fadeUp .5s ease both", animationDelay: `${i * 0.07}s` } : {}}>
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: "linear-gradient(90deg, #094E93, #0A5FAD)" }} />
              <div className="absolute bottom-2 right-3 text-7xl font-extrabold text-slate-100 select-none group-hover:text-blue-50 transition-colors duration-300 sora leading-none"
                style={{ lineHeight: 1 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 relative z-10 transition-all duration-300 group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, #EEF4FB, #dbeafe)" }}>
                <BriefcaseIcon className="w-5 h-5 text-[#094E93]" />
              </div>
              <div className="font-extrabold text-[#0d1b3e] text-sm mb-2 relative z-10 sora leading-snug">{title}</div>
              <div className="text-slate-400 text-xs leading-relaxed relative z-10 dm-sans">{description}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white border border-blue-100 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #094E93, #0A5FAD)" }}>
              <TrendingUpIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-extrabold text-[#0d1b3e] text-sm sora">Explore all career paths</div>
              <div className="text-slate-400 text-xs dm-sans">Talk to a career advisor for personalized guidance</div>
            </div>
          </div>
          <button
            onClick={onCounsellingClick}
            className="flex-shrink-0 text-white px-6 py-2.5 rounded-xl font-bold text-sm sora transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #094E93, #0A5FAD)", boxShadow: "0 4px 15px rgba(9,78,147,0.25)" }}>
            Book Free Counselling
          </button>
        </div>
      </div>
    </section>
  );
}

/* ══ JOURNEY SECTION ═════════════════════════════════════════════ */
function JourneySection({ course }) {
  const [ref, visible] = useFadeIn();
  if (!course.careerJourney?.length) return null;
  return (
    <section ref={ref} className={`bg-[#EEF4FB] px-4 sm:px-6 lg:px-10 py-14 lg:py-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-blue-100 text-[#094E93] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3 sora">
            <TrendingUpIcon className="w-3.5 h-3.5" /> Your Path Forward
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1b3e] mt-2 sora">
            From <span className="text-[#094E93]">Course to Career</span>

          </h2>
        </div>

        <div className="flex flex-col gap-4 lg:hidden">
          {course.careerJourney.map(({ step, role, experience, salaryRange }, i) => (
            <div key={i} className="flex items-start gap-4 bg-white border border-blue-100 rounded-2xl p-4 hover:border-[#094E93] hover:shadow-md transition-all"
              style={visible ? { animation: "slideRight .5s ease both", animationDelay: `${i * 0.08}s` } : {}}>
              <div className="w-10 h-10 rounded-full text-white flex items-center justify-center font-extrabold text-sm flex-shrink-0 sora" style={{ background: "#094E93", boxShadow: "0 0 0 3px rgba(9,78,147,0.2)" }}>
                {step || i + 1}
              </div>
              <div>
                <div className="font-extrabold text-[#0d1b3e] text-sm sora">{role}</div>
                {experience && <div className="text-xs text-slate-400 mt-0.5 dm-sans">{experience}</div>}
                {salaryRange && <div className="text-emerald-600 font-bold text-sm mt-1 sora">{salaryRange}</div>}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5" style={{ background: "linear-gradient(180deg, rgba(9,78,147,0.1), rgba(9,78,147,0.6), rgba(9,78,147,0.1))" }} />
          {course.careerJourney.map(({ step, role, experience, salaryRange }, i) => (
            <div key={i} className={`flex items-center mb-10 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              style={visible ? { animation: "fadeUp .5s ease both", animationDelay: `${i * 0.1}s` } : {}}>
              <div className={`w-[calc(50%-44px)] bg-white border border-blue-100 rounded-2xl p-5 hover:border-[#094E93] hover:shadow-lg transition-all duration-300 ${i % 2 === 0 ? "mr-auto text-right" : "ml-auto text-left"}`}>
                <div className="font-extrabold text-[#0d1b3e] text-sm sora">{role}</div>
                {experience && <div className="inline-block text-xs text-slate-400 bg-[#EEF4FB] border border-slate-200 px-2 py-0.5 rounded-full mt-1 dm-sans">{experience}</div>}
                {salaryRange && <div className="text-emerald-600 font-bold text-base mt-1.5 sora">{salaryRange}</div>}
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-11 h-11 rounded-full text-white flex items-center justify-center font-extrabold text-base z-10 sora"
                style={{ background: "#094E93", boxShadow: "0 0 0 4px white, 0 0 0 6px #094E93" }}>
                {step || i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ FAQ SECTION ═════════════════════════════════════════════════ */
function FAQSection({ course }) {
  const [open, setOpen] = useState(null);
  const [ref, visible] = useFadeIn();
  if (!course.faqs?.length) return null;
  return (
    <section ref={ref} className={`bg-white px-4 sm:px-6 lg:px-10 py-14 lg:py-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 bg-blue-100 text-[#094E93] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3 sora">
            FAQs
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1b3e] mt-2 sora">
            Frequently Asked <span className="text-[#094E93]">Questions</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2 dm-sans">Everything you need to know before enrolling</p>
        </div>

        <div className="flex flex-col gap-3">
          {course.faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "border-[#094E93] shadow-md" : "border-slate-200 hover:border-blue-200"}`}
                style={visible ? { animation: "fadeUp .4s ease both", animationDelay: `${i * 0.05}s` } : {}}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors ${isOpen ? "bg-[#094E93]" : "bg-white hover:bg-[#EEF4FB]"}`}
                  style={{ fontFamily: "inherit" }}>
                  <div className="flex items-center gap-3 pr-4">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-extrabold sora transition-colors ${isOpen ? "bg-white/20 text-white" : "bg-[#EEF4FB] text-[#094E93]"}`}>
                      {i + 1}
                    </span>
                    <span className={`font-bold text-sm sora transition-colors ${isOpen ? "text-white" : "text-[#0d1b3e]"}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${isOpen ? "bg-white/20 rotate-180" : "bg-[#EEF4FB]"}`}>
                    <ChevronDownIcon className={`w-3.5 h-3.5 transition-colors ${isOpen ? "text-white" : "text-[#094E93]"}`} />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-4 text-sm text-slate-600 leading-relaxed dm-sans bg-blue-50/40 border-t border-[#094E93]/20">
                    <div className="flex gap-3">
                      <div className="w-1 rounded-full flex-shrink-0 mt-1 bg-[#094E93]/30 self-stretch" />
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#EEF4FB] border border-blue-100 rounded-2xl px-6 py-5">
          <div>
            <div className="font-extrabold text-[#0d1b3e] text-sm sora">Still have questions?</div>
            <div className="text-slate-400 text-xs mt-0.5 dm-sans">Our advisors are available Mon–Sat, 9am–7pm</div>
          </div>
          <div className="flex gap-2.5 flex-shrink-0">
            <a href="tel:+919217489565"
              className="flex items-center gap-2 border border-[#094E93] text-[#094E93] px-4 py-2 rounded-xl text-xs font-bold sora hover:bg-[#094E93] hover:text-white transition-all duration-200 no-underline">
              <PhoneIcon className="w-3.5 h-3.5" /> Call Now
            </a>
            <a href="https://wa.me/919217489565?text=Hi%2C%20I%20have%20a%20question%20about%20your%20courses."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white px-4 py-2 rounded-xl text-xs font-bold sora transition-all duration-200 hover:-translate-y-0.5 no-underline"
              style={{ background: "linear-gradient(135deg, #094E93, #0A5FAD)" }}>
              <MailIcon className="w-3.5 h-3.5" /> WhatsApp Us
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ══ FOOTER CTA ══════════════════════════════════════════════════ */
// ✅ onCounsellingClick prop add kiya — "Get Free Counselling" button pe lagaya
function FooterCTA({ course, onBookDemoClick, onCounsellingClick }) {
  const [ref, visible] = useFadeIn();
  return (
    <div ref={ref} className="bg-[#EEF4FB] px-4 sm:px-6 lg:px-10 py-14 lg:py-20">
      <div
        className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative"
        style={{
          background: "linear-gradient(135deg, #0d1b3e 0%, #094E93 60%, #1a6fc4 100%)",
          boxShadow: "0 20px 60px rgba(9,78,147,0.35)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(26,111,196,0.4)" }} />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(9,78,147,0.3)" }} />

        <div
          className={`relative z-10 px-6 sm:px-10 lg:px-14 py-14 lg:py-16 flex flex-col items-center text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3 sora">
            Start Your Journey{" "}
            <span className="text-amber-400">Today</span>
          </h2>

          <p className="text-white/60 text-sm mb-8 dm-sans max-w-lg">
            Join {course.studentsEnrolled ? `${course.studentsEnrolled.toLocaleString()}+` : "1,240+"} students who transformed their careers with EduraIndia
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* ✅ Get Free Counselling — scroll to form */}
            <button
              onClick={onCounsellingClick}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-extrabold text-sm text-[#0d1b3e] transition-all duration-200 hover:-translate-y-0.5 sora"
              style={{
                background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
                boxShadow: "0 6px 24px rgba(245,158,11,0.45)",
              }}
            >
              <ZapIcon className="w-4 h-4" />
              Get Free Counselling
            </button>

            <button
              onClick={onBookDemoClick}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white border border-white/30 hover:bg-white/10 transition-all duration-200 sora"
            >
              <PhoneIcon className="w-4 h-4" />
              Book Free Demo Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══ MAIN EXPORT ═════════════════════════════════════════════════ */
export default function CourseDetails({ initialCourse = null, onBookDemoClick, onEnquiryClick }) {
  const { slug } = useParams();
  const { course, loading, error } = useCourse(slug, initialCourse);
  const router = useRouter();
  const navigate = router.push;

  // ✅ Counselling form ka ref
  const counsellingRef = useRef(null);

  // ✅ Scroll handler
  const scrollToCounselling = () => {
    counsellingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) return <LoadingSkeleton />;

  if (error) return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4">
      <div className="text-xl font-extrabold text-[#DC2626]">Course not found</div>
      <button onClick={() => navigate("/courses")} className="text-[#094E93] font-bold underline bg-transparent border-none cursor-pointer">
        Back to Courses
      </button>
    </div>
  );

  if (!course) return null;

  return (
    <div className="dm-sans bg-[#f5f7ff] text-slate-800 overflow-x-hidden">
      <GlobalStyles />
      <CourseDetailSEO course={course} />
      <HeroSection
        course={course}
        onEnquiryClick={onEnquiryClick}
        onBookDemoClick={onBookDemoClick}
      />
      {/* ✅ counsellingRef pass kiya */}
      <OverviewSection course={course} counsellingRef={counsellingRef} />
      <SkillsSection course={course} />
      <ToolsSection course={course} />
      <TakeawaysSection course={course} />
      <CareerSection course={course} onCounsellingClick={scrollToCounselling} />
      <JourneySection course={course} />
      <AlumniReviews/>
      <FAQSection course={course} />
      {/* ✅ onCounsellingClick pass kiya */}
      <FooterCTA
        course={course}
        onBookDemoClick={onBookDemoClick}
        onCounsellingClick={scrollToCounselling}
      />
    </div>
  );
}
