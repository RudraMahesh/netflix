import React, { useEffect } from 'react'
import Header from './Header'
import Api from './Api'
import trailer from "../images/trailer2.mp4"
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineInfoCircle } from "react-icons/ai"
import request from '../Api/Api-url'
import Foot from './Footer'
import { Search } from './Search'
import { UserAuth } from '../Context/auth'
import { useNavigate } from 'react-router-dom'
import { Info } from './Info'

export default function Main() {
    const thumbNail = "https://occ-0-2164-41.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdgthHcUHzeTLKeHQ2oX6jqDg5ry5WaDy-NDRlC8_CPsktxBKM1QYRelfCAJs92C83KjUf0CxV-U4AiOUqDpAty14RJjEpJ3eqWW.webp?r=072"
    const yt = "https://www.youtube.com/embed/ePLIObDy_HI?"
    const title = "https://occ-0-2164-41.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABfHEi8dvSR_at0q5V6qVVtaSjHdz4nZq8TGoc-FM-QoPR5NaCorysQzqVy2LErKi0S6qUZ3Pp04g81YFIX5D7UDftxz-FAKbWlgZZtQhHMPwIL3C0gODEJiqFBDsqtEH94Vc6s8bXe_G4dtQpXF_SLvIChu9jRxODGfWEn_t3I4GQjmfu7wgzw.webp?r=f0d"

    const { setOne, setOpenInfo, data, query } = UserAuth()
    const navigate = useNavigate()


    function handleInfo(e) {
        setOne(e);
        setOpenInfo(true)
    }

    return (
        <div className='relative'>
            <Header />
            {
                query.length == [] ?
                    <>
                        <div className='relative hidden xl:block'>
                            <div className='relative'>
                                <video autoPlay loop playsInline muted poster={thumbNail} className='w-full'>
                                    <source src={trailer} type="video/mp4" className='w-full full'></source>
                                </video>
                                <div className='w-full h-full absolute top-0 bg-gradient-to-r from-black'></div>
                            </div>

                            <div className='absolute text-white top-1/4 left-20'>
                                <img src={title} alt='title' className='top-1/4 w-1/4 2xl:w-2/4' />
                                <p className='font-bold text-xl w-1/2'>A Group Of Small Town Young Man Run a Lucrative Phishing Operartion, Until A Corrupt Politician wants in on their Scheme- and a cop want to fights it</p>
                                <div className='flex mt-7'>
                                    <a href='https://youtu.be/GoXd_sESBBI' className='text-black bg-white no-underline text-4xl flex justify-center items-center rounded px-4 outline-none border-none hover:bg-gray-400 cursor-pointer'>
                                        <p className='text-5xl'><BsFillPlayFill /></p>
                                        <p className='text-2xl' >Play</p>
                                    </a>
                                    <button className='text-4xl flex justify-center items-center rounded px-5 outline-none border-none gray text-white ms-7 hover:bg-gray-400 cursor-pointer' onClick={() => handleInfo("jamtara")}>
                                        <p className='text-3xl'><AiOutlineInfoCircle /></p>
                                        <p className='ps-2 text-2xl'>More Info</p>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Api title="Upcoming" apiUrl={request.requestUpcoming} />
                        <Api title="Top Rated" apiUrl={request.requestToprated} />
                        <Api title="Popular" apiUrl={request.requestPopular} />
                        <Api title="Now Playing" apiUrl={request.requestNowplaying} />

                        <div className='mt-5'>
                            <Foot />
                        </div>
                    </>
                    :
                    <Search />
            }



        </div>
    )
}
