import Image from "next/image";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";

interface Props {
  setShowComponent: (value: string) => void;
  isStake: boolean;
}

const Farm_Confirm = ({ setShowComponent, isStake }: Props) => {
  const [confirming, setConfirming] = useState(false);
  return (
    <div className="relative font-medium flex flex-col gap-6 items-center p-6">
      <div className="text-white flex items-center justify-between w-full">
        <h1 className="xl:text-xl text-base">
          {isStake ? "Confirm Stake" : "Confirm Withdraw"}
        </h1>
        <button
          className={` text-gray-100 hover:text-white text-base xl:text-lg`}
        >
          <RxCross2
            onClick={() =>
              confirming ? setConfirming(false) : setShowComponent("view-1")
            }
            className=" w-8 h-8 "
          />
        </button>
      </div>
      <div className="flex justify-between items-center px-6 w-full mb-6">
        <div className="flex flex-col gap-2 items-center justify-center relative">
          <div className="p-4 rounded-xl button-component-color">
            <Image
              src={`/images/assets/token-1.png`}
              width={44}
              height={44}
              alt="Token 1 image"
            />
          </div>
          <h1 className=" whitespace-nowrap font-normal text-sm xl:text-base absolute -bottom-7">
            1 ADA
          </h1>
        </div>
        <Image
          alt="plus icons"
          src={`/images/icons/PlusLinear.svg`}
          width={30}
          height={30}
        />
        <div className="flex flex-col gap-2 items-center justify-center relative">
          <div className="p-4 rounded-xl button-component-color">
            <Image
              src={`/images/assets/token-4.png`}
              width={44}
              height={44}
              alt="Token 1 image"
            />
          </div>
          <h1 className=" whitespace-nowrap font-normal text-sm xl:text-base absolute -bottom-7">
            24.23 TEDY
          </h1>
        </div>
      </div>
      {confirming ? (
        <>
          <p className="text-xss text-gray-200 text-center">
            Adding 32,432 TEDY and 1013 ADA Liquidity. Confirm this transaction
            in your wallet.
          </p>
          <div className="flex flex-col gap-8 items-center justify-between w-full text-center">
            <div className="w-24 relative h-24 bg-transparent border-8 border-r-[#268aff] border-transparent rounded-full animate-spin "></div>
            <h1>Confirming...</h1>
          </div>
        </>
      ) : (
        <>
          <p className="text-xss text-gray-200 text-center">
            Adding 32,432 TEDY and 1013 ADA Liquidity. Confirm this transaction
            in your wallet.
          </p>
          <div className=" text-xss text-gray-200 w-full">
            <ul className="space-y-3 w-full font-normal px-2">
              <li className=" flex justify-between w-full items-center">
                <h5>Share of Pool:</h5>
                <p className=" text-white text-xs">437.85 iUSD</p>
              </li>
              <li className=" flex justify-between w-full items-center">
                <h5>Total Fees:</h5>
                <p className=" text-white text-xs">0.10%</p>
              </li>
              <li className=" flex justify-between w-full items-center">
                <h5>1 ADA = 16.11 TEDY</h5>
                <p className=" text-white text-xs flex items-center gap-1">
                  <Image
                    alt="exchange icons"
                    src={`/images/icons/SwapHoriz.svg`}
                    width={22}
                    height={22}
                  />
                  <span>0.006 ADA</span>
                </p>
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
            className=" primary-button  text-sm xl:text-xl py-3 xl:py-4 rounded-lg border-2"
          >
            {isStake ? "Stake" : "Withdraw"}
          </button>
        </>
      )}
    </div>
  );
};

export default Farm_Confirm;
