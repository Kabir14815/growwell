import React from 'react'
import './SectionFirst.css'
import preNurseryImg from '../assets/pre_nursery_classroom.png'
import nurseryImg from '../assets/nursery_classroom.png'
import kg1Img from '../assets/kg1_classroom.png'
import kg2Img from '../assets/kg2_classroom.png'
import class1Img from '../assets/class1_classroom.png'
import class2to8Img from '../assets/class2to8_classroom.png'

// Classroom images for each program
const neutralImages = [
  preNurseryImg,
  nurseryImg,
  kg1Img,
  kg2Img,
  class1Img,
  class2to8Img,
];

const FALLBACK_IMAGE = 'https://placehold.co/400x300/e0f2fe/3b82f6?text=Learning';

const programs = [
  { img: neutralImages[0], title: 'Pre-Nursery', age: '2-3 Years', points: ['Learning to share and take turns during play.', 'Developing trust and bonding with teachers and peers.', 'Introduction to classroom routines and following simple instructions.', 'Encouraging independence in eating and managing belongings.'] },
  { img: neutralImages[1], title: 'Nursery', age: '3-4 Years', points: ['Building respect for others through greetings and polite words (please, sorry, thank you).', 'Encouraging empathy through role-play and storytelling.', 'Learning basic hygiene and cleanliness habits.', 'Celebrating diversity with inclusive activities and festivals.'] },
  { img: neutralImages[2], title: 'K.G 1', age: '4-5 Years', points: ['Understanding the importance of kindness, friendship, and cooperation.', 'Developing responsibility by helping in classroom tasks.', 'Practicing patience while waiting for their turn.', 'Learning to express feelings in a respectful way.'] },
  { img: neutralImages[3], title: 'K.G 2', age: '5-6 Years', points: ['Fostering honesty and truthfulness through real-life examples.', 'Building leadership and team spirit through group activities.', 'Emphasizing respect for elders, teachers, and rules.', 'Instilling environmental awareness and care for nature (planting, cleanliness drives).'] },
  { img: neutralImages[4], title: 'Class 1', age: '6-7 Years', points: ['Use of polite words and respectful behavior.', 'Learning honesty and accepting mistakes.', 'Developing responsibility for belongings and tasks.', 'Showing kindness and empathy towards others.', 'Practicing teamwork and sharing in activities.'] },
  { img: neutralImages[5], title: 'Class 2 to 8', age: '7-14 Years', points: ['Strong academic foundation with CBSE curriculum.', 'Critical thinking and problem-solving skills.', 'Sports, arts, and co-curricular activities.', 'Preparation for higher education and life skills.'] }
];

const SectionFirst = () => {
  return (
    <div>
        <div class="divisions division_4 pt-10 pb-20" onmousemove="animate_balls(event)">
            <div class="title_header">
                <h2 class="text-[1.2rem] sm:text-[3vw] md:text-[2.4vw] title medium mb-4 text-zinc-800 font-semibold">Programs Specialized for all aged children</h2>
                <p className="text-zinc-500 text-base sm:text-[1.05rem] max-w-2xl mx-auto">From Pre-Nursery (2 years) to Class 8 under CBSE. Explore, discover, and learn through engaging activities!</p>
            </div>
            <div class="cards">
                <span class="ball"></span>
                <span class="ball"></span>
                <span class="ball"></span>
                <span class="ball"></span>
                <section class="fixed_flex program-cards">
                    {programs.map((program, index) => (
                      <figure key={index} class="flex_content program-card">
                        <div className="program-card-img">
                          <img src={program.img} alt={program.title} loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }} />
                        </div>
                        <figcaption className="program-card-content">
                          <h3 className="program-title">{program.title}</h3>
                          <p className="program-age">{program.age}</p>
                          <ul className="program-points">
                            {program.points.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                          <button className="program-details-btn">See Details</button>
                        </figcaption>
                      </figure>
                    ))}
                </section>
            </div>
        </div>
    </div>
  )
}

export default SectionFirst
