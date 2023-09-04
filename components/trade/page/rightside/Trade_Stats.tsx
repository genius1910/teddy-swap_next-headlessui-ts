import React from "react";
import { BsExclamationCircle } from "react-icons/bs";

const Trade_Stats = () => {
  const stats = [
    {
      name: "Market Cap",
      value: "85,503,700 ADA",
      info: "The market capitalization of Teddy, calculated by multiplying the price of Teddy by the total number of Teddy tokens in circulation.",
    },
    {
      name: "FD Market Cap",
      value: "43,203,100 ADA",
      info: "The fully diluted market capitalization of Teddy, taking into account the liquidity in the Teddy/ADA pool.",
    },
    {
      name: "Circulating Supply",
      value: "623.42M TEDY",
      info: "The total number of Teddy tokens that are currently in circulation.",
    },
    {
      name: "Max Supply",
      value: "5B TEDY",
      info: "The maximum number of Teddy tokens that will ever be created.",
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

export default Trade_Stats;
