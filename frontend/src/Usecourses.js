// import { useState, useEffect } from "react";

// // ─────────────────────────────────────────────────────────────────
// //  API base URL — .env se aata hai
// // ─────────────────────────────────────────────────────────────────
// const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// console.log("%c[API] BASE URL →", "color: violet; font-weight: bold;", BASE);

// // ─────────────────────────────────────────────────────────────────
// //  useCourses  — courses listing page ke liye
// // ─────────────────────────────────────────────────────────────────
// export function useCourses({ category = "all", search = "" } = {}) {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error,   setError]   = useState(null);

//   useEffect(() => {
//     const controller = new AbortController();

//     async function fetch_() {
//       try {
//         setLoading(true);
//         setError(null);

//         const params = new URLSearchParams();
//         if (category && category !== "all") params.set("category", category);
//         if (search)                          params.set("search",   search);

//         const url = `${BASE}/courses?${params}`;

//         console.group("%c[useCourses] Fetching courses list", "color: dodgerblue; font-weight: bold;");
//         console.log("🌐 Route hit  →", "GET", url);
//         console.log("📦 Filters   →", { category, search });
//         console.groupEnd();

//         const res  = await fetch(url, { signal: controller.signal });

//         console.log(
//           "%c[useCourses] Response received",
//           "color: dodgerblue;",
//           "| Status:", res.status, res.statusText,
//           "| URL:", res.url
//         );

//         const json = await res.json();

//         console.log("%c[useCourses] Raw JSON →", "color: dodgerblue;", json);

//         if (!json.success) throw new Error(json.message);

//         console.log(
//           "%c[useCourses] ✅ Courses loaded →",
//           "color: green; font-weight: bold;",
//           `${json.count} course(s)`,
//           json.data
//         );

//         setCourses(json.data);
//       } catch (err) {
//         if (err.name !== "AbortError") {
//           console.error("%c[useCourses] ❌ Error →", "color: red; font-weight: bold;", err.message);
//           setError(err.message);
//         } else {
//           console.warn("%c[useCourses] ⚠️ Request aborted", "color: orange;");
//         }
//       } finally {
//         setLoading(false);
//         console.log("%c[useCourses] Loading complete", "color: gray;");
//       }
//     }

//     fetch_();
//     return () => {
//       console.warn("%c[useCourses] 🧹 Cleanup — aborting request", "color: orange;");
//       controller.abort();
//     };
//   }, [category, search]);

//   return { courses, loading, error };
// }

// // ─────────────────────────────────────────────────────────────────
// //  useCourse  — single course detail page ke liye
// // ─────────────────────────────────────────────────────────────────
// export function useCourse(slug) {
//   const [course,  setCourse]  = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error,   setError]   = useState(null);

//   useEffect(() => {
//     if (!slug) {
//       console.warn("%c[useCourse] ⚠️ No slug provided — skipping fetch", "color: orange;");
//       return;
//     }

//     const controller = new AbortController();

//     async function fetch_() {
//       try {
//         setLoading(true);
//         setError(null);

//         const url = `${BASE}/courses/${slug}`;

//         console.group("%c[useCourse] Fetching single course", "color: mediumseagreen; font-weight: bold;");
//         console.log("🌐 Route hit  →", "GET", url);
//         console.log("🔑 Slug       →", slug);
//         console.groupEnd();

//         const res  = await fetch(url, { signal: controller.signal });

//         console.log(
//           "%c[useCourse] Response received",
//           "color: mediumseagreen;",
//           "| Status:", res.status, res.statusText,
//           "| URL:", res.url
//         );

//         const json = await res.json();

//         console.log("%c[useCourse] Raw JSON →", "color: mediumseagreen;", json);

//         if (!json.success) throw new Error(json.message);

//         console.log(
//           "%c[useCourse] ✅ Course loaded →",
//           "color: green; font-weight: bold;",
//           json.data?.title,
//           json.data
//         );

//         setCourse(json.data);
//       } catch (err) {
//         if (err.name !== "AbortError") {
//           console.error("%c[useCourse] ❌ Error →", "color: red; font-weight: bold;", err.message);
//           setError(err.message);
//         } else {
//           console.warn("%c[useCourse] ⚠️ Request aborted", "color: orange;");
//         }
//       } finally {
//         setLoading(false);
//         console.log("%c[useCourse] Loading complete", "color: gray;");
//       }
//     }

//     fetch_();
//     return () => {
//       console.warn("%c[useCourse] 🧹 Cleanup — aborting request", "color: orange;");
//       controller.abort();
//     };
//   }, [slug]);

//   return { course, loading, error };
// }

















