import { useState, useEffect } from "react";
import { getCachedCourse } from "./utils/courseCache"; // ← ADD

const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

console.log("%c[API] BASE URL →", "color: violet; font-weight: bold;", BASE);

// ─────────────────────────────────────────────────────────────────
//  fetchWithRetry — 30s timeout (Render cold start ke liye)
// ─────────────────────────────────────────────────────────────────
async function fetchWithRetry(url, retries = 3, externalSignal = null) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort("timeout"), 30000); // ← 8s se 30s

  externalSignal?.addEventListener("abort", () => controller.abort());

  try {
    console.log(`%c[fetchWithRetry] Attempt left: ${retries + 1} → ${url}`, "color: slateblue;");

    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();

  } catch (err) {
    clearTimeout(timeout);

    if (externalSignal?.aborted) throw err; // unmount hua — retry mat karo

    if (retries > 0) {
      console.warn(`%c[fetchWithRetry] ⚠️ Retrying... (${retries} left)`, "color: orange;", err.message);
      await new Promise(r => setTimeout(r, 1000));
      return fetchWithRetry(url, retries - 1, externalSignal);
    }

    throw err;
  }
}

// ─────────────────────────────────────────────────────────────────
//  useCourses — listing page
// ─────────────────────────────────────────────────────────────────
export function useCourses({ category = "all", search = "" } = {}) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

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

        const json = await fetchWithRetry(url, 3, controller.signal);

        if (cancelled) return;

        if (!json.success) throw new Error(json.message);

        console.log("%c[useCourses] ✅ Courses loaded →", "color: green; font-weight: bold;", `${json.count} course(s)`);
        setCourses(json.data);

      } catch (err) {
        if (!cancelled) {
          console.error("%c[useCourses] ❌ Error →", "color: red;", err.message);
          setError(err.message);
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
      controller.abort();
      console.warn("%c[useCourses] 🧹 Cleanup", "color: orange;");
    };
  }, [category, search]);

  return { courses, loading, error };
}

// ─────────────────────────────────────────────────────────────────
//  useCourse — single course detail page
// ─────────────────────────────────────────────────────────────────
export function useCourse(slug) {

  // ✅ Cache se seedha lo — agar cached hai toh instant render
  const [course,  setCourse]  = useState(() => getCachedCourse(slug));
  const [loading, setLoading] = useState(!getCachedCourse(slug)); // cached = no loading
  const [error,   setError]   = useState(null);

  useEffect(() => {
    if (!slug) return;

    // ✅ Cache mein hai toh fetch hi mat karo
    if (getCachedCourse(slug)) {
      console.log("%c[useCourse] ⚡ Served from cache →", "color: gold; font-weight: bold;", slug);
      return;
    }

    let cancelled = false;
    const controller = new AbortController();

    async function fetch_() {
      try {
        setLoading(true);
        setError(null);

        const url = `${BASE}/courses/${slug}`;

        console.group("%c[useCourse] Fetching single course", "color: mediumseagreen; font-weight: bold;");
        console.log("🌐 Route hit  →", "GET", url);
        console.log("🔑 Slug       →", slug);
        console.groupEnd();

        const json = await fetchWithRetry(url, 3, controller.signal);

        if (cancelled) return;

        if (!json.success) throw new Error(json.message);

        console.log("%c[useCourse] ✅ Course loaded →", "color: green; font-weight: bold;", json.data?.title);
        setCourse(json.data);

      } catch (err) {
        if (!cancelled) {
          console.error("%c[useCourse] ❌ Error →", "color: red;", err.message);
          setError(err.message);
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
      controller.abort();
      console.warn("%c[useCourse] 🧹 Cleanup", "color: orange;");
    };
  }, [slug]);

  return { course, loading, error };
}