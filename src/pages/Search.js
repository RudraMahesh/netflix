import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './Header'
import { UserAuth } from '../Context/auth';
import { BiChevronDownCircle, BiLike } from 'react-icons/bi';
import { AiOutlinePlayCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { db } from '../Firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
import { Info } from './Info';

export const Search = () => {
    const [saved, setSaved] = useState(false)
    const { data, setQuery, searchApi, query, user, handleTrailer, openInfo, setOpenInfo, setOne, setSendTitle } = UserAuth()
    const navigate = useNavigate()

    const movieId = doc(db, 'users', `${user?.email}`)

    const saveShow = async (item) => {
        setSaved(true);
        await updateDoc(movieId, {
            savedShows: arrayUnion({
                id: item.id,
                title: item.title,
                img: item.backdrop_path
            })
        })
        navigate("/list")

    }

    function infoOpen(e) {
        setOne(e.id)
        setSendTitle(e.title)
        setOpenInfo(true)
    }

    function trailerHandle(e) {
        handleTrailer(e)
        navigate("/video")
    }

    return (
        <>
            <div className='mt-7'>
                {
                    openInfo === true ?
                        <div>
                            <Info />
                        </div>
                        : null
                }

                {
                    data.length == [] ?
                        <h2 className='text-white text-center'>No result Found</h2>
                        :
                        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 cursor-pointer gap-10 px-5 xl:px-14 '>
                            {
                                data && data.map((item, id) =>
                                    <div className='relative scale' key={id}>
                                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`} className='container mx-auto object-cover xl:w-64 xl:h-40 peer' onClick={() => trailerHandle(item)} />
                                        <div className='absolute top-0 hidden xl:peer-hover:block hover:block w-full h-auto bg-gray-900 rounded'>
                                            <div className='text-white'>
                                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`} className='container mx-auto object-cover xl:w-full xl:h-40 peer' onClick={() => trailerHandle(item)} />
                                                <div className='px-2 py-3'>
                                                    <div className='flex  justify-between'>
                                                        <div className='flex '>
                                                            <div className='text-3xl  text-gray-400 hover:text-white'><AiOutlinePlayCircle onClick={() => trailerHandle(item)} /></div>
                                                            <div className='text-3xl ps-1 text-gray-400 hover:text-white' onClick={(e) => saveShow(item)} >
                                                                <AiOutlinePlusCircle />
                                                            </div>
                                                            <div className='text-3xl ps-1 text-gray-400 hover:text-white'><BiLike /></div>
                                                        </div>
                                                        <div className='text-3xl text-gray-400 hover:text-white'><BiChevronDownCircle onClick={() => infoOpen(item)} /></div>
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
                }
            </div>
        </>
    )
}
