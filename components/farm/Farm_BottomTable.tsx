import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChevronDown, BsQuestionCircle } from "react-icons/bs";
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
  return (
    <div>
      {!isItDashboard ? (
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
      ) : (
        ""
      )}
      <div className="w-full component-color rounded-2xl p-2 sm:p-6 mt-10">
        {isItDashboard && (
          <div className="flex justify-between">
            <div className="relative mid-s-component-color flex w-10/12 sm:w-auto items-center rounded-lg border border-gray-700">
              <AiOutlineSearch className=" text-gray-400 w-6 h-6 ml-2 " />
              <input
                placeholder="Type token name, ticker, or policy id"
                className=" placeholder:text-gray-400 text-sm w-full sm:w-96 px-2 py-4 bg-transparent outline-none rounded-lg"
              />
            </div>
          </div>
        )}
        <div className="mt-6 overflow-x-auto whitespace-nowrap overflow-hidden">
          <table className="w-full">
            <tbody>
              <tr className=" mid-s-component-color text-base ">
                <th className="text-left pl-4 pr-10 py-2 font-medium rounded-l-md">
                  Farm
                </th>
                <th className=" pl-8 lg:pl-16 py-2 font-medium flex items-center gap-1">
                  <span>Total Staked</span>
                  <BsChevronDown className="w-3 h-3 " />
                </th>
                <th className=" pl-8 lg:pl-16 py-2 font-medium">
                  <span className="flex items-center gap-1">
                    <span>% of emissions</span>
                    <BsChevronDown className="w-3 h-3 " />
                  </span>
                </th>
                <th className=" pl-8 lg:pl-16 py-2 font-medium">
                  <span className="flex items-center gap-1">
                    <span>Daily Emissions</span>
                    <BsChevronDown className="w-3 h-3 " />
                  </span>
                </th>
                <th className=" pl-8 lg:pl-16 py-2 font-medium">
                  <span className="flex items-center gap-1">
                    <span>Your Stake </span>
                    <BsChevronDown className="w-3 h-3 " />
                  </span>
                </th>
                <th className=" pl-10 py-2 font-medium">
                  <span className="flex items-center gap-1">
                    <span> APR</span>
                    <BsQuestionCircle className="w-3 h-3 " />
                  </span>
                </th>
                <th className="rounded-r-lg"></th>
              </tr>
            </tbody>
            {[1, 2, 3, 4, 5].map((item) => {
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
