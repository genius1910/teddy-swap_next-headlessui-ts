import React, { useState } from "react";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import Image from "next/image";
import LiquidityAmountAndTokenField from "../LiquidityAmountAndTokenField";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import Liquidity_SelectTokenView from "./Liquidity_SelectTokenView";

interface Props {
  setShowComponent: (value: string) => void;
  selectedToken?: {
    name: string;
    percentage: number;
  };
  selectedToken2?: { name: string; percentage: number };
}

interface SelectedTokenProps {
  name: string;
  percentage: number;
}

interface LiquidityProps {
  setShowComponent: (show: string) => void;
  setSelectedToken: (token: any) => void; // Replace 'any' with the type of token
  setSelectedToken2: (token: any) => void; // Replace 'any' with the type of token
}

const Liquidity_Add: React.FC<LiquidityProps> = ({
  setShowComponent,
  setSelectedToken,
  setSelectedToken2,
}) => {
  const [show, setShow] = useState("");
  const [selectToken, setSelectToken] = useState<SelectedTokenProps>();
  const [selectToken2, setSelectToken2] = useState<SelectedTokenProps>();
  return (
    <React.Fragment>
      <>
        <div className="space-y-2 w-full">
          <div className="w-full relative">
            <LiquidityAmountAndTokenField
              selectedToken={selectToken}
              setShowComponent={setShow}
              id="token-view-1"
              name="Amount"
            />
            <div
              className={`absolute top-2 left-1 right-1 z-20 ${
                show === "token-view-1" ? "flex" : "hidden"
              }`}
            >
              <Liquidity_SelectTokenView
                setSelectedToken={setSelectToken}
                setShowComponent={setShow}
              />
            </div>
          </div>
          <div className="w-full relative">
            <LiquidityAmountAndTokenField
              selectedToken={selectToken2}
              setShowComponent={setShow}
              id="token-view-2"
              name="Converted To"
            />
            <div
              className={`absolute top-2 left-1 right-1 z-20 ${
                show === "token-view-2" ? "" : "hidden"
              }`}
            >
              <Liquidity_SelectTokenView
                setSelectedToken={setSelectToken2}
                setShowComponent={setShow}
              />
            </div>
          </div>
          <div className="bg-[#1F2635] text-sm text-[#505A63] flex flex-col gap-4 w-full rounded-2xl py-[10px] px-[20px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[5px]">
                <p className={"text-sm font-normal text-[#505A63]"}>
                  Batcher Fee
                </p>
                <AiOutlineExclamationCircle
                  title="The fee that you pay to the batcher for processing your trades."
                  className="cursor-pointer w-3 h-3"
                />
              </div>
              <p
                className={` ${
                  selectToken && selectToken2
                    ? "text-xs text-white font-normal"
                    : "text-xs text-white hidden"
                }`}
              >
                ₳1.75
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[5px]">
                <p className={"text-sm font-normal text-[#505A63]"}>Rate</p>
                <AiOutlineExclamationCircle
                  title="The current exchange rate between Teddy and ADA."
                  className="cursor-pointer w-3 h-3"
                />
              </div>
              <p
                className={` ${
                  selectToken && selectToken2
                    ? "text-xs text-white font-normal"
                    : "text-xs text-white hidden"
                }`}
              >
                1 iUSD = 1.003 DJED
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setSelectedToken(selectToken);
              setSelectedToken2(selectToken2);
              selectToken && selectToken2
                ? setShowComponent("confirm-liquidity")
                : alert("Please select two tokens");
            }}
            type="button"
            className={`${
              selectToken && selectToken2
                ? "secondary-button"
                : "primary-button"
            } text-sm 2xl:text-xl py-3 2xl:py-4 rounded-2xl border-2`}
          >
            {selectToken && selectToken2 ? "Add Liquidity" : "Select Pair"}
          </button>
        </div>
        <div className="font-medium text-sm 2xl:text-base text-gray-200 w-full">
          <ul className="space-y-3 w-full font-normal px-4">
            <li className="text-[#E0E0E0] text-[15px] leading-[18px] font-medium flex justify-between w-full items-center">
              <p>Price:</p>
              <p>437.85 iUSD</p>
            </li>
            <li className="text-[#E0E0E0] text-[15px] leading-[18px] font-medium flex justify-between w-full items-center">
              <p>Slippage</p>
              <p>0.10%</p>
            </li>
            <li className="text-[#E0E0E0] text-[15px] leading-[18px] font-medium flex justify-between w-full items-center">
              <div className="flex items-center gap-1">
                <p>Your share in pool</p>
                <AiOutlineExclamationCircle
                  title="The percentage of the pool's earnings that you are entitled to, based on your share of the liquidity."
                  className="cursor-pointer w-3 h-3"
                />
              </div>
              <p>{"<"}0.001%</p>
            </li>
            <li className="text-[#E0E0E0] text-[15px] leading-[18px] font-medium flex justify-between w-full items-center">
              <div className="flex items-center gap-1">
                <p>Fee Rate</p>
                <AiOutlineExclamationCircle
                  title="The percentage of the trading fees that are earned by liquidity providers."
                  className="cursor-pointer w-3 h-3"
                />
              </div>
              <p>{"<"}0.001%</p>
            </li>
          </ul>
          <div className="flex justify-between items-center text-lg font-medium mt-9 gap-1">
            <p className="text-[16px] leading-[19.5px] font-medium">
              1 ADA = 0.945iUSD
            </p>
            <button className="flex items-center text-[#00DFFF] ">
              <CgArrowsExchangeAlt className="w-[20px] h-[15px]" />
              <p className="text-[#00DFFF] text-[15px] leading-[19px] font-medium">
                Reverse Rate
              </p>
            </button>
          </div>
        </div>
      </>
    </React.Fragment>
  );
};

export default Liquidity_Add;
