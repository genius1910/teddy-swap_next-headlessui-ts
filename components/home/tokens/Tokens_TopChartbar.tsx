import Image from "next/image";
import React from "react";
import { ChartApp } from "../dexinfo/TradingChart";

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

const Tokens_TopChartbar = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 mt-12">
      {/* 1st grid  */}
      <div className="flex flex-col justify-between font-medium rounded-3xl chart-component-color h-80">
        <div className="px-6 pt-6">
          <h1 className="text-base">Volume</h1>
          <h2 className="text-base mt-1 mb-0.5">₳6,363,639.46</h2>
        </div>
        <ChartApp />
      </div>
      {/* 2nd grid  */}
      <div className="flex flex-col justify-between font-medium rounded-3xl chart-component-color h-80">
        <div className="px-6 pt-6">
          <h1 className="text-base">TVL</h1>
          <h2 className="text-base mt-1 mb-0.5">₳6,363,639.46</h2>
        </div>
        <ChartApp />
      </div>
    </div>
  );
};

export default Tokens_TopChartbar;
