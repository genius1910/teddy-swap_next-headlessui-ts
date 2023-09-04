"use client";
import { ChartApp } from "@/components/home/dexinfo/TradingChart";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Liquidity_Stats from "./rightside/Liquidity_Stats";
import Liquidity_SelectedTokenBottomside from "./Liquidity_SelectedTokenBottomside";
import { BsExclamationCircle } from "react-icons/bs";

const times = ["1h", "1d", "1w", "1m", "All Time"];
interface Props {
  activeTab: string;
  setActiveTab: (value: string) => void;
}
const Liquidity_Rightside = ({ activeTab, setActiveTab }: Props) => {
  const [currentTime, setCurrentTime] = useState("1w");
  const [toggler, setToggler] = useState("Volume");
  const [hydration, setHydration] = useState(false);

  useEffect(() => {
    setHydration(true);
  }, []);

  return (
    <div className="">
      <div className=" font-medium h-full overflow-hidden component-color rounded-2xl">
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
                <BsExclamationCircle
                  title="The potential loss that you can incur due to price fluctuations when providing liquidity to the Teddy/ADA"
                  className="w-3 h-3"
                />
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
        <ChartApp />
      </div>
      <Liquidity_Stats />
      <Liquidity_SelectedTokenBottomside />
    </div>
  );
};

export default Liquidity_Rightside;
