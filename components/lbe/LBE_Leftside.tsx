import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdArrowDownward } from "react-icons/md";

const Leftside_LBE = () => {
  const [showComponent, setShowComponent] = useState("");
  return (
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
  );
};

export default Leftside_LBE;
