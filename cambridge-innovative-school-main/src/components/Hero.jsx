import React, { useEffect, useState } from 'react'
import './style.css';
import activity1 from '../assets/school_activity1.jpg';
import activity2 from '../assets/school_activity2.jpg';
import activity3 from '../assets/school_activity3.jpg';
import activity5 from '../assets/school_activity5.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const heroImages = [
  { src: activity1, alt: 'Sahitya Sangam - Creative arts display at Growwell School' },
  { src: activity2, alt: 'Students learning finger rhymes at Growwell School' },
  { src: activity3, alt: 'Kids dressed as famous personalities at Growwell School' },
  { src: activity5, alt: 'Students performing dance at Growwell School event' },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

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
                    <span className='cambridge'>Growwell School</span>
                </div>
            </div>
            <div className='w-[100%] md:w-[40%] hidden md:block relative'>
                {/* Image Slider */}
                <div className='hero_images relative w-full overflow-hidden rounded-3xl' style={{ aspectRatio: '4/5' }}>
                  {heroImages.map((image, index) => (
                    <img
                      key={index}
                      className='absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out'
                      style={{
                        opacity: currentSlide === index ? 1 : 0,
                        transform: currentSlide === index ? 'scale(1)' : 'scale(1.05)',
                      }}
                      src={image.src}
                      alt={image.alt}
                    />
                  ))}
                  {/* Slide indicators */}
                  <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          currentSlide === index
                            ? 'bg-[#ff9900] w-7'
                            : 'bg-white/70 hover:bg-white'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                  {/* Gradient overlay at bottom for indicators visibility */}
                  <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none rounded-b-3xl'></div>
                </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
