import Image from "next/image";
import React from "react";
import { AiFillCiCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";

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
      <div className="px-2 md:px-8 py-8 space-y-8">
        {/* desktop  */}
        <div className="md:flex w-full justify-between  items-center py-8 hidden">
          <Image
            src={`/images/assets/LBE1.png`}
            alt="LBE1"
            width={170}
            height={75}
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
        <div className="flex justify-between flex-wrap md:flex-nowrap">
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
          <div className="font-medium text-xs 2xl:text-sm mt-4 flex flex-col items-start md:items-end">
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
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
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
        <p className=" py-4 px-4 md:px-8">
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
