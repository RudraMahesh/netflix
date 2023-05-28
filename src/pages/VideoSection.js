import React from 'react'
import YouTube, { YouTubeProps } from "react-youtube";
import { UserAuth } from '../Context/auth';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Header from './Header';

export const VideoSection = () => {
    const { trailerUrl } = UserAuth()
    const opts = {
        width: '100%',
        height: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    return (
        <div>
            {
                trailerUrl ?
                    <div className='relative'>
                        <div className='absolute top-2 left-2 bg-black'>
                            <Link to="/" className='text-white text-5xl'><IoMdArrowRoundBack /></Link>
                        </div>
                        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} className='h-screen' />}
                    </div>
                    :
                    <>
                        <Header />
                        <div className='text-center text-white text-3xl mt-10 font-bold'>

                            <p>Go To Home</p>
                            <div className='mt-5'>
                                <Link to="/" className='no-underline text-black px-2 py-1  border-2 border-white border-double bg-white hover:underline'>Home</Link>
                            </div>
                        </div>
                    </>
                // <iframe width="100%" src="https://www.youtube.com/embed/UE1Upje5sT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{ "height": "100vh" }}></iframe>
            }
        </div>
    )
}
