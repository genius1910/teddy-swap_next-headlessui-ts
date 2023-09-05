import React, { useState } from "react";
import { RiExchangeLine } from "react-icons/ri";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import Image from "next/image";
import { BsExclamationTriangleFill } from "react-icons/bs";

interface Props {
  setShowComponent: (value: string) => void;
}

const Farm_Stake = ({ setShowComponent }: Props) => {
  const [stakeRange, setStakeRange] = useState(0);

  return (
    <React.Fragment>
      <div className="w-full">
        <span className="flex items-center gap-1 text-xl font-medium mt-[6px]">
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
          <p className="ml-[6px] text-[20px] leading-[24px] font-semibold">{`ADA / USDA - LP`}</p>
        </span>
      </div>
      <p className="text-[14px] leading-[17px] font-medium w-full text-[#C6C6C6]">
        LP Tokens Available: <span className="text-white">11189.1994</span>
      </p>
      <p className="text-white text-2xl font-medium pt-1">{stakeRange}</p>
      <div className="relative w-full">
        <input
          type="range"
          className="transparent h-1.5 slider w-full cursor-pointer appearance-none rounded-lg border-transparent bg-[#959595]"
          min="0"
          max="100"
          step="1"
          id="removeRange"
          value={stakeRange}
          onChange={(e) => setStakeRange(Number(e.target.value))}
        />
        <div
          style={{ width: `${1 * stakeRange}%` }}
          className={`bg-[#268AFF] h-1.5 pointer-events-none absolute inset-0 top-1 my-auto rounded-full`}
        />
        <div className="w-full flex justify-between text-xs absolute top-1.5 pointer-events-none">
          <div
            style={{
              background: `${stakeRange >= 0 ? "#268AFF" : "#D9D9D9"}`,
            }}
            className="w-4 h-4 rounded-full"
          />
          <div
            style={{
              background: `${stakeRange >= 25 ? "#268AFF" : "#D9D9D9"}`,
            }}
            className="w-4 h-4 rounded-full"
          />
          <div
            style={{
              background: `${stakeRange >= 50 ? "#268AFF" : "#D9D9D9"}`,
            }}
            className="w-4 h-4 rounded-full"
          />
          <div
            style={{
              background: `${stakeRange >= 75 ? "#268AFF" : "#D9D9D9"}`,
            }}
            className="w-4 h-4 rounded-full"
          />
          <div
            style={{
              background: `${stakeRange >= 100 ? "#268AFF" : "#D9D9D9"}`,
            }}
            className="w-4 h-4 rounded-full"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-4 text-[17px] leading-[20px] font-medium">
        <button
          className={`px-6 py-4 small-component-color rounded-[14px] col-span-1`}
          onClick={() => setStakeRange(25)}
        >
          25%
        </button>
        <button
          className={`px-6 py-4 small-component-color rounded-[14px] col-span-1`}
          onClick={() => setStakeRange(50)}
        >
          50%
        </button>
        <button
          className={`px-6 py-4 small-component-color rounded-[14px] col-span-1`}
          onClick={() => setStakeRange(75)}
        >
          75%
        </button>
        <button
          className={`px-6 py-4 small-component-color rounded-[14px] col-span-1`}
          onClick={() => setStakeRange(100)}
        >
          100%
        </button>
      </div>
      <div className=" w-full flex items-center gap-2 text-xs px-3 py-1">
        <BsExclamationTriangleFill className="w-6 h-6 text-[#268AFF]" />
        <p className="text-[12.7px] leading-[20px] font-medium">
          Each Stake or Withdraw action will automatically harvest your rewards
          for this pair!
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          setShowComponent("confirm-stake");
        }}
        className=" primary-button  text-sm 2xl:text-[19px] 2xl:leading-[23px] font-medium py-3 2xl:py-4 rounded-[12px] border-2 mt-6"
      >
        Stake
      </button>
    </React.Fragment>
  );
};

export default Farm_Stake;
