import React from "react";
import TimeGroupButton from "../TimeGroupButton";
import Image from "next/image";
import User_RecentTransactions from "./User_RecentTransactions";

const User_Rightside = () => {
  const movers = [
    {
      img: "/images/assets/teddy.png",
      name: "Tedy",
      subname: "TeddySwap",
      price: "0.012",
      up_price: "0.012 (+12.34%)",
    },
    {
      img: "/images/assets/teddy.png",
      name: "Tedy",
      subname: "TeddySwap",
      price: "0.012",
      up_price: "0.012 (+12.34%)",
    },
    {
      img: "/images/assets/teddy.png",
      name: "Tedy",
      subname: "TeddySwap",
      price: "0.012",
      up_price: "0.012 (+12.34%)",
    },
    {
      img: "/images/assets/teddy.png",
      name: "Tedy",
      subname: "TeddySwap",
      price: "0.012",
      up_price: "0.012 (+12.34%)",
    },
    {
      img: "/images/assets/teddy.png",
      name: "Tedy",
      subname: "TeddySwap",
      price: "0.012",
      up_price: "0.012 (+12.34%)",
    },
    {
      img: "/images/assets/teddy.png",
      name: "Tedy",
      subname: "TeddySwap",
      price: "0.012",
      up_price: "0.012 (+12.34%)",
    },
  ];
  return (
    <div className="flex flex-col items-center w-full 2xl:w-auto mt-10 2xl:mt-4">
      <TimeGroupButton />
      <div className="list-component-color w-full 2xl:w-96 rounded-2xl mt-9">
        <h2 className="p-6">Your Top Movers</h2>
        <ul className="flex flex-col">
          {movers.map((item, i) => {
            return (
              <li
                key={item.name + i}
                className="flex last:rounded-b-2xl justify-between px-4 py-2 my-1 last:mb-0 component-color"
              >
                <div className="flex gap-2 items-center">
                  <Image
                    className=" rounded-full"
                    src={item.img}
                    alt="Movers"
                    width={36}
                    height={36}
                  />
                  <div>
                    <h1 className="text-sm uppercase font-medium">
                      {item.name}
                    </h1>
                    <p className="text-[0.7rem] text-xs">{item.subname}</p>
                  </div>
                </div>
                <div className="text-right text-sm">
                  <p>${item.price}</p>
                  <p className=" text-[#16A34A] text-xs">+${item.up_price}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <User_RecentTransactions />
    </div>
  );
};

export default User_Rightside;
