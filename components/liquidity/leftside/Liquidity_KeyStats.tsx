import Image from "next/image";
import React from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { RiExchangeLine } from "react-icons/ri";

const Liquidity_KeyStats = () => {
  const keyStats = [
    {
      property: "Daily Volume",
      value: "1,011,825 ₳",
      about: "This is daily volume",
    },
    {
      property: "Pooled ADA",
      value: "5,963,608 ₳",
    },
    {
      property: "Pooled TEDY",
      value: "5,762,468 AGIX",
    },
    {
      property: "TEDY Holders",
      value: "10,410",
      about: "Who keep tedy",
    },
    {
      property: "Total Tx",
      value: "55,525",
      about: "This is total tax",
    },
    {
      property: "Market Cap",
      value: "95,525",
      about: "Total tax charge",
    },
    {
      property: "FD Market Cap",
      value: "13,456",
      about: "Fd Market cap",
    },
    {
      property: "Circulating Supply",
      value: "1.21B (60.3%)",
      about: "This is circulating supply",
    },
    {
      property: "Total Supply",
      value: "1.29B",
      about: "This is total supply",
    },
    {
      property: "Max Supply",
      value: "2.00B",
      about: "Total tax charge",
    },
    {
      property: "Pool Created",
      value: "04/18/2022 13:00",
      about: "Pool created",
    },
    {
      property: "% of TeddySwap TVL",
      value: "3.72%",
      about: "This is percentage",
    },
  ];
  return (
    <div className="component-color rounded-2xl p-8">
      <p className="text-[20px] leading-[24px] font-semibold border-b-2 border-[#3D505A8C] pb-4 pl-4">
        Key Stats
      </p>
      <div className=" text-sm xl:text-[16px] xl:leading-[19.5px] font-medium text-white w-full">
        <ul className="space-y-3 w-full font-normal mt-3 pl-[18px] pr-[10px]">
          {keyStats.map((item, i) => {
            return (
              <li
                key={item.value + i}
                className=" flex justify-between w-full items-center"
              >
                <h5 className="flex items-center gap-[2px] font-medium">
                  <span>{item.property}</span>{" "}
                  {item?.about && (
                    <button title={item.about}>
                      <BsExclamationCircle className="w-[10px] h-[10px]" />
                    </button>
                  )}
                </h5>
                <p className=" ">{item.value}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid grid-cols-3 justify-items-center items-center px-6 py-4 w-full mt-8 border-2 border-[#268AFF] rounded-2xl">
        <h1 className=" justify-self-start font-medium whitespace-nowrap text-base xl:text-[20px] leading-[24px]">
          1 ADA
        </h1>
        <Image
          src={`/images/assets/exchange-blue.svg`}
          width={32}
          height={32}
          alt="Exchange image"
          className="mr-4"
        />
        <h1 className="font-medium justify-self-end whitespace-nowrap text-base xl:text-[20px] leading-[24px]">
          24.23 TEDY
        </h1>
      </div>
    </div>
  );
};

export default Liquidity_KeyStats;
