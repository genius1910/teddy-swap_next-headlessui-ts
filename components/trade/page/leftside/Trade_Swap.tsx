"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdEqualizer, MdTune } from "react-icons/md";
import Market from "../../quickSwap/Market";
import SelectTokenView from "../../quickSwap/SelectTokenView";
import ConfirmSwap from "../../quickSwap/market/ConfirmSwap";
import Limit from "../../quickSwap/market/Limit";
import TransactionStatus from "../../quickSwap/market/TransactionStatus";
import ConfirmOrder from "../../quickSwap/limit/ConfirmOrder";
import Trade_Settings from "./Trade_Settings";
import Trade_KeyStats from "./Trade_KeyStats";

export interface SelectedTokenProps {
  name: string;
  imgId: number;
  price: number;
}

const Trade_Swap = () => {
  const [isMarket, setIsMarket] = useState(true);
  const [showComponent, setShowComponent] = useState("view-1");
  const [selectedToken, setSelectedToken] = useState<SelectedTokenProps>();
  const [selectedToken2, setSelectedToken2] = useState<SelectedTokenProps>();
  const [selectedToken3, setSelectedToken3] = useState<SelectedTokenProps>();
  const [selectedToken4, setSelectedToken4] = useState<SelectedTokenProps>();

  return (
    <>
      <div className="component-color rounded-2xl">
        {showComponent === "view-1" ? (
          <div className="flex flex-col gap-6 items-center p-6">
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsMarket(true);
                  }}
                  className={`${
                    isMarket ? "text-gray-100" : "text-gray-400"
                  } text-base xl:text-xl font-medium`}
                >
                  Market
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsMarket(false);
                  }}
                  className={`${
                    !isMarket ? "text-gray-100" : "text-gray-400"
                  } text-base xl:text-xl font-medium`}
                >
                  Limit
                </button>
              </div>
              <button
                onClick={() => setShowComponent("settings")}
                className={` text-gray-300 hover:text-gray-100 text-base xl:text-lg`}
              >
                <MdTune className=" w-6 h-6 xl:w-8 xl:h-8" />
              </button>
            </div>
            {isMarket ? (
              <Market
                setShowComponent={setShowComponent}
                setSelectedToken={setSelectedToken}
                setSelectedToken2={setSelectedToken2}
              />
            ) : (
              <Limit
                setShowComponent={setShowComponent}
                setSelectedToken3={setSelectedToken3}
                setSelectedToken4={setSelectedToken4}
              />
            )}
          </div>
        ) : (
          <>
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
            {showComponent == "token-view-3" && (
              <SelectTokenView
                setSelectedToken={setSelectedToken3}
                setShowComponent={setShowComponent}
              />
            )}
            {showComponent == "token-view-4" && (
              <SelectTokenView
                setSelectedToken={setSelectedToken4}
                setShowComponent={setShowComponent}
              />
            )}
            {showComponent == "confirm-swap" && (
              <ConfirmSwap setShowComponent={setShowComponent} />
            )}
            {showComponent == "confirm-order" && (
              <ConfirmOrder setShowComponent={setShowComponent} />
            )}
            {showComponent == "transaction-success" && (
              <TransactionStatus
                status={true}
                location={isMarket ? "confirm-swap" : "confirm-order"}
                setShowComponent={setShowComponent}
              />
            )}
            {showComponent == "transaction-failed" && (
              <TransactionStatus
                status={false}
                location={isMarket ? "confirm-swap" : "confirm-order"}
                setShowComponent={setShowComponent}
              />
            )}
            {showComponent == "settings" && (
              <Trade_Settings setShowComponent={setShowComponent} />
            )}
          </>
        )}
      </div>
      {((selectedToken && selectedToken2) ||
        (selectedToken3 && selectedToken4)) && (
        <div className="component-color p-6 rounded-2xl">
          <Trade_KeyStats />
        </div>
      )}
    </>
  );
};

export default Trade_Swap;
