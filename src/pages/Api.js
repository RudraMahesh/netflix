import React, { useEffect, useState } from 'react'
import request from "../Api/Api-url"
import axios from 'axios'
import { AiFillPlayCircle, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlinePlayCircle, AiOutlinePlusCircle } from "react-icons/ai"
import { BiChevronDownCircle, BiLike } from "react-icons/bi"
import { UserAuth } from '../Context/auth'
import { db } from '../Firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { Search } from './Search'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"
import { VideoSection } from './VideoSection'
import { useNavigate } from 'react-router-dom'
import { Info } from './Info'

export default function Api({ title, apiUrl }) {
    // const [saved, setSaved] = useState(false)
    const [state, setState] = useState([])
    const { user, trailerUrl, setTrailerUrl, setOne, one, openInfo, setOpenInfo, setSendTitle, saved } = UserAuth();
    const navigate = useNavigate()
    const movieId = doc(db, 'users', `${user?.email}`)

    const saveShow = async (item) => {
        await updateDoc(movieId, {
            savedShows: arrayUnion({
                id: item.id,
                title: item.title,
                img: item.backdrop_path
            })
        })
        navigate("/list")
    }

    const fetchApi = async () => {
        let data = await axios.get(apiUrl)
        setState(data.data.results)
    }

    const handleTrailer = (movie) => {
        movieTrailer(movie?.title || "").then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search)
            setTrailerUrl(urlParams.get("v"))
            navigate("/video")  //because Constant api does not support navigate
        })
    }

    const handleInfo = (item) => {
        setOne(item.id)
        setSendTitle(item.title)
        setOpenInfo(true)
    }

    useEffect(() => {
        fetchApi()
    }, [apiUrl])


    return (
        <div>

            {
                openInfo === true ?
                    <div>
                        <Info />
                    </div>
                    : null
            }
            <div className=' text-white px-5 xl:px-14'>
                <h1 className='pb-5 text-xl xl:text-3xl pt-3 xl:pt-11 font-bold'>{title}</h1>
                <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 cursor-pointer gap-10'>
                    {
                        state && state.slice(0, 18).map((item, id) =>
                            <div className='relative scale' key={id}>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`} className='container mx-auto object-cover xl:w-64 xl:h-40 peer' onClick={() => handleTrailer(item)} />
                                <div className='absolute top-0 hidden xl:peer-hover:block hover:block w-full h-auto bg-gray-900 rounded'>
                                    <div className='text-white'>
                                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`} className='container mx-auto object-cover xl:w-full xl:h-40 peer' onClick={() => handleTrailer(item)} />
                                        <div className='px-2 py-3'>
                                            <div className='flex  justify-between'>
                                                <div className='flex '>
                                                    <div className='text-3xl  text-gray-400 hover:text-white' onClick={() => handleTrailer(item)}><AiOutlinePlayCircle /></div>
                                                    <div className='text-3xl ps-1 text-gray-400 hover:text-white' onClick={(e) => saveShow(item)} >
                                                        <AiOutlinePlusCircle />
                                                    </div>
                                                    <div className='text-3xl ps-1 text-gray-400 hover:text-white'><BiLike /></div>
                                                </div>
                                                <div className='text-3xl text-gray-400 hover:text-white' onClick={() => handleInfo(item)}><BiChevronDownCircle /></div>
                                            </div>
                                            <div>
                                                <h1 className='text-sm font-bold'>{item.title}</h1>
                                            </div>
                                            <div className='flex item items-center'>
                                                <div className='text-green-500 text-sm'>{item.vote_average}%</div>
                                                <span className='border bg-inherit border-solid border-white text-[8px] px-[3px] py-[1px] ms-2'>HD</span>
                                                <span className='text-[12px] ps-1'>{item.release_date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}
// https://youtu.be/MurderMystery2
// https://youtu.be/LM2F56uK0fs
