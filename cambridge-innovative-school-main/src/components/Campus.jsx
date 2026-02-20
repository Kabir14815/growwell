import React from 'react'
import './Principal.css';
import principal_one from '../assets/about-shape-3.webp';
import campus from '../assets/campus.webp';
import education from '../assets/education.webp';
import reading from '../assets/reading.webp';
import forest from '../assets/forest.webp';
import graduation from '../assets/graduation.webp';

const Campus = () => {

  return (
    <div className='principal_div px-6 sm:px-12 mt-28 mb-10 md:my-28'>
        <section class="section about" id="about" aria-label="about">
        <div class="w-full flex flex-wrap justify-between">

          <figure class="about-banner w-[100%] md:w-[60%] flex justify-center items-center relative">

            <div class="rounded-lg overflow-hidden w-[65%]">
              <img src={campus} loading="lazy" alt="Growwell School Kharar campus - safe and nurturing environment"
                class="img-cover" />
            </div>

            <img src={principal_one} className='absolute top-0 left-0 w-[80%] lg:w-full drop-shadow-2xl -z-10' alt='' aria-hidden="true" />

          </figure>

          <div class="about-content w-[100%] md:w-[35%] mt-20 md:mt-0">

            <p class="text-base text-[#ff9900] font-medium">Our Campus</p>
            <h2 className='text-xl lg:text-2xl text-[#000066] font-medium mt-3'>A Safe, Nurturing and Stimulating Environment</h2>

            <p className='text-zinc-500 mt-1 text-[1.05rem] leading-relaxed'>At Growwell School Kharar, we offer a safe, nurturing, and stimulating environment where children can be brave and adventurous as they learn and grow. Our campus features spacious, well-lit classrooms, a dedicated play area, and eco-friendly grounds that encourage outdoor learning. We are committed to providing a learning environment that allows every child to develop at their own pace. Our facilities include modern amenities, secure entry and exit, and trained staff. Conveniently located near Bus Stand, Comrade Josh Road, Opp. Aar Kay Book Depot, Kharar, Mohali, India, Punjab region—we are easy to reach for families across Mohali, Kharar, and surrounding areas.</p>
            <div className='flex flex-wrap justify-center mt-4 sm:justify-between'>
                  <div className='flex flex-col w-[80%] sm:w-[45%] mt-4 justify-center p-3 items-center gap-3'>
                    <img className='w-16' src={reading} alt='Safe and secure school environment' />
                    <p className='text-zinc-900 text-center text-base'>Safe and Secure Environment</p>
                  </div>
                  <div className='flex flex-col w-[80%] sm:w-[45%] mt-4 justify-center p-3 items-center gap-3'>
                    <img className='w-16' src={forest} alt='Eco-friendly campus grounds' />
                    <p className='text-zinc-900 text-center text-base'>Eco-Friendly Campus Grounds</p>
                  </div>
                  <div className='flex flex-col w-[80%] sm:w-[45%] mt-4 justify-center p-3 items-center gap-3'>
                    <img className='w-16' src={graduation} alt='Student wellness and support' />
                    <p className='text-zinc-900 text-center text-base'>Student Wellness Support</p>
                  </div>
                  <div className='flex flex-col w-[80%] sm:w-[45%] mt-4 justify-center p-3 items-center gap-3'>
                    <img className='w-16' src={education} alt='Experienced and dedicated faculty' />
                    <p className='text-zinc-900 text-center text-base'>Experienced and Dedicated Faculty</p>
                  </div>
                </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Campus
