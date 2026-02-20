import React from 'react'
import About_second_pic from '../../assets/vision2.webp';
import check_mark from '../../assets/check-mark.webp';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

const AboutForth = () => {
  return (
    <div className='w-[100%] px-[20px] md:px-[30px] lg:px-[75px] py-10'>
        <h1 className='section_heading relative text-2xl sm:text-3xl mb-10 sm:mb-12 lg:mb-16 font-medium text-center'>Vision & Mission</h1>
        <div className='flex flex-row-reverse justify-between w-full'>
            <div className='about_pic w-[100%] md:w-[45%] flex justify-center items-center relative'>
                <img className='w-[80%] sm:w-[50%] rounded-t-full md:w-[90%] object-cover drop-shadow-xl' src={About_second_pic} alt=' ' />
                {/* <img className='w-[30%] sm:w-[25%] lg:w-[30%] absolute right-0 sm:right-10 lg:right-0 bottom-0 drop-shadow-xl' src={about_two} alt='' /> */}
            </div>
            <div className='w-[100%] md:w-[45%] flex flex-col justify-center'>
                {/* <p className='text-[#ff9900] font-medium text-lg'>About Us</p> */}
                <h2 className='text-lg sm:text-xl md:text-2xl text-[#f59c17] font-semibold mt-3'>Vision</h2>
                <p className='font-medium mt-2 text-zinc-500 text-[1.05rem]'>We're shaping confident, creative, and curious minds ready to grow and glow. True learning goes beyond textbooks.</p>
                <h2 className='text-lg sm:text-xl md:text-2xl text-[#f59c17] font-semibold mt-7'>Mission</h2>
                <p className='font-medium mt-2 text-zinc-500 text-[1.05rem]'>Academics are the foundation of every child's journey at Growwell. We focus on balanced growth—where academics and activities go hand in hand. Grow well. Shine bright.</p>
                <ul className='mt-5 flex flex-col gap-2'>
                    <li className='flex gap-3 flex-nowrap items-center'><FaCheckCircle className='text-[#ff9900] text-xl' /><p>Learning environment that allows children to develop at their own speed</p></li>
                    <li className='flex gap-3 flex-nowrap items-center'><FaCheckCircle className='text-[#ff9900] text-xl' /><p>Play-based approach building a strong foundation for future success</p></li>
                    <li className='flex gap-3 flex-nowrap items-center'><FaCheckCircle className='text-[#ff9900] text-xl' /><p>Safe, nurturing and stimulating environment for your child</p></li>
                </ul>
                {/* <button className='bg-[#ff9900] mt-9 hover:bg-[#f59c17] px-5 py-5 text-sm font-medium text-white rounded-2xl flex gap-3 items-center'>Explore More<span><FaArrowRightLong color='white' /></span></button> */}
            </div>
        </div>
    </div>
  )
}

export default AboutForth