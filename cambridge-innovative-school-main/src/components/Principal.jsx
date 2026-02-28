import React from 'react'
import './Principal.css';
import principalImage from '../assets/principal.png';
import principal_contact from '../assets/principal_contact.webp';

const Principal = () => {

  return (
    <div className='principal_div px-6 sm:px-12 mt-28 mb-10 md:my-40'>
        <section class="section about" id="about" aria-label="about">
        <div class="w-full flex flex-wrap justify-between items-start gap-10 max-w-6xl mx-auto">

          <figure class="about-banner w-[100%] md:w-[45%] flex justify-center md:justify-start items-start shrink-0">
            <div class="principal-image-crop rounded-lg overflow-hidden w-full max-w-md">
              <img src={principalImage} loading="lazy" alt="Amrit Kaur - Principal, Growwell School Kharar"
                class="img-cover w-full h-half" />
            </div>
          </figure>

          <div class="about-content w-[100%] md:w-[50%] mt-20 md:mt-0 flex flex-col items-start gap-6">

            <div class="principal-contact-card w-full max-w-xs bg-white rounded-2xl p-5 shadow-md overflow-hidden">
              <div class="principal-contact-icon mb-3">
                <img src={principal_contact} className="w-[80%] max-w-[200px]" alt="Contact" />
              </div>
              <p class="text-sm text-zinc-600 font-medium mb-1">Contact :</p>
              <a href="tel:+918196051999" className="text-lg font-semibold text-[#000066] hover:underline">+91 8196051999</a>
            </div>

            <div>
              <p class="text-base text-[#ff9900] font-medium">Our Principal</p>
              <h2 className='text-xl lg:text-2xl text-[#000066] font-semibold mt-1'>Amrit Kaur</h2>
              <p class="text-base text-[#ff9900] font-medium mt-4 mb-1">Qualification :</p>
              <p className='text-[#000066]'>B.Com, B.Ed and MBA in (Finance)</p>
            </div>

            <div>
              <p class="text-base text-[#ff9900] font-medium mb-2">Principal's Message :</p>
              <p className='text-zinc-600 text-[1.05rem] leading-relaxed'>Dear Parents, at Growwell School we are committed to providing a nurturing environment where young minds can flourish. Our philosophy, symbolized by the lotus, is one of rising above challenges, blooming in adversity and striving for excellence. We focus on holistic development, blending traditional values with modern innovation. Our approach encourages critical thinking, creativity, academic excellence, curiosity-driven learning, emotional intelligence, empathy, physical well-being, and extra-curricular exploration. Together let's empower them to thrive and make a positive impact.</p>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Principal
