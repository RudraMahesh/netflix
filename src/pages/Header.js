import React, { useEffect, useState } from 'react'
import Logo from "../images/Logo.png"
import { Link, NavLink, json, useNavigate } from 'react-router-dom'
import { BiHelpCircle, BiSearch, BiTransfer } from "react-icons/bi"
import { BsBell } from "react-icons/bs"
import { IoMdArrowDropdown } from "react-icons/io"
import { MdOutlineAccountCircle } from "react-icons/md"
import axios from 'axios'
import Api from './Api'
import { UserAuth } from '../Context/auth';
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function Header() {
    const [open, setOpen] = useState(false);
    const [canvas, setCanvas] = useState(false);
    // for search api
    const { data, setQuery, searchApi, query } = UserAuth()

    useEffect(() => {
        searchApi()
    }, [query])
    console.log(data)

    const navigate = useNavigate()
    function logOut() {
        localStorage.clear("users")
        navigate("/login")
    }
    function onSearch() {
        setOpen(false)
        setQuery([])
    }
    function handle() {
        setQuery([])
        setOpen(false)
    }


    const userName = localStorage.getItem("users")
    const title = (JSON.parse(userName).email).substring(0, 15);
    const [drop, setDrop] = useState(false);
    const imgUrl = "http://occ-0-6071-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
    const imgUrl2 = "http://occ-0-6071-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABd5nlJrIwztyDvbvupWZYlLU9xW60TEEw6szfjI2qUFOG_Sd2GhcKvd4w3uA_hUB47IRJo6An0OV0m7eBLyN9BX6EF94b9BFtsIz.png?r=df8"


    return (
        <div className='bg-black sticky top-0 z-50'>
            <div className='flex items-center justify-between mx-auto px-2 xl:px-10'>
                <div className='flex items-center'>
                    <Link to="/main" className='flex items-center'>
                        <div className='relative '>
                            <span className="text-3xl text-white xl:hidden pe-3 xl:pe-0" onClick={() => setCanvas(!canvas)}><GiHamburgerMenu /></span>

                            {
                                canvas === true ?
                                    <div className='xl:hidden fixed  w-[50vw] h-screen z-50 left-0 transition-[0.8s] bg-black'>
                                        <div className='h-full text-gray-400'>
                                            <div className='px-3 my-7'>
                                                <div className='flex items-center '>
                                                    <img src={imgUrl} className='w-[15%]' />
                                                    <p className='ps-2 text-white'>{
                                                        title.length >= 15 ?
                                                            `${title}...`
                                                            :
                                                            title
                                                    }</p>
                                                </div>
                                                <ul className='list-none mt-3 font-bold'>
                                                    <Link to="/account" className='text-gray-400 no-underline'><li className='pt-3 hover:text-white'>Account</li></Link>
                                                    <a href='https://help.netflix.com/en/' className='text-gray-400 no-underline'>
                                                        <li className='pt-3 hover:text-white'>Help Center</li>
                                                    </a>
                                                    <li className='pt-3 hover:text-white' onClick={logOut}>Sign Out All Netflix</li>
                                                </ul>
                                            </div>
                                            <hr />
                                            <div className='px-3 mt-5'>
                                                <div>
                                                    <NavLink to="/" className='text-gray-400 no-underline text-lg hover:text-white'>Home</NavLink>
                                                </div>
                                                <div>
                                                    <NavLink to="/list" className='text-gray-400 no-underline text-lg hover:text-white'>My List</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    : null
                            }
                        </div>

                        <img src={Logo} className='w-28 lg:w-28 md:w-32 sm:w-20' onClick={handle} />
                    </Link>



                    <ul className='gap-5 text-base ps-10 hidden xl:flex'>
                        <li className='list-none'><NavLink to="/main" className='no-underline text-gray-400 hover:text-gray-500'>Home</NavLink></li>
                        {/* <li className='list-none'><NavLink to="/" className='no-underline text-gray-300 hover:text-gray-500'>Tv Shows</NavLink></li> */}
                        {/* <li className='list-none'><NavLink to="/" className='no-underline text-gray-300 hover:text-gray-500'>Movies</NavLink></li> */}
                        {/* <li className='list-none'><NavLink to="/" className='no-underline text-gray-300 hover:text-gray-500'>News And Popular</NavLink></li> */}
                        <li className='list-none'><NavLink to="/list" className='no-underline text-gray-400 hover:text-gray-500'>My List</NavLink></li>
                        {/* <li className='list-none'><NavLink to="/" className='no-underline text-gray-300 hover:text-gray-500'>Browse By Languages</NavLink></li> */}
                    </ul>
                </div>

                <div className='text-right flex xl:gap-7 items-center justify-center'>
                    <div className='relative'>
                        {
                            open === true ?
                                <div className=' text-white text-2xl pt-1' onClick={onSearch}><AiOutlineCloseCircle /></div>
                                :
                                <BiSearch className='text-2xl pt-1 text-white' onClick={() => setOpen(!open)} />
                        }
                        {
                            open === true ?
                                <div className='absolute bottom-0 right-7'>
                                    <input type='text' placeholder='Title, People, Genres' className='px-2 py-2 rounded-2xl outline-none border-2 border-double border-white transparent text-white ps-3 w-24 md:w-40' onChange={(e) => setQuery(e.target.value)} />
                                </div>
                                : null
                        }
                    </div>

                    <div className='relative'>
                        <div className='peer'>
                            <BsBell className=' text-2xl text-white hidden xl:block' />
                        </div>

                        <div className="hidden peer-hover:block hover:block absolute w-40 cursor-pointer right-1/4 rounded transparent z-50 text-white border-2 border-white">
                            <h3 className='text-white text-center py-3'>No Notification</h3>
                        </div>

                    </div>

                    <div className='hidden xl:block'>
                        <div className="me-3 items-center relative" onClick={(e) => setDrop(!drop)}>
                            <button className="peer text-lg bg-transparent border-none rounded transition text-white"><img src={imgUrl} className='w-7' /><IoMdArrowDropdown /></button>

                            <div className="hidden peer-hover:block hover:block absolute w-52 cursor-pointer right-1/4 rounded transparent z-10 text-white border-2 border-white">
                                <div className=" py-1 text-black flex items-center mx-3 mt-2 ">
                                    <img src={imgUrl} className='w-7' />
                                    <span className="text-white ps-2 hover:underline">
                                        {
                                            title.length >= 15 ?
                                                `${title}...`
                                                :
                                                title
                                        }
                                    </span>
                                </div>
                                <div className=" py-1 text-black flex mx-3 items-center mt-1">
                                    <img src={imgUrl2} className='w-7' />
                                    <span className="text-white ps-2 hover:underline">Children</span>
                                </div>
                                <div className=" py-1 flex mx-3 items-center mt-1 text-white">
                                    <p className='text-xl'><BiTransfer /></p>
                                    <span className="text-white ps-2 hover:underline">Transfer Profile</span>
                                </div>
                                <Link to="/account" className="no-underline py-1 flex mx-3 items-center mt-1 text-white">
                                    <p className='text-xl'><MdOutlineAccountCircle /></p>
                                    <span className="text-white ps-2 hover:underline ">Account</span>
                                </Link>
                                <div className=" py-1 flex mx-3 items-center mt-1 text-white">
                                    <p className='text-xl'><BiHelpCircle /></p>
                                    <a href='https://help.netflix.com/en/' className="text-white ps-2 no-underline hover:underline">Help Center</a>
                                </div>
                                <hr />
                                <div className=" py-2 flex mx-3 items-center justify-center mt-1 text-white hover:underline" onClick={logOut}>
                                    Sign Out Of Netflix
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
