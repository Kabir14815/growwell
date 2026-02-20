import React from 'react';
import { FaLocationDot, FaPhone, FaPhoneFlip, FaRegClock } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

const ContactInfo = () => {
  return (
    <div>
    <div className='flex justify-center sm:justify-between items-start px-[20px] sm:px-[40px] md:px-[75px] gap-16 sm:gap-3 my-20'>
        <div className='flex flex-col justify-center items-center gap-1'>
            <FaLocationDot className='text-[#ff9900] text-xl' />
            <h1 className='text-base font-medium mt-3'>OUR LOCATION</h1>
            <p className='text-zinc-500 text-base'>Near Bus Stand, Comrade Josh Road, Opp. Aar Kay Book Depot, Kharar, Mohali, India, Punjab region</p>
        </div>
        <div className='w-[1px] hidden sm:block h-32 bg-zinc-400'></div>
        <div className='flex flex-col justify-center items-center gap-1'>
            <FaPhone className='text-xl text-[#ff9900]' />
            <h1 className='text-base font-medium mt-3'>CONTACT US</h1>
            <a href="tel:+918360444258" className='text-zinc-500 text-base hover:text-[#ff9900]'>+91 8360444258</a>
        </div>
        <div className='w-[1px] h-32 bg-zinc-400 hidden sm:block'></div>
        <div className='flex flex-col justify-center items-center gap-1'>
            <IoMdSend className='text-[#ff9900] text-2xl' />
            <h1 className='text-base font-medium mt-3'>WRITE SOME WORDS</h1>
            <a href="mailto:info@growwellschool.in" className='text-zinc-500 text-base hover:text-[#ff9900]'>info@growwellschool.in</a>
        </div>
    </div>
    <div className='w-full px-[20px] sm:px-[40px] md:px-[75px] mt-12 mb-20'>
      <h2 className='text-xl font-semibold text-zinc-800 mb-4 text-center'>Find Us on Map</h2>
      <div className='rounded-xl overflow-hidden shadow-lg border border-zinc-200'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6860.33!2d76.6464!3d30.7319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQzJzU1LjAiTiA3NsKwMzgnNDcuMCJF!5e0!3m2!1sen!2sin!4v1708000000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Growwell School Location"
        />
      </div>
      <a
        href="https://www.google.com/maps/search/Near+Bus+Stand,+Comrade+Josh+Road,+Opp.+Aar+Kay+Book+Depot,+Kharar,+Mohali,+India,+Punjab+region"
        target="_blank"
        rel="noopener noreferrer"
        className='inline-block mt-4 text-[#ff9900] hover:text-[#f59c17] font-medium text-sm'
      >
        Open in Google Maps →
      </a>
    </div>
  </div>
  )
}

export default ContactInfo