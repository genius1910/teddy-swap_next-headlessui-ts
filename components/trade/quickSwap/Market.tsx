import React, { useState } from "react";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import AmountAndTokenField_2 from "./AmountAndTokenField_2";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import SelectTokenView from "../quickSwap/SelectTokenView";

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

interface SelectedTokenProps {
  name: string;
  imgId: number;
  price: number;
}

interface MarketProps {
  setShowComponent: (show: string) => void;
  setSelectedToken: (token: any) => void; // Replace 'any' with the type of token
  setSelectedToken2: (token: any) => void; // Replace 'any' with the type of token
}

const Market: React.FC<MarketProps> = ({
  setShowComponent,
  setSelectedToken,
  setSelectedToken2,
}) => {
  const [show, setShow] = useState("");
  const [selectToken, setSelectToken] = useState<SelectedTokenProps>();
  const [selectToken2, setSelectToken2] = useState<SelectedTokenProps>();
  return (
    <React.Fragment>
      <div className="w-full">
        <div className="space-y-2">
          <div className="w-full relative">
            <AmountAndTokenField_2
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
              <SelectTokenView
                setSelectedToken={setSelectToken}
                setShowComponent={setShow}
              />
            </div>
          </div>
          <div className="w-full relative ">
            <AmountAndTokenField_2
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
              <SelectTokenView
                setSelectedToken={setSelectToken2}
                setShowComponent={setShow}
              />
            </div>
          </div>
          <div className="bg-[#1F2635] text-sm text-[#505A63] flex flex-col gap-4 w-full rounded-2xl py-[10px] px-[20px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p
                  className={` ${
                    selectToken && selectToken2
                      ? "text-[18.8px] leading-[28px] font-normal text-[#505A63]"
                      : "text-sm font-normal text-[#505A63]"
                  }`}
                >
                  Batcher Fee
                </p>
                <AiOutlineExclamationCircle
                  title="This is our current rate"
                  className="cursor-pointer w-5 h-5"
                />
              </div>
              <p
                className={` ${
                  selectToken && selectToken2
                    ? "text-[16px] leading-[24px] font-normal text-white"
                    : "text-xs text-white hidden"
                }`}
              >
                ₳1.75
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p
                  className={` ${
                    selectToken && selectToken2
                      ? "text-[18.8px] leading-[28px] font-normal text-[#505A63]"
                      : "text-sm font-normal text-[#505A63]"
                  }`}
                >
                  Rate
                </p>
                <AiOutlineExclamationCircle
                  title="This is our current rate"
                  className="cursor-pointer w-5 h-5"
                />
              </div>
              <p
                className={` ${
                  selectToken && selectToken2
                    ? "text-[16px] leading-[24px] font-normal text-white"
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
                ? setShowComponent("confirm-swap")
                : alert("Please select two tokens");
            }}
            type="button"
            className={`${
              selectToken && selectToken2
                ? "secondary-button"
                : "primary-button"
            } rounded-2xl text-sm xl:text-lg py-3 xl:py-[18px] border-2`}
          >
            {selectToken && selectToken2 ? "Swap" : "Select Pair"}
          </button>
        </div>
        {selectToken && selectToken2 && (
          <div className="mt-10 font-medium text-sm xl:text-base text-gray-200 w-full">
            <ul className="space-y-[10px] w-full font-normal px-2">
              <li className="text-[11px] leading-[13px] font-bold">
                1 ADA = 0.31 iUSD
              </li>
              <li className=" flex justify-between w-full items-center">
                <p className="text-[15px] font-medium leading-[18px] text-[#E0E0E0]">
                  Minimum received
                </p>
                <p className=" text-white text-[15px] font-medium leading-[18px]">
                  437.85 iUSD
                </p>
              </li>
              <li className=" flex justify-between w-full items-center">
                <p className="text-[15px] font-medium leading-[18px] text-[#E0E0E0]">
                  Slippage Tolerance
                </p>
                <p className=" text-white text-[15px] font-medium leading-[18px]">
                  0.10%
                </p>
              </li>
              <li className=" flex justify-between w-full items-center">
                <p className="text-[15px] font-medium leading-[18px] text-[#E0E0E0]">
                  Price Impact
                </p>
                <p className=" text-white text-[15px] font-medium leading-[18px]">
                  {"<"}0.001%
                </p>
              </li>
              <li className=" flex justify-between w-full items-center">
                <p className="text-[15px] font-medium leading-[18px] text-[#E0E0E0]">
                  Liquidity Provider Fee
                </p>
                <p className=" text-white text-[15px] font-medium leading-[18px]">
                  {"<"}0.001%
                </p>
              </li>
              <li className=" flex justify-between w-full items-center">
                <p className="text-[15px] font-medium leading-[18px] text-[#E0E0E0]">
                  Batcher Fee
                </p>
                <p className=" text-white text-[15px] font-medium leading-[18px]">
                  2A
                </p>
              </li>
              <li className=" flex justify-between w-full items-center">
                <p className="text-[15px] font-medium leading-[18px] text-[#E0E0E0]">
                  Deposit ADA
                </p>
                <p className=" text-white text-[15px] font-medium leading-[18px]">
                  2A
                </p>
              </li>
              <li className=" flex justify-between w-full items-center">
                <p className="text-[15px] font-medium leading-[18px] text-[#E0E0E0]">
                  Route
                </p>
                <p className=" text-white text-[15px] font-medium leading-[18px]">
                  ADA{">"}iUSD
                </p>
              </li>
            </ul>
            {/* <div className="flex justify-between items-center text-lg font-medium mt-9 gap-1">
              <p className="text-[16px] leading-[19.5px] font-medium">
                1 ADA = 0.945iUSD
              </p>
              <button className="flex items-center text-[#00DFFF] ">
                <CgArrowsExchangeAlt className="w-[20px] h-[15px]" />
                <p className="text-[#00DFFF] text-[15px] leading-[19px] font-medium">
                  Reverse Rate
                </p>
              </button>
            </div> */}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Market;
