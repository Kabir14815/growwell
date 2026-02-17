import React, { useEffect } from 'react';
import './Navbar.css';
// import logo from '../assets/logo.jpg';
import logo_full from '../assets/logo-full.webp';
import { IoMenu } from "react-icons/io5";
import { FaLocationDot, FaPhone, FaPhoneFlip, FaRegClock } from "react-icons/fa6";
import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);


const AnimatedNavbar = () => {

// let menu = document.querySelector('#menu-icon');

useEffect(() => {
    gsap.fromTo(".main_navbars",{
        top : -100
    },
     {
        top : 0,
        duration : 2,
        // delay : 3,
        scrollTrigger:{
            scroller:"body",
            trigger: ".main_navbars",
            // markers : true,
            start : "top -20%",
            end : "top -25%",
            scrub : 0
        } 
    })
}, [])


let menuClick = () =>
{
    let navbar = document.querySelector('.navbarr');
    // console.log("hII");
//   menu.classList.toggle('bi-x');
  navbar.classList.toggle('open');
}

  return (
    <div className='ani'>
        
        <header className='main_navbars fixed top-0 left-0 z-50 bg-white'>
                <Link to="" class="logo"><img src={logo_full} alt="" /></Link>

                <div className='flex flex-col'>
                    {/* <div className='navbar_content'>
                        <div>
                            <div className='flex justify-start items-center gap-3'>
                                <div>
                                    <FaPhoneFlip className='text-[#ff9900] text-xl' />
                                </div>
                                <div>
                                    <h3 className='font-medium'>Call</h3>
                                    <p className='text-zinc-600 text-sm'>+91 827875125</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-start items-center gap-3'>
                                <div>
                                    <FaRegClock className='text-[#ff9900] text-xl' />
                                </div>
                                <div>
                                    <h3 className='font-medium'>Work Time</h3>
                                    <p className='text-zinc-600 text-sm'>Mon - Fri 9 AM - 3 PM</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-start items-center gap-3'>
                                <div>
                                    <FaLocationDot className='text-[#ff9900] text-xl' />
                                </div>
                                <div>
                                    <h3 className='font-medium'>Address</h3>
                                    <p className='text-zinc-600 text-sm'>Nangran, Roopnagar, Punjab</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='nav_line' /> */}
                    <ul class="navbarr">
                        {/* <li><a href="#home" class="active">Home</a></li> */}
                        <li><Link to='/'>Home</Link></li>
                        {/* <li><a href="#services">Facilities</a></li> */}
                        <li><Link to='/about'>About Us</Link></li>
                        {/* <li><a href="#contact">Contact</a></li> */}
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                

                    {/* <bi onClick={menuClick} class="bi-list" id="menu-icon"></bi> */}
                    {/* <IoMenu onClick={menuClick} id='menu-icon'/> */}
                    <input onClick={menuClick} type="checkbox" role="button" aria-label="Display the menu" class="menu" id='menu-icon'></input>
            </header>
    </div>
  )
}

export default AnimatedNavbar