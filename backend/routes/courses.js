// const express = require("express");
// const router = express.Router();
// const Course = require("../models/Course.js");

// let cache = { data: null, time: 0 }
// const CACHE_TTL = 5 * 60 * 1000 // 5 minutes



// // ─────────────────────────────────────────────────────────────────
// //  GET /api/courses  — list all active courses (for courses listing page)
// // ─────────────────────────────────────────────────────────────────
// router.get("/", async (req, res) => {
//   try {
//     const { category, featured, search } = req.query;
//     const filter = { isActive: true };

//     if (category && category !== "all") filter.category = category;
//     if (featured === "true") filter.isFeatured = true;

//     // Search — title, description, skillsCovered mein dhundo
//     if (search) {
//       const q = new RegExp(search, "i");
//       filter.$or = [
//         { title: q },
//         { description: q },
//         { skillsCovered: q },
//         { category: q },
//       ];
//     }

//     // const courses = await Course.find(filter)
//     //   .select(
//     //     "title slug description category level mode duration months " +
//     //     "price thumbnail badge isFeatured rating studentsEnrolled " +
//     //     "skillsCovered keyTakeaways placementRate averageSalary"
//     //   )
//     //   .sort({ isFeatured: -1, sortOrder: 1 });

//     const courses = await Course.find(filter)
//       .select("title slug description category level mode duration " +
//         "price thumbnail badge isFeatured rating studentsEnrolled " +
//         "skillsCovered keyTakeaways placementRate averageSalary")
//       .sort({ isFeatured: -1, sortOrder: 1 })
//       .lean();

//     res.json({ success: true, count: courses.length, data: courses });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// });

// // ─────────────────────────────────────────────────────────────────
// //  GET /api/courses/:slug  — single course page (SEO-critical route)
// //  React will use this to render /courses/digital-marketing-course-delhi
// // ─────────────────────────────────────────────────────────────────
// router.get("/:slug", async (req, res) => {
//   try {
//     const course = await Course.findOne({
//       slug: req.params.slug,
//       isActive: true,
//     }).lean();

//     if (!course) return res.status(404).json({ success: false, message: "Course not found" });

//     res.json({ success: true, data: course });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// });

// // ─────────────────────────────────────────────────────────────────
// //  POST /api/courses  — create course (admin only)
// // ─────────────────────────────────────────────────────────────────
// router.post("/", async (req, res) => {
//   try {
//     const course = await Course.create(req.body);
//     res.status(201).json({ success: true, data: course });
//   } catch (err) {
//     res.status(400).json({ success: false, message: err.message });
//   }
// });

// // ─────────────────────────────────────────────────────────────────
// //  PUT /api/courses/:id  — update course
// // ─────────────────────────────────────────────────────────────────
// router.put("/:id", async (req, res) => {
//   try {
//     const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!course) return res.status(404).json({ success: false, message: "Course not found" });
//     res.json({ success: true, data: course });
//   } catch (err) {
//     res.status(400).json({ success: false, message: err.message });
//   }
// });

// // ─────────────────────────────────────────────────────────────────
// //  DELETE /api/courses/:id  — soft delete
// // ─────────────────────────────────────────────────────────────────
// router.delete("/:id", async (req, res) => {
//   try {
//     await Course.findByIdAndUpdate(req.params.id, { isActive: false });
//     res.json({ success: true, message: "Course deactivated" });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// });

// module.exports = router;


















const express = require("express");
const router = express.Router();
const Course = require("../models/Course.js");

// ─────────────────────────────────────────────────────────────────
//  In-memory cache
// ─────────────────────────────────────────────────────────────────
let cache = { data: null, time: 0 };
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes


// ─────────────────────────────────────────────────────────────────
//  GET /api/courses  — list all active courses (for courses listing page)
// ─────────────────────────────────────────────────────────────────
router.get("/", async (req, res) => {
  try {
    const { category, featured, search } = req.query;

    // Cache sirf tab use karo jab koi filter na ho
    const isSimpleRequest = !category && !featured && !search;

    if (isSimpleRequest && cache.data && Date.now() - cache.time < CACHE_TTL) {
      console.log("[Cache] HIT — returning cached courses");
      return res.json(cache.data); // instant response
    }

    const filter = { isActive: true };

    if (category && category !== "all") filter.category = category;
    if (featured === "true") filter.isFeatured = true;

    // Search — title, description, skillsCovered mein dhundo
    if (search) {
      const q = new RegExp(search, "i");
      filter.$or = [
        { title: q },
        { description: q },
        { skillsCovered: q },
        { category: q },
      ];
    }

    const courses = await Course.find(filter)
      .select(
        "title slug description category level mode duration " +
        "price thumbnail badge isFeatured rating studentsEnrolled " +
        "skillsCovered keyTakeaways placementRate averageSalary"
      )
      .sort({ isFeatured: -1, sortOrder: 1 })
      .lean();

    const response = { success: true, count: courses.length, data: courses };

    // Sirf no-filter request ko cache karo
    if (isSimpleRequest) {
      cache = { data: response, time: Date.now() };
      console.log("[Cache] MISS — fresh data cached");
    }

    res.json(response);
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
      slug: req.params.slug,
      isActive: true,
    }).lean();

    if (!course)
      return res.status(404).json({ success: false, message: "Course not found" });

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

    // Naya course create hone pe cache invalidate karo
    cache = { data: null, time: 0 };
    console.log("[Cache] CLEARED — new course created");

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
      new: true,
      runValidators: true,
    });

    if (!course)
      return res.status(404).json({ success: false, message: "Course not found" });

    // Course update hone pe cache invalidate karo
    cache = { data: null, time: 0 };
    console.log("[Cache] CLEARED — course updated");

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

    // Course delete hone pe cache invalidate karo
    cache = { data: null, time: 0 };
    console.log("[Cache] CLEARED — course deleted");

    res.json({ success: true, message: "Course deactivated" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


module.exports = router;