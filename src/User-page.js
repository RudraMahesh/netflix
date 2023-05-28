import React from 'react'
import { Link } from 'react-router-dom'

export default function User() {
    const user = localStorage.getItem("users")
    const imgUrl = "http://occ-0-6071-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"

    const imgUrl2 = "http://occ-0-6071-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABd5nlJrIwztyDvbvupWZYlLU9xW60TEEw6szfjI2qUFOG_Sd2GhcKvd4w3uA_hUB47IRJo6An0OV0m7eBLyN9BX6EF94b9BFtsIz.png?r=df8"
    return (
        <div className='flex justify-center items-center flex-col text-xl 2xl:text-3xl mt-10 xl:mt-52 text-gray-600'>
            <h1 className='text-white font-bold '>Who's Watching?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-10 2xl:mt-20 gap-10'>
                <Link to="/main" className='flex justify-center flex-col hover:text-white no-underline text-gray-600'>
                    <img src={imgUrl} className='w-3/4 mx-auto text-center  border-pink-600 ' />
                    <p className='text-center '>{JSON.parse(user).email}</p>
                </Link>
                <Link className='flex justify-center flex-col hover:text-white no-underline text-gray-600'>
                    <img src={imgUrl2} className='w-3/4 mx-auto text-center' />
                    <p className='text-center '>Children</p>
                </Link>
            </div>
        </div>
    )
}
