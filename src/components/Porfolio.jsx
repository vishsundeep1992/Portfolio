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
    
    const cardItem = [{
        id: 1,
        logo: reactjs,
        name: "Restaurent Web App"
    }
        ,
    {

        id: 2,
        logo: git,
        name: "Medishop App"

    },
    {
        id: 3,
        logo: js,
        name: "Prodigi"
    },
    {
        id: 4,
        logo: bootstrap,
        name: "E-Shop"
    },
    {
        id: 5,
        logo: tailwind,
        name: "Virujh"
    },
    {
        id: 6,
        logo: css,
        name: "Tamago"
    },
    // {
    //     id: 7,
    //     logo: figma,
    //     name: "Figma"
    // },
    // {
    //     id: 8,
    //     logo: ai,
    //     name: "Adobe Illustrator"
    // },
    // {
    //     id: 9,
    //     logo: ps,
    //     name: "Adobe Photoshop"
    // }

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
                        cardItem.map(({ id, logo, name }) => (
                            <div key={id} className=''>
                                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                    <img className="w-[80px] h-[80px] text-gray-500 dark:text-gray-400 mb-3" src={logo} />
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="text-white bg-gray-900 px-4 py-2 rounded text-sm" onClick={() => document.getElementById('my_modal_1').showModal()}>View More</button>
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Hello!</h3>
                                            <p className="py-4">Press ESC key or click the button below to close                                            
                                            </p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div></div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Porfolio;
