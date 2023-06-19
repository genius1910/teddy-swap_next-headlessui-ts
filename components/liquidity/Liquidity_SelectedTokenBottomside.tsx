import Image from "next/image";
import React from "react";
import { MdCheckCircle } from "react-icons/md";
import Trade_KeyStats from "../trade/page/leftside/Trade_KeyStats";
import Liquidity_BottomStats from "./token_bottomside/Liquidity_Stats";

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
          <MdCheckCircle className="w-3 h-3" />
        </span>

        <h4 className="text-xl font-medium">
          Farm APR: <span className="text-cyan-gradient font-bold">34.56%</span>
        </h4>
      </div>
      {/* for desktop view */}
      <div className="hidden md:grid grid-cols-4 border-b border-gray-600 pb-4 text-xl font-medium mt-10">
        <h1>Locked Liquidity</h1>
        <h1>% of Total</h1>
        <h1>Your Liquidity</h1>
        <h1 className="">Farming</h1>
      </div>
      <div className="hidden md:grid grid-cols-4 mt-2">
        <div>
          <p>3.23m USDA</p>
          <p>6.12m ADA</p>
          <p>77,970,944,334,894 LP Tokens</p>
        </div>
        <div>
          <p>13.23%</p>
        </div>
        <div>
          <p>1,345 USDA</p>
          <p>2,130 ADA</p>
          <p>773,970 LP Tokens</p>
        </div>
        <div>
          <p>773,970 LP Tokens</p>
        </div>
      </div>
      {/* for mobile view  */}
      <div className="flex md:hidden flex-col gap-4">
        <div>
          <h1 className="text-lg font-medium border-b border-b-gray-600 py-2">
            Locked Liquidity
          </h1>
          <div className="mt-2">
            <p>3.23m USDA</p>
            <p>6.12m ADA</p>
            <p>77,970,944,334,894 LP Tokens</p>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-medium border-b border-b-gray-600 py-2">
            % of Total
          </h1>
          <div className="mt-2">
            <p>13.23%</p>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-medium border-b border-b-gray-600 py-2">
            Your Liquidity
          </h1>
          <div className="mt-2">
            <p>1,345 USDA</p>
            <p>2,130 ADA</p>
            <p>773,970 LP Tokens</p>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-medium border-b border-b-gray-600 py-2">
            Farming
          </h1>
          <div className="mt-2">
            <p>773,970 LP Tokens</p>
          </div>
        </div>
      </div>
      <Liquidity_BottomStats />
    </div>
  );
};

export default Liquidity_SelectedTokenBottomside;
