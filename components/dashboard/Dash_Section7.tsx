"use client";
import React from "react";
import { PieChartTokenOmics } from "../chart/PieChartTokenOmics";

const Dash_Section7 = () => {
  return (
    <section id="dash-section-7">
      <div className="tokenomics-bg rounded-2xl lg:rounded-[4rem] px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-24 lg:gap-20 text-lg 2xl:text-2xl items-center py-16 md:py-24 2xl:py-36">
          <div className="lg:col-span-2 relative w-full h-full flex items-center justify-center lg:px-32 px-4">
            <PieChartTokenOmics />
          </div>
          <div className=" lg:col-span-2 flex flex-col lg:px-10 gap-10">
            <h3 className="l-s-heading">TOKENOMICS</h3>
            <h2 className="l-heading font-semibold">85% Public Distribution</h2>
            <h4 className="l-subtitle2 font-medium leading-loose">
              TeddySwap tokenomics are engineered for wide-as-possible
              distribution. With over 75% of TEDY tokens available through yield
              farming, and another 10% through giveaways and more, TeddySwap is
              one with the Community.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dash_Section7;
