"use-client";
import React from "react";
import Liquidity_DepositWithdraw from "./leftside/Liquidity_DepositWithdraw";
import Progress from "../partials/Progress";

const Liquidity_Leftside = () => {
  return (
    <div className="space-y-4">
      <div className="component-color rounded-2xl">
        <Liquidity_DepositWithdraw />
      </div>
      <div className="component-color p-8 rounded-2xl space-y-6">
        <div>
          <div className="flex justify-between xl:text-lg text-base">
            <h4 className=" text-gray-400">TVL:</h4>
            <h5 className=" text-white text-lg xl:text-xl">ATH</h5>
          </div>
          <Progress percentage={89} />
        </div>
        <div>
          <div className="flex justify-between xl:text-lg text-base">
            <h4 className=" text-gray-400">Volume:</h4>
            <h5 className=" text-white text-lg xl:text-xl">ATH</h5>
          </div>
          <Progress percentage={33} />
        </div>
        <div>
          <div className="flex justify-between xl:text-lg text-base">
            <h4 className=" text-gray-400">Farm Emissions:</h4>
            <h5 className=" text-white text-lg xl:text-xl">ATH</h5>
          </div>
          <Progress percentage={56} />
        </div>
      </div>
    </div>
  );
};

export default Liquidity_Leftside;
