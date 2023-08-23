/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";
import { GoCheck as GoCheckCircle } from "react-icons/go";

interface Props {
  setShowComponent: (value: string) => void;
  status: boolean;
  isLiquidity?: boolean;
  isNotPadding?: boolean;
}

const TransactionStatus = ({
  setShowComponent,
  status,
  isLiquidity,
  isNotPadding,
}: Props) => {
  return (
    <div
      className={`relative font-medium flex flex-col gap-6 items-center ${
        isNotPadding ? "" : "p-6"
      }`}
    >
      <div className="text-white flex items-center justify-between w-full">
        <h1 className=" xl:text-xl text-base">
          {status ? "Transaction Successful" : "Transaction Failed"}
        </h1>
        <button
          className={` text-gray-100 hover:text-white text-base xl:text-lg`}
        >
          <RxCross2
            onClick={() => (status ? false : setShowComponent("confirm-swap"))}
            className=" w-8 h-8 "
          />
        </button>
      </div>
      {status ? (
        <img
          src="/images/assets/tick.svg"
          className="xl:w-28 xl:h-28 w-20 h-20"
        />
      ) : (
        <img
          src="/images/assets/cross.svg"
          className="xl:w-28 xl:h-28 w-20 h-20"
        />
      )}
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
        {isLiquidity ? (
          <Image
            alt="plus icons"
            src={`/images/icons/PlusLinear.svg`}
            width={30}
            height={30}
          />
        ) : (
          <BsArrowRight className="w-8 h-8 text-[#268aff]" />
        )}

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
      <button
        onClick={() => {
          setShowComponent("view-1");
        }}
        type="button"
        className=" primary-button  text-sm xl:text-lg py-2 xl:py-3 rounded-lg border-2"
      >
        {status ? "Done" : "Close"}
      </button>
    </div>
  );
};

export default TransactionStatus;
