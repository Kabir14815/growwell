import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaArrowRightLong } from "react-icons/fa6";

const CTASection = () => {
  return (
    <div className="w-full py-16 px-6 bg-gradient-to-r from-[#000066] to-[#1e3a8a]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Ready to Join the Growwell Family?</h2>
        <p className="text-zinc-300 text-base sm:text-[1.05rem] mb-8 max-w-2xl mx-auto">
          Give your child the best start. Schedule a visit, meet our team, and discover why parents trust Growwell for their little ones.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+918360444258" className="inline-flex items-center gap-2 bg-[#ff9900] hover:bg-[#f59c17] text-white px-6 py-3 rounded-xl font-medium text-sm transition-colors">
            <FaPhone /> +91 8360444258
          </a>
          <a href="mailto:info@growwellschool.in" className="inline-flex items-center gap-2 bg-[#ff9900] hover:bg-[#f59c17] text-white px-6 py-3 rounded-xl font-medium text-sm transition-colors">
            <FaEnvelope /> info@growwellschool.in
          </a>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#000066] hover:bg-zinc-100 px-6 py-3 rounded-xl font-medium text-sm transition-colors">
            Schedule a Visit <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CTASection
