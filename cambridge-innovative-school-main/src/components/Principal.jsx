import React from 'react'
import './Principal.css';
import principalImage from '../assets/principal.png';
import principal_one from '../assets/about-shape-3.webp';
import principal_name from '../assets/principal_name.webp';
import principal_contact from '../assets/principal_contact.webp';

const Principal = () => {

  return (
    <div className='principal_div px-6 sm:px-12 mt-28 mb-10 md:my-40'>
        <section class="section about" id="about" aria-label="about">
        <div class="w-full flex flex-wrap justify-between">

          <figure class="about-banner w-[100%] md:w-[60%] flex justify-center items-center relative">

            <div class="rounded-lg overflow-hidden w-[65%]">
              <img src={principalImage} loading="lazy" alt="Principal - Growwell School Kharar"
                class="img-cover" />
            </div>
            
            <img src={principal_name} className='principal_con absolute -bottom-5 left-12 w-[30%] drop-shadow-2xl' alt='' />

            <img src={principal_contact} className='absolute -top-10 right-10 w-[22%] drop-shadow-2xl' alt='' />

            <img src={principal_one} className='absolute top-0 left-0 lg:-top-16 lg:-left-14 w-[80%] lg:w-full drop-shadow-2xl -z-10' alt='' />

          </figure>

          <div class="about-content w-[100%] md:w-[35%] mt-20 md:mt-0">

            <p class="text-base text-[#ff9900] font-medium">Our Principal</p>
            <h2 className='text-xl lg:text-2xl text-[#000066] font-semibold'>Laxmi Kant Bhatia</h2>
            <p class="text-base text-[#ff9900] font-medium mt-3 mb-1">Qualification : </p>

            <p className='text-[#000066]'>M.A (Eng., Hist. Sociology and Psychology), M.Ed., M.Phil., Ph.D (pursuing)</p>

            <p class="text-base text-[#ff9900] font-medium mt-3 mb-1">Principal's Message : </p>
            <p className='text-zinc-500 text-[1.05rem] leading-relaxed'>Our team of passionate educators is committed to providing a supportive and engaging learning environment. We believe in the power of collaboration between school and home to guide our students toward success.</p>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Principal
