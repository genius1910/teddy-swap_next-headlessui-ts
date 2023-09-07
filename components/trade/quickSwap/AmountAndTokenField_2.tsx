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
    <div className="bg-[#1F2635] flex justify-between items-end w-full rounded-[11px] px-5 py-2">
      <div className="font-medium space-y-1">
        <p
          className={
            selectedToken?.name
              ? "text-[#505A63] text-[13.02px] leading-[18.8px] font-medium"
              : "text-[#505A63] text-xss leading-4 font-medium"
          }
        >
          {name}
        </p>
        {selectedToken?.name ? (
          <div className="flex text-white items-center gap-[9.7px] py-1 rounded-2xl">
            <button
              type="button"
              onClick={() => setShowComponent(id)}
              className=" text-sm 2xl:text-[18px] 2xl:leading-[25px] font-medium flex gap-3 items-center"
            >
              <Image
                src={`/images/assets/token-${selectedToken.imgId}.png`}
                width={30}
                height={30}
                alt="Token image"
              />
              <div className="flex flex-row justify-center items-center">
                <span className="text-[16px] leading-[24px] font-medium">
                  {selectedToken.name}
                </span>{" "}
                <span className="w-6 ml-2">
                  <FaAngleDown className="w-[18px] h-[18px]" />
                </span>
              </div>
            </button>
          </div>
        ) : (
          <div className="flex text-white items-center gap-[7.8px] py-1 rounded-2xl">
            <button
              type="button"
              onClick={() => setShowComponent(id)}
              className=" text-sm 2xl:text-base font-medium flex items-center gap-2"
            >
              <span className="text-[16px] leading-[24px] font-medium">
                Select Token
              </span>
              <span className="w-6">
                <FaAngleDown className="w-[18px] h-[18px]" />{" "}
              </span>
            </button>
          </div>
        )}
      </div>
      <div className="whitespace-nowrap">
        {selectedToken?.name ? (
          <input
            type="text"
            defaultValue={selectedToken.price}
            className=" pr-4 pl-2 pb-1 w-full text-right text-[16px] leading-[24px] font-medium bg-transparent text-white outline-none"
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
