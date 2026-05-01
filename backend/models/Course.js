// const mongoose = require("mongoose");

// // ── Reusable sub-schemas ──────────────────────────────────────────

// const imageSchema = new mongoose.Schema(
//   { url: { type: String }, alt: { type: String } },
//   { _id: false }
// );

// const faqSchema = new mongoose.Schema(
//   {
//     question: { type: String, required: true },
//     answer: { type: String, required: true },
//   },
//   { _id: false }
// );

// // ── Main schema ───────────────────────────────────────────────────

// const courseSchema = new mongoose.Schema(
//   {
//     // ─── 1. Basic info ─────────────────────────────────────────────
//     title: { type: String, required: true, trim: true },
//     slug: { type: String, required: true, unique: true, lowercase: true },
//     category: { type: String },
//     level: { type: String, enum: ["Beginner", "Intermediate", "Advanced", "Professional"] },
//     language: { type: String, default: "Hindi/English" },
//     mode: { type: String, enum: ["Online", "Offline", "Blended"], default: "Blended" },

//     // ─── 2. Media ──────────────────────────────────────────────────
//     thumbnail: { type: imageSchema },          // { url, alt }
//     bannerImage: { type: imageSchema },          // { url, alt }
//     videoPreview: { type: String },               // YouTube embed URL

//     // ─── 3. Course stats ───────────────────────────────────────────
//     duration: { type: String },           // e.g. "3-6 Months"
//     totalLectures: { type: Number },
//     averageSalary: { type: String },
//     placementRate: { type: String },
//     studentsEnrolled: { type: Number },
//     rating: {
//       average: { type: Number, min: 0, max: 5 },
//       count: { type: Number },
//     },

//     // ─── 4. Pricing ────────────────────────────────────────────────
//     price: {
//       amount: { type: Number },
//       currency: { type: String, default: "INR" },
//       display: { type: String },            // e.g. "₹25,000"
//       originalPrice: { type: Number },
//       emi: { type: String },            // e.g. "₹2,500/month"
//     },

//     // ─── 5. Curriculum PDF ─────────────────────────────────────────
//     curriculumPdfUrl: { type: String },
//     brochureUrl: { type: String },           // alias / legacy

//     // ─── 6. Short description ──────────────────────────────────────
//     description: { type: String, required: true },
//     description2: {          // ← ADD करो
//       type: String,
//     },
//     descriptionHighlight: {  // ← ADD करो
//       type: String,
//     },

//     // ─── 7. Overview section ───────────────────────────────────────
//     overview: {
//       title: { type: String },
//       description: { type: String },
//       image: { type: imageSchema },
//     },

//     // ─── 8. Prerequisites ──────────────────────────────────────────
//     prerequisites: [{ type: String }],

//     // ─── 9. Key features ───────────────────────────────────────────
//     keyFeatures: [{ type: String }],

//     // ─── 10. Skills covered ────────────────────────────────────────
//     skillsCovered: [{ type: String }],

//     // ─── 11. Tools covered ─────────────────────────────────────────
//     toolsCovered: [
//       {
//         name: { type: String },
//         image: { type: imageSchema },
//         _id: false,
//       },
//     ],

//     // ─── 12. Key takeaways ─────────────────────────────────────────
//     keyTakeaways: [{ type: String }],

//     // ─── 13. Syllabus ──────────────────────────────────────────────
//     // syllabus: [
//     //   {
//     //     moduleTitle: { type: String },
//     //     topics:      [{ type: String }],
//     //     _id:         false,
//     //   },
//     // ],

//     // ─── 14. Career opportunities ──────────────────────────────────
//     careerOpportunities: [
//       {
//         title: { type: String },
//         description: { type: String },
//         _id: false,
//       },
//     ],

//     // ─── 15. Career journey ────────────────────────────────────────
//     careerJourney: [
//       {
//         step: { type: Number },
//         role: { type: String },
//         experience: { type: String },
//         salaryRange: { type: String },
//         _id: false,
//       },
//     ],

//     // ─── 16. Instructor ────────────────────────────────────────────
//     // instructor: {
//     //   name:        { type: String },
//     //   designation: { type: String },
//     //   experience:  { type: String },
//     //   bio:         { type: String },
//     //   image:       { type: imageSchema },
//     // },

//     // ─── 17. Student reviews ───────────────────────────────────────
//     // reviews: [
//     //   {
//     //     name:    { type: String },
//     //     rating:  { type: Number, min: 1, max: 5 },
//     //     comment: { type: String },
//     //     date:    { type: Date },
//     //     image:   { type: imageSchema },
//     //     _id:     false,
//     //   },
//     // ],

//     // ─── 18. FAQs ──────────────────────────────────────────────────
//     faqs: [faqSchema],

//     // ─── 19. SEO ───────────────────────────────────────────────────
//     seo: {
//       metaTitle: { type: String, maxlength: 60 },
//       metaDescription: { type: String, maxlength: 160 },
//       keywords: [{ type: String }],
//       canonicalUrl: { type: String },
//       ogTitle: { type: String },
//       ogDescription: { type: String },
//       ogImage: { type: imageSchema },
//       twitterTitle: { type: String },
//       twitterDescription: { type: String },
//       twitterImage: { type: imageSchema },
//     },

