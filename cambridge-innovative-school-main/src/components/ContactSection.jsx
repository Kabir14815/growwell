import React, { useState } from 'react'
import './ContactSection.css'
import { FaLocationDot, FaPhone, FaPhoneFlip, FaRegClock } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'

const ContactSection = () => {

    const [contactData, setContactData] = useState({
        name : "",
        email : "",
        contact : "",
        message : ""
    })

    function changeHandler(e) {
        setContactData({
            ...contactData, [e.target.name] : e.target.value
        })
    }

    async function submitContact(){
        try{
            await axios.post('https://sheet.best/api/sheets/fb455aac-2250-4fc1-afc4-1524897927ea', contactData)
            .then((res) => {
                // console.log(res);
                if(res.status === 200){
                    setContactData({
                        name : "",
                        email : "",
                        contact : "",
                        message : ""
                    })
                    Swal.fire({
                        title: "Message Sent",
                        // text: "You ",
                        icon: "success"
                      });
                }
                else{
                    Swal.fire({
                        icon: "error",
                        title: "Try Again",
                        text: "Something went wrong!",
                        // footer: '<a href="#">Why do I have this issue?</a>'
                      });
                }
            })
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div className='px-0 lg:px-[75px] flex justify-center items-center my-20'>
            <div class="container">
                <div class="contactInfo"> 
                    <div>
                        <h2>Contact Info</h2>
                        <div className='flex flex-col gap-7 mt-4'>
                            <div className='flex justify-start items-center gap-3'>
                                <div>
                                    <FaPhoneFlip className='text-[#fff] text-xl' />
                                </div>
                                <div>
                                    <h3 className='font-medium'>Call</h3>
                                    <p className='text-zinc-600 text-sm'>+91 827875125</p>
                                </div>
                            </div>
                            <div className='flex justify-start items-center gap-3'>
                                <div>
                                    <FaRegClock className='text-[#fff] text-xl' />
                                </div>
                                <div>
                                    <h3 className='font-medium'>Work Time</h3>
                                    <p className='text-zinc-600 text-sm'>Mon - Fri 9 AM - 3 PM</p>
                                </div>
                            </div>
                            <div className='flex justify-start items-center gap-3'>
                                <div>
                                    <FaLocationDot className='text-[#fff] text-xl' />
                                </div>
                                <div>
                                    <h3 className='font-medium'>Address</h3>
                                    <p className='text-zinc-600 text-sm'>Nangran, Roopnagar, Punjab</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contactForm border border-[#ff9900]">
                        <h2>Send a Message</h2>
                        <div class="formBox">
                        <div class="inputBox w50">
                            <input type="text" name="name" value={contactData.name} onChange={changeHandler} required />
                            <span>Name</span>
                        </div>
                        <div class="inputBox w50">
                            <input type="email" name="email" value={contactData.email} onChange={changeHandler} required />
                            <span>Email Address</span>
                        </div>
                        <div class="inputBox w50">
                            <input type="number" name="contact" value={contactData.contact} onChange={changeHandler}  required />
                            <span>Contact</span>
                        </div>
                        <div class="inputBox w100">
                            <textarea name='message' onChange={changeHandler} value={contactData.message} required></textarea>
                            <span>Write your message here...</span>
                        </div>
                        <div class="inputBox w100">
                            <input type="submit" onClick={submitContact} value="Send" />
                        </div>
                    </div>
                </div>                    
            </div>         
    </div>
  )
}

export default ContactSection