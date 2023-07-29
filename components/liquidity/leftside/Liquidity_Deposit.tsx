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
        <div className="space-y-2 w-full">
          <div className="w-full">
            <LiquidityAmountAndTokenField
              selectedToken={selectedToken}
              setShowComponent={setShowComponent}
              id="token-view-1"
              name="First Token"
            />
          </div>
          <div className="w-full">
            <LiquidityAmountAndTokenField
              selectedToken={selectedToken2}
              setShowComponent={setShowComponent}
              id="token-view-2"
              name="Second Token"
            />
          </div>
          <button
            onClick={() => {
              selectedToken && selectedToken2
                ? setShowComponent("confirm-liquidity")
                : alert("Please select two tokens");
            }}
            type="button"
            className={`${
              selectedToken && selectedToken2
                ? "secondary-button"
                : "primary-button"
            } text-sm 2xl:text-xl py-3 2xl:py-4 rounded-2xl border-2`}
          >
            {selectedToken && selectedToken2 ? "Add Liquidity" : "Select Pair"}
          </button>
        </div>
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
