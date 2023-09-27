"use client";
import CustomChat from "../chart/CustomChart";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsExclamationCircle } from "react-icons/bs";
import Farm_Stats from "./rightside/Farm_Stats";
import Farm_SelectedTokenBottomside from "./rightside/Farm_SelectedTokenBottomside";

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
const Farm_Rightside = ({ activeTab, setActiveTab }: Props) => {
  const [currentTime, setCurrentTime] = useState("1w");
  const [toggler, setToggler] = useState("Volume");
  const [hydration, setHydration] = useState(false);

  const [fixedLines, setFixedLines] = useState({
    current: 900,
    deposit: 1200,
  });

  useEffect(() => {
    setHydration(true);
  }, []);

  return (
    <div className="select-none">
      <div className=" font-medium h-[479px] overflow-hidden component-color rounded-2xl grid relative">
        <div className="flex justify-between absolute z-10 w-full">
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
              <h4 className="text-base flex items-center gap-2">
                ADA/TEDY Liquidity Postition
                <button>
                  <AiOutlineStar className="w-5 h-5 text-[#E8D648]" />
                </button>
              </h4>
            </span>
            <div className="flex justify-between items-center p-3 gap-x-3">
              <div className="flex flex-col gap-y-1.5">
                <div className="flex justify-around items-center component-color-5 w-48 h-8 rounded-xl">
                  <p className="text-[9px] flex items-center">
                    Impermanent Loss &nbsp;
                    <button>
                      <BsExclamationCircle title="The potential loss that you can incur due to price fluctuations when providing liquidity to a pool." className="w-2 h-2" />
                    </button>
                  </p>
                  <p className="text-sm text-[#FF5757]">-3.98%</p>
                </div>
                <div className="flex justify-around items-center component-color-5  w-48 h-8 rounded-xl">
                  <p className="text-[9px] flex items-center">
                    LP fees Income &nbsp;
                    <button>
                      <BsExclamationCircle title="The total amount of fees that you have earned as a liquidity provider." className="w-2 h-2" />
                    </button>
                  </p>
                  <p className="text-sm text-[#57FF86]">+4.2%</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center component-color-5 w-28 h-full rounded-xl">
                <div>
                  <p className="text-[9px] flex items-center">
                    Net Gain &nbsp;
                    <button>
                      <BsExclamationCircle title="The total earnings that you have generated from providing liquidity, minus any impermanent loss that you have incurred." className="w-2 h-2" />
                    </button>
                  </p>
                  <p className="text-xl text-[#57FF86]">+1.76%</p>
                </div>
              </div>
            </div>
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
                          className={`${item == currentTime &&
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
          </div>
        </div>
        <CustomChat
          data={data}
          fixedLines={fixedLines}
          setFixedLines={setFixedLines}
          unit="₳"
        />
      </div>
      <Farm_Stats />
      <Farm_SelectedTokenBottomside />
    </div>
  );
};

export default Farm_Rightside;
