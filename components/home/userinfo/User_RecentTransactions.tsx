import Image from "next/image";
import React from "react";
import { BsArrowRight, BsPlus } from "react-icons/bs";

const User_RecentTransactions = () => {
  return (
    <div className="flex flex-col items-center w-full xl:w-auto mt-10 xl:mt-4">
      <div className="component-color p-6 w-full xl:w-96 rounded-2xl mt-4">
        <h2 className="mb-6">Recent Transactions</h2>
        <div className="mt-6">
          <p className=" text-xss mb-0.5">Swap, 8/12 12:23 PM</p>
          <div className="flex items-center gap-3 flex-wrap">
            <div className=" bg-gray-600 gap-1 flex items-center px-2 py-1.5 rounded-lg">
              <Image
                src={`/images/assets/token-1.png`}
                height={22}
                width={22}
                alt="Token"
              />
              <p className="text-xs">89.0 ADA</p>
            </div>
            <BsArrowRight className="w-4 h-4" />
            <div className=" bg-gray-600 gap-1 flex items-center px-2 py-1.5 rounded-lg">
              <Image
                src={`/images/assets/teddy.png`}
                height={22}
                width={22}
                alt="Token"
              />
              <p className="text-xs">349.0 TEDDY</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className=" text-xss mb-0.5">Add liquidity, 8/12 12:45 PM</p>
          <div className="flex items-center gap-3 flex-wrap">
            <div className=" bg-gray-600 gap-1 flex items-center px-2 py-1.5 rounded-lg">
              <Image
                src={`/images/assets/token-1.png`}
                height={22}
                width={22}
                alt="Token"
              />
              <p className="text-xs">89.0 ADA</p>
            </div>
            <BsPlus className="w-4 h-4" />
            <div className=" bg-gray-600 gap-1 flex items-center px-2 py-1.5 rounded-lg">
              <Image
                src={`/images/assets/teddy.png`}
                height={22}
                width={22}
                alt="Token"
              />
              <p className="text-xs">349.0 TEDDY</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className=" text-xss mb-0.5">Harvest, 8/12 12:59 PM</p>
          <div className="flex items-center gap-3 flex-wrap">
            <div className=" bg-gray-600 gap-1 flex items-center px-2 py-1.5 rounded-lg">
              <Image
                src={`/images/assets/token-1.png`}
                height={22}
                width={22}
                alt="Token"
              />
              <p className="text-xs">89.0 ADA</p>
            </div>
            <BsPlus className="w-4 h-4" />
            <div className=" bg-gray-600 gap-1 flex items-center px-2 py-1.5 rounded-lg">
              <Image
                src={`/images/assets/teddy.png`}
                height={22}
                width={22}
                alt="Token"
              />
              <p className="text-xs">349.0 TEDDY</p>
            </div>
            <BsPlus className="w-4 h-4" />
            <div className=" bg-gray-600 gap-1 flex items-center px-2 py-1.5 rounded-lg">
              <Image
                src={`/images/assets/wallet-1.png`}
                height={22}
                width={22}
                alt="Token"
              />
              <p className="text-xs">349.0 TEDDY</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className=" text-xss mb-0.5">Swap, 8/12 12:23 PM</p>
          <div className="flex items-center gap-3 flex-wrap">
            <div className=" bg-gray-600 gap-1 flex items-center px-2 py-1.5 rounded-lg">
              <Image
                src={`/images/assets/teddy.png`}
                height={22}
                width={22}
                alt="Token"
              />
              <p className="text-xs">98.0 TEDDY</p>
            </div>
            <BsArrowRight className="w-4 h-4" />
            <div className=" bg-gray-600 gap-1 flex items-center px-2 py-1.5 rounded-lg">
              <Image
                src={`/images/assets/token-1.png`}
                height={22}
                width={22}
                alt="Token"
              />
              <p className="text-xs">102.0 ADA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_RecentTransactions;
