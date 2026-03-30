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
import CoursePopup from "./components/common/CoursePopup";
import WhatsAppBtn from "./components/common/WhatsAppBtn";
import Footer from "./components/common/Footer";
import NotFound from "./NotFound";
import Blogs from "./Blogs";


export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <Router>
        <TopBar />
        <AlertPopup />
        <CoursePopup />
        <Navbar onEnquiryClick={() => setShowPopup(true)} />
        <Routes>
          <Route path='/' element={<LandingPage onEnquiryClick={() => setShowPopup(true)} />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound onEnquiryClick={() => setShowPopup(true)} />} />


        </Routes>
        <EnquiryPopup
          open={showPopup}
          onClose={() => setShowPopup(false)}
        />
        <Footer />
        <WhatsAppBtn />
      </Router>
    </>
  )
}