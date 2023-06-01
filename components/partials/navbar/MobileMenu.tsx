"use client";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { Fragment, useState } from "react";
import {
  AiOutlineArrowDown,
  AiOutlineSetting,
  AiOutlineHistory,
  AiOutlineMenu,
} from "react-icons/ai";
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

interface Props {
  toggler: string;
  setToggler: (value: string) => void;
}
const MobileMenu = ({ toggler, setToggler }: Props) => {
  const pathname = usePathname();

  return (
    <Popover className="xl:hidden relative">
      {({ open }) => (
        <>
          <Popover.Button className={` outline-none`}>
            <AiOutlineMenu className={` w-5 h-5`} />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute whitespace-nowrap navbar-color border border-gray-900 rounded-md z-10 mt-3 max-w-sm transform px-4 py-3">
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-start  text-sm gap-2 font-medium h-full">
                  <div
                    onClick={() =>
                      toggler === "USD" ? setToggler("ADA") : setToggler("USD")
                    }
                    className="component-color w-full relative cursor-pointer flex justify-evenly items-center gap-1 rounded-md h-full"
                  >
                    <span
                      className={`${
                        toggler == "USD"
                          ? "-translate-x-1/2"
                          : "translate-x-1/2"
                      } rounded-md small-component-color w-6/12 h-full absolute z-0 transition-all duration-500 ease-in-out`}
                    ></span>
                    <span className="py-[0.55rem] 2xl:py-2 px-4 2xl:px-6 rounded-md relative z-10">
                      USD
                    </span>
                    <span className="py-[0.55rem] 2xl:py-2 px-4 2xl:px-6 rounded-md relative z-10 ">
                      ADA
                    </span>
                  </div>

                  <div className="component-color flex items-center gap-6 rounded-md pr-0.5 pl-4 2xl:pl-6 py-0.5">
                    <span className="">9,386.5863 ₳</span>
                    <div className="small-component-color w-max flex items-center gap-2 rounded-md p-1 2xl:p-1.5">
                      <Image
                        src={`/images/assets/wallet-1.png`}
                        alt="wallet image"
                        width={27}
                        height={27}
                      />
                      <span className=" font-normal">addr1...qx6lyz1h</span>
                    </div>
                  </div>
                  <span className="component-color rounded-md p-2 2xl:p-2 cursor-pointer text-gray-200 hover:text-white transition-all">
                    <AiOutlineHistory className="w-5 h-5 2xl:w-6 2xl:h-6" />
                  </span>
                  <span className="component-color rounded-md p-2 2xl:p-2 cursor-pointer text-gray-200 hover:text-white transition-all">
                    <AiOutlineSetting className="w-5 h-5 2xl:w-6 2xl:h-6" />
                  </span>
                </div>
                <ul className="flex flex-col gap-8 2xl:gap-14 text-sm 2xl:text-[1.10rem] font-semibold">
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
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default MobileMenu;
