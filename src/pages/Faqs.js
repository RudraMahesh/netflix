import { useState } from "react"
import { Info } from "../Data"

const Faqs = ({ title, Ans }) => {
    const [state, setState] = useState(false)
    return (
        <>
            <div className="bg p-5 hover:bg-gray-600 transition duration-500 ease-in-out">
                <div className="grid grid-cols-2 cursor-pointer" onClick={() => (setState(!state))}>
                    <h2 className="text-xl col-span-1 md:text-2xl lg:text-2xl">{title}</h2>
                    <p className="text-end text-3xl col-span-1" >
                        {
                            state === true ?
                                "-"
                                : "+"
                        }
                    </p>
                </div>
                {
                    state && <p className="pt-3 text-xl">{Ans}</p>
                }
            </div>
            <div className="mt-2"></div>
        </>
    )
}

export default Faqs