import { useState } from "react";
import { TbWorld } from "react-icons/tb"
import { IoMdArrowDropdown } from "react-icons/io"
const Foot = () => {
    const [drop, setDrop] = useState(false);
    return (
        <>
            <div className="text-gray-400 container mx-auto py-5 ">
                <div className="ps-5">
                    <p className="pt-3">Questions? Call 000-800-919-1694</p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 py-7">
                        <div className="">
                            <ul className="list-none inline">
                                <li className="pt-3 "><a href="#" className="text-gray-400">FAQ</a></li>
                                <li className="pt-3 "><a href="#" className="text-gray-400">Cookie Preferences</a></li>
                            </ul>
                        </div>
                        <div className="">
                            <ul className="list-none inline">
                                <li className="pt-3 "><a href="#" className="text-gray-400">Help Centre</a></li>
                                <li className="pt-3 "><a href="#" className="text-gray-400">Corporate Information</a></li>
                            </ul>
                        </div>
                        <div className="">
                            <ul className="list-none inline">
                                <li className="pt-3 "><a href="#" className="text-gray-400">Terms of Use</a></li>
                            </ul>
                        </div>
                        <div className="">
                            <ul className="list-none inline">
                                <li className="pt-3 "><a href="#" className="text-gray-400">Privacy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="me-3 items-center relative" onClick={(e) => setDrop(!drop)}>
                            <button className="text-lg border-2 border-white bg-black text-gray-400 rounded transition "><TbWorld />    English <IoMdArrowDropdown /></button>
                            {
                                drop === true ?
                                    <div className="absolute w-28 cursor-pointer">
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
                        <p className="pt-5">Netflix India</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Foot;
