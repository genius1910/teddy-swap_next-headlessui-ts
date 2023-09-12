import React from "react";
import { BsExclamationCircle } from "react-icons/bs";

const Liquidity_Stats = () => {
  const stats = [
    {
      name: "LP Fee",
      value: "0.5%",
      info: "The fee that liquidity providers are charged when they deposit or withdraw liquidity from the pool.",
    },
    {
      name: "Market Earnings",
      value: "203k ₳, 1.2M TEDY",
      info: "The total earnings that all liquidity providers in the pool have generated from trading fees.",
    },
    {
      name: "Your Earnings",
      value: "146 ADA, 10.3k TEDY",
      info: "The total earnings that you have generated from providing liquidity to the pool.",
    },
    {
      name: "Impermanent Loss",
      value: "-8.36%",
      info: "The potential loss that you can incur due to price fluctuations when providing liquidity to the Teddy/ADA",
    },
  ];
  return (
    <div className="my-6">
      <ul className="flex justify-between flex-wrap lg:flex-nowrap gap-6">
        {stats.map((item) => {
          return (
            <li
              key={item.name}
              className="gap-2 rounded-xl component-color w-full text-white  py-3 px-4"
            >
              <div className="flex flex-col gap-[6px]">
                <div className="flex flex-row gap-[2px]">
                  <span className="text-[10px] leading-3 font-medium">
                    {item.name}
                  </span>
                  <button title={item.name}>
                    <BsExclamationCircle
                      title={item.info}
                      className="w-[10px] h-[10px]"
                    />
                  </button>
                </div>
                <p className="text-[16px] leading-[19.5px] font-medium text-white">
                  {item.value}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Liquidity_Stats;
