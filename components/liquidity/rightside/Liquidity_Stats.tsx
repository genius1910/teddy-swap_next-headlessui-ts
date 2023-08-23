import React from "react";

const Liquidity_Stats = () => {
  const stats = [
    {
      name: "Earned by Liquidity Providers",
      value: "₳236.23k",
    },
    {
      name: "Average Annual Yield",
      value: "3.69%",
    },
    {
      name: "1 Month Pool Divergence",
      value: "37.43%",
    },
  ];
  return (
    <div className="my-6">
      <ul className="flex justify-between flex-wrap lg:flex-nowrap gap-6">
        {stats.map((item) => {
          return (
            <li
              key={item.name}
              className="flex py-4 justify-center gap-2 rounded-xl items-center component-color w-full flex-col  text-center text-xl 2xl:text-2xl text-white"
            >
              <h1 className="font-medium">{item.value}</h1>
              <h5 className="text-xs text-white">{item.name}</h5>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Liquidity_Stats;
