import React from 'react'
import './style.css';
import about_one from '../assets/about_pic4.webp';
import about_two from '../assets/about_pic2.webp';
import check_mark from '../assets/check-mark.webp';
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


const AboutSection = () => {

  const navigate = useNavigate();
  function aboutPage(){
    navigate('/about');
  }

  return (
    <div className='w-[100%] px-[20px] lg:px-[75px] pt-20'>
        <div className='flex justify-between w-full'>
            <div className='about_pic w-[90%] md:w-[45%] flex justify-center items-center relative'>
                <img className='w-[80%] sm:w-[60%] lg:w-[80%] object-cover drop-shadow-xl' src={about_one} alt='Growwell School Kharar - About our primary school' />
                <img className='w-[30%] sm:w-[25%] lg:w-[30%] absolute right-0 sm:right-10 lg:right-0 bottom-0 drop-shadow-xl' src={about_two} alt='Growwell School students learning' />
            </div>
            <div className='w-[90%] md:w-[45%]'>
                <p className='text-[#ff9900] font-medium text-base'>About Us</p>
                <h2 className='text-2xl text-zinc-800 font-semibold mt-3'>The Growwell Way: Learn. Play. Excel.</h2>
                <p className='font-medium mt-4 text-zinc-500 text-[1.15rem] leading-relaxed'>At Growwell School Kharar—one of the best primary schools in Mohali and Kharar—we believe that true learning goes beyond textbooks. We're not just building scholars; we're shaping confident, creative, and curious minds ready to grow and glow. Our CBSE-aligned curriculum is thoughtfully designed to build strong concepts, critical thinking, and a lifelong love for learning. With experienced and passionate teachers, we create an environment where students feel motivated to ask questions, explore deeply, and reach their full potential. We offer sport training, expert teachers, and a clear, clean campus. Academics and activities go hand in hand. Grow well. Shine bright. That's the Growwell way.</p>
                <div className='flex flex-wrap mt-4 justify-between'>
                  <div className='flex w-[100%] md:w-[45%] mt-4 justify-start p-3 shadow-lg rounded-2xl gap-3 items-center'>
                    <img className='w-7 h-7' src={check_mark} alt='' aria-hidden="true" />
                    <p className='text-zinc-700 text-[1.1rem] font-medium'>Sport Training</p>
                  </div>
                  <div className='flex w-[100%] md:w-[45%] mt-4 justify-start p-3 shadow-lg rounded-2xl gap-3 items-center'>
                    <img className='w-7 h-7' src={check_mark} alt='' aria-hidden="true" />
                    <p className='text-zinc-700 text-[1.1rem] font-medium'>Expert Teachers</p>
                  </div>
                  <div className='flex w-[100%] md:w-[45%] mt-4 justify-start p-3 shadow-lg rounded-2xl gap-3 items-center'>
                    <img className='w-7 h-7' src={check_mark} alt='' aria-hidden="true" />
                    <p className='text-zinc-700 text-[1.1rem] font-medium'>Easy To Learn</p>
                  </div>
                  <div className='flex w-[100%] md:w-[45%] mt-4 justify-start p-3 shadow-lg rounded-2xl gap-3 items-center'>
                    <img className='w-7 h-7' src={check_mark} alt='' aria-hidden="true" />
                    <p className='text-zinc-700 text-[1.1rem] font-medium'>Clear & Cleaning</p>
                  </div>
                </div>
                <button onClick={aboutPage} className='bg-[#ff9900] mt-7 hover:bg-[#f59c17] px-5 py-5 text-sm font-medium text-white rounded-2xl flex gap-3 items-center'>Explore More<span><FaArrowRightLong color='white' /></span></button>
            </div>
        </div>
    </div>
  )
}

export default AboutSection
