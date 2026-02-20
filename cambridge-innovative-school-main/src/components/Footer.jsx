import React from 'react'
import logo from '../assets/growwell-logo.png';
import { FaLocationDot, FaEnvelope, FaPhoneFlip, FaRegClock } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='px-[25px] lg:px[50px] py-10 bg-[#f2f7fd]'>
        <div className='flex justify-between items-start flex-wrap'>
            <div className='w-[100%] md:w-[30%] sm:w-[50%] mt-10'>
                <Link to="/"><img className='w-[150px] mb-7' src={logo} alt="Growwell School" /></Link>
                <p className='text-base text-zinc-700'>We offer a safe, nurturing and stimulating environment where little minds blossom. Playful learning, lasting friendships, and a strong foundation for a bright future. Grow well. Shine bright.</p>
            </div>
            <div className='w-[100%] md:w-[30%] sm:w-[50%] mt-10'>
                <div className='flex flex-col gap-7'>
                        <div className='flex justify-start items-center gap-3'>
                            <div>
                                <FaPhoneFlip className='text-[#ff9900] text-xl' />
                            </div>
                            <div>
                                <h3 className='font-medium'>Call</h3>
                                <a href="tel:+918360444258" className='text-zinc-600 text-base hover:text-[#ff9900]'>+91 8360444258</a>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <div>
                                <FaEnvelope className='text-[#ff9900] text-xl' />
                            </div>
                            <div>
                                <h3 className='font-medium'>Email</h3>
                                <a href="mailto:info@growwellschool.in" className='text-zinc-600 text-base hover:text-[#ff9900]'>info@growwellschool.in</a>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <div>
                                <FaRegClock className='text-[#ff9900] text-xl' />
                            </div>
                            <div>
                                <h3 className='font-medium'>Work Time</h3>
                                <p className='text-zinc-600 text-base'>Mon - Fri 9 AM - 3 PM</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <div>
                                <FaLocationDot className='text-[#ff9900] text-xl' />
                            </div>
                            <div>
                                <h3 className='font-medium'>Address</h3>
                                <p className='text-zinc-600 text-base'>Near Bus Stand, Comrade Josh Road, Opp. Aar Kay Book Depot, Kharar, Mohali, India, Punjab region</p>
                            </div>
                        </div>
                </div>
            </div>
            <div className='w-[100%] md:w-[30%] sm:w-[50%] mt-10'>
                <h1 className='text-base mb-4 font-medium'>Quick Links</h1>
                <ul className='list-none flex flex-col gap-1'>
                    <li><Link to='/' className='text-zinc-700 footer-links'>Home</Link></li>
                    <li><Link to='/about' className='text-zinc-700 footer-links'>About Us</Link></li>
                    <li><Link to='/admission' className='text-zinc-700 footer-links'>Admission</Link></li>
                    <li><Link to='/gallery' className='text-zinc-700 footer-links'>Gallery</Link></li>
                    <li><Link to='/contact' className='text-zinc-700 footer-links'>Contact</Link></li>
                </ul>
            </div>
        </div>
        <hr className='mt-8 mb-8' />
        <div>
            <p className='text-zinc-700'>© Copyright 2026 growwellschool.in</p>
        </div>
    </div>
  )
}

export default Footer
