const mongoose = require("mongoose");
const Course = require("./models/Course");
require("dotenv").config();


//all courses data in json form...

const digitalMarketing = {

  // ── 1. BASIC INFO ────────────────────────────────────────────────
  title: "Advanced Digital Marketing Course in Delhi",

  // ✅ ADDED from Doc 2 — hero/page heading (was missing in Doc 1)
  heroTitle: "Launch Your Career with a Job-Oriented Advanced Digital Marketing Course in Delhi",

  slug: "digital-marketing-course-delhi",
  category: "Digital Marketing",
  level: "Professional",
  language: "Hindi/English",
  mode: "Blended",

  // ── 2. MEDIA ─────────────────────────────────────────────────────
  thumbnail: {
    url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776075889/digital_marketing_vrlm1o.png",
    alt: "Advanced Digital Marketing Course in Delhi - EduraIndia",
  },
  bannerImage: {
    url: "https://yourdomain.com/images/courses/digital-marketing-banner.jpg",
    alt: "Best Digital Marketing Institute in Delhi - EduraIndia",
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_VIDEO_ID",

  // ── 3. COURSE STATS ───────────────────────────────────────────────
  duration: "3-6 Months",
  totalLectures: 120,
  averageSalary: "₹4.5 LPA - ₹12 LPA",
  placementRate: "95%",
  studentsEnrolled: 1240,
  rating: {
    average: 4.8,
    count: 320,
  },

  // ── 4. PRICING ───────────────────────────────────────────────────
  price: {
    amount: 25000,
    currency: "INR",
    display: "₹25,000",
    originalPrice: 40000,
    emi: "₹2,500/month",
  },

  // ── 5. CURRICULUM PDF ─────────────────────────────────────────────
  curriculumPdfUrl: "https://yourdomain.com/pdfs/digital-marketing-curriculum.pdf",

  // ── 6. DESCRIPTIONS ───────────────────────────────────────────────
  description:
    "EduraIndia is the best digital marketing institute in Delhi offering a job-oriented advanced digital marketing course with practical training, SEO, Google Ads, and AI tools. Affordable digital marketing course fees with 100% placement support.",

  description2:
    "Join the best digital marketing institute in Delhi to learn an advanced digital marketing course with live projects and expert guidance. Our digital marketing course provides affordable rates without compromising on quality training from experienced mentors. Build your dream career with industry-standard learning at cost-effective fees.",

  descriptionHighlight:
    "Start your journey with the best digital marketing institute. Our advanced digital marketing course covers all major skills with practical learning.",

  // ── 7. OVERVIEW SECTION ───────────────────────────────────────────
  overview: {
    title: "Advanced Digital Marketing Course",
    description: `In today's competitive business environment, digital marketing plays a vital role in driving growth and building brand presence. At EduraIndia, recognized as the best digital marketing institute in Delhi, our advanced digital marketing course is designed to equip students with both theoretical knowledge and practical skills required to succeed in the industry.

This course covers all major aspects of digital marketing including SEO (Search Engine Optimization), Google Ads (PPC), Social Media Marketing, Content Marketing, Email Marketing, Affiliate Marketing, and the use of modern AI tools. Students will also learn website planning, keyword research, campaign creation, performance tracking, and lead generation strategies to gain complete industry exposure.

Our training approach focuses on hands-on learning through live projects and real-time case studies, ensuring students gain practical experience. As the best digital marketing institute in Delhi, we offer industry-expert trainers, affordable digital marketing course fees, and 100% placement support to help you build a successful career in digital marketing.`,
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
    { name: "Google Analytics", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072022/GoogleAnalytics_jpp5vq.png", alt: "Google Analytics logo" } },
    { name: "Google Ads", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072021/GoogleAds_iqrxzt.png", alt: "Google Ads logo" } },
    { name: "Meta Ads Manager", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072032/MetaAdsManager_qcyh1l.png", alt: "Meta Ads Manager logo" } },
    { name: "SEMrush", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072045/SEMrush_vlkqm8.png", alt: "SEMrush logo" } },
    { name: "Ahrefs", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072017/Ahrefs_qifsrq.png", alt: "Ahrefs logo" } },
    { name: "Mailchimp", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072030/Mailchimp_ntbgrm.webp", alt: "Mailchimp logo" } },
    { name: "Canva", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/Canva-removebg-preview_lorpzt.png", alt: "Canva logo" } },
    { name: "WordPress", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072049/WordPress_f7vm23.png", alt: "WordPress logo" } },
    { name: "Hootsuite", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072028/Hootsuite_saazdv.png", alt: "Hootsuite logo" } },
    { name: "ChatGPT", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/ChatGPT_d3ybhl.webp", alt: "ChatGPT logo" } },
    { name: "Google Search Console", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072024/GoogleSearchConsole_e4wzia.png", alt: "Google Search Console logo" } },
    { name: "Hotjar", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072027/Hotjar_oyb8a8.png", alt: "Hotjar logo" } },
    { name: "WhatsApp Business API", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072048/WhatsAppBusinessAPI_d0cmnc.webp", alt: "Hotjar logo" } },
    { name: "Google Ad Sense", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072022/GoogleAdSense_kldzlz.png", alt: "Hotjar logo" } },
    { name: "Bing Webmaster Tools", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072019/BingWebmasterTool_veoxbv.png", alt: "Hotjar logo" } },
    { name: "Google Tag Manager", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072026/GoogleTagManager_fsrgnp.png", alt: "Hotjar logo" } },
    { name: "Microsoft Clarity", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072032/MicrosoftClarity_l0cttp.png", alt: "Hotjar logo" } },
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

  // ── 14. CAREER OPPORTUNITIES ──────────────────────────────────────
  careerOpportunities: [
    { title: "SEO Specialist", description: "Optimize websites for organic search rankings and drive traffic." },
    { title: "Social Media Manager", description: "Manage brand presence across Instagram, Facebook, LinkedIn." },
    { title: "Google Ads Specialist", description: "Run and optimize paid campaigns on Google Search and Display." },
    { title: "Content Marketing Manager", description: "Plan and execute content strategies for lead generation." },
    { title: "Email Marketing Specialist", description: "Design automated email funnels and nurture campaigns." },
    { title: "Digital Marketing Manager", description: "Lead full-funnel marketing strategy for brands." },
    { title: "Freelance Digital Marketer", description: "Work independently with multiple clients across industries." },
    { title: "E-commerce Marketing Expert", description: "Drive sales for online stores through SEO, ads, and social." },
  ],

  // ── 15. CAREER JOURNEY ────────────────────────────────────────────
  careerJourney: [
    { step: 1, role: "Digital Marketing Intern", experience: "0-6 months", salaryRange: "₹1.2L - ₹2.4L" },
    { step: 2, role: "SEO / SMM Executive", experience: "6 months - 1 yr", salaryRange: "₹2.5L - ₹4L" },
    { step: 3, role: "Digital Marketing Executive", experience: "1-2 years", salaryRange: "₹4L - ₹6L" },
    { step: 4, role: "Digital Marketing Manager", experience: "3-5 years", salaryRange: "₹7L - ₹12L" },
    { step: 5, role: "Head of Marketing / CMO", experience: "5+ years", salaryRange: "₹15L+" },
  ],

  // ── 18. FAQs ──────────────────────────────────────────────────────
  faqs: [
    {
      question: "What is a Digital Marketing Course?",
      answer: "A Digital Marketing Course is a structured program that teaches you how to promote products and services online using channels such as Search Engine Optimization (SEO), Google Ads, Social Media Marketing, Email Marketing, and Content Marketing, as offered at EduraIndia.",
    },
    {
      question: "How do I choose the best Digital Marketing Institute in Delhi?",
      answer: "To choose the best digital marketing institute in Delhi, consider factors such as practical training, experienced trainers, live projects, placement assistance, and industry-recognized certifications — all of which are provided by EduraIndia.",
    },
    {
      question: "Who can enroll in a Digital Marketing Course?",
      answer: "Anyone can enroll in a digital marketing course, including students, graduates, business owners, freelancers, and working professionals. No prior technical background is required to join EduraIndia.",
    },
    {
      question: "What is the duration of the Digital Marketing Course in Delhi?",
      answer: "The course duration is typically 3 to 6 months. An advanced digital marketing course may take 6 to 12 months depending on the curriculum and training depth at EduraIndia.",
    },
    {
      question: "What topics are covered in an Advanced Digital Marketing Course?",
      answer: "An advanced digital marketing course includes SEO, PPC (Google Ads), Social Media Marketing, Content Marketing, Email Marketing, Affiliate Marketing, Web Analytics, and Marketing Automation tools, as covered in EduraIndia's program.",
    },
    {
      question: "Will I get a Digital Marketing Certification after completing the course?",
      answer: "Yes. You will receive an industry-recognized EduraIndia certification. You may also earn globally recognized certifications such as Google Ads Certification and Meta (Facebook) Certification.",
    },
    {
      question: "Is Digital Marketing a good career option in Delhi?",
      answer: "Yes, digital marketing is one of the fastest-growing career fields in Delhi with high demand for skilled professionals across industries. EduraIndia helps learners build job-ready skills to tap into this demand.",
    },
    {
      question: "What is the fee for a Digital Marketing Course in Delhi?",
      answer: "The fee for a digital marketing course in Delhi ranges from ₹20,000 to ₹80,000 depending on the institute, course level, and features like certifications and placement support. EMI options are available starting ₹2,500/month at EduraIndia.",
    },
    {
      question: "Does EduraIndia provide placement assistance?",
      answer: "Yes, EduraIndia provides 100% placement support including resume building, interview preparation, mock interviews, and direct job referrals to help students launch their careers.",
    },
    {
      question: "Can I start freelancing after completing a Digital Marketing Course?",
      answer: "Yes. After completing the course, you can start freelancing in SEO, social media management, Google Ads, and content marketing. EduraIndia includes a dedicated freelancing module to help you acquire clients and grow independently.",
    },
    {
      question: "Is the Digital Marketing course available online?",
      answer: "Yes, we offer online, offline, and blended (hybrid) modes. You can choose the format that works best for your schedule and learning style.",
    },
  ],

  // ── 19. SEO ───────────────────────────────────────────────────────
  seo: {
    // ⚠️ NOTE: Doc 2 had "No.1 Digital Marketing Course in Delhi by EduraIndia"
    //          Doc 1 had "Best Digital Marketing Course in Delhi | EduraIndia"
    //          "No.1" claim is bolder for CTR — update if you prefer Doc 2's version
    metaTitle: "Best Digital Marketing Course in Delhi | EduraIndia",
    metaDescription: "Join EduraIndia, the best institute for advanced digital marketing course in Delhi. Learn SEO, Google Ads & AI tools with placement support.",
    keywords: [
      "digital marketing course and fees",
      "what is digital marketing course",
      "advanced digital marketing course in delhi",
      "advanced digital marketing course",
      "digital marketing course in delhi",
      "digital marketing course",
      "digital marketing course in delhi after 12th",
      "digital marketing course near me",
    ],
    canonicalUrl: "https://eduraindia.com/courses/digital-marketing-course-delhi",

    ogTitle: "Best Digital Marketing Course in Delhi — EduraIndia",
    ogDescription: "Job-oriented digital marketing training with live projects, AI tools & 100% placement support. South Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/digital-marketing-og.jpg", // 1200×630 px
      alt: "EduraIndia Digital Marketing Course Delhi",
    },

    twitterTitle: "Best Digital Marketing Course in Delhi | EduraIndia",
    twitterDescription: "Learn SEO, Google Ads, Social Media & AI tools. 100% placement support. Join EduraIndia Delhi.",
    twitterImage: {
      url: "https://yourdomain.com/images/og/digital-marketing-twitter.jpg",
      alt: "EduraIndia Digital Marketing Course",
    },
  },

  // ── 20. STATUS ────────────────────────────────────────────────────
  isActive: true,
  isFeatured: true,
  sortOrder: 1,
  badge: "Most Popular",

  // ── 21. RELATED COURSES ───────────────────────────────────────────
  relatedCourses: [],
};


const dataAnalyst = {

  // ── 1. BASIC INFO ────────────────────────────────────────────────
  title: "Data Analyst Course in Delhi",

  // ✅ From Doc 3
  heroTitle: "Start Your Career with a Job-Oriented Data Analyst Course in Delhi",

  slug: "data-analyst-course-delhi",
  category: "Data Analytics",
  level: "Professional",
  language: "Hindi/English",
  mode: "Blended",

  // ── 2. MEDIA ─────────────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual data analyst assets
  thumbnail: {
    url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776075888/data_analyst_n3hjbv.png",
    alt: "Data Analyst Course in Delhi - EduraIndia",
  },
  bannerImage: {
    url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776075888/data_analyst_n3hjbv.png",
    alt: "Best Data Analyst Institute in Delhi - EduraIndia",
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_VIDEO_ID",

  // ── 3. COURSE STATS ───────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual values
  duration: "3-6 Months",
  totalLectures: 100,
  averageSalary: "₹3.5 LPA - ₹15 LPA",
  placementRate: "95%",
  studentsEnrolled: 870,
  rating: {
    average: 4.7,
    count: 210,
  },

  // ── 4. PRICING ───────────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual pricing
  price: {
    amount: 25000,
    currency: "INR",
    display: "₹25,000",
    originalPrice: 40000,
    emi: "₹2,500/month",
  },

  // ── 5. CURRICULUM PDF ─────────────────────────────────────────────
  curriculumPdfUrl: "https://yourdomain.com/pdfs/data-analyst-curriculum.pdf",

  // ── 6. DESCRIPTIONS ───────────────────────────────────────────────
  // ✅ From Doc 3
  description:
    "EduraIndia is a leading institute offering a job-oriented data analyst course in Delhi with practical training in Excel, SQL, and Power BI. Learn with real projects, expert guidance, and affordable data analyst course fees with 100% placement support.",

  // ✅ From Doc 3 — fixed typo "EnduraIndia" → "EduraIndia"
  description2:
    "Join EduraIndia for a professional data analyst course with live projects and expert mentor support. We offer flexible learning options including online data analyst courses and live training sessions in Delhi at affordable fees to help you build a successful career.",

  // ✅ From Doc 3
  descriptionHighlight:
    "Begin your journey with a top data analyst course. Learn Excel, Power BI, and real-world skills with practical training to become job-ready.",

  // ── 7. OVERVIEW SECTION ───────────────────────────────────────────
  // ✅ From Doc 3 — fixed missing opening backtick, fixed image URL
  overview: {
    title: "Data Analyst Course",
    description: `In today's data-driven world, data analysis plays a crucial role in decision-making and business growth. At EduraIndia, known for offering a professional data analyst course in Delhi, our program is designed to provide students with both theoretical knowledge and practical skills required to succeed in the analytics industry.

This data analyst course covers the main key principles on how to collect, clean, visualize, and interpret data while using tools such as Excel, SQL, and Power BI for data analysts. Students will have the opportunity to gain real-life experience through our Excel course in Delhi and our dedicated Power BI course in Delhi, which provides a clear understanding of how data works in real businesses and their insights. Therefore, this course is ideal for those looking to begin a data analyst career, whether they have graduated from high school or are professionals aiming to develop their skills.

Our training approach focuses on practical learning through live projects and real-time case studies, ensuring students build strong analytical thinking. We also offer flexible learning options including data analyst course online and classroom training in Delhi making it easier for students searching for a data analyst course near me. With expert trainers, affordable data analyst course fees, and placement support, EduraIndia helps you build a successful career in data analytics.`,
    // ⚠️ PLACEHOLDER — update with actual data analyst image
    image: {
      url: "https://yourdomain.com/images/courses/data-analyst-overview.jpg",
      alt: "Data Analyst training session at EduraIndia Delhi",
    },
  },

  // ── 8. PREREQUISITES ──────────────────────────────────────────────
  // ⚠️ NOT in Doc 3 — inferred from course content
  prerequisites: [
    "Basic computer knowledge",
    "Basic internet usage knowledge",
    "Basic mathematics understanding",
    "Basic reading/writing skills",
    "No prior coding experience required",
    "Curious mindset with willingness to learn",
  ],

  // ── 9. KEY FEATURES ───────────────────────────────────────────────
  // ⚠️ NOT in Doc 3 — inferred from skillsCovered and overview
  keyFeatures: [
    "Data Analysis Fundamentals",
    "Advanced Excel for Data Analysts",
    "SQL for Database Querying",
    "Power BI Dashboard Creation",
    "Data Cleaning & Preparation",
    "Data Visualization Techniques",
    "Statistics for Data Analysis",
    "Business Intelligence Concepts",
    "Real-Time Live Projects",
    "Basic Python for Data Analysis",
    "Report Generation & Storytelling",
    "Freelancing & Career Module",
  ],

  // ── 10. SKILLS COVERED ────────────────────────────────────────────
  // ✅ From Doc 3
  skillsCovered: [
    "Advanced Excel",
    "Data Cleaning & Preparation",
    "Data Visualization",
    "SQL (Structured Query Language)",
    "Power BI",
    "Dashboard Creation",
    "Data Analysis & Interpretation",
    "Statistics for Data Analysis",
    "Business Intelligence Concepts",
    "Report Generation",
    "Real-Time Project Handling",
    "Basic Python for Data Analysis",
  ],

  // ── 11. TOOLS COVERED ─────────────────────────────────────────────
  // ⚠️ NOT in Doc 3 — inferred from skills and overview
  toolsCovered: [
    { name: "Microsoft Excel", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072035/MSexcel_kszfd0.png", alt: "Microsoft Excel logo" } },
    { name: "Power BI", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072033/MicrosoftPowerBI_zreklg.png", alt: "Power BI logo" } },
    { name: "SQL / MySQL", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072046/SQL_lf0esh.png", alt: "MySQL logo" } },
    { name: "Python (Basics)", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072042/Python_brd01i.webp", alt: "Python logo" } },
    { name: "Google Sheets", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072025/GoogleSheet_nvbk0i.png", alt: "Google Sheets logo" } },
    { name: "Tableau (Basics)", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072046/Tableu_uqwhro.png", alt: "Tableau logo" } },
    { name: "Google Analytics", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072022/GoogleAnalytics_jpp5vq.png", alt: "Google Analytics logo" } },
    { name: "ChatGPT / AI Tools", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/ChatGPT_d3ybhl.webp", alt: "ChatGPT logo" } },
    { name: "MS Excel + Copilot", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/CopilotExcel_qfg5ks.png", alt: "MS Excel + Copilot logo" } },
    { name: "AWS", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/AWS_g6uhyv.png", alt: "AWS logo" } },
    { name: "Azure SQL", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072017/AzureSQL_ppvywg.png", alt: "Azure SQL logo" } },
    { name: "VBA", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072048/VBA_lspj8w.png", alt: "VBA logo" } },
    { name: "Numpy", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072040/Numpy_yey8ev.png", alt: "Numpy logo" } },
    { name: "Pandas", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072041/Pandas_v92vu1.png", alt: "Pandas logo" } },
    { name: "Matplotlib", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072032/Matplotlib_ckjtzn.png", alt: "Matplotlib logo" } },
    { name: "Google BigQuery  ", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072022/GoogleBigQuery_t1tojn.png", alt: "Google BigQuery logo" } },
  ],

  // ── 12. KEY TAKEAWAYS ─────────────────────────────────────────────
  // ⚠️ NOT in Doc 3 — inferred from course structure
  keyTakeaways: [
    "100% Placement Support",
    "Industry-Recognized Certification",
    "Hands-on Live Projects",
    "Expert Industry Trainers",
    "Excel, SQL & Power BI Mastery",
    "Resume & Portfolio Building",
    "Soft Skills & Interview Preparation",
    "Lifetime Career Support",
    "Online & Offline Flexible Learning",
    "Real Business Case Studies",
  ],

  // ── 14. CAREER OPPORTUNITIES ──────────────────────────────────────
  // ✅ From Doc 3
  careerOpportunities: [
    { title: "Data Analyst", description: "Analyze data sets to extract insights and support business decisions." },
    { title: "Business Analyst", description: "Understand business needs and translate data into actionable strategies." },
    { title: "Data Visualization Expert", description: "Create interactive dashboards and reports to present data clearly." },
    { title: "Excel Specialist", description: "Work with large data sets using advanced formulas and reporting tools." },
    { title: "Power BI Developer", description: "Build dynamic dashboards and visual reports for business intelligence." },
    { title: "SQL Analyst", description: "Manage and query databases to organize and analyze structured data." },
    { title: "Freelance Data Analyst", description: "Work independently on data projects for different clients and industries." },
    { title: "Junior Data Scientist", description: "Support data-driven projects with basic modeling and analysis skills." },
  ],

  // ── 15. CAREER JOURNEY ────────────────────────────────────────────
  // ✅ From Doc 3
  careerJourney: [
    { step: 1, role: "Data Analyst Intern", experience: "0-6 months", salaryRange: "₹1.5L - ₹3L" },
    { step: 2, role: "Junior Data Analyst", experience: "6 months - 1 yr", salaryRange: "₹3L - ₹5L" },
    { step: 3, role: "Data Analyst", experience: "1-3 years", salaryRange: "₹5L - ₹8L" },
    { step: 4, role: "Senior Data Analyst", experience: "3-5 years", salaryRange: "₹8L - ₹15L" },
    { step: 5, role: "Analytics Manager / Lead", experience: "5+ years", salaryRange: "₹15L - ₹25L+" },
  ],

  // ── 18. FAQs ──────────────────────────────────────────────────────
  // ✅ From Doc 3
  faqs: [
    {
      question: "What is a Data Analyst Course?",
      answer: "A data analyst course is a structured program that teaches you how to collect, clean, analyze, and interpret data using tools like Excel, SQL, and Power BI to support business decisions, as offered at EduraIndia.",
    },
    {
      question: "How do I choose the best Data Analyst Course in Delhi?",
      answer: "To choose the best data analyst course in Delhi, you should look for practical training, experienced mentors, live projects, placement support, and industry-relevant tools like Excel and Power BI, such as those provided by EduraIndia.",
    },
    {
      question: "Who can enroll in a Data Analyst Course?",
      answer: "Anyone can enroll in a data analyst course, including students, graduates, and working professionals. It is also a great option for those looking for a data analyst course after 12th with no prior technical background at EduraIndia.",
    },
    {
      question: "What is the duration of a Data Analyst Course?",
      answer: "The duration of a data analyst course typically ranges from 3 to 6 months. Some advanced programs with real-time projects and tools like Power BI may take longer depending on the training depth at EduraIndia.",
    },
    {
      question: "What topics are covered in a Data Analyst Course?",
      answer: "A data analyst course includes topics like data cleaning, data visualization, Excel, SQL, and Power BI. Many institutes also include an Excel course in Delhi and a Power BI course in Delhi as part of the curriculum, as covered in EduraIndia's program.",
    },
    {
      question: "Will I get certification after completing the Data Analyst Course?",
      answer: "Yes, most institutes provide certification after completing a data analyst course, which helps in validating your skills and improving job opportunities in the analytics field, including certification from EduraIndia.",
    },
    {
      question: "Is Data Analytics a good career option in Delhi?",
      answer: "Yes, data analytics is a fast-growing career field in Delhi with increasing demand for skilled professionals across industries, offering strong salary growth and career stability, and EduraIndia helps you build job-ready skills.",
    },
    {
      question: "What is the fee for a Data Analyst Course?",
      answer: "The data analyst course fees can vary from ₹20,000 to ₹80,000 depending on the institute, course level, and whether it includes tools like Power BI and placement support at EduraIndia.",
    },
    {
      question: "Do you offer online Data Analyst Course options?",
      answer: "Yes, we offer a data analyst course online along with classroom training in Delhi, Noida, and Faridabad for students who prefer flexible learning options at EduraIndia.",
    },
    {
      question: "Can I get a job after completing a Data Analyst Course?",
      answer: "Yes, after completing a data analyst course, you can apply for roles like junior data analyst, business analyst, or data executive, especially if you have practical project experience from EduraIndia.",
    },
  ],

  // ── 19. SEO ───────────────────────────────────────────────────────
  seo: {
    // ✅ From Doc 3
    metaTitle: "Best Institute for Data Analyst Course in Delhi at EduraIndia",
    metaDescription: "Join EduraIndia for a practical data analyst course in Delhi. Learn Excel, Power BI, and real data skills with expert guidance and career support.",
    keywords: [
      "data analyst course fees",
      "data analyst course online",
      "data analyst course in noida",
      "data analyst course after 12th",
      "data analyst course in faridabad",
      "data analyst course in delhi",
      "data analyst course near me",
      "excel course in delhi",
      "power bi course",
      "power bi course in delhi",
    ],

    // ✅ FIXED — was pointing to digital marketing URL
    canonicalUrl: "https://eduraindia.com/courses/data-analyst-course-delhi",

    // ✅ FIXED — was copy-pasted digital marketing content
    ogTitle: "Best Data Analyst Course in Delhi — EduraIndia",
    ogDescription: "Job-oriented data analyst training with live projects, Excel, Power BI & SQL. 100% placement support. Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/data-analyst-og.jpg", // 1200×630 px
      alt: "EduraIndia Data Analyst Course Delhi",
    },

    // ✅ FIXED — was copy-pasted digital marketing content
    twitterTitle: "Best Data Analyst Course in Delhi | EduraIndia",
    twitterDescription: "Learn Excel, SQL, Power BI & data skills. 100% placement support. Join EduraIndia Delhi.",
    twitterImage: {
      url: "https://yourdomain.com/images/og/data-analyst-twitter.jpg",
      alt: "EduraIndia Data Analyst Course",
    },
  },

  // ── 20. STATUS ────────────────────────────────────────────────────
  isActive: true,
  isFeatured: true,
  sortOrder: 2,
  badge: "High Demand",

  // ── 21. RELATED COURSES ───────────────────────────────────────────
  relatedCourses: [],
};


const graphicDesign = {

  // ── 1. BASIC INFO ────────────────────────────────────────────────
  title: "Graphic Design Course in Delhi",

  // ✅ From Doc 4
  heroTitle: "Build a Creative Career with a Professional Graphic Design Course in Delhi",

  slug: "graphic-design-course-delhi",
  category: "Graphic Design",
  level: "Professional",
  language: "Hindi/English",
  mode: "Blended",

  // ── 2. MEDIA ─────────────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual graphic design assets
  thumbnail: {
    url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776075893/graphic_design_eqjria.png",
    alt: "Graphic Design Course in Delhi - EduraIndia",
  },
  bannerImage: {
    url: "https://yourdomain.com/images/courses/graphic-design-banner.jpg",
    alt: "Best Graphic Design Institute in Delhi - EduraIndia",
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_VIDEO_ID",

  // ── 3. COURSE STATS ───────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual values
  duration: "3-6 Months",
  totalLectures: 90,
  averageSalary: "₹2.5 LPA - ₹12 LPA",
  placementRate: "95%",
  studentsEnrolled: 760,
  rating: {
    average: 4.7,
    count: 185,
  },

  // ── 4. PRICING ───────────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual pricing
  price: {
    amount: 20000,
    currency: "INR",
    display: "₹20,000",
    originalPrice: 35000,
    emi: "₹2,000/month",
  },

  // ── 5. CURRICULUM PDF ─────────────────────────────────────────────
  curriculumPdfUrl: "https://yourdomain.com/pdfs/graphic-design-curriculum.pdf",

  // ── 6. DESCRIPTIONS ───────────────────────────────────────────────
  // ✅ From Doc 4
  description:
    "EduraIndia is a trusted institute offering a professional graphic design course in Delhi with hands-on training in Photoshop, Illustrator, and design tools. Work on real projects, learn from experts, and enroll at affordable graphic designer course fees with placement support.",

  // ✅ From Doc 4 — fixed "Edura India" (space) → "EduraIndia"
  description2:
    "EduraIndia offers a hands-on practical graphic design course with expert instruction through experiential learning experiences. Students will receive many opportunities to engage in real-world projects throughout their course experience. Students searching for a graphic design course near me can also benefit from our classroom training in Delhi at budget-friendly fees.",

  // ✅ From Doc 4
  descriptionHighlight:
    "Kickstart your journey with a creative graphic design course. Learn industry tools and build real-world design skills with practical training to become job-ready.",

  // ── 7. OVERVIEW SECTION ───────────────────────────────────────────
  // ✅ From Doc 4 — fixed image URL
  overview: {
    title: "Graphic Design Course",
    description: `In today's visually driven world, graphic design plays a key role in branding, marketing, and communication. At EduraIndia, known for offering a creative graphic design course in Delhi, our program is designed to help students build strong design fundamentals along with practical skills required in the industry.

This graphic designing course covers essential topics such as color theory, typography, layout design, and visual storytelling using industry tools like Adobe Photoshop, Illustrator, and CorelDRAW. Students will gain hands-on experience by working on real-world projects, making it ideal for those searching for graphic design courses that focus on practical learning. Whether you are a beginner or someone looking for a graphic design course after 12th, this course helps you develop creative and technical expertise.

Our training approach focuses on real-time projects and portfolio development so students can confidently enter the job market. We also provide flexible options for learners looking for a graphic design course near me, with classroom training in Delhi. With expert mentors, affordable graphic designer course fees, and placement support, EduraIndia helps you build a successful career in the design industry.`,
    // ⚠️ PLACEHOLDER — update with actual graphic design image
    image: {
      url: "https://yourdomain.com/images/courses/graphic-design-overview.jpg",
      alt: "Graphic Design training session at EduraIndia Delhi",
    },
  },

  // ── 8. PREREQUISITES ──────────────────────────────────────────────
  // ⚠️ NOT in Doc 4 — inferred from course content
  prerequisites: [
    "Basic computer knowledge",
    "Basic internet usage knowledge",
    "No prior design experience required",
    "Basic reading/writing skills",
    "Creative mindset and interest in visual design",
    "Willingness to learn design tools",
  ],

  // ── 9. KEY FEATURES ───────────────────────────────────────────────
  // ⚠️ NOT in Doc 4 — inferred from skillsCovered and overview
  keyFeatures: [
    "Design Fundamentals & Color Theory",
    "Typography & Layout Design",
    "Adobe Photoshop — Image Editing & Retouching",
    "Adobe Illustrator — Vector & Logo Design",
    "CorelDRAW for Print Design",
    "Branding & Brand Identity Design",
    "Social Media Creative Design",
    "Poster, Banner & Packaging Design",
    "UI Design Basics",
    "Portfolio Development",
    "Real-Time Live Projects",
    "Freelancing & Career Module",
  ],

  // ── 10. SKILLS COVERED ────────────────────────────────────────────
  // ✅ From Doc 4
  skillsCovered: [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "CorelDRAW",
    "Typography & Font Design",
    "Color Theory & Composition",
    "Logo Design & Branding",
    "Social Media Creative Design",
    "Poster & Banner Design",
    "UI Design Basics",
    "Image Editing & Retouching",
    "Portfolio Design",
    "Real-Time Project Work",
  ],

  // ── 11. TOOLS COVERED ─────────────────────────────────────────────
  // ⚠️ NOT in Doc 4 — inferred from skills and overview
  toolsCovered: [
    { name: "Adobe Photoshop", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072017/AdobePhotoshop_ofm8ac.png", alt: "Adobe Photoshop logo" } },
    { name: "Adobe Illustrator", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/AdobeIllustrator_qbp1wf.png", alt: "Adobe Illustrator logo" } },
    { name: "CorelDRAW", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776146780/coreldraw_xizgx6.png", alt: "CorelDRAW logo" } },
    { name: "Canva", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/Canva-removebg-preview_lorpzt.png", alt: "Canva logo" } },
    { name: "Adobe InDesign", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/AdobeInDesign_emcngj.png", alt: "Adobe InDesign logo" } },
    { name: "Figma (Basics)", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776146894/figma_mvfnuq.png", alt: "Figma logo" } },
    { name: "Adobe Express", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776146960/AdobeExpress_wrsjty.png", alt: "Adobe Express logo" } },
    { name: "ChatGPT / AI Tools", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/ChatGPT_d3ybhl.webp", alt: "ChatGPT logo" } },
    { name: "Adobe Photoshop", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072017/AdobePhotoshop_ofm8ac.png", alt: "Adobe Photoshop logo" } },
    { name: "Adobe Illustrator", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/AdobeIllustrator_qbp1wf.png", alt: "Adobe Illustrator logo" } },
    { name: "CorelDRAW", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776146780/coreldraw_xizgx6.png", alt: "CorelDRAW logo" } },
    { name: "Canva", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/Canva-removebg-preview_lorpzt.png", alt: "Canva logo" } },
    { name: "Adobe InDesign", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/AdobeInDesign_emcngj.png", alt: "Adobe InDesign logo" } },
    { name: "Figma (Basics)", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776146894/figma_mvfnuq.png", alt: "Figma logo" } },
    { name: "Adobe Express", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776146960/AdobeExpress_wrsjty.png", alt: "Adobe Express logo" } },
    { name: "ChatGPT / AI Tools", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/ChatGPT_d3ybhl.webp", alt: "ChatGPT logo" } },
  ],

  // ── 12. KEY TAKEAWAYS ─────────────────────────────────────────────
  // ⚠️ NOT in Doc 4 — inferred from course structure
  keyTakeaways: [
    "100% Placement Support",
    "Industry-Recognized Certification",
    "Hands-on Live Projects",
    "Expert Industry Trainers",
    "Strong Portfolio Development",
    "Resume & Portfolio Building",
    "Soft Skills & Interview Preparation",
    "Lifetime Career Support",
    "Online & Offline Flexible Learning",
    "Real Branding & Client Projects",
  ],

  // ── 14. CAREER OPPORTUNITIES ──────────────────────────────────────
  // ✅ From Doc 4
  careerOpportunities: [
    { title: "Graphic Designer", description: "Create visual designs for brands including logos, posters, and digital creatives." },
    { title: "UI Designer", description: "Design user-friendly interfaces for websites and mobile applications." },
    { title: "Visual Designer", description: "Develop engaging visuals for marketing campaigns and brand communication." },
    { title: "Brand Identity Designer", description: "Build complete brand identities including logos, color palettes, and guidelines." },
    { title: "Social Media Designer", description: "Design creative posts, banners, and ads for social media platforms." },
    { title: "Motion Graphics Designer", description: "Create animated graphics and visual effects for videos and ads." },
    { title: "Freelance Graphic Designer", description: "Work independently on design projects for multiple clients and businesses." },
    { title: "Creative Director", description: "Lead design projects and guide creative teams for brand campaigns." },
  ],

  // ── 15. CAREER JOURNEY ────────────────────────────────────────────
  // ✅ From Doc 4
  careerJourney: [
    { step: 1, role: "Graphic Design Intern", experience: "0-6 months", salaryRange: "₹1L - ₹2.5L" },
    { step: 2, role: "Junior Graphic Designer", experience: "6 months - 1 yr", salaryRange: "₹2.5L - ₹4L" },
    { step: 3, role: "Graphic Designer", experience: "1-3 years", salaryRange: "₹4L - ₹7L" },
    { step: 4, role: "Senior Graphic Designer", experience: "3-5 years", salaryRange: "₹7L - ₹12L" },
    { step: 5, role: "Art Director / Creative Lead", experience: "5+ years", salaryRange: "₹12L - ₹20L+" },
  ],

  // ── 18. FAQs ──────────────────────────────────────────────────────
  // ✅ From Doc 4
  faqs: [
    {
      question: "Which graphic design course in Delhi is best for practical learning?",
      answer: "A good graphic design course in Delhi should focus on real projects, portfolio work, and hands-on practice with tools like Photoshop and Illustrator instead of only theory-based learning.",
    },
    {
      question: "What do you actually learn in a graphic design course?",
      answer: "In a graphic design course, you learn how to create visuals, work with colors and fonts, design social media creatives, logos, and understand how real branding works in the industry.",
    },
    {
      question: "After completing a graphic design course, what jobs can I get?",
      answer: "After a graphic design course, you can work as a graphic designer, social media designer, branding designer, or take freelance projects related to logos, posts, and marketing creatives.",
    },
    {
      question: "Is graphic design a good career option in India right now?",
      answer: "Yes, graphic design is a strong career option in India as businesses need creatives for marketing, ads, and social media, which increases demand for skilled designers.",
    },
    {
      question: "Do I need any qualification to start a graphic designing course?",
      answer: "No specific qualification is required. Anyone can start a graphic designing course after 12th or graduation, even if they have no design background.",
    },
    {
      question: "How much does a graphic design course cost in Delhi?",
      answer: "The cost of a graphic design course in Delhi usually depends on the institute and training level, but it generally falls between ₹15,000 and ₹70,000.",
    },
    {
      question: "Can I learn graphic design from home or online?",
      answer: "Yes, many institutes provide online graphic design courses, allowing you to learn from home with flexible timing and access to recorded or live classes.",
    },
    {
      question: "How much time does it take to complete graphic design training?",
      answer: "A basic graphic design course can be completed in 3 to 6 months, while advanced training with projects and portfolio building may take a longer duration.",
    },
    {
      question: "How do I find a graphic design course near me in Delhi?",
      answer: "You can search online for a graphic design course near me and choose an institute in Delhi that offers practical classes, flexible batches, and good student support.",
    },
    {
      question: "Can I start earning after learning graphic design?",
      answer: "Yes, once you learn graphic design, you can start earning by doing freelance work, working with agencies, or getting a job as a designer in companies.",
    },
  ],

  // ── 19. SEO ───────────────────────────────────────────────────────
  seo: {
    // ✅ From Doc 4
    metaTitle: "#1 Graphic Design Course in Delhi at EduraIndia",
    metaDescription: "Join EduraIndia, a leading institute for graphic design course in Delhi. Learn design tools, creative concepts, and real projects with expert guidance.",
    keywords: [
      "graphic design course in delhi",
      "graphic design course near me",
      "graphic designer course fees",
      "graphic design course",
      "graphic design courses",
      "graphic designing course",
      "graphics design course",
    ],

    // ✅ FIXED — was pointing to digital marketing URL
    canonicalUrl: "https://eduraindia.com/courses/graphic-design-course-delhi",

    // ✅ FIXED — was copy-pasted digital marketing content
    ogTitle: "Best Graphic Design Course in Delhi — EduraIndia",
    ogDescription: "Professional graphic design training with live projects, Photoshop, Illustrator & CorelDRAW. Placement support. Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/graphic-design-og.jpg", // 1200×630 px
      alt: "EduraIndia Graphic Design Course Delhi",
    },

    // ✅ FIXED — was copy-pasted digital marketing content
    twitterTitle: "Best Graphic Design Course in Delhi | EduraIndia",
    twitterDescription: "Learn Photoshop, Illustrator, Branding & UI Design. Placement support. Join EduraIndia Delhi.",
    twitterImage: {
      url: "https://yourdomain.com/images/og/graphic-design-twitter.jpg",
      alt: "EduraIndia Graphic Design Course",
    },
  },

  // ── 20. STATUS ────────────────────────────────────────────────────
  isActive: true,
  isFeatured: true,
  sortOrder: 3,
  badge: "Creative Career",

  // ── 21. RELATED COURSES ───────────────────────────────────────────
  relatedCourses: [],
};


const videoEditing = {

  // ── 1. BASIC INFO ────────────────────────────────────────────────
  title: "Video Editing Course in Delhi",

  // ✅ From Doc 5
  heroTitle: "Become a Skilled Video Editor with an Industry-Focused Video Editing Course in Delhi",

  slug: "video-editing-course-delhi",
  category: "Video Editing",
  level: "Professional",
  language: "Hindi/English",
  mode: "Blended",

  // ── 2. MEDIA ─────────────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual video editing assets
  thumbnail: {
    url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776075903/video_editing_pnq7oa.png",
    alt: "Video Editing Course in Delhi - EduraIndia",
  },
  bannerImage: {
    url: "https://yourdomain.com/images/courses/video-editing-banner.jpg",
    alt: "Best Video Editing Institute in Delhi - EduraIndia",
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_VIDEO_ID",

  // ── 3. COURSE STATS ───────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual values
  duration: "3-6 Months",
  totalLectures: 85,
  averageSalary: "₹2L LPA - ₹12 LPA",
  placementRate: "95%",
  studentsEnrolled: 620,
  rating: {
    average: 4.7,
    count: 160,
  },

  // ── 4. PRICING ───────────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual pricing
  price: {
    amount: 20000,
    currency: "INR",
    display: "₹20,000",
    originalPrice: 35000,
    emi: "₹2,000/month",
  },

  // ── 5. CURRICULUM PDF ─────────────────────────────────────────────
  curriculumPdfUrl: "https://yourdomain.com/pdfs/video-editing-curriculum.pdf",

  // ── 6. DESCRIPTIONS ───────────────────────────────────────────────
  // ✅ From Doc 5
  description:
    "EduraIndia offers a career-focused video editing course in Delhi designed to help you master editing tools and storytelling techniques. Learn through hands-on projects, expert guidance, and enroll with affordable video editing course fees and placement support.",

  // ✅ From Doc 5
  description2:
    "Join EduraIndia to learn a practical video editing course with real-world projects and mentorship. We provide flexible learning options including video editing course online and classroom training for students searching for a video editing course.",

  // ✅ From Doc 5
  descriptionHighlight:
    "Begin your journey with a creative video editing course. Learn editing tools and practical skills to create professional videos and become job-ready.",

  // ── 7. OVERVIEW SECTION ───────────────────────────────────────────
  // ✅ From Doc 5 — fixed image URL
  overview: {
    title: "Video Editing Course",
    description: `In today's content-driven world, video editing has become one of the most in-demand skills for creators, businesses, and digital platforms. At EduraIndia, our video editing course in Delhi is designed to help students turn raw footage into professional-quality videos with the right techniques and creative approach.

This video editing course covers important concepts such as video cutting, transitions, color correction, audio editing, and visual effects using tools like Adobe Premiere Pro and After Effects. Students will work on real-world projects including YouTube videos, ads, and social media content, making it ideal for those searching for practical video courses. Whether you are a beginner or someone exploring a video editing course after 12th, this course helps you build strong editing and storytelling skills.

Our training focuses on hands-on learning and portfolio creation so students can confidently apply for jobs or start freelancing. We also offer flexible learning options for students looking for a video editing course near me, along with classroom training in Delhi and video editing course online support. With experienced trainers, reasonable video editing course fees, and career guidance, EduraIndia helps you build a successful future in the video editing industry.`,
    // ⚠️ PLACEHOLDER — update with actual video editing image
    image: {
      url: "https://yourdomain.com/images/courses/video-editing-overview.jpg",
      alt: "Video Editing training session at EduraIndia Delhi",
    },
  },

  // ── 8. PREREQUISITES ──────────────────────────────────────────────
  // ⚠️ NOT in Doc 5 — inferred from course content
  prerequisites: [
    "Basic computer knowledge",
    "Basic internet usage knowledge",
    "No prior editing experience required",
    "Basic understanding of video/media files",
    "Creative interest in video storytelling",
    "Willingness to learn professional editing tools",
  ],

  // ── 9. KEY FEATURES ───────────────────────────────────────────────
  // ⚠️ NOT in Doc 5 — inferred from skillsCovered and overview
  keyFeatures: [
    "Video Editing Fundamentals & Storytelling",
    "Adobe Premiere Pro — Professional Editing",
    "Adobe After Effects — Motion Graphics & VFX",
    "Color Correction & Color Grading",
    "Audio Editing & Sound Design",
    "YouTube Video Editing & Optimization",
    "Short-form Content — Reels & Shorts",
    "Green Screen (Chroma Key) Editing",
    "Transitions, Effects & Titles",
    "Portfolio & Showreel Development",
    "Real-Time Live Projects",
    "Freelancing & Career Module",
  ],

  // ── 10. SKILLS COVERED ────────────────────────────────────────────
  // ✅ From Doc 5 — fixed missing comma before array
  skillsCovered: [
    "Adobe Premiere Pro",
    "After Effects",
    "Video Cutting & Trimming",
    "Color Correction & Color Grading",
    "Audio Editing & Sync",
    "Transitions & Effects",
    "Motion Graphics Basics",
    "Green Screen Editing (Chroma Key)",
    "YouTube Video Editing",
    "Short-form Content Editing (Reels/Shorts)",
    "Storytelling & Video Flow",
    "Real-Time Project Work",
  ],

  // ── 11. TOOLS COVERED ─────────────────────────────────────────────
  // ⚠️ NOT in Doc 5 — inferred from skills and overview
  toolsCovered: [
    { name: "Adobe Premiere Pro", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776149576/AdobePremierePro_julkf3.png", alt: "Adobe Premiere Pro logo" } },
    { name: "Adobe After Effects", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776149576/AdobeAfterEffects_wf6evz.png", alt: "Adobe After Effects logo" } },
    { name: "Adobe Audition", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776149778/AdobeAudition_h8jwkf.png", alt: "Adobe Audition logo" } },
    { name: "DaVinci Resolve", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776149837/DaVinciResolve_tm65ub.png", alt: "DaVinci Resolve logo" } },
    { name: "CapCut", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776149901/capcut_k20v27.webp", alt: "CapCut logo" } },
    { name: "Adobe Media Encoder", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776149964/AdobeMediaEncoder_d0chpj.png", alt: "Adobe Media Encoder logo" } },
    { name: "YouTube Studio", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776150016/YouTubeStudio_p0q2ua.webp", alt: "YouTube Studio logo" } },
    { name: "ChatGPT / AI Tools", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/ChatGPT_d3ybhl.webp", alt: "ChatGPT logo" } },
    { name: "Canva", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/Canva-removebg-preview_lorpzt.png", alt: "ChatGPT logo" } },
    { name: "Gemini", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776149589/Gemini_n5x9gj.png", alt: "ChatGPT logo" } },
    { name: "Freepik", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776149577/Freepik_om6t5y.png", alt: "ChatGPT logo" } },
    { name: "Adobe Podcast", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776149576/AdobePodcast_uee7sf.png", alt: "ChatGPT logo" } },
    { name: "Lenoardo AI", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776149590/LeonardoAi_oz2ltc.png", alt: "ChatGPT logo" } },
  ],

  // ── 12. KEY TAKEAWAYS ─────────────────────────────────────────────
  // ⚠️ NOT in Doc 5 — inferred from course structure
  keyTakeaways: [
    "100% Placement Support",
    "Industry-Recognized Certification",
    "Hands-on Live Projects",
    "Expert Industry Trainers",
    "Professional Portfolio & Showreel",
    "Resume & Portfolio Building",
    "Soft Skills & Interview Preparation",
    "Lifetime Career Support",
    "Online & Offline Flexible Learning",
    "Real Client & Brand Projects",
  ],

  // ── 14. CAREER OPPORTUNITIES ──────────────────────────────────────
  // ✅ From Doc 5
  careerOpportunities: [
    { title: "Video Editor", description: "Edit raw footage into professional videos for brands, YouTube, and media platforms." },
    { title: "YouTube Video Editor", description: "Create engaging and optimized videos for YouTube channels and content creators." },
    { title: "Motion Graphics Artist", description: "Design animations, titles, and visual effects for videos and advertisements." },
    { title: "Film & Media Editor", description: "Work on films, short videos, and media productions to enhance storytelling." },
    { title: "Social Media Video Editor", description: "Edit short-form content like reels, ads, and promotional videos for social platforms." },
    { title: "Post Production Specialist", description: "Handle video finishing tasks including color correction, sound editing, and effects." },
    { title: "Freelance Video Editor", description: "Work independently on video projects for clients across different industries." },
    { title: "Video Production Manager", description: "Manage complete video projects from editing to final delivery for brands." },
  ],

  // ── 15. CAREER JOURNEY ────────────────────────────────────────────
  // ✅ From Doc 5
  careerJourney: [
    { step: 1, role: "Video Editing Intern", experience: "0-6 months", salaryRange: "₹1L - ₹2L" },
    { step: 2, role: "Junior Video Editor", experience: "6 months - 1 yr", salaryRange: "₹2L - ₹4L" },
    { step: 3, role: "Video Editor", experience: "1-3 years", salaryRange: "₹4L - ₹7L" },
    { step: 4, role: "Senior Video Editor", experience: "3-5 years", salaryRange: "₹7L - ₹12L" },
    { step: 5, role: "Video Production Head", experience: "5+ years", salaryRange: "₹12L - ₹20L+" },
  ],

  // ── 18. FAQs ──────────────────────────────────────────────────────
  // ✅ From Doc 5
  faqs: [
    {
      question: "Which is the best video editing course in Delhi for beginners?",
      answer: "The best video editing course in Delhi for beginners is one that includes practical training, real projects, and tools like Premiere Pro and After Effects, along with guidance from experienced editors.",
    },
    {
      question: "What skills will I learn in a video editing course?",
      answer: "In a video editing course, you will learn video cutting, transitions, color grading, sound editing, and effects using professional software while working on real video projects.",
    },
    {
      question: "Can I become a video editor after completing a video editing course?",
      answer: "Yes, after completing a video editing course, you can start working as a video editor for YouTube channels, production houses, or even as a freelance editor.",
    },
    {
      question: "Is video editing a good career in 2026?",
      answer: "Yes, video editing is one of the fastest-growing careers due to the rise of YouTube, Instagram reels, and digital content, creating high demand for skilled editors.",
    },
    {
      question: "What is the duration of a video editing course?",
      answer: "A video editing course usually takes 3 to 6 months to complete, depending on the level and whether it includes advanced tools and live projects.",
    },
    {
      question: "How much are video editing course fees in Delhi?",
      answer: "Video editing course fees in Delhi generally range from ₹20,000 to ₹80,000 depending on the institute, course level, and software covered in the training.",
    },
    {
      question: "Can I join a video editing course after 12th?",
      answer: "Yes, you can join a video editing course after 12th with no prior experience. It is a great option for students interested in creative and digital careers.",
    },
    {
      question: "Do you offer video editing course online?",
      answer: "Yes, we offer video editing course online options along with offline classes, making it easier for students to learn from anywhere at EduraIndia.",
    },
    {
      question: "How can I find a video editing course near me?",
      answer: "If you are searching for a video editing course near me, you can find EduraIndia in Delhi offering classroom training with flexible timings and practical exposure.",
    },
    {
      question: "Can I earn money after completing a video editing course?",
      answer: "Yes, after completing a video editing course, you can earn by freelancing, editing YouTube videos, working with brands, or joining media and production companies.",
    },
  ],

  // ── 19. SEO ───────────────────────────────────────────────────────
  seo: {
    // ✅ From Doc 5 — fixed grammar "NO1 Institute Video Editing..." → cleaner title
    metaTitle: "#1 Video Editing Course in Delhi at EduraIndia",
    metaDescription: "Join EduraIndia, a trusted video editing course in Delhi. Learn professional editing skills, tools, and techniques with practical training and projects.",
    keywords: [
      "video editing course",
      "video editing course in delhi",
      "video editing course near me",
      "editing course",
      "video editing course online",
      "video courses",
    ],

    // ✅ FIXED — was pointing to digital marketing URL
    canonicalUrl: "https://eduraindia.com/courses/video-editing-course-delhi",

    // ✅ FIXED — was copy-pasted digital marketing content
    ogTitle: "Best Video Editing Course in Delhi — EduraIndia",
    ogDescription: "Career-focused video editing training with live projects, Premiere Pro, After Effects & placement support. Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/video-editing-og.jpg", // 1200×630 px
      alt: "EduraIndia Video Editing Course Delhi",
    },

    // ✅ FIXED — was copy-pasted digital marketing content
    twitterTitle: "Best Video Editing Course in Delhi | EduraIndia",
    twitterDescription: "Learn Premiere Pro, After Effects, Color Grading & more. Placement support. Join EduraIndia Delhi.",
    twitterImage: {
      url: "https://yourdomain.com/images/og/video-editing-twitter.jpg",
      alt: "EduraIndia Video Editing Course",
    },
  },

  // ── 20. STATUS ────────────────────────────────────────────────────
  isActive: true,
  isFeatured: true,
  sortOrder: 4,
  badge: "Trending",

  // ── 21. RELATED COURSES ───────────────────────────────────────────
  relatedCourses: [],
};


const multimediaCourse = {

  // ── 1. BASIC INFO ────────────────────────────────────────────────
  title: "Master Creative Skills with a Professional Multimedia Course in Delhi",
  heroTitle: "Master Creative Skills with a Professional Multimedia Course in Delhi",
  slug: "multimedia-animation-course-delhi",        // ⚠️ MISSING in Doc 2 — placeholder
  category: "Multimedia & Animation",               // ⚠️ MISSING in Doc 2 — inferred
  level: "Professional",                            // ⚠️ MISSING in Doc 2 — placeholder
  language: "Hindi/English",                        // ⚠️ MISSING in Doc 2 — placeholder
  mode: "Blended",                                  // ⚠️ MISSING in Doc 2 — inferred from FAQs

  // ── 2. MEDIA ─────────────────────────────────────────────────────
  thumbnail: {
    url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776075897/multimedia_vtjmhm.png", // ⚠️ MISSING
    alt: "Multimedia & Animation Course in Delhi - EduraIndia",            // ⚠️ MISSING
  },
  bannerImage: {
    url: "https://yourdomain.com/images/courses/multimedia-banner.jpg",    // ⚠️ MISSING
    alt: "Best Multimedia Institute in Delhi - EduraIndia",                // ⚠️ MISSING
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_VIDEO_ID",             // ⚠️ MISSING

  // ── 3. COURSE STATS ───────────────────────────────────────────────
  duration: "4-8 Months",               // ✅ Inferred from FAQ answer
  totalLectures: null,                  // ⚠️ MISSING in Doc 2
  averageSalary: "₹2L - ₹12L+",        // ✅ Inferred from careerJourney
  placementRate: null,                  // ⚠️ MISSING in Doc 2
  studentsEnrolled: null,               // ⚠️ MISSING in Doc 2
  rating: {
    average: null,                      // ⚠️ MISSING in Doc 2
    count: null,                        // ⚠️ MISSING in Doc 2
  },

  // ── 4. PRICING ───────────────────────────────────────────────────
  price: {
    amount: null,                       // ⚠️ MISSING in Doc 2
    currency: "INR",
    display: null,                      // ⚠️ MISSING in Doc 2
    originalPrice: null,                // ⚠️ MISSING in Doc 2
    emi: null,                          // ⚠️ MISSING in Doc 2
    // FAQ mentions range: ₹25,000 - ₹90,000
  },

  // ── 5. CURRICULUM PDF ─────────────────────────────────────────────
  curriculumPdfUrl: "https://yourdomain.com/pdfs/multimedia-curriculum.pdf", // ⚠️ MISSING

  // ── 6. DESCRIPTIONS ───────────────────────────────────────────────
  description:
    "EduraIndia offers an industry-focused multimedia course in Delhi where you learn design, video editing, and digital creativity through hands-on projects. Get expert guidance, build real skills, and enroll at affordable multimedia course fees with placement support.",

  description2:
    "Join EduraIndia's multimedia design course and gain practical experience in graphics, video, and content creation. We offer flexible learning options for students looking for a multimedia course in Delhi with expert mentorship and real-world training.",

  descriptionHighlight:
    "Build your creative future with a multimedia design course. Learn design, video, and digital tools with practical training and industry-focused skills.",
  // ⚠️ NOTE: Doc 2 used key "descriptionHig" (typo) — corrected to "descriptionHighlight"

  // ── 7. OVERVIEW SECTION ───────────────────────────────────────────
  overview: {
    title: "Multimedia Course",
    description: `The digital world today runs on visuals, videos, and interactive content, making multimedia one of the most powerful creative fields. At EduraIndia, our multimedia course in Delhi is designed for those who want to explore multiple creative skills and build a strong career in the digital industry.

This multimedia design course gives you exposure to different areas like graphic design, video editing, and digital content creation. Instead of focusing on just one skill, students learn how to combine visuals, motion, and creativity to create engaging content for brands and platforms. You will work with industry tools and understand how real projects are planned and executed, making it ideal for learners searching for practical multimedia courses.

What makes this multimedia course different is the focus on creativity with real-world application. Students don't just learn tools — they learn how to think like designers and creators. If you are looking for a multimedia course near me, EduraIndia offers classroom training in Delhi along with flexible learning support. With experienced mentors, affordable multimedia course fees, and career guidance, this course helps you step into multiple creative roles with confidence.`,
    image: {
      url: "https://yourdomain.com/images/courses/multimedia-overview.jpg", // ⚠️ MISSING — Doc 2 had DM image URL by mistake
      alt: "Multimedia training session at EduraIndia Delhi",               // ⚠️ MISSING — corrected
    },
  },

  // ── 8. PREREQUISITES ──────────────────────────────────────────────
  prerequisites: [
    "Basic computer knowledge (file management, browsing)",
    "Interest in design, art, or visual creativity",
    "Basic typing and keyboard skills",
    "Comfort using a smartphone or camera (helpful but not mandatory)",
    "Willingness to learn creative tools from scratch",
    "Open mindset with passion for visual storytelling",
  ],

  // ── 9. KEY FEATURES ───────────────────────────────────────────────
  keyFeatures: [
    "Graphic Design Fundamentals & Visual Thinking",
    "Photo Editing with Adobe Photoshop",
    "Vector Design with Adobe Illustrator",
    "Professional Video Editing — Adobe Premiere Pro",
    "Motion Graphics & VFX with After Effects",
    "Color Grading & Cinematic Look Development",
    "2D Animation & Explainer Video Creation",
    "Audio Editing, Mixing & Sound Sync",
    "Social Media Content & Reel Creation",
    "UI/UX Design Basics with Figma",
    "Freelancing & Client Handling for Creatives",
    "Portfolio Building & Career Guidance",
  ],

  // ── 10. SKILLS COVERED ────────────────────────────────────────────
  skillsCovered: [
    "Adobe Premiere Pro (Professional Editing)",
    "After Effects (Motion Graphics & VFX)",
    "Video Cutting & Timeline Management",
    "Color Correction & Cinematic Grading",
    "Audio Editing, Mixing & Sync",
    "Transitions, Effects & Visual Enhancements",
    "Motion Graphics & Animation Basics",
    "Green Screen Editing (Chroma Key)",
    "YouTube & Content Creator Editing",
    "Short-form Video Editing (Reels/Shorts)",
    "Storytelling, Pacing & Video Flow",
    "Live Projects & Portfolio Development",
  ],

  // ── 11. TOOLS COVERED ─────────────────────────────────────────────
  toolsCovered: [
    { name: "Adobe Premiere Pro", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776149576/AdobePremierePro_julkf3.png", alt: "Adobe Premiere Pro logo" } },
    { name: "Adobe After Effects", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776149576/AdobeAfterEffects_wf6evz.png", alt: "Adobe After Effects logo" } },
    { name: "Adobe Photoshop", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072017/AdobePhotoshop_ofm8ac.png", alt: "Adobe Photoshop logo" } },
    { name: "Adobe Illustrator", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/AdobeIllustrator_qbp1wf.png", alt: "Adobe Illustrator logo" } },
    { name: "Canva", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/Canva-removebg-preview_lorpzt.png", alt: "Canva logo" } },
    { name: "DaVinci Resolve", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776149837/DaVinciResolve_tm65ub.png", alt: "DaVinci Resolve logo" } },
    { name: "Figma", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776146894/figma_mvfnuq.png", alt: "Figma logo" } },
    { name: "CapCut", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776149901/capcut_k20v27.webp", alt: "CapCut logo" } },
    { name: "Adobe Photoshop", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072017/AdobePhotoshop_ofm8ac.png", alt: "Adobe Photoshop logo" } },
    { name: "Audacity", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776155083/Audacity_al7ql2.png", alt: "Audacity logo" } },
    { name: "Canva", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/Canva-removebg-preview_lorpzt.png", alt: "Canva logo" } },
    { name: "Blender", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776155138/Blender_q2k9zi.png", alt: "Blender logo" } },
    { name: "Adobe Animate", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776155208/AdobeAnimate_qzzrml.png", alt: "Adobe Animate logo" } },
    { name: "ChatGPT", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/ChatGPT_d3ybhl.webp", alt: "ChatGPT logo" } },
    { name: "Blender", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776155138/Blender_q2k9zi.png", alt: "Blender logo" } },
    { name: "CapCut", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776149901/capcut_k20v27.webp", alt: "CapCut logo" } },
  ],

  // ── 12. KEY TAKEAWAYS ─────────────────────────────────────────────
  keyTakeaways: [
    "100% Placement Support",
    "Industry-Recognized Certification",
    "Hands-on Live Creative Projects",
    "Expert Designers & Editors as Trainers",
    "Professional Portfolio Creation",
    "Resume & Interview Preparation",
    "Freelancing & Client Management Training",
    "Lifetime Career Support",
    "Strong Alumni Network in Creative Industry",
    "Adobe Certification Preparation",
  ],

  // ── 14. CAREER OPPORTUNITIES ──────────────────────────────────────
  careerOpportunities: [
    { title: "Multimedia Designer", description: "Create visual content using graphics, video, and animation for brands and digital platforms." },
    { title: "Graphic Designer", description: "Design logos, banners, and marketing creatives for businesses and online media." },
    { title: "Video Editor", description: "Edit raw footage into engaging videos for social media, ads, and content platforms." },
    { title: "Motion Graphics Artist", description: "Design animations, transitions, and visual effects for videos and advertisements." },
    { title: "UI/UX Designer", description: "Create user-friendly interfaces for websites and apps with modern design concepts." },
    { title: "Social Media Content Designer", description: "Develop creative posts, reels, and digital content for social media platforms." },
    { title: "Animation Designer", description: "Work on animated videos, explainer content, and visual storytelling projects." },
    { title: "Freelance Multimedia Artist", description: "Work independently on design, video, and creative projects for different clients." },
  ],

  // ── 15. CAREER JOURNEY ────────────────────────────────────────────
  careerJourney: [
    { step: 1, role: "Multimedia Intern", experience: "0-6 months", salaryRange: "₹1L - ₹2L" },
    { step: 2, role: "Junior Multimedia Designer", experience: "6 months - 1 yr", salaryRange: "₹2L - ₹4L" },
    { step: 3, role: "Multimedia Designer", experience: "1-3 years", salaryRange: "₹4L - ₹7L" },
    { step: 4, role: "Senior Multimedia Designer", experience: "3-5 years", salaryRange: "₹7L - ₹12L" },
    { step: 5, role: "Creative / Design Lead", experience: "5+ years", salaryRange: "₹12L - ₹20L+" },
  ],

  // ── 18. FAQs ──────────────────────────────────────────────────────
  faqs: [
    {
      question: "Which is the best multimedia course in Delhi for beginners?",
      answer: "The best multimedia course in Delhi for beginners is one that covers design, video, and animation with practical training, live projects, and expert mentorship.",
    },
    {
      question: "What skills are covered in a multimedia design course?",
      answer: "A multimedia design course includes skills like graphic design, video editing, animation basics, and creative thinking using industry tools and real-world projects.",
    },
    {
      question: "Can I get a job after completing a multimedia course?",
      answer: "Yes, after completing a multimedia course, you can apply for roles like designer, video editor, or content creator in agencies, startups, or media companies.",
    },
    {
      question: "Is multimedia design a good career option in 2026?",
      answer: "Multimedia design is a growing career in 2026 as demand for digital content, social media creatives, and video marketing continues to increase across industries.",
    },
    {
      question: "What is the duration of a multimedia course?",
      answer: "A multimedia course usually takes 4 to 8 months depending on the course level, modules included, and whether it covers advanced design and video tools.",
    },
    {
      question: "What are multimedia course fees in Delhi?",
      answer: "Multimedia course fees in Delhi generally range from ₹25,000 to ₹90,000 based on the institute, course depth, and software or tools included in training.",
    },
    {
      question: "Can I join a multimedia course after 12th?",
      answer: "Yes, you can join a multimedia course after 12th without any prior experience, making it a great option for students interested in creative careers.",
    },
    {
      question: "Is multimedia course online available?",
      answer: "Yes, many institutes offer multimedia course online along with offline classes, allowing students to learn design and editing skills from anywhere.",
    },
    {
      question: "How can I find a multimedia course near me?",
      answer: "If you are searching for a multimedia course near me, you can easily find institutes in Delhi offering classroom training with flexible schedules.",
    },
    {
      question: "Can I earn money after completing a multimedia design course?",
      answer: "Yes, after completing a multimedia design course, you can start freelancing, work with companies, or create digital content and earn through multiple sources.",
    },
  ],

  // ── 19. SEO ───────────────────────────────────────────────────────
  seo: {
    metaTitle: "#1 Multimedia & Animation Course in Delhi at EduraIndia",
    metaDescription: "Join EduraIndia, a best institute for multimedia & animation course in Delhi. Learn animation, creative tools, and practical skills with expert training.",
    keywords: [
      "multi media course",
      "animation course in delhi",
      "multimedia course in delhi",
      "animation computer course",
      "multimedia course in delhi",
    ],
    // ⚠️ canonicalUrl is WRONG in Doc 2 — it has digital-marketing URL, needs to be fixed:
    canonicalUrl: "https://eduraindia.com/courses/multimedia-animation-course-delhi",

    ogTitle: "Best Multimedia & Animation Course in Delhi — EduraIndia",    // ⚠️ Doc 2 had DM title by mistake — corrected
    ogDescription: "Job-oriented multimedia training with live projects, creative tools & placement support. EduraIndia Delhi.", // ⚠️ Doc 2 had DM description by mistake — corrected
    ogImage: {
      url: "https://yourdomain.com/images/og/multimedia-og.jpg",            // ⚠️ Doc 2 had DM image by mistake — corrected
      alt: "EduraIndia Multimedia Course Delhi",
    },

    twitterTitle: "#1 Multimedia & Animation Course in Delhi | EduraIndia", // ⚠️ Doc 2 had DM title by mistake — corrected
    twitterDescription: "Learn design, video editing & animation tools. Placement support. Join EduraIndia Delhi.",  // ⚠️ corrected
    twitterImage: {
      url: "https://yourdomain.com/images/og/multimedia-twitter.jpg",       // ⚠️ corrected
      alt: "EduraIndia Multimedia Course",
    },
  },

  // ── 20. STATUS ────────────────────────────────────────────────────
  isActive: true,
  isFeatured: true,
  sortOrder: 2,
  badge: "Top Rated",

  // ── 21. RELATED COURSES ───────────────────────────────────────────
  relatedCourses: [], // ⚠️ MISSING in Doc 2 — kept empty like Doc 1
};


const businessAnalystCourse = {

  // ── 1. BASIC INFO ────────────────────────────────────────────────
  title: "Build a High-Growth Career with a Business Analyst Course in Delhi",
  heroTitle: "Build a High-Growth Career with a Business Analyst Course in Delhi",
  // ⚠️ Doc 3 mein double quote typo tha title mein — fixed: title: "title: "Build..." → fixed
  slug: "business-analyst-course-delhi",           // ⚠️ MISSING — placeholder
  category: "Business Analytics",                  // ⚠️ MISSING — inferred
  level: "Professional",                           // ⚠️ MISSING — placeholder
  language: "Hindi/English",                       // ⚠️ MISSING — placeholder
  mode: "Blended",                                 // ⚠️ MISSING — inferred from FAQs

  // ── 2. MEDIA ─────────────────────────────────────────────────────
  thumbnail: {
    url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776075886/business_analyst_czrkdz.png", // ⚠️ MISSING
    alt: "Business Analyst Course in Delhi - EduraIndia",                        // ⚠️ MISSING
  },
  bannerImage: {
    url: "https://yourdomain.com/images/courses/business-analyst-banner.jpg",    // ⚠️ MISSING
    alt: "Best Business Analyst Institute in Delhi - EduraIndia",                // ⚠️ MISSING
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_VIDEO_ID",                   // ⚠️ MISSING

  // ── 3. COURSE STATS ───────────────────────────────────────────────
  duration: "4-6 Months",              // ✅ Inferred from FAQ answer
  totalLectures: null,                 // ⚠️ MISSING
  averageSalary: "₹3L - ₹18L+",       // ✅ Inferred from careerJourney
  placementRate: null,                 // ⚠️ MISSING
  studentsEnrolled: null,              // ⚠️ MISSING
  rating: {
    average: null,                     // ⚠️ MISSING
    count: null,                       // ⚠️ MISSING
  },

  // ── 4. PRICING ───────────────────────────────────────────────────
  price: {
    amount: null,                      // ⚠️ MISSING — FAQ mentions range ₹30,000 - ₹1,00,000
    currency: "INR",
    display: null,                     // ⚠️ MISSING
    originalPrice: null,               // ⚠️ MISSING
    emi: null,                         // ⚠️ MISSING
  },

  // ── 5. CURRICULUM PDF ─────────────────────────────────────────────
  curriculumPdfUrl: "https://yourdomain.com/pdfs/business-analyst-curriculum.pdf", // ⚠️ MISSING

  // ── 6. DESCRIPTIONS ───────────────────────────────────────────────
  description:
    "EduraIndia offers a career-focused business analyst course in Delhi designed to help you understand data, business processes, and decision-making strategies. Learn through practical projects, expert sessions, and real case studies while exploring business analyst course fees that fit your budget and include placement support.",

  description2:
    "Join EduraIndia's business analyst course and build practical skills in data analysis, reporting, and business strategy. Ideal for students searching for a business analyst course near me, we provide flexible learning, expert mentorship, and industry-relevant training with strong business analyst course placement opportunities.",

  descriptionHighlight:
    "Start your journey with a business analyst course. Learn data-driven decision-making, business strategies, and practical skills for real-world success.",
  // ⚠️ Doc 3 mein key "descriptionHig" tha (typo) — corrected to "descriptionHighlight"

  // ── 7. OVERVIEW SECTION ───────────────────────────────────────────
  overview: {
    title: "Business Analyst Course",
    description: `In today's data-driven world, businesses rely on insights and strategic decisions to grow, making business analytics one of the most in-demand career paths. At EduraIndia, our business analyst course in Delhi is designed for individuals who want to understand how businesses operate, analyze data, and make informed decisions that drive success.

This course provides in-depth knowledge of business processes, data interpretation, and problem-solving techniques used by modern organizations. Students learn how to work with data, identify trends, and present meaningful insights using tools and techniques widely used in the industry. It is a perfect choice for learners searching for a business analyst course near me who want practical exposure along with theoretical understanding.

What sets this business analyst course apart is its focus on real-world application and industry relevance. Instead of just learning concepts, students work on case studies and practical scenarios to understand how businesses make decisions. With expert guidance, flexible learning options, affordable business analyst course fees, and strong business analyst course placement support, this course helps you build the confidence and skills needed to succeed in a competitive job market.`,
    image: {
      url: "https://yourdomain.com/images/courses/business-analyst-overview.jpg", // ⚠️ Doc 3 mein DM course ki image thi — corrected
      alt: "Business Analyst training session at EduraIndia Delhi",               // ⚠️ corrected
    },
  },

  // ── 8. PREREQUISITES ──────────────────────────────────────────────
  prerequisites: [
    // ⚠️ COMPLETELY MISSING in Doc 3 — suggested placeholders based on course nature:
    "Basic computer knowledge",
    "Basic understanding of MS Excel or spreadsheets",
    "Basic reading/writing skills",
    "Logical and analytical thinking mindset",
    "No prior coding experience required",
  ],

  // ── 9. KEY FEATURES ───────────────────────────────────────────────
  keyFeatures: [
    // ⚠️ COMPLETELY MISSING in Doc 3 — suggested placeholders based on skillsCovered & overview:
    "Business Fundamentals & Strategy",
    "Advanced Excel for Data Analysis",
    "SQL for Data Management",
    "Power BI for Data Visualization",
    "Business Requirement Gathering & Documentation",
    "Data Interpretation & Insight Generation",
    "Dashboard Creation & Reporting",
    "Business Process Modeling",
    "Case Studies & Real-Time Business Scenarios",
    "Live Projects & Portfolio Development",
    "Interview Preparation & Resume Building",
    "Placement Assistance",
  ],

  // ── 10. SKILLS COVERED ────────────────────────────────────────────
  skillsCovered: [
    "Advanced Excel for Data Analysis",
    "SQL for Data Management & Queries",
    "Power BI for Data Visualization",
    "Data Cleaning & Data Preparation Techniques",
    "Business Requirement Gathering & Documentation",
    "Data Interpretation & Insight Generation",
    "Dashboard Creation & Reporting",
    "Business Process Modeling",
    "Problem-Solving & Analytical Thinking",
    "Communication & Stakeholder Management",
    "Case Studies & Real-Time Business Scenarios",
    "Live Projects & Portfolio Development",
  ],

  // ── 11. TOOLS COVERED ─────────────────────────────────────────────
  toolsCovered: [
    // ⚠️ COMPLETELY MISSING in Doc 3 — suggested placeholders based on skillsCovered:
    { name: "MS Excel", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072035/MSexcel_kszfd0.png", alt: "MS Excel logo" } },
    { name: "Microsoft Copilot", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776154524/copilot_pod6uz.png", alt: "Microsoft Copilot logo" } },
    { name: "Microsoft Power BI", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072033/MicrosoftPowerBI_zreklg.png", alt: "Microsoft Power BI logo" } },
    { name: "Azure", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072017/Azure_d77ppa.png", alt: "Azure logo" } },
    { name: "Python", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072042/Python_brd01i.webp", alt: "Python logo" } },
    { name: "SQL", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072046/SQL_lf0esh.png", alt: "SQL logo" } },
    { name: "ChatGPT", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/ChatGPT_d3ybhl.webp", alt: "ChatGPT logo" } },
    { name: "JIRA", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072028/JIRA_bpcpme.png", alt: "JIRA logo" } },
    { name: "MS PowerPoint", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072038/MSpowerpoint_uihney.png", alt: "MS PowerPoint logo" } },
    { name: "Canva", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/Canva-removebg-preview_lorpzt.png", alt: "Canva logo" } },
    { name: "SAP", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072045/SAP_bbdecc.webp", alt: "SAP logo" } },
    { name: "Salesforce", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072043/SalesForce_ok8gq1.png", alt: "Salesforce logo" } },
    { name: "Microsoft Copilot", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776154524/copilot_pod6uz.png", alt: "Microsoft Copilot logo" } },
    { name: "AWS", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/AWS_g6uhyv.png", alt: "AWS logo" } },
    { name: "Azure", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072017/Azure_d77ppa.png", alt: "Azure logo" } },
    { name: "JIRA", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072028/JIRA_bpcpme.png", alt: "JIRA logo" } },
  ],

  // ── 12. KEY TAKEAWAYS ─────────────────────────────────────────────
  keyTakeaways: [
    // ⚠️ COMPLETELY MISSING in Doc 3 — suggested placeholders based on overview & faqs:
    "100% Placement Support",
    "Industry-Recognized Certification",
    "Hands-on Live Projects & Case Studies",
    "Expert Industry Trainers",
    "Power BI, Excel & SQL Mastery",
    "Resume & Portfolio Building",
    "Soft Skills & Interview Preparation",
    "Lifetime Career Support",
    "Strong Alumni Network",
    "Real-World Business Scenarios",
  ],

  // ── 14. CAREER OPPORTUNITIES ──────────────────────────────────────
  careerOpportunities: [
    { title: "Business Analyst", description: "Analyze business processes, gather requirements, and help organizations make data-driven decisions." },
    { title: "Data Analyst", description: "Work with data to identify trends, create reports, and support business strategies." },
    { title: "Business Intelligence Analyst", description: "Use tools like Power BI to visualize data and provide actionable insights to businesses." },
    { title: "Product Analyst", description: "Evaluate product performance and user behavior to improve business outcomes." },
    { title: "Operations Analyst", description: "Optimize business operations by analyzing workflows and improving efficiency." },
    { title: "Financial Analyst", description: "Assess financial data, create forecasts, and guide investment or budgeting decisions." },
    { title: "Market Research Analyst", description: "Study market trends, customer behavior, and competitor strategies for business growth." },
    { title: "Freelance Business Analyst", description: "Provide consulting services independently to businesses for process improvement and data analysis." },
  ],

  // ── 15. CAREER JOURNEY ────────────────────────────────────────────
  careerJourney: [
    { step: 1, role: "Business Analyst Intern", experience: "0-6 months", salaryRange: "₹1L - ₹3L" },
    { step: 2, role: "Junior Business Analyst", experience: "6 months - 1 yr", salaryRange: "₹3L - ₹5L" },
    { step: 3, role: "Business Analyst", experience: "1-3 years", salaryRange: "₹5L - ₹10L" },
    { step: 4, role: "Senior Business Analyst", experience: "3-5 years", salaryRange: "₹10L - ₹18L" },
    { step: 5, role: "Lead Business Analyst / Consultant", experience: "5+ years", salaryRange: "₹18L - ₹30L+" },
  ],

  // ── 18. FAQs ──────────────────────────────────────────────────────
  faqs: [
    {
      question: "Which is the best business analyst course in Delhi for beginners?",
      answer: "The best business analyst course in Delhi for beginners is offered by a reputed institute that provides practical training, live projects, and expert guidance while covering tools like Excel, SQL, and Power BI to build real job-ready skills.",
      // ⚠️ Doc 3 mein extra stray quote `"` tha answer ke end mein — removed
    },
    {
      question: "What skills are covered in a business analyst course?",
      answer: "A business analyst course covers skills like data analysis, requirement gathering, business process modeling, reporting, and decision-making using industry tools.",
    },
    {
      question: "Can I get a job after completing a business analyst course?",
      answer: "Yes, after completing a business analyst course, you can apply for roles like business analyst, data analyst, or operations analyst in various industries.",
    },
    {
      question: "Is business analyst a good career option in 2026?",
      answer: "Yes, business analyst is a highly in-demand career in 2026 as companies rely on data-driven insights and strategic planning for growth.",
    },
    {
      question: "What is the duration of a business analyst course?",
      answer: "A business analyst course usually takes 4 to 6 months depending on the course level, practical projects, and tools included in the training.",
    },
    {
      question: "What are business analyst course fees in Delhi?",
      answer: "Business analyst course fees in Delhi typically range from ₹30,000 to ₹1,00,000 depending on the institute, course depth, and placement support.",
    },
    {
      question: "Can I join a business analyst course after 12th?",
      answer: "Yes, you can join a business analyst course after 12th, but basic understanding of business or data concepts can be helpful for better learning.",
    },
    {
      question: "Is an online business analyst course available?",
      answer: "Yes, many institutes offer online business analyst course options along with offline classes, providing flexibility for students and working professionals.",
    },
    {
      question: "How can I find a business analyst course near me?",
      answer: "If you are searching for a business analyst course near me, you can explore institutes in Delhi that offer classroom training, flexible schedules, and expert mentorship.",
    },
    {
      question: "Does a business analyst course offer placement support?",
      answer: "Yes, many institutes provide business analyst course placement support including interview preparation, resume building, and job assistance.",
    },
  ],

  // ── 19. SEO ───────────────────────────────────────────────────────
  seo: {
    metaTitle: "Best Business Analyst Course in Delhi at EduraIndia",
    metaDescription: "Join EduraIndia, trusted institute for business analyst course in Delhi. Learn data analysis, business insights, and practical tools with expert guidance.",
    // ⚠️ Doc 3 mein metaDescription ke start mein opening quote missing tha — fixed
    keywords: [
      "business analyst course in delhi",
      "business analytics courses in delhi",
      "business analytics courses delhi",
      "business analyst course fees",
      "business analyst course for beginners",
    ],
    // ⚠️ Doc 3 mein `]]` double closing bracket typo tha — fixed

    // ⚠️ canonicalUrl DM course ka tha — corrected:
    canonicalUrl: "https://eduraindia.com/courses/business-analyst-course-delhi",

    // ⚠️ og aur twitter fields sab DM course ke copy-paste the — sabko correct kiya:
    ogTitle: "Best Business Analyst Course in Delhi — EduraIndia",
    ogDescription: "Job-oriented business analyst training with live projects, Power BI, SQL & placement support. EduraIndia Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/business-analyst-og.jpg",
      alt: "EduraIndia Business Analyst Course Delhi",
    },

    twitterTitle: "Best Business Analyst Course in Delhi | EduraIndia",
    twitterDescription: "Learn Excel, SQL, Power BI & data analysis. 100% placement support. Join EduraIndia Delhi.",
    twitterImage: {
      url: "https://yourdomain.com/images/og/business-analyst-twitter.jpg",
      alt: "EduraIndia Business Analyst Course",
    },
  },

  // ── 20. STATUS ────────────────────────────────────────────────────
  isActive: true,
  isFeatured: null,  // ⚠️ MISSING
  sortOrder: null,   // ⚠️ MISSING
  badge: null,       // ⚠️ MISSING

  // ── 21. RELATED COURSES ───────────────────────────────────────────
  relatedCourses: [], // ⚠️ MISSING
};


const advancedExcelCourse = {

  // ── 1. BASIC INFO ────────────────────────────────────────────────
  title: "Master Data Skills with an Advanced Excel Course in Delhi with AI Integration",
  heroTitle: "Master Data Skills with an Advanced Excel Course in Delhi with AI Integration",
  slug: "advanced-excel-ai-course-delhi",          // ⚠️ MISSING — placeholder
  category: "Data & Analytics",                    // ⚠️ MISSING — inferred
  level: "Professional",                           // ⚠️ MISSING — placeholder
  language: "Hindi/English",                       // ⚠️ MISSING — placeholder
  mode: "Blended",                                 // ⚠️ MISSING — inferred from FAQs

  // ── 2. MEDIA ─────────────────────────────────────────────────────
  thumbnail: {
    url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776075884/advance_excel_ddsxme.png", // ⚠️ MISSING
    alt: "Advanced Excel with AI Course in Delhi - EduraIndia",                // ⚠️ MISSING
  },
  bannerImage: {
    url: "https://yourdomain.com/images/courses/advanced-excel-banner.jpg",    // ⚠️ MISSING
    alt: "Best Advanced Excel Institute in Delhi - EduraIndia",                // ⚠️ MISSING
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_VIDEO_ID",                 // ⚠️ MISSING

  // ── 3. COURSE STATS ───────────────────────────────────────────────
  duration: "2-4 Months",              // ✅ Inferred from FAQ answer
  totalLectures: null,                 // ⚠️ MISSING
  averageSalary: "₹1L - ₹18L+",       // ✅ Inferred from careerJourney
  placementRate: null,                 // ⚠️ MISSING
  studentsEnrolled: null,              // ⚠️ MISSING
  rating: {
    average: null,                     // ⚠️ MISSING
    count: null,                       // ⚠️ MISSING
  },

  // ── 4. PRICING ───────────────────────────────────────────────────
  price: {
    amount: null,                      // ⚠️ MISSING — FAQ mentions range ₹15,000 - ₹60,000
    currency: "INR",
    display: null,                     // ⚠️ MISSING
    originalPrice: null,               // ⚠️ MISSING
    emi: null,                         // ⚠️ MISSING
  },

  // ── 5. CURRICULUM PDF ─────────────────────────────────────────────
  curriculumPdfUrl: "https://yourdomain.com/pdfs/advanced-excel-curriculum.pdf", // ⚠️ MISSING

  // ── 6. DESCRIPTIONS ───────────────────────────────────────────────
  description:
    "EduraIndia offers a practical advanced excel course in Delhi designed to help you master data handling, reporting, and automation using advanced excel formulas and AI tools. Learn through hands-on projects, expert guidance, and real business scenarios while exploring flexible excel course in Delhi fees with placement support included.",

  description2:
    "Join EduraIndia's advance excel course with AI and build strong skills in data analysis, dashboards, and reporting. Ideal for learners searching for an excel course near me, this program covers excel advanced courses with real-time training, mentorship, and career-focused learning for job readiness.",

  descriptionHighlight:
    "Build strong data skills with an advanced excel with AI course. Learn formulas, automation, and practical techniques for real business applications.",
  // ⚠️ Doc 4 mein key "descriptionHig" tha (typo) — corrected to "descriptionHighlight"

  // ── 7. OVERVIEW SECTION ───────────────────────────────────────────
  overview: {
    title: "Advanced Excel with AI Course",
    description: `In today's fast-moving digital environment, the ability to work with data efficiently has become a key skill across industries. At EduraIndia, our advanced excel course in Delhi is designed for individuals who want to go beyond basic spreadsheets and build strong data handling and automation skills using advanced excel and AI-powered techniques.

This advance excel course focuses on real-world applications such as data analysis, reporting, dashboard creation, and the use of advanced excel formulas to solve business problems. Students learn how to manage large datasets, automate repetitive tasks, and generate insights that support decision-making. It is an ideal choice for learners searching for an excel course in Delhi or practical excel advanced courses that provide hands-on experience with industry-relevant tools.

What makes this advanced excel with AI course stand out is its practical approach and focus on productivity. Instead of only learning functions, students understand how to apply excel in real business scenarios with speed and accuracy. With expert trainers, flexible learning options for those looking for an excel course near me, affordable advance excel course fees, and placement support, this program prepares you for real job roles where data skills truly matter.`,
    image: {
      url: "https://yourdomain.com/images/courses/advanced-excel-overview.jpg", // ⚠️ Doc 4 mein DM course image thi — corrected
      alt: "Advanced Excel training session at EduraIndia Delhi",               // ⚠️ corrected
    },
  },

  // ── 8. PREREQUISITES ──────────────────────────────────────────────
  prerequisites: [
    // ⚠️ COMPLETELY MISSING in Doc 4 — suggested based on course nature:
    "Basic computer knowledge",
    "Basic familiarity with Microsoft Excel or spreadsheets",
    "Basic reading/writing skills",
    "No prior programming or coding experience required",
    "Analytical mindset and willingness to work with data",
  ],

  // ── 9. KEY FEATURES ───────────────────────────────────────────────
  keyFeatures: [
    // ⚠️ COMPLETELY MISSING in Doc 4 — suggested based on skillsCovered & overview:
    "Advanced Excel Formulas & Functions",
    "Data Cleaning & Preparation Techniques",
    "Dashboard Creation & Interactive Reporting",
    "Data Visualization using Charts & Tools",
    "Excel Automation with AI Tools",
    "MIS Reporting & Business Data Handling",
    "Pivot Tables, Power Query & Power Pivot",
    "Ageing Formula & MIS Report Format in Excel",
    "Real-Time Business Case Studies",
    "Live Projects & Portfolio Development",
    "Interview Preparation & Resume Building",
    "Placement Assistance",
  ],

  // ── 10. SKILLS COVERED ────────────────────────────────────────────
  skillsCovered: [
    "Advanced Excel for Data Analysis & Automation",
    "Advanced Excel Formulas & Functions",
    "Data Cleaning & Data Preparation Techniques",
    "Dashboard Creation & Interactive Reporting",
    "Data Visualization using Charts & Tools",
    "Excel Automation with AI Tools",
    "MIS Reporting & Business Data Handling",
    "Data Interpretation & Insight Generation",
    "Pivot Tables, Power Query & Power Pivot",
    "Problem-Solving & Analytical Thinking",
    "Real-Time Business Case Studies",
    "Live Projects & Portfolio Development",
  ],

  // ── 11. TOOLS COVERED ─────────────────────────────────────────────
  toolsCovered: [
    // ⚠️ COMPLETELY MISSING in Doc 4 — suggested based on skillsCovered & overview:
    { name: "VBA", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072048/VBA_lspj8w.png", alt: "VBA logo" } },
    { name: "Microsoft Excel", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072035/MSexcel_kszfd0.png", alt: "Microsoft Excel logo" } },
    { name: "Power Query", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072039/MSpowerquery_vftqqb.webp", alt: "Power Query logo" } },
    { name: "Power Pivot", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776155673/PivotTable_vdt7sy.png", alt: "Power Pivot logo" } },
    { name: "ChatGPT / AI", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/ChatGPT_d3ybhl.webp", alt: "ChatGPT logo" } },
    { name: "Google Sheets", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072025/GoogleSheet_nvbk0i.png", alt: "Google Sheets logo" } },
    { name: "Microsoft 365", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776155828/Microsoft365_s3otus.png", alt: "Microsoft 365 logo" } },
    { name: "Power BI (Basic)", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072033/MicrosoftPowerBI_zreklg.png", alt: "Power BI logo" } },
    { name: "MS PowerPoint", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072038/MSpowerpoint_uihney.png", alt: "MS PowerPoint logo" } },
    { name: "VBA", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072048/VBA_lspj8w.png", alt: "VBA logo" } },
    { name: "Microsoft Excel", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072035/MSexcel_kszfd0.png", alt: "Microsoft Excel logo" } },
    { name: "Power Query", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072039/MSpowerquery_vftqqb.webp", alt: "Power Query logo" } },
    { name: "Power Pivot", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776155673/PivotTable_vdt7sy.png", alt: "Power Pivot logo" } },
    { name: "ChatGPT / AI", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/ChatGPT_d3ybhl.webp", alt: "ChatGPT logo" } },
    { name: "Google Sheets", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072025/GoogleSheet_nvbk0i.png", alt: "Google Sheets logo" } },
    { name: "Microsoft 365", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776155828/Microsoft365_s3otus.png", alt: "Microsoft 365 logo" } },
    { name: "Power BI (Basic)", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072033/MicrosoftPowerBI_zreklg.png", alt: "Power BI logo" } },
    { name: "MS PowerPoint", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072038/MSpowerpoint_uihney.png", alt: "MS PowerPoint logo" } },
  ],

  // ── 12. KEY TAKEAWAYS ─────────────────────────────────────────────
  keyTakeaways: [
    // ⚠️ COMPLETELY MISSING in Doc 4 — suggested based on overview & faqs:
    "100% Placement Support",
    "Industry-Recognized Certification",
    "Hands-on Live Projects & Case Studies",
    "Expert Industry Trainers",
    "Advanced Excel & AI Automation Mastery",
    "MIS Reporting & Dashboard Skills",
    "Resume & Portfolio Building",
    "Soft Skills & Interview Preparation",
    "Lifetime Career Support",
    "Real-World Business Scenarios",
  ],

  // ── 14. CAREER OPPORTUNITIES ──────────────────────────────────────
  careerOpportunities: [
    { title: "Advanced Excel Data Analyst", description: "Analyze large datasets, create reports, and generate insights using advanced excel formulas and tools." },
    { title: "MIS Executive", description: "Manage business reports, dashboards, and data records to support daily operations and decision-making." },
    { title: "Business Data Analyst", description: "Work with business data to track performance, identify trends, and improve strategies using excel." },
    { title: "Reporting Analyst", description: "Create automated reports and dashboards to present data clearly for business teams and management." },
    { title: "Operations Analyst", description: "Improve workflows and efficiency by analyzing operational data using advanced excel techniques." },
    { title: "Financial Data Analyst", description: "Handle financial data, build forecasts, and perform calculations using excel for business planning." },
    { title: "Dashboard & MIS Specialist", description: "Design interactive dashboards and manage MIS reporting systems for organizations." },
    { title: "Freelance Excel Specialist", description: "Provide excel-based solutions, automation, and reporting services to clients across industries." },
  ],

  // ── 15. CAREER JOURNEY ────────────────────────────────────────────
  careerJourney: [
    { step: 1, role: "Excel / MIS Intern", experience: "0-6 months", salaryRange: "₹1L - ₹3L" },
    { step: 2, role: "Junior MIS Executive", experience: "6 months - 1 yr", salaryRange: "₹3L - ₹5L" },
    { step: 3, role: "Advanced Excel Analyst", experience: "1-3 years", salaryRange: "₹5L - ₹10L" },
    { step: 4, role: "Senior Data / MIS Analyst", experience: "3-5 years", salaryRange: "₹10L - ₹18L" },
    { step: 5, role: "Data Analyst / BI Consultant", experience: "5+ years", salaryRange: "₹18L - ₹30L+" },
  ],

  // ── 18. FAQs ──────────────────────────────────────────────────────
  // ⚠️ Doc 4 mein key "ffaqs" tha (double f typo) — corrected to "faqs"
  faqs: [
    {
      question: "Which is the best advanced excel course in Delhi for beginners?",
      answer: "The best advanced excel course in Delhi for beginners is one that includes practical training, real projects, and covers advanced excel formulas along with AI-based tools for automation and reporting.",
    },
    {
      question: "What skills will I learn in an advanced excel course?",
      answer: "In an advanced excel course, you will learn data analysis, dashboards, advanced excel formulas, automation techniques, and reporting skills using real business datasets.",
    },
    {
      question: "Can I get a job after completing an advance excel course?",
      answer: "Yes, after completing an advance excel course, you can apply for roles like MIS executive, data analyst, or reporting analyst in different industries.",
    },
    {
      question: "Is advanced excel a good career skill in 2026?",
      answer: "Yes, advanced excel is a highly valuable skill in 2026 as companies depend on data, reporting, and automation for faster and smarter decision-making.",
    },
    {
      question: "What is the duration of an excel course in Delhi?",
      answer: "An excel course in Delhi usually takes 2 to 4 months depending on the course level, modules covered, and whether it includes advanced excel and AI training.",
    },
    {
      question: "What are advanced excel course fees in Delhi?",
      answer: "Advanced excel course fees in Delhi generally range from ₹15,000 to ₹60,000 based on the institute, course depth, and tools included in training.",
    },
    {
      question: "Can I join an excel course after 12th?",
      answer: "Yes, you can join an excel course after 12th without prior experience, making it a great option for students interested in data and office-based roles.",
    },
    {
      question: "Is advanced excel course online available?",
      answer: "Yes, many institutes offer advanced excel course online options along with offline classes, allowing flexible learning for students and professionals.",
    },
    {
      question: "How can I find an excel course near me?",
      answer: "If you are searching for an excel course near me, you can find institutes in Delhi offering classroom training with flexible timings and practical exposure.",
    },
    {
      question: "Does an advanced excel course provide placement support?",
      answer: "Yes, many institutes offer advanced excel course placement support including resume building, interview preparation, and job assistance for students.",
    },
  ],

  // ── 19. SEO ───────────────────────────────────────────────────────
  seo: {
    metaTitle: "#1 Advance Excel with AI Course in Delhi at EduraIndia",
    metaDescription: "Join EduraIndia, a best institute for advance excel course in Delhi. Learn advance excel, MIS report format in excel, and ageing formula in excel.",
    // ⚠️ Doc 4 mein metaDescription ke end mein extra `.` tha — removed
    keywords: [
      "advance excel course",
      "advance excel",
      "ageing formula in excel",
      "aging formula in excel",
      "mis report format in excel",
      "advance excel course in delhi",
    ],

    // ⚠️ canonicalUrl DM course ka tha — corrected:
    canonicalUrl: "https://eduraindia.com/courses/advanced-excel-ai-course-delhi",

    // ⚠️ og aur twitter fields sab DM course ke copy-paste the — sabko correct kiya:
    ogTitle: "Best Advanced Excel with AI Course in Delhi — EduraIndia",
    ogDescription: "Job-oriented Advanced Excel training with live projects, AI automation, MIS reporting & placement support. EduraIndia Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/advanced-excel-og.jpg",
      alt: "EduraIndia Advanced Excel Course Delhi",
    },

    twitterTitle: "#1 Advanced Excel with AI Course in Delhi | EduraIndia",
    twitterDescription: "Learn Advanced Excel, Power Query, MIS Reporting & AI Automation. Placement support. Join EduraIndia Delhi.",
    twitterImage: {
      url: "https://yourdomain.com/images/og/advanced-excel-twitter.jpg",
      alt: "EduraIndia Advanced Excel Course",
    },
  },

  // ── 20. STATUS ────────────────────────────────────────────────────
  isActive: true,
  isFeatured: null,  // ⚠️ MISSING
  sortOrder: null,   // ⚠️ MISSING
  badge: null,       // ⚠️ MISSING

  // ── 21. RELATED COURSES ───────────────────────────────────────────
  relatedCourses: [], // ⚠️ MISSING
};


const basicComputerCourse = {

  // ── 1. BASIC INFO ────────────────────────────────────────────────
  title: "Build Essential Digital Skills with a Basic Computer Course in Delhi",
  heroTitle: "Build Essential Digital Skills with a Basic Computer Course in Delhi",
  slug: "basic-computer-course-delhi",             // ⚠️ MISSING — placeholder
  category: "Computer Fundamentals",               // ⚠️ MISSING — inferred
  level: "Beginner",                               // ⚠️ MISSING — inferred from overview
  language: "Hindi/English",                       // ⚠️ MISSING — placeholder
  mode: "Blended",                                 // ⚠️ MISSING — inferred from FAQs

  // ── 2. MEDIA ─────────────────────────────────────────────────────
  thumbnail: {
    url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776103037/basic_alfeiv.png", // ⚠️ MISSING
    alt: "Basic Computer Course in Delhi - EduraIndia",                        // ⚠️ MISSING
  },
  bannerImage: {
    url: "https://yourdomain.com/images/courses/basic-computer-banner.jpg",    // ⚠️ MISSING
    alt: "Best Basic Computer Institute in Delhi - EduraIndia",                // ⚠️ MISSING
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_VIDEO_ID",                 // ⚠️ MISSING

  // ── 3. COURSE STATS ───────────────────────────────────────────────
  duration: "1-3 Months",              // ✅ Inferred from FAQ answer
  totalLectures: null,                 // ⚠️ MISSING
  averageSalary: "₹1L - ₹8L+",        // ✅ Inferred from careerJourney
  placementRate: null,                 // ⚠️ MISSING
  studentsEnrolled: null,              // ⚠️ MISSING
  rating: {
    average: null,                     // ⚠️ MISSING
    count: null,                       // ⚠️ MISSING
  },

  // ── 4. PRICING ───────────────────────────────────────────────────
  price: {
    amount: null,                      // ⚠️ MISSING — FAQ mentions range ₹5,000 - ₹20,000
    currency: "INR",
    display: null,                     // ⚠️ MISSING
    originalPrice: null,               // ⚠️ MISSING
    emi: null,                         // ⚠️ MISSING
  },

  // ── 5. CURRICULUM PDF ─────────────────────────────────────────────
  curriculumPdfUrl: "https://yourdomain.com/pdfs/basic-computer-curriculum.pdf", // ⚠️ MISSING

  // ── 6. DESCRIPTIONS ───────────────────────────────────────────────
  description:
    "EduraIndia offers a practical basic computer course in Delhi designed to help beginners understand computer fundamentals, internet usage, and essential software skills. Learn through hands-on practice, guided sessions, and real-life tasks while exploring flexible computer basic course fees with certification and placement support.",

  description2:
    "Join EduraIndia's basic computer course and develop strong foundational skills for everyday and professional use. Ideal for learners searching for a basic computer course near me, this program also includes options for a basic computer course certificate and flexible learning support including a free basic computer course introduction module.",

  descriptionHighlight:
    "Learn essential digital skills with a basic computer course. Build confidence in using computers, internet tools, and daily applications for career growth.",
  // ⚠️ Doc 5 mein key "descriptionHig" tha (typo) — corrected to "descriptionHighlight"

  // ── 7. OVERVIEW SECTION ───────────────────────────────────────────
  overview: {
    title: "Basic Computer Course",
    description: `In today's digital world, having basic computer knowledge is essential for both personal and professional growth. At EduraIndia, our basic computer course in Delhi is designed for beginners who want to build confidence in using computers, understand essential applications, and develop practical digital skills for everyday tasks.

This computer basic course focuses on core areas such as operating systems, internet usage, MS Office tools, and basic troubleshooting. Students learn how to work on documents, create presentations, manage data, and use online platforms efficiently. It is an ideal choice for learners searching for a basic computer course near me or those looking for structured basic computer courses that provide hands-on learning and real-world usage.

What makes this basic computer course different is its simple and practical learning approach. Instead of complex theory, students gain clarity through guided practice and real-time examples. With experienced trainers, flexible learning options including an introduction to a free basic computer course module, affordable basic computer course fees, and a recognized basic computer course certificate, this program helps learners build a strong digital foundation for future career opportunities.`,
    image: {
      url: "https://yourdomain.com/images/courses/basic-computer-overview.jpg", // ⚠️ Doc 5 mein DM course image thi — corrected
      alt: "Basic Computer training session at EduraIndia Delhi",               // ⚠️ corrected
    },
  },

  // ── 8. PREREQUISITES ──────────────────────────────────────────────
  prerequisites: [
    // ⚠️ COMPLETELY MISSING in Doc 5 — suggested based on course level (Beginner):
    "No prior computer experience required",
    "Basic reading and writing ability",
    "Access to a computer or laptop for practice",
    "Willingness to learn digital tools",
    "Basic smartphone usage knowledge is a plus",
  ],

  // ── 9. KEY FEATURES ───────────────────────────────────────────────
  keyFeatures: [
    // ⚠️ COMPLETELY MISSING in Doc 5 — suggested based on skillsCovered & overview:
    "Computer Fundamentals & Operating System Basics",
    "MS Word — Document Creation & Formatting",
    "MS Excel — Basic Spreadsheets & Data Entry",
    "MS PowerPoint — Presentation Creation",
    "Internet Browsing & Email Communication",
    "Typing Skills & Keyboard Shortcuts",
    "Basic File & Folder Management",
    "Online Tools & Digital Literacy",
    "Basic Troubleshooting & System Knowledge",
    "Hands-on Practice with Real-Life Tasks",
    "Basic Computer Course Certificate",
    "Placement Guidance & Career Support",
  ],

  // ── 10. SKILLS COVERED ────────────────────────────────────────────
  // ⚠️ CRITICAL BUG in Doc 5 — skillsCovered mein Advanced Excel course ke
  //    skills copy-paste ho gaye the. Basic Computer course ke skills se replace kiya:
  skillsCovered: [
    "Computer Fundamentals & Operating System Usage",
    "MS Word — Document Creation & Formatting",
    "MS Excel — Basic Data Entry & Spreadsheets",
    "MS PowerPoint — Slide & Presentation Creation",
    "Internet Browsing & Safe Online Practices",
    "Email Communication & Professional Etiquette",
    "Typing Skills & Keyboard Shortcuts",
    "File & Folder Management",
    "Basic Troubleshooting & System Maintenance",
    "Online Tools & Digital Applications",
    "Practical Computer Tasks & Real-Life Exercises",
    "Basic Computer Course Certificate Preparation",
  ],

  // ── 11. TOOLS COVERED ─────────────────────────────────────────────
  toolsCovered: [
    // ⚠️ COMPLETELY MISSING in Doc 5 — suggested based on skillsCovered & overview:
    { name: "MS Word", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072039/MSword_cqmcu6.png", alt: "MS Word logo" } },
    { name: "MS Excel", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072035/MSexcel_kszfd0.png", alt: "MS Excel logo" } },
    { name: "MS PowerPoint", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072038/MSpowerpoint_uihney.png", alt: "MS PowerPoint logo" } },
    { name: "MS Paint", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072037/MSpaint_raa6ub.webp", alt: "MS Paint logo" } },
    { name: "Google Chrome", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776156108/GoogleChrome_eelsvq.png", alt: "Google Chrome logo" } },
    { name: "Email", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072021/Email_jwssei.png", alt: "Gmail logo" } },
    { name: "Windows OS", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072049/WindowOS_zek9k0.webp", alt: "Windows OS logo" } },
    { name: "Notepad", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/v1776072040/Notepad_osi0qj.png", alt: "Notepad logo" } },
    { name: "WordPad", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072040/Notepad_osi0qj.png", alt: "Notepad logo" } },
    { name: "MS Word", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072039/MSword_cqmcu6.png", alt: "MS Word logo" } },
    { name: "MS Excel", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072035/MSexcel_kszfd0.png", alt: "MS Excel logo" } },
    { name: "MS PowerPoint", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072038/MSpowerpoint_uihney.png", alt: "MS PowerPoint logo" } },
    { name: "MS Paint", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072037/MSpaint_raa6ub.webp", alt: "MS Paint logo" } },
    { name: "Google Chrome", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776156108/GoogleChrome_eelsvq.png", alt: "Google Chrome logo" } },
    { name: "Email", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072021/Email_jwssei.png", alt: "Gmail logo" } },
    { name: "Windows OS", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072049/WindowOS_zek9k0.webp", alt: "Windows OS logo" } },
    { name: "Notepad", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/v1776072040/Notepad_osi0qj.png", alt: "Notepad logo" } },
    { name: "WordPad", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072040/Notepad_osi0qj.png", alt: "Notepad logo" } },
  ],

  // ── 12. KEY TAKEAWAYS ─────────────────────────────────────────────
  keyTakeaways: [
    // ⚠️ COMPLETELY MISSING in Doc 5 — suggested based on overview & FAQs:
    "Recognized Basic Computer Course Certificate",
    "Hands-on Practical Training",
    "MS Office Skills (Word, Excel, PowerPoint)",
    "Internet & Email Communication Skills",
    "Expert & Beginner-Friendly Trainers",
    "Free Introduction Module Available",
    "Resume Building Support",
    "Placement Guidance for Entry-Level Roles",
    "Flexible Learning Schedule",
    "Strong Foundation for Advanced Courses",
  ],

  // ── 14. CAREER OPPORTUNITIES ──────────────────────────────────────
  careerOpportunities: [
    { title: "Computer Operator", description: "Handle daily computer tasks like data entry, file management, and basic system operations." },
    { title: "Data Entry Operator", description: "Enter, update, and manage data in systems accurately for businesses and organizations." },
    { title: "Office Assistant", description: "Support office work by handling documents, emails, and basic computer-based tasks." },
    { title: "Back Office Executive", description: "Manage backend operations, records, and reports using computer applications." },
    { title: "Customer Support Executive", description: "Assist customers through email or chat using basic computer and communication skills." },
    { title: "Computer Lab Assistant", description: "Maintain computer systems and assist students or staff in labs or training centers." },
    { title: "Clerical / Administrative Staff", description: "Perform routine office work including documentation, data handling, and record keeping." },
    { title: "Freelance Data Entry Operator", description: "Work independently on data entry and basic computer tasks for clients online." },
  ],

  // ── 15. CAREER JOURNEY ────────────────────────────────────────────
  careerJourney: [
    { step: 1, role: "Computer Operator Intern", experience: "0-6 months", salaryRange: "₹1L - ₹2L" },
    { step: 2, role: "Data Entry Operator", experience: "6 months - 1 yr", salaryRange: "₹2L - ₹3L" },
    { step: 3, role: "Office / Back Office Executive", experience: "1-3 years", salaryRange: "₹3L - ₹5L" },
    { step: 4, role: "Senior Office Executive", experience: "3-5 years", salaryRange: "₹5L - ₹8L" },
    { step: 5, role: "Office Administrator", experience: "5+ years", salaryRange: "₹8L - ₹12L+" },
  ],

  // ── 18. FAQs ──────────────────────────────────────────────────────
  faqs: [
    {
      question: "Which is the best basic computer course in Delhi for beginners?",
      answer: "The best basic computer course in Delhi offers hands-on training in computer fundamentals, MS Office, internet usage, and basic software skills to make learners confident and job-ready.",
    },
    {
      question: "What practical skills will I learn in a basic computer course?",
      answer: "In a basic computer course, you will learn computer fundamentals, MS Word, Excel, PowerPoint, email handling, internet browsing, and basic troubleshooting for daily computer tasks.",
    },
    {
      question: "Can I get a certificate after completing a basic computer course?",
      answer: "Yes, most basic computer courses provide a certificate that adds value to your resume and helps in applying for jobs, internships, or higher-level computer courses.",
    },
    {
      question: "Is learning basic computer skills important in 2026?",
      answer: "Absolutely, basic computer skills are essential in 2026 for all office, IT, and digital roles, as most jobs require proficiency in MS Office, email communication, and internet usage.",
    },
    {
      question: "How long does a basic computer course in Delhi take?",
      answer: "A basic computer course in Delhi usually takes 1 to 3 months depending on the modules covered, including MS Office, typing skills, internet basics, and practical computer exercises.",
    },
    {
      question: "What are basic computer course fees in Delhi?",
      answer: "Basic computer course fees in Delhi typically range from ₹5,000 to ₹20,000 based on institute, course duration, and inclusion of practical projects and certification.",
    },
    {
      question: "Can I join a basic computer course after 12th?",
      answer: "Yes, anyone can join a basic computer course after 12th, even without prior computer knowledge, making it ideal for students, job seekers, and professionals wanting to upskill.",
    },
    {
      question: "Is an online basic computer course available?",
      answer: "Yes, many institutes offer online basic computer courses along with offline classes, allowing learners to study MS Office, email handling, and internet basics from home.",
    },
    {
      question: "How can I find a basic computer course near me in Delhi?",
      answer: "If you are searching for a basic computer course near me, you can explore institutes in Delhi offering classroom training, flexible schedules, and practical exercises for hands-on learning.",
    },
    {
      question: "Does a basic computer course provide placement support?",
      answer: "Yes, some basic computer courses offer placement guidance, helping students prepare resumes, improve computer proficiency, and apply for internships or entry-level office jobs.",
    },
  ],

  // ── 19. SEO ───────────────────────────────────────────────────────
  seo: {
    // ⚠️ "NO1" typo tha metaTitle mein — corrected to "#1"
    metaTitle: "#1 Institute Free Basic Computer Course in Delhi at EduraIndia",
    metaDescription: "Join EduraIndia for a basic computer course in Delhi. Learn essential computer skills, office tools, and get a certificate with practical training.",
    keywords: [
      "basic computer course",
      "computer basic course",
      "basic computer course certificate",
      "basic computer courses",
      "basic computer course in delhi",
      "free basic computer course",
    ],
    // ⚠️ Doc 5 ke end mein keywords plain text mein dangle kar rahe the — already captured above
    // ⚠️ canonicalUrl DM course ka tha — corrected:
    canonicalUrl: "https://eduraindia.com/courses/basic-computer-course-delhi",

    // ⚠️ og aur twitter fields sab DM course ke copy-paste the — sabko correct kiya:
    ogTitle: "Best Basic Computer Course in Delhi — EduraIndia",
    ogDescription: "Beginner-friendly basic computer course with MS Office, internet skills, certificate & placement support. EduraIndia Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/basic-computer-og.jpg",
      alt: "EduraIndia Basic Computer Course Delhi",
    },

    twitterTitle: "#1 Basic Computer Course in Delhi | EduraIndia",
    twitterDescription: "Learn MS Office, Internet, Email & Computer Basics. Certificate + Placement Support. Join EduraIndia Delhi.",
    twitterImage: {
      url: "https://yourdomain.com/images/og/basic-computer-twitter.jpg",
      alt: "EduraIndia Basic Computer Course",
    },
  },

  // ── 20. STATUS ────────────────────────────────────────────────────
  isActive: true,
  isFeatured: null,  // ⚠️ MISSING
  sortOrder: null,   // ⚠️ MISSING
  badge: null,       // ⚠️ MISSING

  // ── 21. RELATED COURSES ───────────────────────────────────────────
  relatedCourses: [], // ⚠️ MISSING
};


const seoCourse = {

  // ── 1. BASIC INFO ────────────────────────────────────────────────
  title: "Master Search Rankings with a Professional SEO Course in Delhi",
  heroTitle: "Master Search Rankings with a Professional SEO Course in Delhi",
  slug: "seo-course-delhi",                        // ⚠️ MISSING — placeholder
  category: "Digital Marketing",                   // ⚠️ MISSING — inferred
  level: "Professional",                           // ⚠️ MISSING — inferred from overview
  language: "Hindi/English",                       // ⚠️ MISSING — placeholder
  mode: "Blended",                                 // ⚠️ MISSING — inferred from FAQs

  // ── 2. MEDIA ─────────────────────────────────────────────────────
  thumbnail: {
    url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776075900/seo_ewiotm.png", // ⚠️ MISSING
    alt: "SEO Course in Delhi - EduraIndia",                               // ⚠️ MISSING
  },
  bannerImage: {
    url: "https://yourdomain.com/images/courses/seo-course-banner.jpg",    // ⚠️ MISSING
    alt: "Best SEO Institute in Delhi - EduraIndia",                       // ⚠️ MISSING
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_VIDEO_ID",             // ⚠️ MISSING

  // ── 3. COURSE STATS ───────────────────────────────────────────────
  duration: "2-4 Months",              // ✅ Inferred from FAQ answer
  totalLectures: null,                 // ⚠️ MISSING
  averageSalary: "₹1L - ₹12L+",       // ✅ Inferred from careerJourney
  placementRate: null,                 // ⚠️ MISSING
  studentsEnrolled: null,              // ⚠️ MISSING
  rating: {
    average: null,                     // ⚠️ MISSING
    count: null,                       // ⚠️ MISSING
  },

  // ── 4. PRICING ───────────────────────────────────────────────────
  price: {
    amount: null,                      // ⚠️ MISSING — FAQ says "affordable" but no exact figure
    currency: "INR",
    display: null,                     // ⚠️ MISSING
    originalPrice: null,               // ⚠️ MISSING
    emi: null,                         // ⚠️ MISSING
  },

  // ── 5. CURRICULUM PDF ─────────────────────────────────────────────
  curriculumPdfUrl: "https://yourdomain.com/pdfs/seo-course-curriculum.pdf", // ⚠️ MISSING

  // ── 6. DESCRIPTIONS ───────────────────────────────────────────────
  description:
    "EduraIndia provides a result-driven SEO course in Delhi designed to help learners understand how search engines work and how to rank websites effectively. This practical program covers on-page SEO, off-page strategies, keyword research, and real-time optimization techniques, making it ideal for anyone looking for a reliable seo institute in Delhi with hands-on training and career-focused learning.",

  description2:
    "Build strong digital marketing skills with one of the best SEO courses in India, suitable for beginners, students, and professionals. If you are searching for a seo course in India or specifically a seo course Delhi, this course offers practical exposure, live projects, and industry-relevant techniques to help you grow in the digital space with confidence.",

  descriptionHighlight:
    "Learn SEO from basics to advanced and understand how to rank websites on Google. Gain practical knowledge, real-world skills, and career opportunities in digital marketing.",
  // ⚠️ Doc mein key "descriptionHig" tha (typo) — corrected to "descriptionHighlight"

  // ── 7. OVERVIEW SECTION ───────────────────────────────────────────
  overview: {
    title: "SEO Course",
    description: `In today's competitive digital landscape, understanding how search engines work is essential for businesses, marketers, and individuals who want to grow online. At EduraIndia, our SEO course in Delhi is designed to help beginners and aspiring professionals learn how to improve website visibility, drive organic traffic, and build a strong online presence through practical strategies.

This seo course delhi program focuses on key areas such as on-page optimization, off-page SEO techniques, keyword research, technical SEO, and content optimization. Students learn how to rank websites on search engines, analyze performance, and apply real-world strategies that are used by industry experts. It is an ideal choice for learners searching for a seo course in India or those looking for structured training from a trusted seo institute in Delhi with hands-on experience.

What makes this one of the best SEO courses in India is its practical and easy-to-understand approach. Instead of focusing only on theory, students work on live projects and real-time case studies to gain clarity and confidence. With expert trainers, flexible learning options, and industry-relevant training, this program helps learners develop strong SEO skills and prepares them for real career opportunities in digital marketing.`,
    image: {
      url: "https://yourdomain.com/images/courses/seo-course-overview.jpg", // ⚠️ DM course image thi — corrected
      alt: "SEO Course training session at EduraIndia Delhi",               // ⚠️ corrected
    },
  },

  // ── 8. PREREQUISITES ──────────────────────────────────────────────
  prerequisites: [
    // ⚠️ COMPLETELY MISSING — suggested based on course nature:
    "Basic computer and internet usage knowledge",
    "Basic understanding of how websites work",
    "No prior SEO or coding experience required",
    "Curiosity about how Google search rankings work",
    "Willingness to work on live websites and projects",
  ],

  // ── 9. KEY FEATURES ───────────────────────────────────────────────
  keyFeatures: [
    // ⚠️ COMPLETELY MISSING — suggested based on skillsCovered & overview:
    "SEO Fundamentals & Search Engine Working",
    "Keyword Research & Search Intent Analysis",
    "On-Page SEO Optimization Techniques",
    "Off-Page SEO & Link Building Strategies",
    "Technical SEO & Website Performance",
    "Content Optimization & SEO Writing",
    "Google Analytics & Search Console Training",
    "Local SEO & Google Business Profile",
    "Competitor Analysis & Website Audit",
    "Live Projects & Real-Time Case Studies",
    "Portfolio Building & Resume Support",
    "Placement Assistance & Interview Preparation",
  ],

  // ── 10. SKILLS COVERED ────────────────────────────────────────────
  skillsCovered: [
    "Search Engine Optimization Fundamentals and Strategies",
    "Keyword Research and Search Intent Analysis",
    "On-Page SEO Optimization for Better Rankings",
    "Off-Page SEO Techniques and Link Building Strategies",
    "Technical SEO and Website Performance Optimization",
    "Content Optimization and SEO Writing Skills",
    "SEO Tools Usage like Google Analytics and Search Console",
    "Competitor Analysis and Market Research Techniques",
    "Local SEO and Google Business Profile Optimization",
    "Website Audit and SEO Reporting Techniques",
    "Real-Time SEO Projects and Case Study Implementation",
    "Practical Training with Live Projects and Portfolio Building",
  ],

  // ── 11. TOOLS COVERED ─────────────────────────────────────────────
  toolsCovered: [
    // ⚠️ COMPLETELY MISSING — suggested based on skillsCovered:
    { name: "Google Analytics", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072022/GoogleAnalytics_jpp5vq.png", alt: "Google Analytics logo" } },
    { name: "Google Search Console", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072024/GoogleSearchConsole_e4wzia.png", alt: "Google Search Console logo" } },
    { name: "SEMrush", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072045/SEMrush_vlkqm8.png", alt: "SEMrush logo" } },
    { name: "Ahrefs", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072017/Ahrefs_qifsrq.png", alt: "Ahrefs logo" } },
    { name: "Ubersuggest", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/v1776233297/ubersuggest_kwpltb.png", alt: "Ubersuggest logo" } },
    { name: "Google Business Profile", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776156874/GoogleBusinessProfile_c3trp2.jpg", alt: "Google Business Profile logo" } },
    { name: "Screaming Frog", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776156903/screamingFrog_ahzrst.png", alt: "Screaming Frog logo" } },
    { name: "WordPress", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072049/WordPress_f7vm23.png", alt: "WordPress logo" } },
    { name: "Google Sheet", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072025/GoogleSheet_nvbk0i.png", alt: "WordPress logo" } },
    { name: "Google Analytics", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072022/GoogleAnalytics_jpp5vq.png", alt: "Google Analytics logo" } },
    { name: "Google Search Console", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072024/GoogleSearchConsole_e4wzia.png", alt: "Google Search Console logo" } },
    { name: "SEMrush", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072045/SEMrush_vlkqm8.png", alt: "SEMrush logo" } },
    { name: "Ahrefs", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072017/Ahrefs_qifsrq.png", alt: "Ahrefs logo" } },
    { name: "Ubersuggest", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/v1776233297/ubersuggest_kwpltb.png", alt: "Ubersuggest logo" } },
    { name: "Google Business Profile", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776156874/GoogleBusinessProfile_c3trp2.jpg", alt: "Google Business Profile logo" } },
    { name: "Screaming Frog", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776156903/screamingFrog_ahzrst.png", alt: "Screaming Frog logo" } },
    { name: "WordPress", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072049/WordPress_f7vm23.png", alt: "WordPress logo" } },
    { name: "Google Sheet", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072025/GoogleSheet_nvbk0i.png", alt: "WordPress logo" } },
  ],

  // ── 12. KEY TAKEAWAYS ─────────────────────────────────────────────
  keyTakeaways: [
    // ⚠️ COMPLETELY MISSING — suggested based on overview & FAQs:
    "100% Placement Support",
    "Industry-Recognized SEO Certification",
    "Hands-on Live Projects & Case Studies",
    "Expert SEO Trainers",
    "Google Analytics & Search Console Mastery",
    "On-Page, Off-Page & Technical SEO Skills",
    "Resume & Portfolio Building",
    "Interview Preparation & Mock Sessions",
    "Freelancing Module for Independent Work",
    "Lifetime Career Support",
  ],

  // ── 14. CAREER OPPORTUNITIES ──────────────────────────────────────
  careerOpportunities: [
    { title: "SEO Executive", description: "Optimize websites, perform keyword research, and implement ranking strategies learned during a SEO course in Delhi." },
    { title: "Digital Marketing Executive", description: "Manage SEO campaigns, online promotions, and digital strategies using practical skills gained from a SEO course in India." },
    { title: "SEO Analyst", description: "Analyze website performance, track traffic trends, and provide insights to improve search engine rankings effectively." },
    { title: "Content SEO Specialist", description: "Create and optimize website content, blogs, and pages using on-page SEO techniques and content strategies." },
    { title: "Freelance SEO Expert", description: "Offer SEO consulting, website optimization, and digital marketing services independently to clients worldwide." },
    { title: "Website Optimization Expert", description: "Enhance website performance, speed, and technical SEO elements to boost search engine visibility and user experience." },
    { title: "Local SEO Specialist", description: "Assist businesses in improving local search presence, Google Maps ranking, and location-based SEO strategies." },
    { title: "SEO Consultant", description: "Provide professional SEO guidance, strategy planning, and actionable recommendations to improve online presence for businesses." },
  ],

  // ── 15. CAREER JOURNEY ────────────────────────────────────────────
  careerJourney: [
    { step: 1, role: "SEO Intern", experience: "0-6 months", salaryRange: "₹1L - ₹2.5L" },
    { step: 2, role: "Junior SEO Executive", experience: "6 months - 1 yr", salaryRange: "₹2.5L - ₹4L" },
    { step: 3, role: "SEO Executive", experience: "1-3 years", salaryRange: "₹4L - ₹7L" },
    { step: 4, role: "Senior SEO Specialist", experience: "3-5 years", salaryRange: "₹7L - ₹12L" },
    { step: 5, role: "SEO Manager / Consultant", experience: "5+ years", salaryRange: "₹12L - ₹20L+" },
  ],

  // ── 18. FAQs ──────────────────────────────────────────────────────
  faqs: [
    {
      question: "Which is the best SEO course in Delhi for beginners?",
      answer: "EduraIndia offers one of the best SEO course in Delhi for beginners with practical training, live projects, and step-by-step guidance to help learners understand ranking and traffic growth.",
    },
    {
      question: "What skills will I learn in EduraIndia's SEO course in India?",
      answer: "In EduraIndia's SEO course in India, you will learn keyword research, on-page and off-page SEO, technical SEO, and strategies to improve website rankings effectively.",
    },
    {
      question: "Can I get a job after completing a SEO course Delhi from EduraIndia?",
      answer: "Yes, after completing a SEO course Delhi from EduraIndia, you can apply for roles like SEO Executive, Digital Marketer, and Content Strategist in various industries.",
    },
    {
      question: "Is SEO a good career option in India in 2026?",
      answer: "Yes, SEO is a highly in-demand skill in 2026 as businesses focus on organic growth, making a SEO course in India a valuable choice for long-term career opportunities.",
    },
    {
      question: "What is the duration of EduraIndia's SEO course in Delhi?",
      answer: "EduraIndia's SEO course in Delhi usually takes around 2 to 4 months, including practical training, tools, and real-time project experience.",
    },
    {
      question: "What are the fees for the best SEO course in India at EduraIndia?",
      answer: "The fees for the best SEO course in India at EduraIndia are affordable and based on course modules, practical training, and placement support included.",
    },
    {
      question: "Can I join EduraIndia's SEO course after 12th?",
      answer: "Yes, you can join EduraIndia's SEO course after 12th without any prior experience, making it ideal for students and beginners in digital marketing.",
    },
    {
      question: "Does EduraIndia offer an online SEO course in India?",
      answer: "Yes, EduraIndia provides SEO course in India in both online and offline modes, allowing flexible learning for students and working professionals.",
    },
    {
      question: "Why choose EduraIndia as a SEO institute in Delhi?",
      answer: "EduraIndia is a trusted SEO institute in Delhi offering practical training, experienced mentors, live projects, and career-focused learning for better results.",
    },
    {
      question: "Does EduraIndia provide placement support after SEO course?",
      answer: "Yes, EduraIndia provides placement support after SEO course, including resume building, interview preparation, and job assistance in digital marketing roles.",
    },
  ],

  // ── 19. SEO ───────────────────────────────────────────────────────
  seo: {
    // ⚠️ "NO1" typo tha — corrected to "#1"
    metaTitle: "#1 Institute for SEO Course in Delhi at EduraIndia",
    metaDescription: "Join EduraIndia, a trusted seo course in Delhi. Learn practical strategies, tools, and techniques through a seo course in Delhi with expert guidance.",
    // ⚠️ metaDescription ke end mein extra space + `.` tha — cleaned
    keywords: [
      "seo course in delhi",
      "seo course in india",
      "seo course delhi",
      "best seo course in india",
      "seo institute in delhi",
    ],
    // ⚠️ Doc ke end mein keywords plain text mein dangling the — already captured above

    // ⚠️ canonicalUrl DM course ka tha — corrected:
    canonicalUrl: "https://eduraindia.com/courses/seo-course-delhi",

    // ⚠️ og aur twitter fields sab DM course ke copy-paste the — sabko correct kiya:
    ogTitle: "Best SEO Course in Delhi — EduraIndia",
    ogDescription: "Job-oriented SEO training with live projects, Google Analytics, Search Console & placement support. EduraIndia Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/seo-course-og.jpg",
      alt: "EduraIndia SEO Course Delhi",
    },

    twitterTitle: "#1 SEO Course in Delhi | EduraIndia",
    twitterDescription: "Learn On-Page, Off-Page & Technical SEO. Google Analytics + Placement Support. Join EduraIndia Delhi.",
    twitterImage: {
      url: "https://yourdomain.com/images/og/seo-course-twitter.jpg",
      alt: "EduraIndia SEO Course",
    },
  },

  // ── 20. STATUS ────────────────────────────────────────────────────
  isActive: true,
  isFeatured: null,  // ⚠️ MISSING
  sortOrder: null,   // ⚠️ MISSING
  badge: null,       // ⚠️ MISSING

  // ── 21. RELATED COURSES ───────────────────────────────────────────
  relatedCourses: [], // ⚠️ MISSING
};


const googleAdsCourse = {

  // ── 1. BASIC INFO ────────────────────────────────────────────────
  title: "Become a Google Ads Expert with a Hands-On Ads Course in Delhi",
  heroTitle: "Become a Google Ads Expert with a Hands-On Ads Course in Delhi",
  slug: "google-ads-course-delhi",                 // ⚠️ MISSING — placeholder
  category: "Digital Marketing",                   // ⚠️ MISSING — inferred
  level: "Professional",                           // ⚠️ MISSING — inferred from overview
  language: "Hindi/English",                       // ⚠️ MISSING — placeholder
  mode: "Blended",                                 // ⚠️ MISSING — inferred from FAQs

  // ── 2. MEDIA ─────────────────────────────────────────────────────
  thumbnail: {
    url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776075891/google_ads_gv7lio.png", // ⚠️ MISSING
    alt: "Google Ads Course in Delhi - EduraIndia",                        // ⚠️ MISSING
  },
  bannerImage: {
    url: "https://yourdomain.com/images/courses/google-ads-banner.jpg",    // ⚠️ MISSING
    alt: "Best Google Ads Institute in Delhi - EduraIndia",                // ⚠️ MISSING
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_VIDEO_ID",             // ⚠️ MISSING

  // ── 3. COURSE STATS ───────────────────────────────────────────────
  duration: "2-3 Months",              // ⚠️ MISSING — placeholder inferred from careerJourney scope
  totalLectures: null,                 // ⚠️ MISSING
  averageSalary: "₹1L - ₹12L+",       // ✅ Inferred from careerJourney
  placementRate: null,                 // ⚠️ MISSING
  studentsEnrolled: null,              // ⚠️ MISSING
  rating: {
    average: null,                     // ⚠️ MISSING
    count: null,                       // ⚠️ MISSING
  },

  // ── 4. PRICING ───────────────────────────────────────────────────
  price: {
    amount: null,                      // ⚠️ MISSING — no fee figure anywhere in doc
    currency: "INR",
    display: null,                     // ⚠️ MISSING
    originalPrice: null,               // ⚠️ MISSING
    emi: null,                         // ⚠️ MISSING
  },

  // ── 5. CURRICULUM PDF ─────────────────────────────────────────────
  curriculumPdfUrl: "https://yourdomain.com/pdfs/google-ads-curriculum.pdf", // ⚠️ MISSING

  // ── 6. DESCRIPTIONS ───────────────────────────────────────────────
  description:
    "EduraIndia offers a practical Google Ads course in Delhi built for learners who want to go beyond theory and actually run campaigns that deliver results. From understanding the adwords training fundamentals to managing real budgets, this program covers search ads, display campaigns, bidding strategies, and performance tracking — everything you need to grow as a confident ads course full form to execution specialist. Whether you are a fresher or a working professional, our institute gives you the skills employers and clients are actively looking for.",

  description2:
    "If you have been searching for a google ads expert near me or looking for structured adwords training that fits your schedule, this is the right place to start. EduraIndia's ads course is designed to take you from zero to campaign-ready, with live project exposure, real ad account access, and step-by-step guidance from industry professionals. Suitable for students, freelancers, and business owners across India who want to master paid advertising and build a career in digital marketing with confidence.",

  descriptionHighlight:
    "Learn Google Ads from basics to advanced — run real campaigns, manage budgets, and drive measurable results. Gain practical skills and career-ready knowledge in paid digital advertising.",
  // ⚠️ Doc mein key "descriptionHig" tha (typo) — corrected to "descriptionHighlight"

  // ── 7. OVERVIEW SECTION ───────────────────────────────────────────
  // ⚠️ Doc mein "overview description:" likh ke colon + title alag tha —
  //    proper nested object structure mein fix kiya
  overview: {
    title: "Google Ads Course",
    description: `Most people spend money on Google Ads and get nothing back. The reason is simple — running ads without proper training is like driving blindfolded. At EduraIndia, we built our Google Ads course in Delhi to fix exactly that problem.

This is not your typical adwords training where you sit through slides and forget everything the next day. From day one, you work inside real ad accounts, set live budgets, write actual ad copies, and see what happens when your campaign goes live. You learn why some ads get clicks and others get ignored — and more importantly, how to be on the right side of that difference.

The curriculum is structured around what the industry actually needs right now. You will understand how Google's auction system works, how to choose the right keywords without wasting budget, how to set up conversion tracking, and how to scale campaigns profitably. Whether someone has been searching for a google ads expert near me to guide them personally, or looking for a serious ads course that goes beyond YouTube tutorials — this program is built for both.

By the time you finish, you will not just know what Google Ads is — you will know how to use it to grow a business, land clients, or get hired. That is what makes this ads course full form of practical, career-ready training one of the most valuable decisions you can make in digital marketing today.`,
    image: {
      url: "https://yourdomain.com/images/courses/google-ads-overview.jpg", // ⚠️ DM course image thi — corrected
      alt: "Google Ads Course training session at EduraIndia Delhi",        // ⚠️ corrected
    },
  },

  // ── 8. PREREQUISITES ──────────────────────────────────────────────
  prerequisites: [
    // ⚠️ COMPLETELY MISSING — suggested based on course nature & FAQs:
    "Basic computer and internet usage knowledge",
    "No prior Google Ads or technical experience required",
    "Basic understanding of digital marketing is a plus",
    "Willingness to work on live ad accounts and campaigns",
    "Curiosity about paid advertising and business growth",
  ],

  // ── 9. KEY FEATURES ───────────────────────────────────────────────
  keyFeatures: [
    // ⚠️ COMPLETELY MISSING — suggested based on skillsCovered & overview:
    "Google Ads Fundamentals & Campaign Structure",
    "Search, Display & Video Campaign Setup",
    "Keyword Research for Paid Ads",
    "Ad Copywriting & High-Converting Creatives",
    "Bidding Strategies & Budget Management",
    "Conversion Tracking & Performance Measurement",
    "Audience Targeting & Remarketing",
    "Google Analytics Integration",
    "Competitor Ads Analysis",
    "Landing Page Optimization for Conversions",
    "Live Campaign Execution on Real Ad Accounts",
    "Placement Assistance & Interview Preparation",
  ],

  // ── 10. SKILLS COVERED ────────────────────────────────────────────
  skillsCovered: [
    "Google Ads Fundamentals and Campaign Structure Understanding",
    "Keyword Research for Paid Ads and Search Intent Targeting",
    "Search, Display and Video Campaign Setup and Optimization",
    "Ad Copywriting and High-Converting Ad Creatives Creation",
    "Bidding Strategies and Budget Management Techniques",
    "Conversion Tracking and Performance Measurement Setup",
    "Audience Targeting and Remarketing Strategies",
    "Google Ads Tools Usage and Analytics Integration",
    "Competitor Ads Analysis and Market Research",
    "Landing Page Optimization for Better Ad Conversions",
    "Campaign Optimization and ROI Improvement Techniques",
    "Real-Time Google Ads Projects and Live Campaign Execution",
  ],

  // ── 11. TOOLS COVERED ─────────────────────────────────────────────
  toolsCovered: [
    // ⚠️ COMPLETELY MISSING — suggested based on skillsCovered:
    { name: "Google Ads", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072021/GoogleAds_iqrxzt.png", alt: "Google Ads logo" } },
    { name: "Google Analytics", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072022/GoogleAnalytics_jpp5vq.png", alt: "Google Analytics logo" } },
    { name: "Google Search Console", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072024/GoogleSearchConsole_e4wzia.png", alt: "Google Search Console logo" } },
    { name: "Google Tag Manager", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072026/GoogleTagManager_fsrgnp.png", alt: "Google Tag Manager logo" } },
    { name: "SEMrush", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072045/SEMrush_vlkqm8.png", alt: "SEMrush logo" } },
    { name: "Unbounce", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157155/Unbounce_sxm9ht.png", alt: "Landing Page Tool logo" } },
    { name: "Meta Ads Manager", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072032/MetaAdsManager_qcyh1l.png", alt: "Meta Ads Manager logo" } },
    { name: "Google Ads", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072021/GoogleAds_iqrxzt.png", alt: "Google Ads logo" } },
    { name: "Google Analytics", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072022/GoogleAnalytics_jpp5vq.png", alt: "Google Analytics logo" } },
    { name: "Google Search Console", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072024/GoogleSearchConsole_e4wzia.png", alt: "Google Search Console logo" } },
    { name: "Google Tag Manager", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072026/GoogleTagManager_fsrgnp.png", alt: "Google Tag Manager logo" } },
    { name: "SEMrush", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072045/SEMrush_vlkqm8.png", alt: "SEMrush logo" } },
    { name: "Unbounce", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157155/Unbounce_sxm9ht.png", alt: "Landing Page Tool logo" } },
    { name: "Meta Ads Manager", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072032/MetaAdsManager_qcyh1l.png", alt: "Meta Ads Manager logo" } },
  ],

  // ── 12. KEY TAKEAWAYS ─────────────────────────────────────────────
  keyTakeaways: [
    // ⚠️ COMPLETELY MISSING — suggested based on overview & FAQs:
    "100% Placement Support",
    "Google Ads Certification Preparation",
    "Hands-on Live Campaign Execution",
    "Real Ad Account Access from Day One",
    "Expert PPC & Paid Ads Trainers",
    "Search, Display & Video Ads Mastery",
    "Resume & Portfolio Building",
    "Interview Preparation & Mock Sessions",
    "Freelancing Module for Client Handling",
    "Lifetime Career Support",
  ],

  // ── 14. CAREER OPPORTUNITIES ──────────────────────────────────────
  careerOpportunities: [
    { title: "Google Ads Executive", description: "Manage paid ad campaigns, select effective keywords, and implement bidding strategies learned from a Google Ads course in Delhi." },
    { title: "Digital Marketing Executive", description: "Plan and execute PPC, social media, and online advertising campaigns using practical knowledge gained from a Google Ads course in India." },
    { title: "PPC Analyst", description: "Track and analyze ad performance, measure conversions, and optimize campaigns with professional Google Ads tools and insights." },
    { title: "Search Ads Specialist", description: "Create and refine search campaigns, improve ad targeting, and write compelling ad copies using advanced paid marketing techniques." },
    { title: "Freelance Google Ads Expert", description: "Provide expert Google Ads services to clients globally, managing campaigns and improving results after professional training." },
    { title: "Campaign Optimization Expert", description: "Enhance campaign performance, refine bidding strategies, and optimize structure to maximize ROI and lead generation." },
    { title: "Local Ads Specialist", description: "Design and run location-based ad campaigns for businesses to increase leads and local visibility using Google Ads strategies." },
    { title: "Google Ads Consultant", description: "Advise businesses on ad strategies, campaign setup, and optimization after completing comprehensive Google Ads training." },
  ],

  // ── 15. CAREER JOURNEY ────────────────────────────────────────────
  careerJourney: [
    { step: 1, role: "Google Ads Intern", experience: "0-6 months", salaryRange: "₹1L - ₹2.5L" },
    { step: 2, role: "Junior PPC Executive", experience: "6 months - 1 yr", salaryRange: "₹2.5L - ₹4L" },
    { step: 3, role: "Google Ads Executive", experience: "1-3 years", salaryRange: "₹4L - ₹7L" },
    { step: 4, role: "Senior PPC Specialist", experience: "3-5 years", salaryRange: "₹7L - ₹12L" },
    { step: 5, role: "Google Ads Manager / Consultant", experience: "5+ years", salaryRange: "₹12L - ₹20L+" },
  ],

  // ── 18. FAQs ──────────────────────────────────────────────────────
  faqs: [
    {
      question: "What is included in a Google Ads course in Delhi?",
      answer: "A Google Ads course in Delhi covers campaign setup, keyword targeting, ad creation, bidding strategies, and conversion tracking to help you run successful paid campaigns. At EduraIndia, training is focused on real ad account practice.",
    },
    {
      question: "Is AdWords training still relevant or replaced by Google Ads?",
      answer: "AdWords training is now known as Google Ads training, but the core concept remains the same. A modern Google Ads course in India focuses on updated tools, features, and campaign strategies.",
    },
    {
      question: "How can I find a Google Ads expert near me after learning?",
      answer: "After completing a Google Ads course, you can become a Google Ads expert yourself or connect with professionals near you through freelancing platforms and digital marketing networks.",
    },
    {
      question: "What does a Google Ads course teach beginners?",
      answer: "A Google Ads course teaches beginners how to create ads, target the right audience, manage budgets, and generate leads or sales using paid advertising strategies.",
    },
    {
      question: "What is the full form of Ads course in digital marketing?",
      answer: "The full form commonly refers to Google Ads, which stands for an online advertising platform where businesses promote their products through search, display, and video campaigns.",
    },
    {
      question: "Is a Google Ads course in India useful for career growth?",
      answer: "Yes, a Google Ads course in India is highly valuable as businesses invest heavily in paid marketing, creating strong demand for skilled PPC and ads professionals.",
    },
    {
      question: "Can I run ads for clients after completing a Google Ads course?",
      answer: "Yes, after completing a Google Ads course in Delhi from EduraIndia, you can manage campaigns for clients, generate leads, and even start freelancing in paid advertising.",
    },
    {
      question: "Do I need technical knowledge to learn Google Ads?",
      answer: "No, you don't need technical knowledge to start a Google Ads course. EduraIndia's training is beginner-friendly and focuses on practical campaign execution.",
    },
    {
      question: "Is there an online Google Ads course available?",
      answer: "Yes, EduraIndia offers Google Ads course in India with both online and offline options, allowing flexible learning with practical exposure.",
    },
    {
      question: "How do I choose the best Google Ads course in Delhi?",
      answer: "To choose the best Google Ads course in Delhi, look for institutes like EduraIndia that provide live campaign practice, updated strategies, and real performance-based training.",
    },
  ],

  // ── 19. SEO ───────────────────────────────────────────────────────
  seo: {
    metaTitle: "Best Institute for Google Ads Course in Delhi at EduraIndia",
    metaDescription: "Join EduraIndia for a professional Google Ads course in Delhi. Learn adwords training, campaign strategies, and become a Google Ads expert.",
    // ⚠️ metaDescription trailing space + extra `.` — cleaned
    keywords: [
      "google ads course",
      "google ads expert near me",
      "adwords training",
      "ads course full form",
      "google ads course in delhi",
    ],
    // ⚠️ Doc ke end mein keywords plain text dangling the — already captured above

    // ⚠️ canonicalUrl DM course ka tha — corrected:
    canonicalUrl: "https://eduraindia.com/courses/google-ads-course-delhi",

    // ⚠️ og aur twitter fields sab DM course ke copy-paste the — sabko correct kiya:
    ogTitle: "Best Google Ads Course in Delhi — EduraIndia",
    ogDescription: "Job-oriented Google Ads training with live campaigns, real ad account access & placement support. EduraIndia Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/google-ads-og.jpg",
      alt: "EduraIndia Google Ads Course Delhi",
    },

    twitterTitle: "Best Google Ads Course in Delhi | EduraIndia",
    twitterDescription: "Learn Search, Display & Video Ads. Real Campaign Execution + Placement Support. Join EduraIndia Delhi.",
    twitterImage: {
      url: "https://yourdomain.com/images/og/google-ads-twitter.jpg",
      alt: "EduraIndia Google Ads Course",
    },
  },

  // ── 20. STATUS ────────────────────────────────────────────────────
  isActive: true,
  isFeatured: null,  // ⚠️ MISSING
  sortOrder: null,   // ⚠️ MISSING
  badge: null,       // ⚠️ MISSING

  // ── 21. RELATED COURSES ───────────────────────────────────────────
  relatedCourses: [], // ⚠️ MISSING
};


const fullStackCourse = {

  // ── 1. BASIC INFO ────────────────────────────────────────────────
  title: "Become a Skilled Developer with a Professional Full Stack Developer Course in Delhi",
  heroTitle: "Become a Skilled Developer with a Professional Full Stack Developer Course in Delhi",
  slug: "full-stack-developer-course-delhi",        // ⚠️ MISSING — placeholder
  category: "Web Development",                      // ⚠️ MISSING — inferred
  level: "Professional",                            // ⚠️ MISSING — inferred from overview
  language: "Hindi/English",                        // ⚠️ MISSING — placeholder
  mode: "Blended",                                  // ⚠️ MISSING — inferred from FAQs

  // ── 2. MEDIA ─────────────────────────────────────────────────────
  thumbnail: {
    url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776075906/web_development_zqs1vh.png", // ⚠️ MISSING
    alt: "Full Stack Developer Course in Delhi - EduraIndia",              // ⚠️ MISSING
  },
  bannerImage: {
    url: "https://yourdomain.com/images/courses/full-stack-banner.jpg",    // ⚠️ MISSING
    alt: "Best Full Stack Institute in Delhi - EduraIndia",                // ⚠️ MISSING
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_VIDEO_ID",             // ⚠️ MISSING

  // ── 3. COURSE STATS ───────────────────────────────────────────────
  duration: "4-6 Months",              // ⚠️ MISSING — placeholder inferred from course scope
  // ⚠️ NOTE: FAQ says "a few months" — no exact figure given, placeholder used
  totalLectures: null,                 // ⚠️ MISSING
  averageSalary: "₹1L - ₹15L+",       // ✅ Inferred from careerJourney
  placementRate: null,                 // ⚠️ MISSING
  studentsEnrolled: null,              // ⚠️ MISSING
  rating: {
    average: null,                     // ⚠️ MISSING
    count: null,                       // ⚠️ MISSING
  },

  // ── 4. PRICING ───────────────────────────────────────────────────
  price: {
    amount: null,                      // ⚠️ MISSING — no fee figure anywhere in doc
    currency: "INR",
    display: null,                     // ⚠️ MISSING
    originalPrice: null,               // ⚠️ MISSING
    emi: null,                         // ⚠️ MISSING
  },

  // ── 5. CURRICULUM PDF ─────────────────────────────────────────────
  curriculumPdfUrl: "https://yourdomain.com/pdfs/full-stack-curriculum.pdf", // ⚠️ MISSING

  // ── 6. DESCRIPTIONS ───────────────────────────────────────────────
  description:
    "EduraIndia offers a career-focused full stack developer course in Delhi designed to help learners build complete web applications from scratch. This practical program covers front-end and back-end development, databases, and real-time coding techniques, making it a great choice for those searching for a full stack development course in Delhi with hands-on training and industry-oriented learning.",

  description2:
    "Develop powerful coding skills with one of the best full stack development courses in Delhi, ideal for beginners, students, and working professionals. If you are looking for a full stack web development course in Delhi or a full stack development course near me, this course provides live projects, practical exposure, and job-ready skills to help you grow confidently in the tech industry.",

  descriptionHighlight:
    "Learn full stack development from basics to advanced and build real-world web applications. Gain practical skills, coding experience, and strong career opportunities in web development.",
  // ⚠️ Doc mein key "descriptionHig" tha (typo) — corrected to "descriptionHighlight"
  // ⚠️ Doc mein closing `}` tha descriptionHighlight ke baad jo kisi bhi object ka
  //    part nahi tha — stray bracket remove kiya

  // ── 7. OVERVIEW SECTION ───────────────────────────────────────────
  // ⚠️ Doc mein 3 critical structural bugs the:
  //    1. "overviewDescription:" key do baar repeat tha (duplicate key)
  //    2. title: "Full Stack Developer Course" alag line pe tha, object ke andar nahi
  //    3. description string object key ke bina directly thi
  //    Teeno fix karke proper nested object banaya:
  overview: {
    title: "Full Stack Developer Course",
    description: `Many people start coding with excitement but soon get stuck between tutorials and confusion. The real issue is not effort, but lack of structured learning. At EduraIndia, our full stack developer course in Delhi is designed to give you a clear path where you not only learn concepts but actually understand how to apply them in real projects.

Unlike a typical full stack development course in Delhi, this program focuses on hands-on experience from day one. You will build real applications, connect front-end with back-end, and see how complete systems work together. Whether someone is searching for a full stack development course near me or a full stack web development course in Delhi, this training ensures you gain practical exposure that builds real confidence.

By the end of the course, you will not just know coding — you will be able to create projects, solve real problems, and step into job roles or freelance work confidently. That is why EduraIndia is considered among the best institute for full stack developer in Delhi for career-focused and industry-ready learning.`,
    image: {
      url: "https://yourdomain.com/images/courses/full-stack-overview.jpg", // ⚠️ DM course image thi — corrected
      alt: "Full Stack Developer Course training session at EduraIndia Delhi", // ⚠️ corrected
    },
  },

  // ── 8. PREREQUISITES ──────────────────────────────────────────────
  prerequisites: [
    // ⚠️ COMPLETELY MISSING — suggested based on course nature & FAQs:
    "Basic computer and internet usage knowledge",
    "No prior coding or programming experience required",
    "Basic logical thinking and problem-solving mindset",
    "Willingness to practice coding daily on real projects",
    "Curiosity about how websites and web apps are built",
  ],

  // ── 9. KEY FEATURES ───────────────────────────────────────────────
  keyFeatures: [
    // ⚠️ COMPLETELY MISSING — suggested based on skillsCovered & overview:
    "HTML, CSS & JavaScript Fundamentals",
    "Responsive & Mobile-Friendly UI Development",
    "Modern JavaScript Frameworks & Libraries",
    "Back-End Development & Server-Side Programming",
    "Database Management & Data Handling",
    "API Development & Integration",
    "Version Control with Git & GitHub",
    "Full Stack App Architecture & Workflow",
    "Authentication, Security & User Data Handling",
    "Web App Deployment & Hosting",
    "Live Projects & Portfolio Development",
    "Placement Assistance & Interview Preparation",
  ],

  // ── 10. SKILLS COVERED ────────────────────────────────────────────
  skillsCovered: [
    "Front-End Development with HTML, CSS and JavaScript",
    "Responsive Web Design and Mobile-Friendly UI Development",
    "Modern JavaScript Frameworks and Libraries Understanding",
    "Back-End Development with Server-Side Programming",
    "Database Management and Data Handling Techniques",
    "API Development and Integration for Web Applications",
    "Version Control Systems and Code Management with Git",
    "Full Stack Application Architecture and Workflow",
    "Authentication, Security and User Data Handling",
    "Deployment and Hosting of Web Applications",
    "Debugging, Testing and Performance Optimization",
    "Real-Time Full Stack Projects and Portfolio Development",
  ],

  // ── 11. TOOLS COVERED ─────────────────────────────────────────────
  toolsCovered: [
    // ⚠️ COMPLETELY MISSING — suggested based on skillsCovered:
    { name: "HTML5", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072027/html5_hkylls.png", alt: "HTML5 CSS3 logo" } },
    { name: "CSS3", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072019/css_cds4sd.webp", alt: "HTML5 CSS3 logo" } },
    { name: "JavaScript", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072029/js_zjrcyz.png", alt: "JavaScript logo" } },
    { name: "React.js", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157912/React_nfrh6q.png", alt: "React.js logo" } },
    { name: "Node.js", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157898/nodejs_nblafs.png", alt: "Node.js logo" } },
    { name: "Postman", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157912/React_nfrh6q.png", alt: "Postman logo" } },
    { name: "MySQL", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157890/mysql_l0vvxj.png", alt: "Database logo" } },
    { name: "MongoDB", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157877/mongodb_tzplli.png", alt: "Database logo" } },
    { name: "Git", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157829/git_gty8wu.svg", alt: "Git GitHub logo" } },
    { name: "GitHub", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157861/github_hggy4m.png", alt: "Git GitHub logo" } },
    { name: "VS Code", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157920/vscode_g6a49j.png", alt: "VS Code logo" } },
    { name: "Postman", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157912/React_nfrh6q.png", alt: "Postman logo" } },
    { name: "MongoDB", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157877/mongodb_tzplli.png", alt: "Database logo" } },
    { name: "Chrome DevTools", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157820/chromedevtools_xo4bz0.svg", alt: "Postman logo" } },
  ],

  // ── 12. KEY TAKEAWAYS ─────────────────────────────────────────────
  keyTakeaways: [
    // ⚠️ COMPLETELY MISSING — suggested based on overview & FAQs:
    "100% Placement Support",
    "Industry-Recognized Full Stack Certification",
    "Hands-on Live Coding Projects",
    "Front-End & Back-End Development Mastery",
    "Expert Developer Trainers",
    "Real-World App Deployment Experience",
    "Resume & GitHub Portfolio Building",
    "Interview Preparation & Mock Sessions",
    "Freelancing Module for Client Projects",
    "Lifetime Career Support",
  ],

  // ── 14. CAREER OPPORTUNITIES ──────────────────────────────────────
  careerOpportunities: [
    { title: "Full Stack Developer", description: "Build complete web applications from scratch, working on both front-end and back-end technologies after completing a full stack developer course in Delhi." },
    { title: "Front-End Developer", description: "Create responsive and interactive user interfaces using modern JavaScript frameworks and design principles learned in the full stack development course." },
    { title: "Back-End Developer", description: "Manage server-side logic, handle databases, and integrate APIs efficiently with skills gained from a full stack web development course in Delhi." },
    { title: "Web Application Developer", description: "Develop scalable and dynamic web applications by combining client-side and server-side development techniques practically." },
    { title: "Freelance Web Developer", description: "Work independently on projects for clients, building full-stack solutions with practical experience from the full stack development course near me." },
    { title: "Software Developer", description: "Design and implement software applications using comprehensive programming and development skills learned during the course." },
    { title: "API Developer", description: "Create, maintain, and manage APIs to connect various applications and systems efficiently in real-world development projects." },
    { title: "Technical Consultant", description: "Provide expert development guidance, technical solutions, and project support after training from a top full stack developer institute in Delhi." },
  ],

  // ── 15. CAREER JOURNEY ────────────────────────────────────────────
  careerJourney: [
    { step: 1, role: "Web Development Intern", experience: "0-6 months", salaryRange: "₹1L - ₹2.5L" },
    { step: 2, role: "Junior Full Stack Developer", experience: "6 months - 1 yr", salaryRange: "₹2.5L - ₹4.5L" },
    { step: 3, role: "Full Stack Developer", experience: "1-3 years", salaryRange: "₹4.5L - ₹8L" },
    { step: 4, role: "Senior Full Stack Developer", experience: "3-5 years", salaryRange: "₹8L - ₹15L" },
    { step: 5, role: "Lead Developer / Tech Consultant", experience: "5+ years", salaryRange: "₹15L - ₹25L+" },
  ],

  // ── 18. FAQs ──────────────────────────────────────────────────────
  faqs: [
    {
      question: "What will I learn in a full stack developer course in Delhi?",
      answer: "A full stack developer course in Delhi teaches how to build complete web applications by working on front-end, back-end, and databases with practical project-based learning at EduraIndia.",
    },
    {
      question: "Is a full stack development course in Delhi suitable for beginners?",
      answer: "Yes, a full stack development course in Delhi is designed for beginners as it starts from basic concepts and gradually moves to advanced development with hands-on practice.",
    },
    {
      question: "How is a full stack web development course in Delhi different from other coding courses?",
      answer: "A full stack web development course in Delhi focuses on both client-side and server-side development, helping learners understand how complete applications are built and deployed.",
    },
    {
      question: "Can I get a job after completing a full stack developer course?",
      answer: "After completing a full stack developer course in Delhi from EduraIndia, you can apply for developer roles, internships, or start working on real-world projects confidently.",
    },
    {
      question: "Do I need coding experience to join a full stack development course?",
      answer: "No prior coding experience is required to join a full stack development course as the training is structured to guide learners step by step from basics to advanced level.",
    },
    {
      question: "What kind of projects are included in a full stack development course near me?",
      answer: "A full stack development course near me includes real-time projects like building websites, web applications, and APIs to give practical exposure and industry-level experience.",
    },
    {
      question: "Is full stack development a good career option in India?",
      answer: "Yes, full stack development is a strong career option in India as companies need developers who can handle both front-end and back-end development efficiently.",
    },
    {
      question: "How long does it take to complete a full stack course?",
      answer: "A full stack developer course in Delhi can typically be completed in a few months depending on the training structure and the time you dedicate to practice.",
    },
    {
      question: "Does EduraIndia provide practical training in full stack development?",
      answer: "Yes, EduraIndia provides practical training with live projects, coding sessions, and real-world development experience in its full stack web development course in Delhi.",
    },
    {
      question: "How do I choose the best institute for full stack developer in Delhi?",
      answer: "To choose the best institute for full stack developer in Delhi, look for hands-on training, real projects, and career-focused learning, which EduraIndia provides effectively.",
    },
  ],

  // ── 19. SEO ───────────────────────────────────────────────────────
  seo: {
    // ⚠️ metaTitle ke start mein leading space tha — trimmed
    metaTitle: "Best Full Stack Development Course in Delhi at EduraIndia",
    metaDescription: "Join EduraIndia, best institute for full stack developer in Delhi. Learn full stack development course in Delhi with projects and career support.",
    keywords: [
      "full stack developer course in delhi",
      "full stack development course in delhi",
      "full stack development course near me",
      "full stack web development course in delhi",
      "best institute for full stack developer in delhi",
    ],
    // ⚠️ Doc ke end mein keywords plain text mein dangling the — already captured above

    // ⚠️ canonicalUrl DM course ka tha — corrected:
    canonicalUrl: "https://eduraindia.com/courses/full-stack-developer-course-delhi",

    // ⚠️ og aur twitter fields sab DM course ke copy-paste the — sabko correct kiya:
    ogTitle: "Best Full Stack Developer Course in Delhi — EduraIndia",
    ogDescription: "Job-oriented Full Stack training with live projects, front-end, back-end & placement support. EduraIndia Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/full-stack-og.jpg",
      alt: "EduraIndia Full Stack Developer Course Delhi",
    },

    twitterTitle: "Best Full Stack Developer Course in Delhi | EduraIndia",
    twitterDescription: "Learn HTML, CSS, JS, React, Node.js & Databases. Live Projects + Placement Support. Join EduraIndia Delhi.",
    twitterImage: {
      url: "https://yourdomain.com/images/og/full-stack-twitter.jpg",
      alt: "EduraIndia Full Stack Developer Course",
    },
  },

  // ── 20. STATUS ────────────────────────────────────────────────────
  isActive: true,
  isFeatured: null,  // ⚠️ MISSING
  sortOrder: null,   // ⚠️ MISSING
  badge: null,       // ⚠️ MISSING

  // ── 21. RELATED COURSES ───────────────────────────────────────────
  relatedCourses: [], // ⚠️ MISSING
};


const pythonCourse = {

  // ── 1. BASIC INFO ────────────────────────────────────────────────
  title: "Python Course in Delhi",

  // ✅ From Doc 6
  heroTitle: "Master Coding Skills with a Practical Python Course in Delhi",

  slug: "python-course-delhi",
  category: "Programming",
  level: "Professional",
  language: "Hindi/English",
  mode: "Blended",

  // ── 2. MEDIA ─────────────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual Python course assets
  thumbnail: {
    url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776075898/python_obrsjd.png",
    alt: "Python Course in Delhi - EduraIndia",
  },
  bannerImage: {
    url: "https://yourdomain.com/images/courses/python-banner.jpg",
    alt: "Best Python Training Institute in Delhi - EduraIndia",
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_VIDEO_ID",

  // ── 3. COURSE STATS ───────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual values
  duration: "3-6 Months",
  totalLectures: 100,
  averageSalary: "₹3 LPA - ₹15 LPA",
  placementRate: "95%",
  studentsEnrolled: 540,
  rating: {
    average: 4.8,
    count: 140,
  },

  // ── 4. PRICING ───────────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual pricing
  price: {
    amount: 20000,
    currency: "INR",
    display: "₹20,000",
    originalPrice: 35000,
    emi: "₹2,000/month",
  },

  // ── 5. CURRICULUM PDF ─────────────────────────────────────────────
  curriculumPdfUrl: "https://yourdomain.com/pdfs/python-curriculum.pdf",

  // ── 6. DESCRIPTIONS ───────────────────────────────────────────────
  // ✅ From Doc 6
  description:
    "Learning programming often feels confusing when you don't have the right direction. At EduraIndia, this python course in Delhi is designed to make things simple and practical from the very beginning. Instead of just focusing on theory, you work on real coding examples, understand logic clearly, and gradually build confidence in writing your own programs. Whether someone is searching for python classes in Delhi or looking for a python training institute in Delhi, this course provides a structured path with hands-on learning and real-world exposure.",

  // ✅ From Doc 6
  description2:
    "If you are planning to start your journey in programming or upgrade your skills, this python certification course is a strong choice. It covers everything from basic concepts to advanced applications in a smooth learning flow. For learners exploring a python online course or python coaching in Delhi, this program combines flexibility with practical training so you can learn effectively. Along with skill development, you also get clarity about python course fees and career opportunities, helping you make the right decision for your future.",

  // ✅ From Doc 6 — was incorrectly named "description3", fixed to descriptionHighlight
  descriptionHighlight:
    "Build strong programming skills with Python and learn to create real-world applications through practical training. Gain confidence, certification, and career-ready knowledge in coding.",

  // ── 7. OVERVIEW SECTION ───────────────────────────────────────────
  // ✅ From Doc 6 — was broken as "overviewDescription" with 3 loose descriptions,
  //    restructured into proper overview object with merged description
  overview: {
    title: "Python Course",
    description: `Learning programming becomes much easier when you follow a structured and practical approach. At EduraIndia, this python course in Delhi is designed to help you understand coding step by step, starting from the basics and moving towards real applications. Instead of only focusing on theory, the training includes hands-on exercises that improve your problem-solving ability and coding confidence. For learners searching for python classes in Delhi or a reliable python training institute in Delhi, this course offers a strong foundation with real-world learning exposure.

Building a career in programming requires more than just watching tutorials — it needs clarity, practice, and the right guidance. This python certification course focuses on helping you write clean code, understand logic, and apply concepts in real scenarios. Whether you are exploring a python online course or planning to join python coaching in Delhi, the program is designed to give you both flexibility and practical experience so you can learn effectively and grow with confidence.

Choosing the right training can make a big difference in how quickly you learn and apply your skills. With EduraIndia's python training in Delhi, you get a balanced learning environment where concepts are explained clearly and reinforced through practical work. The course also provides insight into python course fees, career scope, and industry usage, making it easier for learners to make informed decisions while building a strong base in programming.`,
    // ⚠️ PLACEHOLDER — update with actual Python course image
    image: {
      url: "https://yourdomain.com/images/courses/python-overview.jpg",
      alt: "Python training session at EduraIndia Delhi",
    },
  },

  // ── 8. PREREQUISITES ──────────────────────────────────────────────
  // ⚠️ NOT in Doc 6 — inferred from course content
  prerequisites: [
    "Basic computer knowledge",
    "Basic internet usage knowledge",
    "No prior coding or programming experience required",
    "Basic reading/writing skills in English",
    "Logical thinking and problem-solving interest",
    "Willingness to practise coding regularly",
  ],

  // ── 9. KEY FEATURES ───────────────────────────────────────────────
  // ⚠️ NOT in Doc 6 — inferred from skillsCovered and overview
  keyFeatures: [
    "Python Programming from Scratch",
    "Control Flow, Loops & Functions",
    "Object-Oriented Programming (OOPs)",
    "Data Structures — Lists, Tuples, Dicts, Sets",
    "File Handling & Automation Scripts",
    "Python Libraries for Data Analysis",
    "Introduction to Web Development with Python",
    "Web Scraping & Automation Projects",
    "Introduction to Machine Learning Concepts",
    "Debugging & Writing Clean Code",
    "Real-Time Live Projects",
    "Portfolio Building & Career Module",
  ],

  // ── 10. SKILLS COVERED ────────────────────────────────────────────
  // ✅ From Doc 6 — shortened from verbose sentences to clean skill labels
  skillsCovered: [
    "Python Basics — Variables, Data Types & Operators",
    "Control Flow & Looping Techniques",
    "Functions, Modules & Code Reusability",
    "Object-Oriented Programming (OOPs)",
    "Python Libraries for Data Handling & Analysis",
    "File Handling & Automation Scripts",
    "Data Structures — Lists, Tuples, Dicts & Sets",
    "Introduction to Web Development Frameworks",
    "Building Small Python Projects",
    "Debugging & Error Handling",
    "Real-Time Application Development",
    "Portfolio Creation with Live Coding Practice",
  ],

  // ── 11. TOOLS COVERED ─────────────────────────────────────────────
  // ⚠️ NOT in Doc 6 — inferred from skills and overview
  toolsCovered: [
    { name: "Python 3", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776158419/PyCharm_zqvpls.png", alt: "Python logo" } },
    { name: "VS Code", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157920/vscode_g6a49j.png", alt: "VS Code logo" } },
    { name: "PyCharm", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776158419/PyCharm_zqvpls.png", alt: "PyCharm logo" } },
    { name: "Jupyter Notebook", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776158418/JupyterLogo_bkwjud.png", alt: "Jupyter Notebook logo" } },
    { name: "Pandas", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072041/Pandas_v92vu1.png", alt: "NumPy Pandas logo" } },
    { name: "NumPy", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072040/Numpy_yey8ev.png", alt: "NumPy Pandas logo" } },
    { name: "Git", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157829/git_gty8wu.svg", alt: "GitHub logo" } },
    { name: "GitHub", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157861/github_hggy4m.png", alt: "GitHub logo" } },
    { name: "MySQL (Basics)", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157890/mysql_l0vvxj.png", alt: "MySQL logo" } },
    { name: "ChatGPT / AI Tools", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/ChatGPT_d3ybhl.webp", alt: "ChatGPT logo" } },
    { name: "Python 3", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776158419/PyCharm_zqvpls.png", alt: "Python logo" } },
    { name: "VS Code", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157920/vscode_g6a49j.png", alt: "VS Code logo" } },
    { name: "PyCharm", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776158419/PyCharm_zqvpls.png", alt: "PyCharm logo" } },
    { name: "Jupyter Notebook", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776158418/JupyterLogo_bkwjud.png", alt: "Jupyter Notebook logo" } },
    { name: "Pandas", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072041/Pandas_v92vu1.png", alt: "NumPy Pandas logo" } },
    { name: "NumPy", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072040/Numpy_yey8ev.png", alt: "NumPy Pandas logo" } },
    { name: "Git", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157829/git_gty8wu.svg", alt: "GitHub logo" } },
    { name: "GitHub", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157861/github_hggy4m.png", alt: "GitHub logo" } },
    { name: "MySQL (Basics)", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157890/mysql_l0vvxj.png", alt: "MySQL logo" } },
    { name: "ChatGPT / AI Tools", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/ChatGPT_d3ybhl.webp", alt: "ChatGPT logo" } },
  ],

  // ── 12. KEY TAKEAWAYS ─────────────────────────────────────────────
  // ⚠️ NOT in Doc 6 — inferred from course structure
  keyTakeaways: [
    "100% Placement Support",
    "Industry-Recognized Python Certification",
    "Hands-on Live Projects & Portfolio",
    "Expert Industry Trainers",
    "Real-World Coding Confidence",
    "Resume & Portfolio Building",
    "Soft Skills & Interview Preparation",
    "Lifetime Career Support",
    "Online & Offline Flexible Learning",
    "Automation & Data Skills",
  ],

  // ── 14. CAREER OPPORTUNITIES ──────────────────────────────────────
  // ✅ From Doc 6
  careerOpportunities: [
    { title: "Python Developer", description: "Develop applications, scripts, and automation solutions using Python." },
    { title: "Data Analyst", description: "Analyze data, generate reports, and extract insights using Python tools." },
    { title: "Automation Engineer", description: "Automate repetitive tasks, processes, and workflows using Python." },
    { title: "Backend Developer", description: "Build server-side applications and APIs using Python frameworks." },
    { title: "Machine Learning Intern", description: "Work on basic machine learning models and projects using Python." },
    { title: "Freelance Python Developer", description: "Take up independent Python development projects for clients globally." },
    { title: "Python Software Engineer", description: "Design and develop software solutions using Python for businesses." },
    { title: "Data Science Consultant", description: "Provide analytical insights and Python-based solutions for data-driven decisions." },
  ],

  // ── 15. CAREER JOURNEY ────────────────────────────────────────────
  // ✅ From Doc 6
  careerJourney: [
    { step: 1, role: "Python Intern", experience: "0-6 months", salaryRange: "₹1L - ₹2.5L" },
    { step: 2, role: "Junior Python Developer", experience: "6 months - 1 yr", salaryRange: "₹2.5L - ₹4L" },
    { step: 3, role: "Python Developer", experience: "1-3 years", salaryRange: "₹4L - ₹7L" },
    { step: 4, role: "Senior Python Developer", experience: "3-5 years", salaryRange: "₹7L - ₹12L" },
    { step: 5, role: "Lead Python Developer / Consultant", experience: "5+ years", salaryRange: "₹12L - ₹20L+" },
  ],

  // ── 18. FAQs ──────────────────────────────────────────────────────
  // ✅ From Doc 6
  faqs: [
    {
      question: "Can I join a Python course in Delhi with zero coding experience?",
      answer: "Absolutely! A Python course in Delhi is beginner-friendly. Even without prior coding knowledge, you can learn Python from basics to advanced concepts through practical exercises and real projects.",
    },
    {
      question: "What skills will I gain from Python training in Delhi?",
      answer: "Python training in Delhi helps you understand programming fundamentals, data analysis, automation, and scripting. You will also learn to work on real-time projects to build strong practical skills.",
    },
    {
      question: "Is Python learning in this course more theoretical or hands-on?",
      answer: "A good Python course in Delhi focuses on hands-on learning. You will write code, solve problems, and develop applications instead of just studying theory, which builds real confidence.",
    },
    {
      question: "Can I get a Python certification after completing the course?",
      answer: "Yes, after completing the Python certification course at EduraIndia, you will receive a certificate that validates your skills and helps you in career opportunities or freelance projects.",
    },
    {
      question: "Do I need any technical background to join Python classes in Delhi?",
      answer: "No prior technical background is required. Python classes in Delhi at EduraIndia are designed to teach programming from scratch, making it easy for beginners to start and progress to advanced coding.",
    },
    {
      question: "What kind of projects will I work on in a Python online course?",
      answer: "In a Python online course or classroom training, you will work on real-world projects like data automation, web scraping, mini applications, and data analysis tasks to gain practical exposure.",
    },
    {
      question: "Is learning Python a good career move in India?",
      answer: "Yes, Python is highly valuable as businesses and startups require Python developers for automation, data analysis, and software development roles, creating strong career opportunities.",
    },
    {
      question: "How long does a Python course in Delhi usually take?",
      answer: "A Python course in Delhi can be completed in a few months depending on your pace and the learning format, whether it is online, offline, or part-time coaching.",
    },
    {
      question: "What is the Python course fee and enrollment details?",
      answer: "Python course fees vary based on the institute and mode of training. At EduraIndia, a trusted Python training institute in Delhi, you can find flexible options including online courses, classroom coaching, and certification programs.",
    },
    {
      question: "How do I choose the best Python training institute in Delhi?",
      answer: "To select the best Python training institute in Delhi, look for hands-on practice, live projects, industry-relevant curriculum, expert trainers, and proper certification support — all available at EduraIndia.",
    },
  ],

  // ── 19. SEO ───────────────────────────────────────────────────────
  seo: {
    // ✅ From Doc 6 — "No1 Institute for" → cleaner "#1" format (consistent with other courses)
    metaTitle: "#1 Python Course in Delhi at EduraIndia",
    metaDescription: "Join EduraIndia, a trusted python training institute in Delhi. Learn python course in Delhi with practical training, projects, and certification.",

    // ✅ FIXED — was Digital Marketing keywords in a Python doc (critical error)
    keywords: [
      "python course",
      "python course fees",
      "python certification course",
      "python online course",
      "python course in delhi",
      "python training in delhi",
      "python training institute in delhi",
      "python coaching in delhi",
      "python classes in delhi",
    ],

    // ✅ FIXED — was pointing to digital marketing URL
    canonicalUrl: "https://eduraindia.com/courses/python-course-delhi",

    // ✅ FIXED — was copy-pasted digital marketing content
    ogTitle: "Best Python Course in Delhi — EduraIndia",
    ogDescription: "Practical Python training with live projects, certification, and placement support. Learn coding the right way. Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/python-og.jpg", // 1200×630 px
      alt: "EduraIndia Python Course Delhi",
    },

    // ✅ FIXED — was copy-pasted digital marketing content
    twitterTitle: "Best Python Course in Delhi | EduraIndia",
    twitterDescription: "Learn Python from scratch — automation, data analysis & real projects. Placement support. Join EduraIndia Delhi.",
    twitterImage: {
      url: "https://yourdomain.com/images/og/python-twitter.jpg",
      alt: "EduraIndia Python Course",
    },
  },

  // ── 20. STATUS ────────────────────────────────────────────────────
  isActive: true,
  isFeatured: true,
  sortOrder: 5,
  badge: "High Demand",

  // ── 21. RELATED COURSES ───────────────────────────────────────────
  relatedCourses: [],
};


const webDesigningCourse = {

  // ── 1. BASIC INFO ────────────────────────────────────────────────
  title: "Build Creative Skills with a Professional Web Designing Course in Delhi",
  heroTitle: "Build Creative Skills with a Professional Web Designing Course in Delhi",
  slug: "web-designing-course-delhi",               // ⚠️ MISSING — placeholder
  category: "Web Design",                           // ⚠️ MISSING — inferred
  level: "Professional",                            // ⚠️ MISSING — inferred from overview
  language: "Hindi/English",                        // ⚠️ MISSING — placeholder
  mode: "Blended",                                  // ⚠️ MISSING — inferred from FAQs

  // ── 2. MEDIA ─────────────────────────────────────────────────────
  thumbnail: {
    url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776075905/web_design_fgdsg2.png", // ⚠️ MISSING
    alt: "Web Designing Course in Delhi - EduraIndia",                        // ⚠️ MISSING
  },
  bannerImage: {
    url: "https://yourdomain.com/images/courses/web-designing-banner.jpg",    // ⚠️ MISSING
    alt: "Best Web Designing Institute in Delhi - EduraIndia",                // ⚠️ MISSING
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_VIDEO_ID",                // ⚠️ MISSING

  // ── 3. COURSE STATS ───────────────────────────────────────────────
  duration: "3-5 Months",              // ⚠️ MISSING — placeholder (FAQ: "a few months", no exact figure)
  totalLectures: null,                 // ⚠️ MISSING
  averageSalary: "₹1L - ₹12L+",       // ✅ Inferred from careerJourney
  placementRate: null,                 // ⚠️ MISSING
  studentsEnrolled: null,              // ⚠️ MISSING
  rating: {
    average: null,                     // ⚠️ MISSING
    count: null,                       // ⚠️ MISSING
  },

  // ── 4. PRICING ───────────────────────────────────────────────────
  price: {
    amount: null,                      // ⚠️ MISSING — no fee figure anywhere in doc
    currency: "INR",
    display: null,                     // ⚠️ MISSING
    originalPrice: null,               // ⚠️ MISSING
    emi: null,                         // ⚠️ MISSING
  },

  // ── 5. CURRICULUM PDF ─────────────────────────────────────────────
  curriculumPdfUrl: "https://yourdomain.com/pdfs/web-designing-curriculum.pdf", // ⚠️ MISSING

  // ── 6. DESCRIPTIONS ───────────────────────────────────────────────
  description:
    "EduraIndia brings a practical web designing course in Delhi that helps learners create visually appealing and user-friendly websites from scratch. This program focuses on layout design, responsive structures, UI principles, and real-time design techniques, making it a strong choice for anyone searching for a website designing course in Delhi with hands-on experience and industry-relevant learning approach.",

  description2:
    "Enhance your creative and technical skills with one of the most trusted web designing courses in Delhi, suitable for beginners, students, and professionals. If you are looking for a web designing course Delhi or exploring a web designing institute in Delhi, this course offers live projects, practical exposure, and modern design practices to help you build confidence and grow in the digital field.",

  descriptionHighlight:
    "Learn web designing from fundamentals to advanced and create modern, responsive websites. Build practical skills, creative expertise, and strong career opportunities in web design.",
  // ⚠️ Doc mein key "descriptionHig" tha (typo) — corrected to "descriptionHighlight"
  // ⚠️ Doc mein descriptionHighlight ke baad stray `}` tha — removed

  // ── 7. OVERVIEW SECTION ───────────────────────────────────────────
  // ⚠️ Doc mein 3 structural bugs the:
  //    1. "overviewDescription:" key tha (wrong key name, should be "overview")
  //    2. title: "Web Designing Course" object ke bahar alag line pe tha
  //    3. Description string key ke bina directly thi, proper JS object nahi tha
  //    Teeno fix karke proper nested object banaya:
  overview: {
    title: "Web Designing Course",
    description: `Many people are interested in designing websites but often feel confused about where to begin and what skills actually matter. The challenge is not creativity, but the lack of proper direction and practical learning. At EduraIndia, our web designing course in Delhi is created to give you a clear understanding of how to design modern, user-friendly websites with real-world application.

Unlike a typical website designing course in Delhi, this program focuses on hands-on practice from the start. You will work on real design layouts, understand responsive structures, and learn how design impacts user experience. Whether someone is searching for a web designing course Delhi or exploring a web designing institute in Delhi, this training helps you build strong design skills with practical exposure.

By the end of the course, you will not just understand design concepts — you will be able to create professional website layouts, improve user experience, and work on real projects confidently. That is why EduraIndia is known as a trusted web design institute in Delhi for career-focused and industry-ready web designing training.`,
    image: {
      url: "https://yourdomain.com/images/courses/web-designing-overview.jpg", // ⚠️ DM course image thi — corrected
      alt: "Web Designing Course training session at EduraIndia Delhi",        // ⚠️ corrected
    },
  },

  // ── 8. PREREQUISITES ──────────────────────────────────────────────
  prerequisites: [
    // ⚠️ COMPLETELY MISSING — suggested based on course nature & FAQs:
    "Basic computer and internet usage knowledge",
    "No prior coding or design experience required",
    "Interest in visual design, layouts, and creativity",
    "Willingness to practice on real design projects",
    "Basic smartphone or laptop usage familiarity",
  ],

  // ── 9. KEY FEATURES ───────────────────────────────────────────────
  keyFeatures: [
    // ⚠️ COMPLETELY MISSING — suggested based on skillsCovered & overview:
    "Website Layout Design & Visual Structure Planning",
    "Responsive Web Design for All Screen Sizes",
    "UI Design & UX Basics",
    "HTML & CSS for Web Page Structure & Styling",
    "Color Theory, Typography & Design Principles",
    "Landing Page & Business Website Design",
    "Wireframing & Prototyping Techniques",
    "Website Redesign & UX Improvement",
    "Basic SEO-Friendly Design Structure",
    "Live Projects & Real Website Design Practice",
    "Portfolio Creation & Resume Building",
    "Placement Assistance & Interview Preparation",
  ],

  // ── 10. SKILLS COVERED ────────────────────────────────────────────
  skillsCovered: [
    "Website Layout Designing and Visual Structure Planning",
    "Responsive Web Design for Mobile, Tablet and Desktop Screens",
    "User Interface (UI) Design and User Experience (UX) Basics",
    "Designing Modern and Clean Website Interfaces using Practical Tools",
    "Working with HTML and CSS for Structuring and Styling Web Pages",
    "Color Theory, Typography and Design Principles for Better Visuals",
    "Creating Landing Pages and Business Website Designs",
    "Wireframing and Prototyping for Website Planning",
    "Website Redesign Techniques to Improve User Experience",
    "Basic SEO-Friendly Design Structure Understanding",
    "Portfolio Creation with Real Website Design Projects",
    "Live Projects Practice in a Web Designing Course in Delhi Environment",
  ],

  // ── 11. TOOLS COVERED ─────────────────────────────────────────────
  toolsCovered: [
    // ⚠️ COMPLETELY MISSING — suggested based on skillsCovered:
    { name: "Figma", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776146894/figma_mvfnuq.png", alt: "Figma logo" } },
    { name: "Adobe XD", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776174482/AdobeXD_ixn44m.png", alt: "Adobe XD logo" } },
    { name: "Canva", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/Canva-removebg-preview_lorpzt.png", alt: "Canva logo" } },
    { name: "HTML5", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072027/html5_hkylls.png", alt: "HTML5 CSS3 logo" } },
    { name: "CSS3", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072019/css_cds4sd.webp", alt: "HTML5 CSS3 logo" } },
    { name: "Bootstrap", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776174646/Bootstrap_qaiyoj.png", alt: "Bootstrap logo" } },
    { name: "WordPress", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072049/WordPress_f7vm23.png", alt: "WordPress logo" } },
    { name: "VS Code", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157920/vscode_g6a49j.png", alt: "VS Code logo" } },
    { name: "Google Fonts", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776174803/GoogleFonts_iibqip.png", alt: "Google Fonts logo" } },
    { name: "Figma", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776146894/figma_mvfnuq.png", alt: "Figma logo" } },
    { name: "Adobe XD", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776174482/AdobeXD_ixn44m.png", alt: "Adobe XD logo" } },
    { name: "Canva", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/Canva-removebg-preview_lorpzt.png", alt: "Canva logo" } },
    { name: "HTML5", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072027/html5_hkylls.png", alt: "HTML5 CSS3 logo" } },
    { name: "CSS3", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072019/css_cds4sd.webp", alt: "HTML5 CSS3 logo" } },
    { name: "Bootstrap", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776174646/Bootstrap_qaiyoj.png", alt: "Bootstrap logo" } },
    { name: "WordPress", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072049/WordPress_f7vm23.png", alt: "WordPress logo" } },
    { name: "VS Code", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157920/vscode_g6a49j.png", alt: "VS Code logo" } },
    { name: "Google Fonts", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776174803/GoogleFonts_iibqip.png", alt: "Google Fonts logo" } },
  ],

  // ── 12. KEY TAKEAWAYS ─────────────────────────────────────────────
  keyTakeaways: [
    // ⚠️ COMPLETELY MISSING — suggested based on overview & FAQs:
    "100% Placement Support",
    "Industry-Recognized Web Design Certification",
    "Hands-on Live Design Projects",
    "Responsive & Mobile-First Design Mastery",
    "Expert Web Designer Trainers",
    "UI/UX Design Fundamentals",
    "Portfolio Building with Real Website Projects",
    "Resume Building & Interview Preparation",
    "Freelancing Module for Client Projects",
    "Lifetime Career Support",
  ],

  // ── 14. CAREER OPPORTUNITIES ──────────────────────────────────────
  careerOpportunities: [
    { title: "Web Designer", description: "Design visually appealing and user-friendly websites after completing a professional web designing course in Delhi." },
    { title: "UI Designer", description: "Create modern and interactive user interfaces focusing on usability and design principles learned from the web designing course." },
    { title: "UX Designer", description: "Enhance user experience by analyzing behavior and developing intuitive website designs using practical skills from the course." },
    { title: "Front-End Designer", description: "Convert creative concepts into responsive web pages and layouts with hands-on experience gained from a web designing course in Delhi." },
    { title: "Freelance Web Designer", description: "Work independently on client projects and develop professional websites using the skills acquired at a web designing institute." },
    { title: "Graphic & Web Designer", description: "Combine web and graphic design expertise to create engaging digital experiences for brands and businesses." },
    { title: "Website Layout Designer", description: "Plan, structure, and organize website layouts, wireframes, and interactive elements to improve usability." },
    { title: "Design Consultant", description: "Offer professional guidance and creative design solutions after completing training from a trusted web design institute in Delhi." },
  ],

  // ── 15. CAREER JOURNEY ────────────────────────────────────────────
  careerJourney: [
    { step: 1, role: "Web Design Intern", experience: "0-6 months", salaryRange: "₹1L - ₹2.5L" },
    { step: 2, role: "Junior Web Designer", experience: "6 months - 1 yr", salaryRange: "₹2.5L - ₹4L" },
    { step: 3, role: "Web Designer", experience: "1-3 years", salaryRange: "₹4L - ₹7L" },
    { step: 4, role: "Senior UI/UX Designer", experience: "3-5 years", salaryRange: "₹7L - ₹12L" },
    { step: 5, role: "Lead Designer / Design Consultant", experience: "5+ years", salaryRange: "₹12L - ₹20L+" },
  ],

  // ── 18. FAQs ──────────────────────────────────────────────────────
  faqs: [
    {
      question: "If I have zero background, can I start a web designing course in Delhi?",
      answer: "Yes, you can easily start a web designing course in Delhi even without any prior experience. Most beginners begin from basics and gradually learn how to design complete websites with proper guidance and practice.",
    },
    {
      question: "What skills will I actually gain from a website designing course in Delhi?",
      answer: "In a website designing course in Delhi, you learn how to create layouts, design user-friendly pages, and build responsive websites that work smoothly on mobile and desktop devices.",
    },
    {
      question: "Is web designing course Delhi focused more on theory or practical work?",
      answer: "A good web designing course Delhi focuses more on practical learning where you actually design websites instead of just learning concepts, helping you build real confidence.",
    },
    {
      question: "Can I build my own website after completing a web designing course in Delhi?",
      answer: "Yes, after completing a web designing course in Delhi, you will be able to create your own website designs and work on real projects with confidence.",
    },
    {
      question: "Do I need coding knowledge before joining a web design institute in Delhi?",
      answer: "No, you don't need coding knowledge to start. A web design institute in Delhi usually teaches everything from the basics, including design concepts and basic structure understanding.",
    },
    {
      question: "What kind of projects are included in a web designing institute in Delhi?",
      answer: "A web designing institute in Delhi includes practical projects like designing business websites, landing pages, and responsive layouts to give you real-world experience.",
    },
    {
      question: "Is web designing a good career after doing a web designing course in Delhi?",
      answer: "Yes, after completing a web designing course in Delhi, you can explore job roles, freelance work, or even start working with clients independently.",
    },
    {
      question: "How long does a web designing course Delhi usually take?",
      answer: "A web designing course Delhi can usually be completed within a few months depending on your learning speed and the training structure.",
    },
    {
      question: "Why choose a web designing institute in Delhi like EduraIndia?",
      answer: "Choosing a web designing institute in Delhi like EduraIndia helps you get practical exposure, real projects, and structured learning that makes you job-ready.",
    },
    {
      question: "How to select the best web design institute in Delhi?",
      answer: "To choose the best web design institute in Delhi, you should focus on practical training, project-based learning, and industry-relevant skills rather than just theory.",
    },
  ],

  // ── 19. SEO ───────────────────────────────────────────────────────
  seo: {
    metaTitle: "#1 Web Design Course in Delhi at EduraIndia",
    metaDescription: "Join EduraIndia, a leading web designing institute in Delhi. Learn web designing course in Delhi with practical training, projects, and career support.",
    keywords: [
      "web designing course in delhi",
      "website designing course in delhi",
      "web designing institute in delhi",
      "web design institute in delhi",
      "web designing course delhi",
    ],
    // ⚠️ Doc ke end mein keywords plain text dangling the — already captured above

    // ⚠️ canonicalUrl DM course ka tha — corrected:
    canonicalUrl: "https://eduraindia.com/courses/web-designing-course-delhi",

    // ⚠️ og aur twitter fields sab DM course ke copy-paste the — sabko correct kiya:
    ogTitle: "Best Web Designing Course in Delhi — EduraIndia",
    ogDescription: "Job-oriented Web Designing training with live projects, UI/UX basics, responsive design & placement support. EduraIndia Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/web-designing-og.jpg",
      alt: "EduraIndia Web Designing Course Delhi",
    },

    twitterTitle: "#1 Web Designing Course in Delhi | EduraIndia",
    twitterDescription: "Learn Web Design, HTML, CSS, Figma & Responsive Layouts. Live Projects + Placement Support. Join EduraIndia Delhi.",
    twitterImage: {
      url: "https://yourdomain.com/images/og/web-designing-twitter.jpg",
      alt: "EduraIndia Web Designing Course",
    },
  },

  // ── 20. STATUS ────────────────────────────────────────────────────
  isActive: true,
  isFeatured: null,  // ⚠️ MISSING
  sortOrder: null,   // ⚠️ MISSING
  badge: null,       // ⚠️ MISSING

  // ── 21. RELATED COURSES ───────────────────────────────────────────
  relatedCourses: [], // ⚠️ MISSING
};


const mernStack = {

  // ── 1. BASIC INFO ────────────────────────────────────────────────
  title: "MERN Stack Course in Delhi",

  // ✅ From Doc 7
  heroTitle: "Become a Professional MERN Stack Developer with Practical Training in Delhi",

  slug: "mern-stack-course-delhi",
  category: "Web Development",
  level: "Professional",
  language: "Hindi/English",
  mode: "Blended",

  // ── 2. MEDIA ─────────────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual MERN Stack assets
  thumbnail: {
    url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776075895/MERN_stack_wbnurx.png",
    alt: "MERN Stack Course in Delhi - EduraIndia",
  },
  bannerImage: {
    url: "https://yourdomain.com/images/courses/mern-stack-banner.jpg",
    alt: "Best MERN Stack Development Course in Delhi - EduraIndia",
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_VIDEO_ID",

  // ── 3. COURSE STATS ───────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual values
  duration: "4-6 Months",
  totalLectures: 120,
  averageSalary: "₹4 LPA - ₹18 LPA",
  placementRate: "95%",
  studentsEnrolled: 480,
  rating: {
    average: 4.8,
    count: 130,
  },

  // ── 4. PRICING ───────────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual pricing
  price: {
    amount: 25000,
    currency: "INR",
    display: "₹25,000",
    originalPrice: 40000,
    emi: "₹2,500/month",
  },

  // ── 5. CURRICULUM PDF ─────────────────────────────────────────────
  curriculumPdfUrl: "https://yourdomain.com/pdfs/mern-stack-curriculum.pdf",

  // ── 6. DESCRIPTIONS ───────────────────────────────────────────────
  // ✅ From Doc 7 — fixed key name from "Description 1" → description
  description:
    "Many learners get confused while starting full-stack development because they don't have a structured approach. EduraIndia's MERN Stack course in Delhi gives you clarity from day one. You learn what is MERN stack, understand MERN full form, and practice building real-world applications using MongoDB, Express.js, React, and Node.js. Whether you are searching for a MERN Stack course near me or planning a career in web development, this program provides live projects, hands-on exercises, and step-by-step guidance for practical skill development.",

  // ✅ From Doc 7 — fixed key name from "Description 2" → description2
  description2:
    "If you want to become a skilled MERN Stack developer, this MERN Stack development course in Delhi is ideal. Starting from basics to advanced techniques, it explains the MERN Stack full form, integration of front-end and back-end technologies, and real-time project execution. Those looking for a MERN Stack course or detailed insights about career options will find clear, structured training, practical exposure, and confidence-building coding exercises in this comprehensive program.",

  // ✅ From Doc 7 — fixed key name from "Description 3" → descriptionHighlight
  descriptionHighlight:
    "Gain complete expertise in full-stack JavaScript with the MERN Stack course at EduraIndia. Learn to build dynamic web applications and become a confident MERN Stack developer ready for professional challenges.",

  // ── 7. OVERVIEW SECTION ───────────────────────────────────────────
  // ❌ Doc 7 had Python course overview copy-pasted here — replaced with MERN content
  overview: {
    title: "MERN Stack Development Course",
    description: `Full-stack web development is one of the most in-demand skills in today's tech industry, and the MERN Stack is among the most powerful combinations for building modern web applications. At EduraIndia, our MERN Stack course in Delhi is designed to take you from the fundamentals all the way to building complete, production-ready applications using MongoDB, Express.js, React, and Node.js.

This MERN Stack development course covers both front-end and back-end development in a unified JavaScript ecosystem. You will learn what is MERN stack, understand the MERN full form, and gain hands-on experience building dynamic web apps, RESTful APIs, authentication systems, and database-driven applications. Whether you are a beginner or someone with basic coding knowledge, the curriculum is structured to help you grow with confidence at every step.

Our training at EduraIndia focuses on real-world project development, so you graduate with a strong portfolio that reflects industry-level skills. We offer flexible learning options for students searching for a MERN Stack course near me, along with classroom training in Delhi. With expert mentors, practical live projects, and dedicated placement support, EduraIndia helps you become a job-ready MERN Stack developer.`,
    // ⚠️ PLACEHOLDER — update with actual MERN Stack image
    image: {
      url: "https://yourdomain.com/images/courses/mern-stack-overview.jpg",
      alt: "MERN Stack training session at EduraIndia Delhi",
    },
  },

  // ── 8. PREREQUISITES ──────────────────────────────────────────────
  // ⚠️ NOT in Doc 7 — inferred from course content
  prerequisites: [
    "Basic computer knowledge",
    "Basic internet usage knowledge",
    "Basic understanding of HTML & CSS (helpful but not required)",
    "No prior JavaScript or backend experience required",
    "Logical thinking and problem-solving interest",
    "Willingness to practise coding regularly",
  ],

  // ── 9. KEY FEATURES ───────────────────────────────────────────────
  // ⚠️ NOT in Doc 7 — inferred from skillsCovered and overview
  keyFeatures: [
    "MERN Stack Full Form & Architecture Overview",
    "Front-End Development with React.js",
    "Back-End Development with Node.js & Express.js",
    "Database Management with MongoDB",
    "RESTful API Design & Integration",
    "User Authentication & Role-Based Access",
    "Full-Stack App Integration (Front + Back)",
    "State Management in React",
    "Deployment on Cloud Platforms",
    "Real-Time Live Projects (E-commerce, Dashboards)",
    "Debugging & Error Handling",
    "Portfolio Building & Career Module",
  ],

  // ── 10. SKILLS COVERED ────────────────────────────────────────────
  // ✅ From Doc 7 — shortened from verbose sentences to clean skill labels
  skillsCovered: [
    "MongoDB, Express.js, React.js & Node.js Basics",
    "Front-End Development with React — Components, State & Events",
    "Back-End Development — Server Setup & Routing with Node/Express",
    "Database Management with MongoDB — CRUD Operations",
    "Front-End & Back-End Integration via APIs",
    "User Authentication — Login, Sessions & Role-Based Access",
    "RESTful API Design & JSON Data Handling",
    "MERN Project Structuring & Dependency Management",
    "Real-World Projects — E-commerce, Dashboards & Web Apps",
    "Debugging & Error Handling (Front-End & Back-End)",
    "Deployment on Cloud Platforms",
    "Portfolio Creation with MERN Projects",
  ],

  // ── 11. TOOLS COVERED ─────────────────────────────────────────────
  // ⚠️ NOT in Doc 7 — inferred from skills and overview
  toolsCovered: [
    { name: "MongoDB", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157877/mongodb_tzplli.png", alt: "MongoDB logo" } },
    { name: "Express.js", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776174972/expressjs_t9cpxk.png", alt: "Express.js logo" } },
    { name: "React.js", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157912/React_nfrh6q.png", alt: "React.js logo" } },
    { name: "Node.js", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157898/nodejs_nblafs.png", alt: "Node.js logo" } },
    { name: "VS Code", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157920/vscode_g6a49j.png", alt: "VS Code logo" } },
    { name: "Postman", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157905/postman_mkqg6r.png", alt: "Postman logo" } },
    { name: "Git", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157829/git_gty8wu.svg", alt: "GitHub logo" } },
    { name: "GitHub", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157861/github_hggy4m.png", alt: "GitHub logo" } },
    { name: "ChatGPT / AI Tools", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/ChatGPT_d3ybhl.webp", alt: "ChatGPT logo" } },
    { name: "MongoDB", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157877/mongodb_tzplli.png", alt: "MongoDB logo" } },
    { name: "Express.js", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776174972/expressjs_t9cpxk.png", alt: "Express.js logo" } },
    { name: "React.js", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157912/React_nfrh6q.png", alt: "React.js logo" } },
    { name: "Node.js", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157898/nodejs_nblafs.png", alt: "Node.js logo" } },
    { name: "VS Code", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157920/vscode_g6a49j.png", alt: "VS Code logo" } },
    { name: "Postman", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157905/postman_mkqg6r.png", alt: "Postman logo" } },
    { name: "Git", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157829/git_gty8wu.svg", alt: "GitHub logo" } },
    { name: "GitHub", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157861/github_hggy4m.png", alt: "GitHub logo" } },
    { name: "ChatGPT / AI Tools", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/ChatGPT_d3ybhl.webp", alt: "ChatGPT logo" } },
  ],

  // ── 12. KEY TAKEAWAYS ─────────────────────────────────────────────
  // ⚠️ NOT in Doc 7 — inferred from course structure
  keyTakeaways: [
    "100% Placement Support",
    "Industry-Recognized MERN Stack Certification",
    "Hands-on Live Projects & Portfolio",
    "Expert Industry Trainers",
    "Full-Stack Development Confidence",
    "Resume & Portfolio Building",
    "Soft Skills & Interview Preparation",
    "Lifetime Career Support",
    "Online & Offline Flexible Learning",
    "Real Client & Product Projects",
  ],

  // ── 14. CAREER OPPORTUNITIES ──────────────────────────────────────
  // ✅ From Doc 7 — cleaned up keyword-stuffed descriptions
  careerOpportunities: [
    { title: "MERN Stack Developer", description: "Build full-fledged web applications using MongoDB, Express, React, and Node.js." },
    { title: "Front-End Developer", description: "Create responsive and interactive user interfaces using React and JavaScript." },
    { title: "Back-End Developer", description: "Manage server-side logic, APIs, and databases using Node.js and Express." },
    { title: "Full Stack Web Developer", description: "Develop dynamic and scalable web applications by integrating front-end and back-end technologies." },
    { title: "Freelance Web Developer", description: "Take independent projects and provide complete web solutions using MERN Stack skills." },
    { title: "API Developer", description: "Design and implement RESTful APIs to connect applications efficiently." },
    { title: "Web Application Developer", description: "Plan, build, and deploy modern web applications that are responsive, secure, and maintainable." },
    { title: "Technical Consultant", description: "Provide project guidance, development solutions, and technical support for web projects." },
  ],

  // ── 15. CAREER JOURNEY ────────────────────────────────────────────
  // ✅ From Doc 7
  careerJourney: [
    { step: 1, role: "MERN Stack Intern", experience: "0-6 months", salaryRange: "₹1L - ₹2.5L" },
    { step: 2, role: "Junior MERN Stack Developer", experience: "6 months - 1 yr", salaryRange: "₹2.5L - ₹4L" },
    { step: 3, role: "MERN Stack Developer", experience: "1-3 years", salaryRange: "₹4L - ₹7L" },
    { step: 4, role: "Senior MERN Stack Developer", experience: "3-5 years", salaryRange: "₹7L - ₹12L" },
    { step: 5, role: "Lead MERN Stack Developer / Consultant", experience: "5+ years", salaryRange: "₹12L - ₹20L+" },
  ],

  // ── 18. FAQs ──────────────────────────────────────────────────────
  // ✅ From Doc 7
  faqs: [
    {
      question: "Can I join a MERN Stack course in Delhi without prior programming experience?",
      answer: "Yes! This MERN Stack development course is suitable for beginners. Even if you have no prior coding knowledge, you can start learning from the basics and gradually move to full-stack development using practical projects.",
    },
    {
      question: "What skills will I gain from a MERN Stack development course?",
      answer: "By taking a MERN Stack course, you will learn to build complete web applications using MongoDB, Express, React, and Node.js. You will understand front-end and back-end integration, database handling, API creation, and deployment practices.",
    },
    {
      question: "Is the MERN Stack course more practical or theoretical?",
      answer: "The course emphasizes hands-on learning. You will work on real projects, build dynamic web applications, and implement full-stack features, rather than just studying concepts, ensuring strong practical experience.",
    },
    {
      question: "Will I get a certification after completing the MERN Stack course?",
      answer: "Yes, after completing the MERN Stack course at EduraIndia, you will receive a certificate that validates your skills and helps you showcase your expertise to potential employers or freelance clients.",
    },
    {
      question: "Do I need prior knowledge of web development to join?",
      answer: "No prior web development knowledge is needed. The MERN Stack course at EduraIndia covers everything from basic programming concepts to advanced full-stack development techniques in a structured way.",
    },
    {
      question: "What type of projects will I work on in the MERN Stack course?",
      answer: "You will create real-world projects such as e-commerce sites, dashboards, social media apps, and dynamic web applications, giving you practical experience that mirrors industry requirements.",
    },
    {
      question: "Is learning MERN Stack a good career move?",
      answer: "Absolutely! MERN Stack developers are in high demand. Completing a MERN Stack course can open opportunities as full-stack developers, front-end specialists, back-end engineers, or freelance MERN Stack developers.",
    },
    {
      question: "How long does the MERN Stack course usually take?",
      answer: "Most MERN Stack development courses at EduraIndia range from 4 to 6 months, depending on whether you choose part-time or full-time format with live projects.",
    },
    {
      question: "What are the fees for a MERN Stack course near me?",
      answer: "MERN Stack course fees vary depending on the institute and course format. EduraIndia offers flexible options including online classes, classroom training, and full certification programs.",
    },
    {
      question: "How do I select the best MERN Stack development course?",
      answer: "Look for courses that offer live projects, hands-on coding practice, experienced trainers, real-world application development, and proper certification — all of which are available at EduraIndia.",
    },
  ],

  // ── 19. SEO ───────────────────────────────────────────────────────
  seo: {
    // ✅ From Doc 7 — "NO1 MERN Stack developer Course" → cleaner format
    metaTitle: "#1 MERN Stack Course in Delhi at EduraIndia",
    metaDescription: "Join EduraIndia for the best MERN stack course. Learn MERN stack development course in Delhi, what is MERN stack, and become a skilled MERN stack developer.",
    keywords: [
      "best mern stack course",
      "mern stack course near me",
      "mern stack development course",
      "mern stack full form",
      "mern full form",
      "mern stack developer",
      "mern stack course",
      "what is mern stack",
    ],

    // ✅ FIXED — was pointing to digital marketing URL
    canonicalUrl: "https://eduraindia.com/courses/mern-stack-course-delhi",

    // ✅ FIXED — was copy-pasted digital marketing content
    ogTitle: "Best MERN Stack Course in Delhi — EduraIndia",
    ogDescription: "Full-stack web development training with MongoDB, Express, React & Node.js. Live projects & placement support. Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/mern-stack-og.jpg", // 1200×630 px
      alt: "EduraIndia MERN Stack Course Delhi",
    },

    // ✅ FIXED — was copy-pasted digital marketing content
    twitterTitle: "Best MERN Stack Course in Delhi | EduraIndia",
    twitterDescription: "Learn MongoDB, Express, React & Node.js. Build real apps & become a full-stack developer. Join EduraIndia Delhi.",
    twitterImage: {
      url: "https://yourdomain.com/images/og/mern-stack-twitter.jpg",
      alt: "EduraIndia MERN Stack Course",
    },
  },

  // ── 20. STATUS ────────────────────────────────────────────────────
  isActive: true,
  isFeatured: true,
  sortOrder: 6,
  badge: "High Demand",

  // ── 21. RELATED COURSES ───────────────────────────────────────────
  relatedCourses: [],
};


const javaFullStack = {

  // ── 1. BASIC INFO ────────────────────────────────────────────────
  title: "Java Full Stack Developer Course in Delhi",

  // ✅ From Doc 8 — fixed "Mastery Java Full Stack Developer Course" grammar
  heroTitle: "Master Java Full Stack Development with a Practical Course in Delhi",

  slug: "java-full-stack-course-delhi",
  category: "Web Development",
  level: "Professional",
  language: "Hindi/English",
  mode: "Blended",

  // ── 2. MEDIA ─────────────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual Java Full Stack assets
  thumbnail: {
    url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776075894/java_ngylwi.png",
    alt: "Java Full Stack Developer Course in Delhi - EduraIndia",
  },
  bannerImage: {
    url: "https://yourdomain.com/images/courses/java-full-stack-banner.jpg",
    alt: "Best Java Full Stack Course in Delhi - EduraIndia",
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_VIDEO_ID",

  // ── 3. COURSE STATS ───────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual values
  duration: "4-6 Months",
  totalLectures: 130,
  averageSalary: "₹4 LPA - ₹18 LPA",
  placementRate: "95%",
  studentsEnrolled: 420,
  rating: {
    average: 4.8,
    count: 115,
  },

  // ── 4. PRICING ───────────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual pricing
  price: {
    amount: 25000,
    currency: "INR",
    display: "₹25,000",
    originalPrice: 40000,
    emi: "₹2,500/month",
  },

  // ── 5. CURRICULUM PDF ─────────────────────────────────────────────
  curriculumPdfUrl: "https://yourdomain.com/pdfs/java-full-stack-curriculum.pdf",

  // ── 6. DESCRIPTIONS ───────────────────────────────────────────────
  // ✅ From Doc 8
  description:
    "Many aspiring developers struggle to bridge the gap between learning Java and building complete applications. This Java full stack developer course in Delhi solves that problem by offering hands-on projects and practical exercises. You will learn to handle both front-end and back-end development, work with databases, and understand deployment processes. If you are exploring a full stack developer course in Noida or a Java course in Delhi, this program prepares you for real-world software development with confidence and skill.",

  // ✅ From Doc 8
  description2:
    "Building a career in web and application development requires a strong foundation in Java technologies along with full stack development skills. The course covers everything from core Java, Spring Boot, and Hibernate to front-end frameworks and API integration. For learners searching for a Java full stack developer program or full stack Java course, this training emphasizes applied knowledge through live projects, helping you gain practical experience alongside theory.",

  // ✅ From Doc 8 — fixed key name from "description3" → descriptionHighlight
  descriptionHighlight:
    "By the end of this Java full stack course, you will be able to develop, test, and deploy fully functional web applications. Enroll at EduraIndia and become a skilled Java full stack developer ready for industry challenges.",

  // ── 7. OVERVIEW SECTION ───────────────────────────────────────────
  // ✅ From Doc 8 — was "overviewDescription" with 3 loose descriptions,
  //    restructured into proper overview object
  overview: {
    title: "Java Full Stack Developer Course",
    description: `Learning Java and full-stack development becomes straightforward when you follow a structured, hands-on approach. At EduraIndia, this Java full stack developer course is designed to take learners from core Java fundamentals to building complete web applications. Instead of just theory, students work on real projects, develop practical skills, and understand how front-end and back-end technologies integrate seamlessly. For those searching for a full stack developer course in Noida or a Java course in Delhi, this program offers a practical foundation with real-world exposure.

Becoming a successful Java full stack developer requires more than coding knowledge — it demands clarity, problem-solving, and applied learning. This full stack Java course emphasizes building robust applications while covering modern frameworks, databases, and best practices. Whether you are exploring a full stack Java course or a Java full stack syllabus online, the program balances flexibility with hands-on projects, preparing learners to excel in professional roles.

Choosing the right Java full stack training can make all the difference in your career growth. EduraIndia's Java full stack course guides learners through Java basics, advanced concepts, and full stack development projects. The course also provides insights into career opportunities, industry relevance, and the full stack developer path, helping you make informed decisions while mastering skills that employers seek in a Java full stack developer.`,
    // ⚠️ PLACEHOLDER — update with actual Java Full Stack image
    image: {
      url: "https://yourdomain.com/images/courses/java-full-stack-overview.jpg",
      alt: "Java Full Stack training session at EduraIndia Delhi",
    },
  },

  // ── 8. PREREQUISITES ──────────────────────────────────────────────
  // ⚠️ NOT in Doc 8 — inferred from course content
  prerequisites: [
    "Basic computer knowledge",
    "Basic internet usage knowledge",
    "Basic understanding of HTML & CSS (helpful but not required)",
    "No prior Java or backend experience required",
    "Logical thinking and problem-solving interest",
    "Willingness to practise coding regularly",
  ],

  // ── 9. KEY FEATURES ───────────────────────────────────────────────
  // ⚠️ NOT in Doc 8 — inferred from skillsCovered and overview
  keyFeatures: [
    "Core Java — OOPs, Data Structures & Exception Handling",
    "Front-End Development — HTML, CSS, JavaScript & JSP",
    "Back-End Development with Spring Boot & Hibernate",
    "Database Management — MySQL / PostgreSQL",
    "RESTful API Design & Integration",
    "User Authentication & Role-Based Access",
    "Full-Stack App Integration (Front + Back)",
    "Microservices Introduction",
    "Deployment on Cloud Platforms",
    "Real-Time Live Projects (E-commerce, Dashboards)",
    "Debugging & Clean Code Practices",
    "Portfolio Building & Career Module",
  ],

  // ── 10. SKILLS COVERED ────────────────────────────────────────────
  // ✅ From Doc 8 — shortened from verbose sentences to clean skill labels
  skillsCovered: [
    "Java & Spring Boot Basics — Core Java & OOPs",
    "Front-End Development — HTML, CSS, JavaScript & JSP",
    "Back-End Development — Server Logic with Java & Spring Boot",
    "Database Management — MySQL/PostgreSQL & CRUD Operations",
    "Front-End & Back-End Integration via Java APIs",
    "User Authentication & Role-Based Authorization",
    "RESTful API Design & JSON Data Handling",
    "Java Full Stack Project Structuring & Dependency Management",
    "Real-World Projects — E-commerce, Dashboards & Web Apps",
    "Debugging & Error Handling (Front-End & Back-End)",
    "Deployment on Cloud Servers",
    "Portfolio Creation with Java Full Stack Projects",
  ],

  // ── 11. TOOLS COVERED ─────────────────────────────────────────────
  // ⚠️ NOT in Doc 8 — inferred from skills and overview
  toolsCovered: [
    { name: "Java (Core & Advanced)", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776175644/java_nh8eug.png", alt: "Java logo" } },
    { name: "Spring Boot", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776175514/SpringBoot_drychl.png", alt: "Spring Boot logo" } },
    { name: "Hibernate", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776175494/Hibernate_e2spb7.png", alt: "Hibernate logo" } },
    { name: "MySQL", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072046/SQL_lf0esh.png", alt: "MySQL logo" } },
    { name: "IntelliJ", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776175522/IntelliJ_yv33r7.png", alt: "IntelliJ logo" } },
    { name: "Eclipse", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776175496/eclipse_d0sdhn.png", alt: "IntelliJ logo" } },
    { name: "Postman", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157905/postman_mkqg6r.png", alt: "Postman logo" } },
    { name: "GitHub", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157861/github_hggy4m.png", alt: "GitHub logo" } },
    { name: "Git", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157829/git_gty8wu.svg", alt: "GitHub logo" } },
    { name: "Java (Core & Advanced)", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776175644/java_nh8eug.png", alt: "Java logo" } },
    { name: "Spring Boot", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776175514/SpringBoot_drychl.png", alt: "Spring Boot logo" } },
    { name: "Hibernate", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776175494/Hibernate_e2spb7.png", alt: "Hibernate logo" } },
    { name: "MySQL", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072046/SQL_lf0esh.png", alt: "MySQL logo" } },
    { name: "IntelliJ", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776175522/IntelliJ_yv33r7.png", alt: "IntelliJ logo" } },
    { name: "Eclipse", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776175496/eclipse_d0sdhn.png", alt: "IntelliJ logo" } },
    { name: "Postman", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157905/postman_mkqg6r.png", alt: "Postman logo" } },
    { name: "GitHub", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157861/github_hggy4m.png", alt: "GitHub logo" } },
    { name: "Git", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776157829/git_gty8wu.svg", alt: "GitHub logo" } },
    { name: "ChatGPT / AI Tools", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072018/ChatGPT_d3ybhl.webp", alt: "ChatGPT logo" } },
  ],

  // ── 12. KEY TAKEAWAYS ─────────────────────────────────────────────
  // ⚠️ NOT in Doc 8 — inferred from course structure
  keyTakeaways: [
    "100% Placement Support",
    "Industry-Recognized Java Full Stack Certification",
    "Hands-on Live Projects & Portfolio",
    "Expert Industry Trainers",
    "Full-Stack Java Development Confidence",
    "Resume & Portfolio Building",
    "Soft Skills & Interview Preparation",
    "Lifetime Career Support",
    "Online & Offline Flexible Learning",
    "Real Client & Enterprise Projects",
  ],

  // ── 14. CAREER OPPORTUNITIES ──────────────────────────────────────
  // ✅ From Doc 8 — cleaned up verbose descriptions
  careerOpportunities: [
    { title: "Java Full Stack Developer", description: "Build complete web applications using Java, Spring Boot, and modern front-end frameworks." },
    { title: "Front-End Developer", description: "Design responsive and interactive user interfaces using HTML, CSS, and JavaScript." },
    { title: "Back-End Developer", description: "Handle server-side logic, database integration, and APIs using Java and Spring Boot." },
    { title: "Full Stack Web Developer", description: "Develop dynamic and scalable web applications by combining front-end and back-end technologies." },
    { title: "Freelance Java Developer", description: "Work independently on client projects, delivering complete web solutions using Java skills." },
    { title: "API Developer", description: "Design and implement RESTful APIs and integrate systems efficiently using Java." },
    { title: "Web Application Developer", description: "Plan, develop, and deploy modern web applications that are secure and user-friendly." },
    { title: "Technical Consultant", description: "Provide project guidance, development solutions, and technical support for enterprise applications." },
  ],

  // ── 15. CAREER JOURNEY ────────────────────────────────────────────
  // ✅ From Doc 8
  careerJourney: [
    { step: 1, role: "Java Full Stack Intern", experience: "0-6 months", salaryRange: "₹1L - ₹2.5L" },
    { step: 2, role: "Junior Java Full Stack Developer", experience: "6 months - 1 yr", salaryRange: "₹2.5L - ₹4L" },
    { step: 3, role: "Java Full Stack Developer", experience: "1-3 years", salaryRange: "₹4L - ₹7L" },
    { step: 4, role: "Senior Java Full Stack Developer", experience: "3-5 years", salaryRange: "₹7L - ₹12L" },
    { step: 5, role: "Lead Java Full Stack Developer / Consultant", experience: "5+ years", salaryRange: "₹12L - ₹20L+" },
  ],

  // ── 18. FAQs ──────────────────────────────────────────────────────
  // ✅ From Doc 8
  faqs: [
    {
      question: "Can I start a Java Full Stack course in Delhi without prior coding experience?",
      answer: "Yes! The Java Full Stack course in Delhi at EduraIndia is designed for beginners. Even if you have no prior programming knowledge, you will learn step by step from Java basics to full-stack development using hands-on projects.",
    },
    {
      question: "What will I learn in a full stack Java course?",
      answer: "This full stack Java course covers front-end and back-end development, including Java, Spring Boot, database integration, REST APIs, and deployment practices. You will gain practical skills to build complete web applications.",
    },
    {
      question: "Is the Java Full Stack syllabus more theoretical or practical?",
      answer: "The syllabus focuses on practical learning. You will work on real-world applications, implement full-stack features, and gain hands-on experience rather than only studying theory, ensuring job-ready skills.",
    },
    {
      question: "Do I get a certificate after completing the Java Full Stack course?",
      answer: "Yes, after completing the course at EduraIndia, you will receive a recognized certificate that validates your skills and helps you showcase your expertise for career opportunities or freelance projects.",
    },
    {
      question: "Do I need prior knowledge of web technologies to join a Java Full Stack developer course?",
      answer: "No prior experience is required. This course starts with programming fundamentals, covering Java basics and web development concepts, and gradually moves towards advanced full-stack development.",
    },
    {
      question: "What kind of projects will I work on in the Java Full Stack course?",
      answer: "You will work on live projects such as e-commerce platforms, dashboards, content management systems, and interactive web applications that mirror real industry requirements.",
    },
    {
      question: "Is learning Java Full Stack a good career option?",
      answer: "Absolutely! Java Full Stack developers are highly sought after. Completing a Java Full Stack course opens opportunities as back-end developers, front-end developers, full-stack engineers, or freelance Java developers.",
    },
    {
      question: "How long does a Java Full Stack course in Delhi typically take?",
      answer: "Full stack Java courses at EduraIndia typically range from 4 to 6 months depending on whether you choose part-time or full-time format with live projects.",
    },
    {
      question: "What are the fees for a full stack Java course in Delhi?",
      answer: "Fees vary depending on the program format. EduraIndia offers flexible options including online classes, classroom training in Delhi, and full certification programs at affordable rates.",
    },
    {
      question: "How do I choose the best Java Full Stack course in Delhi?",
      answer: "Choose a course that offers live project work, hands-on coding practice, expert guidance, industry-relevant syllabus, and certification support — all of which are available at EduraIndia.",
    },
  ],

  // ── 19. SEO ───────────────────────────────────────────────────────
  seo: {
    // ✅ From Doc 8 — title casing fixed
    metaTitle: "Java Full Stack Developer Course in Delhi at EduraIndia",
    metaDescription: "Join EduraIndia for a java full stack developer course in Delhi. Learn java full stack course, build skills, and become a confident full stack java developer.",
    keywords: [
      "java full stack developer course",
      "java full stack developer",
      "java full stack course",
      "java full stack",
      "full stack java developer course",
      "java full stack developer course in delhi",
    ],

    // ✅ FIXED — was pointing to digital marketing URL
    canonicalUrl: "https://eduraindia.com/courses/java-full-stack-course-delhi",

    // ✅ FIXED — was copy-pasted digital marketing content
    ogTitle: "Best Java Full Stack Developer Course in Delhi — EduraIndia",
    ogDescription: "Practical Java full stack training with Spring Boot, MySQL, REST APIs & live projects. Placement support. Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/java-full-stack-og.jpg", // 1200×630 px
      alt: "EduraIndia Java Full Stack Course Delhi",
    },

    // ✅ FIXED — was copy-pasted digital marketing content
    twitterTitle: "Java Full Stack Developer Course in Delhi | EduraIndia",
    twitterDescription: "Learn Java, Spring Boot, MySQL & front-end dev. Build real apps & become a full stack developer. Join EduraIndia.",
    twitterImage: {
      url: "https://yourdomain.com/images/og/java-full-stack-twitter.jpg",
      alt: "EduraIndia Java Full Stack Course",
    },
  },

  // ── 20. STATUS ────────────────────────────────────────────────────
  isActive: true,
  isFeatured: true,
  sortOrder: 7,
  badge: "High Demand",

  // ── 21. RELATED COURSES ───────────────────────────────────────────
  relatedCourses: [],
};


const adcaCourse = {

  // ── 1. BASIC INFO ────────────────────────────────────────────────
  title: "ADCA Course in Delhi",

  // ✅ Extracted from Doc 9's overviewDescription title (was not a top-level key)
  heroTitle: "Master ADCA Computer Course and Build Job-Ready Skills in Delhi",

  slug: "adca-course-delhi",
  category: "Computer Applications",
  level: "Foundation",
  language: "Hindi/English",
  mode: "Blended",

  // ── 2. MEDIA ─────────────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual ADCA course assets
  thumbnail: {
    url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776075884/advance_computer_wdtuwu.png",
    alt: "ADCA Course in Delhi - EduraIndia",
  },
  bannerImage: {
    url: "https://yourdomain.com/images/courses/adca-banner.jpg",
    alt: "Best ADCA Computer Course in Delhi - EduraIndia",
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_VIDEO_ID",

  // ── 3. COURSE STATS ───────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual values
  duration: "1-2 Years",
  totalLectures: 80,
  averageSalary: "₹1.5 LPA - ₹6 LPA",
  placementRate: "90%",
  studentsEnrolled: 680,
  rating: {
    average: 4.6,
    count: 175,
  },

  // ── 4. PRICING ───────────────────────────────────────────────────
  // ⚠️ PLACEHOLDER — update with actual pricing
  price: {
    amount: 15000,
    currency: "INR",
    display: "₹15,000",
    originalPrice: 25000,
    emi: "₹1,500/month",
  },

  // ── 5. CURRICULUM PDF ─────────────────────────────────────────────
  curriculumPdfUrl: "https://yourdomain.com/pdfs/adca-curriculum.pdf",

  // ── 6. DESCRIPTIONS ───────────────────────────────────────────────
  // ✅ Extracted from Doc 9's overviewDescription block (was not a top-level field)
  description:
    "Many learners face challenges in gaining practical computer skills needed for professional tasks. This ADCA computer course in Delhi addresses that by offering hands-on exercises, practical applications, and step-by-step guidance. You will learn essential computer operations, office tools, and digital workflows. For students searching for an ADCA course near me or exploring ADCA course in Delhi, this program ensures you gain industry-relevant skills confidently and efficiently.",

  // ✅ Extracted from Doc 9's overviewDescription block
  description2:
    "A strong foundation in computer applications is crucial for career growth across multiple sectors. This ADCA full course covers everything from MS Office, internet applications, and database basics to advanced office management techniques. For learners exploring ADCA course fees or planning to earn an ADCA certificate, this training emphasizes applied learning with live exercises, helping you gain practical experience alongside theoretical understanding.",

  // ✅ From Doc 9 — fixed key from "description3" → descriptionHighlight
  descriptionHighlight:
    "After completing this ADCA computer course, you will be able to efficiently handle office tasks, digital documentation, and basic data management. Enroll at EduraIndia to receive your ADCA certificate and start a productive career.",

  // ── 7. OVERVIEW SECTION ───────────────────────────────────────────
  // ✅ From Doc 9 — overviewDescription appeared TWICE (duplicate), kept better version,
  //    restructured into proper overview object
  overview: {
    title: "ADCA Computer Course",
    description: `Gaining essential computer skills is easier when you follow a structured and practical learning path. At EduraIndia, this ADCA computer course in Delhi is designed to guide learners from basic computer operations to advanced office applications. Instead of only theory, students engage in real exercises, work on projects, and understand essential tools and workflows. For those searching for an ADCA course near me or exploring an ADCA course in Delhi, this program provides practical knowledge with hands-on experience.

Building proficiency in digital tools and applications requires more than just watching tutorials — it needs applied learning, clarity, and practice. This ADCA full course covers everything from MS Office, internet usage, and database management to practical office solutions. Whether you are exploring ADCA course fees or planning to earn an ADCA certificate, the program emphasizes real-world exercises, helping learners gain confidence and skill for professional environments.

Selecting the right ADCA training can significantly impact your career readiness. EduraIndia's ADCA computer course guides students through foundational and advanced computer applications, office management, and real-world digital tasks. The course also highlights ADCA computer course fees, certification, and practical relevance, allowing learners to make informed choices while developing competencies that employers value in computer application professionals.`,
    // ⚠️ PLACEHOLDER — update with actual ADCA course image
    image: {
      url: "https://yourdomain.com/images/courses/adca-overview.jpg",
      alt: "ADCA Computer Course training session at EduraIndia Delhi",
    },
  },

  // ── 8. PREREQUISITES ──────────────────────────────────────────────
  // ⚠️ NOT in Doc 9 — inferred from course content
  prerequisites: [
    "Basic reading and writing ability",
    "No prior computer knowledge required",
    "Basic understanding of using a smartphone is helpful",
    "Willingness to learn digital tools from scratch",
    "10th pass or above (minimum qualification)",
    "Curiosity and interest in computer applications",
  ],

  // ── 9. KEY FEATURES ───────────────────────────────────────────────
  // ⚠️ NOT in Doc 9 — inferred from skillsCovered and overview
  keyFeatures: [
    "Computer Fundamentals & Basic Operations",
    "MS Word — Document Creation & Formatting",
    "MS Excel — Spreadsheets, Formulas & Charts",
    "MS PowerPoint — Presentations & Animations",
    "Internet, Email & Digital Communication",
    "Computer Typing Speed & Accuracy",
    "Basic Accounting with Tally",
    "Database Management Basics",
    "Digital Tools & Productivity Software",
    "Practical Office Projects & Case Studies",
    "ADCA Certificate upon Completion",
    "Career Guidance & Placement Support",
  ],

  // ── 10. SKILLS COVERED ────────────────────────────────────────────
  // ✅ From Doc 9 — shortened from verbose sentences to clean skill labels
  skillsCovered: [
    "Basic Computer Concepts & Fundamentals",
    "MS Word — Document Creation & Formatting",
    "MS Excel — Spreadsheets, Formulas & Charts",
    "MS PowerPoint — Presentations & Multimedia",
    "Internet & Email — Browsing & Professional Communication",
    "Computer Typing — Speed & Accuracy",
    "Basic Accounting Software — Tally & Office Tools",
    "Digital Productivity & Collaboration Tools",
    "Practical Office Projects & Case Studies",
    "Data Management — Organising & Storing Digital Data",
    "Problem Solving with Computer Tools",
    "Portfolio Compilation — ADCA Projects Showcase",
  ],

  // ── 11. TOOLS COVERED ─────────────────────────────────────────────
  // ⚠️ NOT in Doc 9 — inferred from skills and overview
  toolsCovered: [
    { name: "MS Word", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072039/MSword_cqmcu6.png", alt: "MS Word logo" } },
    { name: "MS Excel", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072035/MSexcel_kszfd0.png", alt: "MS Excel logo" } },
    { name: "MS PowerPoint", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072038/MSpowerpoint_uihney.png", alt: "MS PowerPoint logo" } },
    { name: "MS Access", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072034/MSaccess_sf5ytm.png", alt: "MS Access logo" } },
    { name: "Tally Prime", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776176218/tallyPrime_yc3gmu.avif", alt: "Tally Prime logo" } },
    { name: "Google Workspace", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776176208/GOOGLE_itxded.png", alt: "Google Workspace logo" } },
    { name: "Internet", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072027/internet_mkjbad.png", alt: "Internet & Email icon" } },
    { name: "Email", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072021/Email_jwssei.png", alt: "Internet & Email icon" } },
    { name: "MS Word", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072039/MSword_cqmcu6.png", alt: "MS Word logo" } },
    { name: "MS Excel", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072035/MSexcel_kszfd0.png", alt: "MS Excel logo" } },
    { name: "MS PowerPoint", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072038/MSpowerpoint_uihney.png", alt: "MS PowerPoint logo" } },
    { name: "MS Access", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072034/MSaccess_sf5ytm.png", alt: "MS Access logo" } },
    { name: "Tally Prime", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776176218/tallyPrime_yc3gmu.avif", alt: "Tally Prime logo" } },
    { name: "Google Workspace", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776176208/GOOGLE_itxded.png", alt: "Google Workspace logo" } },
    { name: "Internet", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072027/internet_mkjbad.png", alt: "Internet & Email icon" } },
    { name: "Email", image: { url: "https://res.cloudinary.com/de846sdih/image/upload/f_auto,q_auto,w_800/v1776072021/Email_jwssei.png", alt: "Internet & Email icon" } },
  ],

  // ── 12. KEY TAKEAWAYS ─────────────────────────────────────────────
  // ⚠️ NOT in Doc 9 — inferred from course structure
  keyTakeaways: [
    "Government-Recognised ADCA Certificate",
    "Placement & Career Support",
    "Hands-on Live Office Projects",
    "Expert Trainers with Industry Experience",
    "MS Office & Tally Mastery",
    "Resume & Portfolio Building",
    "Interview Preparation & Soft Skills",
    "Lifetime Career Guidance",
    "Online & Offline Flexible Learning",
    "Job-Ready Computer Application Skills",
  ],

  // ── 14. CAREER OPPORTUNITIES ──────────────────────────────────────
  // ✅ From Doc 9 — cleaned up verbose descriptions
  careerOpportunities: [
    { title: "Office Administrator", description: "Manage office tasks, organise files, and handle communication using practical computer skills." },
    { title: "Data Entry Operator", description: "Enter, manage, and maintain data accurately using spreadsheet and database tools." },
    { title: "IT Support Executive", description: "Provide basic technical support, troubleshoot software issues, and maintain office IT systems." },
    { title: "Computer Operator", description: "Operate computer systems for office tasks and handle documents digitally." },
    { title: "Administrative Assistant", description: "Support administrative functions, prepare reports, and manage office workflows." },
    { title: "Database Assistant", description: "Manage and maintain simple databases and generate reports for office use." },
    { title: "Office Automation Specialist", description: "Implement office automation tasks, create templates, and streamline digital processes." },
    { title: "Technical Coordinator", description: "Coordinate IT-related tasks, assist with software management, and support office operations." },
  ],

  // ── 15. CAREER JOURNEY ────────────────────────────────────────────
  // ✅ From Doc 9
  careerJourney: [
    { step: 1, role: "ADCA Intern", experience: "0-6 months", salaryRange: "₹1L - ₹2.5L" },
    { step: 2, role: "Junior Computer Operator", experience: "6 months - 1 yr", salaryRange: "₹2.5L - ₹4L" },
    { step: 3, role: "Data Entry Executive", experience: "1-3 years", salaryRange: "₹4L - ₹7L" },
    { step: 4, role: "Office Automation Specialist", experience: "3-5 years", salaryRange: "₹7L - ₹12L" },
    { step: 5, role: "Senior Administrative & IT Executive", experience: "5+ years", salaryRange: "₹12L - ₹20L+" },
  ],

  // ── 18. FAQs ──────────────────────────────────────────────────────
  // ✅ From Doc 9
  faqs: [
    {
      question: "Can I join an ADCA computer course in Delhi with no prior computer experience?",
      answer: "Yes! The ADCA course in Delhi at EduraIndia is designed for beginners. Even if you have little to no computer knowledge, the course starts from basics and gradually moves to advanced applications through practical exercises.",
    },
    {
      question: "What skills will I gain from the ADCA full course?",
      answer: "This ADCA full course covers essential computer concepts, MS Office, internet usage, email management, and basic programming. You will also learn practical applications that prepare you for office and professional work.",
    },
    {
      question: "Is the ADCA course more theoretical or practical?",
      answer: "The course emphasizes practical learning. You will work on hands-on projects, simulations, and real-world tasks, ensuring you gain confidence and job-ready skills instead of just studying theory.",
    },
    {
      question: "Do I receive an ADCA certificate after completing the course?",
      answer: "Yes, after completing the ADCA computer course at EduraIndia, you will receive a recognised ADCA certificate that validates your skills and enhances career or academic opportunities.",
    },
    {
      question: "Do I need prior computer knowledge to join an ADCA course near me?",
      answer: "No prior knowledge is needed. The ADCA course in Delhi at EduraIndia is structured to teach students from scratch, covering all fundamentals and gradually introducing advanced topics in a clear and practical manner.",
    },
    {
      question: "What kind of projects will I work on in the ADCA course?",
      answer: "You will engage in practical exercises like creating documents, spreadsheets, presentations, email handling, and basic digital projects. These hands-on tasks help reinforce learning effectively.",
    },
    {
      question: "Is learning ADCA a valuable career step?",
      answer: "Absolutely! Completing an ADCA course enhances your computer literacy, making you eligible for administrative roles, office jobs, and other professional opportunities where computer skills are essential.",
    },
    {
      question: "How long does an ADCA computer course typically take?",
      answer: "The ADCA course at EduraIndia typically ranges from 1 to 2 years depending on the mode of learning — part-time or full-time with hands-on training.",
    },
    {
      question: "What is the ADCA course fee and enrollment process?",
      answer: "ADCA course fees at EduraIndia are affordable and flexible. We provide online registration support and guidance on admission procedures to make enrollment simple.",
    },
    {
      question: "How do I choose the best ADCA course in Delhi?",
      answer: "Look for courses that provide hands-on practice, live exercises, a complete ADCA full course syllabus, certified trainers, and recognised certification — all of which are available at EduraIndia.",
    },
  ],

  // ── 19. SEO ───────────────────────────────────────────────────────
  seo: {
    // ✅ From Doc 9 — fixed double space "No1 Institute  for" → "#1 Institute for"
    metaTitle: "#1 Institute for ADCA Course in Delhi at EduraIndia",
    metaDescription: "Join EduraIndia for ADCA course in Delhi. Learn adca computer course, get adca certificate, explore adca course fees with practical training.",
    keywords: [
      "adca computer course",
      "adca course fees",
      "adca full course",
      "adca computer course fees",
      "adca certificate",
      "adca course",
      "adca course in delhi",
      "adca course near me",
      "adca",
    ],

    // ✅ FIXED — was pointing to digital marketing URL
    canonicalUrl: "https://eduraindia.com/courses/adca-course-delhi",

    // ✅ FIXED — was copy-pasted digital marketing content
    ogTitle: "Best ADCA Computer Course in Delhi — EduraIndia",
    ogDescription: "Practical ADCA training with MS Office, Tally, internet skills & certification. Career support included. Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/adca-og.jpg", // 1200×630 px
      alt: "EduraIndia ADCA Course Delhi",
    },

    // ✅ FIXED — was copy-pasted digital marketing content
    twitterTitle: "Best ADCA Course in Delhi | EduraIndia",
    twitterDescription: "Learn MS Office, Tally, internet & typing. Get ADCA certificate with placement support. Join EduraIndia Delhi.",
    twitterImage: {
      url: "https://yourdomain.com/images/og/adca-twitter.jpg",
      alt: "EduraIndia ADCA Course",
    },
  },

  // ── 20. STATUS ────────────────────────────────────────────────────
  isActive: true,
  isFeatured: true,
  sortOrder: 8,
  badge: "Best for Beginners",

  // ── 21. RELATED COURSES ───────────────────────────────────────────
  relatedCourses: [],
};
// ─────────────────────────────────────────────────────────────────
//  Seed function — upsert all courses (existing data safe rahega)
// ─────────────────────────────────────────────────────────────────
const allCourses = [digitalMarketing, dataAnalyst, graphicDesign, multimediaCourse,
  videoEditing, businessAnalystCourse, advancedExcelCourse, basicComputerCourse,
  seoCourse, googleAdsCourse, fullStackCourse, webDesigningCourse, pythonCourse, mernStack, javaFullStack, adcaCourse];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    for (const courseData of allCourses) {
      const result = await Course.findOneAndUpdate(
        { slug: courseData.slug },   // slug se find karo
        courseData,                  // is data se update karo
        { upsert: true, new: true }  // nahi mila toh create karo
      );
      console.log(`✅ Seeded: ${result.title} | ID: ${result._id}`);
    }

    console.log("\n🎉 All 3 courses seeded successfully!");
  } catch (err) {
    console.error("❌ Seed error:", err.message);
  } finally {
    mongoose.disconnect();
    console.log("🔌 MongoDB disconnected. Done.");
  }
}

seed();