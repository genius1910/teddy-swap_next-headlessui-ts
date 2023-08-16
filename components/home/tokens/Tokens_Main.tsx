import React from "react";
import Tokens_TopChartbar from "./Tokens_TopChartbar";
import Image from "next/image";
import Tokens_BottomTable from "./Tokens_BottomTable";
import { BsPatchCheckFill } from "react-icons/bs";

const Tokens_Main = () => {
  return (
    <div>
      <div className="">
        <Tokens_TopChartbar />
      </div>
      <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
        {["Top Gainers", "Top Volume", "Top Losers"].map((heading) => (
          <div
            key={heading}
            className="col-span-1 rounded-3xl component-color p-4 sm:p-6"
          >
            <h1 className="medium-text font-medium">{heading}</h1>
            <ul className="mt-4 space-y-4">
              {[1, 2, 3, 4].map((num) => (
                <li
                  key={num}
                  className="flex small-text items-center justify-between"
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
                    <h4 className="">ADA/TEDY</h4>
                    <BsPatchCheckFill className="w-3 h-3" />
                  </span>
                  <span className="text-gray-300">
                    {Math.random().toFixed(4)} ₳
                  </span>
                  {heading == "Top Losers" ? (
                    <span className=" text-o_red">
                      {(Math.random() * -6).toFixed(4)}
                      <span className="ml-0.5">%</span>
                    </span>
                  ) : (
                    <span className="text-o_green">
                      +{(Math.random() * 2).toFixed(4)}
                      <span className="ml-0.5">%</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Tokens_BottomTable />
    </div>
  );
};

export default Tokens_Main;
