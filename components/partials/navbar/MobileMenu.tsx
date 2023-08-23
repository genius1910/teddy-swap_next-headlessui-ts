"use client";
import QuickSwapPopup from "@/components/trade/QuickSwapPopup";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment, useState } from "react";
import {
  AiOutlineArrowDown,
  AiOutlineSetting,
  AiOutlineHistory,
  AiOutlineMenu,
  AiOutlineArrowUp,
} from "react-icons/ai";
import ConnectedWallet from "./ConnectedWallet";
import WalletLists from "./WalletList";
import { HiXMark } from "react-icons/hi2";
import useAuthenticate from "@/context/mobx/useAuthenticate";
const navMenuList = [
  {
    name: "Dashboard",
    link: "/",
  },
  {
    name: "Trade",
    link: "/trade",
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
  const authenticate = useAuthenticate;
  const wallet = authenticate.walletConnected;

  return (
    <Popover className="xl:hidden">
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
            <Popover.Panel className="fixed inset-0 whitespace-nowrap navbar-color border border-gray-900 rounded-md z-10 w-screen min-h-screen transform p-4 md:p-6">
              {({ close }) => {
                return (
                  <div className="flex flex-col gap-6">
                    <button
                      className="relative z-10 w-auto float-right"
                      onClick={() => close()}
                    >
                      <HiXMark className="w-6 h-6" />
                    </button>
                    <div className="flex flex-wrap items-start  text-sm gap-2 font-medium h-full">
                      <div
                        onClick={() =>
                          toggler === "USD"
                            ? setToggler("ADA")
                            : setToggler("USD")
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
                      {wallet == null ? (
                        <Popover className="h-auto w-full">
                          {({ open }) => (
                            <>
                              <Popover.Button
                                id="connect-wallet"
                                className="w-full group outline-none primary-button px-4 py-2 rounded-lg h-full "
                              >
                                Connect Wallet
                              </Popover.Button>
                              <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                              >
                                <Popover.Panel className="fixed outline-none component-color-2 rounded-2xl z-50 mt-8 right-0 transform w-full -top-5 2xl:max-w-md">
                                  {({ close }) => <WalletLists close={close} />}
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      ) : (
                        <div className="component-color w-full flex items-center justify-between gap-6 rounded-md pr-0.5 pl-4 2xl:pl-6 py-0.5">
                          <span className="">9,386.5863 ₳</span>
                          <Popover>
                            {({ open }) => (
                              <>
                                <Popover.Button className="w-max small-component-color flex items-center gap-2 rounded-md p-1 2xl:p-1.5">
                                  <Image
                                    src={wallet?.img}
                                    alt="wallet image"
                                    width={27}
                                    height={27}
                                  />
                                  <span className=" font-normal">
                                    addr1...qx6lyz1h
                                  </span>
                                </Popover.Button>
                                <Transition
                                  enter="transition duration-100 ease-out"
                                  enterFrom="transform scale-95 opacity-0"
                                  enterTo="transform scale-100 opacity-100"
                                  leave="transition duration-75 ease-out"
                                  leaveFrom="transform scale-100 opacity-100"
                                  leaveTo="transform scale-95 opacity-0"
                                >
                                  <Popover.Panel className="fixed w-max outline-none component-color-2 rounded-2xl z-50 right-0 top-2 mb-8 transform 2xl:max-w-md">
                                    {({ close }) => (
                                      <ConnectedWallet close={close} />
                                    )}
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        </div>
                      )}
                      <span className="component-color rounded-md p-2 2xl:p-2 cursor-pointer text-gray-200 hover:text-white transition-all">
                        <AiOutlineHistory className="w-5 h-5 2xl:w-6 2xl:h-6" />
                      </span>
                      <span className="component-color rounded-md p-2 2xl:p-2 cursor-pointer text-gray-200 hover:text-white transition-all">
                        <AiOutlineSetting className="w-5 h-5 2xl:w-6 2xl:h-6" />
                      </span>
                    </div>
                    <ul className="flex flex-col gap-8 2xl:gap-14 text-sm 2xl:text-[1.10rem] font-semibold">
                      {navMenuList.map((item, index) => (
                        <li onClick={() => close()} key={index}>
                          <Link legacyBehavior href={item.link}>
                            <a
                              className={`${
                                item.link === pathname
                                  ? "text-white"
                                  : "text-neutral-400 transition-all hover:text-neutral-100"
                              }`}
                            >
                              {item.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default MobileMenu;
