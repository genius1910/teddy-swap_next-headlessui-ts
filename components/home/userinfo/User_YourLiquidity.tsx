import { PieChartDoughnut } from "@/components/chart/PieChartDoughnut";
import useAuthenticate from "@/context/mobx/useAuthenticate";
import Image from "next/image";
import React from "react";
import { BsQuestionCircle } from "react-icons/bs";

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
    <div className=" lg:col-span-2 rounded-3xl component-color p-6">
      <h1 className="flex items-center gap-1">
        {`Your Liquidity`}{" "}
        <button className="text-sm">
          <BsQuestionCircle className="w-3 h-3" />
        </button>
      </h1>
      <div className="flex gap-10 xl:gap-4 flex-wrap xl:flex-nowrap justify-center xl:justify-between items-center">
        <div className=" space-y-3">
          <div className="flex gap-10 my-4">
            <div className="  text-base flex flex-col leading-tight">
              <h2 className="font-semibold">
                {isWalletConnected ? "-8.34" : "--"}%{" "}
                <button className="text-sm">
                  <BsQuestionCircle className="w-3 h-3" />
                </button>
              </h2>
              <p className=" text-xss text-gray-400">{`Impermanent Loss `}</p>
            </div>
            <div className="  text-base flex flex-col leading-tight">
              <h2 className="font-semibold">
                {isWalletConnected ? `+2.54` : "--"}%{" "}
                <button title="Profit" className="text-sm">
                  <BsQuestionCircle className="w-3 h-3" />
                </button>
              </h2>
              <p className=" text-xss text-gray-400">{`Net Earnings`}</p>
            </div>
          </div>
          <button className=" primary-button text-sm">{`View Liquidity`}</button>
          <button className=" primary-button text-sm">{`Liquidity Calculator`}</button>
        </div>
        <div className=" w-40 h-40 drop-shadow-xl">
          <PieChartDoughnut />
        </div>
        <div className="flex flex-col gap-2">
          {tvl.map((_item, i) => {
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
              <p className="text-xss text-gray-400 -mb-1">
                Earnings This Month
              </p>
              <h4 className="text-base leading-2 text-white font-medium">
                ₳{isWalletConnected ? "13,420.90" : "--"}
              </h4>
              <p className="text-xs">${isWalletConnected ? "284.90" : "0.0"}</p>
            </div>
            <div className=" text-gray-400">
              <p className="text-xss text-gray-400 -mb-1">Earnings All Time</p>
              <h4 className="text-base leading-2 text-white font-medium">
                ₳{isWalletConnected ? "13,420.90" : "--"}
              </h4>
              <p className="text-xs">
                ${isWalletConnected ? "1,420.92" : "0.0"}
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-xs text-gray-400 my-2">
              Tokens you are earning
            </h4>
            <div className="flex items-center gap-2">
              {earningTokens.map((token) => {
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
};

export default User_YourLiquidity;
