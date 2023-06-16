"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdEqualizer, MdTune } from "react-icons/md";
import Liquidity_Deposit from "./Liquidity_Deposit";
import Liquidity_Withdraw from "./Liquidity_Withdraw";
import Liquidity_SelectTokenView from "./Liquidity_SelectTokenView";
import Liquidity_Confirm from "./Liquidity_Confirm";
import TransactionStatus from "@/components/trade/quickSwap/market/TransactionStatus";
import Trade_Settings from "@/components/trade/page/leftside/Trade_Settings";

export interface SelectedTokenProps {
  name: string;
  percentage: number;
}

const Liquidity_DepositWithdraw = () => {
  const [isDeposit, setIsDeposit] = useState(true);
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
                  setIsDeposit(true);
                }}
                className={`${
                  isDeposit ? "text-gray-100" : "text-gray-400"
                } text-base 2xl:text-xl font-medium`}
              >
                Deposit
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsDeposit(false);
                }}
                className={`${
                  !isDeposit ? "text-gray-100" : "text-gray-400"
                } text-base 2xl:text-xl font-medium`}
              >
                Withdraw
              </button>
            </div>
            <button
              onClick={() => setShowComponent("settings")}
              className={` text-gray-300 hover:text-gray-100 text-base 2xl:text-lg`}
            >
              <MdTune className=" w-6 h-6 2xl:w-8 2xl:h-8" />
            </button>
          </div>
          {isDeposit ? (
            <Liquidity_Deposit
              setShowComponent={setShowComponent}
              selectedToken={selectedToken}
              selectedToken2={selectedToken2}
            />
          ) : (
            <Liquidity_Withdraw
              setShowComponent={setShowComponent}
              selectedToken3={selectedToken3}
              selectedToken4={selectedToken4}
            />
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
          {showComponent == "confirm-liquidity" && (
            <Liquidity_Confirm
              isAdd={true}
              setShowComponent={setShowComponent}
            />
          )}
          {showComponent == "remove-liquidity" && (
            <Liquidity_Confirm
              isAdd={false}
              setShowComponent={setShowComponent}
            />
          )}
          {showComponent == "transaction-success" && (
            <TransactionStatus
              isLiquidity={true}
              status={true}
              setShowComponent={setShowComponent}
            />
          )}
          {showComponent == "transaction-failed" && (
            <TransactionStatus
              isLiquidity={true}
              status={false}
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

export default Liquidity_DepositWithdraw;
