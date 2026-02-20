import React from 'react'
import HeroSecond from './components/HeroSecond'

// Gallery images from growwellschool.in
const galleryImages = [
  { src: 'https://growwellschool.in/wp-content/uploads/2024/12/DSC00007-scaled.jpg', alt: 'Growwell School campus' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/12/DSC00030-scaled.jpg', alt: 'Growwell School activities' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/12/DSC00055-scaled.jpg', alt: 'Growwell School moments' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/12/DSC00057-scaled.jpg', alt: 'Growwell School learning' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/12/DSC00212-scaled.jpg', alt: 'Growwell School event' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/12/DSC00213-scaled.jpg', alt: 'Growwell School campus life' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/12/DSC00215-scaled.jpg', alt: 'Growwell School students' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/12/DSC00217-scaled.jpg', alt: 'Growwell School classroom' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/12/DSC00228-scaled.jpg', alt: 'Growwell School activities' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/12/DSC00240-scaled.jpg', alt: 'Growwell School event' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/12/DSC00242-scaled.jpg', alt: 'Growwell School moments' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/12/DSC00250-scaled.jpg', alt: 'Growwell School campus' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/12/DSC00252-scaled.jpg', alt: 'Growwell School learning' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/12/DSC00255-scaled.jpg', alt: 'Growwell School joyful moments' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/12/DSC00256-scaled.jpg', alt: 'Growwell School activities' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/12/DSC00259-scaled.jpg', alt: 'Growwell School campus' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/08/IMG-20240818-WA0007.jpg', alt: 'Growwell School August 2024' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/08/IMG-20240818-WA0009.jpg', alt: 'Growwell School activities' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/09/IMG-20240915-WA0007.jpg', alt: 'Growwell School September 2024' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/09/IMG-20240928-WA0009.jpg', alt: 'Growwell School event' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/05/growwell.jpg', alt: 'Growwell School' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/05/ph1.jpg', alt: 'Growwell School campus' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/05/ph2.jpg', alt: 'Growwell School campus' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/05/ph3.jpg', alt: 'Growwell School campus' }
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#f0fdf4]">
      <HeroSecond heading="Gallery" />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-zinc-500 text-center mb-12 text-base sm:text-[1.05rem] max-w-2xl mx-auto">
          Glimpses of our campus life, classrooms, activities, and the joyful moments that make Growwell special.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img src={img.src} alt={img.alt} className="w-full aspect-[4/3] object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
