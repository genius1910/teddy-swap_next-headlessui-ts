import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { RiExchangeLine } from "react-icons/ri";
import SelectTokenView from "./SelectTokenView";
import Image from "next/image";
import AmountAndTokenField from "./AmountAndTokenField";

interface Props {
  setShowComponent: (value: string) => void;
  selectedToken?: {
    name: string;
    imgId: number;
    price: number;
  };
  selectedToken2?: {
    name: string;
    imgId: number;
    price: number;
  };
}

const Market = ({ setShowComponent, selectedToken, selectedToken2 }: Props) => {
  return (
    <React.Fragment>
      <>
        <div className="w-full">
          <h5 className=" text-xs font-medium 2xl:text-sm text-gray-300 mb-1">
            From
          </h5>
          <AmountAndTokenField
            selectedToken={selectedToken}
            setShowComponent={setShowComponent}
            id="token-view-1"
          />
        </div>
        <RiExchangeLine className="text-gray-300 rotate-90 w-8 h-8 -mb-6" />
        <div className="w-full">
          <h5 className=" text-xs font-medium 2xl:text-sm text-gray-300 mb-1">
            To (estimated)
          </h5>
          <AmountAndTokenField
            selectedToken={selectedToken2}
            setShowComponent={setShowComponent}
            id="token-view-2"
          />
        </div>
        <button
          onClick={() => setShowComponent("confirm-swap")}
          type="button"
          className=" primary-button  text-sm 2xl:text-xl py-3 2xl:py-4 rounded-lg border-2"
        >
          Swap
        </button>
        <div className=" text-xss text-gray-200 w-full">
          <ul className="space-y-3 w-full font-normal px-2">
            <li className=" font-semibold">1 ADA = 0.31 iUSD</li>
            <li className=" flex justify-between w-full items-center">
              <h5>Minimum received</h5>
              <p className=" text-white text-xs">437.85 iUSD</p>
            </li>
            <li className=" flex justify-between w-full items-center">
              <h5>Slippage Tolerance</h5>
              <p className=" text-white text-xs">0.10%</p>
            </li>
            <li className=" flex justify-between w-full items-center">
              <h5>Price Impact</h5>
              <p className=" text-white text-xs">{"<"}0.001%</p>
            </li>
            <li className=" flex justify-between w-full items-center">
              <h5>Liquidity Provider Fee</h5>
              <p className=" text-white text-xs">{"<"}0.001%</p>
            </li>
            <li className=" flex justify-between w-full items-center">
              <h5>Batcher Fee</h5>
              <p className=" text-white text-xs">2A</p>
            </li>
            <li className=" flex justify-between w-full items-center">
              <h5>Deposit ADA</h5>
              <p className=" text-white text-xs">2A</p>
            </li>
            <li className=" flex justify-between w-full items-center">
              <h5>Route</h5>
              <p className=" text-white text-xs">ADA{">"}iUSD</p>
            </li>
          </ul>
          <div className="flex justify-between items-center text-lg font-medium mt-8">
            <h1>1 ADA = 0.945iUSD</h1>
            <button className="flex items-center bg-gradient-to-l from-[#0084FF] to-[#26FFFF] text-transparent bg-clip-text ">
              <CgArrowsExchangeAlt className="w-6 h-6 text-[#00DFFF]" />
              <p>Reverse Rate</p>
            </button>
          </div>
        </div>
      </>
    </React.Fragment>
  );
};

export default Market;
