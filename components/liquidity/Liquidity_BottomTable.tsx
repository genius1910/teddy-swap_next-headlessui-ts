import React from "react";
import { AiOutlineArrowDown, AiOutlineSearch } from "react-icons/ai";
import Liquidity_TableRow from "./Liquidity_TableRow";
import {
  BsChevronDown,
  BsExclamationCircle,
  BsQuestionCircle,
} from "react-icons/bs";

interface Props {
  setActiveTab: (value: string) => void;
}

const Liquidity_BottomTable = ({ setActiveTab }: Props) => {
  return (
    <div className="w-full component-color rounded-2xl p-2 sm:p-[30px] mt-8">
      <div className="flex justify-between">
        <div className="relative small-component-color flex w-10/12 sm:w-auto items-center rounded-lg">
          <AiOutlineSearch className=" text-[#D6D4C6] w-4 h-4 ml-4 " />
          <input
            placeholder="Type token name, ticker, or policy id"
            className=" placeholder:text-[#D6D4C6] text-[16px] leading-[18px] font-medium w-full sm:w-96 ml-[6px] py-[13px] bg-transparent outline-none rounded-lg"
          />
        </div>
      </div>
      <div className="mt-[30px] overflow-x-auto whitespace-nowrap overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className=" mid-s-component-color ">
              <th className="pr-32 pt-[11px] pb-[19px]  rounded-l-md text-[16px] leading-[19.5px] font-semibold text-[#D6D4C6] w-[288px]">
                Asset Pair
              </th>
              <th className=" justify-center pt-[11px] pb-[19px]  text-[16px] leading-[19.5px] text-[#D6D4C6] font-semibold  flex items-center gap-[2px]">
                <span>TVL</span>
                <BsExclamationCircle className="w-[10px] h-[10px] " />
              </th>
              <th className="pl-4 pt-[11px] pb-[19px]  text-[16px] leading-[19.5px] font-semibold text-[#D6D4C6] pr-6">
                <span className="flex items-center gap-[2px] justify-center">
                  <span>Volume 24H</span>
                  <BsExclamationCircle className="w-[10px] h-[10px] " />
                </span>
              </th>
              <th className="pl-10 pr-8 pt-[11px] pb-[19px]  text-[16px] leading-[19.5px] font-semibold text-[#D6D4C6]">
                <span className="flex items-center gap-[2px] justify-center">
                  <span>Volume 7D </span>
                  <BsExclamationCircle className="w-[10px] h-[10px] " />
                </span>
              </th>
              <th className="pl-8 pt-[11px] pb-[19px]  text-[16px] leading-[19.5px] font-semibold text-[#D6D4C6]">
                <span className="flex items-center gap-[2px] justify-start">
                  <span>LP Fee </span>
                  <BsExclamationCircle className="w-[10px] h-[10px] " />
                </span>
              </th>
              <th className="pr-24 pt-[11px] pb-[19px]  text-[16px] leading-[19.5px] font-semibold text-[#D6D4C6]">
                <span className="flex items-center gap-[2px]">
                  <span> Queuing </span>
                  <BsQuestionCircle className="w-[10px] h-[10px] " />
                </span>
              </th>
              <th className="rounded-r-lg"></th>
            </tr>
          </thead>
          {[1, 2, 3, 4, 5, 6, 7].map((item) => {
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
