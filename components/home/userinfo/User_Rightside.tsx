import React, { useState } from "react";
import TimeGroupButton from "../TimeGroupButton";
import Image from "next/image";
import User_RecentTransactions from "./User_RecentTransactions";
import User_SwapTokens from "./User_SwapTokens";
import { SelectedTokenProps } from "@/components/trade/QuickSwapPopup";
import SelectTokenView from "@/components/trade/quickSwap/SelectTokenView";
import ConfirmSwap from "@/components/trade/quickSwap/market/ConfirmSwap";
import ConfirmOrder from "@/components/trade/quickSwap/limit/ConfirmOrder";
import TransactionStatus from "@/components/trade/quickSwap/market/TransactionStatus";

const User_Rightside = () => {
  const [selectedToken, setSelectedToken] = useState<SelectedTokenProps>();
  const [selectedToken2, setSelectedToken2] = useState<SelectedTokenProps>();
  const [showComponent, setShowComponent] = useState("view-1");

  const movers = [
    {
      img: "/images/assets/teddy.png",
      name: "Tedy",
      subname: "TeddySwap",
      price: "0.012",
      up_price: "0.012 (+12.34%)",
    },
    {
      img: "/images/assets/teddy.png",
      name: "Tedy",
      subname: "TeddySwap",
      price: "0.012",
      up_price: "0.012 (+12.34%)",
    },
    {
      img: "/images/assets/teddy.png",
      name: "Tedy",
      subname: "TeddySwap",
      price: "0.012",
      up_price: "0.012 (+12.34%)",
    },
    {
      img: "/images/assets/teddy.png",
      name: "Tedy",
      subname: "TeddySwap",
      price: "0.012",
      up_price: "0.012 (+12.34%)",
    },
    {
      img: "/images/assets/teddy.png",
      name: "Tedy",
      subname: "TeddySwap",
      price: "0.012",
      up_price: "0.012 (+12.34%)",
    },
    {
      img: "/images/assets/teddy.png",
      name: "Tedy",
      subname: "TeddySwap",
      price: "0.012",
      up_price: "0.012 (+12.34%)",
    },
    {
      img: "/images/assets/teddy.png",
      name: "Tedy",
      subname: "TeddySwap",
      price: "0.012",
      up_price: "0.012 (+54.34%)",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row xl:flex-col xl:items-center gap-8 w-full xl:w-auto mt-6">
      {/* <div className="hidden xl:block">
        <TimeGroupButton />
      </div> */}
      <div className="w-full component-color p-4 rounded-2xl">
        {showComponent == "token-view-1" && (
          <SelectTokenView
            setSelectedToken={setSelectedToken}
            setShowComponent={setShowComponent}
          />
        )}
        {showComponent == "token-view-2" && (
          <SelectTokenView
            setSelectedToken={setSelectedToken2}
            setShowComponent={setShowComponent}
          />
        )}
        {showComponent == "view-1" && (
          <User_SwapTokens
            setShowComponent={setShowComponent}
            selectedToken2={selectedToken2}
            selectedToken={selectedToken}
          />
        )}
        {showComponent == "confirm-swap" && (
          <ConfirmSwap
            isNotPadding={true}
            setShowComponent={setShowComponent}
          />
        )}
        {showComponent == "confirm-order" && (
          <ConfirmOrder setShowComponent={setShowComponent} />
        )}
        {showComponent == "transaction-success" && (
          <TransactionStatus
            isNotPadding={true}
            status={true}
            setShowComponent={setShowComponent}
          />
        )}
        {showComponent == "transaction-failed" && (
          <TransactionStatus
            isNotPadding={true}
            status={false}
            setShowComponent={setShowComponent}
          />
        )}
      </div>
      <div className="w-full flex justify-center items-center flex-col">
        <div className="block xl:hidden">
          <TimeGroupButton />
        </div>
        <div className="list-component-color w-full xl:w-96 rounded-2xl max-xl:mt-8">
          <h2 className="p-6">Your Top Movers</h2>
          <ul className="flex flex-col gap-0.5">
            {movers.map((item, i) => {
              return (
                <li
                  key={item.name + i}
                  className="flex top-mover last:rounded-b-2xl justify-between px-4 py-2 last:mb-0"
                >
                  <div className="flex gap-2 items-center">
                    <Image
                      className=" rounded-full"
                      src={item.img}
                      alt="Movers"
                      width={36}
                      height={36}
                    />
                    <div>
                      <h1 className="text-sm uppercase font-medium">
                        {item.name}
                      </h1>
                      {/* <p className="text-[0.7rem] text-xs">{item.subname}</p> */}
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <p>${item.price}</p>
                    <p className=" text-[#16A34A] text-xs">+${item.up_price}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <User_RecentTransactions /> */}
    </div>
  );
};

export default User_Rightside;
