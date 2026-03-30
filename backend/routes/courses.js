const express  = require("express");
const router   = express.Router();
const Course   = require("../models/Course.js");

// ─────────────────────────────────────────────────────────────────
//  GET /api/courses  — list all active courses (for courses listing page)
// ─────────────────────────────────────────────────────────────────
router.get("/", async (req, res) => {
  try {
    const { category, featured, search } = req.query;
    const filter = { isActive: true };

    if (category && category !== "all") filter.category = category;
    if (featured === "true")            filter.isFeatured = true;

    // Search — title, description, skillsCovered mein dhundo
    if (search) {
      const q = new RegExp(search, "i");
      filter.$or = [
        { title:          q },
        { description:    q },
        { skillsCovered:  q },
        { category:       q },
      ];
    }

    const courses = await Course.find(filter)
      .select(
        "title slug description category level mode duration months " +
        "price thumbnail badge isFeatured rating studentsEnrolled " +
        "skillsCovered keyTakeaways placementRate averageSalary"
      )
      .sort({ isFeatured: -1, sortOrder: 1 });

    res.json({ success: true, count: courses.length, data: courses });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────
//  GET /api/courses/:slug  — single course page (SEO-critical route)
//  React will use this to render /courses/digital-marketing-course-delhi
// ─────────────────────────────────────────────────────────────────
router.get("/:slug", async (req, res) => {
  try {
    const course = await Course.findOne({
      slug:     req.params.slug,
      isActive: true,
    });

    if (!course) return res.status(404).json({ success: false, message: "Course not found" });

    res.json({ success: true, data: course });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────
//  POST /api/courses  — create course (admin only)
// ─────────────────────────────────────────────────────────────────
router.post("/", async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json({ success: true, data: course });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────
//  PUT /api/courses/:id  — update course
// ─────────────────────────────────────────────────────────────────
router.put("/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new:          true,
      runValidators: true,
    });
    if (!course) return res.status(404).json({ success: false, message: "Course not found" });
    res.json({ success: true, data: course });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// ─────────────────────────────────────────────────────────────────
//  DELETE /api/courses/:id  — soft delete
// ─────────────────────────────────────────────────────────────────
router.delete("/:id", async (req, res) => {
  try {
    await Course.findByIdAndUpdate(req.params.id, { isActive: false });
    res.json({ success: true, message: "Course deactivated" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;