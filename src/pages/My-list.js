import React, { useEffect, useState } from 'react'
import { UserAuth } from "../Context/auth"
import { db } from '../Firebase'
import { UpdateData, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import Header from './Header'
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlinePlayCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { BiChevronDownCircle, BiLike } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { Info } from './Info'
import { Search } from './Search'

export const List = () => {
    const { user, handleTrailer, setOpenInfo, setOne, openInfo, setSendTitle, query, saved, setSaved } = UserAuth()
    const navigate = useNavigate()

    function playTrailer(event) {
        handleTrailer(event)
        navigate("/video")
    }

    function handleOpen(item) {
        setOne(item.id)
        setSendTitle(item.title)
        setOpenInfo(true)
    }

    useEffect(() => {
        onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
            setSaved(doc.data()?.savedShows);
        })
    }, [user?.email])

    // for Deleting list items
    const movieRef = doc(db, "users", `${user?.email}`)
    async function deleteShow(id) {
        try {
            const result = saved.filter((item) => item.id !== id);
            await updateDoc(movieRef, {
                savedShows: result
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='text-white'>
            <Header />
            {
                openInfo === true ?
                    <div>
                        <Info />
                    </div>
                    : null
            }
            {
                query.length == [] ?

                    <>
                        {
                            saved && saved.length == [] ?

                                <div className='text-white text-center mt-7 md:mt-10'>
                                    <h1 className='font-bold'>Your list is Empty</h1>
                                    <Link to="/">
                                        <button className='text-2xl px-3 py-2 font-bold rounded outline-none border-none mt-3 hover:bg-slate-50 xl:mt-7'>Add Item</button>
                                    </Link>
                                </div>
                                :
                                <div className=' text-white px-5 xl:px-14 mt-5 md:mt-10'>
                                    <div className='font-bold text-4xl text-white'>My List</div>
                                    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 cursor-pointer gap-10 mt-5'>
                                        {
                                            saved && saved.map((item, id) =>
                                                <div className='relative scale' key={id}>
                                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.img}`} className='container mx-auto object-cover xl:w-64 xl:h-40 peer' onClick={() => playTrailer(item)} />
                                                    <span className='font-bold'>{item.title}</span>
                                                    <div className='absolute top-0 hidden xl:peer-hover:block hover:block w-full h-auto bg-gray-900 rounded'>
                                                        <div className='text-white'>
                                                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.img}`} className='container mx-auto object-cover xl:w-full xl:h-40 peer' onClick={() => playTrailer(item)} />
                                                            <div className='px-2 py-3'>
                                                                <div className='flex  justify-between'>
                                                                    <div className='flex '>
                                                                        <div className='text-3xl  text-gray-400 hover:text-white' onClick={() => playTrailer(item)}><AiOutlinePlayCircle /></div>
                                                                        <div className='text-3xl ps-1 text-gray-400 hover:text-white' onClick={() => deleteShow(item.id)}>
                                                                            <AiOutlineCloseCircle />
                                                                        </div>
                                                                        <div className='text-3xl ps-1 text-gray-400 hover:text-white'><BiLike /></div>
                                                                    </div>
                                                                    <div className='text-3xl text-gray-400 hover:text-white'><BiChevronDownCircle onClick={() => handleOpen(item)} /></div>
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


                        }
                    </>
                    :
                    <Search />
            }
        </div>
    )
}
