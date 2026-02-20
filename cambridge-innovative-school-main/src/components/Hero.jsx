import React, { useEffect } from 'react'
import './style.css';
import hero_pic1 from '../assets/hero_pic2.webp';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  useEffect(() => {
    gsap.fromTo("#hero_content",{
        x : -800,
    },
     {
        x : 0,
        duration : 1,
        delay : 1
    })

    gsap.fromTo(".hero_images",{
      scale : 0
  },
   {
      scale : 1,
      duration : 1,
      delay : 1
  })
}, [])


  return (
    <div>
        <div className='w-[100%] px-[20px] lg:px-[50px] md:relative' id='hero'>
          <div className='w-[100vw] h-[90vh] md:w-[70vw] md:h-[70vw] md:rounded-full bg-[#f2f7fd] absolute top-0 right-0 md:top-[-50%] md:right-[-10%] -z-10'></div>
          <div className='flex justify-between w-[100%] flex-wrap'>
            <div className='w-[100%] md:w-[55%] h-[65vh] md:h-auto flex justify-center md:justify-start items-center lg:items-start pt-0 lg:pt-[4rem]'>
                <div className='flex flex-col gap-8 sm:gap-5 justify-center items-center text-center' id='hero_content'>
                    <h1 className='font-semibold text-zinc-700 text-center md:text-left' id='hero_heading'>Growwell School Kharar – Where Little Minds <span className='text-[#ff9900] relative' id='hero_heading_span'>Blossom!</span></h1>
                    <p className='text-[0.95rem] text-zinc-500 relative max-w-xl'>Growwell School is the best primary school in Kharar and Mohali, offering Pre-Nursery to Class 8 under the CBSE curriculum. We believe in playful learning and lasting friendships. Our holistic approach combines strong academics with sports, arts, and co-curricular activities—building a solid foundation for a bright future. Located near Bus Stand, Comrade Josh Road, we welcome families from Kharar, Mohali, and the Punjab region.</p>
                    <ul className='flex flex-wrap gap-4 mt-4 text-base text-zinc-600'>
                      <li className='flex items-center gap-1'><span className='text-[#ff9900]'>✓</span> CBSE Curriculum</li>
                      <li className='flex items-center gap-1'><span className='text-[#ff9900]'>✓</span> Safe & Nurturing</li>
                      <li className='flex items-center gap-1'><span className='text-[#ff9900]'>✓</span> Play-Based Learning</li>
                    </ul>
                    <span className='cambridge'>Growwell</span>
                </div>
            </div>
            <div className='w-[100%] md:w-[40%] hidden md:block relative'>
                <img className='w-[100%] hero_images' src={hero_pic1} alt='Growwell School Kharar - Best primary school in Kharar and Mohali'></img>
                <div className='hero_images rounded-full h-[10vw] w-[10vw] absolute right-1 top-1 bg-[#f37335]'></div>
                <div className='hero_images rounded-full h-[4vw] w-[4vw] absolute right-40 top-40 bg-[#f37335]'></div>
                <div className='hero_images rounded-full h-[4vw] w-[4vw] absolute left-0 bottom-52 bg-[#fdc830]'></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
