import React, { useState } from "react";
import { RiExchangeLine } from "react-icons/ri";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import AmountAndTokenField_2 from "../AmountAndTokenField_2";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import SelectTokenView from "../../quickSwap/SelectTokenView";

interface Props {
  setShowComponent: (value: string) => void;
  selectedToken3?: {
    name: string;
    imgId: number;
    price: number;
  };
  selectedToken4?: {
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
  setSelectedToken3: (token: any) => void; // Replace 'any' with the type of token
  setSelectedToken4: (token: any) => void; // Replace 'any' with the type of token
}

const Limit: React.FC<MarketProps> = ({
  setShowComponent,
  setSelectedToken3,
  setSelectedToken4,
}) => {
  const [show, setShow] = useState("");
  const [selectToken3, setSelectToken3] = useState<SelectedTokenProps>();
  const [selectToken4, setSelectToken4] = useState<SelectedTokenProps>();
  return (
    <React.Fragment>
      <div className="space-y-2 w-full ">
        <div className="w-full relative">
          <AmountAndTokenField_2
            selectedToken={selectToken3}
            setShowComponent={setShow}
            id="token-view-3"
            name="From"
          />
          <div
            className={`absolute top-2 left-1 right-1 z-20 ${
              show === "token-view-3" ? "flex" : "hidden"
            }`}
          >
            <SelectTokenView
              setSelectedToken={setSelectToken3}
              setShowComponent={setShow}
            />
          </div>
        </div>
        <div className="w-full relative">
          <AmountAndTokenField_2
            selectedToken={selectToken4}
            setShowComponent={setShow}
            id="token-view-4"
            name="First Token"
          />
          <div
            className={`absolute top-2 left-1 right-1 z-20 ${
              show === "token-view-4" ? "" : "hidden"
            }`}
          >
            <SelectTokenView
              setSelectedToken={setSelectToken4}
              setShowComponent={setShow}
            />
          </div>
        </div>
        <p className="text-[#C6C6C6] text-[14px] leading-[17px] pl-4 font-medium mt-2 mb-1 w-full relative">
          {"Limit Price"}
        </p>
        <div className=" w-full bg-[#1F2635] rounded-2xl pt-[14px] pb-3 px-4">
          <div className="  flex justify-between items-center w-full">
            <div className="font-medium space-y-[2px]">
              <input
                type="text"
                defaultValue={0.0}
                className=" text-base w-full xl:text-xl bg-transparent text-white outline-none font-semibold"
              />
              <p className="text-xs text-gray-300">~ $0</p>
            </div>
            <RiExchangeLine className="text-gray-300 w-6 h-6" />
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
                selectToken3 && selectToken4
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
                selectToken3 && selectToken4
                  ? "text-xs text-white font-normal"
                  : "text-xs text-white hidden"
              }`}
            >
              1 iUSD = 1.003 DJED
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            selectToken3 && selectToken4
              ? setShowComponent("confirm-order")
              : alert("Please select two tokens");
          }}
          className={`${
            selectToken3 && selectToken4 ? "secondary-button" : "primary-button"
          } text-sm xl:text-lg py-3 xl:py-[18px] rounded-2xl border-2`}
        >
          {selectToken3 && selectToken4 ? "Place Order" : "Select Pair"}
        </button>
      </div>

      <div className="mt-[22px] font-medium text-sm xl:text-base text-gray-200 w-full">
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
            <div className="flex items-center gap-[2px]">
              <p className="text-[15px] font-medium leading-[18px] text-[#E0E0E0]">
                Slippage Tolerance
              </p>
              <AiOutlineExclamationCircle
                title="The maximum amount that the price of Teddy can move before your trade is cancelled."
                className="w-3 h-3"
              />
            </div>
            <p className=" text-white text-[15px] font-medium leading-[18px]">
              0.10%
            </p>
          </li>
          <li className=" flex justify-between w-full items-center">
            <div className="flex items-center gap-[2px]">
              <p className="text-[15px] font-medium leading-[18px] text-[#E0E0E0]">
                Price Impact
              </p>
              <AiOutlineExclamationCircle
                title="The estimated impact that your trade will have on the price of Teddy."
                className="w-3 h-3"
              />
            </div>
            <p className=" text-white text-[15px] font-medium leading-[18px]">
              {"<"}0.001%
            </p>
          </li>
          <li className=" flex justify-between w-full items-center">
            <div className="flex items-center gap-[2px]">
              <p className="text-[15px] font-medium leading-[18px] text-[#E0E0E0]">
                Liquidity Provider Fee
              </p>
              <AiOutlineExclamationCircle
                title="The fee that you earn as a liquidity provider, expressed as a percentage of the trading fees that are generated in the pool."
                className="w-3 h-3"
              />
            </div>
            <p className=" text-white text-[15px] font-medium leading-[18px]">
              {"<"}0.001%
            </p>
          </li>
          <li className=" flex justify-between w-full items-center">
            <div className="flex items-center gap-[2px]">
              <p className="text-[15px] font-medium leading-[18px] text-[#E0E0E0]">
                Batcher Fee
              </p>
              <AiOutlineExclamationCircle
                title="The fee that you pay to the batcher for processing your trades."
                className="w-3 h-3"
              />
            </div>
            <p className=" text-white text-[15px] font-medium leading-[18px]">
              2A
            </p>
          </li>
          <li className=" flex justify-between w-full items-center">
            <div className="flex items-center gap-[2px]">
              <p className="text-[15px] font-medium leading-[18px] text-[#E0E0E0]">
                Deposit ADA
              </p>
              <AiOutlineExclamationCircle
                title="The amount of ADA that you want to deposit into the pool."
                className="w-3 h-3"
              />
            </div>
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
    </React.Fragment>
  );
};

export default Limit;
