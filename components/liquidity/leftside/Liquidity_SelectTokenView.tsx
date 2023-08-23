import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdCheckCircle } from "react-icons/md";

interface Props {
  setShowComponent: (value: string) => void;
  setSelectedToken: (value: { name: string; percentage: number }) => void;
}

export default function Liquidity_SelectTokenView({
  setShowComponent,
  setSelectedToken,
}: Props) {
  const [query, setQuery] = useState("");
  const token = [
    {
      name: "ADA/TEDY",
      percentage: 36,
    },
    {
      name: "cBTC/iUSD",
      percentage: 98,
    },
    {
      name: "ADA/dJED",
      percentage: 74,
    },
    {
      name: "cBTC/USD",
      percentage: 87,
    },
    {
      name: "cBTC/DJED",
      percentage: 99,
    },
  ];

  const filterQuery =
    query != ""
      ? token.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        })
      : token;
  return (
    <>
      <div className=" font-normal  w-full component-color-2 flex flex-col gap-6 p-6 rounded-2xl">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-4">
            <h1 className={`text-white text-base xl:text-xl font-medium`}>
              Select Liquidity Pool
            </h1>
          </div>
        </div>
        <div className="relative border border-gray-500 flex w-full sm:w-auto items-center rounded-lg">
          <AiOutlineSearch className=" text-gray-400 w-8 h-8 ml-2 " />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search token by name"
            className=" placeholder:text-gray-400 w-full text-sm p-3 bg-transparent outline-none rounded-lg"
          />
        </div>
        <ul className=" space-y-4">
          {filterQuery.map((item) => {
            return (
              <li
                key={item.name}
                onClick={() => {
                  setSelectedToken(item);
                  setShowComponent("view-1");
                }}
                className="flex cursor-pointer text-base justify-between p-2 py-4 rounded-lg border-2 border-transparent active:border-cyan-500"
              >
                <div className="flex gap-4">
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
                    <h4>{item.name}</h4>
                    <MdCheckCircle className="w-3 h-3" />
                  </span>
                </div>
                <p className="text-gray-300"> {item.percentage}% </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
