import React, { useState, useEffect, useRef } from "react";
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
  const wrapperRef = useRef(null);

  const [isMarket, setIsMarket] = useState(true);
  const [showComponent, setShowComponent] = useState("view-1");
  const [isSuccess, setIsSuccess] = useState("view-message");
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
    <div className="">
      {showComponent === "view-1" ? (
        <div className="relative flex flex-col items-center pt-[30px] pl-[30px] pr-[22px] pb-6">
          <div className="flex items-center justify-between w-full mb-6">
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => {
                  setIsMarket(true);
                }}
                className={`${
                  isMarket ? "text-gray-100" : "text-gray-400"
                } text-[20px] font-medium leading-6`}
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
                } text-[20px] font-medium leading-6`}
              >
                Limit
              </button>
            </div>
            <div className="flex gap-3">
              <button
                className={` text-gray-300 hover:text-gray-100 text-base 2xl:text-lg`}
              >
                <MdEqualizer className=" w-6 h-6 2xl:w-8 2xl:h-8" />
              </button>
              <button
                className={` text-gray-300 hover:text-gray-100 text-base 2xl:text-lg`}
              >
                <RxCross2
                  onClick={() => close()}
                  className=" w-6 h-6 2xl:w-8 2xl:h-8 "
                />
              </button>
            </div>
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
            <ConfirmSwap
              setShowComponent={setShowComponent}
              setIsSuccess={setIsSuccess}
            />
          )}
          {showComponent == "confirm-order" && (
            <ConfirmOrder
              setShowComponent={setShowComponent}
              setIsSuccess={setIsSuccess}
            />
          )}
        </>
      )}
      {isSuccess == "transaction-success" && (
        <div className=" notification-animation" ref={wrapperRef}>
          <TransactionStatus
            status={true}
            location={isMarket ? "confirm-swap" : "confirm-order"}
            setShowComponent={setShowComponent}
            setIsSuccess={setIsSuccess}
          />
        </div>
      )}
      {isSuccess == "transaction-failed" && (
        <div className=" notification-animation" ref={wrapperRef}>
          <TransactionStatus
            status={false}
            location={isMarket ? "confirm-swap" : "confirm-order"}
            setShowComponent={setShowComponent}
            setIsSuccess={setIsSuccess}
          />
        </div>
      )}
    </div>
  );
};

export default QuickSwapPopup;
