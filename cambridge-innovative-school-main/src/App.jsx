import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css';
import Footer from './components/Footer';
import Check from './components/Check';
import SectionFirst from './components/SectionFirst';
import Review from './components/Review';
import Features from './components/Features';
import Principal from './components/Principal';
import AboutSection from './components/AboutSection';
import Campus from './components/Campus';
import StatsSection from './components/StatsSection';
import AdmissionSection from './components/AdmissionSection';
import GallerySection from './components/GallerySection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';

const App = () => {
  return (
    <div className='min-h-screen bg-[#f0fdf4]'>
      <div className="bg-[#ff9900] text-white text-center py-2 px-4 text-sm font-medium">
        Summer holidays will begin from 26th May 2025 and continue till 1st July 2025. Enjoy the break!
      </div>
      <Hero />
      <StatsSection />
      <Features />
      <AboutSection />
      <Campus />
      <SectionFirst />
      <AdmissionSection />
      <GallerySection />
      <FAQSection />
      <Principal />
      <Review />
      <CTASection />
    </div>
  )
}

export default App