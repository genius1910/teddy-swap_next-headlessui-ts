import Image from "next/image";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  setShowComponent: (value: string) => void;
  selectedToken?: {
    name: string;
    percentage: number;
  };
  id: string;
}

const LiquidityAmountAndTokenField = ({
  setShowComponent,
  selectedToken,
  id,
}: Props) => {
  return (
    <div className="small-component-color flex justify-between items-center w-full rounded-lg p-2 pl-4">
      <div className="font-medium space-y-1">
        <input
          type="text"
          defaultValue={0.0}
          className=" text-base w-full 2xl:text-xl bg-transparent text-white outline-none"
        />
        <p className="text-xs text-gray-300">~ $0</p>
      </div>
      <div className="flex flex-col justify-center items-center whitespace-nowrap">
        <div className="flex text-white items-center gap-3 button-component-color py-2 px-4 rounded-lg">
          {selectedToken?.name ? (
            <button
              type="button"
              onClick={() => setShowComponent(id)}
              className=" text-sm 2xl:text-base font-medium flex items-center gap-1 pr-6"
            >
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
              <h4 className="text-base">{selectedToken.name}</h4>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowComponent(id)}
              className=" text-sm 2xl:text-base font-medium flex items-center gap-2"
            >
              <span>select token</span> <BsChevronDown className="w-3 h-3" />
            </button>
          )}
        </div>
        {selectedToken?.name ? (
          <p className=" text-xss text-white mt-1 text-center w-full">
            <span className="text-gray-200 text-center">Balance:</span>
            236.32
          </p>
        ) : (
          <p className=" text-xss select-none pointer-events-none text-transparent mt-1 text-center w-full">
            No Balance
          </p>
        )}
      </div>
    </div>
  );
};

export default LiquidityAmountAndTokenField;
