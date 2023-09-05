import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChevronDown, BsChevronUp, BsQuestionCircle } from "react-icons/bs";
import Liquidity_TableRow from "../liquidity/Liquidity_TableRow";
import Farm_TableRow from "./Farm_TableRow";
import { MdHistory } from "react-icons/md";
import Image from "next/image";
import Farm_Filterby from "./partials/Farm_Filterby";

interface Props {
  setActiveTab: (value: string) => void;
  isItDashboard?: boolean;
}

const Farm_BottomTable = ({ setActiveTab, isItDashboard }: Props) => {
  const [advanceFiltered, setAdvanceFiltered] = React.useState(false);
  return (
    <div>
      {advanceFiltered && (
        <>
          <div className="flex flex-wrap justify-between mt-10">
            <div>
              <h1 className="text-lg 2xl:text-2xl font-medium">Farm</h1>
              <p className=" text-base font-medium my-2">
                Stake LP tokens to earn MIN and more.
              </p>
            </div>
            <div>
              <div className="flex text-lg items-center gap-2">
                <MdHistory />
                <p>Total Daily Emission</p>
              </div>
              <h2 className="font-bold text-center">15,904,363.87 TEDY</h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-4 justify-between">
            <div className="flex items-center gap-6">
              <div className="flex gap-4 p-2 rounded-md bg-black ">
                <Image
                  src={`/images/icons/TableRows.svg`}
                  alt="table rows"
                  width={30}
                  height={30}
                />
                <Image
                  src={`/images/icons/Dashboard.svg`}
                  alt="Dashboard"
                  width={30}
                  height={30}
                />
              </div>
              <Farm_Filterby />
            </div>
            <div className="w-full sm:w-auto">
              <div className="relative bg-black flex w-auto items-center rounded-lg border border-gray-700">
                <AiOutlineSearch className=" text-gray-400 w-6 h-6 ml-2 " />
                <input
                  placeholder="Type token name, ticker, or policy id"
                  className=" placeholder:text-gray-400 text-sm w-full sm:w-96 px-2 py-4 bg-transparent outline-none rounded-lg"
                />
              </div>
            </div>
          </div>{" "}
        </>
      )}
      <div className="w-full component-color rounded-2xl p-2 sm:p-[30px] mt-8">
        <div className="flex justify-between items-center">
          <div className="relative small-component-color flex w-10/12 sm:w-auto items-center rounded-lg">
            <AiOutlineSearch className=" text-[#D6D4C6] w-4 h-4 ml-4 " />
            <input
              placeholder="Type token name, ticker, or policy id"
              className=" placeholder:text-[#D6D4C6] text-[16px] leading-[18px] font-medium w-full sm:w-96 ml-[6px] py-[13px] bg-transparent outline-none rounded-lg"
            />
          </div>
          {/* <button
            onClick={() => setAdvanceFiltered(!advanceFiltered)}
            className={`flex items-center gap-2 ${
              advanceFiltered ? "text-white" : "text-gray-400"
            }`}
          >
            <p>Advanced Filter</p>
            {advanceFiltered ? (
              <BsChevronUp className="w-4 h-4" />
            ) : (
              <BsChevronDown className="w-4 h-4" />
            )}
          </button> */}
        </div>
        <div className="mt-[30px] overflow-x-auto whitespace-nowrap overflow-hidden">
          <table className="w-full">
            <tbody>
              <tr className=" mid-s-component-color ">
                <th className="pr-32 pt-[11px] pb-[19px]  rounded-l-md text-[16px] leading-[19.5px] font-semibold text-[#D6D4C6] w-[288px]">
                  Asset Pair
                </th>
                <th className=" justify-center pt-[11px] pb-[19px]  text-[16px] leading-[19.5px] text-[#D6D4C6] font-semibold  flex items-center gap-[2px]">
                  <span>Total Staked</span>
                  <Image
                    src={`/images/assets/ChevronDown.svg`}
                    alt="table rows"
                    width={12}
                    height={6}
                    title="The total amount of tokens that have been staked in the farm."
                    className="cursor-pointer"
                  />
                </th>
                <th className="pl-4 pt-[11px] pb-[19px]  text-[16px] leading-[19.5px] font-semibold text-[#D6D4C6] pr-6">
                  <span className="flex items-center gap-[2px] justify-center">
                    <span>% of emissions</span>
                    <Image
                      src={`/images/assets/ChevronDown.svg`}
                      alt="table rows"
                      width={12}
                      height={6}
                      title="The percentage of the total emissions that are allocated to the farm."
                      className="cursor-pointer"
                    />
                  </span>
                </th>
                <th className="pl-10 pr-8 pt-[11px] pb-[19px]  text-[16px] leading-[19.5px] font-semibold text-[#D6D4C6]">
                  <span className="flex items-center gap-[2px] justify-center">
                    <span>Daily Emissions</span>
                    <Image
                      src={`/images/assets/ChevronDown.svg`}
                      alt="table rows"
                      width={12}
                      height={6}
                      title="The amount of tokens that are emitted to the farm each day."
                      className="cursor-pointer"
                    />
                  </span>
                </th>
                <th className="pl-8 pt-[11px] pb-[19px]  text-[16px] leading-[19.5px] font-semibold text-[#D6D4C6]">
                  <span className="flex items-center gap-[2px] justify-start">
                    <span>Your Stake</span>
                    <Image
                      src={`/images/assets/ChevronDown.svg`}
                      alt="table rows"
                      width={12}
                      height={6}
                      title="The amount of tokens that you have staked in the farm."
                      className="cursor-pointer"
                    />
                  </span>
                </th>
                <th className="pr-24 pt-[11px] pb-[19px]  text-[16px] leading-[19.5px] font-semibold text-[#D6D4C6]">
                  <span className="flex justify-center items-center gap-[2px] ml-6">
                    <span> APR </span>
                    <BsQuestionCircle
                      title="The average annual percentage rate (APR) that you are earning from your farms, taking into account the weighting of each farm."
                      className="w-[10px] h-[10px] cursor-pointer"
                    />
                  </span>
                </th>
                <th className="rounded-r-lg"></th>
              </tr>
            </tbody>
            {[1, 2, 3, 4, 5, 6, 7].map((item) => {
              return (
                <Farm_TableRow
                  key={item}
                  item={item}
                  setActiveTab={setActiveTab}
                />
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Farm_BottomTable;
