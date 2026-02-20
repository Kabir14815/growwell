import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SeoHead from './components/SeoHead'

const PAGE_SEO = {
  '/': { title: null, description: null },
  '/about': { title: 'About Us', description: 'Learn about Growwell School Kharar - our vision, curriculum, teachers, and what makes us the best primary school in Kharar, Mohali.' },
  '/contact': { title: 'Contact Us', description: 'Contact Growwell School Kharar. Visit us near Bus Stand, Comrade Josh Road. Call +91 8360444258 or email info@growwellschool.in' },
  '/gallery': { title: 'Gallery', description: 'View photos of Growwell School campus, classrooms, activities, and joyful moments. Glimpses of life at the best primary school in Kharar.' },
  '/admission': { title: 'Admission', description: 'Admissions open at Growwell School Kharar. Pre-Nursery to Class 8. Simple process - visit, apply, enroll. Call +91 8360444258.' }
}

const Layout = () => {
  const { pathname } = useLocation()
  const seo = PAGE_SEO[pathname] || { title: null, description: null }
  return (
    <div className='min-h-screen'>
        <SeoHead title={seo.title} description={seo.description} path={pathname} />
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout