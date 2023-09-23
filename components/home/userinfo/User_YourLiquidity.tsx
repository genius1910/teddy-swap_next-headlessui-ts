import useAuthenticate from "@/context/mobx/useAuthenticate";
import Image from "next/image";
import React from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { PieChartDoughnut } from "@/components/chart/PieChartDoughnut";

const User_YourLiquidity = () => {
  const earningTokens = [
    "/images/assets/teddy.png",
    "/images/assets/blue_ada.png",
    "/images/assets/token-1.png",
    "/images/assets/wallet-1.png",
  ];
  const tvl = [
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
  ];
  const isWalletConnected = useAuthenticate.isWalletConnected();

  return (
    <div className=" lg:col-span-2 rounded-[18px] component-color pt-6 px-8 pb-8">
      <p className="flex items-center gap-1 text-4 leading-[19.5px]">
        {`Your Liquidity`}{" "}
        <button className={isWalletConnected ? "text-sm" : "hidden"}>
          <BsQuestionCircle
            title="The total value of your liquidity positions in all the pools on the Cardano DEX."
            className="w-3 h-3"
          />
        </button>
      </p>
      <div className="flex gap-10 xl:gap-4 flex-wrap xl:flex-nowrap justify-center xl:justify-between items-center">
        <div className=" space-y-3">
          <div className="flex gap-10 my-4">
            <div className="  text-base flex flex-col leading-tight">
              <p className="flex items-center gap-1 text-4 leading-[19.5px]">
                {isWalletConnected ? "-8.34" : "--"}%{" "}
                <button className={isWalletConnected ? "text-sm" : "hidden"}>
                  <BsQuestionCircle
                    title="The potential loss that you can incur due to price fluctuations when providing liquidity to a pool."
                    className="w-3 h-3"
                  />
                </button>
              </p>
              <p className="text-[9px] leading-[10px] font-normal">{`Impermanent Loss `}</p>
            </div>
            <div className="  text-base flex flex-col leading-tight">
              <p className="flex items-center gap-1 text-4 leading-[19.5px]">
                {isWalletConnected ? `+2.54` : "--"}%{" "}
                <button
                  title="Profit"
                  className={isWalletConnected ? "text-sm" : "hidden"}
                >
                  <BsQuestionCircle
                    title="The total earnings that you have generated from providing liquidity to pools, minus any fees that you have incurred."
                    className="w-3 h-3"
                  />
                </button>
              </p>
              <p className="text-[9px] leading-[10px] font-normal">{`Net Earnings`}</p>
            </div>
          </div>
          <button
            onClick={() => {
              document.getElementById("connect-wallet")?.click();
            }}
            className={
              " secondary-button text-[12px] leading-[15px] font-semibold max-w-[216px] max-lg:flex max-lg:justify-center"
            }
          >{`Connect Wallet`}</button>
          <button
            className={
              isWalletConnected
                ? " primary-button text-[12px] leading-[15px] font-semibold max-w-[216px] max-lg:flex max-lg:justify-center"
                : " base-button text-[12px] leading-[15px] font-semibold max-w-[216px] max-lg:flex max-lg:justify-center"
            }
          >{`Liquidity Calculator`}</button>
        </div>
        <div className=" w-40 h-40 drop-shadow-xl">
          <PieChartDoughnut isWalletConnected={isWalletConnected} />
        </div>
        <div className="flex flex-col gap-[10px] mr-10 max-lg:mr-0">
          {tvl.map((_item, i) => {
            return (
              <div key={i} className="flex items-center gap-6 justify-between">
                <div className="flex items-center gap-2">
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
                    <p className="text-[14px] leading-[17px] font-semibold">
                      {_item.name}
                    </p>
                  </div>
                </div>

                <p className="text-sm whitespace-nowrap text-right font-normal ml-4 flex flex-row justify-center items-center max-lg:justify-end">
                  <span className="text-[12px] leading-[17px] font-medium">
                    ₳{isWalletConnected ? _item.price : "--"}
                  </span>{" "}
                  <span className="text-[10px] leading-[12px] font-medinum">
                    TVL
                  </span>
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-between space-y-6 whitespace-nowrap font-normal">
          <div className="flex gap-5">
            <div className=" text-gray-400">
              <p className="text-[9px] leading-[10px] font-normal text-gray-400 -mb-1">
                Earnings This Month
              </p>
              <h4 className="text-base leading-2 text-white font-medium mt-1">
                ₳{isWalletConnected ? "13,420.90" : "--"}
              </h4>
              <p className="text-xs">${isWalletConnected ? "284.90" : "0.0"}</p>
            </div>
            <div className=" text-gray-400">
              <p className="text-[9px] leading-[10px] font-normal text-gray-400 -mb-1 ">
                Earnings All Time
              </p>
              <p className="text-base leading-2 text-white font-medium mt-1">
                ₳{isWalletConnected ? "13,420.90" : "--"}
              </p>
              <p className="text-xs">
                ${isWalletConnected ? "1,420.92" : "0.0"}
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] leading-3 font-normal text-gray-400 my-2">
              Tokens you are earning
            </h4>
            <div className="flex items-center gap-3">
              {earningTokens.map((token) => {
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
              <p className="text-xss text-gray-400">+3more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_YourLiquidity;
