import React from 'react'
import HeroSecond from './components/HeroSecond'
import AdmissionSection from './components/AdmissionSection'
import ContactInfo from './components/ContactInfo'

const Admission = () => {
  return (
    <div className="min-h-screen bg-[#f0fdf4]">
      <HeroSecond heading="Admission Procedure" />
      <AdmissionSection />
      <div className="pb-16">
        <ContactInfo />
      </div>
    </div>
  )
}

export default Admission
