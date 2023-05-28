import React from 'react'
import Logo from "../images/Logo.png"
import image from "../images/404.jpg"
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div className='relative'>
            <div className='relative'>
                <img src={image} className='w-full h-screen' />
                <div className='transparent w-full h-full absolute top-0'></div>
            </div>
            <div className='absolute top-0 w-full'>
                <div className='bg-black py-2 z-50'>
                    <Link to="/"><img src={Logo} className='w-28 lg:w-28 md:w-32 sm:w-20 ps-5' /></Link>
                </div>
                <div className='text-white flex justify-center items-center flex-col mt-20 md:mt-52'>
                    <h1 className='text-3xl md:text-4xl xl:text-6xl font-bold'>Lost Your Way?</h1>
                    <p className='text-center text-xl xl:text-3xl pt-10'>Sorry We Can't Find That Page. You'll Find Lots to Explore on The Home Page.</p>
                    <Link to="/">
                        <button className='text-2xl px-3 py-2 font-bold rounded outline-none border-none mt-7 hover:bg-slate-50 xl:mt-10'>Netflix Home</button>
                    </Link>
                    <span className='text-xl pt-5'>Error Code <span className='font-bold'>NSES-404</span></span>
                </div>
            </div>

        </div>
    )
}
