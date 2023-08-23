import React from "react";

const Trade_Stats = () => {
  const stats = [
    {
      name: "Change 24H",
      value: "+13.3%",
    },
    {
      name: "Change 1M",
      value: "+24.3%",
    },
    {
      name: "Volume 1M",
      value: "₳6.23m",
    },
  ];
  return (
    <div className="my-8">
      <ul className="flex justify-between flex-wrap lg:flex-nowrap gap-6">
        {stats.map((item) => {
          return (
            <li
              key={item.name}
              className="flex py-4 justify-center gap-2 rounded-xl items-center component-color w-full flex-col  text-center text-xl xl:text-2xl text-white"
            >
              <h1>{item.value}</h1>
              <h5 className="text-xs text-white">{item.name}</h5>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Trade_Stats;