import { useState, useEffect } from "react";

// ─────────────────────────────────────────────────────────────────
//  API base URL — .env se aata hai
// ─────────────────────────────────────────────────────────────────
const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

console.log("%c[API] BASE URL →", "color: violet; font-weight: bold;", BASE);


// ─────────────────────────────────────────────────────────────────
//  fetchWithRetry — timeout + auto retry helper
//  - 8 second timeout per attempt
//  - 3 retries with 1s gap between each
// ─────────────────────────────────────────────────────────────────
async function fetchWithRetry(url, retries = 3) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000); // 8s timeout

  try {
    console.log(`%c[fetchWithRetry] Attempt left: ${retries + 1} → ${url}`, "color: slateblue;");

    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    return await res.json();
  } catch (err) {
    clearTimeout(timeout);

    // Agar retries baaki hain aur AbortError nahi hai toh dobara try karo
    if (retries > 0 && err.name !== "AbortError") {
      console.warn(`%c[fetchWithRetry] ⚠️ Failed, retrying in 1s... (${retries} left)`, "color: orange;", err.message);
      await new Promise(r => setTimeout(r, 1000)); // 1s wait
      return fetchWithRetry(url, retries - 1);
    }

    throw err;
  }
}


// ─────────────────────────────────────────────────────────────────
//  useCourses  — courses listing page ke liye
// ─────────────────────────────────────────────────────────────────
export function useCourses({ category = "all", search = "" } = {}) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetch_() {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();
        if (category && category !== "all") params.set("category", category);
        if (search)                          params.set("search",   search);

        const url = `${BASE}/courses?${params}`;

        console.group("%c[useCourses] Fetching courses list", "color: dodgerblue; font-weight: bold;");
        console.log("🌐 Route hit  →", "GET", url);
        console.log("📦 Filters   →", { category, search });
        console.groupEnd();

        const json = await fetchWithRetry(url);

        if (cancelled) return; // component unmount ho gaya toh state set mat karo

        console.log("%c[useCourses] Raw JSON →", "color: dodgerblue;", json);

        if (!json.success) throw new Error(json.message);

        console.log(
          "%c[useCourses] ✅ Courses loaded →",
          "color: green; font-weight: bold;",
          `${json.count} course(s)`,
          json.data
        );

        setCourses(json.data);
      } catch (err) {
        if (!cancelled) {
          console.error("%c[useCourses] ❌ Error →", "color: red; font-weight: bold;", err.message);
          setError(err.message);
        } else {
          console.warn("%c[useCourses] ⚠️ Request cancelled (unmounted)", "color: orange;");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
          console.log("%c[useCourses] Loading complete", "color: gray;");
        }
      }
    }

    fetch_();

    return () => {
      cancelled = true;
      console.warn("%c[useCourses] 🧹 Cleanup — component unmounted", "color: orange;");
    };
  }, [category, search]);

  return { courses, loading, error };
}


// ─────────────────────────────────────────────────────────────────
//  useCourse  — single course detail page ke liye
// ─────────────────────────────────────────────────────────────────
export function useCourse(slug) {
  const [course,  setCourse]  = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    if (!slug) {
      console.warn("%c[useCourse] ⚠️ No slug provided — skipping fetch", "color: orange;");
      return;
    }

    let cancelled = false;

    async function fetch_() {
      try {
        setLoading(true);
        setError(null);

        const url = `${BASE}/courses/${slug}`;

        console.group("%c[useCourse] Fetching single course", "color: mediumseagreen; font-weight: bold;");
        console.log("🌐 Route hit  →", "GET", url);
        console.log("🔑 Slug       →", slug);
        console.groupEnd();

        const json = await fetchWithRetry(url);

        if (cancelled) return;

        console.log("%c[useCourse] Raw JSON →", "color: mediumseagreen;", json);

        if (!json.success) throw new Error(json.message);

        console.log(
          "%c[useCourse] ✅ Course loaded →",
          "color: green; font-weight: bold;",
          json.data?.title,
          json.data
        );

        setCourse(json.data);
      } catch (err) {
        if (!cancelled) {
          console.error("%c[useCourse] ❌ Error →", "color: red; font-weight: bold;", err.message);
          setError(err.message);
        } else {
          console.warn("%c[useCourse] ⚠️ Request cancelled (unmounted)", "color: orange;");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
          console.log("%c[useCourse] Loading complete", "color: gray;");
        }
      }
    }

    fetch_();

    return () => {
      cancelled = true;
      console.warn("%c[useCourse] 🧹 Cleanup — component unmounted", "color: orange;");
    };
  }, [slug]);

  return { course, loading, error };
}