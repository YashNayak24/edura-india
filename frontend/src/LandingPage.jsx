import Carousel from './components/landingPage/Carousel'
import WhyChoose from './components/landingPage/WhyChoose'
import Advantage from './components/landingPage/Advantage'
import CareerSection from './components/landingPage/CareerSection'
import Courses from './components/landingPage/LandingCourses'
import Comparison from './components/landingPage/Comparison'
import ContactForm from './components/landingPage/ContactForm'
// import Footer from './components/landingPage/Footer'
// import WhatsAppBtn from './components/landingPage/WhatsAppBtn'
import PlacementSteps from './components/landingPage/PlacementSteps'
import Guidance from './components/landingPage/Guidance'
import HeroSection from './components/landingPage/HeroSection'
import AlumniReviews from './components/landingPage/AlumniReviews'
import PlacementNews from './components/landingPage/PlacementNews'
import Affiliations from './components/landingPage/Affiliations'


export default function LandingPage({ onEnquiryClick }) {
  return (
    <div className="font-jakarta">
      <HeroSection />
      {/* <Carousel /> */}
      <PlacementNews />

      <WhyChoose onEnquiryClick={onEnquiryClick} />
      <Guidance />
      <Affiliations/>
      <Courses />
      <PlacementSteps onEnquiryClick={onEnquiryClick} />
      {/* <Advantage /> */}
      {/* <CareerSection /> */}
      {/* <Comparison /> */}
      <ContactForm />
      <AlumniReviews />
      {/* <Footer /> */}
      {/* <WhatsAppBtn /> */}
    </div>
  )
}
