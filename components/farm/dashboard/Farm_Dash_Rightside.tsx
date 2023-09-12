import { GaugeChart } from "@/components/chart/GaugeChart";
import TimeGroupButton from "@/components/home/TimeGroupButton";
import CustomChat from "../../chart/CustomChart";
import Image from "next/image";
import React from "react";
import { BsExclamationCircle } from "react-icons/bs";

const data = [
  { name: "09/20", price: 700 },
  { name: "09/21", price: 800 },
  { name: "09/22", price: 900 },
  { name: "09/23", price: 1200 },
  { name: "09/24", price: 900 },
  { name: "09/25", price: 1500 },
  { name: "09/26", price: 900 },
  { name: "09/27", price: 800 },
  { name: "09/28", price: 900 },
  { name: "09/29", price: 500 },
  { name: "09/30", price: 1000 },
  { name: "10/01", price: 900 },
  { name: "10/02", price: 1500 },
  { name: "10/03", price: 1900 },
  { name: "10/04", price: 2000 },
  { name: "10/05", price: 2200 },
];

const Farm_Dash_Rightside = () => {
  return (
    <div className="component-color p-2 md:p-8 rounded-2xl flex flex-col lg:flex-row justify-between gap-8 h-full select-none">
      {/* leftside  */}
      <div className="flex flex-col whitespace-nowrap justify-between gap-6 items-center w-full lg:w-1/3">
        <h1 className=" heading-xl font-medium w-full text-left p-4 pb-0 md:p-0">
          Your Harvest
        </h1>
        <div className="">
          <GaugeChart />
        </div>
        <div className="relative z-10 flex items-center gap-2">
          <Image
            src={`/images/assets/teddy.png`}
            alt="teddy"
            width={26}
            height={26}
          />
          <div className=" leading-tight">
            <h2 className=" text-sm">21,134.92 TEDY</h2>
            <h2 className=" text-[0.5rem]">Pending Harvest</h2>
          </div>
          <p className="text-[#B7B7B7] text-base mx-1">+8 More</p>
        </div>
        <button className="primary-button py-3 px-20 rounded-xl">
          Harvest All
        </button>
      </div>
      {/* rightside  */}
      <div className=" h-full w-full lg:w-2/3 space-y-4 relative flex flex-col items-end ">
        <TimeGroupButton isRelative={true} />
        <div className=" rounded-2xl w-full chart-component-color overflow-hidden flex flex-col h-[87%] grid relative">
          <div className="flex justify-between items-center p-5 px-6 absolute z-10 w-full">
            <div className="flex items-center gap-1">
              <h1 className="text-base">Earnings</h1>
              <button className="text-sm">
                <BsExclamationCircle className="w-3 h-3" />
              </button>
            </div>
            <div>
              <h2 className="text-base mt-1 mb-0.5">₳6,363,639.46</h2>
              <p className=" text-[0.7rem] text-[#0FC43B]">
                +₳544.03 (+2.03%) this week
              </p>
            </div>
          </div>
          <CustomChat data={data} unit="₳" />
        </div>
      </div>
    </div>
  );
};

export default Farm_Dash_Rightside;
