import Image from "next/image";
import React from "react";
import { BsExclamationCircle } from "react-icons/bs";

const Farm_Dash_Leftside = () => {
  const items = [
    {
      TVL: "₳120,030",
      name: "ADA/TEDY",
      price: "+3%",
    },
    {
      TVL: "₳86,342",
      name: "ADA/cBTC ",
      price: "+2.46%",
    },
    {
      TVL: "₳23,085",
      name: "ADA/USDA",
      price: "-0.68%",
    },
    {
      TVL: "₳16,456",
      name: "USDA/TEDY",
      price: "-8.18%",
    },
    {
      TVL: "₳12,018",
      name: "cUSD/TEDY",
      price: "+7.53%",
    },
  ];

  return (
    <div className="component-color py-[26px] rounded-2xl flex flex-col gap-6">
      <div className="pl-[25px] pr-[22px] w-full flex flex-col gap-6">
        <p className="text-[20px] leading-[24px] font-medium">Liquidity</p>
        <div className=" absolute text-xs font-medium right-0 top-0 py-3 px-[18px] shadow-none flex items-center gap-1 leading-tight component-color-4 rounded-md rounded-br-none rounded-tr-2xl">
          <Image
            src={`/images/icons/WhiteAda.svg`}
            alt="WhiteAda"
            width={26}
            height={26}
          />
          <div>
            <p className="text-[13px] leading-[14px] font-medium">
              ₳342,930.12
            </p>
            <p className="text-[8px] leading-[9px] text-[#FFFFFF99] mt-[2px]">
              Total Farm Position Value
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full space-y-3">
          <div className="bg-[#4B515D] rounded-[13px] px-[18px] py-2 flex justify-between">
            <div className="flex justify-center items-center text-[13px] leading-[21px] font-medium gap-1">
              <p>Total Weighted IL</p>
              <BsExclamationCircle
                title="The total impermanent loss that you have incurred across all of your liquidity positions, weighted by the amount of liquidity that you have provided to each pool."
                className="w-[11px] h-[11px] "
              />
            </div>
            <p className="text-[16px] leading-[20px] font-medium text-[#FF5757]">
              -3.98%{" "}
            </p>
          </div>
          <div className="bg-[#4B515D] rounded-[13px] px-[18px] py-2 flex justify-between">
            <div className="flex justify-center items-center text-[13px] leading-[21px] font-medium gap-1">
              <p>Total LP Fees Income</p>
              <BsExclamationCircle
                title="The total amount of fees that you have earned as a liquidity provider."
                className="w-[11px] h-[11px] "
              />
            </div>
            <p className="text-[16px] leading-[20px] font-medium text-[#57FF86]">
              -3.98%{" "}
            </p>
          </div>
          <div className="bg-[#4B515D] rounded-[13px] px-[18px] py-2 flex justify-between">
            <div className="flex justify-center items-center text-[13px] leading-[21px] font-medium gap-1">
              <p>Net Gain</p>
              <BsExclamationCircle
                title="The total earnings that you have generated from providing liquidity, minus any impermanent loss that you have incurred."
                className="w-[11px] h-[11px] "
              />
            </div>
            <p className="text-[16px] leading-[20px] font-medium text-[#57FF86]">
              -3.98%{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="pt-4 flex flex-col w-full gap-4 pr-4 pl-8">
        <div className=" flex w-full ">
          <span className=" w-[128px] text-start">
            <p className="text-[13px] leading-[14px] font-medium">Pair</p>
          </span>
          <p className="text-[13px] leading-[14px] font-medium flex-1">TVL</p>
          <p className="text-[13px] leading-[14px] font-medium ">Net gain</p>
        </div>
        <div className=" flex flex-col w-full gap-2">
          {items.map((item, index) => (
            <div className="flex flex-col w-full gap-2" key={index}>
              <div className="flex flex-row justify-between items-center w-full">
                <span className="flex w-[128px] text-start">
                  <Image
                    src={`/images/assets/token-1.png`}
                    alt="icon1"
                    width={14}
                    height={14}
                  />
                  <Image
                    src={`/images/assets/teddy.png`}
                    alt="icon2"
                    width={14}
                    height={14}
                    className="-ml-1"
                  />
                  <p className="ml-1 text-[13px] leading-[14px] font-medium">
                    {item.name}
                  </p>
                </span>
                <span className="flex items-center gap-1 flex-1">
                  <p className="text-[13px] leading-[14px] font-medium">
                    {item.TVL}
                  </p>
                  <p className="text-[9px] leading-[11px] font-normal">TVL</p>
                </span>
                <span className=" text-start w-[50px]">
                  <p className="text-[13px] leading-[14px] font-medium">
                    {item.price}
                  </p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Farm_Dash_Leftside;
