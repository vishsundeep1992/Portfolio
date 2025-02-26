import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import {Link} from 'react-scroll'

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home"
    },
    {
      id: 1,
      text: "About"
    }, 
    {
      id: 1,
      text: "Portfolio"
    }, 
    {
      id: 1,
      text: "Experience"
    }, 
    {
      id: 1,
      text: "Contacts"
    },
  ]
  return (
    <div>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-10 bg-white'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex space-x-2'>
            <img src='' alt='Logo'></img>
            <h1 className='font-semibold text-xl cursor-pointer'>San<span className='text-sky-500'>Deep</span>
              <p className='text-xs'>Web Developer</p></h1>
          </div>
          <div>
            <ul className='hidden md:flex space-x-8 '>
              {
                navItems.map(({id,text})=>(
                  <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                  <Link to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass='active'                  
                  >{text}</Link></li>

                ))
              }
            </ul>
            <div className='md:hidden' onClick={() => setMenu(!menu)}>{menu ? <IoIosClose size={24} /> : <RxHamburgerMenu size={24} />}</div>
          </div>
        </div>
        {/* ---------mobile Navbar----------- */}
        {
          menu && (
            <div>
              <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 font-medium text-xl bg-white'>
              {
                navItems.map(({id,text})=>(
                  <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                  <Link 
                  onClick={() => setMenu(!menu)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass='active'                  
                  >{text}</Link>
                  </li>
                ))
              }
              </ul>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
