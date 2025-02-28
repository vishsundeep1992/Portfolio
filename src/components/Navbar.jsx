import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-scroll'
import logo from '../assets/Images/logo.svg'
import logoW from '../assets/Images/logo-white.svg'
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

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

  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }
  return (
    <div>
      <div className='dark:bg-slate-700 dark:text-white max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-12 md:h-16 fixed top-0 left-0 right-0 z-10 bg-white'>
        <div className='flex justify-between items-center h-12 md:h-16'>
          <div className='flex space-x-2'>
            <img src={logo} alt='Logo' className='w-[120px] md:w-[180px] dark:hidden' />
            <img src={logoW} alt='LogoW' className='w-[120px] md:w-[180px] hidden dark:block' />
            {/* <h1 className='font-semibold text-sm md:text-xl cursor-pointer '><span className='text-red-500'>San</span><span className='text-sky-900'>Deep</span>
              <p className='text-xs' >Web Developer</p></h1> */}
          </div>
          <div>
            <ul className='hidden md:flex space-x-8'>
              {
                navItems.map(({ id, text }) => (
                  <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                    <Link to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass='active'
                    >{text}</Link></li>

                ))
              }
              <button onClick={() => darkModeHandler()}>
                {

                  dark && <IoSunny /> // render sunny when dark is true
                }
                {
                  !dark && <IoMoon /> // render moon when dark is false
                }
              </button>
            </ul>
            <div className='flex justify-between md:hidden'>
            <button onClick={() => darkModeHandler()} className='mr-4'>
              {

                dark && <IoSunny /> // render sunny when dark is true
              }
              {
                !dark && <IoMoon /> // render moon when dark is false
              }
            </button>
            <div onClick={() => setMenu(!menu)}>{menu ? <IoIosClose size={24} /> : <RxHamburgerMenu size={24} />}</div></div>
          </div>
        </div>
        {/* ---------mobile Navbar----------- */}
        {
          menu && (
            <div>
              <ul className='md:hidden  dark:text-white dark:bg-slate-700 flex flex-col h-screen items-center justify-center space-y-4 font-medium text-xl bg-white'>
                {
                  navItems.map(({ id, text }) => (
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
