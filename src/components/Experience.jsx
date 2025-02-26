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
import html from "../assets/Images/html.svg"


function Experience() {
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
    name:"Illustrator"
},
{
    id:9,
    logo:ps,
    name:"Photoshop"
},{
    id:10,
    logo:html,
    name:"html"
}

]
    return (
        <div>
            <div name='Experience' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <h1 className='text-3xl font-bold mb-5'>Experience</h1>
                <span className=''>
                    I have more than 4.5 years of experience in below technologies. 
                </span>
                <div className='grid justify-between grid-cols-1 md:grid-cols-5 gap-3 mt-5'>
                    {
                        cardItem.map(({id,logo,name})=>(
                            <div key={id} className=''>
                            <div className="max-w-sm p-6 hover:scale-105 hover:border  bg-white border flex flex-col items-center border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                <img className="w-[40px] h-[40px]  text-gray-500 dark:text-gray-400 mb-3" src={logo}/>
                                <a href="#">
                                    <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                                </a>                                
                            </div></div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience;
