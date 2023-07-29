import Image from "next/image";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

interface Props {
  setShowComponent: (value: string) => void;
  selectedToken?: {
    name: string;
    imgId: number;
    price: number;
  };
  id: string;
  name: string;
}

const AmountAndTokenField_2 = ({
  setShowComponent,
  selectedToken,
  id,
  name,
}: Props) => {
  return (
    <div className="bg-[#1F2635] flex justify-between items-end w-full rounded-2xl p-2 pl-4">
      <div className="font-medium space-y-1">
        <h4 className="text-[#505A63] text-xss">{name}</h4>
        <div className="flex text-white items-center gap-3 py-1 rounded-2xl">
          {selectedToken?.name ? (
            <button
              type="button"
              onClick={() => setShowComponent(id)}
              className=" text-sm 2xl:text-base font-medium flex gap-2 items-center"
            >
              <Image
                src={`/images/assets/token-${selectedToken.imgId}.png`}
                width={25}
                height={25}
                alt="Token image"
              />
              <span>{selectedToken.name}</span>{" "}
              <span className="w-6">
                <FaAngleDown className="w-5 h-5" />
              </span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowComponent(id)}
              className=" text-sm 2xl:text-base font-medium flex items-center gap-2"
            >
              <span>Select Token</span>
              <span className="w-6">
                <FaAngleDown className="w-3 h-3" />{" "}
              </span>
            </button>
          )}
        </div>
      </div>
      <div className="whitespace-nowrap">
        {selectedToken?.name ? (
          <input
            type="text"
            defaultValue={957.3}
            className=" text-base pr-4 pl-2 w-full font-medium text-right 2xl:text-lg bg-transparent text-white outline-none"
          />
        ) : (
          <p className=" text-xss select-none pointer-events-none text-transparent mt-1 text-center w-full">
            No Balance
          </p>
        )}
      </div>
    </div>
  );
};

export default AmountAndTokenField_2;
