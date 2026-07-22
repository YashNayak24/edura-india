import CourseView from '../../../src/views/CourseView';
import { getCourseBySlug } from '../../../lib/courses';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) return {};
  const seo = course.seo || {};
  const canonical = seo.canonicalUrl || `https://eduraindia.com/courses/${course.slug}`;
  return {
    title: seo.metaTitle || `${course.title} | EduraIndia`,
    description: seo.metaDescription || course.description,
    keywords: seo.keywords,
    robots: { index: true, follow: true },
    alternates: { canonical },
    openGraph: { title: seo.ogTitle || course.title, description: seo.ogDescription || course.description, images: [seo.ogImage?.url || course.bannerImage?.url].filter(Boolean), type:'website', url: canonical },
    twitter: { card:'summary_large_image', title:seo.twitterTitle || course.title, description:seo.twitterDescription || course.description, images:[seo.twitterImage?.url || seo.ogImage?.url].filter(Boolean) },
  };
}

export default async function CoursePage({ params }) {
  const { slug }=await params;
  const course=await getCourseBySlug(slug);
  if(!course) notFound();
  const seo=course.seo||{};
  const canonical=seo.canonicalUrl||`https://eduraindia.com/courses/${course.slug}`;
  const schemas=[
    {'@context':'https://schema.org','@type':'Course',name:course.title,description:seo.metaDescription||course.description,url:canonical,image:course.thumbnail?.url,inLanguage:course.language||'hi-IN',educationalLevel:course.level,provider:{'@type':'Organization',name:'EduraIndia',sameAs:'https://eduraindia.com'},hasCourseInstance:{'@type':'CourseInstance',courseMode:course.mode==='Online'?'online':course.mode==='Offline'?'onsite':'blended',location:{'@type':'Place',name:'EduraIndia, South Delhi'}},...(course.price?.amount&&{offers:{'@type':'Offer',price:course.price.amount,priceCurrency:course.price.currency||'INR',availability:'https://schema.org/InStock'}})},
    ...(course.faqs?.length?[{'@context':'https://schema.org','@type':'FAQPage',mainEntity:course.faqs.map(f=>({'@type':'Question',name:f.question,acceptedAnswer:{'@type':'Answer',text:f.answer}}))}]:[]),
    {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://eduraindia.com'},{'@type':'ListItem',position:2,name:'Courses',item:'https://eduraindia.com/courses'},{'@type':'ListItem',position:3,name:course.title,item:canonical}]}
  ];
  return <>{schemas.map((schema,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>)}<CourseView initialCourse={course}/></>;
}
