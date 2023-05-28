import React, { useEffect, useState } from 'react'
import Logo from "../images/Logo.png"
import { Link, useNavigate } from 'react-router-dom';
import Foot from "./Login-foot"
import { UserAuth } from '../Context/auth';

export const SignUp = () => {
    const { user, signUp, sign } = UserAuth()
    const auth = localStorage.getItem("users")
    const bgImage = "https://assets.nflxext.com/ffe/siteui/vlv3/61e79073-50cf-4f7b-9a23-73290e6f7dca/d0322828-6d63-4f5f-92fb-30f492e7cca4/IN-en-20230410-popsignuptwoweeks-perspective_alpha_website_large.jpg";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        if (auth) {
            navigate("/main")
        }
    })


    async function handleSubmit(event) {
        event.preventDefault();

        if (sign == "") {
            const validationErrors = validateEmailAndPassword(email, password);
            if (validationErrors) {
                setErrors(validationErrors);
            } else {
                try {
                    await signUp(email, password)
                    localStorage.setItem("users", JSON.stringify({ email }))
                    navigate("/user")
                }
                catch (error) {
                    console.log(error)
                }
            }
        }
        else {
            const email = sign
            const validationErrors = validateEmailAndPassword(email, password);
            if (validationErrors) {
                setErrors(validationErrors);
            } else {
                try {
                    await signUp(email, password)
                    localStorage.setItem("users", JSON.stringify({ email }))
                    navigate("/user")
                }
                catch (error) {
                    console.log(error)
                }
            };
        }
    }

    function validateEmailAndPassword(email, password) {
        const errors = {};

        // Check if email is empty
        if (!email) {
            errors.email = "Please enter your email.";
        } else {
            // Check if email is in valid format
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                errors.email = "Please enter a valid email address.";
            }
        }

        // Check if password is empty
        if (!password) {
            errors.password = "Please enter your password.";
        } else {
            // Check if password is in valid format
            const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
            if (!passwordPattern.test(password)) {
                errors.password = "Please enter a valid password with at least 8 characters, one uppercase letter, one lowercase letter, and one number.";
            }
        }

        // Return errors object if there are any errors, otherwise return null
        return Object.keys(errors).length ? errors : null;
    }

    return (
        <>
            <div className='relative'>
                <img src={bgImage} alt="bg-image" className='w-full h-auto lg:h-auto md:h-screen md:object-cover' />
                <div className="w-full absolute top-0 h-full bg-transparent opacity-50 bg-gradient-to-t from-black to-black"></div>
                <div className='container mx-auto'>
                    <div className='absolute top-0 container mx-auto'>
                        <Link to="/"><img src={Logo} className='w-28 lg:w-48 md:w-32 sm:w-20' /></Link>
                        <div className='flex  text-white justify-center'>
                            <div className='bg-black rounded p-16 transparent'>
                                <div className='w-80 xl:w-80'>
                                    <h1 className='font-bold'>Sign Up</h1>
                                    <form onSubmit={handleSubmit} className='flex flex-col mt-3'>

                                        {
                                            sign ?
                                                <input type='text' placeholder={sign} className='py-3 text-white rounded-lg ps-2 xl:text-lg bg mt-4 outline-none border-none' value={sign} onChange={(e) => setEmail(sign)} />
                                                :
                                                <input type='text' placeholder='Enter Your Email' className='py-3 text-white rounded-lg ps-2 xl:text-lg bg mt-4 outline-none border-none' onChange={(e) => setEmail(e.target.value)} />
                                        }
                                        {/* for Error */}
                                        <span className='text-red-600 ps-1 pt-1'>  {errors.email && <p>{errors.email}</p>}</span>

                                        <input type='pass' placeholder='Enter Your Password' className=' py-3 text-white rounded-lg ps-2 xl:text-lg bg mt-4 outline-none border-none' onChange={(e) => setPassword(e.target.value)} />
                                        {/* for Error */}
                                        <span className='text-red-600 ps-1 pt-1'>  {errors.password}</span>

                                        <input type='submit' value="Sign In" className='btn mt-6' />
                                    </form>

                                    <div className='grid grid-cols-2 pt-2 text-gray-600 font-bold'>
                                        <div>
                                            <input type='checkbox' />
                                            &nbsp;Remember me
                                        </div>
                                        <div className='text-right'>
                                            <a href='#' className='text-gray-600 no-underline'>Need help?</a>
                                        </div>
                                    </div>

                                    <div className='text-gray-600 font-bold pt-7 pb-20'>
                                        <p>New to Netflix? <Link to="/login" className='text-white no-underline'> Sign In now.</Link></p>
                                        <p className='pt-5'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='#' className='text-blue-700 no-underline'>Learn more</a>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='transparent w-full absolute bottom-1 hidden 2xl:block'>
                    <div className='container mx-auto'>
                        <Foot />
                    </div>
                </div>
            </div>
        </>
    )
}

