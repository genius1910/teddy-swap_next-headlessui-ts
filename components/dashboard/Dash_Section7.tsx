"use client";
import React from "react";
import { PieChartTokenOmics } from "../chart/PieChartTokenOmics";

const Dash_Section7 = () => {
  return (
    <section
      id="dash-section-7"
      className="max-w-[1152px] mx-auto xl:zoom-80 2xl:zoom-100 px-4  max-lg:pt-4"
    >
      <div className="tokenomics-bg rounded-2xl 2xl:rounded-[4rem] px-4 2xl:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center py-4 max-lg:pt-10 md:py-18 2xl:py-24 gap-12">
          <div className="max-lg:hidden lg:col-span-2 relative w-full h-full flex items-center justify-center 2xl:px-12 xl:px-6 px-4">
            <PieChartTokenOmics />
          </div>
          <div className=" lg:col-span-2 flex flex-col lg:px-4 2xl:px-10 gap-4 max-lg:text-center">
            <p className="text-[15px] leading-[18px] font-semibold text-[#3DFFDC]">
              TOKENOMICS
            </p>
            <p className="text-[50px] leading-[60px] font-semibold text-[#D6D4C6] max-lg:text-3xl">
              85% Public Distribution
            </p>
            <p className="text-[15px] leading-[30px] text-[#D6D4C6] font-semibold">
              TeddySwap tokenomics are engineered for wide-as-possible
              distribution. With over 75% of TEDY tokens available through yield
              farming, and another 10% through giveaways and more, TeddySwap is
              one with the Community.
            </p>
            <div className="lg:hidden lg:col-span-2 relative w-full h-full flex items-center justify-center lg:px-16 2xl:px-32 px-4">
              <PieChartTokenOmics />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dash_Section7;
