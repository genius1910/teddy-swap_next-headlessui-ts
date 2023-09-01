"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdEqualizer, MdTune } from "react-icons/md";
import TransactionStatus from "@/components/trade/quickSwap/market/TransactionStatus";
import Trade_Settings from "@/components/trade/page/leftside/Trade_Settings";
import Farm_Stake from "./Farm_Stake";
import Farm_Withdraw from "./Farm_Withdraw";
import Farm_Harvest from "./Farm_Harvest";
import Liquidity_SelectTokenView from "../liquidity/leftside/Liquidity_SelectTokenView";
import Farm_Confirm from "./Farm_Confirm";

export interface SelectedTokenProps {
  name: string;
  percentage: number;
}

const Farm_StakeWithdrawHarvest = () => {
  const [currentTab, setCurrentTab] = useState("stake");
  const [showComponent, setShowComponent] = useState("view-1");
  const [selectedToken, setSelectedToken] = useState<SelectedTokenProps>();
  const [selectedToken2, setSelectedToken2] = useState<SelectedTokenProps>();
  const [selectedToken3, setSelectedToken3] = useState<SelectedTokenProps>();
  const [selectedToken4, setSelectedToken4] = useState<SelectedTokenProps>();

  return (
    <>
      {showComponent === "view-1" ? (
        <div className="relative flex flex-col gap-6 items-center p-6">
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => {
                  setCurrentTab("stake");
                }}
                className={`${
                  currentTab == "stake" ? "text-gray-100" : "text-gray-400"
                } text-base 2xl:text-xl font-medium`}
              >
                Stake
              </button>
              <button
                type="button"
                onClick={() => {
                  setCurrentTab("withdraw");
                }}
                className={`${
                  currentTab == "withdraw" ? "text-gray-100" : "text-gray-400"
                } text-base 2xl:text-xl font-medium`}
              >
                Withdraw
              </button>
              <button
                type="button"
                onClick={() => {
                  setCurrentTab("harvest");
                }}
                className={`${
                  currentTab == "harvest" ? "text-gray-100" : "text-gray-400"
                } text-base 2xl:text-xl font-medium`}
              >
                Harvest
              </button>
            </div>
            <button
              onClick={() => setShowComponent("settings")}
              className={` text-gray-300 hover:text-gray-100 text-base 2xl:text-lg`}
            >
              <MdTune className=" w-6 h-6 2xl:w-8 2xl:h-8" />
            </button>
          </div>
          {currentTab == "stake" ? (
            <Farm_Stake setShowComponent={setShowComponent} />
          ) : currentTab == "withdraw" ? (
            <Farm_Withdraw setShowComponent={setShowComponent} />
          ) : (
            <Farm_Harvest setShowComponent={setShowComponent} isAdd={true} />
          )}
        </div>
      ) : (
        <>
          {showComponent == "token-view-1" && (
            <Liquidity_SelectTokenView
              setSelectedToken={setSelectedToken}
              setShowComponent={setShowComponent}
            />
          )}
          {showComponent == "token-view-2" && (
            <Liquidity_SelectTokenView
              setSelectedToken={setSelectedToken2}
              setShowComponent={setShowComponent}
            />
          )}
          {showComponent == "token-view-3" && (
            <Liquidity_SelectTokenView
              setSelectedToken={setSelectedToken3}
              setShowComponent={setShowComponent}
            />
          )}
          {showComponent == "token-view-4" && (
            <Liquidity_SelectTokenView
              setSelectedToken={setSelectedToken4}
              setShowComponent={setShowComponent}
            />
          )}
          {showComponent == "confirm-stake" && (
            <Farm_Confirm isStake={true} setShowComponent={setShowComponent} />
          )}
          {showComponent == "confirm-withdraw" && (
            <Farm_Confirm isStake={false} setShowComponent={setShowComponent} />
          )}
          {showComponent == "transaction-success" && (
            <TransactionStatus
              isLiquidity={true}
              status={true}
              location={"confirm-" + currentTab}
              setShowComponent={setShowComponent}
            />
          )}
          {showComponent == "transaction-failed" && (
            <TransactionStatus
              isLiquidity={true}
              status={false}
              location={"confirm-" + currentTab}
              setShowComponent={setShowComponent}
            />
          )}
          {showComponent == "settings" && (
            <Trade_Settings setShowComponent={setShowComponent} />
          )}
        </>
      )}
    </>
  );
};

export default Farm_StakeWithdrawHarvest;
