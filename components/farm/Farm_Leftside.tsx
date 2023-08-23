"use-client";
import React from "react";
import Progress from "../partials/Progress";
import Farm_StakeWithdrawHarvest from "./Farm_StakeWithdrawHarvest";

const Farm_Leftside = () => {
  return (
    <div className="space-y-4">
      <div className="component-color rounded-2xl">
        <Farm_StakeWithdrawHarvest />
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

export default Farm_Leftside;
