import React from "react";
import { BsExclamationCircle } from "react-icons/bs";

const Liquidity_Stats = () => {
  const stats = [
    {
      name: "LP Fee",
      value: "0.5%",
    },
    {
      name: "Market Earnings",
      value: "203k ₳, 1.2M TEDY",
    },
    {
      name: "Your Earnings",
      value: "146 ADA, 10.3k TEDY",
    },
    {
      name: "Impermanent Loss",
      value: "-8.36%",
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
              <h5 className="text-xs text-white flex items-center gap-1">
                <span>{item.name}</span>
                <button title={item.name}>
                  <BsExclamationCircle className="w-3 h-3" />
                </button>
              </h5>
              {item.name == "Impermanent Loss" ? (
                <h1 className="text-[#B0D5FF]">{item.value}</h1>
              ) : (
                <h1>{item.value}</h1>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Liquidity_Stats;
