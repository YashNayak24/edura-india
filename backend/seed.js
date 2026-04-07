const mongoose = require("mongoose");
const Course = require("./models/Course");
require("dotenv").config();



const digitalMarketing = {

  // ── 1. BASIC INFO ────────────────────────────────────────────────
  title: "Advanced Digital Marketing Course in Delhi",
  slug: "digital-marketing-course-delhi",
  category: "Digital Marketing",
  level: "Professional",
  language: "Hindi/English",
  mode: "Blended",

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
  // Primary short description (used in cards, meta fallback)
  description:
    "EduraIndia is the best digital marketing institute in Delhi offering a job-oriented advanced digital marketing course with practical training, SEO, Google Ads, and AI tools. Affordable digital marketing course fees with 100% placement support.",

  // Secondary description (used below hero / intro section)
  description2:
    "Join the best digital marketing institute in Delhi to learn an advanced digital marketing course with live projects and expert guidance. Our digital marketing course provides affordable rates without compromising on quality training from experienced mentors. Build your dream career with industry-standard learning at cost-effective fees.",

  // Short highlight description (used in banners / highlight cards)
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
    "Search Engine Optimization",   // ✅ Fixed — Doc 1 had an empty string here
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
    { name: "Google Analytics", image: { url: "https://yourdomain.com/images/tools/google-analytics.png", alt: "Google Analytics logo" } },
    { name: "Google Ads", image: { url: "https://yourdomain.com/images/tools/google-ads.png", alt: "Google Ads logo" } },
    { name: "Meta Ads Manager", image: { url: "https://yourdomain.com/images/tools/meta-ads.png", alt: "Meta Ads Manager logo" } },
    { name: "SEMrush", image: { url: "https://yourdomain.com/images/tools/semrush.png", alt: "SEMrush logo" } },
    { name: "Ahrefs", image: { url: "https://yourdomain.com/images/tools/ahrefs.png", alt: "Ahrefs logo" } },
    { name: "Mailchimp", image: { url: "https://yourdomain.com/images/tools/mailchimp.png", alt: "Mailchimp logo" } },
    { name: "Canva", image: { url: "https://yourdomain.com/images/tools/canva.png", alt: "Canva logo" } },
    { name: "WordPress", image: { url: "https://yourdomain.com/images/tools/wordpress.png", alt: "WordPress logo" } },
    { name: "Hootsuite", image: { url: "https://yourdomain.com/images/tools/hootsuite.png", alt: "Hootsuite logo" } },
    { name: "ChatGPT", image: { url: "https://yourdomain.com/images/tools/chatgpt.png", alt: "ChatGPT logo" } },
    { name: "Google Search Console", image: { url: "https://yourdomain.com/images/tools/search-console.png", alt: "Google Search Console logo" } },
    { name: "Hotjar", image: { url: "https://yourdomain.com/images/tools/hotjar.png", alt: "Hotjar logo" } },
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
  // ✅ Merged: Doc 1 had more detailed, EduraIndia-branded answers — used those
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
  // ✅ Merged: Combined best keywords from both documents
  seo: {
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
      "digital marketing course near me"

    ],
    canonicalUrl: "https://eduraindia.com/courses/digital-marketing-course-delhi",

    ogTitle: "Best Digital Marketing Course in Delhi — EduraIndia",
    ogDescription: "Job-oriented digital marketing training with live projects, AI tools & 100% placement support. South Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/digital-marketing-og.jpg",  // 1200×630 px
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
  // Add later when more courses are created
  relatedCourses: [],
};

