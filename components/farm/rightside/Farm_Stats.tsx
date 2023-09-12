import React from "react";
import { BsExclamationCircle } from "react-icons/bs";

const Farm_Stats = () => {
  const stats = [
    {
      name: "Earned by Farm Participants",
      value: "13,240,234 TEDY",
      info: "The total earnings that you have generated from staking your tokens in the farm.",
    },
    {
      name: "Your Earnings",
      value: "10,823 TEDY",
      info: "The total earnings that you have generated from providing liquidity to the pool.",
    },
    {
      name: "Farm APR (incl. LP Fees)",
      value: "93.61%",
      info: "The annual percentage rate (APR) that you are earning from the farm, including both the rewards that you are earning from staking your tokens and the fees that you are earning as a liquidity provider.",
    },
  ];
  return (
    <div className="my-6">
      <ul className="flex justify-between flex-wrap lg:flex-nowrap gap-6">
        {stats.map((item) => {
          return (
            <li
              key={item.name}
              className="flex gap-2 whitespace-nowrap rounded-xl p-4 component-color w-full flex-col text-lg xl:text-xl text-white"
            >
              <p className="text-[12px] leading-[14px] font-medium text-white flex items-center gap-1">
                <span>{item.name}</span>
                <button title={item.info}>
                  <BsExclamationCircle className="w-[10px] h-[10px]" />
                </button>
              </p>
              {item.name == "Impermanent Loss" ? (
                <h1 className="text-[#B0D5FF] text-[22px] leading-[26px] font-medium">
                  {item.value}
                </h1>
              ) : (
                <h1 className="text-[22px] leading-[26px] font-medium">
                  {item.value}
                </h1>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Farm_Stats;
