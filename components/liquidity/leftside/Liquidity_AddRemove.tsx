"use client";
import React, { useState, useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdEqualizer, MdTune } from "react-icons/md";
import Liquidity_Add from "./Liquidity_Add";
import Liquidity_Remove from "./Liquidity_Remove";
import Liquidity_SelectTokenView from "./Liquidity_SelectTokenView";
import Liquidity_Confirm from "./Liquidity_Confirm";
import TransactionStatus from "@/components/trade/quickSwap/market/TransactionStatus";
import Trade_Settings from "@/components/trade/page/leftside/Trade_Settings";

export interface SelectedTokenProps {
  name: string;
  percentage: number;
}

const Liquidity_AddRemove = () => {
  const wrapperRef = useRef(null);

  const [isDeposit, setIsDeposit] = useState(true);
  const [isSuccess, setIsSuccess] = useState("view-message");
  const [showComponent, setShowComponent] = useState("view-1");
  const [selectedToken, setSelectedToken] = useState<SelectedTokenProps>();
  const [selectedToken2, setSelectedToken2] = useState<SelectedTokenProps>();
  const [selectedToken3, setSelectedToken3] = useState<SelectedTokenProps>();
  const [selectedToken4, setSelectedToken4] = useState<SelectedTokenProps>();

  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsSuccess("view-1");
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(wrapperRef);

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
                Add
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
                Remove
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
            <Liquidity_Add
              setShowComponent={setShowComponent}
              setSelectedToken={setSelectedToken}
              setSelectedToken2={setSelectedToken2}
            />
          ) : (
            <Liquidity_Remove
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
              setIsSuccess={setIsSuccess}
              setShowComponent={setShowComponent}
            />
          )}
          {showComponent == "remove-liquidity" && (
            <Liquidity_Confirm
              isAdd={false}
              setIsSuccess={setIsSuccess}
              setShowComponent={setShowComponent}
            />
          )}
          {showComponent == "settings" && (
            <Trade_Settings setShowComponent={setShowComponent} />
          )}
        </>
      )}
      {isSuccess == "transaction-success" && (
        <div className=" notification-animation" ref={wrapperRef}>
          <TransactionStatus
            isLiquidity={true}
            status={true}
            location={isDeposit ? "confirm-liquidity" : "remove-liquidity"}
            setShowComponent={setShowComponent}
            setIsSuccess={setIsSuccess}
          />
        </div>
      )}
      {isSuccess == "transaction-failed" && (
        <div className=" notification-animation" ref={wrapperRef}>
          <TransactionStatus
            isLiquidity={true}
            status={false}
            location={isDeposit ? "confirm-liquidity" : "remove-liquidity"}
            setShowComponent={setShowComponent}
            setIsSuccess={setIsSuccess}
          />
        </div>
      )}
    </>
  );
};

export default Liquidity_AddRemove;
