import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { RiExchangeLine } from "react-icons/ri";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import AmountAndTokenField from "../AmountAndTokenField";
import Image from "next/image";
import AmountAndTokenField_2 from "../AmountAndTokenField_2";
import { AiOutlineExclamationCircle } from "react-icons/ai";

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
  console.log(selectedToken3, selectedToken4, selectedToken3 && selectedToken4);
  return (
    <React.Fragment>
      <div className="space-y-2 w-full">
        <div className="w-full">
          <AmountAndTokenField_2
            selectedToken={selectedToken3}
            setShowComponent={setShowComponent}
            id="token-view-3"
            name="From"
          />
        </div>
        <div className="w-full">
          <AmountAndTokenField_2
            selectedToken={selectedToken4}
            setShowComponent={setShowComponent}
            id="token-view-4"
            name="First Token"
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
        <div className=" w-full bg-[#1F2635] rounded-2xl py-2 px-4">
          <h4 className="text-[#505A63] text-xss my-1">{"Limit Price"}</h4>
          <div className="  flex justify-between items-center w-full">
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
        <button
          type="button"
          onClick={() => {
            setShowComponent("confirm-order");
          }}
          className={`${
            selectedToken3 && selectedToken4
              ? "secondary-button"
              : "primary-button"
          } text-sm 2xl:text-xl py-3 2xl:py-4 rounded-2xl border-2`}
        >
          {selectedToken3 && selectedToken4 ? "Place Order" : "Select Pair"}
        </button>
      </div>

      <div className=" text-sm 2xl:text-base text-gray-200 w-full">
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
