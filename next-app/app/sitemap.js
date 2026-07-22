import { getActiveCourses } from '../lib/courses';
export default async function sitemap(){const base=process.env.NEXT_PUBLIC_SITE_URL||'https://eduraindia.com';let courses=[];try{courses=await getActiveCourses()}catch{}return [
  {url:`${base}/`,changeFrequency:'weekly',priority:1},
  {url:`${base}/courses`,changeFrequency:'weekly',priority:.9},
  {url:`${base}/about`,changeFrequency:'monthly',priority:.7},
  {url:`${base}/contact`,changeFrequency:'monthly',priority:.7},
  {url:`${base}/blog`,changeFrequency:'daily',priority:.8},
  ...courses.map(c=>({url:`${base}/courses/${c.slug}`,lastModified:c.updatedAt,changeFrequency:'monthly',priority:.85}))
]}
