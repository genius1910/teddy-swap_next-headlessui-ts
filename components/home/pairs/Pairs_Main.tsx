import React from "react";
import TimeGroupButton from "../TimeGroupButton";
import Pairs_BottomTable from "./Pairs_BottomTable";
import Image from "next/image";
import { BsPatchCheckFill } from "react-icons/bs";

const Pairs_Main = () => {
  return (
    <div className="max-xl:max-w-[1400px] mx-auto xl:zoom-80 xl:zoom-100">
      <div className="flex items-center justify-center mt-6">
        <TimeGroupButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {["Top Gainers", "Top Volume", "Top Losers"].map((heading) => (
          <div
            key={heading}
            className="col-span-1 rounded-3xl component-color p-4 sm:p-6"
          >
            <h1 className=" big-text font-medium">{heading}</h1>
            <ul className="mt-4 space-y-4">
              {[1, 2, 3, 4].map((num) => (
                <li
                  key={num}
                  className="flex medium-text items-center justify-between"
                >
                  <span className="flex items-center gap-1">
                    <Image
                      src={`/images/assets/token-1.png`}
                      alt="icon1"
                      width={29}
                      height={29}
                    />
                    <Image
                      src={`/images/assets/teddy.png`}
                      alt="icon2"
                      width={29}
                      height={29}
                      className="-ml-3"
                    />
                    <h4>ADA/TEDY</h4>
                    <BsPatchCheckFill className="w-3 h-3" />
                  </span>
                  <span className="text-gray-300">2.000341 ₳</span>
                  <span className="text-o_green">0.23%</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className=" col-span-1 md:col-span-2 lg:col-span-3">
          <Pairs_BottomTable />
        </div>
      </div>
    </div>
  );
};

export default Pairs_Main;
