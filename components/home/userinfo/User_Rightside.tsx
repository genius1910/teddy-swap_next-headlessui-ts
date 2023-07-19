import React, { useState } from "react";
import TimeGroupButton from "../TimeGroupButton";
import Image from "next/image";
import User_RecentTransactions from "./User_RecentTransactions";
import User_SwapTokens from "./User_SwapTokens";
import { SelectedTokenProps } from "@/components/trade/QuickSwapPopup";
import SelectTokenView from "@/components/trade/quickSwap/SelectTokenView";

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
    <div className="flex flex-col md:flex-row 2xl:flex-col 2xl:items-center gap-6 w-full 2xl:w-auto mt-10 2xl:mt-4">
      <div className="hidden 2xl:block">
        <TimeGroupButton />
      </div>
      <div className="w-full">
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
        {showComponent == "view-1" ? (
          <User_SwapTokens
            setShowComponent={setShowComponent}
            selectedToken2={selectedToken2}
            selectedToken={selectedToken}
          />
        ) : (
          "Something wrong, please refresh the page"
        )}
      </div>
      <div className="w-full flex justify-center items-center flex-col">
        <div className="block 2xl:hidden">
          <TimeGroupButton />
        </div>
        <div className="list-component-color w-full 2xl:w-96 rounded-2xl max-2xl:mt-6">
          <h2 className="p-6">Your Top Movers</h2>
          <ul className="flex flex-col gap-0.5">
            {movers.map((item, i) => {
              return (
                <li
                  key={item.name + i}
                  className="flex top-movers last:rounded-b-2xl justify-between px-4 py-2 last:mb-0"
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
                      <p className="text-[0.7rem] text-xs">{item.subname}</p>
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
