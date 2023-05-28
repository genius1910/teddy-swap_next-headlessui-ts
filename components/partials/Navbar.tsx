"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  AiOutlineArrowDown,
  AiOutlineSetting,
  AiOutlineHistory,
} from "react-icons/ai";

const Navbar = () => {
  const [toggler, setToggler] = useState("USD");
  const navMenuList = [
    {
      name: "Dashboard",
      link: "/",
    },
    {
      name: "Trade",
      link: null,
    },
    {
      name: "Liquidity",
      link: "/liquidity",
    },
    {
      name: "Farm",
      link: "/farm",
    },
    {
      name: "LBE",
      link: "/lbe",
    },
  ];

  const pathname = usePathname();

  return (
    <div className="navbar py-5 px-8 flex items-center gap-4 justify-between">
      {/* leftside  */}
      <div className="flex items-center gap-20">
        <Image
          src="/images/logo/primary.png"
          alt="logo"
          width={143}
          height={26}
        />
        <ul className="flex items-center gap-14 text-[1.10rem] font-semibold">
          {navMenuList.map((item, index) => (
            <li key={index}>
              {item.link != null ? (
                <a
                  className={`${
                    item.link === pathname
                      ? "text-white"
                      : "text-neutral-400 transition-all hover:text-neutral-100"
                  }`}
                  href={item.link}
                >
                  {item.name}
                </a>
              ) : (
                <button className="flex group items-center gap-1  text-neutral-400 hover:text-neutral-100 transition-all">
                  {item.name}
                  <span className="component-color rounded-sm">
                    <AiOutlineArrowDown className="w-5 h-5 text-neutral-400 group-hover:text-neutral-100 transition-all" />
                  </span>
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* rightside */}
      <div className="flex  gap-4 font-medium h-full">
        <div
          onClick={() =>
            toggler === "USD" ? setToggler("ADA") : setToggler("USD")
          }
          className="component-color relative cursor-pointer flex justify-evenly items-center gap-1 rounded-md h-full"
        >
          <span
            className={`${
              toggler == "USD" ? "-translate-x-1/2" : "translate-x-1/2"
            } rounded-md small-component-color w-6/12 h-full absolute z-0 transition-all duration-500 ease-in-out`}
          ></span>
          <span className=" py-2.5 px-6 rounded-md relative z-10">USD</span>
          <span className=" py-2.5 px-6 rounded-md relative z-10 ">ADA</span>
        </div>
        <div className="component-color flex items-center gap-6 rounded-md pr-0.5 pl-6 py-0.5">
          <span className="">9,386.5863 ₳</span>
          <div className="small-component-color flex items-center gap-2 rounded-md p-1.5">
            <Image
              src={`/images/assets/wallet-1.png`}
              alt="wallet image"
              width={27}
              height={27}
            />
            <span className=" font-normal">addr1...qx6lyz1h</span>
          </div>
        </div>
        <span className="component-color rounded-md p-2 cursor-pointer text-gray-200 hover:text-white transition-all">
          <AiOutlineHistory className="w-6 h-6" />
        </span>
        <span className="component-color rounded-md p-2 cursor-pointer text-gray-200 hover:text-white transition-all">
          <AiOutlineSetting className="w-6 h-6" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
