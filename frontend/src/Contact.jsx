import ContactHero    from './components/contactPage/ContactHero'
import ContactCards   from './components/contactPage/ContactCards'
import MainGrid       from './components/contactPage/MainGrid'
import BottomSection  from './components/contactPage/BottomSection'
import WaFloat        from './components/contactPage/WaFloat'

export default function Contact() {
  return (
    <div className="font-jakarta bg-white overflow-x-hidden">
      <ContactHero />
      <div className="max-w-[1160px] mx-auto px-4 sm:px-7">
        <ContactCards />
        <MainGrid />
        <BottomSection />
      </div>
      <WaFloat />
    </div>
  )
}