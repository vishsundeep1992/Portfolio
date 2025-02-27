import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from '../assets/Images/coder.gif'

function Home() {
    return (
        <>
            <div name='Home' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 md:mt-24 order-2 md:order-1'>
                        <span >Welcome in My Feed</span>
                        <div className='flex flex-auto space-x-2 md:text-3xl w-[100px] md:w-auto'><h1>Hello, I'm a </h1>
                            {/* <span className='text-red-700 font-bold'>Developer</span> */}
                            <ReactTyped className='text-red-700 font-bold w-[5px] md:w-auto'
                                strings={[
                                    "Web Developer",
                                    "Web Designer",
                                    "UI/UX Designer",
                                ]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            >
                                <input type="text" />
                            </ReactTyped>

                        </div>
                        <p className='text-sm md:text-md text-justify mt-4'>Innovative and detail-oriented UI/UX Developer cum Designer with 4.5 years of experience in creating user-centric digital products. Proficient in designing wireframes, prototypes, and delivering high-quality front-end code. Adept at collaborating with cross-functional teams to ensure seamless user experiences. Passionate about keeping up with the latest design trends and technologies.</p>
                        <br />
                        {/* Social Media Icons */}
                        <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center'>
                            <div className='space-y-2 font-bold'>
                                <h1>Available on</h1>
                                <ul className='flex space-x-5 justify-center'>
                                    <li><a href="https://www.linkedin.com/in/sandeep-vishwakerama-15639017a/" target='_blank'><FaLinkedinIn className='text-2xl cursor-pointer' /></a></li>
                                    <li><a href="mailto:vish_sundeep@yahoo.co.in"><IoMdMail className='text-2xl cursor-pointer' /></a> </li>
                                    {/* <li><AiFillInstagram className='text-2xl cursor-pointer' /></li> */}
                                </ul>
                            </div>
                            <div className='space-y-2 font-bold'>
                                <h1>Currenty Working on</h1>
                                <ul className='flex space-x-5 justify-center'>
                                    <li><FaReact className='text-2xl cursor-pointer' /></li>
                                    <li><FaAngular className='text-2xl cursor-pointer' /></li>
                                    <li><RiTailwindCssFill className='text-2xl cursor-pointer' /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 order-1'>
                    <img src={pic} alt=''/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
