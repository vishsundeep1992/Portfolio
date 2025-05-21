import React from 'react'
import pic from "../assets/Images/upload.png"
import { FaBehance } from "react-icons/fa"
import { TbBrandDribbbleFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

function About() {

    return (

        <div>
            <div name='About' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-5'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 order-1 py-10'>
                        <div className='md:w-[80%]'>
                            <img src={pic} alt='' className='text-center'/>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:mt-24 order-2 md:order-1 md:p-5'>
                        <h1 className='text-5xl font-bold mb-5'>ABOUT ME</h1>
                        <h4 className='text-md font-bold text-red-600 mb-5 text-'>SANDEEP - UI/UX DESIGNER DEVELOPER</h4>
                        <p>
                            {/* Hello, I'm Sandeep, a passonate web developer with akeen eye for web development. Witha a background in IT, I strive to create impactful and visually stunning software solutions that leave a lasting impression. */}
                            With 4 years of experience as a UI/UX Designer, I have developed a successful track record as a problem solver and innovator in this specialty. I have led the redesign of company websites, revamped existing mobile apps, improved the usability of software applications, and conducted comprehensive user research to identify new feature opportunities that resulted in a 25% increase in customer satisfaction. My expertise will bring value to any organization looking for a UX Designer.
                        </p>
                        <div className='flex space-x-10 mt-5 text-2xl'>
                            <a href="#" target='_blank' className='hover:text-blue-700 hover:scale-125'><FaBehance /></a>
                            <a href="https://dribbble.com/Vishwakerama" target='_blank' className='hover:text-pink-500 hover:scale-125'><TbBrandDribbbleFilled/></a>
                            <a href="#" target='_blank' className='hover:text-sky-500 hover:scale-125'><FaLinkedinIn /></a>
                            <a href="#" target='_blank' className='hover:text-purple-700 hover:scale-125'><IoMdMail /></a>
                            <a href="#" target='_blank' className='hover:text-pink-600 hover:scale-125'><AiFillInstagram /></a>
                        </div>

                    </div>
                </div>
                <div className='hidden'>
                    <div className='EducationDetails'>
                        <h1 className='text-green-500 font-bold'>Education & Training</h1>
                        <span>
                            <ul>
                                <li>MCA,National Institute of technology,Karnataka,2016-2019</li>
                                <li>CHNA,Sardar Vallabh Bhai Patel Polytechnice College,Bhopal,2015-2015</li>
                                <li>BCA,Extol Institue of Computer Science,20111-20114</li>
                            </ul>
                        </span>
                    </div>
                    <div className='EducationDetails'>
                        <h1 className='text-green-500 font-bold'>Skills & Expertise</h1>
                        <span>
                            <ul>
                                <li>MCA,National Institute of technology,Karnataka,2016-2019</li>
                                <li>CHNA,Sardar Vallabh Bhai Patel Polytechnice College,Bhopal,2015-2015</li>
                                <li>BCA,Extol Institue of Computer Science,20111-20114</li>
                            </ul>
                        </span>
                    </div><div className='EducationDetails'>
                        <h1 className='text-green-500 font-bold'>Professional Experience</h1>
                        <span>
                            <ul>
                                <li>MCA,National Institute of technology,Karnataka,2016-2019</li>
                                <li>CHNA,Sardar Vallabh Bhai Patel Polytechnice College,Bhopal,2015-2015</li>
                                <li>BCA,Extol Institue of Computer Science,20111-20114</li>
                            </ul>
                        </span>
                    </div>
                    <div className='EducationDetails'>
                        <h1 className='text-green-500 font-bold'>Achievements & Awards</h1>
                        <span>
                            <ul>
                                <li>MCA,National Institute of technology,Karnataka,2016-2019</li>
                                <li>CHNA,Sardar Vallabh Bhai Patel Polytechnice College,Bhopal,2015-2015</li>
                                <li>BCA,Extol Institue of Computer Science,20111-20114</li>
                            </ul>
                        </span>
                    </div>
                    <div className='EducationDetails'>
                        <h1 className='text-green-500 font-bold'>Mission Statement</h1>
                        <span>
                            <ul>
                                <li>MCA,National Institute of technology,Karnataka,2016-2019</li>
                                <li>CHNA,Sardar Vallabh Bhai Patel Polytechnice College,Bhopal,2015-2015</li>
                                <li>BCA,Extol Institue of Computer Science,20111-20114</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About