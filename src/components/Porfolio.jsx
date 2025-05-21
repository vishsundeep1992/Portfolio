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
import Carousel from "../components/carousel.component";
// ------Project Logos-----
import tamago from "../assets/Images/logos/tamago.svg"
import virujh from "../assets/Images/logos/virujh.svg"
import eshop from "../assets/Images/logos/eshop.svg"
import medishop from "../assets/Images/logos/medishop.svg"
import milagro from "../assets/Images/logos/milagro.svg"
import prodigi from "../assets/Images/logos/prodigi.svg"



function Porfolio() {
    const slides0 = [
        "../src/assets/Images/Projects/tamago_page-0001.jpg",
        "../src/assets/Images/projects/tamago_page-0002.jpg",
        "../src/assets/Images/projects/tamago_page-0003.jpg",
        "../src/assets/Images/projects/tamago_page-0004.jpg",
        
    ];
    const slides1 = [
        "../src/assets/Images/Projects/medishop/Screen-1.png",
        "../src/assets/Images/Projects/medishop/Screen-2.png",
        "../src/assets/Images/Projects/medishop/Screen-3.png",
        "../src/assets/Images/Projects/medishop/Screen-4.png",
        "../src/assets/Images/Projects/medishop/Screen-5.png",
        "../src/assets/Images/Projects/medishop/Screen-6.png",
        "../src/assets/Images/Projects/medishop/Screen-7.png",
        "../src/assets/Images/Projects/medishop/Screen-8.png",
        "../src/assets/Images/Projects/medishop/Screen-9.png"
    ]; 
    const slides2 = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ]; 
    const slides3 = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ]; 
    const slides4 = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ]; 
    const slides5 = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ];
    const slides6 = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ];
    const slides7 = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ];
    const slides8 = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ];


    const cardItem = [{
        id: 1,
        logo: tamago,
        name: "Tamago",
        slide: <Carousel slides={slides0} />
    }
        ,
    {

        id: 2,
        logo: medishop,
        name: "Medishop App",
        slide: <Carousel slides={slides1} />

    },
    {
        id: 3,
        logo: prodigi,
        name: "Prodigi",
        slide: <Carousel slides={slides2} />

    },
    {
        id: 4,
        logo: eshop,
        name: "E-Shop",
        slide: <Carousel slides={slides3} />

    },
    {
        id: 5,
        logo: virujh,
        name: "Virujh",
        slide: <Carousel slides={slides4} />

    },
    {
        id: 6,
        logo: milagro,
        name: "Restaurent Web App",
        slide: <Carousel slides={slides5} />

    },
    {
        id: 7,
        logo: figma,
        name: "Posters",
        slide: <Carousel slides={slides6} />

    },
    {
        id: 8,
        logo: ai,
        name: "Logos",
        slide: <Carousel slides={slides7} />

    },
    {
        id: 9,
        logo: ps,
        name: "Other",
        slide: <Carousel slides={slides8} />

    }

    ]
    return (
        <div>
            <div name='Portfolio' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <h1 className='text-5xl font-bold mb-5'>PORTFOLIO</h1>
                <span className='font-bold underline'>
                    Featured Projects
                </span>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-5'>
                    {
                        cardItem.map(({ id, logo, name,slide }) => (
                            <div key={id} className=''>
                                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                    <img className="w-[80px] h-[80px] text-gray-500 dark:text-gray-400 mb-3" src={logo} />
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="text-white bg-gray-900 px-4 py-2 rounded text-sm" onClick={() => document.getElementById('my_modal_1').showModal()}>View More</button>
                                    <dialog id="my_modal_1" className="modal ">
                                        <div className="modal-box p-0 w-full max-w-2xl max-h-full">
                                            {/* <h3 className="font-bold text-lg">Hello!</h3> */}

                                            {/* Press ESC key or click the button below to close */}
                                            <div className="">
                                                {slide}
                                            </div>

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
