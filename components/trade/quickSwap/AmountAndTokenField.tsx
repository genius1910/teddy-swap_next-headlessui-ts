import Image from "next/image";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  setShowComponent: (value: string) => void;
  selectedToken?: {
    name: string;
    imgId: number;
    price: number;
  };
  id: string;
}

const AmountAndTokenField = ({
  setShowComponent,
  selectedToken,
  id,
}: Props) => {
  return (
    <div className="small-component-color flex justify-between items-center w-full rounded-lg p-5 px-4">
      <div className="font-medium space-y-1">
        <input
          type="text"
          defaultValue={0.0}
          className=" text-base w-full 2xl:text-xl bg-transparent text-white outline-none"
        />
        <p className="text-xs text-gray-300">~ $0</p>
      </div>
      <div className="justify-center items-center whitespace-nowrap">
        <div className="flex text-white items-center gap-3 button-component-color py-2 px-4 rounded-lg">
          {selectedToken?.name ? (
            <button
              type="button"
              onClick={() => setShowComponent("view2")}
              className=" text-sm 2xl:text-base font-medium flex gap-2 items-center"
            >
              <Image
                src={`/images/assets/token-${selectedToken.imgId}.png`}
                width={25}
                height={25}
                alt="Token image"
              />
              <span>{selectedToken.name}</span>{" "}
              <BsChevronDown className="w-5 h-5" />
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
      </div>
    </div>
  );
};

export default AmountAndTokenField;
