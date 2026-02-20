import React from 'react'
import { Link } from 'react-router-dom'

// Gallery images from growwellschool.in
const galleryImages = [
  { src: 'https://growwellschool.in/wp-content/uploads/2024/12/DSC00007-scaled.jpg', alt: 'Growwell School campus', category: 'Campus' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/12/DSC00215-scaled.jpg', alt: 'Growwell School students', category: 'Learning' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/12/DSC00217-scaled.jpg', alt: 'Growwell School classroom', category: 'Classroom' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/08/IMG-20240818-WA0007.jpg', alt: 'Growwell School activities', category: 'Activities' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/12/DSC00255-scaled.jpg', alt: 'Growwell School joyful moments', category: 'Events' },
  { src: 'https://growwellschool.in/wp-content/uploads/2024/05/growwell.jpg', alt: 'Growwell School', category: 'Campus' }
];

const GallerySection = () => {
  return (
    <div className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section_heading relative text-2xl sm:text-3xl mb-4 font-medium text-center text-zinc-800">Some Glimpses of Growwell School Kharar</h2>
        <p className="text-zinc-500 text-center max-w-2xl mx-auto mb-12 text-base sm:text-[1.05rem]">Explore our campus, classrooms, activities, and the joyful moments that make Growwell School the best primary school in Kharar and Mohali. From daily learning to special events, discover why families choose us.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden group relative">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 pointer-events-none">
                <span className="text-white text-sm font-medium">{img.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/gallery" className="inline-block bg-[#ff9900] hover:bg-[#f59c17] text-white px-6 py-3 rounded-xl font-medium text-sm transition-colors">
            View All Gallery
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GallerySection
