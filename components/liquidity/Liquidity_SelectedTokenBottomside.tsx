import Image from "next/image";
import React from "react";
import { MdCheckCircle } from "react-icons/md";
import Trade_KeyStats from "../trade/page/leftside/Trade_KeyStats";
import Liquidity_BottomStats from "./token_bottomside/Liquidity_Stats";
import { BsExclamationCircle, BsPatchCheckFill } from "react-icons/bs";

const Liquidity_SelectedTokenBottomside = () => {
  return (
    <div className="component-color rounded-2xl p-6">
      <div className="flex justify-between text-xl">
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
          <h4 className="text-lg font-medium">ADA/USDA - LP</h4>
          <BsPatchCheckFill className="w-3 h-3" />
        </span>

        <button className="primary-button py-2 px-6 text-sm w-auto">
          View Farm
        </button>
      </div>
      <div className="grid grid-cols-3 mt-8 px-4">
        <div>
          <h1 className="flex items-center gap-1 text-lg xl:text-xl mb-4 font-medium">
            Total Liquidity
            <button>
              <BsExclamationCircle className="w-3 h-3" />
            </button>
          </h1>
          <ul className="space-y-1">
            <h2 className="text-sm xl:text-base">3.23m USDA</h2>
            <h2 className="text-sm xl:text-base">6.12m ADA</h2>
            <h2 className="text-sm xl:text-base">70,944,334,894 LP Tokens</h2>
            <h2 className="text-sm xl:text-base">TeddySwap TVL share: 5.68%</h2>
          </ul>
        </div>
        <div>
          <h1 className="flex items-center gap-1 text-lg xl:text-xl mb-4 font-medium">
            Your Liquidity
            <button>
              <BsExclamationCircle className="w-3 h-3" />
            </button>
          </h1>
          <ul className="space-y-1">
            <h2 className="text-sm xl:text-base">1,345 USDA</h2>
            <h2 className="text-sm xl:text-base">2,130 ADA</h2>
            <h2 className="text-sm xl:text-base">773,970 LP Tokens</h2>
            <h2 className="text-sm xl:text-base">Pool share: 0.87%</h2>
          </ul>
        </div>
        <div>
          <h1 className="flex items-center gap-1 text-lg xl:text-xl mb-4 font-medium">
            Your Farm
            <button>
              <BsExclamationCircle className="w-3 h-3" />
            </button>
          </h1>
          <ul className="space-y-1">
            <h2 className="text-sm xl:text-base">600,970 LP Tokens</h2>
            <h2 className="text-sm xl:text-base">85.34% of LP position</h2>
            <h2 className="text-sm xl:text-base">
              APR <span className="text-[#268AFF]">34.56%</span>
            </h2>
            <h2 className="text-sm xl:text-base">Farm share: 1.67%</h2>
          </ul>
        </div>
      </div>
      {/* <Liquidity_BottomStats /> */}
    </div>
  );
};

export default Liquidity_SelectedTokenBottomside;
