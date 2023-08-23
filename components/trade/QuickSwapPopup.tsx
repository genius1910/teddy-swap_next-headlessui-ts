import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdEqualizer } from "react-icons/md";
import Market from "./quickSwap/Market";
import SelectTokenView from "./quickSwap/SelectTokenView";
import ConfirmSwap from "./quickSwap/market/ConfirmSwap";
import Limit from "./quickSwap/market/Limit";
import TransactionStatus from "./quickSwap/market/TransactionStatus";
import ConfirmOrder from "./quickSwap/limit/ConfirmOrder";

export interface SelectedTokenProps {
  name: string;
  imgId: number;
  price: number;
}

const QuickSwapPopup = ({ close }: { close: () => void }) => {
  const [isMarket, setIsMarket] = useState(true);
  const [showComponent, setShowComponent] = useState("view-1");
  const [selectedToken, setSelectedToken] = useState<SelectedTokenProps>();
  const [selectedToken2, setSelectedToken2] = useState<SelectedTokenProps>();
  const [selectedToken3, setSelectedToken3] = useState<SelectedTokenProps>();
  const [selectedToken4, setSelectedToken4] = useState<SelectedTokenProps>();

  return (
    <div className="">
      {showComponent === "view-1" ? (
        <div className="relative flex flex-col gap-6 items-center px-4 p-6">
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
            <div className="flex gap-4">
              <button
                className={` text-gray-300 hover:text-gray-100 text-base xl:text-lg`}
              >
                <MdEqualizer className=" w-6 h-6 xl:w-8 xl:h-8" />
              </button>
              <button
                className={` text-gray-300 hover:text-gray-100 text-base xl:text-lg`}
              >
                <RxCross2
                  onClick={() => close()}
                  className=" w-6 h-6 xl:w-8 xl:h-8 "
                />
              </button>
            </div>
          </div>
          {isMarket ? (
            <Market
              setShowComponent={setShowComponent}
              selectedToken={selectedToken}
              selectedToken2={selectedToken2}
            />
          ) : (
            <Limit
              setShowComponent={setShowComponent}
              selectedToken3={selectedToken3}
              selectedToken4={selectedToken4}
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
              setShowComponent={setShowComponent}
            />
          )}
          {showComponent == "transaction-failed" && (
            <TransactionStatus
              status={false}
              setShowComponent={setShowComponent}
            />
          )}
        </>
      )}
    </div>
  );
};

export default QuickSwapPopup;
