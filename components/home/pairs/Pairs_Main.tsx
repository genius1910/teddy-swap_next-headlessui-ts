import React from "react";
import TimeGroupButton from "../TimeGroupButton";
import Pairs_BottomTable from "./Pairs_BottomTable";
import Image from "next/image";
import { BsPatchCheckFill } from "react-icons/bs";

const STATS_CONFIG = [["Top Gainers"], ["Top Volume"], ["Top Losers"]];
const STATS_DATA = [
  [
    ["TEDY", 2.4356, 35.63],
    ["USDA", 0.1245, 19.4],
    ["iUSD", 0.8632, 8.32],
    ["cBTC", 12.3467, 3.32],
  ],
  [
    ["TEDY", 4290321, 35.63],
    ["USDA", 876000, 19.4],
    ["iUSD", 1235303, 8.32],
    ["cBTC", 87928, 3.32],
  ],
  [
    ["TEDY", 4290321, -35.63],
    ["USDA", 876000, -19.4],
    ["iUSD", 1235303, -8.32],
    ["cBTC", 87928, -3.32],
  ],
];

const nf1 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 6,
  minimumFractionDigits: 0,
});

const nf2 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const Pairs_Main = () => {
  return (
    <div className="max-w-[1152px] mx-auto xl:zoom-80 2xl:zoom-100 px-4">
      <div className="flex items-end justify-center mt-11 md:justify-end w-full">
        <TimeGroupButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {STATS_CONFIG.map(([heading], index) => (
          <div
            key={`stats-component-${index}`}
            className="col-span-1 component-color pt-[16.91px] pl-[26px] rounded-[13px]"
          >
            <p className="text-[16px] leading-[19.5px] font-[500]">{heading}</p>
            <ul className="mt-[17.09px] pb-[20px] mr-[29px]">
              {STATS_DATA[index].map(([name, value, rate], index1) => (
                <li
                  key={`stats-item-component-${index}-${index1}`}
                  className="flex items-center mt-3"
                >
                  <span className="flex items-center flex-auto">
                    <Image
                      src={`/images/assets/teddy.png`}
                      alt="icon2"
                      width={16.81}
                      height={16.81}
                    />
                    <p className="font-medium text-[14px] ml-[7.19px] leading-[17.07px]">
                      {name}
                    </p>
                    <BsPatchCheckFill className="w-[10px] h-[10px] ml-[4px]" />
                  </span>
                  <span className="text-gray-300 text-[14px] leading-[17px] ml-12 w-[30%] text-right">
                    {nf1.format(value as number)} ₳
                  </span>
                  {}
                  <span
                    className={`${
                      (rate as number) > 0 ? "text-o_green" : "text-o_red"
                    } text-[14px] leading-[17px] w-[30%] text-right`}
                  >
                    {nf2.format(rate as number)}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="">
        <Pairs_BottomTable />
      </div>
    </div>
  );
};

export default Pairs_Main;
