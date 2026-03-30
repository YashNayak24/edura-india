// ─────────────────────────────────────────────────────────────────
//  Ye file sirf sidebar filter ke liye hai
//  Course data ab backend MongoDB se aata hai
//  Jab categories database mein add ho jaaye toh
//  CATEGORIES bhi /api/categories se fetch karna
// ─────────────────────────────────────────────────────────────────

export const CATEGORIES = [
  { val: "all",                 label: "All Categories",    dot: "#094E93" },
  { val: "Digital Marketing",   label: "Digital Marketing", dot: "#059669" },
  { val: "Design",              label: "Design",            dot: "#7C3AED" },
  { val: "Coding",              label: "Coding",            dot: "#DB2777" },
  { val: "AI",                  label: "AI Courses",        dot: "#D97706" },
  { val: "Accounting & Finance",label: "Accounting",        dot: "#094E93" },
];

export const DURATIONS = [
  { val: "all",   label: "All"     },
  { val: "short", label: "≤ 3 Mo"  },
  { val: "mid",   label: "4–6 Mo"  },
  { val: "long",  label: "6+ Mo"   },
  { val: "year",  label: "1+ Year" },
];