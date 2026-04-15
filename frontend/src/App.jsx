import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import TopBar from './components/common/TopBar';
import LandingPage from './LandingPage';
import Contact from './Contact';
import Courses from './Courses';
import CourseDetails from './CourseDetails';
import About from './About';
import EnquiryPopup from "./components/common/EnquiryPopup";
import AlertPopup from "./components/common/AlertPopup";
import BookDemoModal from "./components/common/BookDemoModal";   // ← import
import CoursePopup from "./components/common/CoursePopup";
import WhatsAppBtn from "./components/common/WhatsAppBtn";
import Footer from "./components/common/Footer";
import NotFound from "./NotFound";
import Blogs from "./Blogs";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  const [showEnquiry,  setShowEnquiry]  = useState(false)
  const [showBookDemo, setShowBookDemo] = useState(false)   // ← naya state

  const openEnquiry  = () => setShowEnquiry(true)
  const openBookDemo = () => setShowBookDemo(true)          // ← naya handler

  return (
    <>
      <Router>
        <ScrollToTop />
        <TopBar />
        <AlertPopup
          onEnquiryClick={openEnquiry}
          onBookDemoClick={openBookDemo}     
        />
        <CoursePopup />
        <Navbar onEnquiryClick={openEnquiry} />
        <Routes>
          <Route path='/' element={<LandingPage onEnquiryClick={openEnquiry} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About onBookDemoClick={openBookDemo} />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetails onEnquiryClick={openEnquiry} onBookDemoClick={openBookDemo} />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound onBookDemoClick={openBookDemo} />} />
        </Routes>
        <EnquiryPopup
          open={showEnquiry}
          onClose={() => setShowEnquiry(false)}
        />
        <BookDemoModal                         
          open={showBookDemo}
          onClose={() => setShowBookDemo(false)}
        />
        <Footer />
        <WhatsAppBtn />
      </Router>
    </>
  )
}