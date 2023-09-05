"use-client";
import React from "react";
import Liquidity_AddRemove from "./leftside/Liquidity_AddRemove";
import Progress from "../partials/Progress";
import Trade_KeyStats from "../trade/page/leftside/Trade_KeyStats";
import Liquidity_KeyStats from "./leftside/Liquidity_KeyStats";

const Liquidity_Leftside = () => {
  return (
    <div className="space-y-6">
      <div className="component-color rounded-2xl">
        <Liquidity_AddRemove />
      </div>
      {/* <div className="component-color p-8 rounded-2xl space-y-6">
        <div>
          <div className="flex justify-between 2xl:text-lg text-base">
            <h4 className=" text-gray-400">TVL:</h4>
            <h5 className=" text-white text-lg 2xl:text-xl">ATH</h5>
          </div>
          <Progress percentage={89} />
        </div>
        <div>
          <div className="flex justify-between 2xl:text-lg text-base">
            <h4 className=" text-gray-400">Volume:</h4>
            <h5 className=" text-white text-lg 2xl:text-xl">ATH</h5>
          </div>
          <Progress percentage={33} />
        </div>
        <div>
          <div className="flex justify-between 2xl:text-lg text-base">
            <h4 className=" text-gray-400">Farm Emissions:</h4>
            <h5 className=" text-white text-lg 2xl:text-xl">ATH</h5>
          </div>
          <Progress percentage={56} />
        </div>
      </div> */}
      <Liquidity_KeyStats />
    </div>
  );
};

export default Liquidity_Leftside;
