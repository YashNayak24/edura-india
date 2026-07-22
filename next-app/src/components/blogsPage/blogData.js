"use client";
export const ARTICLES = [
  { id:1, cat:'Design',           catClass:'bg-[#E8F0FC] text-[#094E93]',   emoji:'🎨', illoAlt:false, imgBg:'linear-gradient(135deg,#1A3A9C,#2952CC)', title:'10 UI/UX Trends Designers Must Know in 2025',                       excerpt:"Glassmorphism is out. Bento grids are in. Here's a complete breakdown of the design trends shaping products this year — with real examples from top companies.", author:'Ankit Gupta',  authorBg:'#F5A623', initials:'AG', date:'Mar 28', read:'8 min',  views:14200, likes:342  },
  { id:2, cat:'Coding',           catClass:'bg-[#f1f5f9] text-[#475569]',   emoji:'💻', illoAlt:true,  imgBg:'linear-gradient(135deg,#0D1B35,#1E3A6E)', title:'Full Stack in 2025: The Honest Roadmap for Beginners',              excerpt:'React, Node, MongoDB, AWS — knowing what to learn and in what order is half the battle. This guide breaks it down month by month with free resources included.', author:'Rahul Sharma', authorBg:'#094E93', initials:'RS', date:'Mar 25', read:'11 min', views:22800, likes:589  },
  { id:3, cat:'Digital Marketing', catClass:'bg-[#fef3c7] text-[#d97706]',  emoji:'📊', illoAlt:false, imgBg:'linear-gradient(135deg,#7B2500,#C2600A)',  title:"How to Run Google Ads with ₹5,000: A Beginner's Playbook",         excerpt:"You don't need a big budget to get results from Google Ads. Here's a step-by-step guide to setting up, optimizing, and scaling your first campaign.", author:'Priya Mehta',  authorBg:'#0A5FAD', initials:'PM', date:'Mar 22', read:'9 min',  views:18500, likes:421  },
  { id:4, cat:'Career Tips',      catClass:'bg-[#dcfce7] text-[#16a34a]',   emoji:'🚀', illoAlt:true,  imgBg:'linear-gradient(135deg,#063A28,#0A6045)',  title:'From Fresher to ₹8 LPA: How Divya Got Placed in 90 Days',          excerpt:'A real SkillEdge alumni story — how Divya went from zero design experience to landing a UI/UX role at a Delhi startup, step by step.', author:'Sneha Verma',  authorBg:'#073E75', initials:'SV', date:'Mar 20', read:'6 min',  views:31400, likes:876  },
  { id:5, cat:'AI & Tech',        catClass:'bg-[#f3e8ff] text-[#7c3aed]',   emoji:'🤖', illoAlt:false, imgBg:'linear-gradient(135deg,#2D0E6B,#5B28C8)',  title:'ChatGPT Prompts Every Marketer Should Save Right Now',              excerpt:'50 battle-tested prompts for content creation, ad copy, email sequences, SEO, and social media — organized by use case with live examples.', author:'Priya Mehta',  authorBg:'#0A5FAD', initials:'PM', date:'Mar 18', read:'7 min',  views:41200, likes:1200 },
  { id:6, cat:'Stock Market',     catClass:'bg-[#f0fdfa] text-[#0d9488]',   emoji:'📈', illoAlt:true,  imgBg:'linear-gradient(135deg,#083530,#0B6054)',  title:'Understanding Candlestick Patterns: A Visual Guide for Beginners',  excerpt:'Before you can read the market, you need to read the charts. This visual guide walks through 12 essential candlestick patterns every new trader must know.', author:'Vikram Joshi', authorBg:'#16a34a', initials:'VJ', date:'Mar 15', read:'10 min', views:9800,  likes:234  },
  { id:7, cat:'Freelancing',      catClass:'bg-[#ffe4e6] text-[#e11d48]',   emoji:'💼', illoAlt:false, imgBg:'linear-gradient(135deg,#5C0A20,#A01535)',  title:'How to Get Your First Freelance Client Without a Portfolio',        excerpt:"The chicken-and-egg problem of freelancing — solved. Here's the exact strategy to land paid work when you have nothing to show yet.", author:'Ankit Gupta',  authorBg:'#F5A623', initials:'AG', date:'Mar 12', read:'8 min',  views:17300, likes:412  },
  { id:8, cat:'Design',           catClass:'bg-[#E8F0FC] text-[#094E93]',   emoji:'✏️', illoAlt:true,  imgBg:'linear-gradient(135deg,#1A3A9C,#2952CC)', title:'Figma vs Adobe XD in 2025: Which Should You Learn?',               excerpt:'Both tools have matured significantly. This honest comparison breaks down the learning curve, job market demand, and feature sets — so you can choose wisely.', author:'Ankit Gupta',  authorBg:'#F5A623', initials:'AG', date:'Mar 10', read:'6 min',  views:11400, likes:298  },
  { id:9, cat:'Coding',           catClass:'bg-[#f1f5f9] text-[#475569]',   emoji:'⚡', illoAlt:false, imgBg:'linear-gradient(135deg,#0D1B35,#1E3A6E)', title:'JavaScript Cheat Sheet: 30 Functions Every Dev Uses Daily',         excerpt:'Stop googling the same things. Here are 30 essential JavaScript snippets — from array methods to async/await patterns — that belong in your muscle memory.', author:'Rahul Sharma', authorBg:'#094E93', initials:'RS', date:'Mar 8',  read:'5 min',  views:28600, likes:731  },
]

