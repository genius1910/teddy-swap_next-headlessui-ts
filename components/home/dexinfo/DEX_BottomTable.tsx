import Image from "next/image";
import React from "react";
import {
  AiFillCheckCircle,
  AiFillFilter,
  AiFillSwitcher,
  AiOutlineSearch,
} from "react-icons/ai";
import {
  MdArrowDownward,
  MdArrowUpward,
  MdCheckCircle,
  MdTune,
} from "react-icons/md";

const DEX_BottomTable = () => {
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
                Asset Pair
              </th>
              <th className=" px-4 py-2 font-medium">Price</th>
              <th className=" px-4 py-2 font-medium">TVL</th>
              <th className=" px-4 py-2 font-medium">Volume 24H</th>
              <th className=" px-4 py-2 font-medium">Volume 7D</th>
              <th className=" px-4 py-2 font-medium">24H %</th>
              <th className=" px-4 py-2 font-medium">7D %</th>
              <th className=" px-4 py-2 font-medium rounded-r-md">
                Market cap
              </th>
            </tr>
          </tbody>
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <tbody key={item} className=" ">
                <tr>
                  <td className="px-10 pl-4 py-4">
                    <span className="flex items-center gap-1">
                      <Image
                        src={`/images/assets/token-1.png`}
                        alt="icon1"
                        width={29}
                        height={29}
                      />
                      <Image
                        src={`/images/assets/teddy.png`}
                        alt="icon2"
                        width={29}
                        height={29}
                        className="-ml-3"
                      />
                      <h4 className="text-base">ADA/TEDY</h4>
                      <MdCheckCircle className="w-3 h-3" />
                    </span>
                  </td>
                  <td className="px-10 py-4 flex flex-col gap-1 text-base">
                    <span>2.000341 ₳</span>
                    <span className=" text-xs">0.871$</span>
                  </td>
                  <td className="px-10 py-4  gap-1 text-base">
                    <span>13.63M ₳</span>
                  </td>
                  <td className="px-10 py-4  gap-1 text-base">
                    <span>450.88K ₳</span>
                  </td>
                  <td className="px-10 py-4  gap-1 text-base">
                    <span>112,450.88K ₳</span>
                  </td>
                  <td className="px-10  py-4 text-green gap-1 text-base">
                    <span className="flex items-center">
                      <span>0.23%</span>
                      <MdArrowUpward className={`w-4 h-4 `} />
                    </span>
                  </td>
                  <td className="px-10  py-4 text-red gap-1 text-base">
                    <span className="flex items-center">
                      <span>0.44%</span>
                      <MdArrowDownward className={`w-4 h-4 `} />
                    </span>
                  </td>
                  <td className="px-10 py-4  gap-1 text-base">
                    <span>8,230,456 ADA</span>
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

export default DEX_BottomTable;
