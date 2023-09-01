import Image from "next/image";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";

interface Props {
  setShowComponent: (value: string) => void;
  isAdd: boolean;
}

const Liquidity_Confirm = ({ setShowComponent, isAdd }: Props) => {
  const [confirming, setConfirming] = useState(false);
  return (
    <div
      className={`relative font-medium flex flex-col items-center pt-[30px] pl-[22px] pr-[20px] pb-6`}
    >
      <div className="text-white flex items-center justify-between w-full">
        <p className="xl:text-[20px] leading-6 font-medium text-base pl-[6px]">
          {confirming
            ? "Waiting For Confirmations"
            : isAdd
            ? "Confirm Add Liquidity"
            : "Confirm Remove Liquidity"}
        </p>
        <button className={` text-gray-100 hover:text-white`}>
          <RxCross2
            onClick={() =>
              confirming ? setConfirming(false) : setShowComponent("view-1")
            }
            className=" w-8 h-8 "
          />
        </button>
      </div>
      <div className="flex justify-between items-center px-[52px] w-full pt-[26px]">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="p-[14px] rounded-xl button-component-color">
            <Image
              src={`/images/assets/token-1.png`}
              width={53}
              height={53}
              className="drop-shadow-2xl"
              alt="Token 1 image"
            />
          </div>
          <p className="text-[#DBDBDB] text-[14px] leading-[20px] font-normal pt-[6px]">
            1 ADA
          </p>
        </div>
        <BsArrowRight className="w-8 h-8 text-[#268aff]" />
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="p-[14px] rounded-xl button-component-color">
            <Image
              src={`/images/assets/token-4.png`}
              width={53}
              height={53}
              className="drop-shadow-2xl"
              alt="Token 1 image"
            />
          </div>
          <p className="text-[#DBDBDB] text-[14px] leading-[20px] font-normal pt-[6px]">
            24.23 TEDY
          </p>
        </div>
      </div>
      {confirming ? (
        <>
          <p className="text-[12px] leading-[14px] font-normal text-[#D6D6D6] text-center pt-[26px] px-6">
            Swapping 2,000 ADA for 22.309498 cNETA. Confirm this transaction in
            your wallet.
          </p>
          <div className="flex flex-col gap-8 items-center justify-between w-full text-center">
            <div className="w-24 relative h-24 bg-transparent border-8 border-r-[#268aff] border-transparent rounded-full animate-spin "></div>
            <h1>Confirming...</h1>
          </div>
        </>
      ) : (
        <>
          <p className="text-[12px] leading-[14px] font-normal text-[#D6D6D6] text-center pt-[26px]">
            Output is estimated. You will recieve at least 224.22 cNETA or the
            transaction will revert.
          </p>
          <div className=" text-xss text-gray-200 w-full pt-10 px-[6px] pb-12">
            <ul className="space-y-3 w-full font-normal px-2">
              <li className=" flex justify-between w-full items-center">
                <p className="text-[10.6px] leading-[13px] font-medium text-[#E0E0E0]">
                  Slippage tolerance:
                </p>
                <p className=" text-white text-xs font-medium">437.85 iUSD</p>
              </li>
              <li className=" flex justify-between w-full items-center">
                <p className="text-[10.6px] leading-[13px] font-medium text-[#E0E0E0]">
                  Nitro:
                </p>
                <p className=" text-white text-xs font-medium">0.10%</p>
              </li>
              <li className=" flex justify-between w-full items-center">
                <p className="text-[10.6px] leading-[13px] font-medium text-[#E0E0E0]">
                  Estimated deposit
                </p>
                <p className=" text-white text-xs font-medium">{"<"}0.001%</p>
              </li>
              <li className=" flex justify-between w-full items-center">
                <p className="text-[10.6px] leading-[13px] font-medium text-[#E0E0E0]">
                  Total Fees
                </p>
                <p className=" text-white text-xs font-medium">{"<"}0.001%</p>
              </li>
            </ul>
          </div>
          <button
            onClick={() => {
              setConfirming(true);
              setTimeout(() => {
                Math.random() >= 0.5
                  ? setShowComponent("transaction-success")
                  : setShowComponent("transaction-failed");
              }, 2000);
            }}
            type="button"
            className=" primary-button font-medium text-sm xl:leading-[24px] xl:text-[20px] py-3 xl:py-4 rounded-lg border-2 pr-[2px]"
          >
            {isAdd ? "Confirm Add Liquidity" : "Confirm Remove Liquidity"}
          </button>
        </>
      )}
    </div>
  );
};

export default Liquidity_Confirm;
