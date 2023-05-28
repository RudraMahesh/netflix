import React from 'react'
import Logo from '../images/Logo.png'
import { Link } from 'react-router-dom'
import Foot from "./Footer"

export const Account = () => {
    const user = localStorage.getItem("users")
    const upi = "https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/UPI.png"
    const imgUrl = "http://occ-0-6071-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
    const imgUrl2 = "http://occ-0-6071-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABd5nlJrIwztyDvbvupWZYlLU9xW60TEEw6szfjI2qUFOG_Sd2GhcKvd4w3uA_hUB47IRJo6An0OV0m7eBLyN9BX6EF94b9BFtsIz.png?r=df8"
    return (
        <div className='relative'>
            <div className='absolute top-0 w-full'>
                <div className='bg-black'>
                    <Link to="/">
                        <img src={Logo} className='w-28 lg:w-28 md:w-32 sm:w-20 px-5' />
                    </Link>
                </div>
            </div>
            <div className='bg-white h-auto px-5 xl:px-0'>
                <div className='container mx-auto'>
                    <p className='text-3xl pt-28'>Account</p>
                    <hr />
                    <div className='grid grid-cols-1 md:grid-cols-2 pt-5 md:text-center py-4'>
                        <div className=' text-lg text-gray-500'>
                            <p>Membership & billing</p>
                        </div>

                        <div className='font-bold pt-2 md:pt-0'>
                            <p>{JSON.parse(user).email}</p>
                            <p className='pt-2 md:pt-5'>password *********</p>
                            <p className='pt-2 md:pt-5'>phone 97117******</p>
                            <p className='pt-2 flex items-center md:justify-center md:pt-4'>
                                <img src={upi} />
                                <span>xyz.paytm</span>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className='grid grid-cols-1 md:grid-cols-2  md:text-center py-4'>
                        <div className=' text-lg text-gray-500'>
                            <p>Plan Details</p>
                        </div>
                        <div>
                            <p className='text-lg'>
                                <span className='font-bold '>Basic </span>
                                <span>HD</span>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className='grid grid-cols-1 md:grid-cols-2 pt-5 md:text-center py-4'>
                        <div className=' text-lg text-gray-500'>
                            <p>SECURITY & PRIVACY</p>
                        </div>
                        <div className=''>Control access to this account, view the most recently active devices and more.</div>
                    </div>
                    <hr />
                    <div className='grid grid-cols-1 md:grid-cols-2 pt-5 md:text-center py-4'>
                        <div className=' text-lg text-gray-500'>
                            <p>PROFILE & PARENTAL CONTROLS</p>
                        </div>
                        <div>
                            <div className='flex md:justify-center items-center'>
                                <img src={imgUrl} className='rounded w-[10%] md:w-[7%]' />
                                <span className='ps-3'>{JSON.parse(user).email}</span>
                            </div>
                            <div className='flex md:justify-center items-center pt-4'>
                                <img src={imgUrl2} className='rounded w-[10%] md:w-[7%]' />
                                <span className='ps-3 '>Children</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:pt-5'>
                    <Foot />
                </div>
            </div>
        </div>
    )
}
