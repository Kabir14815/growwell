import React from 'react'
import apple_and_books from '../assets/apple-and-books.webp';
import games from '../assets/games.webp';
import open_book from '../assets/open-book.webp';
import school from '../assets/school.webp';
import seesaw from '../assets/seesaw.webp';
import sister_and_brother from '../assets/sister-and-brother.webp';

const Features = () => {

  const featuresList = [
    {
      icon : seesaw, 
      heading : "Primary School",
      content : "Recognized Pre-Nursery to 8th Class(Recognized) Under CBSE Pattern. Nurturing Creativity & Curiosity, Blending Education with Innovation."
    },
    {
      icon : apple_and_books,
      heading : "Learning Through Play",
      content : "We know playtime is super important! From building block towers to singing silly songs, your child will be exploring, discovering, and becoming a whiz kid, all while having a blast."
    },
    {
      icon : sister_and_brother,
      heading : "Growing in Every Way",
      content : "We help your child develop social skills, emotional intelligence, thinking muscles, and keep those little bodies healthy."
    },
    {
      icon : open_book, 
      heading : "Academics First",
      content : "Our curriculum builds strong concepts, critical thinking, and a lifelong love for learning with experienced and passionate teachers."
    },
    {
      icon : games, 
      heading : "Balanced Growth",
      content : "When children learn with happiness, they grow with confidence. Academics and activities go hand in hand."
    },   
    {
      icon : school, 
      heading : "Safety First, Always",
      content : "Your child's safety is our top priority. Secure environment with trained staff, CCTV surveillance, and strict safety protocols from entry to dispersal."
    }, 
  ]
  return (
    <div>
        <div class="content-side">
          <h2 className='mb-10 w-[90%] sm:w-[70%] md:w-[50%] m-auto font-semibold text-zinc-800 text-[1.2rem] sm:text-[3.5vw] md:text-[2.8vw] text-center'>Why Growwell School Kharar is the Perfect Fit for Your Little One</h2>
          <div class="inner-main-box">
              {
                featuresList.map((feature) => {
                  return(
                    <div class="boxes box-1">
                      <div class="feature-box-img">
                        <img src={feature.icon} alt={feature.heading} />
                      </div>
                      <h4>{feature.heading}</h4>
                      <div class="feature-line"></div>
                      <p class="text-cont">{feature.content}</p>
                    </div>
                  )
                })
              }
          </div>
        </div>
    </div>
  )
}

export default Features
