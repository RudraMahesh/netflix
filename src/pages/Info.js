import React, { useEffect, useState } from 'react'
import { UserAuth } from '../Context/auth'
import axios from 'axios';
import { AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlinePlayCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import { BiLike } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import movieTrailer from 'movie-trailer';

export const Info = () => {
    const { one, setOpenInfo, setTrailerUrl, trailerUrl, sendTitle } = UserAuth();
    const [state, setState] = useState();
    const [url, setUrl] = useState(false)
    const hours = state && state.runtime
    const navigate = useNavigate()
    const Jamtara = "https://occ-0-2164-41.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdgthHcUHzeTLKeHQ2oX6jqDg5ry5WaDy-NDRlC8_CPsktxBKM1QYRelfCAJs92C83KjUf0CxV-U4AiOUqDpAty14RJjEpJ3eqWW.webp?r=072"


    async function apiCall() {
        // const data = await axios.get(`https://api.themoviedb.org/3/movie/${one}?api_key=e15e45b5fb06c72a11c5c80c440a1cce&language=en-US`)
        // setState(data.data)
        if (one === "jamtara") {
            console.log("sorry");
            setUrl(true)
        }
        else {
            const data = await axios.get(`https://api.themoviedb.org/3/movie/${one}?api_key=e15e45b5fb06c72a11c5c80c440a1cce&language=en-US`)
            setState(data.data)
        }
    }

    const handleTrailer = (movie) => {
        movieTrailer(movie || "").then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search)
            setTrailerUrl(urlParams.get("v"))
            console.log(url);
            navigate("/video")
        })
    }
    useEffect(() => {
        apiCall()
    }, [])
    return (
        <>
            {
                url === true ?

                    <div className='bg-black bg-[rgba(0,0,0,0.2)] h-screen w-full fixed top-0 z-50 hidden xl:block'>
                        <div div className='z-50 fixed top-7 xl:left-[30%] 2xl:left-[35%]' >
                            <p className='text-white text-4xl text-right cursor-pointer' onClick={() => setOpenInfo(false)}><AiOutlineCloseCircle /></p>
                            <div className='bg-black z-50 rounded w-[35rem]'>
                                <div className='relative'>
                                    <div className=' h-60'>
                                        <img src={Jamtara} className='w-full h-full object-cover rounded' />
                                        <div className='w-full h-full absolute top-0 bg-gradient-to-t from-black'></div>
                                    </div>
                                    <div className='absolute bottom-0'>
                                        <h2 className='family text-white text-4xl px-3 font-bold'>Jamtara</h2>
                                    </div>
                                </div>
                                <a href='https://www.youtube.com/watch?v=GoXd_sESBBI' className='flex mt-8 px-4 items-center no-underline' >
                                    <div className='text-black bg-white no-underline text-4xl flex justify-center items-center rounded px-4 outline-none border-none hover:bg-gray-400 cursor-pointer'>
                                        <p className='text-4xl'><BsFillPlayFill /></p>
                                        <p className='text-xl'>Play</p>
                                    </div>
                                    <div className='text-4xl ps-4 text-gray-400 hover:text-white'><BiLike /></div>
                                </a>
                                <div className='text-white text-xl px-4 pt-5 pb-3'>
                                    <div className='flex'>
                                        <p className='text-green-600'>8%</p>
                                        <p className='ps-3'>2022</p>
                                        <p className='ps-3'>2 Season</p>
                                        {/* <p className='ps-3'>{state && state.production_countries.name}</p> */}
                                    </div>
                                    <p className='py-4 text-xl'>This crime drama television series is based on the real-life experiences of people living in Jamtara district, Jharkhand. The beginning of this series focuses on the main character, Sunny.</p>
                                </div>
                                <hr />
                                <div className='text-white px-4 py-3 text-base pb-20'>
                                    <h3 className='text-2xl'>More About <span className='font-bold'>{state && state.original_title}</span></h3>
                                    <div className='pt-3'>
                                        <p className='text-gray-400'>Status: <span className='text-white'>Released</span></p>
                                        {
                                            state && state.tagline ?
                                                <p className='text-gray-400'>Tagline: <span className='text-white'>{state && state.tagline}</span></p>
                                                :
                                                null
                                        }
                                        <p className='text-gray-400'>Production Companies: <span className='text-white'>Soumendre Pathi</span></p>

                                        <p className='text-gray-400'>Production Countries: <span className='text-white'>India</span></p>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>

                    :
                    <div className='bg-black bg-[rgba(0,0,0,0.3)] h-screen w-full fixed top-0 z-50 hidden xl:block'>
                        <div div className='z-50 fixed top-7 xl:left-[30%] 2xl:left-[35%]' >
                            <p className='text-white text-4xl text-right cursor-pointer' onClick={() => setOpenInfo(false)}><AiOutlineCloseCircle /></p>
                            <div className='bg-black z-50 rounded w-[35rem]'>
                                <div className='relative'>
                                    <div className=' h-60'>
                                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${state && state.poster_path}`} className='w-full h-full object-cover rounded' />
                                        <div className='w-full h-full absolute top-0 bg-gradient-to-t from-black'></div>
                                    </div>
                                    <div className='absolute bottom-0'>
                                        <h2 className='family text-white text-4xl px-3 font-bold'>{state && state.original_title}</h2>
                                    </div>
                                </div>
                                <div className='flex mt-8 px-4 items-center' onClick={() => handleTrailer(sendTitle)}>
                                    <div className='text-black bg-white no-underline text-4xl flex justify-center items-center rounded px-4 outline-none border-none hover:bg-gray-400 cursor-pointer'>
                                        <p className='text-4xl'><BsFillPlayFill /></p>
                                        <p className='text-xl'>Play</p>
                                    </div>
                                    <div className='text-4xl ps-4 text-gray-400 hover:text-white'><BiLike /></div>
                                </div>
                                <div className='text-white text-xl px-4 pt-5 pb-3'>
                                    <div className='flex'>
                                        <p className='text-green-600'>{state && state.vote_average}%</p>
                                        <p className='ps-3'>{state && state.release_date}</p>
                                        <p className='ps-3'>{Math.trunc(hours)}m</p>
                                        {/* <p className='ps-3'>{state && state.production_countries.name}</p> */}
                                    </div>
                                    <p className='py-4 text-xl'>{state && state.overview}</p>
                                </div>
                                <hr />
                                <div className='text-white px-4 py-3 text-base pb-20'>
                                    <h3 className='text-2xl'>More About <span className='font-bold'>{state && state.original_title}</span></h3>
                                    <div className='pt-3'>
                                        <p className='text-gray-400'>Status: <span className='text-white'>{state && state.status}</span></p>
                                        {
                                            state && state.tagline ?
                                                <p className='text-gray-400'>Tagline: <span className='text-white'>{state && state.tagline}</span></p>
                                                :
                                                null
                                        }
                                        {
                                            state && state.production_companies.slice(0, 1).map((item) => (
                                                <p className='text-gray-400'>Production Companies: <span className='text-white'>{item.name}</span></p>
                                            ))
                                        }
                                        {
                                            state && state.production_countries.slice(0, 1).map((item) => (
                                                <p className='text-gray-400'>Production Countries: <span className='text-white'>{item.name}</span></p>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>
            }
        </>
    )
}
