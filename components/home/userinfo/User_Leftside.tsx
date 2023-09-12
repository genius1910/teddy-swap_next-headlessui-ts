import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { createChart, ColorType } from "lightweight-charts";
import CustomChart from "../../chart/CustomChart";
import { TradingLine } from "../pairs/TradingLine";
import { PieChartDoughnut } from "@/components/chart/PieChartDoughnut";
import useAuthenticate from "@/context/mobx/useAuthenticate";
import { BsQuestionCircle } from "react-icons/bs";
import User_YourLiquidity from "./User_YourLiquidity";
import User_YourFarms from "./User_YourFarms";

const liquidityAndFarms = [
  {
    title: "Your Liquidity",
    perc1: 6.52,
    perc1_Subtitle: "APR this week",
    perc2: 8.3,
    perc2_Subtitle: "Pool Diversion This Week",
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
  {
    title: "Your Farms",
    perc1: 86.52,
    perc1_Subtitle: "APR this week",
    perc2: "21,134.92",
    perc2_Subtitle: "Pending harvest |+5 more|",
    button1: "Harvest All",
    button2: "View Farms",
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

const data = [
  { name: "09/20", price: 700 },
  { name: "09/21", price: 800 },
  { name: "09/22", price: 900 },
  { name: "09/23", price: 1200 },
  { name: "09/24", price: 900 },
  { name: "09/25", price: 1500 },
  { name: "09/26", price: 900 },
  { name: "09/27", price: 800 },
  { name: "09/28", price: 900 },
  { name: "09/29", price: 500 },
  { name: "09/30", price: 1000 },
  { name: "10/01", price: 900 },
  { name: "10/02", price: 1500 },
  { name: "10/03", price: 1900 },
  { name: "10/04", price: 2000 },
  { name: "10/05", price: 2200 },
];

const User_Leftside = () => {
  const isWalletConnected = useAuthenticate.isWalletConnected();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8 xl:pr-8 mt-6">
      {/* 1st grid  */}
      <div className=" font-medium overflow-hidden rounded-3xl chart-component-color h-72 grid relative">
        <div className="px-6 pt-6 absolute z-10 w-full">
          <div className="flex items-center gap-1">
            <h1 className="text-base">Wallet Assets</h1>
            <button className="text-sm">
              <BsQuestionCircle className="w-3 h-3" />
            </button>{" "}
          </div>
          <h2 className="text-base mt-1 mb-0.5">
            ₳{isWalletConnected ? "4,435.46" : "--"}
          </h2>
          <p className=" text-[0.7rem] text-[#0FC43B]">
            +₳{isWalletConnected ? "544.03" : "--"} (
            {isWalletConnected ? "+2.03%" : "--"}) this week
          </p>
        </div>
        <CustomChart data={data} unit="₳" />
      </div>
      {/* 2nd grid  */}
      <div className=" font-medium rounded-3xl overflow-hidden chart-component-color h-72 grid relative">
        <div className="px-6 pt-6 absolute z-10 w-full">
          <div className="flex items-center gap-1">
            <h1 className="text-base">Wallet Assets + Liquidity Positions</h1>
            <button className="text-sm">
              <BsQuestionCircle className="w-3 h-3" />
            </button>
          </div>{" "}
          <h2 className="text-base mt-1 mb-0.5">
            ₳{isWalletConnected ? "4,435.46" : "--"}
          </h2>
          <p className=" text-[0.7rem] text-[#0FC43B]">
            +₳{isWalletConnected ? "544.03" : "--"} (
            {isWalletConnected ? "+2.03%" : "--"}) this weeks
          </p>
        </div>
        <CustomChart data={data} unit="₳" />
      </div>
      {/* 3rd and 4th grid  */}
      {/* {liquidityAndFarms.map((item) => {
        return (
          <div
            key={item.title}
            className=" lg:col-span-2 rounded-3xl component-color p-6"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-10 xl:gap-4 flex-wrap xl:flex-nowrap justify-center xl:justify-between items-center">
              <div className=" space-y-3">
                <div className="flex gap-10 my-4">
                  <div className="  text-base flex flex-col leading-tight text-[#3DFFDC]">
                    <h2 className="font-semibold">
                      {isWalletConnected ? item.perc1 : "--"}%
                    </h2>
                    <p className=" text-xss text-gray-400">
                      {item.perc1_Subtitle}
                    </p>
                  </div>
                  {item.title == "Your Liquidity" ? (
                    <div className="  text-base flex flex-col leading-tight">
                      <h2 className="font-semibold">
                        {isWalletConnected ? item.perc2 : "--"}%
                      </h2>
                      <p className=" text-xss text-gray-400">
                        {item.perc2_Subtitle}
                      </p>
                    </div>
                  ) : (
                    <div className="  text-base flex flex-col leading-tight">
                      <div className="flex gap-1 items-end">
                        <h2 className="font-semibold">
                          {isWalletConnected ? item.perc2 : "--"}
                        </h2>
                        <span className="text-xss text-white">TEDY</span>
                      </div>
                      <p className=" text-xss text-gray-400">
                        {item.perc2_Subtitle}{" "}
                      </p>
                    </div>
                  )}
                </div>
                <button className=" primary-button text-sm">
                  {item.button1}
                </button>
                <button className=" secondary-button text-sm">
                  {item.button2}
                </button>
              </div>
              <div className=" w-40 h-40">
                <PieChartDoughnut />
              </div>
              <div className="flex flex-col gap-2">
                {item.tvl.map((_item, i) => {
                  return (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-3.5 h-3.5 ${_item.color}`} />
                      <div className="flex items-center gap-1">
                        <Image
                          src={`/images/assets/token-1.png`}
                          alt="icon1"
                          width={20}
                          height={20}
                        />
                        <Image
                          src={`/images/assets/teddy.png`}
                          alt="icon2"
                          width={20}
                          height={20}
                          className="-ml-2"
                        />
                        <h4 className="text-sm">{_item.name}</h4>
                      </div>
                      <p className="text-sm whitespace-nowrap text-right font-normal ml-4">
                        <span>₳{isWalletConnected ? _item.price : "--"}</span>{" "}
                        <span className=" text-xss">TVL</span>
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col justify-between space-y-6 whitespace-nowrap font-normal">
                <div className="flex gap-5">
                  <div className=" text-gray-400">
                    <p className="text-xss">Earnings this month</p>
                    <h4 className="text-base leading-2 text-white">
                      ₳{isWalletConnected ? "13,420.90" : "--"}
                    </h4>
                    <p className="text-xs">
                      ${isWalletConnected ? "284.90" : "--"}
                    </p>
                  </div>
                  <div className=" text-gray-400">
                    <p className="text-xss">Earnings this month</p>
                    <h4 className="text-base leading-2 text-white">
                      ₳{isWalletConnected ? "13,420.90" : "--"}
                    </h4>
                    <p className="text-xs">
                      ${isWalletConnected ? "284.90" : "--"}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs text-gray-400 my-2">
                    Tokens you are earning
                  </h4>
                  <div className="flex items-center gap-2">
                    {item.earningTokens.map((token) => {
                      return (
                        <Image
                          key={token}
                          alt={token}
                          src={token}
                          width={26}
                          height={26}
                        />
                      );
                    })}
                    <p className="text-xss text-gray-400">+3more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })} */}
      <User_YourLiquidity />
      <User_YourFarms />
    </div>
  );
};

export default User_Leftside;
