import React, { useState } from "react";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import Image from "next/image";
import LiquidityAmountAndTokenField from "../LiquidityAmountAndTokenField";

interface Props {
  setShowComponent: (value: string) => void;
  selectedToken?: {
    name: string;
    percentage: number;
  };
  selectedToken2?: { name: string; percentage: number };
}

const Liquidity_Deposit = ({
  setShowComponent,
  selectedToken,
  selectedToken2,
}: Props) => {
  return (
    <React.Fragment>
      <>
        <div className="w-full">
          <h5 className=" text-xs font-medium 2xl:text-sm text-gray-300 mb-1">
            First Token
          </h5>
          <LiquidityAmountAndTokenField
            selectedToken={selectedToken}
            setShowComponent={setShowComponent}
            id="token-view-1"
          />
        </div>
        <Image
          src={`/images/icons/PlusCircle.svg`}
          width={32}
          height={32}
          alt="Exchange image"
          className=" rotate-90 -mb-6"
        />
        <div className="w-full">
          <h5 className=" text-xs font-medium 2xl:text-sm text-gray-300 mb-1">
            Second Token
          </h5>
          <LiquidityAmountAndTokenField
            selectedToken={selectedToken2}
            setShowComponent={setShowComponent}
            id="token-view-2"
          />
        </div>
        <button
          onClick={() => setShowComponent("confirm-liquidity")}
          type="button"
          className=" primary-button  text-sm 2xl:text-xl py-3 2xl:py-4 rounded-lg border-2"
        >
          Add Liquidity
        </button>
        <div className="font-medium text-sm 2xl:text-base text-gray-200 w-full">
          <ul className="space-y-3 w-full font-normal px-2">
            <li className=" flex justify-between w-full items-center">
              <h5>Price:</h5>
              <p className=" text-white">437.85 iUSD</p>
            </li>
            <li className=" flex justify-between w-full items-center">
              <h5>Slippage</h5>
              <p className=" text-white">0.10%</p>
            </li>
            <li className=" flex justify-between w-full items-center">
              <h5>Your share in pool:</h5>
              <p className=" text-white">{"<"}0.001%</p>
            </li>
            <li className=" flex justify-between w-full items-center">
              <h5>Fee Rate:</h5>
              <p className=" text-white">{"<"}0.001%</p>
            </li>
          </ul>
          <div className="flex justify-between items-center text-lg font-medium mt-8">
            <h1>1 ADA = 0.945iUSD</h1>
            <button className="flex items-center bg-gradient-to-l from-[#02afff] to-[#26FFFF] text-transparent bg-clip-text ">
              <CgArrowsExchangeAlt className="w-6 h-6 text-[#00DFFF]" />
              <p>Reverse Rate</p>
            </button>
          </div>
        </div>
      </>
    </React.Fragment>
  );
};

export default Liquidity_Deposit;
