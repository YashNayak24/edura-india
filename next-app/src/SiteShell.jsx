"use client";

import { createContext, useContext, useState } from 'react';
import TopBar from './components/common/TopBar';
import AlertPopup from './components/common/AlertPopup';
import CoursePopup from './components/common/CoursePopup';
import Navbar from './components/common/Navbar';
import EnquiryPopup from './components/common/EnquiryPopup';
import BookDemoModal from './components/common/BookDemoModal';
import Footer from './components/common/Footer';
import WhatsAppBtn from './components/common/WhatsAppBtn';
import ScrollToTop from './ScrollToTop';

const SiteActionsContext = createContext(null);
export const useSiteActions = () => useContext(SiteActionsContext);

export default function SiteShell({ children }) {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showBookDemo, setShowBookDemo] = useState(false);
  const actions = { openEnquiry: () => setShowEnquiry(true), openBookDemo: () => setShowBookDemo(true) };

  return (
    <SiteActionsContext.Provider value={actions}>
      <ScrollToTop />
      <TopBar />
      <AlertPopup onEnquiryClick={() => setShowEnquiry(true)} onBookDemoClick={() => setShowBookDemo(true)} />
      <CoursePopup />
      <Navbar onEnquiryClick={() => setShowEnquiry(true)} />
      {children}
      <EnquiryPopup open={showEnquiry} onClose={() => setShowEnquiry(false)} />
      <BookDemoModal open={showBookDemo} onClose={() => setShowBookDemo(false)} />
      <Footer />
      <WhatsAppBtn />
    </SiteActionsContext.Provider>
  );
}
