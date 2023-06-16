"use client";
import TimeGroupButton from "@/components/home/TimeGroupButton";
import { ChartApp } from "@/components/home/dexinfo/TradingChart";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Trade_Stats from "./rightside/Trade_Stats";
import Trade_Hystory from "./rightside/Trade_Hystory";
import Trade_TopPairs from "./rightside/Trade_TopPairs";

const times = ["1h", "1d", "1w", "1m", "All Time"];
interface Props {
  activeTab: string;
  setActiveTab: (value: string) => void;
}
const Trade_Rightside = ({ activeTab, setActiveTab }: Props) => {
  const [currentTime, setCurrentTime] = useState("1w");
  const [toggler, setToggler] = useState("Volume");
  const [hydration, setHydration] = useState(false);

  useEffect(() => {
    setHydration(true);
  }, []);

  return (
    <div className="">
      <div className=" font-medium h-80 overflow-hidden component-color  rounded-2xl">
        <div className="flex justify-between">
          <div className="px-6 pt-6">
            <span className="flex items-center gap-1">
              <Image
                src={`/images/assets/token-1.png`}
                alt="icon1"
                width={29}
                height={29}
              />
              <Image
                src={`/images/assets/teddy.png`}
                alt="icon2"
                width={29}
                height={29}
                className="-ml-3"
              />
              <h4 className="text-base">ADA/TEDY</h4>
              <Image
                src={`/images/assets/exchange.svg`}
                alt="exchange icon"
                width={10}
                height={10}
                className=""
              />
            </span>
            <h2 className="text-2xl mt-4">₳6,363,639.46</h2>
            <p className=" mb-4 text-[0.7rem] text-[#0FC43B]">
              +₳544.03 (+2.03%) this week
            </p>
          </div>

          {/* rightside  */}
          <div className="flex flex-col p-6">
            <div className="flex flex-col">
              <div className="flex gap-0.5">
                {/* all button  */}
                <ul className="flex items-center component-color rounded-xl text-xss w-full">
                  {times.map((item) => {
                    return (
                      <li key={item}>
                        <button
                          onClick={() => setCurrentTime(item)}
                          className={`${
                            item == currentTime &&
                            "small-component-color rounded-xl"
                          } text-white py-0.5 px-2`}
                        >
                          {item}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <AiFillStar className="w-5 h-5 text-[#E8D648]" />
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <div
                onClick={() =>
                  toggler === "Volume"
                    ? setToggler("Price")
                    : setToggler("Volume")
                }
                className="component-color text-xs relative cursor-pointer flex justify-evenly items-center gap-1 rounded-md h-full"
              >
                <span
                  className={`${
                    toggler == "Volume" ? "-translate-x-1/2" : "translate-x-1/2"
                  } rounded-md small-component-color w-6/12 h-full absolute z-0 transition-all duration-500 ease-in-out`}
                ></span>
                <span className="py-[0.55rem] 2xl:py-2 px-4 2xl:px-8 rounded-md relative z-10">
                  Volume
                </span>
                <span className="py-[0.55rem] 2xl:py-2 px-4 2xl:px-8 rounded-md relative z-10 ">
                  Price
                </span>
              </div>
            </div>
          </div>
        </div>
        <ChartApp />
      </div>
      <Trade_Stats />
      {hydration && activeTab == "ADA / TEDY" ? (
        <Trade_Hystory />
      ) : (
        <Trade_TopPairs />
      )}
    </div>
  );
};

export default Trade_Rightside;
