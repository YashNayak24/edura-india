import BlogHero    from './components/blogsPage/BlogHero'
import BlogContent  from './components/blogsPage/BlogContent'

export default function Blogs() {
  return (
    <div className="font-jakarta bg-[#F0F4FA] text-[#0A1628] min-h-screen">
      <BlogHero />
      <BlogContent />
    </div>
  )
}