import { GaugeChart } from "@/components/chart/GaugeChart";
import TimeGroupButton from "@/components/home/TimeGroupButton";
import { ChartApp } from "@/components/home/dexinfo/TradingChart";
import Image from "next/image";
import React from "react";

const Farm_Dash_Rightside = () => {
  return (
    <div className="component-color p-2 md:p-8 rounded-2xl flex flex-col lg:flex-row justify-between gap-8 h-full">
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
        <div className=" rounded-2xl w-full chart-component-color flex flex-col justify-between h-[87%]">
          <div className="flex justify-between items-center p-5 px-6">
            <h1 className="text-base">Earnings</h1>
            <div>
              <h2 className="text-base mt-1 mb-0.5">₳6,363,639.46</h2>
              <p className=" text-[0.7rem] text-[#0FC43B]">
                +₳544.03 (+2.03%) this week
              </p>
            </div>
          </div>
          <ChartApp />
        </div>
      </div>
    </div>
  );
};

export default Farm_Dash_Rightside;
