import React from "react";
import { BsExclamationCircle } from "react-icons/bs";

const Trade_Stats = () => {
  const stats = [
    {
      name: "Market Cap",
      value: "85,503,700 ADA",
    },
    {
      name: "FD Market Cap",
      value: "43,203,100 ADA",
    },
    {
      name: "Circulating Supply",
      value: "623.42M TEDY",
    },
    {
      name: "Max Supply",
      value: "5B TEDY",
    },
  ];
  return (
    <div className="my-8">
      <ul className="flex justify-between flex-wrap lg:flex-nowrap gap-6">
        {stats.map((item) => {
          return (
            <li
              key={item.name}
              className="flex gap-2 rounded-xl p-4 component-color w-full flex-col text-lg xl:text-xl text-white"
            >
              <h5 className="text-xs text-white flex items-center gap-1">
                <span>{item.name}</span>
                <button title={item.name}>
                  <BsExclamationCircle className="w-3 h-3" />
                </button>
              </h5>
              <h1>{item.value}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Trade_Stats;
