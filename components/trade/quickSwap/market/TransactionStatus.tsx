/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { GoCheck as GoCheckCircle } from "react-icons/go";

interface Props {
  setShowComponent: (value: string) => void;
  status: boolean;
}

const TransactionStatus = ({ setShowComponent, status }: Props) => {
  return (
    <div className="relative font-medium flex flex-col gap-6 items-center p-6">
      <div className="text-white flex items-center justify-between w-full">
        <h1 className=" 2xl:text-xl text-base">
          {status ? "Transaction Successful" : "Transaction Failed"}
        </h1>
        <button
          className={` text-gray-100 hover:text-white text-base 2xl:text-lg`}
        >
          <AiOutlineClose
            onClick={() => (status ? false : setShowComponent("confirm-swap"))}
            className=" w-8 h-8 "
          />
        </button>
      </div>
      {status ? (
        <img
          src="/images/assets/tick.png"
          className="2xl:w-28 2xl:h-28 w-20 h-20"
        />
      ) : (
        <img
          src="/images/assets/cross.png"
          className="2xl:w-28 2xl:h-28 w-20 h-20"
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
      <button
        onClick={() => {
          setShowComponent("view1");
        }}
        type="button"
        className=" primary-button  text-sm 2xl:text-xl py-3 2xl:py-4 rounded-lg border-2"
      >
        {status ? "Done" : "Close"}
      </button>
    </div>
  );
};

export default TransactionStatus;
