import React, { useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/growwell-logo.png';
import { FaLocationDot, FaPhone, FaPhoneFlip, FaRegClock } from "react-icons/fa6";
import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);


const Navbar = () => {

// let menu = document.querySelector('#menu-icon');

useEffect(() => {
    const el = document.querySelector(".main_navbar");
    if (!el) return;
    gsap.fromTo(el, {
        backgroundColor : "transparent",
        boxShadow : 'none'
    }, {
        backgroundColor : "#fff",
        boxShadow : `5px 0px 5px gray`,
        duration : 2,
        scrollTrigger:{
            scroller: "body",
            trigger: el,
            start : "top -25%",
            end : "top -35%",
            scrub : 0
        } 
    });
}, [])


let menuClick = () =>
{
    let navbar = document.querySelector('.navbarr');
    // console.log("hII");
//   menu.classList.toggle('bi-x');
  navbar.classList.toggle('open');
}

  return (
    <div>
        
        <header className='main_navbar'>
                <Link to="/" class="logo"><img src={logo} alt="Growwell School" /></Link>

                <div className='flex flex-col'>
                    <div className='navbar_content'>
                        <div>
                            <div className='flex justify-start items-center gap-3'>
                                <div>
                                    <FaPhoneFlip className='text-[#ff9900] text-xl' />
                                </div>
                                <div>
                                    <h3 className='font-medium'>Call</h3>
                                    <a href="tel:+918360444258" className='text-zinc-600 text-base hover:text-[#ff9900]'>+91 8360444258</a>
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
                                    <p className='text-zinc-600 text-base'>Mon - Fri 9 AM - 3 PM</p>
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
                                    <p className='text-zinc-600 text-base'>Near Bus Stand, Comrade Josh Road, Opp. Aar Kay Book Depot, Kharar, Mohali, India, Punjab region</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='nav_line' />
                    <ul class="navbarr">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/admission'>Admission</Link></li>
                        <li><Link to='/gallery'>Gallery</Link></li>
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

export default Navbar