export const TRENDING = [
  { title:'Is Freelancing Better Than a Job in 2025?',           cat:'Career',    views:'28K' },
  { title:'How to Build Your Portfolio Website for Free',         cat:'Design',    views:'19K' },
  { title:'Top 10 In-Demand Skills for 2025 (India)',             cat:'Career',    views:'45K' },
  { title:'Meta Ads vs Google Ads: Which Converts Better?',       cat:'Marketing', views:'17K' },
  { title:'Python or JavaScript First? Honest Answer',            cat:'Coding',    views:'33K' },
]

export const TAGS = ['SEO','React','Figma','Python','Google Ads','UI Design','Freelancing','Stock Market','Content Writing','Data Science','Canva','Resume Tips','LinkedIn','Interview Prep','Meta Ads','Node.js','Branding','Video Editing']

export const COURSES = [
  { emoji:'🎨', bg:'linear-gradient(135deg,#094E93,#0A5FAD)', name:'Graphic Design Pro',  meta:'6 months · ₹25,000', badge:'Design'    },
  { emoji:'📱', bg:'linear-gradient(135deg,#7c3aed,#a855f7)', name:'Digital Marketing',   meta:'4 months · ₹18,000', badge:'Marketing'  },
  { emoji:'💻', bg:'linear-gradient(135deg,#0f172a,#334155)', name:'Full Stack Web Dev',   meta:'8 months · ₹32,000', badge:'Coding'     },
]

export const SOCIALS = [
  { emoji:'📘', name:'Facebook',  count:'24.5K followers', bg:'#E8F0FC'  },
  { emoji:'📸', name:'Instagram', count:'18.2K followers', bg:'#fce7f3'  },
  { emoji:'💼', name:'LinkedIn',  count:'11.8K followers', bg:'#dbeafe'  },
  { emoji:'▶️', name:'YouTube',   count:'9.4K subscribers',bg:'#fee2e2' },
]

export const CATS = ['All Topics','Design','Coding','Digital Marketing','AI & Tech','Career Tips','Stock Market','Freelancing','Interview Prep']

export const MQ_ITEMS = ['Design','Coding','Digital Marketing','AI & Tools','Career Tips','Stock Market','UI/UX Design','Freelancing','Interview Prep','Data Science','Python','React','SEO','Google Ads','Resume Tips','Canva']

export const MUST_READ = [
  { title:'How to Get a Job With No Experience in India (2025 Guide)',   cat:'Career',    catCls:'bg-[#dcfce7] text-[#16a34a]', time:'8 min' },
  { title:'The Best Free Figma Plugins Every Designer Should Install',   cat:'Design',    catCls:'bg-[#E8F0FC] text-[#094E93]', time:'5 min' },
  { title:'Freelancing on Upwork vs Fiverr: What Nobody Tells You',      cat:'Career',    catCls:'bg-[#dcfce7] text-[#16a34a]', time:'9 min' },
  { title:'How to Write a Resume That Actually Gets Shortlisted',         cat:'Career',    catCls:'bg-[#dcfce7] text-[#16a34a]', time:'6 min' },
]

export const CAREER_CORNER = [
  { title:'LinkedIn Profile Tips That Recruiters Told Us Work Best',     cat:'Career',    catCls:'bg-[#dcfce7] text-[#16a34a]', time:'7 min'  },
  { title:'Mock Interview Questions for Digital Marketers in 2025',      cat:'Marketing', catCls:'bg-[#fef3c7] text-[#d97706]', time:'10 min' },
  { title:'Salary Negotiation Scripts That Work Every Time',              cat:'Career',    catCls:'bg-[#dcfce7] text-[#16a34a]', time:'5 min'  },
  { title:'How to Ace a Portfolio Presentation in 15 Minutes',            cat:'Design',    catCls:'bg-[#E8F0FC] text-[#094E93]', time:'6 min'  },
]