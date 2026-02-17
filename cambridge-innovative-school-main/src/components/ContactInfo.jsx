import React from 'react';
import { FaLocationDot, FaPhone, FaPhoneFlip, FaRegClock } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

const ContactInfo = () => {
  return (
    <div className='flex justify-center sm:justify-between items-start px-[20px] sm:px-[40px] md:px-[75px] gap-16 sm:gap-3 my-20'>
        <div className='flex flex-col justify-center items-center gap-1'>
            <FaLocationDot className='text-[#ff9900] text-xl' />
            <h1 className='text-lg font-medium mt-3'>OUR LOCATION</h1>
            <p className='text-zinc-500 text-md'>Nangran, Roopnagar</p>
            <p className='text-zinc-500 text-md'>Punjab</p>
        </div>
        <div className='w-[1px] hidden sm:block h-32 bg-zinc-400'></div>
        <div className='flex flex-col justify-center items-center gap-1'>
            <FaPhone className='text-xl text-[#ff9900]' />
            <h1 className='text-lg font-medium mt-3'>CONTACT US</h1>
            <p className='text-zinc-500 text-md'>9816164155</p>
            <p className='text-zinc-500 text-md'>8278751205</p>
        </div>
        <div className='w-[1px] h-32 bg-zinc-400 hidden sm:block'></div>
        <div className='flex flex-col justify-center items-center gap-1'>
            <IoMdSend className='text-[#ff9900] text-2xl' />
            <h1 className='text-lg font-medium mt-3'>WRITE SOME WORDS</h1>
            <p className='text-zinc-500 text-md'>Support24/7@domain.com</p>
        </div>
    </div>
  )
}

export default ContactInfo