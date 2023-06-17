import Image from "next/image";
import React from "react";
import {
    AiFillCheckCircle,
    AiFillFilter,
    AiFillSwitcher,
    AiOutlineSearch,
} from "react-icons/ai";
import { BsArrowRight, BsDot } from "react-icons/bs";
import {
    MdArrowDownward,
    MdTune,
} from "react-icons/md";

const History_Table = () => {
    return (
        <div className="w-full mt-10 component-color rounded-lg px-4 sm:px-8 py-6 ">
            <div className="flex justify-between">
                <div className="relative mid-s-component-color flex w-10/12 sm:w-auto items-center rounded-lg">
                    <AiOutlineSearch className=" text-gray-400 w-6 h-6 ml-2 " />
                    <input
                        placeholder="Type token name, ticker, or policy id"
                        className=" placeholder:text-gray-400 text-sm w-full sm:w-96 px-2 py-2 bg-transparent outline-none rounded-lg"
                    />
                </div>
                <button>
                    <MdTune className="text-white w-8 h-8" />
                </button>
            </div>
            <div className="mt-6 overflow-x-auto whitespace-nowrap">
                <table>
                    <tbody className=" mid-s-component-color text-base ">
                        <tr>
                            <th className=" px-4 py-2 font-medium rounded-l-md">
                                Assets
                            </th>
                            <th className=" px-4 py-2 font-medium">Action</th>
                            <th className=" px-4 py-2 font-medium">Date & Time</th>
                            <th className=" px-4 py-2 font-medium">Status</th>
                            <th className="  font-medium rounded-r-md">
                            </th>
                        </tr>
                    </tbody>
                    {[1, 2, 3, 4, 5].map((item) => {
                        return (
                            <tbody key={item} className=" ">
                                <tr>
                                    <td className="px-10 pl-4 py-4 whitespace-nowrap">
                                        <span className="flex items-center gap-3 ">
                                            <span className=" bg-gray-600 gap-1 flex items-center px-2 py-1.5 rounded-lg">
                                                <Image
                                                    src={`/images/assets/token-1.png`}
                                                    height={22}
                                                    width={22}
                                                    alt="Token"
                                                />
                                                <p className="text-xs">89.0 ADA</p>
                                            </span>
                                            <BsArrowRight className="w-4 h-4" />
                                            <span className=" bg-gray-600 gap-1 flex items-center px-2 py-1.5 rounded-lg">
                                                <Image
                                                    src={`/images/assets/teddy.png`}
                                                    height={22}
                                                    width={22}
                                                    alt="Token"
                                                />
                                                <p className="text-xs">349.0 TEDDY</p>
                                            </span>
                                        </span>
                                    </td>
                                    <td className="px-10 py-4 text-base">
                                        Swap
                                    </td>
                                    <td className="px-10  py-4 text-base">
                                        January 3, 2023
                                        <br />
                                        11:00 AM
                                    </td>
                                    <td className="px-10 py-4  gap-1 text-base">
                                        <span className=" inline-flex items-center gap-1 rounded-md border border-gray-500 pl-2 pr-4 py-1">
                                            <BsDot className="w-5 h-5 text-o_green" />
                                            <span>Complete</span>
                                        </span>
                                    </td>
                                    <td className="px-10 py-4  gap-1 text-base">
                                        <span className=" inline-flex items-center gap-1 rounded-md border border-gray-500 pl-2 pr-4 py-1">
                                            <BsDot className="w-5 h-5 text-o_green" />
                                            <span>Complete</span>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </div>
        </div>
    );
};

export default History_Table;
