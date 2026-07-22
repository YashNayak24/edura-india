"use client";
// ─────────────────────────────────────────────────────────────────
//  Ye file sirf sidebar filter ke liye hai
//  Course data ab backend MongoDB se aata hai
//
//  ⚠️  IMPORTANT — Category `val` must EXACTLY match the `category`
//      field stored in MongoDB.
//      DB mein "Analytics" hai, isliye val: "Analytics" hai.
//      Sidebar label alag ho sakta hai (e.g. "Analyst").
// ─────────────────────────────────────────────────────────────────

export const CATEGORIES = [
  { val: "all",                    label: "All Categories",        dot: "#094E93" },
  { val: "Digital Marketing",      label: "Digital Marketing",     dot: "#059669" },
  { val: "Web Development",        label: "Web Development",       dot: "#DB2777" },
  { val: "Multimedia",             label: "Multimedia",            dot: "#7C3AED" },
  { val: "Programming",            label: "Programming",           dot: "#D97706" },
  { val: "Computer Fundamentals",  label: "Computer Fundamentals", dot: "#0891B2" },
  { val: "Analytics",              label: "Analyst",               dot: "#65A30D" }, // ✅ val = DB value, label = display
  { val: "Designing",              label: "Designing",             dot: "#EC4899" },
];

// ─── Duration buckets ─────────────────────────────────────────────
//  Parsed from course.duration string (e.g. "3-6 Months", "1-2 Years")
//  using the MAX value in the range.
//
//  short  →  max ≤  3 months   e.g. "1-3 Months", "2-3 Months"
//  mid    →  max ≤  6 months   e.g. "3-6 Months", "2-4 Months", "3-5 Months"
//  long   →  max ≤ 12 months   e.g. "4-8 Months", "4-6 Months"
//  year   →  max > 12 months   e.g. "1-2 Years"
export const DURATIONS = [
  { val: "all",   label: "All"          },
  { val: "short", label: "≤ 3 Months"  },
  { val: "mid",   label: "≤ 6 Months"  },
  { val: "long",  label: "≤ 12 Months" },
  { val: "year",  label: "1+ Year"     },
];

// ─── Levels ───────────────────────────────────────────────────────
//  MUST match `level` field values stored in MongoDB exactly.
//  Current DB values: "Beginner" | "Foundation" | "Professional"
export const LEVELS = [
  { val: "Beginner",     label: "Beginner"     }, // basicComputerCourse
  { val: "Foundation",   label: "Foundation"   }, // adcaCourse
  { val: "Professional", label: "Professional" }, // majority of courses
];

// ─── Learning Modes ───────────────────────────────────────────────
//  MUST match `mode` field values stored in MongoDB exactly.
//  Current DB: all courses have mode "Blended"
export const MODES = [
  { val: "Blended",              label: "Blended"               },
  { val: "Live Online",          label: "Live Online"           },
  { val: "Offline (Delhi NCR)",  label: "Offline (Delhi NCR)"  },
  { val: "Self-Paced",           label: "Self-Paced"            },
  { val: "Hybrid",               label: "Hybrid"                },
];