//     // ─── 20. Status ────────────────────────────────────────────────
//     isActive: { type: Boolean, default: true },
//     isFeatured: { type: Boolean, default: false },
//     sortOrder: { type: Number, default: 0 },
//     badge: { type: String },               // e.g. "Most Popular"

//     // ─── 21. Related courses ───────────────────────────────────────
//     relatedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
//   },
//   { timestamps: true }
// );

// // ── Middleware ────────────────────────────────────────────────────

// // Auto-generate slug from title if not provided
// courseSchema.pre("validate", function (next) {
//   if (!this.slug && this.title) {
//     this.slug = this.title
//       .toLowerCase()
//       .trim()
//       .replace(/[^a-z0-9\s-]/g, "")
//       .replace(/\s+/g, "-");
//   }
//   next();
// });

// // ── Indexes ───────────────────────────────────────────────────────
// // slug index is auto-created by unique: true
// courseSchema.index({ category: 1, isActive: 1 });
// courseSchema.index({ isFeatured: 1, sortOrder: 1 });

// module.exports = mongoose.model("Course", courseSchema);







const mongoose = require("mongoose");

// ── Reusable sub-schemas ──────────────────────────────────────────

const imageSchema = new mongoose.Schema(
  { url: { type: String }, alt: { type: String } },
  { _id: false }
);

const faqSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer:   { type: String, required: true },
  },
  { _id: false }
);

// ── Main schema ───────────────────────────────────────────────────

const courseSchema = new mongoose.Schema(
  {
    // ─── 1. Basic info ─────────────────────────────────────────────
    title:    { type: String, required: true, trim: true },
    slug:     { type: String, required: true, unique: true, lowercase: true },
    category: { type: String },
    level:    { type: String, enum: ["Beginner", "Intermediate", "Advanced", "Professional"] },
    language: { type: String, default: "Hindi/English" },
    mode:     { type: String, enum: ["Online", "Offline", "Blended"], default: "Blended" },
    badge:    { type: String },

    // ─── 2. Media ──────────────────────────────────────────────────
    thumbnail: { type: imageSchema },      // { url, alt }

    // ─── 3. Course stats ───────────────────────────────────────────
    duration:         { type: String },
    totalLectures:    { type: Number },
    averageSalary:    { type: String },
    placementRate:    { type: String },
    studentsEnrolled: { type: Number },
    rating: {
      average: { type: Number, min: 0, max: 5 },
      count:   { type: Number },
    },

    // ─── 4. Pricing ────────────────────────────────────────────────
    price: {
      amount:   { type: Number },
      currency: { type: String, default: "INR" },
    },

    // ─── 5. Curriculum PDF ─────────────────────────────────────────
    curriculumPdfUrl: { type: String },

    // ─── 6. Descriptions ───────────────────────────────────────────
    description:          { type: String, required: true },
    description2:         { type: String },
    descriptionHighlight: { type: String },

    // ─── 7. Overview ───────────────────────────────────────────────
    overview: {
      title:       { type: String },
      description: { type: String },
    },

    // ─── 8. Prerequisites ──────────────────────────────────────────
    prerequisites: [{ type: String }],

    // ─── 9. Key features ───────────────────────────────────────────
    keyFeatures: [{ type: String }],

    // ─── 10. Skills covered ────────────────────────────────────────
    skillsCovered: [{ type: String }],

    // ─── 11. Tools covered ─────────────────────────────────────────
    toolsCovered: [
      {
        name:  { type: String },
        image: { type: imageSchema },
        _id:   false,
      },
    ],

    // ─── 12. Key takeaways ─────────────────────────────────────────
    keyTakeaways: [{ type: String }],

    // ─── 13. Career opportunities ──────────────────────────────────
    careerOpportunities: [
      {
        title:       { type: String },
        description: { type: String },
        _id:         false,
      },
    ],

    // ─── 14. Career journey ────────────────────────────────────────
    careerJourney: [
      {
        step:        { type: Number },
        role:        { type: String },
        experience:  { type: String },
        salaryRange: { type: String },
        _id:         false,
      },
    ],

    // ─── 15. FAQs ──────────────────────────────────────────────────
    faqs: [faqSchema],

    // ─── 16. SEO ───────────────────────────────────────────────────
    seo: {
      metaTitle:          { type: String, maxlength: 60 },
      metaDescription:    { type: String, maxlength: 160 },
      keywords:           [{ type: String }],
      canonicalUrl:       { type: String },
      ogTitle:            { type: String },
      ogDescription:      { type: String },
      ogImage:            { type: imageSchema },
      twitterTitle:       { type: String },
      twitterDescription: { type: String },
      twitterImage:       { type: imageSchema },
    },

    // ─── 17. Status ────────────────────────────────────────────────
    isActive:   { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
    sortOrder:  { type: Number,  default: 0 },
  },
  { timestamps: true }
);

// ── Middleware ────────────────────────────────────────────────────

courseSchema.pre("validate", function (next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  }
  next();
});

// ── Indexes ───────────────────────────────────────────────────────
courseSchema.index({ category: 1, isActive: 1 });
courseSchema.index({ isFeatured: 1, sortOrder: 1 });

module.exports = mongoose.model("Course", courseSchema);