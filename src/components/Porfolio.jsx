import React from 'react'
import reactjs from '../assets/Images/react.svg'
import tailwind from "../assets/Images/tailwind.svg"
import js from "../assets/Images/js.svg"
import bootstrap from "../assets/Images/bootstrap.svg"
import css from "../assets/Images/css.svg"
import figma from "../assets/Images/figma.svg"
import ai from "../assets/Images/Ai.svg"
import ps from "../assets/Images/ps.svg"
import git from "../assets/Images/github.svg"


function Porfolio() {
const cardItem=[{
     id:1,
     logo:reactjs,
     name:"ReactJS"
}
,
{
    
        id:2,
        logo:git,
        name:"Github"
    
},
{
    id:3,
    logo:js,
    name:"Javascript"
},
{
    id:4,
    logo:bootstrap,
    name:"Bootstrap"
},
{
    id:5,
    logo:tailwind,
    name:"Tailwind"
},
{
    id:6,
    logo:css,
    name:"CSS"
},
{
    id:7,
    logo:figma,
    name:"Figma"
},
{
    id:8,
    logo:ai,
    name:"Adobe Illustrator"
},
{
    id:9,
    logo:ps,
    name:"Adobe Photoshop"
}

]
    return (
        <div>
            <div name='Portfolio' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <h1 className='text-3xl font-bold mb-5'>Porfolio</h1>
                <span className='font-bold underline'>
                    Featured Projects
                </span>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-5'>
                    {
                        cardItem.map(({id,logo,name})=>(
                            <div key={id} className=''>
                            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                <img className="w-[80px] h-[80px] text-gray-500 dark:text-gray-400 mb-3" src={logo}/>
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                                <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                                    See our guideline
                                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                    </svg>
                                </a>
                            </div></div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Porfolio;
