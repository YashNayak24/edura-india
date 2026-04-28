// ─────────────────────────────────────────────────────────────────
//  Course Cache — App load hote hi data store karta hai
//  Taaki user click kare toh instant open ho
// ─────────────────────────────────────────────────────────────────

const cache = new Map();
const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export async function prefetchCourse(slug) {
  if (!slug || cache.has(slug)) return; // pehle se cached hai toh skip

  try {
    console.log(`%c[Prefetch] 🚀 Starting → ${slug}`, "color: violet;");
    const res  = await fetch(`${BASE}/courses/${slug}`);
    const json = await res.json();

    if (json.success) {
      cache.set(slug, json.data);
      console.log(`%c[Prefetch] ✅ Cached → ${slug}`, "color: green;");
    }
  } catch (err) {
    console.warn(`%c[Prefetch] ⚠️ Failed → ${slug}`, "color: orange;", err.message);
  }
}

export function getCachedCourse(slug) {
  return cache.get(slug) || null;
}