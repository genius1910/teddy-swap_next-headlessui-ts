import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

interface Props {
  setShowComponent: (value: string) => void;
}

const ConfirmOrder = ({ setShowComponent }: Props) => {
  const [confirming, setConfirming] = useState(false);
  return (
    <div className="relative font-medium flex flex-col gap-6 items-center p-6">
      <div className="text-white flex items-center justify-between w-full">
        <h1 className=" 2xl:text-xl text-base">{"Confirm Order"}</h1>
        <button
          className={` text-gray-100 hover:text-white text-base 2xl:text-lg`}
        >
          <AiOutlineClose
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
          <h1 className=" whitespace-nowrap font-normal text-sm 2xl:text-base absolute -bottom-7">
            1 ADA
          </h1>
        </div>
        <BsArrowRight className="w-8 h-8 text-[#00DFFF]" />
        <div className="flex flex-col gap-2 items-center justify-center relative">
          <div className="p-4 rounded-xl button-component-color">
            <Image
              src={`/images/assets/token-4.png`}
              width={44}
              height={44}
              alt="Token 1 image"
            />
          </div>
          <h1 className=" whitespace-nowrap font-normal text-sm 2xl:text-base absolute -bottom-7">
            24.23 TEDY
          </h1>
        </div>
      </div>
      {confirming ? (
        <>
          <p className="text-xss text-gray-200 text-center">
            Output is estimated. You will recieve at least 224.22 cNETA or the
            transaction will revert.
          </p>
          <div className="flex flex-col gap-8 items-center justify-between w-full text-center">
            <div className="w-24 relative h-24 bg-transparent border-8 border-r-cyan-400 border-transparent rounded-full animate-spin "></div>
            <h1>Confirming...</h1>
          </div>
        </>
      ) : (
        <>
          <p className="text-xss text-gray-200 text-center">
            Output is estimated. You will recieve at least 224.22 cNETA or the
            transaction will revert.
          </p>
          <div className=" text-xss text-gray-200 w-full">
            <ul className="space-y-3 w-full font-normal px-2">
              <li className=" flex justify-between w-full items-center">
                <h5>Minimum Price Received:</h5>
                <p className=" text-white text-xs">437.85 iUSD</p>
              </li>
              <li className=" flex justify-between w-full items-center">
                <h5>Price Impact:</h5>
                <p className=" text-white text-xs">0.10%</p>
              </li>
              <li className=" flex justify-between w-full items-center">
                <h5>Liquidity Provider</h5>
                <p className=" text-white text-xs">0.006 ADA</p>
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
                <p className=" text-white text-xs">ADA {" > "} cNETA</p>
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
            className=" primary-button  text-sm 2xl:text-xl py-3 2xl:py-4 rounded-lg border-2"
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
};

export default ConfirmOrder;
