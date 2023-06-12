import Image from "next/image";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdArrowDownward } from "react-icons/md";

const Leftside_LBE = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <h1 className=" text-base 2xl:text-lg font-medium">Supply ADA</h1>
      <div>
        <h5 className=" text-xs font-medium 2xl:text-sm text-gray-300 mb-1">
          Amount
        </h5>
        <div className="small-component-color flex justify-between items-center w-full rounded-lg p-2 pt-3 px-4">
          <div className="font-medium space-y-1">
            <input
              type="text"
              defaultValue={0.0}
              className=" text-base w-52 2xl:text-xl bg-transparent text-white outline-none"
            />
            <p className="text-xs text-gray-300">~ $0</p>
          </div>
          <div className=" justify-center items-center">
            <div className="flex text-gray-300 items-center gap-2 button-component-color p-1.5 px-3 rounded-xl">
              <Image
                src={`/images/assets/token-1.png`}
                alt="icon"
                width={29}
                height={29}
              />
              <p className="text-sm 2xl:text-base">ADA</p>
            </div>
            <p className="mt-1 text-blue-400 text-xs 2xl:text-sm font-medium text-center">
              Max
            </p>
          </div>
        </div>
      </div>
      <div>
        <h5 className=" text-xs font-medium 2xl:text-sm text-gray-300 mb-1">
          Amount
        </h5>
        <div className="small-component-color flex justify-between items-center w-full rounded-lg p-5 px-4">
          <div className="font-medium space-y-1">
            <input
              type="text"
              defaultValue={0.0}
              className=" text-base w-52 2xl:text-xl bg-transparent text-white outline-none"
            />
            <p className="text-xs text-gray-300">~ $0</p>
          </div>
          <div className=" justify-center items-center">
            <div className="flex text-gray-300 items-center gap-2 button-component-color p-1.5 px-3 rounded-xl">
              <Image
                src={`/images/assets/teddy.png`}
                alt="icon"
                width={29}
                height={29}
              />
              <p className="text-sm 2xl:text-base">Teddy ADA</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto flex items-center justify-center">
        <MdArrowDownward className="w-8 h-8 p-1 text-center rounded-full component-color shadow" />
      </div>
      <button className=" primary-button  text-base 2xl:text-xl py-4 rounded-lg border-2">
        Deposit
      </button>
      <div className="font-medium text-xs 2xl:text-sm mt-4">
        <div className="flex items-center gap-2 text-gray-300">
          <h3>Estimated LP Tokens</h3>
          <AiOutlineInfoCircle
            title="Estimated LP Token is the powerful"
            className="w-4 h-4 "
          />
        </div>
        <p className=" text-blue-400   text-sm 2xl:text-xl mt-2">186,327,942</p>
      </div>
      <div className="font-medium text-xs 2xl:text-sm mt-4">
        <div className="flex items-center gap-2 text-gray-300">
          <h3>Estimated Tedy Price</h3>
          <AiOutlineInfoCircle
            title="Estimated LP Token is the powerful"
            className="Sw-4 h-4 "
          />
        </div>
        <p className=" text-blue-400   text-sm 2xl:text-xl mt-2">186,327,942</p>
      </div>
    </div>
  );
};

export default Leftside_LBE;
