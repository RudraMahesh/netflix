import logo from "../images/Logo.png"
import { TbWorld } from "react-icons/tb"
import { IoMdArrowDropdown } from "react-icons/io"
import { useEffect, useState } from "react"
import Faqs from "./Faqs"
import { Info } from "../Data"
import Foot from "./Footer"
import { Link, useNavigate } from "react-router-dom"
import { SignUp } from "./SignUp"
import { UserAuth } from "../Context/auth"
const Home = () => {
    const navigate = useNavigate()
    const auth = localStorage.getItem("users")
    const [drop, setDrop] = useState(false);
    const [email, setEmail] = useState("")
    const [emailErr, setEmailErr] = useState()
    const [data, setData] = useState(Info)
    const { sign, setSign } = UserAuth();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    function validate(email) {
        return regex.test(email);
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (email.trim() === '') {
            setEmailErr("Please Fill This Field")
        }
        else if (validate(email)) {
            setSign(email)
            navigate("/signUp")
        }
        else {
            setEmailErr("Email is Invalid")
        }
    }

    useEffect(() => {
        if (auth) {
            navigate("/main")
        }
    })
    // image and video urls
    const bgImage = "https://assets.nflxext.com/ffe/siteui/vlv3/f1c3c4eb-2fea-42c7-9ebd-1c093bd8a69d/9c9af369-7a8c-4c8f-8e4a-d6c9d655f713/IN-en-20230403-popsignuptwoweeks-perspective_alpha_website_large.jpg"
    const tv = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png";
    const tvVideo = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v";
    const download = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg";
    const downTitle = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png";
    const downGif = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif";
    const watch = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
    const watchVideo = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v";
    const child = "https://occ-0-2164-2774.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"
    return (
        <div className="">
            <div className="relative">
                <img src={bgImage} alt="bg-image" className="w-full custom" />
                <div className="w-full absolute top-0 h-full bg-transparent opacity-50 bg-gradient-to-t from-black to-black"></div>

                <div className="container mx-auto">
                    <div className="absolute top-0 container mx-auto me-3 ">
                        <div className="flex justify-between items-center px-0 lg:px-5">
                            <Link to="/"> <img src={logo} alt="Logo" className="w-28 lg:w-48 md:w-32 sm:w-20" /></Link>
                            <div className="flex">
                                <div className="me-3 items-center relative" onClick={(e) => setDrop(!drop)}>
                                    <button className="text-lg border-2 px-2 py-1 border-white bg-black text-white rounded transition "><TbWorld />    English <IoMdArrowDropdown /></button>
                                    {
                                        drop === true ?
                                            <div className="absolute w-full cursor-pointer">
                                                <div className=" py-1 border-2 border-gray-400 bg-white top-9 text-black flex justify-center hover:bg-slate-100">
                                                    <span className="">English</span>
                                                </div>
                                                <div className=" py-1 border-2 border-gray-400 bg-white top-9 text-black flex justify-center hover:bg-slate-100">
                                                    <span className="">हिन्दी</span>
                                                </div>
                                            </div>

                                            :
                                            null
                                    }
                                </div>

                                <button className="bg-red-600 text-lg hover:bg-red-700 rounded-md px-3 py-1 cursor-pointer text-white border-none"><Link to="/login" className="text-white decoration-none no-underline">Sign in</Link></button>
                            </div>
                        </div>

                        <div className="text-white text-center pt-28">
                            <h2 className="text-3xl xl:text-6xl font-bold ">Unlimited movies, TV shows and more.</h2>
                            <p className="text-xl xl:text-2xl font-bold pt-7">Watch anywhere. Cancel anytime.</p>
                            <div className="md:mt-8 md:border-3 md:border-double py-7 border-gradient-purple  inline-block rounded md:px-7 bg-color bg-none">
                                <p className="text-lg xl:text-xl">
                                    Ready to watch? Enter your email to create or restart your membership.
                                </p>

                                <form onSubmit={handleSubmit} className="flex xl:flex-row flex-col
                        items-center justify-center pt-5">
                                    <div className="flex flex-col relative">
                                        <input type="text" placeholder="Email Address" className="w-80 xl:w-72 py-3 border-2 border-gray-50 text-white me-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-100 ps-2 xl:text-lg custom1" onChange={(e) => setEmail(e.target.value)} />
                                        <span className="text-left py-1 ps-2 text-red-600 font-bold absolute top-full">
                                            {
                                                emailErr && emailErr
                                            }
                                        </span>
                                    </div>
                                    <div className=" mt-8 xl:mt-0 lg:mt-0">
                                        <input type="submit" value="Get Started >" className="btn text-xl xl:text-2xl px-4 py-2 xl:py-3" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr size="10" className="bg border-0 pt-0 mt-0" />

            <div className="container mx-auto custom3 text-white xl:flex items-center justify-between text-center xl:text-left">
                <div className="pt-20 lg:pt-0 md:pt-0">
                    <h2 className="text-3xl xl:text-5xl font-bold">Enjoy on your TV.</h2>
                    <p className="text-xl xl:text-2xl font-bold pt-7">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className="relative md:w-full flex items-center justify-center">
                    <img src={tv} className="max-w-full" />
                    <div className="absolute  2xl:left-56 md:top-24 px-14 2xl:px-0 md:px-0">
                        <video autoPlay loop playsInline muted className="max-w-full">
                            <source src={tvVideo} ></source>
                        </video>
                    </div>
                </div>
            </div >
            <hr size="10" className="bg border-0 pt-0 mt-0" />

            <div className="container mx-auto custom3 text-white xl:flex items-center justify-between xl:text-left text-center">
                <div className="relative md:w-full flex items-center xl:justify-start md:justify-center">
                    <img src={download} className="max-w-full" />
                    <div className="absolute bg-black border-3 border-white borderwhite rounded-xl p-2 bottom-0 start-10 lg:start-36 md:start-48 cursor-pointer">
                        <div className=" grid grid-cols-3  items-center">
                            <div className=""><img src={downTitle} className="w-16" /></div>
                            <div className="">
                                <h4>Stranger Things</h4>
                                <p className="pt-2 text-blue-700">Downloading...</p>
                            </div>
                            <div>
                                <img src={downGif} className="w-16" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-12 lg:pt-0 md:pt-0">
                    <h2 className="text-3xl xl:text-5xl font-bold">Download your shows to watch offline.</h2>
                    <p className="text-xl xl:text-2xl font-bold pt-7">Save your favourites easily and always have something to watch.</p>
                </div>
            </div>
            <hr size="10" className="bg border-0 pt-0 mt-0" />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 custom3 text-white items-center text-center lg:text-start">
                <div className="pt-20 lg:pt-0 md:pt-0">
                    <h2 className="text-3xl xl:text-5xl font-bold">Watch everywhere.</h2>
                    <p className="text-xl xl:text-2xl font-bold pt-7">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className="relative md:w-full flex items-center justify-center">
                    <img src={watch} className="max-w-full z-10" />
                    <div className="absolute top-10 w-64 md:w-96 md:top-12 sm:w-52">
                        <video autoPlay loop playsInline muted className="max-w-full">
                            <source src={watchVideo} ></source>
                        </video>
                    </div>
                </div>
            </div>
            <hr size="10" className="bg border-0 pt-0 mt-0" />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 custom3 text-white items-center text-center lg:text-start">
                <div className="relative md:w-full flex items-center justify-center">
                    <img src={child} className="max-w-full z-10" />
                </div>
                <div className="">
                    <h2 className="text-3xl xl:text-5xl font-bold">Create profiles for children.</h2>
                    <p className="text-xl xl:text-2xl font-bold pt-7">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </div>
            </div>
            <hr size="10" className="bg border-0 pt-0 mt-0" />

            <div className="container mx-auto text-white grid grid-cols-1 justify-center py-10 ">
                <h1 className="text-3xl xl:text-5xl font-bold text-center">Frequently Asked Questions</h1>
                <div className="pt-10 px-4">
                    {
                        data.map((item) => {
                            const { id } = item
                            return <Faqs key={id} {...item} />
                        })
                    }
                </div>
                <div className="pt-7">
                    <p className="text-center text-lg">Ready to watch? Enter your email to create or restart your membership.</p>
                    <form onSubmit={handleSubmit} className="flex xl:flex-row flex-col
                        items-center justify-center pt-5 ">
                        <div className="flex flex-col relative">
                            <input type="text" placeholder="Email Address" className="relative w-80 xl:w-72 py-3 border-2 border-gray-50 text-white me-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-100 ps-2 xl:text-lg custom1" onChange={(e) => setEmail(e.target.value)} />
                            <span className="text-left py-1 ps-2 text-red-600 font-bold absolute top-full">
                                {
                                    emailErr && emailErr
                                }
                            </span>
                        </div>
                        <input type="submit" value="Get Started >" className="btn text-xl xl:text-2xl px-4 py-2 xl:py-3 mt-8 xl:mt-0 lg:mt-0" />
                    </form>
                </div>
            </div>
            <hr size="10" className="bg border-0 pt-0 mt-0" />
            <div>
                <Foot />
            </div>
        </div>
    )
}

export default Home