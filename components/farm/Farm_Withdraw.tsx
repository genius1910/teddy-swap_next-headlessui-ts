import React, { useState } from "react";
import { RiExchangeLine } from "react-icons/ri";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import Image from "next/image";
import { BsExclamationTriangleFill } from "react-icons/bs";

interface Props {
  setShowComponent: (value: string) => void;
}

const Farm_Withdraw = ({ setShowComponent }: Props) => {
  const [withdrawRange, setWithdrawRange] = useState(0);

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
      <p className="text-white text-2xl font-medium">{withdrawRange}</p>
      <div className="relative w-full">
        <input
          type="range"
          className="transparent h-1.5 slider w-full cursor-pointer appearance-none rounded-lg border-transparent bg-[#959595]"
          min="0"
          max="100"
          step="1"
          id="withdrawRange"
          value={withdrawRange}
          onChange={(e) => setWithdrawRange(Number(e.target.value))}
        />
        <div
          style={{ width: `${1 * withdrawRange}%` }}
          className={`bg-[#268AFF] h-1.5 pointer-events-none absolute inset-0 top-1 my-auto rounded-full`}
        />
        <div className="w-full flex justify-between text-xs absolute top-1.5 pointer-events-none">
          <div
            style={{
              background: `${withdrawRange >= 0 ? "#268AFF" : "#D9D9D9"}`,
            }}
            className="w-4 h-4 rounded-full"
          />
          <div
            style={{
              background: `${withdrawRange >= 25 ? "#268AFF" : "#D9D9D9"}`,
            }}
            className="w-4 h-4 rounded-full"
          />
          <div
            style={{
              background: `${withdrawRange >= 50 ? "#268AFF" : "#D9D9D9"}`,
            }}
            className="w-4 h-4 rounded-full"
          />
          <div
            style={{
              background: `${withdrawRange >= 75 ? "#268AFF" : "#D9D9D9"}`,
            }}
            className="w-4 h-4 rounded-full"
          />
          <div
            style={{
              background: `${withdrawRange >= 100 ? "#268AFF" : "#D9D9D9"}`,
            }}
            className="w-4 h-4 rounded-full"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-4">
        <button
          className={`px-6 py-4 small-component-color rounded-[14px] col-span-1`}
          onClick={() => setWithdrawRange(25)}
        >
          25%
        </button>
        <button
          className={`px-6 py-4 small-component-color rounded-[14px] col-span-1`}
          onClick={() => setWithdrawRange(50)}
        >
          50%
        </button>
        <button
          className={`px-6 py-4 small-component-color rounded-[14px] col-span-1`}
          onClick={() => setWithdrawRange(75)}
        >
          75%
        </button>
        <button
          className={`px-6 py-4 small-component-color rounded-[14px] col-span-1`}
          onClick={() => setWithdrawRange(100)}
        >
          100%
        </button>
      </div>
      <div className=" w-full flex items-center gap-2 text-xs px-3 py-1">
        <BsExclamationTriangleFill className="w-6 h-6 text-[#268AFF]" />
        <p>
          Each Stake or Withdraw action will automatically harvest your rewards
          for this pair!
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          setShowComponent("confirm-withdraw");
        }}
        className=" primary-button  text-sm 2xl:text-xl py-3 2xl:py-4 rounded-lg border-2"
      >
        Withdraw
      </button>
    </React.Fragment>
  );
};

export default Farm_Withdraw;
