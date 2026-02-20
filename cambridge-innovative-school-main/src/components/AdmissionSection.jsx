import React from 'react'
import { Link } from 'react-router-dom'
import { FaFileLines, FaPhone, FaCalendarCheck, FaCircleCheck } from "react-icons/fa6";

const steps = [
  { num: '01', icon: <FaFileLines className="text-xl" />, title: 'Collect Application Form', desc: 'Visit our school office or download the admission form from our website. Our staff will guide you through the requirements.' },
  { num: '02', icon: <FaCalendarCheck className="text-xl" />, title: 'Schedule a Campus Visit', desc: 'Book a tour to explore our campus, meet our teachers, and see our facilities. We welcome parents and children.' },
  { num: '03', icon: <FaFileLines className="text-xl" />, title: 'Submit Documents', desc: 'Submit the completed form along with birth certificate, previous school records (if any), and passport-sized photos.' },
  { num: '04', icon: <FaCircleCheck className="text-xl" />, title: 'Confirmation & Fee Payment', desc: 'Once approved, complete the fee payment and secure your child\'s seat. Welcome to the Growwell family!' }
];

const AdmissionSection = () => {
  return (
    <div className="w-full py-20 bg-[#f0fdf4]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section_heading relative text-2xl sm:text-3xl mb-4 font-medium text-center text-zinc-800">Admission Procedure at Growwell School Kharar</h2>
        <p className="text-zinc-500 text-center max-w-2xl mx-auto mb-16 text-base sm:text-[1.05rem]">Admissions are open for Pre-Nursery to Class 8 at Growwell School, the best primary school in Kharar and Mohali. Follow these simple steps to enroll your child. Call +91 8360444258 or visit our campus near Bus Stand, Comrade Josh Road, Kharar for assistance.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-5 p-6 bg-white rounded-2xl shadow-md border border-zinc-100 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#ff9900] text-white flex items-center justify-center font-semibold">
                {step.num}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-800 mb-2">{step.title}</h3>
                <p className="text-zinc-500 text-base leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-zinc-600 text-base mb-4">Have questions? We're here to help!</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#ff9900] hover:bg-[#f59c17] text-white px-6 py-3 rounded-xl font-medium text-sm transition-colors">
            <FaPhone /> Contact Us for Admission
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdmissionSection
