const express = require("express");
const router  = express.Router();
const Course  = require("../models/Course");

const SITE_URL = process.env.SITE_URL || "https://eduraindia.com";

// ─────────────────────────────────────────────────────────────────
//  GET /sitemap.xml
//  Submit this URL to Google Search Console
//  Auto-updates whenever you add/edit a course
// ─────────────────────────────────────────────────────────────────
router.get("/sitemap.xml", async (req, res) => {
  try {
    const courses = await Course.find({ isActive: true }).select("slug updatedAt");

    // Static pages
    const staticPages = [
      { url: "/",          priority: "1.0",  changefreq: "weekly" },
      { url: "/courses",   priority: "0.9",  changefreq: "weekly" },
      { url: "/about",     priority: "0.7",  changefreq: "monthly" },
      { url: "/contact",   priority: "0.7",  changefreq: "monthly" },
      { url: "/blog",      priority: "0.8",  changefreq: "daily" },
    ];

    const staticXml = staticPages
      .map(
        (p) => `
  <url>
    <loc>${SITE_URL}${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
      )
      .join("");

    // Dynamic course pages — high priority for SEO
    const courseXml = courses
      .map(
        (c) => `
  <url>
    <loc>${SITE_URL}/courses/${c.slug}</loc>
    <lastmod>${new Date(c.updatedAt).toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>`
      )
      .join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticXml}
${courseXml}
</urlset>`;

    res.header("Content-Type", "application/xml");
    res.send(xml);
  } catch (err) {
    res.status(500).send("Sitemap generation failed");
  }
});

// ─────────────────────────────────────────────────────────────────
//  GET /robots.txt
// ─────────────────────────────────────────────────────────────────
router.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send(`User-agent: *
Allow: /

# Block admin panel from indexing
Disallow: /admin
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml`);
});

module.exports = router;