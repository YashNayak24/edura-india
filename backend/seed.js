const mongoose = require("mongoose");
const Course   = require("./models/Course");
require("dotenv").config();

const digitalMarketing = {

  // ── 1. BASIC INFO ────────────────────────────────────────────────
  title:    "Advanced Digital Marketing Course in Delhi",
  slug:     "digital-marketing-course-delhi",
  category: "Digital Marketing",
  level:    "Professional",
  language: "Hindi/English",
  mode:     "Blended",

  // ── 2. MEDIA ─────────────────────────────────────────────────────
  thumbnail: {
    url: "https://yourdomain.com/images/courses/digital-marketing-thumbnail.jpg",
    alt: "Advanced Digital Marketing Course in Delhi - EduraIndia",
  },
  bannerImage: {
    url: "https://yourdomain.com/images/courses/digital-marketing-banner.jpg",
    alt: "Best Digital Marketing Institute in Delhi - EduraIndia",
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_VIDEO_ID",

  // ── 3. COURSE STATS ───────────────────────────────────────────────
  duration:         "3-6 Months",
  totalLectures:    120,
  averageSalary:    "₹4.5 LPA - ₹12 LPA",
  placementRate:    "95%",
  studentsEnrolled: 1240,
  rating: {
    average: 4.8,
    count:   320,
  },

  // ── 4. PRICING ───────────────────────────────────────────────────
  price: {
    amount:        25000,
    currency:      "INR",
    display:       "₹25,000",
    originalPrice: 40000,
    emi:           "₹2,500/month",
  },

  // ── 5. CURRICULUM PDF ─────────────────────────────────────────────
  curriculumPdfUrl: "https://yourdomain.com/pdfs/digital-marketing-curriculum.pdf",

  // ── 6. SHORT DESCRIPTION ──────────────────────────────────────────
  description:
    "EduraIndia's job-oriented Digital Marketing Course in Delhi covers SEO, Google Ads, Social Media Marketing, Email Marketing, AI tools and more. 100% placement support included.",

  // ── 7. OVERVIEW SECTION ───────────────────────────────────────────
  overview: {
    title: "Unlock a successful career in Digital Marketing with expert guidance",
    description: `A digital marketing professional plays a crucial role in today's business landscape and is key to driving growth and success. To truly stand out, you need a balance of strong theoretical understanding and hands-on practical skills.

Our program covers everything from performance marketing to SEO, social media marketing to content strategy, and from artificial intelligence to advanced data analytics. This perfect blend of learning and real-world application makes it the top digital marketing course in Delhi.

What makes us different is our team of expert trainers — industry professionals with real-world experience who bring invaluable insights to the classroom.`,
    image: {
      url: "https://yourdomain.com/images/courses/digital-marketing-overview.jpg",
      alt: "Digital Marketing training session at EduraIndia Delhi",
    },
  },

  // ── 8. PREREQUISITES ──────────────────────────────────────────────
  prerequisites: [
    "Basic computer knowledge",
    "Basic internet usage knowledge",
    "Basic typing skills",
    "Basic reading/writing skills",
    "Comfort using a smartphone",
    "Curious mindset with willingness to grow",
  ],

  // ── 9. KEY FEATURES ───────────────────────────────────────────────
  keyFeatures: [
    "Marketing Fundamentals & Strategy Building",
    "Digital Marketing Foundations",
    "Website Creation with WordPress",
    "Advanced Search Engine Optimization (SEO)",
    "Content Marketing Mastery",
    "Performance Marketing — Google Ads Expert Training",
    "Social Media Marketing (SMM)",
    "Email Marketing & Automation",
    "Influencer Marketing Strategies",
    "Affiliate Marketing System",
    "E-commerce & Dropshipping Business",
    "AI-Powered Marketing Tools",
  ],

  // ── 10. SKILLS COVERED ────────────────────────────────────────────
  skillsCovered: [
    "Search Engine Optimization",
    "Google Ads (PPC)",
    "Social Media Marketing",
    "Content Marketing",
    "Email Marketing",
    "Affiliate Marketing",
    "Web Analytics",
    "Marketing Automation",
    "E-commerce Marketing",
    "Video Marketing",
    "Influencer Marketing",
    "AI in Marketing",
  ],

  // ── 11. TOOLS COVERED ─────────────────────────────────────────────
  toolsCovered: [
    { name: "Google Analytics",    image: { url: "https://yourdomain.com/images/tools/google-analytics.png",    alt: "Google Analytics logo" } },
    { name: "Google Ads",          image: { url: "https://yourdomain.com/images/tools/google-ads.png",          alt: "Google Ads logo" } },
    { name: "Meta Ads Manager",    image: { url: "https://yourdomain.com/images/tools/meta-ads.png",            alt: "Meta Ads Manager logo" } },
    { name: "SEMrush",             image: { url: "https://yourdomain.com/images/tools/semrush.png",             alt: "SEMrush logo" } },
    { name: "Ahrefs",              image: { url: "https://yourdomain.com/images/tools/ahrefs.png",              alt: "Ahrefs logo" } },
    { name: "Mailchimp",           image: { url: "https://yourdomain.com/images/tools/mailchimp.png",           alt: "Mailchimp logo" } },
    { name: "Canva",               image: { url: "https://yourdomain.com/images/tools/canva.png",               alt: "Canva logo" } },
    { name: "WordPress",           image: { url: "https://yourdomain.com/images/tools/wordpress.png",           alt: "WordPress logo" } },
    { name: "Hootsuite",           image: { url: "https://yourdomain.com/images/tools/hootsuite.png",           alt: "Hootsuite logo" } },
    { name: "ChatGPT",             image: { url: "https://yourdomain.com/images/tools/chatgpt.png",             alt: "ChatGPT logo" } },
    { name: "Google Search Console",image:{ url: "https://yourdomain.com/images/tools/search-console.png",     alt: "Google Search Console logo" } },
    { name: "Hotjar",              image: { url: "https://yourdomain.com/images/tools/hotjar.png",              alt: "Hotjar logo" } },
  ],

  // ── 12. KEY TAKEAWAYS ─────────────────────────────────────────────
  keyTakeaways: [
    "100% Placement Support",
    "Industry-Recognized Certification",
    "Hands-on Live Projects",
    "Expert Industry Trainers",
    "AI Tools & Automation Skills",
    "Resume & Portfolio Building",
    "Soft Skills & Interview Preparation",
    "Lifetime Career Support",
    "Strong Alumni Network",
    "Google & Meta Certification Prep",
  ],

  // ── 13. SYLLABUS ──────────────────────────────────────────────────
  syllabus: [
    {
      moduleTitle: "Module 1 — Digital Marketing Foundations",
      topics: ["What is digital marketing", "Traditional vs digital marketing", "Marketing funnel", "Buyer persona", "SWOT analysis"],
    },
    {
      moduleTitle: "Module 2 — Website Creation with WordPress",
      topics: ["Domain & hosting setup", "WordPress installation", "Theme customization", "Landing page design", "Basic SEO setup"],
    },
    {
      moduleTitle: "Module 3 — Advanced SEO",
      topics: ["On-page SEO", "Off-page SEO & link building", "Technical SEO", "Keyword research", "Google Search Console", "Local SEO for Delhi businesses"],
    },
    {
      moduleTitle: "Module 4 — Content Marketing",
      topics: ["Content strategy", "Blog writing for SEO", "Video content", "Infographic creation", "Content calendar"],
    },
    {
      moduleTitle: "Module 5 — Google Ads (PPC)",
      topics: ["Search campaigns", "Display campaigns", "Shopping ads", "YouTube ads", "Remarketing", "Conversion tracking"],
    },
    {
      moduleTitle: "Module 6 — Social Media Marketing",
      topics: ["Facebook & Instagram marketing", "LinkedIn marketing", "YouTube channel growth", "Instagram Reels strategy", "Paid social campaigns"],
    },
    {
      moduleTitle: "Module 7 — Email Marketing & Automation",
      topics: ["Email list building", "Campaign design in Mailchimp", "A/B testing", "Marketing automation workflows", "Lead nurturing"],
    },
    {
      moduleTitle: "Module 8 — Analytics & AI Tools",
      topics: ["Google Analytics 4", "Data interpretation", "AI writing tools", "ChatGPT for marketing", "Automated reporting"],
    },
    {
      moduleTitle: "Module 9 — Affiliate & E-commerce Marketing",
      topics: ["Affiliate marketing setup", "Dropshipping basics", "Amazon & Flipkart marketing", "E-commerce SEO"],
    },
    {
      moduleTitle: "Module 10 — Freelancing & Career Prep",
      topics: ["Building your portfolio", "Freelancing platforms", "Client acquisition", "Resume writing", "Mock interviews"],
    },
  ],

  // ── 14. CAREER OPPORTUNITIES ──────────────────────────────────────
  careerOpportunities: [
    { title: "SEO Specialist",              description: "Optimize websites for organic search rankings and drive traffic." },
    { title: "Social Media Manager",        description: "Manage brand presence across Instagram, Facebook, LinkedIn." },
    { title: "Google Ads Specialist",       description: "Run and optimize paid campaigns on Google Search and Display." },
    { title: "Content Marketing Manager",   description: "Plan and execute content strategies for lead generation." },
    { title: "Email Marketing Specialist",  description: "Design automated email funnels and nurture campaigns." },
    { title: "Digital Marketing Manager",   description: "Lead full-funnel marketing strategy for brands." },
    { title: "Freelance Digital Marketer",  description: "Work independently with multiple clients across industries." },
    { title: "E-commerce Marketing Expert", description: "Drive sales for online stores through SEO, ads, and social." },
  ],

  // ── 15. CAREER JOURNEY ────────────────────────────────────────────
  careerJourney: [
    { step: 1, role: "Digital Marketing Intern",    experience: "0-6 months", salaryRange: "₹1.2L - ₹2.4L" },
    { step: 2, role: "SEO / SMM Executive",         experience: "6 months - 1 yr", salaryRange: "₹2.5L - ₹4L" },
    { step: 3, role: "Digital Marketing Executive", experience: "1-2 years",  salaryRange: "₹4L - ₹6L" },
    { step: 4, role: "Digital Marketing Manager",   experience: "3-5 years",  salaryRange: "₹7L - ₹12L" },
    { step: 5, role: "Head of Marketing / CMO",     experience: "5+ years",   salaryRange: "₹15L+" },
  ],

  // ── 16. INSTRUCTOR ───────────────────────────────────────────────
  instructor: {
    name:        "Rahul Sharma",
    designation: "Senior Digital Marketing Trainer",
    experience:  "10+ years",
    bio:         "Rahul has worked with 50+ brands across India and has trained 2000+ students in digital marketing. Former Head of Digital at a leading Delhi-based agency.",
    image: {
      url: "https://yourdomain.com/images/instructors/rahul-sharma.jpg",
      alt: "Rahul Sharma - Digital Marketing Trainer at EduraIndia",
    },
  },

  // ── 17. STUDENT REVIEWS ──────────────────────────────────────────
  reviews: [
    {
      name:    "Priya Gupta",
      rating:  5,
      comment: "Best digital marketing course in Delhi! Got placed within 2 months of completing the course. Trainers are very knowledgeable and supportive.",
      date:    new Date("2025-12-10"),
      image: { url: "https://yourdomain.com/images/students/priya.jpg", alt: "Priya Gupta - EduraIndia student" },
    },
    {
      name:    "Amit Verma",
      rating:  5,
      comment: "The hands-on projects and live campaigns made all the difference. I now freelance full time earning 60k/month.",
      date:    new Date("2026-01-05"),
      image: { url: "https://yourdomain.com/images/students/amit.jpg", alt: "Amit Verma - EduraIndia student" },
    },
    {
      name:    "Sneha Rawat",
      rating:  4,
      comment: "Very comprehensive course. The AI tools module was especially useful. Would recommend to anyone looking to switch careers.",
      date:    new Date("2026-02-18"),
      image: { url: "https://yourdomain.com/images/students/sneha.jpg", alt: "Sneha Rawat - EduraIndia student" },
    },
  ],

  // ── 18. FAQs ─────────────────────────────────────────────────────
  faqs: [
    {
      question: "What is a Digital Marketing Course?",
      answer:   "A Digital Marketing Course is a structured program that teaches you how to promote products and services online using SEO, Google Ads, Social Media Marketing, Email Marketing, and Content Marketing.",
    },
    {
      question: "Who can enroll in this Digital Marketing Course?",
      answer:   "Anyone can enroll — students, graduates, business owners, freelancers, and working professionals. No prior technical background is required.",
    },
    {
      question: "What is the duration of the Digital Marketing Course in Delhi?",
      answer:   "The course duration is 3 to 6 months. Advanced modules may extend up to 6-12 months depending on your pace.",
    },
    {
      question: "What is the fee for the Digital Marketing Course?",
      answer:   "The fee ranges from ₹20,000 to ₹80,000 depending on the course level and features. EMI options are available starting ₹2,500/month.",
    },
    {
      question: "Will I get a certification after completing the course?",
      answer:   "Yes. You will receive an industry-recognized EduraIndia certification plus preparation support for Google Ads and Meta (Facebook) certifications.",
    },
    {
      question: "Does EduraIndia provide placement assistance?",
      answer:   "Yes, we provide 100% placement support including resume building, interview preparation, mock interviews, and direct job referrals.",
    },
    {
      question: "Can I start freelancing after this course?",
      answer:   "Absolutely. Many of our students start freelancing in SEO, social media management, Google Ads, and content marketing. We have a dedicated freelancing module for this.",
    },
    {
      question: "Is the Digital Marketing course available online?",
      answer:   "Yes, we offer online, offline, and blended (hybrid) modes. You can choose what works best for you.",
    },
  ],

  // ── 19. SEO ──────────────────────────────────────────────────────
  seo: {
    metaTitle:       "Best Digital Marketing Course in Delhi | EduraIndia",
    metaDescription: "Join EduraIndia's job-oriented Digital Marketing Course in Delhi. Learn SEO, Google Ads, Social Media & AI tools. 100% placement. Enroll now!",
    keywords: [
      "digital marketing course in delhi",
      "best digital marketing institute in delhi",
      "digital marketing course with placement delhi",
      "digital marketing course south delhi",
      "seo course delhi",
      "google ads training delhi",
      "social media marketing course delhi",
      "digital marketing certification delhi",
    ],
    canonicalUrl: "https://eduraindia.com/courses/digital-marketing-course-delhi",

    ogTitle:       "Best Digital Marketing Course in Delhi — EduraIndia",
    ogDescription: "Job-oriented digital marketing training with live projects, AI tools & 100% placement support. South Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/digital-marketing-og.jpg",  // 1200x630px
      alt: "EduraIndia Digital Marketing Course Delhi",
    },

    twitterTitle:       "Best Digital Marketing Course in Delhi | EduraIndia",
    twitterDescription: "Learn SEO, Google Ads, Social Media & AI tools. 100% placement support. Join EduraIndia Delhi.",
    twitterImage: {
      url: "https://yourdomain.com/images/og/digital-marketing-twitter.jpg",
      alt: "EduraIndia Digital Marketing Course",
    },
  },

  // ── 20. STATUS ───────────────────────────────────────────────────
  isActive:   true,
  isFeatured: true,
  sortOrder:  1,
  badge:      "Most Popular",

  // ── 21. RELATED COURSES ──────────────────────────────────────────
  // Baad mein add karna jab aur courses create ho jayein
  relatedCourses: [],
};

// ─────────────────────────────────────────────────────────────────
//  Seed function — upsert so existing data is not wiped
// ─────────────────────────────────────────────────────────────────
async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    const result = await Course.findOneAndUpdate(
      { slug: digitalMarketing.slug },   // find by slug
      digitalMarketing,                  // update with this data
      { upsert: true, new: true }        // create if not found
    );

    console.log("Seeded:", result.title);
    console.log("ID:", result._id);
  } catch (err) {
    console.error("Seed error:", err.message);
  } finally {
    mongoose.disconnect();
    console.log("Done.");
  }
}

seed();