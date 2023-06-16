import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdTune } from "react-icons/md";
import Liquidity_TableRow from "./Liquidity_TableRow";
import { BsChevronDown, BsQuestionCircle } from "react-icons/bs";

const Liquidity_BottomTable = () => {
  return (
    <div className="w-full component-color rounded-lg px-4 sm:px-8 py-6 mt-10 ">
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
      <div className="mt-6 overflow-x-auto whitespace-nowrap overflow-hidden">
        <table>
          <tbody>
            <tr className=" mid-s-component-color text-base ">
              <th className=" px-4 py-2 font-medium rounded-l-md">
                Asset Pair
              </th>
              <th className=" px-4 py-2 font-medium flex items-center gap-1">
                <span>TVL</span>
                <BsChevronDown className="w-3 h-3 " />
              </th>
              <th className=" px-4 py-2 font-medium">
                <span className="flex items-center gap-1">
                  <span>Volume 24H</span>
                  <BsChevronDown className="w-3 h-3 " />
                </span>
              </th>
              <th className=" px-4 py-2 font-medium">
                <span className="flex items-center gap-1">
                  <span>Volume 7D </span>
                  <BsChevronDown className="w-3 h-3 " />
                </span>
              </th>
              <th className=" px-4 py-2 font-medium">
                <span className="flex items-center gap-1">
                  <span>LP Fee </span>
                  <BsChevronDown className="w-3 h-3 " />
                </span>
              </th>
              <th className=" px-4 py-2 font-medium">
                <span className="flex items-center gap-1">
                  <span> Queuing </span>
                  <BsQuestionCircle className="w-3 h-3 " />
                </span>
              </th>
              <th className=" "></th>
            </tr>
          </tbody>
          {[1, 2, 3, 4, 5].map((item) => {
            return <Liquidity_TableRow key={item} item={item} />;
          })}
        </table>
      </div>
    </div>
  );
};

export default Liquidity_BottomTable;
