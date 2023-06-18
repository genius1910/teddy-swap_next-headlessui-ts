import { PieChart } from "@/components/chart/PieChart";
import Image from "next/image";
import React from "react";

const Farm_Dash_Leftside = () => {
  const items = [
    {
      color: "bg-purple-500",
      name: "ADA/TEDY",
      price: "120,030",
    },
    {
      color: "bg-cyan-500",
      name: "cUSD/TEDY",
      price: "124,943",
    },
    {
      color: "bg-blue-500",
      name: "ADA/cBTC",
      price: "532,63",
    },
    {
      color: "bg-blue-500",
      name: "ADA/USD",
      price: "843,030",
    },
    {
      color: "bg-green-500",
      name: "USD/TEDY",
      price: "843,030",
    },
  ];

  return (
    <div className="component-color p-8 rounded-2xl flex flex-col gap-6">
      <h1 className="heading-xl font-medium">Farms</h1>
      <div className=" absolute text-xs font-medium right-0 top-0 p-4 flex items-center gap-1 leading-tight component-color-4 rounded-md rounded-br-none rounded-tr-2xl">
        <Image
          src={`/images/icons/WhiteAda.svg`}
          alt="WhiteAda"
          width={30}
          height={30}
        />
        <div>
          <h2>₳342,930.12</h2>
          <p className="text-[0.6rem] text-gray-400">
            Total Farm Position Value
          </p>
        </div>
      </div>
      <div className="mx-auto w-56 h-56">
        <PieChart />
      </div>
      <div className="flex flex-col gap-2">
        {items.map((_item, i) => {
          return (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-3.5 h-3.5 ${_item.color}`} />
              <div className="flex items-center gap-1">
                <Image
                  src={`/images/assets/token-1.png`}
                  alt="icon1"
                  width={20}
                  height={20}
                />
                <Image
                  src={`/images/assets/teddy.png`}
                  alt="icon2"
                  width={20}
                  height={20}
                  className="-ml-2"
                />
                <h4 className="text-sm">{_item.name}</h4>
              </div>
              <p className="text-sm whitespace-nowrap text-right font-normal ml-4">
                <span>₳{_item.price}</span>{" "}
                <span className=" text-xss">TVL</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Farm_Dash_Leftside;
