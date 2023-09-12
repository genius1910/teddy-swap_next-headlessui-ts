"use client";
import CustomChart from "../../chart/CustomChart";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import Trade_Stats from "./rightside/Trade_Stats";
import Trade_History from "./rightside/Trade_History";
import Trade_TopPairs from "./rightside/Trade_TopPairs";

const times = ["1H", "1D", "1W", "1M", "3M", "1Y", "All Time"];

const data = [
  { name: "09/20", price: 700 },
  { name: "09/21", price: 800 },
  { name: "09/22", price: 900 },
  { name: "09/23", price: 1200 },
  { name: "09/24", price: 900 },
  { name: "09/25", price: 1500 },
  { name: "09/26", price: 900 },
  { name: "09/27", price: 800 },
  { name: "09/28", price: 900 },
  { name: "09/29", price: 500 },
  { name: "09/30", price: 1000 },
  { name: "10/01", price: 900 },
  { name: "10/02", price: 1500 },
  { name: "10/03", price: 1900 },
  { name: "10/04", price: 2000 },
  { name: "10/05", price: 2200 },
];
interface Props {
  activeTab: string;
  setActiveTab: (value: string) => void;
}
const Trade_Rightside = ({ activeTab, setActiveTab }: Props) => {
  const [currentTime, setCurrentTime] = useState("1w");
  const [toggler, setToggler] = useState("Volume");
  const [hydration, setHydration] = useState(false);
  const [fixedLines, setFixedLines] = useState({
    current: 900,
  });

  useEffect(() => {
    setHydration(true);
  }, []);

  return (
    <div className="select-none">
      <div className=" font-medium component-color overflow-hidden h-[479px] rounded-2xl grid relative">
        <div className="flex justify-between absolute z-10 w-full">
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
              <AiOutlineStar className="w-5 h-5 text-[#E8D648] cursor-pointer ml-2" />
            </span>
            <h2 className="text-2xl mt-4">₳6,363,639.46</h2>
            <p className=" mb-4 text-[0.7rem] text-[#0FC43B]">
              +₳544.03 (+2.03%) this week
            </p>
          </div>

          {/* rightside  */}
          <div className="flex flex-col p-6 ">
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
                          } text-white py-2 px-3.5`}
                        >
                          {item}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-end mt-4">
              <div
                onClick={() =>
                  toggler === "Volume"
                    ? setToggler("Price")
                    : setToggler("Volume")
                }
                className="component-color text-xs relative cursor-pointer flex justify-evenly items-center gap-1 rounded-xl h-full"
              >
                <span
                  className={`${
                    toggler == "Volume" ? "-translate-x-1/2" : "translate-x-1/2"
                  } rounded-xl small-component-color w-6/12 h-full absolute z-0 transition-all duration-500 ease-in-out`}
                ></span>
                <span className="py-[0.55rem] xl:py-2 px-4 xl:px-8 rounded-md relative z-10">
                  Volume
                </span>
                <span className="py-[0.55rem] xl:py-2 px-4 xl:px-8 rounded-md relative z-10 ">
                  Price
                </span>
              </div>
            </div>
          </div>
        </div>
        <CustomChart data={data} fixedLines={fixedLines} unit="₳" />
      </div>
      {hydration && activeTab == "ADA / TEDY" ? (
        <>
          <Trade_Stats />
          <Trade_History />
        </>
      ) : (
        <>
          <Trade_TopPairs setActiveTabs={setActiveTab} />
        </>
      )}
    </div>
  );
};

export default Trade_Rightside;
