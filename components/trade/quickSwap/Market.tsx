import React, { useState } from "react";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import AmountAndTokenField_2 from "./AmountAndTokenField_2";
import { AiOutlineExclamationCircle } from "react-icons/ai";

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
      <div className="w-full">
        <div className="space-y-2">
          <div className="w-full">
            <AmountAndTokenField_2
              selectedToken={selectedToken}
              setShowComponent={setShowComponent}
              id="token-view-1"
              name="Amount"
            />
          </div>
          <div className="w-full">
            <AmountAndTokenField_2
              selectedToken={selectedToken2}
              setShowComponent={setShowComponent}
              id="token-view-2"
              name="Converted To"
            />
          </div>
          <div className="bg-[#1F2635] text-sm text-[#505A63] flex flex-col gap-3 w-full rounded-2xl p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h4>Our current rate</h4>
                <AiOutlineExclamationCircle
                  title="This is our current rate"
                  className="cursor-pointer w-5 h-5"
                />
              </div>
              <p className="text-xs text-white">$1 = ₳0.7777</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h4>No fees</h4>
                <AiOutlineExclamationCircle
                  title="don't need to additional fees "
                  className="cursor-pointer w-5 h-5"
                />
              </div>
              <p className="text-xs text-white">$0.00</p>
            </div>
          </div>
          <button
            onClick={() => {
              selectedToken && selectedToken2
                ? setShowComponent("confirm-swap")
                : alert("Please select two tokens");
            }}
            type="button"
            className={`${
              selectedToken && selectedToken2
                ? "secondary-button"
                : "primary-button"
            } rounded-2xl text-sm xl:text-lg py-2 xl:py-3 border-2`}
          >
            {selectedToken && selectedToken2 ? "Swap" : "Select Pair"}
          </button>
        </div>
        {selectedToken && selectedToken2 && (
          <div className="mt-4 font-medium text-sm xl:text-base text-gray-200 w-full">
            <ul className="space-y-3 w-full font-normal px-2">
              <li className=" font-semibold">1 ADA = 0.31 iUSD</li>
              <li className=" flex justify-between w-full items-center">
                <h5>Minimum received</h5>
                <p className=" text-white">437.85 iUSD</p>
              </li>
              <li className=" flex justify-between w-full items-center">
                <h5>Slippage Tolerance</h5>
                <p className=" text-white">0.10%</p>
              </li>
              <li className=" flex justify-between w-full items-center">
                <h5>Price Impact</h5>
                <p className=" text-white">{"<"}0.001%</p>
              </li>
              <li className=" flex justify-between w-full items-center">
                <h5>Liquidity Provider Fee</h5>
                <p className=" text-white">{"<"}0.001%</p>
              </li>
              <li className=" flex justify-between w-full items-center">
                <h5>Batcher Fee</h5>
                <p className=" text-white">2A</p>
              </li>
              <li className=" flex justify-between w-full items-center">
                <h5>Deposit ADA</h5>
                <p className=" text-white">2A</p>
              </li>
              <li className=" flex justify-between w-full items-center">
                <h5>Route</h5>
                <p className=" text-white">ADA{">"}iUSD</p>
              </li>
            </ul>
            {/* <div className="flex justify-between items-center text-lg font-medium mt-8">
              <h1>1 ADA = 0.945iUSD</h1>
              <button className="flex items-center text-white ">
                <CgArrowsExchangeAlt className="w-6 h-6" />
                <p>Reverse Rate</p>
              </button>
            </div> */}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Market;
