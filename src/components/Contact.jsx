import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message
        };
        try {
            await axios.post("https://getform.io/f/broyyeoa", userInfo);
            // toast.success("Thank you for contact us. We will get back to you.");
            toast.success("Your message has been sent.");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!!!")
        }
    };

    return (
        <div>
            <div name='Contacts' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <h1 className='text-5xl font-bold mb-5'>CONTACT ME</h1>
                <span>Please fill out the form below to contact me</span>
                <div className='flex justify-center mt-5'>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        // action="https://getform.io/f/broyyeoa" method="POST"
                        className='bg-slate-200 p-4 rounded-xl font-semibold'>
                        <h1 className='text-xl font-semibold mb-4 text-center text-black'>Send your Message</h1>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700 '>Full Name</label>
                            <input
                                {...register("name", { required: true })} 
                                className='block shadow appearance-none border rounded-lg py-2 px-3 leading-tight focus:outline'
                                placeholder='Enter your full name' name='name'
                            />
                            {errors.name && <span className='text-red-500'>Please enter your full name*</span>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700 '>Email Address</label>
                            <input
                                {...register("email", { required: true })} 
                                className='block shadow appearance-none border rounded-lg py-2 px-3 leading-tight focus:outline'
                                placeholder='Enter your email address' name='email'

                            />
                            {errors.email && <span className='text-red-500'>Please enter your email*</span>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700 '>Message</label>
                            <textarea
                                {...register("message", { required: true })}
                                className='block shadow appearance-none border rounded-lg py-2 px-3 leading-tight focus:outline'
                                placeholder='Enter your Query' name='message'
                            />
                            {errors.message && <span className='text-red-500'>Pleae enter your message*</span>}
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-5">
                                <div
                                    className="w-40 h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                                </div>
                            </div>
                            <button type='submit' className="relative z-2 inline-flex items-center justify-center w-full px-8 py-1 font-semibold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
