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
import useAuthenticate from "@/context/mobx/useAuthenticate";

const User_Rightside = () => {
  const [selectedToken, setSelectedToken] = useState<SelectedTokenProps>();
  const [selectedToken2, setSelectedToken2] = useState<SelectedTokenProps>();
  const [showComponent, setShowComponent] = useState("view-1");
  const isWalletConnected = useAuthenticate.isWalletConnected();

  const movers = [
    {
      imgId: 6,
      name: "Teddy",
      subname: "TeddySwap",
      price: 0.012,
      up_price: "0.012 (+12.34%)",
    },
    {
      imgId: 2,
      name: "WMT",
      subname: "TeddySwap",
      price: 0.012,
      up_price: "0.012 (+12.34%)",
    },
    {
      imgId: 3,
      name: "cNETAt",
      subname: "TeddySwap",
      price: 0.012,
      up_price: "0.012 (+12.34%)",
    },
    {
      imgId: 4,
      name: "HOSkyt",
      subname: "TeddySwap",
      price: 0.012,
      up_price: "0.012 (+12.34%)",
    },
    {
      imgId: 5,
      name: "GENSt",
      subname: "TeddySwap",
      price: 0.012,
      up_price: "0.012 (+12.34%)",
    },
    {
      imgId: 6,
      name: "Teddy",
      subname: "TeddySwap",
      price: 0.012,
      up_price: "0.012 (+12.34%)",
    },
    {
      imgId: 1,
      name: "WMTt",
      subname: "TeddySwap",
      price: 0.012,
      up_price: "0.012 (+54.34%)",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row xl:flex-col xl:items-center gap-8 w-full xl:w-auto mt-6">
      {/* <div className="hidden xl:block">
        <TimeGroupButton />
      </div> */}
      <div
        className={`relative w-full component-color rounded-2xl ${
          showComponent === "transaction-success" ||
          showComponent === "transaction-failed"
            ? "p-0"
            : "p-4"
        }`}
      >
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
            selectedToken={selectedToken}
            selectedToken2={selectedToken2}
            setSelectedToken={setSelectedToken}
            setSelectedToken2={setSelectedToken2}
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
            location="confirm-swap"
            setShowComponent={setShowComponent}
          />
        )}
        {showComponent == "transaction-failed" && (
          <TransactionStatus
            isNotPadding={true}
            status={false}
            location="confirm-swap"
            setShowComponent={setShowComponent}
          />
        )}
      </div>
      <div className="w-full flex justify-center items-center flex-col">
        <div className="block xl:hidden">
          <TimeGroupButton />
        </div>
        <div className="list-component-color w-full xl:w-96 rounded-2xl max-xl:mt-8">
          <p className="pl-[18px] pt-6 pb-4 text-[15px] leading-[18px] font-medium">
            Your Top Movers
          </p>
          <ul className="flex flex-col gap-0.5">
            {movers.map((item, i) => {
              return (
                <li
                  key={item.name + i}
                  className={
                    isWalletConnected
                      ? "flex top-mover last:rounded-b-2xl justify-between last:mb-0 rounded-[3px] cursor-pointer"
                      : "flex topmovers-bg last:rounded-b-2xl justify-between last:mb-0 rounded-[3px]"
                  }
                  onClick={() => {
                    setShowComponent("view-1");
                    if (isWalletConnected) {
                      setSelectedToken({
                        name: item.name,
                        imgId: item.imgId,
                        price: item.price,
                      });
                      setSelectedToken2({
                        name: "WMTt",
                        imgId: 1,
                        price: 0,
                      });
                    }
                  }}
                >
                  <div className="flex items-center pl-[17px] py-2 gap-[10px]">
                    <Image
                      className=" rounded-full drop-shadow-2xl "
                      src={
                        isWalletConnected
                          ? `/images/assets/token-${item.imgId}.png`
                          : `/images/assets/token-${movers[0].imgId}.png`
                      }
                      alt="Movers"
                      width={30}
                      height={30}
                    />
                    <div>
                      <h1 className="text-sm uppercase font-medium">
                        {isWalletConnected ? item.name : movers[0].name}
                      </h1>
                      {/* <p className="text-[0.7rem] text-xs">{item.subname}</p> */}
                    </div>
                  </div>
                  <div className="pr-5 flex flex-col justify-center">
                    <p className="text-[12px] leading-[25px] font-medium flex justify-end">
                      ${isWalletConnected ? item.price : movers[0].price}
                    </p>
                    <p className=" text-[#16A34A] text-[10px] leading-[21px] font-medium">
                      +${isWalletConnected ? item.up_price : movers[0].up_price}
                    </p>
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
