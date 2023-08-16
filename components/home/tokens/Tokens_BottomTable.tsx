import Image from "next/image";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsExclamationCircle, BsPatchCheckFill } from "react-icons/bs";
import { MdArrowDownward } from "react-icons/md";

const Tokens_BottomTable = () => {
  return (
    <div className="w-full mt-6 component-color rounded-2xl px-4 sm:px-8 py-6">
      <div className="">
        <div className="flex items-center gap-4">
          <select className=" text-sm font-medium px-2 py-3 bg-[#333B4B] outline-none rounded-lg">
            <option value="1D">1D</option>
            <option value="2D">2D</option>
            <option value="3D">3D</option>
            <option value="1W">1W</option>
          </select>
          <div className="relative bg-[#333B4B] flex w-10/12 sm:w-auto items-center rounded-lg">
            <AiOutlineSearch className=" text-gray-400 w-6 h-6 ml-2 " />
            <input
              placeholder="Type token name, ticker, or policy id"
              className=" placeholder:text-gray-400 text-sm w-full sm:w-96 px-2 py-3 bg-transparent outline-none rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 overflow-x-auto whitespace-nowrap">
        <table className="tbody-b-remove w-full">
          <tbody className=" mid-s-component-color medium-text ">
            <tr>
              <th className=" px-4 py-2 font-medium text-left rounded-l-md">
                #
              </th>
              <th className=" px-4 py-2 font-medium text-left">Token name</th>
              <th className=" px-4 py-2 font-medium">Price</th>
              <th className=" px-4 py-2 font-medium text-left">Change 1D</th>
              <th className=" px-4 py-2 font-medium text-left">Volume 1D</th>
              <th className=" px-4 py-2 font-medium text-left">
                <span className="flex items-center gap-1">
                  <MdArrowDownward className="w-4 h-4 text-[#268AFF]" /> TVL{" "}
                  <BsExclamationCircle className="w-3 h-3" />
                </span>
              </th>
              <th className=" px-4 py-2 font-medium rounded-r-md text-left">
                <span className="flex items-center gap-1">
                  FD Market cap
                  <BsExclamationCircle className="w-3 h-3" />
                </span>
              </th>
            </tr>
          </tbody>
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <tbody
                key={item}
                className=" hover:bg-[#D9D9D9]/10 cursor-pointer medium-text rounded-lg transition-all duration-150 ease-in-out"
              >
                <tr>
                  <td className="px-4 py-4 text-[#C4C4C4] text-sm">
                    {index + 1}
                  </td>
                  <td className="px-10 pl-4 py-4">
                    <span className="flex items-center gap-1.5">
                      <Image
                        src={`/images/assets/teddy.png`}
                        alt="icon2"
                        width={29}
                        height={29}
                        className="-ml-3"
                      />
                      <h4 className=" font-medium">TEDY</h4>
                      <BsPatchCheckFill className="w-3 h-3" />
                      <p className="text-[#8D8D8D] text-xss mt-0.5">
                        TeddySwap
                      </p>
                    </span>
                  </td>
                  <td className="px-10 py-4 flex flex-col gap-1 ">
                    <span>2.000341 ₳</span>
                  </td>
                  <td className="px-10 py-4  gap-1  text-[#2CC696]">
                    <span>+{(Math.random() * 4).toFixed(2)}%</span>
                  </td>
                  <td className="px-10 py-4  gap-1 ">
                    <span> ₳{(Math.random() * 7).toFixed(1)}M</span>
                  </td>
                  <td className="px-10 py-4  gap-1 ">
                    <span> ₳{(Math.random() * 7).toFixed(1)}M</span>
                  </td>
                  <td className="px-10 py-4  gap-1 ">
                    <span> ₳{(Math.random() * 120).toFixed(0)}M</span>
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

export default Tokens_BottomTable;
