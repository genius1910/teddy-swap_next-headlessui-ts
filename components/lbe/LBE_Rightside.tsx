import Image from "next/image";
import React from "react";
import { AiFillCiCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";

const LBE_Rightside = () => {
  return (
    <div className="pt-[35px] pl-[34px] pr-[42px] pb-[51px] flex flex-col">
      <div className="flex justify-between  items-start">
        <p className="text-base 2xl:text-[18px] leading-[22px] font-semibold">
          TeddySwap Liquidity Bootstraping Event
        </p>
        <div className="flex flex-col items-center justify-center text-sm text-gray-400 font-medium gap-[6px]">
          <p className="text-[14px] leading-[17px] text-[#C6C6C6]">
            Remaining time
          </p>
          <p className="text-base 2xl:text-[18px] leading-[22px] font-medium text-[#51A1FF]">
            1 Day left
          </p>
        </div>
      </div>
      <div className="pl-[46px] pr-[38px] pt-16">
        {/* desktop  */}
        <div className="md:flex w-full justify-between  items-center hidden">
          <Image
            src={`/images/assets/LBE1.png`}
            alt="LBE1"
            width={170}
            height={75}
            className="drop-shadow-2xl"
          />
          <div className="h-1 w-full bg-gray-800 relative rounded-r-full">
            <BsFillCircleFill className="h-3 w-3 absolute right-0 -inset-y-1 rounded-full text-gray-800 " />
          </div>
          <Image
            src={`/images/assets/LBE2.png`}
            alt="LBE1"
            width={170}
            height={75}
          />
          <div className="h-1 w-full bg-gray-800 relative rounded-r-full">
            <BsFillCircleFill className="h-3 w-3 absolute right-0 -inset-y-1 rounded-full text-gray-800 " />
          </div>
          <Image
            src={`/images/assets/LBE3.png`}
            alt="LBE1"
            width={170}
            height={75}
          />
        </div>
        <div className="md:flex flex-row justify-between items-center hidden">
          <div className="flex flex-col justify-center items-center pt-6 gap-[10px] px-[15px]">
            <p className="text-[18px] leading-[22px] font-semibold text-[#51A1FF]">
              Discovery
            </p>
            <div className="flex flex-row justify-center items-center gap-[5px]">
              <Image
                src="/images/assets/status.svg"
                alt="Swap tokens"
                width={9}
                height={9}
                className="drop-shadow-2xl"
              />
              <p className="text-[12px]">Active until May 27th</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center pt-6 gap-[10px] pr-10">
            <p className="text-[18px] leading-[22px] font-semibold text-[#C6C6C6]">
              Encounter
            </p>
            <div className="flex flex-row justify-center items-center gap-[5px]">
              <Image
                src="/images/assets/status.svg"
                alt="Swap tokens"
                width={9}
                height={9}
                className="drop-shadow-2xl"
              />
              <p className="text-[12px] text-[#C6C6C6]">Starts May 27th</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center pt-6 gap-[10px] pr-8">
            <p className="text-[18px] leading-[22px] font-semibold text-[#C6C6C6]">
              Settlement
            </p>
            <div className="flex flex-row justify-center items-center gap-[5px]">
              <Image
                src="/images/assets/status.svg"
                alt="Swap tokens"
                width={9}
                height={9}
                className="drop-shadow-2xl text-black"
              />
              <p className="text-[12px] text-[#C6C6C6]">Starts June 6th</p>
            </div>
          </div>
        </div>

        {/* mobile  */}
        <div className="flex w-full justify-center flex-col  items-center py-0 md:hidden">
          <div className="contents">
            <Image
              src={`/images/assets/LBE1.png`}
              alt="LBE1"
              width={170}
              height={75}
            />
            <div className="h-20 w-1 bg-gray-800 relative rounded-r-full">
              <BsFillCircleFill className="h-3 w-3 absolute bottom-0 -inset-x-1 rounded-full text-gray-800 " />
            </div>
          </div>
          <div className="contents">
            <Image
              src={`/images/assets/LBE2.png`}
              alt="LBE2"
              width={170}
              height={75}
            />
            <div className="h-20 w-1 bg-gray-800 relative rounded-r-full">
              <BsFillCircleFill className="h-3 w-3 absolute bottom-0 -inset-x-1 rounded-full text-gray-800 " />
            </div>
          </div>
          <div className="contents">
            <Image
              src={`/images/assets/LBE3.png`}
              alt="LBE3"
              width={170}
              height={75}
            />
          </div>
        </div>

        <div className="flex justify-between flex-wrap md:flex-nowrap mt-[70px]">
          <div className="font-medium text-xs 2xl:text-sm">
            <div className="flex items-center gap-[6px] text-gray-300">
              <p className="text-[14px] leading-[17px] font-medium">
                My TeddyADA
              </p>
              <AiOutlineInfoCircle
                title="The total amount of ADA that has been deposited into the pool."
                className="w-[10px] h-[10px] cursor-pointer"
              />
            </div>
            <p className=" font-bold text-sm 2xl:text-xl mt-5 mb-16">0</p>

            <div className="font-medium text-xs 2xl:text-sm">
              <div className="flex items-center gap-1 text-gray-300">
                <p className="text-[14px] leading-[17px] font-medium">
                  Estimated LP Tokens
                </p>
                <AiOutlineInfoCircle
                  title="The number of liquidity provider (LP) tokens that you will receive for depositing ADA into the pool. LP tokens represent your share of the pool's liquidity."
                  className="w-[10px] h-w-[10px] cursor-pointer"
                />
              </div>
              <p className="text-xl 2xl:text-[28px] leading-[34px] font-semibold mt-2 text-[#C6C6C6]">
                - -
              </p>
            </div>
          </div>
          <div className="font-medium text-xs 2xl:text-smflex flex-col items-start md:items-end">
            <div className="flex items-center gap-2 text-gray-300">
              <p className="text-[14px] leading-[17px] font-medium">
                Current TEDY/ADA pool
              </p>
              <AiOutlineInfoCircle
                title="The current pool of liquidity for the Teddy/ADA trading pair."
                className="w-[10px] h-[10px] cursor-pointer"
              />
            </div>
            <p className=" text-sm 2xl:text-lg font-normal mt-[19px] gap-[14px] flex flex-row ">
              <span className=" font-semibold">ADA 17.84M</span>
              <span className=" font-semibold">/</span>
              <span className=" font-semibold">TEDY 100M</span>
            </p>
            <p className="pt-2 text-[14px] leading-[17px] text-[#51A1FF] font-medium pb-10 ">
              1 TEDY = 0.1784 ADA
            </p>
            <div className="font-medium text-xs 2xl:text-sm">
              <div className="flex items-center gap-1 text-gray-300">
                <p className="text-[14px] leading-[17px] font-medium">
                  My Pool Share
                </p>
                <AiOutlineInfoCircle
                  title="The percentage of the pool's liquidity that you own, expressed as a decimal."
                  className="w-[10px] h-[10px] cursor-pointer"
                />
              </div>
              <p className="text-xl 2xl:text-[28px] leading-[34px] font-semibold mt-2 text-[#C6C6C6]">
                - -
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-base 2xl:text-[18px] leading-[22px] font-semibold mt-[58px]">
          TeddySwap Liquidity Bootstraping Event
        </p>
        <p className=" pt-[23px] px-6 md:px-[45px] text-[15px] leading-[18px] font-medium">
          Liquidity Boot strapping is an initiative to ensure the TEDY/ADA pool
          is sufficiently liquid at launch. By supplying ADA in this event,
          participants will be effectively swapping half of the ADA they supply
          for TEDY, at the price discovered at the end of the event. Starting on
          June 5th, you can start to claim the Liquidity Pool tokens that
          represent your share of teh TEDY/ADA pool, 50% in ADA and 50% in Teddy.
          <p className="mt-6 text-[15px] leading-[18px] font-medium">
            Please read our teddyswap{" "}
            <a className=" underline text-[#51A1FF]" href="#">
              LBE faq
            </a>{" "}
            before aping in.
          </p>
        </p>
      </div>
    </div>
  );
};

export default LBE_Rightside;
