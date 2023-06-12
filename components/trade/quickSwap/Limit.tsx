import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { RiExchangeLine } from "react-icons/ri";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import AmountAndTokenField from "./AmountAndTokenField";

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

const Limit = ({ setShowComponent, selectedToken3, selectedToken4 }: Props) => {
  return (
    <React.Fragment>
      <div className="w-full">
        <h5 className=" text-xs font-medium 2xl:text-sm text-gray-300 mb-1">
          From
        </h5>
        <AmountAndTokenField
          selectedToken={selectedToken3}
          setShowComponent={setShowComponent}
          id="token-view-3"
        />
      </div>
      <RiExchangeLine className="text-gray-300 rotate-90 w-8 h-8 -mb-6" />
      <div className="w-full">
        <h5 className=" text-xs font-medium 2xl:text-sm text-gray-300 mb-1">
          First Token
        </h5>
        <AmountAndTokenField
          selectedToken={selectedToken4}
          setShowComponent={setShowComponent}
          id="token-view-4"
        />
      </div>
      <div className=" w-full">
        <h5 className=" text-xs font-medium 2xl:text-sm text-gray-300 mb-1">
          Limit Price
        </h5>
        <div className="small-component-color flex justify-between items-center w-full rounded-lg py-2 px-4">
          <div className="font-medium space-y-1">
            <input
              type="text"
              defaultValue={0.0}
              className=" text-base w-full 2xl:text-xl bg-transparent text-white outline-none"
            />
            <p className="text-xs text-gray-300">~ $0</p>
          </div>
          <RiExchangeLine className="text-gray-300 w-8 h-8" />
        </div>
      </div>
      <button className=" primary-button  text-sm 2xl:text-xl py-3 2xl:py-4 rounded-lg border-2">
        Place Order
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
    </React.Fragment>
  );
};

export default Limit;
