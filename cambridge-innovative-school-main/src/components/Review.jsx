import React, { useState, useEffect } from 'react';
import './Review.css';
import quotes from '../assets/quotes.webp';

const testimonials = [
  {
    img: quotes,
    name: 'Parent of Nursery Student',
    text: 'Growwell School has been the perfect fit for our little one. The play-based learning approach has made my child excited to go to school every day!'
  },
  {
    img: quotes,
    name: 'Parent of KG 1 Student',
    text: 'The safety and nurturing environment at Growwell gives us peace of mind. Our child is blossoming with confidence and curiosity.'
  },
  {
    img: quotes,
    name: 'Parent of Class 2 Student',
    text: 'We love how Growwell focuses on balanced growth—academics and activities go hand in hand. Our child is developing in every way.'
  },
  {
    img: quotes,
    name: 'Parent',
    text: 'The teachers are passionate and caring. My child has learned not just academics but also values like kindness and responsibility.'
  },
  {
    img: quotes,
    name: 'Parent',
    text: 'Best primary school in Kharar! The campus is clean, safe, and the curriculum is well-structured. Highly recommend Growwell.'
  }
];

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentActive, setCurrentActive] = useState(0);
  const testimSpeed = 4500;


  const playSlide = (slide) => {
    if (slide < 0) {
      slide = testimonials.length - 1;
    }
    if (slide > testimonials.length - 1) {
      slide = 0;
    }
    setCurrentSlide(slide);
    setCurrentActive(slide);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      playSlide(currentSlide + 1);
    }, testimSpeed);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      playSlide(currentSlide - 1);
    } else {
      playSlide(currentSlide + 1);
    }
  };

  const handleDotClick = (index) => {
    playSlide(index);
  };

  return (
    <div id="testim" className="testim mt-20">
      <h1 className='w-[90%] sm:w-[70%] md:w-[50%] m-auto font-semibold text-zinc-700 text-[1.2rem] sm:text-[3vw] md:text-[2.4vw] text-center'>Parents' Words Are The Key
      To Happy Kids</h1>
      <div className="wrap">
        <span id="left-arrow" className="arrow left" onClick={() => handleArrowClick('left')}>
          &#10094;
        </span>
        <span id="right-arrow" className="arrow right" onClick={() => handleArrowClick('right')}>
          &#10095;
        </span>
        <div id="testim-content" className="cont">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${
                index === currentActive ? 'active' : ''
              } ${index !== currentActive && index === currentSlide ? 'inactive' : ''}`}
            >
              <div className="img">
                <img src={testimonial.img} alt={testimonial.name} />
              </div>
              <h2>{testimonial.name}</h2>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>
        <div id="testim-dots" className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentActive ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
