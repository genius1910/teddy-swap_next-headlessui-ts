"use client";
import CustomChat from "../chart/CustomChart";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsExclamationCircle } from "react-icons/bs";
import Farm_Stats from "./rightside/Farm_Stats";
import Farm_SelectedTokenBottomside from "./rightside/Farm_SelectedTokenBottomside";

const times = ["1h", "1d", "1w", "1m", "All Time"];

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

const fixedLines = [
  { title: "Current Price", price: 1200 },
  { title: "Your Liquidity Deposit", price: 700 },
];
interface Props {
  activeTab: string;
  setActiveTab: (value: string) => void;
}
const Farm_Rightside = ({ activeTab, setActiveTab }: Props) => {
  const [currentTime, setCurrentTime] = useState("1w");
  const [toggler, setToggler] = useState("Volume");
  const [hydration, setHydration] = useState(false);

  useEffect(() => {
    setHydration(true);
  }, []);

  return (
    <div className="">
      <div className=" font-medium h-[479px] overflow-hidden component-color rounded-2xl grid relative">
        <div className="flex justify-between">
          <div className="px-6 pt-6 flex flex-col gap-1">
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
              <h4 className="text-base flex items-center gap-4">
                ADA/TEDY
                <button>
                  <AiOutlineStar className="w-5 h-5 text-[#E8D648]" />
                </button>
              </h4>
            </span>
            <h2 className="text-2xl text-[#268AFF]">-8.36%</h2>
            <p className="mb-4 text-xs flex items-center gap-1">
              Impermanent Loss{" "}
              <button>
                <BsExclamationCircle className="w-3 h-3" />
              </button>
            </p>
          </div>
          {/* rightside  */}
          <div className="flex flex-col p-6">
            <div className="flex flex-col">
              <div className="flex gap-0.5">
                {/* all button  */}
                <ul className="flex items-center component-color rounded-md text-xss w-full">
                  {times.map((item) => {
                    return (
                      <li key={item}>
                        <button
                          onClick={() => setCurrentTime(item)}
                          className={`${
                            item == currentTime &&
                            "small-component-color rounded-md"
                          } text-white py-0.5 px-3`}
                        >
                          {item}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <CustomChat data={data} fixedLines={fixedLines} />
      </div>
      <Farm_Stats />
      <Farm_SelectedTokenBottomside />
    </div>
  );
};

export default Farm_Rightside;
