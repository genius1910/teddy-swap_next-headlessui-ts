import Image from "next/image";
import React from "react";
import { BsExclamationCircle, BsPatchCheckFill } from "react-icons/bs";

const Farm_SelectedTokenBottomside = () => {
  return (
    <div className="component-color rounded-[14px] pt-[27px] px-[29px] pb-8">
      <div className="flex justify-between text-xl">
        <span className="flex items-center gap-[6px]">
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
          <p className="text-[18px] leading-[15px] font-semibold">
            ADA/USDA - Farm
          </p>
          <BsPatchCheckFill className="w-[10px] h-[10px]" />
        </span>

        <button className="primary-button py-2 px-6 rounded-[10px] text-[14px] leading-[17px] font-semibold w-auto">
          View Liquidity
        </button>
      </div>
      <div className="grid grid-cols-3 mt-[46px] px-4">
        <div>
          <p className="flex items-center gap-1 text-lg xl:text-[20px] xl:leading-[24px] mb-4 font-semibold">
            Total Liquidity
            <button>
              <BsExclamationCircle
                title="The total value of liquidity in the Teddy/ADA pool."
                className="w-[10px] h-[10px]"
              />
            </button>
          </p>
          <ul className="space-y-1">
            <p className="text-sm xl:text-[16px] xl:leading-[24px] font-medium">
              3.23m USDA
            </p>
            <p className="text-sm xl:text-[16px] xl:leading-[24px] font-medium">
              6.12m ADA
            </p>
            <p className="text-sm xl:text-[16px] xl:leading-[24px] font-medium">
              70,944,334,894 LP Tokens
            </p>
            <p className="text-sm xl:text-[16px] xl:leading-[24px] font-medium">
              TeddySwap TVL share: 5.68%
            </p>
          </ul>
        </div>
        <div>
          <p className="flex items-center gap-1 text-lg xl:text-[20px] xl:leading-[24px] mb-4 font-semibold">
            Your Liquidity
            <button>
              <BsExclamationCircle
                title="The amount of liquidity that you have provided to the Teddy/ADA pool."
                className="w-[10px] h-[10px]"
              />
            </button>
          </p>
          <ul className="space-y-1">
            <p className="text-sm xl:text-[16px] xl:leading-[24px] font-medium">
              1,345 USDA
            </p>
            <p className="text-sm xl:text-[16px] xl:leading-[24px] font-medium">
              2,130 ADA
            </p>
            <p className="text-sm xl:text-[16px] xl:leading-[24px] font-medium">
              773,970 LP Tokens
            </p>
            <p className="text-sm xl:text-[16px] xl:leading-[24px] font-medium">
              Pool share: 0.87%
            </p>
          </ul>
        </div>
        <div>
          <p className="flex items-center gap-1 text-lg xl:text-[20px] xl:leading-[24px] mb-4 font-semibold">
            Your Farm
            <button>
              <BsExclamationCircle
                title="The farms that you are currently participating in."
                className="w-[10px] h-[10px]"
              />
            </button>
          </p>
          <ul className="space-y-1">
            <p className="text-sm xl:text-[16px] xl:leading-[24px] font-medium">
              600,970 LP Tokens
            </p>
            <p className="text-sm xl:text-[16px] xl:leading-[24px] font-medium">
              85.34% of LP position
            </p>
            <p className="text-sm xl:text-[16px] xl:leading-[24px] font-medium">
              APR <span className="text-[#268AFF]">34.56%</span>
            </p>
            <p className="text-sm xl:text-[16px] xl:leading-[24px] font-medium">
              Farm share: 1.67%
            </p>
          </ul>
        </div>
      </div>
      {/* <Liquidity_BottomStats /> */}
    </div>
  );
};

export default Farm_SelectedTokenBottomside;
