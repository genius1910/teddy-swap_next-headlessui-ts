import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { createChart, ColorType } from "lightweight-charts";
import { ChartApp } from "../dexinfo/TradingChart";
import { AiOutlineInfoCircle } from "react-icons/ai";
import CustomChart from "../../chart/CustomChart";

const batchers = [
  {
    name: "Earn ADA",
    subname: "For running a batcher",
    img: "/images/assets/blue_ada.png",
  },
  {
    name: "10",
    subname: "Batchers worldwide",
    img: "/images/assets/world.png",
  },
  {
    name: "1st",
    subname: "Open source batcher protocol on Cardano",
    img: "/images/assets/world.png",
  },
];

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

const Tokens_Leftside = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8 mt-5">
      {/* 1st grid  */}
      <div className=" font-medium rounded-3xl chart-component-color h-72 grid relative">
        <div className="px-6 pt-6 absolute z-10 w-full">
          <div className="flex items-center gap-1">
            <h1 className="text-base">Volume</h1>
            <AiOutlineInfoCircle
              title="The total trading volume for the entire Cardano DEX over the past 24 hours."
              className="w-3 h-3 cursor-pointer"
            />
          </div>

          <h2 className="text-base mt-1 mb-0.5">₳6,363,639.46</h2>
          <p className=" text-[0.7rem] text-[#0FC43B]">
            +₳544.03 (+2.03%) this week
          </p>
        </div>
        <CustomChart data={data} unit="k" />
      </div>
      {/* 2nd grid  */}
      <div className=" font-medium rounded-3xl chart-component-color h-72 grid relative">
        <div className="px-6 pt-6 absolute z-10 w-full">
          <div className="flex items-center gap-1">
            <h1 className="text-base">TVL</h1>
            <AiOutlineInfoCircle
              title="The total value of the liquidity in the entire Cardano DEX."
              className="w-3 h-3 cursor-pointer"
            />
          </div>
          <h2 className="text-base mt-1 mb-0.5">₳6,363,639.46</h2>
          <p className=" text-[0.7rem] text-[#0FC43B]">
            +₳544.03 (+2.03%) this todays
          </p>
        </div>
        <CustomChart data={data} unit="k" />
      </div>
      {/* 3rd grid  */}
      {/* <div className=" rounded-3xl component-color p-6">
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-between items-center">
            <h1>Batchers</h1>
            <div className="flex items-center gap-2">
              <Image
                width={32}
                height={32}
                alt="icon"
                src={`/images/assets/token-1.png`}
              />
              <div className=" text-base leading-tight">
                <h1>₳203,930.12</h1>
                <p className=" text-[0.7rem]">Distributed this week</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center p-3">
            <div className="flex flex-col gap-8">
              {batchers.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <Image width={29} height={29} alt="icon" src={item.img} />
                  <div className=" text-base leading-tight">
                    <h2>{item.name}</h2>
                    <p className=" text-[0.7rem] max-w-[8rem]">
                      {item.subname}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col w-1/2 gap-4">
              <button className="primary-button text-sm">Run a Batcher</button>
              <button className="primary-button text-sm">View Github</button>
              <button className="primary-button text-sm">Learn More</button>
            </div>
          </div>
        </div>
      </div> */}
      {/* 4th grid  */}
      {/* <div className=" font-medium rounded-3xl component-color p-6 flex items-end justify-between gap-6">
        <div className="flex flex-col gap-6 w-1/2 ">
          <div className="flex items-center gap-2">
            <Image
              width={29}
              height={29}
              alt="icon"
              src={`/images/assets/teddy.png`}
            />
            <h1>TEDDY Token</h1>
          </div>
          <div>
            <p className="text-xs text-gray-300">Circulating Supply</p>
            <h2>328,827,003 TEDY</h2>
            <div className="h-8 w-full bg-gray-600 mt-1 rounded-lg">
              <div className="w-1/3 bg-gradient-to-r from-[#1882FF] to-[#36EBCA] h-full rounded-lg" />
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-300">Earnings Per Share All Time</p>
            <h2>328,827,003 TEDY</h2>
          </div>
          <button className="primary-button text-sm">View Farms</button>
        </div>
        <div className="flex flex-col gap-6 w-1/2 ">
          <div>
            <p className="text-xs text-gray-300">Max Supply</p>
            <h2>5,000,000,000 TEDY</h2>
          </div>
          <div>
            <p className="text-xs text-gray-300">Public Allocation</p>
            <h2>85%</h2>
          </div>
          <div>
            <p className="text-xs text-gray-300">Price</p>
            <h2>0.1403 ADA</h2>
          </div>
          <button className="primary-button text-sm">Tokenomics</button>
        </div>
      </div> */}
    </div>
  );
};

export default Tokens_Leftside;
