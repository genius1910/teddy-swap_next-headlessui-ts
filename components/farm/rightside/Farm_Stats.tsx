import Image from "next/image";
import React from "react";

const Farm_Stats = () => {
  const stats = [
    {
      name: "Earned by Farm Participants",
      value: "13,240,234 TEDY",
    },
    {
      name: "Your Earnings",
      value: "54 TEDY",
    },
    {
      name: "Farm APR (incl. LP Fees)",
      value: "37.43%",
    },
  ];
  return (
    <div className="my-6">
      <ul className="flex justify-between flex-wrap lg:flex-nowrap gap-6">
        {stats.map((item, i) => {
          return (
            <li
              key={item.name}
              className="flex py-4 justify-center gap-2 rounded-xl items-center component-color w-full flex-col  text-center text-xl xl:text-2xl text-white"
            >
              <span className=" flex items-center justify-center gap-1">
                {i != 2 && (
                  <span>
                    <Image
                      src={`/images/assets/teddy.png`}
                      alt="Teddy token"
                      width={22}
                      height={22}
                    />
                  </span>
                )}
                <h1 className="font-medium">{item.value}</h1>
              </span>
              <h5 className="text-xs text-white">{item.name}</h5>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Farm_Stats;
