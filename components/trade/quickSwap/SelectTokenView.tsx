import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  setShowComponent: (value: string) => void;
  setSelectedToken: (value: {
    name: string;
    imgId: number;
    price: number;
  }) => void;
}

export default function SelectTokenView({
  setShowComponent,
  setSelectedToken,
}: Props) {
  const [query, setQuery] = useState("");
  const token = [
    {
      name: "WMTt",
      imgId: 1,
      price: 0,
    },
    {
      name: "MELDt",
      imgId: 2,
      price: 0,
    },
    {
      name: "cNETAt",
      imgId: 3,
      price: 0,
    },
    {
      name: "HOSkyt",
      imgId: 4,
      price: 0,
    },
    {
      name: "GENSt",
      imgId: 5,
      price: 0,
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
              Select a token
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
                className="flex cursor-pointer text-sm justify-between p-2 rounded-lg border-2 border-transparent active:border-cyan-500"
              >
                <div className="flex gap-4">
                  <Image
                    src={`/images/assets/token-${item.imgId}.png`}
                    width={35}
                    height={35}
                    alt="Token image"
                  />
                  <p>
                    <h2>{item.name}</h2>
                    <p className=" text-gray-400 text-xs">{item.name}</p>
                  </p>
                </div>
                <p> {item.price} </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
