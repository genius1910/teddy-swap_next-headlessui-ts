import React from "react";
import { RiExchangeLine } from "react-icons/ri";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import Image from "next/image";
import LiquidityAmountAndTokenField from "../LiquidityAmountAndTokenField";

interface Props {
  setShowComponent: (value: string) => void;
  selectedToken3?: {
    name: string;
    percentage: number;
  };
  selectedToken4?: { name: string; percentage: number };
}

const Liquidity_Withdraw = ({
  setShowComponent,
  selectedToken3,
  selectedToken4,
}: Props) => {
  return (
    <React.Fragment>
      <div className="w-full">
        <span className="flex items-center gap-1 text-xl font-medium">
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
          <h4>{`ADA / USDA - LP`}</h4>
        </span>
      </div>
      <p className="text-gray-400 w-full">
        LP Tokens Available: <span className="text-white">11189.1994</span>
      </p>
      <p className="text-white text-2xl font-medium">0</p>
      <div className="w-full grid grid-cols-4 gap-4">
        <button className=" p-4 small-component-color rounded-lg col-span-1">
          25%
        </button>
        <button className=" p-4 small-component-color rounded-lg col-span-1">
          50%
        </button>
        <button className=" p-4 small-component-color rounded-lg col-span-1">
          75%
        </button>
        <button className=" p-4 small-component-color rounded-lg col-span-1">
          100%
        </button>
      </div>
      <div className=" w-full">
        <div className="flex justify-between">
          <h2>TEDY</h2>
          <p>3400.45 (~$345.67)</p>
        </div>
        <div className="flex justify-between">
          <h2>iUSD</h2>
          <p>345.67 (~$345.67)</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          setShowComponent("remove-liquidity");
        }}
        className=" primary-button  text-sm 2xl:text-xl py-3 2xl:py-4 rounded-lg border-2"
      >
        Remove Liquidity
      </button>
    </React.Fragment>
  );
};

export default Liquidity_Withdraw;
