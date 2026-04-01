// import Carousel from './components/landingPage/Carousel'
import WhyChoose from './components/landingPage/WhyChoose'
import Courses from './components/landingPage/LandingCourses'
import ContactForm from './components/landingPage/ContactForm'
import PlacementSteps from './components/landingPage/PlacementSteps'
import Guidance from './components/landingPage/Guidance'
import HeroSection from './components/landingPage/HeroSection'
import AlumniReviews from './components/landingPage/AlumniReviews'
import PlacementNews from './components/landingPage/PlacementNews'
// import Affiliations from './components/landingPage/Affiliations'


export default function LandingPage({ onEnquiryClick }) {
  return (
    <div className="font-jakarta">
      {/* <Carousel /> */}
      <HeroSection />
      <PlacementNews />
      <WhyChoose onEnquiryClick={onEnquiryClick} />
      <Guidance />
      {/* <Affiliations/> */}
      <Courses />
      <PlacementSteps onEnquiryClick={onEnquiryClick} />
      <ContactForm />
      <AlumniReviews />
    </div>
  )
}
