import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Liquidity_TableRow from "./Liquidity_TableRow";
import { BsChevronDown, BsQuestionCircle } from "react-icons/bs";

interface Props {
  setActiveTab: (value: string) => void;
}

const Liquidity_BottomTable = ({ setActiveTab }: Props) => {
  return (
    <div className="w-full component-color rounded-2xl p-2 sm:p-6 mt-10">
      <div className="flex justify-between">
        <div className="relative mid-s-component-color flex w-10/12 sm:w-auto items-center rounded-lg">
          <AiOutlineSearch className=" text-gray-400 w-6 h-6 ml-2 " />
          <input
            placeholder="Type token name, ticker, or policy id"
            className=" placeholder:text-gray-400 text-sm w-full sm:w-96 px-2 py-2 bg-transparent outline-none rounded-lg"
          />
        </div>
      </div>
      <div className="mt-6 overflow-x-auto whitespace-nowrap overflow-hidden">
        <table className="w-full">
          <tbody>
            <tr className=" mid-s-component-color text-base ">
              <th className="text-left pl-4 pr-10 py-2 font-medium rounded-l-md">
                Asset Pair
              </th>
              <th className=" pl-8 lg:pl-16 py-2 font-medium flex items-center gap-1">
                <span>TVL</span>
                <BsChevronDown className="w-3 h-3 " />
              </th>
              <th className=" pl-8 lg:pl-16 py-2 font-medium">
                <span className="flex items-center gap-1">
                  <span>Volume 24H</span>
                  <BsChevronDown className="w-3 h-3 " />
                </span>
              </th>
              <th className=" pl-8 lg:pl-16 py-2 font-medium">
                <span className="flex items-center gap-1">
                  <span>Volume 7D </span>
                  <BsChevronDown className="w-3 h-3 " />
                </span>
              </th>
              <th className=" pl-8 lg:pl-16 py-2 font-medium">
                <span className="flex items-center gap-1">
                  <span>LP Fee </span>
                  <BsChevronDown className="w-3 h-3 " />
                </span>
              </th>
              <th className=" pl-10 py-2 font-medium">
                <span className="flex items-center gap-1">
                  <span> Queuing </span>
                  <BsQuestionCircle className="w-3 h-3 " />
                </span>
              </th>
              <th className="rounded-r-lg"></th>
            </tr>
          </tbody>
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <Liquidity_TableRow
                key={item}
                item={item}
                setActiveTab={setActiveTab}
              />
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Liquidity_BottomTable;
