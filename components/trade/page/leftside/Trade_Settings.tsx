import Toggler from "@/components/partials/Toggler";
import React from "react";
import { RxCross2 } from "react-icons/rx";

interface Props {
  setShowComponent: (value: string) => void;
}

const Trade_Settings = ({ setShowComponent }: Props) => {
  return (
    <div className="w-full component-color flex flex-col px-4 rounded-2xl pb-8">
      <div className="w-full relative border-b-2 border-b-[#959595] pb-4">
        <p
          className={`w-full text-center text-white text-base xl:text-xl font-medium pt-9`}
        >
          Settings
        </p>

        <button
          className={` text-gray-300 hover:text-gray-100 text-base xl:text-lg absolute right-0 top-0 z-10 pt-4`}
        >
          <RxCross2
            onClick={() => setShowComponent("view-1")}
            className=" w-6 h-6"
          />
        </button>
      </div>
      <p className=" text-xs font-medium xl:text-sm text-[#C6C6C6] pt-4 pb-[13px]">
        Slippage Tolerance
      </p>
      <div className="grid grid-cols-3 gap-4 pb-[9px]">
        <p className="text-[17px] leading-[20px] font-medium p-4 small-component-color rounded-lg text-center">
          0.25%
        </p>
        <p className="text-[17px] leading-[20px] font-medium p-4 small-component-color rounded-lg text-center">
          0.50%
        </p>
        <p className="text-[17px] leading-[20px] font-medium p-4 small-component-color rounded-lg text-center">
          0.67%
        </p>
      </div>
      <div className="small-component-color flex flex-col items-center w-full rounded-[14px]">
        <div className="flex flex-row justify-between items-center w-full px-[18px] pt-[14px]">
          <input
            type="text"
            defaultValue={0.0}
            className=" text-base w-full xl:text-xl bg-transparent text-white outline-none"
          />
          <p className="text-base xl:text-xl text-gray-300">%</p>
        </div>
        <span className="text-[11px] leading-[13.5px] font-medium text-[#C6C6C6] pt-[5px] text-left w-full pl-[18px] pb-3">
          ~ $0
        </span>
      </div>
      {/* <div className="col-span-3 flex justify-between items-center">
        <h2>Predict Swap Price</h2>
        <Toggler />
      </div> */}
    </div>
  );
};

export default Trade_Settings;