const dataAnalyst = {

  // ── 1. BASIC INFO ────────────────────────────────────────────────
  title: "Advanced Data Analyst Course in Delhi",
  slug: "data-analyst-course-delhi",
  category: "Data Analytics",
  level: "Professional",
  language: "Hindi/English",
  mode: "Blended",

  // ── 2. MEDIA ─────────────────────────────────────────────────────
  thumbnail: {
    url: "https://yourdomain.com/images/courses/data-analyst-thumbnail.jpg",
    alt: "Advanced Data Analyst Course in Delhi - EduraIndia",
  },
  bannerImage: {
    url: "https://yourdomain.com/images/courses/data-analyst-banner.jpg",
    alt: "Best Data Analyst Institute in Delhi - EduraIndia",
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_VIDEO_ID",

  // ── 3. COURSE STATS ───────────────────────────────────────────────
  duration: "3-6 Months",
  totalLectures: 120,
  averageSalary: "₹5L - ₹15L PA",
  placementRate: "95%",
  studentsEnrolled: 980,
  rating: {
    average: 4.8,
    count: 260,
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
  curriculumPdfUrl: "https://yourdomain.com/pdfs/data-analyst-curriculum.pdf",

  // ── 6. DESCRIPTIONS ───────────────────────────────────────────────
  // Primary short description (used in cards, meta fallback)
  description:
    "EduraIndia is a leading institute offering a job-oriented data analyst course in Delhi with practical training in Excel, SQL, and Power BI. Learn with real projects, expert guidance, and affordable data analyst course fees with 100% placement support.",

  // Secondary description (used below hero / intro section)
  description2:
    "Join EduraIndia for a professional data analyst course with live projects and expert mentor support. We offer flexible learning options including online data analyst courses and live training sessions in Delhi at affordable fees to help you build a successful career.",

  // Short highlight description (used in banners / highlight cards)
  descriptionHighlight:
    "Begin your journey with a top data analyst course. Learn Excel, Power BI, and real-world skills with practical training to become job-ready.",

  // ── 7. OVERVIEW SECTION ───────────────────────────────────────────
  overview: {
    title: "Data Analyst Course",
    description: `In today's data-driven world, data analysis plays a crucial role in decision-making and business growth. At EduraIndia, known for offering a professional data analyst course in Delhi, our program is designed to provide students with both theoretical knowledge and practical skills required to succeed in the analytics industry.

This data analyst course covers the main key principles on how to collect, clean, visualize, and interpret data while using tools such as Excel, SQL, and Power BI for data analysts. Students will have the opportunity to gain real-life experience through our Excel course in Delhi and our dedicated Power BI course in Delhi, which provides a clear understanding of how data works in real businesses and their insights. Therefore, this course is ideal for those looking to begin a data analyst career, whether they have graduated from high school or are professionals aiming to develop their skills.

Our training approach focuses on practical learning through live projects and real-time case studies, ensuring students build strong analytical thinking. We also offer flexible learning options including data analyst course online and classroom training in Delhi, making it easier for students searching for a data analyst course near me. With expert trainers, affordable data analyst course fees, and placement support, EduraIndia helps you build a successful career in data analytics.`,
    image: {
      url: "https://yourdomain.com/images/courses/data-analyst-overview.jpg",
      alt: "Data Analyst training session at EduraIndia Delhi",
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
    "Data Analytics Fundamentals & Strategy",
    "Advanced Excel for Data Analysis",
    "SQL for Database Management",
    "Power BI Dashboard & Reporting",
    "Data Cleaning & Preparation",
    "Data Visualization Techniques",
    "Statistics for Data Analysis",
    "Business Intelligence Concepts",
    "Real-Time Live Projects",
    "Python Basics for Data Analysis",
    "Freelancing as a Data Analyst",
    "AI-Powered Analytics Tools",
  ],

  // ── 10. SKILLS COVERED ────────────────────────────────────────────
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
  toolsCovered: [
    { name: "Microsoft Excel", image: { url: "https://yourdomain.com/images/tools/excel.png", alt: "Microsoft Excel logo" } },
    { name: "Power BI", image: { url: "https://yourdomain.com/images/tools/power-bi.png", alt: "Power BI logo" } },
    { name: "SQL / MySQL", image: { url: "https://yourdomain.com/images/tools/sql.png", alt: "SQL MySQL logo" } },
    { name: "Python", image: { url: "https://yourdomain.com/images/tools/python.png", alt: "Python logo" } },
    { name: "Google Sheets", image: { url: "https://yourdomain.com/images/tools/google-sheets.png", alt: "Google Sheets logo" } },
    { name: "Tableau", image: { url: "https://yourdomain.com/images/tools/tableau.png", alt: "Tableau logo" } },
    { name: "ChatGPT", image: { url: "https://yourdomain.com/images/tools/chatgpt.png", alt: "ChatGPT logo" } },
    { name: "Google Data Studio", image: { url: "https://yourdomain.com/images/tools/google-data-studio.png", alt: "Google Data Studio logo" } },
    { name: "MS PowerPoint", image: { url: "https://yourdomain.com/images/tools/powerpoint.png", alt: "MS PowerPoint logo" } },
    { name: "Jupyter Notebook", image: { url: "https://yourdomain.com/images/tools/jupyter.png", alt: "Jupyter Notebook logo" } },
    { name: "PostgreSQL", image: { url: "https://yourdomain.com/images/tools/postgresql.png", alt: "PostgreSQL logo" } },
    { name: "Canva", image: { url: "https://yourdomain.com/images/tools/canva.png", alt: "Canva logo" } },
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
    "Microsoft & Power BI Certification Prep",
  ],

  // ── 14. CAREER OPPORTUNITIES ──────────────────────────────────────
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
  careerJourney: [
    { step: 1, role: "Data Analyst Intern", experience: "0-6 months", salaryRange: "₹1.5L - ₹3L" },
    { step: 2, role: "Junior Data Analyst", experience: "6 months - 1 yr", salaryRange: "₹3L - ₹5L" },
    { step: 3, role: "Data Analyst", experience: "1-3 years", salaryRange: "₹5L - ₹8L" },
    { step: 4, role: "Senior Data Analyst", experience: "3-5 years", salaryRange: "₹8L - ₹15L" },
    { step: 5, role: "Analytics Manager / Lead", experience: "5+ years", salaryRange: "₹15L - ₹25L+" },
  ],

  // ── 18. FAQs ──────────────────────────────────────────────────────
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
      answer: "Yes, you will receive an industry-recognized EduraIndia certification after completing the data analyst course, which helps validate your skills and improve job opportunities in the analytics field.",
    },
    {
      question: "Is Data Analytics a good career option in Delhi?",
      answer: "Yes, data analytics is a fast-growing career field in Delhi with increasing demand for skilled professionals across industries, offering strong salary growth and career stability. EduraIndia helps you build job-ready skills to tap into this demand.",
    },
    {
      question: "What is the fee for a Data Analyst Course in Delhi?",
      answer: "The data analyst course fees can range from ₹20,000 to ₹80,000 depending on the institute, course level, and whether it includes tools like Power BI and placement support. EMI options are available starting ₹2,500/month at EduraIndia.",
    },
    {
      question: "Does EduraIndia provide placement assistance?",
      answer: "Yes, EduraIndia provides 100% placement support including resume building, interview preparation, mock interviews, and direct job referrals to help students launch their careers.",
    },
    {
      question: "Do you offer online Data Analyst Course options?",
      answer: "Yes, EduraIndia offers online, offline, and blended (hybrid) modes for the data analyst course. You can choose the format that works best for your schedule and learning style.",
    },
    {
      question: "Can I get a job after completing a Data Analyst Course?",
      answer: "Yes, after completing a data analyst course, you can apply for roles like junior data analyst, business analyst, or data executive, especially if you have practical project experience from EduraIndia.",
    },
  ],

  // ── 19. SEO ───────────────────────────────────────────────────────
  seo: {
    metaTitle: "Best Data Analyst Course in Delhi | EduraIndia",
    metaDescription: "Join EduraIndia, the best institute for data analyst course in Delhi. Learn Excel, SQL, Power BI & AI tools with 100% placement support.",
    keywords: [
      "data analyst course fees",
      "what is data analyst course",
      "data analyst course in delhi",
      "data analyst course",
      "advanced data analyst course in delhi",
      "data analyst course after 12th",
      "data analyst course near me",
      "online data analyst course",
      "excel course in delhi",
      "power bi course in delhi",
    ],
    canonicalUrl: "https://eduraindia.com/courses/data-analyst-course-delhi",

    ogTitle: "Best Data Analyst Course in Delhi — EduraIndia",
    ogDescription: "Job-oriented data analyst training with live projects, Power BI, SQL & 100% placement support. South Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/data-analyst-og.jpg", // 1200×630 px
      alt: "EduraIndia Data Analyst Course Delhi",
    },

    twitterTitle: "Best Data Analyst Course in Delhi | EduraIndia",
    twitterDescription: "Learn Excel, SQL, Power BI & AI tools. 100% placement support. Join EduraIndia Delhi.",
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
  // Add later when more courses are created
  relatedCourses: [],
};

// ─────────────────────────────────────────────────────────────────
//  COURSE 1 — SEO Mastery Course
// ─────────────────────────────────────────────────────────────────
const seoMastery = {
  title: "Advanced SEO Course in Delhi",
  slug: "seo-course-delhi",
  category: "Digital Marketing",
  level: "Intermediate",
  language: "Hindi/English",
  mode: "Blended",

  thumbnail: {
    url: "https://yourdomain.com/images/courses/seo-thumbnail.jpg",
    alt: "Advanced SEO Course in Delhi - EduraIndia",
  },
  bannerImage: {
    url: "https://yourdomain.com/images/courses/seo-banner.jpg",
    alt: "Best SEO Institute in Delhi - EduraIndia",
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_SEO_VIDEO_ID",

  duration: "2-3 Months",
  totalLectures: 80,
  averageSalary: "₹3.5 LPA - ₹9 LPA",
  placementRate: "92%",
  studentsEnrolled: 860,
  rating: {
    average: 4.7,
    count: 210,
  },

  price: {
    amount: 18000,
    currency: "INR",
    display: "₹18,000",
    originalPrice: 30000,
    emi: "₹1,800/month",
  },

  curriculumPdfUrl: "https://yourdomain.com/pdfs/seo-curriculum.pdf",

  description:
    "EduraIndia's job-oriented SEO Course in Delhi covers On-Page SEO, Off-Page SEO, Technical SEO, Keyword Research, Google Search Console, and AI-based SEO tools. Practical training with 100% placement support.",

  description2:
    "Join the best SEO institute in Delhi and learn advanced search engine optimization techniques. Our SEO course includes live website audits, hands-on projects, and mentorship from industry experts.",

  descriptionHighlight:
    "Master SEO from scratch to advanced level with live projects, Google tools training, and placement support.",

  overview: {
    title: "Advanced SEO Course — Rank Higher, Earn More",
    description: `Search Engine Optimization (SEO) is the backbone of digital marketing and one of the most in-demand skills in the industry. At EduraIndia, our advanced SEO course in Delhi is designed to take students from zero to expert level through structured, practical training.

This course covers all critical aspects of SEO including On-Page optimization, Off-Page link building strategies, Technical SEO audits, Keyword Research using tools like Ahrefs and SEMrush, Local SEO, and Google Search Console mastery. Students will also learn how to use AI-powered tools to automate and enhance their SEO workflows.

Our expert trainers bring years of real-world experience, guiding you through live website projects and actual ranking strategies. With affordable SEO course fees and 100% placement support, EduraIndia is the top choice for SEO training in Delhi.`,
    image: {
      url: "https://yourdomain.com/images/courses/seo-overview.jpg",
      alt: "SEO training session at EduraIndia Delhi",
    },
  },

  prerequisites: [
    "Basic computer knowledge",
    "Basic internet browsing skills",
    "Understanding of what websites are",
    "Willingness to practice on real websites",
  ],

  keyFeatures: [
    "On-Page SEO — Title tags, Meta descriptions, Headers",
    "Off-Page SEO — Link building & Guest posting",
    "Technical SEO — Site speed, Crawlability, Schema markup",
    "Keyword Research using Ahrefs, SEMrush, Ubersuggest",
    "Google Search Console & Google Analytics 4",
    "Local SEO for Delhi-based businesses",
    "AI Tools for SEO — ChatGPT, SurferSEO",
    "Content Optimization & Semantic SEO",
    "E-commerce SEO strategies",
    "SEO Audit & Reporting",
  ],

  skillsCovered: [
    "On-Page SEO",
    "Off-Page SEO",
    "Technical SEO",
    "Keyword Research",
    "Link Building",
    "Local SEO",
    "Google Search Console",
    "Content Optimization",
    "SEO Auditing",
    "AI-Powered SEO",
  ],

  toolsCovered: [
    { name: "Ahrefs", image: { url: "https://yourdomain.com/images/tools/ahrefs.png", alt: "Ahrefs logo" } },
    { name: "SEMrush", image: { url: "https://yourdomain.com/images/tools/semrush.png", alt: "SEMrush logo" } },
    { name: "Google Search Console", image: { url: "https://yourdomain.com/images/tools/search-console.png", alt: "Google Search Console logo" } },
    { name: "Google Analytics", image: { url: "https://yourdomain.com/images/tools/google-analytics.png", alt: "Google Analytics logo" } },
    { name: "Ubersuggest", image: { url: "https://yourdomain.com/images/tools/ubersuggest.png", alt: "Ubersuggest logo" } },
    { name: "Screaming Frog", image: { url: "https://yourdomain.com/images/tools/screaming-frog.png", alt: "Screaming Frog logo" } },
    { name: "Yoast SEO", image: { url: "https://yourdomain.com/images/tools/yoast.png", alt: "Yoast SEO logo" } },
    { name: "ChatGPT", image: { url: "https://yourdomain.com/images/tools/chatgpt.png", alt: "ChatGPT logo" } },
    { name: "SurferSEO", image: { url: "https://yourdomain.com/images/tools/surferseo.png", alt: "SurferSEO logo" } },
    { name: "Moz Pro", image: { url: "https://yourdomain.com/images/tools/moz.png", alt: "Moz Pro logo" } },
  ],

  keyTakeaways: [
    "100% Placement Support",
    "Industry-Recognized Certification",
    "Live Website Projects",
    "Expert SEO Trainers",
    "AI SEO Tools Training",
    "Resume & Portfolio Building",
    "Interview Preparation",
    "Freelancing Guidance",
    "Google Certification Prep",
    "Lifetime Community Access",
  ],

  careerOpportunities: [
    { title: "SEO Specialist", description: "Optimize websites for top Google rankings and organic traffic growth." },
    { title: "SEO Analyst", description: "Analyze website performance, run audits and present data-driven reports." },
    { title: "Content SEO Strategist", description: "Plan and create SEO-optimized content calendars for brands." },
    { title: "Technical SEO Engineer", description: "Fix crawl errors, improve site speed and manage schema markup." },
    { title: "Local SEO Expert", description: "Help local businesses rank in Google Maps and local search results." },
    { title: "E-commerce SEO Manager", description: "Drive organic sales for Shopify, WooCommerce stores." },
    { title: "Freelance SEO Consultant", description: "Work independently with multiple clients across niches." },
    { title: "Agency SEO Lead", description: "Manage SEO campaigns for a portfolio of agency clients." },
  ],

  careerJourney: [
    { step: 1, role: "SEO Intern", experience: "0-6 months", salaryRange: "₹1L - ₹2L" },
    { step: 2, role: "SEO Executive", experience: "6 months - 1 yr", salaryRange: "₹2.5L - ₹4L" },
    { step: 3, role: "SEO Analyst", experience: "1-2 years", salaryRange: "₹4L - ₹6L" },
    { step: 4, role: "SEO Manager", experience: "3-5 years", salaryRange: "₹6L - ₹10L" },
    { step: 5, role: "Head of SEO / SEO Director", experience: "5+ years", salaryRange: "₹12L+" },
  ],

  faqs: [
    {
      question: "What is an SEO Course?",
      answer: "An SEO course teaches you how to optimize websites to rank higher on search engines like Google, driving organic traffic without paid ads.",
    },
    {
      question: "Is SEO still relevant in 2025?",
      answer: "Yes, SEO is more important than ever. With billions of searches happening daily, businesses need SEO experts to stay visible online.",
    },
    {
      question: "What is the duration of the SEO course at EduraIndia?",
      answer: "The SEO course at EduraIndia is 2 to 3 months long with hands-on live projects included throughout.",
    },
    {
      question: "Do I need coding knowledge for SEO?",
      answer: "No coding background is required for basic and intermediate SEO. For technical SEO, we teach the required basics as part of the course.",
    },
    {
      question: "Will I get a certificate after completing this SEO course?",
      answer: "Yes, you will receive an EduraIndia SEO certification and guidance for Google Analytics and Search Console certifications.",
    },
    {
      question: "Can I freelance after this SEO course?",
      answer: "Absolutely. SEO is one of the top freelancing skills. We have a dedicated module to help you find clients and build your freelance business.",
    },
    {
      question: "Does EduraIndia provide placement after the SEO course?",
      answer: "Yes, we offer 100% placement support including mock interviews, resume building, and direct referrals to hiring partners.",
    },
    {
      question: "What tools will I learn in this SEO course?",
      answer: "You will learn Ahrefs, SEMrush, Screaming Frog, Google Search Console, Google Analytics 4, SurferSEO, and AI-powered SEO tools.",
    },
  ],

  seo: {
    metaTitle: "Best SEO Course in Delhi | EduraIndia",
    metaDescription: "Join EduraIndia's advanced SEO course in Delhi. Learn On-Page, Off-Page, Technical SEO & AI tools with 100% placement support.",
    keywords: [
      "seo course in delhi",
      "advanced seo course delhi",
      "seo training institute delhi",
      "best seo course delhi",
      "seo course with placement delhi",
      "technical seo course delhi",
      "seo certification course delhi",
      "learn seo delhi",
    ],
    canonicalUrl: "https://eduraindia.com/courses/seo-course-delhi",
    ogTitle: "Best SEO Course in Delhi — EduraIndia",
    ogDescription: "Advanced SEO training with live projects, AI tools & 100% placement support in South Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/seo-og.jpg",
      alt: "EduraIndia SEO Course Delhi",
    },
    twitterTitle: "Best SEO Course in Delhi | EduraIndia",
    twitterDescription: "Learn On-Page, Off-Page & Technical SEO with AI tools. 100% placement support. Join EduraIndia Delhi.",
    twitterImage: {
      url: "https://yourdomain.com/images/og/seo-twitter.jpg",
      alt: "EduraIndia SEO Course",
    },
  },

  isActive: true,
  isFeatured: true,
  sortOrder: 2,
  badge: "Trending",
  relatedCourses: [],
};

// ─────────────────────────────────────────────────────────────────
//  COURSE 2 — Social Media Marketing Course
// ─────────────────────────────────────────────────────────────────
const socialMediaMarketing = {
  title: "Social Media Marketing Course in Delhi",
  slug: "social-media-marketing-course-delhi",
  category: "Digital Marketing",
  level: "Beginner to Advanced",
  language: "Hindi/English",
  mode: "Blended",

  thumbnail: {
    url: "https://yourdomain.com/images/courses/smm-thumbnail.jpg",
    alt: "Social Media Marketing Course in Delhi - EduraIndia",
  },
  bannerImage: {
    url: "https://yourdomain.com/images/courses/smm-banner.jpg",
    alt: "Best Social Media Marketing Institute in Delhi - EduraIndia",
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_SMM_VIDEO_ID",

  duration: "2-4 Months",
  totalLectures: 90,
  averageSalary: "₹3 LPA - ₹10 LPA",
  placementRate: "93%",
  studentsEnrolled: 1050,
  rating: {
    average: 4.6,
    count: 275,
  },

  price: {
    amount: 15000,
    currency: "INR",
    display: "₹15,000",
    originalPrice: 25000,
    emi: "₹1,500/month",
  },

  curriculumPdfUrl: "https://yourdomain.com/pdfs/smm-curriculum.pdf",

  description:
    "EduraIndia's Social Media Marketing Course in Delhi covers Instagram, Facebook, LinkedIn, YouTube, and Twitter marketing with Meta Ads, content strategy, influencer marketing, and analytics. Practical training with 100% placement support.",

  description2:
    "Learn to build powerful social media strategies for brands and businesses. Our SMM course includes live campaign creation, real account management practice, and expert-led sessions on paid social advertising.",

  descriptionHighlight:
    "Become a social media expert with hands-on training in Meta Ads, content creation, influencer marketing, and brand strategy.",

  overview: {
    title: "Social Media Marketing Course — Build Brands, Drive Engagement",
    description: `Social media has transformed how businesses connect with their audiences. At EduraIndia, our Social Media Marketing (SMM) Course in Delhi equips students with the skills to manage, grow, and monetize social media platforms for brands of all sizes.

This comprehensive course covers all major platforms including Instagram, Facebook, LinkedIn, YouTube, and Twitter. Students learn content strategy, organic growth tactics, paid advertising through Meta Ads Manager, influencer marketing, community management, and in-depth analytics to measure campaign performance.

Our trainers are working professionals who bring live case studies and real brand examples into every session. With EduraIndia's affordable fees and 100% placement support, this course is perfect for freshers, marketing enthusiasts, entrepreneurs, and career switchers looking to build a future in social media.`,
    image: {
      url: "https://yourdomain.com/images/courses/smm-overview.jpg",
      alt: "Social Media Marketing training session at EduraIndia Delhi",
    },
  },

  prerequisites: [
    "Basic smartphone and internet knowledge",
    "Active social media accounts (preferred)",
    "Basic English or Hindi reading ability",
    "No prior marketing experience required",
  ],

  keyFeatures: [
    "Instagram Marketing — Reels, Stories, Growth strategies",
    "Facebook Marketing — Pages, Groups, Ads",
    "Meta Ads Manager — Campaign creation & optimization",
    "LinkedIn Marketing for B2B brands",
    "YouTube Channel Strategy & Video SEO",
    "Twitter/X Marketing & Trending strategies",
    "Influencer Marketing campaigns",
    "Social Media Content Calendar planning",
    "Community Management & Brand Voice",
    "Analytics — Meta Insights, Social Blade, Sprout Social",
  ],

  skillsCovered: [
    "Instagram Marketing",
    "Facebook Ads",
    "Meta Ads Manager",
    "LinkedIn Marketing",
    "YouTube Marketing",
    "Content Strategy",
    "Influencer Marketing",
    "Social Media Analytics",
    "Community Management",
    "Paid Social Advertising",
  ],

  toolsCovered: [
    { name: "Meta Ads Manager", image: { url: "https://yourdomain.com/images/tools/meta-ads.png", alt: "Meta Ads Manager logo" } },
    { name: "Canva", image: { url: "https://yourdomain.com/images/tools/canva.png", alt: "Canva logo" } },
    { name: "Hootsuite", image: { url: "https://yourdomain.com/images/tools/hootsuite.png", alt: "Hootsuite logo" } },
    { name: "Buffer", image: { url: "https://yourdomain.com/images/tools/buffer.png", alt: "Buffer logo" } },
    { name: "Sprout Social", image: { url: "https://yourdomain.com/images/tools/sprout-social.png", alt: "Sprout Social logo" } },
    { name: "ChatGPT", image: { url: "https://yourdomain.com/images/tools/chatgpt.png", alt: "ChatGPT logo" } },
    { name: "Google Analytics", image: { url: "https://yourdomain.com/images/tools/google-analytics.png", alt: "Google Analytics logo" } },
    { name: "CapCut", image: { url: "https://yourdomain.com/images/tools/capcut.png", alt: "CapCut logo" } },
    { name: "Later", image: { url: "https://yourdomain.com/images/tools/later.png", alt: "Later logo" } },
    { name: "Social Blade", image: { url: "https://yourdomain.com/images/tools/social-blade.png", alt: "Social Blade logo" } },
  ],

  keyTakeaways: [
    "100% Placement Support",
    "Meta Certified Training Prep",
    "Live Brand Campaign Projects",
    "Expert Social Media Trainers",
    "AI Content Creation Skills",
    "Portfolio Development",
    "Interview Preparation",
    "Freelancing Module",
    "Alumni Network Access",
    "Influencer Strategy Mastery",
  ],

  careerOpportunities: [
    { title: "Social Media Manager", description: "Manage brand presence and campaigns across all major platforms." },
    { title: "Meta Ads Specialist", description: "Create and optimize paid campaigns on Facebook and Instagram." },
    { title: "Content Creator / Strategist", description: "Plan and produce engaging content for social channels." },
    { title: "Influencer Marketing Manager", description: "Identify influencers, run collaborations, and measure ROI." },
    { title: "Community Manager", description: "Build and manage engaged online communities for brands." },
    { title: "Social Media Analyst", description: "Track performance metrics and report campaign effectiveness." },
    { title: "Freelance Social Media Consultant", description: "Handle social media for multiple clients independently." },
    { title: "Brand Manager — Digital", description: "Lead brand storytelling and presence across digital platforms." },
  ],

  careerJourney: [
    { step: 1, role: "Social Media Intern", experience: "0-6 months", salaryRange: "₹1L - ₹2L" },
    { step: 2, role: "Social Media Executive", experience: "6 months - 1 yr", salaryRange: "₹2.5L - ₹4L" },
    { step: 3, role: "Social Media Manager", experience: "1-2 years", salaryRange: "₹4L - ₹7L" },
    { step: 4, role: "Head of Social Media", experience: "3-5 years", salaryRange: "₹8L - ₹12L" },
    { step: 5, role: "Digital Brand Director", experience: "5+ years", salaryRange: "₹15L+" },
  ],

  faqs: [
    {
      question: "What is a Social Media Marketing Course?",
      answer: "A Social Media Marketing course teaches you how to create, manage, and optimize content and paid campaigns on platforms like Instagram, Facebook, LinkedIn, and YouTube to grow brands.",
    },
    {
      question: "Who should join the SMM course at EduraIndia?",
      answer: "Students, freshers, entrepreneurs, content creators, and working professionals who want to build or switch to a career in social media marketing.",
    },
    {
      question: "What platforms are covered in the course?",
      answer: "The course covers Instagram, Facebook, LinkedIn, YouTube, Twitter/X, and emerging platforms. You also learn Meta Ads Manager for paid campaigns.",
    },
    {
      question: "Will I learn paid advertising in this course?",
      answer: "Yes. Meta Ads Manager is a core part of the curriculum. You will create, run, and optimize real ad campaigns during the training.",
    },
    {
      question: "Is content creation taught in this SMM course?",
      answer: "Yes. You will learn Canva, CapCut, and AI tools like ChatGPT to create graphics, Reels, and written content for social media.",
    },
    {
      question: "What is the fee for the Social Media Marketing course?",
      answer: "The course fee is ₹15,000 with EMI options available starting at ₹1,500/month, making it highly affordable.",
    },
    {
      question: "Does EduraIndia provide a certificate for this course?",
      answer: "Yes. You receive an EduraIndia SMM certification plus preparation guidance for Meta's official certifications.",
    },
    {
      question: "Can I manage clients freelance after this course?",
      answer: "Yes. Many students start handling social media for local businesses and startups after completing the course. We include a dedicated freelancing module.",
    },
  ],

  seo: {
    metaTitle: "Best Social Media Marketing Course in Delhi | EduraIndia",
    metaDescription: "Join EduraIndia's Social Media Marketing Course in Delhi. Learn Instagram, Facebook Ads, Meta Ads & influencer marketing with 100% placement support.",
    keywords: [
      "social media marketing course in delhi",
      "smm course delhi",
      "instagram marketing course delhi",
      "facebook ads course delhi",
      "meta ads training delhi",
      "social media course with placement delhi",
      "best smm institute delhi",
      "social media marketing certification delhi",
    ],
    canonicalUrl: "https://eduraindia.com/courses/social-media-marketing-course-delhi",
    ogTitle: "Best Social Media Marketing Course in Delhi — EduraIndia",
    ogDescription: "Learn Instagram, Meta Ads & influencer marketing with live projects and 100% placement support at EduraIndia Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/smm-og.jpg",
      alt: "EduraIndia Social Media Marketing Course Delhi",
    },
    twitterTitle: "Social Media Marketing Course in Delhi | EduraIndia",
    twitterDescription: "Master Instagram, Facebook Ads & content strategy. 100% placement support. Join EduraIndia Delhi.",
    twitterImage: {
      url: "https://yourdomain.com/images/og/smm-twitter.jpg",
      alt: "EduraIndia SMM Course",
    },
  },

  isActive: true,
  isFeatured: true,
  sortOrder: 3,
  badge: "Hot",
  relatedCourses: [],
};

// ─────────────────────────────────────────────────────────────────
//  COURSE 3 — Google Ads (PPC) Course
// ─────────────────────────────────────────────────────────────────
const googleAdsPPC = {
  title: "Google Ads & PPC Course in Delhi",
  slug: "google-ads-ppc-course-delhi",
  category: "Digital Marketing",
  level: "Intermediate",
  language: "Hindi/English",
  mode: "Blended",

  thumbnail: {
    url: "https://yourdomain.com/images/courses/google-ads-thumbnail.jpg",
    alt: "Google Ads PPC Course in Delhi - EduraIndia",
  },
  bannerImage: {
    url: "https://yourdomain.com/images/courses/google-ads-banner.jpg",
    alt: "Best Google Ads Training Institute in Delhi - EduraIndia",
  },
  videoPreview: "https://www.youtube.com/embed/YOUR_GOOGLE_ADS_VIDEO_ID",

  duration: "6 Weeks - 2 Months",
  totalLectures: 60,
  averageSalary: "₹4 LPA - ₹11 LPA",
  placementRate: "91%",
  studentsEnrolled: 720,
  rating: {
    average: 4.8,
    count: 185,
  },

  price: {
    amount: 12000,
    currency: "INR",
    display: "₹12,000",
    originalPrice: 20000,
    emi: "₹1,200/month",
  },

  curriculumPdfUrl: "https://yourdomain.com/pdfs/google-ads-curriculum.pdf",

  description:
    "EduraIndia's Google Ads & PPC Course in Delhi covers Search Ads, Display Ads, Shopping Ads, YouTube Ads, Remarketing, and Conversion Tracking with live campaign practice. Google Ads Certification preparation included.",

  description2:
    "Master performance marketing with EduraIndia's hands-on Google Ads course. Learn to manage real ad budgets, run profitable campaigns, and prepare for the Google Ads certification exam.",

  descriptionHighlight:
    "Become a certified Google Ads specialist with live campaign training, budget management, and placement support.",

  overview: {
    title: "Google Ads & PPC Course — Master Performance Marketing",
    description: `Pay-Per-Click (PPC) advertising through Google Ads is one of the most powerful ways to drive targeted traffic and generate leads for businesses. At EduraIndia, our Google Ads & PPC Course in Delhi is designed to give students a complete, practical understanding of running profitable Google campaigns.

This course covers the full Google Ads ecosystem including Search Campaigns, Display Network, Shopping Ads, YouTube Video Ads, Remarketing, Smart Campaigns, and Performance Max. Students learn keyword match types, bidding strategies, Quality Score optimization, A/B testing, conversion tracking setup, and detailed reporting using Google Ads and Google Analytics 4.

All training is done using real ad accounts and live campaigns so students experience actual budget management and optimization. EduraIndia's expert trainers prepare you for the Google Ads Search and Display certifications, giving you credentials that employers and clients trust.`,
    image: {
      url: "https://yourdomain.com/images/courses/google-ads-overview.jpg",
      alt: "Google Ads PPC training session at EduraIndia Delhi",
    },
  },

  prerequisites: [
    "Basic computer and internet skills",
    "Basic understanding of marketing concepts",
    "A Google account for hands-on practice",
    "No prior PPC experience needed",
  ],

  keyFeatures: [
    "Google Search Campaigns — keyword targeting & match types",
    "Display Network — banner ad creation & targeting",
    "Shopping Ads — Google Merchant Center setup",
    "YouTube Video Ads — TrueView, Bumper, Discovery",
    "Remarketing & Audience targeting strategies",
    "Performance Max campaigns",
    "Conversion Tracking — Google Tag Manager setup",
    "Bidding Strategies — Manual CPC, Target CPA, ROAS",
    "Quality Score & Ad Rank optimization",
    "Google Ads Certification Exam preparation",
  ],

  skillsCovered: [
    "Google Search Ads",
    "Display Advertising",
    "Shopping Campaigns",
    "YouTube Ads",
    "Remarketing",
    "Conversion Tracking",
    "Keyword Research & Bidding",
    "A/B Testing Ads",
    "Performance Max",
    "Google Analytics 4",
  ],

  toolsCovered: [
    { name: "Google Ads", image: { url: "https://yourdomain.com/images/tools/google-ads.png", alt: "Google Ads logo" } },
    { name: "Google Analytics", image: { url: "https://yourdomain.com/images/tools/google-analytics.png", alt: "Google Analytics logo" } },
    { name: "Google Tag Manager", image: { url: "https://yourdomain.com/images/tools/google-tag-manager.png", alt: "Google Tag Manager logo" } },
    { name: "Google Merchant Center", image: { url: "https://yourdomain.com/images/tools/merchant-center.png", alt: "Google Merchant Center logo" } },
    { name: "Google Keyword Planner", image: { url: "https://yourdomain.com/images/tools/keyword-planner.png", alt: "Google Keyword Planner logo" } },
    { name: "SEMrush", image: { url: "https://yourdomain.com/images/tools/semrush.png", alt: "SEMrush logo" } },
    { name: "Optmyzr", image: { url: "https://yourdomain.com/images/tools/optmyzr.png", alt: "Optmyzr logo" } },
    { name: "ChatGPT", image: { url: "https://yourdomain.com/images/tools/chatgpt.png", alt: "ChatGPT logo" } },
    { name: "Canva", image: { url: "https://yourdomain.com/images/tools/canva.png", alt: "Canva logo" } },
    { name: "Looker Studio", image: { url: "https://yourdomain.com/images/tools/looker-studio.png", alt: "Looker Studio logo" } },
  ],

  keyTakeaways: [
    "100% Placement Support",
    "Google Ads Certification Prep",
    "Live Campaign Management",
    "Expert PPC Trainers",
    "Real Budget Training",
    "Resume & Portfolio Building",
    "Mock Interviews",
    "Freelancing Guidance",
    "Performance Reporting Skills",
    "Google Analytics 4 Training",
  ],

  careerOpportunities: [
    { title: "Google Ads Specialist", description: "Create and manage Search, Display, and Shopping campaigns for clients." },
    { title: "PPC Analyst", description: "Monitor campaign performance, optimize bids and report ROI." },
    { title: "Performance Marketing Executive", description: "Run paid campaigns across Google and Meta for lead generation." },
    { title: "Digital Advertising Manager", description: "Lead paid media strategy for brands and agencies." },
    { title: "E-commerce PPC Expert", description: "Manage Google Shopping and Performance Max for online stores." },
    { title: "Paid Media Strategist", description: "Plan multi-channel paid advertising budgets and strategies." },
    { title: "Freelance PPC Consultant", description: "Manage Google Ads accounts for businesses independently." },
    { title: "Agency Campaign Manager", description: "Handle multiple client accounts at a digital marketing agency." },
  ],

  careerJourney: [
    { step: 1, role: "PPC Intern", experience: "0-6 months", salaryRange: "₹1.2L - ₹2.4L" },
    { step: 2, role: "Google Ads Executive", experience: "6 months - 1 yr", salaryRange: "₹3L - ₹5L" },
    { step: 3, role: "PPC Analyst / Specialist", experience: "1-2 years", salaryRange: "₹5L - ₹7L" },
    { step: 4, role: "Paid Media Manager", experience: "3-5 years", salaryRange: "₹8L - ₹12L" },
    { step: 5, role: "Head of Performance Marketing", experience: "5+ years", salaryRange: "₹15L+" },
  ],

  faqs: [
    {
      question: "What is a Google Ads / PPC Course?",
      answer: "A Google Ads course teaches you to create and manage paid advertising campaigns on Google Search, Display, YouTube, and Shopping — where you pay only when someone clicks your ad.",
    },
    {
      question: "Is Google Ads certification included in this course?",
      answer: "Yes. The course curriculum is aligned with the official Google Ads certification exams. You receive full preparation and guidance to pass the Google Ads Search and Display certifications.",
    },
    {
      question: "Do I need any prior experience to join this PPC course?",
      answer: "No. The course starts from the basics and progresses to advanced campaign management. A basic understanding of marketing is helpful but not required.",
    },
    {
      question: "Will I manage real Google Ads campaigns during training?",
      answer: "Yes. EduraIndia provides hands-on training with real ad accounts where you manage actual live campaigns under trainer supervision.",
    },
    {
      question: "What is the fee for the Google Ads course in Delhi?",
      answer: "The fee is ₹12,000 with EMI options starting at ₹1,200/month. This includes all study materials, live campaign practice, and placement support.",
    },
    {
      question: "How long is the Google Ads course at EduraIndia?",
      answer: "The course duration is 6 weeks to 2 months, designed for intensive and focused learning with live sessions and project work.",
    },
    {
      question: "What jobs can I get after completing the Google Ads course?",
      answer: "You can work as a Google Ads Specialist, PPC Analyst, Performance Marketing Executive, or Paid Media Manager at agencies, startups, or corporates.",
    },
    {
      question: "Can I freelance as a Google Ads expert after this course?",
      answer: "Yes. Many of our students freelance managing Google Ads for local businesses and e-commerce stores. We include freelancing setup guidance in the course.",
    },
  ],

  seo: {
    metaTitle: "Best Google Ads & PPC Course in Delhi | EduraIndia",
    metaDescription: "Join EduraIndia's Google Ads & PPC Course in Delhi. Learn Search, Display, Shopping & YouTube Ads with real campaign practice. Google Certification prep included.",
    keywords: [
      "google ads course in delhi",
      "ppc course delhi",
      "google ads training delhi",
      "performance marketing course delhi",
      "google ads certification delhi",
      "paid advertising course delhi",
      "google ads course with placement",
      "best ppc institute delhi",
    ],
    canonicalUrl: "https://eduraindia.com/courses/google-ads-ppc-course-delhi",
    ogTitle: "Best Google Ads & PPC Course in Delhi — EduraIndia",
    ogDescription: "Master Google Search, Display & YouTube Ads with live campaign training and Google Certification prep at EduraIndia Delhi.",
    ogImage: {
      url: "https://yourdomain.com/images/og/google-ads-og.jpg",
      alt: "EduraIndia Google Ads PPC Course Delhi",
    },
    twitterTitle: "Google Ads & PPC Course in Delhi | EduraIndia",
    twitterDescription: "Learn Google Ads, Shopping & YouTube Ads. Real campaign practice + Google Certification prep. Join EduraIndia Delhi.",
    twitterImage: {
      url: "https://yourdomain.com/images/og/google-ads-twitter.jpg",
      alt: "EduraIndia Google Ads Course",
    },
  },

  isActive: true,
  isFeatured: false,
  sortOrder: 4,
  badge: "New",
  relatedCourses: [],
};

// ─────────────────────────────────────────────────────────────────
//  Seed function — upsert all courses (existing data safe rahega)
// ─────────────────────────────────────────────────────────────────
const allCourses = [digitalMarketing, seoMastery, socialMediaMarketing, googleAdsPPC, dataAnalyst];

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