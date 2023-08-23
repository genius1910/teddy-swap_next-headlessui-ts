import Image from "next/image";
import React from "react";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { RiExchangeLine } from "react-icons/ri";

const Liquidity_BottomStats = () => {
  const keyStats = [
    {
      property: "Daily Volume",
      value: "1,011,825 ₳",
    },
    {
      property: "Pooled ADA",
      value: "5,963,608 ₳",
    },
    {
      property: "Pooled AGIX",
      value: "5,762,468 AGIX",
    },
    {
      property: "AGIX Holders",
      value: "10,410",
    },
    {
      property: "Total Tx",
      value: "55,525",
    },
    {
      property: "Market Cap",
      value: "1,248,221,842 ₳",
    },
    {
      property: "Total Tx",
      value: "55,525",
    },
    {
      property: "Diluted Market Cap",
      value: "2,069,810,500 ₳",
    },
    {
      property: "Circulating Supply",
      value: "1.21B (60.3%)",
    },
    {
      property: "Total Supply",
      value: "1.27B",
    },
    {
      property: "Max Supply",
      value: "2.00B",
    },
    {
      property: "Pool Created",
      value: "04/18/2022 13:00",
    },
    {
      property: "% Pooled AGIX",
      value: "3.72 %",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-8">
      <div className="lg:pr-20">
        <h1 className="heading-xl font-medium border-b border-gray-600 pb-4">
          Key Stats
        </h1>
        <div className=" text-sm xl:text-base text-white w-full">
          <ul className="space-y-3 w-full font-normal mt-4">
            {keyStats.map((item, i) => {
              return (
                <li
                  key={item.value + i}
                  className=" flex justify-between w-full items-center"
                >
                  <h5>{item.property}:</h5>
                  <p className=" ">{item.value}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="mt-8 lg:mt-0">
        <h1 className="heading-xl font-medium border-b border-gray-600 pb-4">
          Price
        </h1>
        <div className="flex justify-between items-center px-12 w-full my-12">
          <div className="flex flex-col gap-2 items-center justify-center relative">
            <div className="p-4 rounded-xl button-component-color">
              <Image
                src={`/images/assets/token-1.png`}
                width={44}
                height={44}
                alt="Token 1 image"
              />
            </div>
            <h1 className=" whitespace-nowrap font-normal text-sm xl:text-base absolute -bottom-7">
              1 ADA
            </h1>
          </div>
          <Image
            src={`/images/assets/exchange.svg`}
            width={36}
            height={36}
            alt="Exchange image"
          />
          <div className="flex flex-col gap-2 items-center justify-center relative">
            <div className="p-4 rounded-xl button-component-color">
              <Image
                src={`/images/assets/token-4.png`}
                width={44}
                height={44}
                alt="Token 1 image"
              />
            </div>
            <h1 className=" whitespace-nowrap font-normal text-sm xl:text-base absolute -bottom-7">
              24.23 TEDY
            </h1>
          </div>
        </div>
        <div className="flex justify-between items-center px-12 w-full my-12">
          <div className="flex flex-col gap-2 items-center justify-center relative">
            <div className="p-4 rounded-xl button-component-color">
              <Image
                src={`/images/assets/token-4.png`}
                width={44}
                height={44}
                alt="Token 1 image"
              />
            </div>
            <h1 className=" whitespace-nowrap font-normal text-sm xl:text-base absolute -bottom-7">
              24.23 TEDY
            </h1>
          </div>
          <Image
            src={`/images/assets/exchange.svg`}
            width={36}
            height={36}
            alt="Exchange image"
          />
          <div className="flex flex-col gap-2 items-center justify-center relative">
            <div className="p-4 rounded-xl button-component-color">
              <Image
                src={`/images/assets/token-1.png`}
                width={44}
                height={44}
                alt="Token 1 image"
              />
            </div>

            <h1 className=" whitespace-nowrap font-normal text-sm xl:text-base absolute -bottom-7">
              0.523 ADA
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liquidity_BottomStats;
