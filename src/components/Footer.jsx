import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,} from 'react-icons/fa'

function Footer() {

    return (
        <>
            <hr />
            <footer className=''>
                <div className='max-w-screen-2xl container text-center mx-auto px-4 md:px-20 py-5'>
                    <div className='flex flex-col items-center justify-center'>
                       <div className='flex space-x-4'>
                       <FaFacebook size={20}/>
                        <FaTwitter size={20}/>
                        <FaInstagram size={20}/>
                        <FaLinkedin size={20}/>
                       </div>
                       <div className='mt-8 border-t border-gray-700 pt-4 flex flex-col items-center'>
                        <p className='text-sm'>copyright &copy; 2024. All rights reserved.</p>
                    </div>
                    </div>
                   
                </div>
            </footer>
 
        </ >
    )
}

export default Footer