import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdArrowDownward } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Leftside_LBE = () => {
  const wrapperRef = useRef(null);

  const [showComponent, setShowComponent] = useState("confirm-before");
  const [confirming, setConfirming] = useState(false);
  const [isSuccess, setIsSuccess] = useState("before");

  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsSuccess("before");
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
      {showComponent === "confirm-before" ? (
        <div className="flex flex-col justify-cente rounded-[18px]">
          <p className=" text-base 2xl:text-[18px] font-semibold leading-[22px] ml-1">
            Supply ADA
          </p>
          <div className="pt-8">
            <p className="ml-2 text-xs font-medium 2xl:text-[14px] leading-[17px] text-[#C6C6C6] mb-1">
              Amount
            </p>
            <div className="small-component-color flex justify-between items-center w-full rounded-lg px-3 pt-[13px] pb-2">
              <div className="font-medium space-y-[6px] ml-2">
                <input
                  type="text"
                  defaultValue={0.0}
                  className=" text-base w-52 2xl:text-xl bg-transparent text-white outline-none font-semibold"
                />
                <p className="text-[11px] leading-[13.5px] font-medium text-[#C6C6C6]">
                  ~ $0
                </p>
              </div>
              <div className=" justify-center items-center">
                <div className="flex text-gray-300 items-center gap-2 button-component-color p-1.5 px-[7px] rounded-xl">
                  <Image
                    src={`/images/assets/token-1.png`}
                    alt="icon"
                    width={28}
                    height={28}
                  />
                  <p className="text-sm 2xl:text-[14px] leading-[17px] text-[#C6C6C6]">
                    ADA
                  </p>
                </div>
                <p className="mt-[5px] text-[#268AFF] text-xs 2xl:text-[13px] leading-4 font-medium text-center">
                  Max
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto flex items-center justify-center pt-[18px]">
            <MdArrowDownward className="w-8 h-8 p-1 text-center rounded-full component-color shadow" />
          </div>
          <div className="-mt-1 pb-[22px]">
            <p className="ml-2 text-xs font-medium 2xl:text-[14px] leading-[17px] text-[#C6C6C6] mb-1">
              Amount
            </p>
            <div className="small-component-color flex justify-between items-center w-full rounded-lg px-3 pt-[21px] pb-[21px]">
              <div className="font-medium space-y-[6px] ml-2">
                <input
                  type="text"
                  defaultValue={0.0}
                  className=" text-base w-52 2xl:text-xl bg-transparent text-white outline-none font-semibold"
                />
                <p className="text-[11px] leading-[13.5px] font-medium text-[#C6C6C6]">
                  ~ $0
                </p>
              </div>
              <div className=" justify-center items-center">
                <div className="flex text-gray-300 items-center gap-2 button-component-color p-1.5 px-[7px] rounded-xl">
                  <Image
                    src={`/images/assets/teddy.png`}
                    alt="icon"
                    width={28}
                    height={28}
                  />
                  <p className="text-sm 2xl:text-[14px] leading-[17px] text-[#C6C6C6]">
                    TeddyADA
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setShowComponent("confirm-waiting");
              setTimeout(() => {
                if (Math.random() >= 0.5) {
                  setIsSuccess("success");
                } else {
                  setIsSuccess("falied");
                }
                setShowComponent("confirm-before");
              }, 2000);
            }}
            className={
              "secondary-button text-sm xl:text-[20px] leading-6 py-3 xl:py-4 rounded-[12px] border-2"
            }
          >
            Deposit
          </button>
          <div className="mt-9 pl-2 gap-[10px]">
            <div className="flex items-center gap-[3px] text-gray-300">
              <p className="text-[14px] leading-[17px] font-medium text-[#C6C6C6]">
                Estimated LP Tokens
              </p>
              <AiOutlineInfoCircle
                title="Estimated LP Token is the powerful"
                className="w-[10px] h-[10px] "
              />
            </div>
            <p className=" text-[#268AFF] text-sm 2xl:text-[18px] leading-[22px] font-medium mt-[10px]">
              186,327,942
            </p>
          </div>
          <div className="mt-[34px] pl-2 gap-[10px]">
            <div className="flex items-center gap-[3px] text-gray-300">
              <p className="text-[14px] leading-[17px] font-medium text-[#C6C6C6]">
                Estimated Tedy Price
              </p>
              <AiOutlineInfoCircle
                title="Estimated LP Token is the powerful"
                className="w-[10px] h-[10px] "
              />
            </div>
            <p className=" text-[#268AFF] text-sm 2xl:text-[18px] leading-[22px] font-medium mt-[10px]">
              186,327,942
            </p>
          </div>
        </div>
      ) : (
        <>
          {showComponent === "confirm-waiting" ? (
            <>
              <div
                className={`relative font-medium flex flex-col items-center`}
              >
                <div className="text-white flex items-center justify-between w-full">
                  <p className="xl:text-[20px] leading-6 font-medium text-base pl-[6px]">
                    Waiting for confirmation
                  </p>
                  <button className={` text-gray-100 hover:text-white`}>
                    <RxCross2
                      onClick={() => setShowComponent("confirm-before")}
                      className=" w-8 h-8 "
                    />
                  </button>
                </div>
                <div className="flex flex-col gap-8 items-center justify-between w-full text-center pt-12">
                  <div className="w-24 relative h-24 bg-transparent border-8 border-r-[#268aff] border-transparent rounded-full animate-spin "></div>
                  <h1 className="pt-16">Confirming...</h1>
                </div>
                <div className=" flex flex-col gap-12 pt-6">
                  <div>
                    <p className="text-[14px] leading-[16px] font-normal text-[#D6D6D6] text-center pt-[26px] px-6">
                      Deposit 200 ADA to get 200 TeddyADA
                    </p>
                    <p className="text-[12px] leading-[14px] font-normal text-[#D6D6D6] text-center pt-[26px] px-6">
                      Confirm this transaction in your wallet
                    </p>
                  </div>
                  {/* <div>
                    <p className="text-[12px] leading-[14px] font-normal text-[#D6D6D6] text-center pt-[26px] px-6">
                      <span className="text-[14px] leading-[16px] font-normal text-[#D6D6D6] text-center pt-[26px]">
                        DISCLAIMER:
                      </span>
                      The network is congested at the moment. Once you have
                      signed the transaction, it might take a while for it to go
                      through. Please be patient
                    </p>
                  </div> */}
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}
      {isSuccess !== "before" && (
        <div className="notification-animation" ref={wrapperRef}>
          <div
            className={`absolute top-0 left-0 right-0 h-60 font-medium flex flex-col gap-6 items-center rounded-2xl bg-[url('/images/assets/tokenResultBg.svg')] bg-cover bg-bottom p-6`}
          >
            <div className="text-white flex items-center justify-between w-full">
              <div className="flex flex-row gap-1 items-center">
                <h1 className=" xl:text-xl text-base">
                  {isSuccess === "success"
                    ? "Transaction Successful"
                    : "Transaction Failed"}
                </h1>
                {isSuccess === "success" ? (
                  <img
                    src="/images/assets/tick.svg"
                    className="xl:w-5 xl:h-5 w-5 h-5"
                  />
                ) : (
                  <img
                    src="/images/assets/cross.svg"
                    className="xl:w-5 xl:h-5 w-5 h-5"
                  />
                )}
              </div>
              <button
                className={` text-gray-100 hover:text-white text-base xl:text-lg`}
              >
                <RxCross2
                  onClick={() => setIsSuccess("before")}
                  className=" w-8 h-8 "
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Leftside_LBE;
