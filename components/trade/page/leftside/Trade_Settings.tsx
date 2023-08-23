import Toggler from "@/components/partials/Toggler";
import React from "react";
import { RxCross2 } from "react-icons/rx";

interface Props {
  setShowComponent: (value: string) => void;
}

const Trade_Settings = ({ setShowComponent }: Props) => {
  return (
    <div className="font-normal  w-full component-color flex flex-col gap-6 p-6 rounded-2xl">
      <div className="w-full relative border-b-2 border-b-gray-600 pb-4">
        <h1
          className={`w-full text-center text-white text-base xl:text-xl font-medium`}
        >
          Settings
        </h1>

        <button
          className={` text-gray-300 hover:text-gray-100 text-base xl:text-lg absolute right-0 top-0 z-10 `}
        >
          <RxCross2
            onClick={() => setShowComponent("view-1")}
            className=" w-6 h-6 xl:w-8 xl:h-8 "
          />
        </button>
      </div>
      <h5 className=" text-xs font-medium xl:text-sm text-gray-300 mb-1">
        Slippage Tolerance
      </h5>
      <div className="grid grid-cols-3 gap-3">
        <p className=" p-4 small-component-color rounded-lg">0.25%</p>
        <p className=" p-4 small-component-color rounded-lg">0.50%</p>
        <p className=" p-4 small-component-color rounded-lg">0.67%</p>
        <h5 className=" col-span-3 text-xs font-medium xl:text-sm text-gray-300 mb-1">
          Limit Price
        </h5>
        <div className="col-span-3 p-4 small-component-color flex justify-between items-center w-full rounded-lg py-2 px-4">
          <div className="font-medium space-y-1">
            <input
              type="text"
              defaultValue={0.0}
              className=" text-base w-full xl:text-xl bg-transparent text-white outline-none"
            />
            <p className="text-xs text-gray-300">~ $0</p>
          </div>
          <span className=" text-base font-medium xl:text-xl">%</span>
        </div>
      </div>
      <div className="col-span-3 flex justify-between items-center">
        <h2>Predict Swap Price</h2>
        <Toggler />
      </div>
    </div>
  );
};

export default Trade_Settings;
