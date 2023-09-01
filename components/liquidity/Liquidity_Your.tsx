import Image from "next/image";
import React from "react";
import Liquidity_BottomTable from "./Liquidity_BottomTable";
import { PieChartDoughnut } from "../chart/PieChartDoughnut";
import { BsExclamationCircle } from "react-icons/bs";
const liquidityAndFarms = [
  {
    title: "Your Liquidity",
    perc1: 6.52,
    perc1_Subtitle: "APR this week",
    perc2: 8.3,
    perc2_Subtitle: "Impermanent Loss",
    button1: "Add/Remove",
    button2: "View Liquidity",
    tvl: [
      {
        color: "bg-purple-500",
        name: "ADA/TEDY",
        price: "120,030",
      },
      {
        color: "bg-cyan-500",
        name: "cUSD/TEDY",
        price: "124,943",
      },
      {
        color: "bg-blue-500",
        name: "ADA/cBTC",
        price: "532,63",
      },
      {
        color: "bg-blue-500",
        name: "ADA/USD",
        price: "843,030",
      },
      {
        color: "bg-green-500",
        name: "USD/TEDY",
        price: "843,030",
      },
    ],
    earningTokens: [
      "/images/assets/teddy.png",
      "/images/assets/blue_ada.png",
      "/images/assets/token-1.png",
      "/images/assets/wallet-1.png",
    ],
  },
];

interface Props {
  setActiveTab: (value: string) => void;
}
const Liquidity_Your = ({ setActiveTab }: Props) => {
  return (
    <div className="w-full mt-10">
      {liquidityAndFarms.map((item) => {
        return (
          <div
            key={item.title}
            className=" lg:col-span-2 rounded-2xl component-color py-6 px-8"
          >
            <p className="flex items-center gap-1 text-[16px] leading-[19.5px] font-medium">
              {item.title}{" "}
              <button>
                <BsExclamationCircle className="w-[10px] h-[10px]" />
              </button>{" "}
            </p>
            <div className="flex gap-10 xl:gap-4 flex-wrap xl:flex-nowrap justify-center xl:justify-between items-center xl:pr-[245px]">
              <div className=" space-y-[21px]">
                <div className="flex lg:flex-col flex-row gap-6 my-4 w-full lg:translate-x-1/3">
                  <div className="  text-2xl flex flex-col leading-tight text-[#3DFFDC]">
                    <div className="flex flex-row gap-1 justify-start items-center">
                      <h2 className="text-[24px] leading-[30px] font-semibold text-[#3DFFDC]">
                        {item.perc1}%
                      </h2>
                      <button>
                        <BsExclamationCircle className="w-[10px] h-[10px]" />
                      </button>{" "}
                    </div>

                    <p className="text-[8px] leading-[10px] font-normal">
                      {item.perc1_Subtitle}
                    </p>
                  </div>
                  <div className="  text-2xl flex flex-col leading-tight">
                    <div className="flex flex-row gap-1 justify-start items-center">
                      <h2 className="text-[24px] leading-[30px] font-semibold">
                        {item.perc2}%
                      </h2>
                      <button>
                        <BsExclamationCircle className="w-[10px] h-[10px]" />
                      </button>{" "}
                    </div>
                    <p className="text-[8px] leading-[10px] font-normal">
                      {item.perc2_Subtitle}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-40 h-40">
                <PieChartDoughnut />
              </div>
              <div className="flex flex-col gap-[11px]">
                {item.tvl.map((_item, i) => {
                  return (
                    <div
                      className="flex items-center gap-2 justify-start"
                      key={i}
                    >
                      <div className="flex items-center gap-[11px] w-[140px]">
                        <div className={`w-[13px] h-[13px] ${_item.color}`} />
                        <div className="flex items-center gap-1">
                          <Image
                            src={`/images/assets/token-1.png`}
                            alt="icon1"
                            width={16}
                            height={16}
                          />
                          <Image
                            src={`/images/assets/teddy.png`}
                            alt="icon2"
                            width={16}
                            height={16}
                            className="-ml-2"
                          />
                          <p className="text-[14px] leading-[17px] font-semibold">
                            {_item.name}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm whitespace-nowrap text-right ml-4 gap-1">
                        <span className="text-[14px] leading-[17px] font-medium">
                          ₳{_item.price}
                        </span>{" "}
                        <span className="text-[10px] leading-3 font-medium">
                          TVL
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col justify-between space-y-[26px] whitespace-nowrap font-normal">
                <div className="flex gap-[72px]">
                  <div className="">
                    <p className="text-[8px] leading-[10px] font-normal">
                      Earnings this month
                    </p>
                    <p className="text-[16px] font-medium leading-[19.5px] text-white">
                      ₳13,420.90
                    </p>
                    <p className="text-[12px] leading-[14px] text-[#B0B3B8] font-medium">
                      $284.90
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[8px] leading-[10px] font-normal">
                      Earnings All Time
                    </p>
                    <p className="text-[16px] font-medium leading-[19.5px] text-white">
                      ₳28,420.92{" "}
                    </p>
                    <p className="text-[12px] leading-[14px] text-[#B0B3B8] font-medium">
                      $3,630.98{" "}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] leading-[12px] font-normal my-2">
                    Tokens you are earning
                  </p>
                  <div className="flex items-center gap-3">
                    {item.earningTokens.map((token) => {
                      return (
                        <Image
                          key={token}
                          alt={token}
                          src={token}
                          width={29}
                          height={29}
                        />
                      );
                    })}
                    <p className="text-[8px] leading-[10px] font-medium">
                      +3more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Liquidity_BottomTable setActiveTab={setActiveTab} />
    </div>
  );
};

export default Liquidity_Your;
