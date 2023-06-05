import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const LBE_Rightside = () => {
  return (
    <div className="p-6 flex flex-col">
      <div className="flex justify-between items-center">
        <h1 className="text-base 2xl:text-lg font-medium">
          TeddySwap Liquidity Bootstraping Event
        </h1>
        <p className="flex flex-col items-center justify-center text-sm text-gray-400 font-medium gap-2">
          <p>Remaining time</p>
          <p className="text-base 2xl:text-lg font-medium text-blue-400">
            1 Day left
          </p>
        </p>
      </div>
      <div className="px-8 py-4 space-y-4">
        <div></div>
        <div className="flex justify-between">
          <div className="font-medium text-xs 2xl:text-sm mt-4 ">
            <div className="flex items-center gap-2 text-gray-300">
              <h3>My TeddyADA</h3>
              <AiOutlineInfoCircle
                title="Estimated LP Price , write here in details"
                className="w-4 h-4"
              />
            </div>
            <p className="  text-sm 2xl:text-xl mt-2">0</p>
          </div>
          <div className="font-medium text-xs 2xl:text-sm mt-4 flex flex-col items-end">
            <div className="flex items-center gap-2 text-gray-300">
              <h3>Current TEDY/ADA pool</h3>
              <AiOutlineInfoCircle
                title="Estimated LP Price , write here in details"
                className="w-4 h-4"
              />
            </div>
            <p className="  text-sm 2xl:text-lg mt-2 font-normal">
              <span className=" font-semibold">ADA</span> 17.84M /{" "}
              <span className=" font-semibold">TEDY</span> 100M
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="font-medium text-xs 2xl:text-sm mt-4 ">
            <div className="flex items-center gap-2 text-gray-300">
              <h3>Estimated LP Tokens</h3>
              <AiOutlineInfoCircle
                title="Estimated LP Price , write here in details"
                className="w-4 h-4"
              />
            </div>
            <p className="  text-sm 2xl:text-xl mt-2">--</p>
          </div>
          <div className="font-medium text-xs 2xl:text-sm mt-4 ">
            <div className="flex items-center gap-2 text-gray-300">
              <h3>My Pool Share</h3>
              <AiOutlineInfoCircle
                title="Estimated LP Price , write here in details"
                className="w-4 h-4"
              />
            </div>
            <p className="  text-sm 2xl:text-xl mt-2">--</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-base 2xl:text-lg font-medium">
          TeddySwap Liquidity Bootstraping Event
        </h1>
        <p className=" py-4 px-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          tempore doloribus necessitatibus ut, veniam voluptatem praesentium
          eaque facere quam ipsum aliquid soluta cumque totam, delectus atque! A
          quia consequatur nostrum?
          <p className="mt-6">
            Please read our teddyswap{" "}
            <a className=" underline text-blue-400" href="#">
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
