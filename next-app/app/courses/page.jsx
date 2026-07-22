import Courses from '../../src/Courses';
import { getActiveCourses } from '../../lib/courses';

export const metadata = {
  title: 'All Courses | Best Institute in Delhi — EduraIndia',
  description: 'Explore 125+ courses in Digital Marketing, Design, Coding, AI & Degree Programs at EduraIndia Delhi. 100% placement support.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'All Courses — EduraIndia Delhi',
    description: "125+ professional courses with placement support. Join EduraIndia, Delhi's top institute.",
    type: 'website',
  },
};

export default async function CoursesPage() {
  const schema = { '@context':'https://schema.org', '@type':'BreadcrumbList', itemListElement:[
    { '@type':'ListItem', position:1, name:'Home', item:'https://eduraindia.com' },
    { '@type':'ListItem', position:2, name:'Courses', item:'https://eduraindia.com/courses' },
  ]};
  let initialCourses=[];try{initialCourses=await getActiveCourses()}catch{}
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><Courses initialCourses={initialCourses} /></>;
}
