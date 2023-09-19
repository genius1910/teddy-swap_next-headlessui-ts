"use client";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import {
  AiOutlineArrowDown,
  AiOutlineSetting,
  AiOutlineHistory,
  AiOutlineArrowUp,
} from "react-icons/ai";
import MobileMenu from "./navbar/MobileMenu";
import Link from "next/link";
import WalletList from "./navbar/WalletList";
import SettingsPopup from "./navbar/SettingsPopup";
import ConnectedWallet from "./navbar/ConnectedWallet";
import { useRouter } from "next/navigation";
import useAuthenticate from "@/context/mobx/useAuthenticate";
import { observer } from "mobx-react-lite";

import QuickSwapPopup from "../trade/QuickSwapPopup";
import { WALLET_IDS } from "@/wallets/base";
import { connetingWallet } from "@/hook/listWallets";

const navMenuList = [
  {
    name: "Dashboard",
    link: "/dashboard",
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

const Navbar = () => {
  const wrapperRef = useRef(null);

  const [toggler, setToggler] = useState("USD");
  const [hydration, setHydration] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setHydration(true);
    const getWallet = async () => {
      if (typeof window != undefined && localStorage.getItem('wallet')) {
        const id = localStorage.getItem('wallet');
        connetingWallet(id as WALLET_IDS);
      }
    }
    getWallet();
  }, []);

  const authenticate = useAuthenticate;
  const wallet = authenticate.walletConnected;

  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(wrapperRef);

  return (
    <header className="navbar-color mx-auto">
      <div
        className={`${pathname != "/" ? "max-w-[1880px] xl:py-2" : ""
          } justify-between mx-auto relative z-50 py-4 2xl:py-4 px-4 flex items-center gap-4`}
      >
        {/* mobile menu  */}
        {pathname != "/" && (
          <MobileMenu toggler={toggler} setToggler={setToggler} />
        )}
        {/* desktop menu  */}
        <div className="hidden xl:flex items-center gap-12">
          <Link legacyBehavior href="/" className="mr-8">
            <a>
              <Image
                src="/images/logo/primary.png"
                alt="logo"
                width={143}
                height={26}
                className="hidden 2xl:block cursor-pointer"
              />
              <Image
                src="/images/logo/primary.png"
                alt="logo"
                width={110}
                height={26}
                className="hidden xl:block 2xl:hidden cursor-pointer"
              />
            </a>
          </Link>
          <ul className="flex items-center gap-12 2xl:text-base font-semibold">
            {pathname != "/" &&
              navMenuList.map((item, index) => {
                return (
                  <li key={index}>
                    {item.link != "/trade" ? (
                      <Link legacyBehavior href={item.link}>
                        <a
                          className={`${item.link == pathname
                            ? "text-white"
                            : "text-neutral-400 transition-all hover:text-neutral-100"
                            }`}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ) : (
                      <div className="flex items-center gap-1 ">
                        <Link href={item.link} legacyBehavior>
                          <a
                            className={`${item.link == pathname
                              ? "text-white"
                              : "text-neutral-400 transition-all hover:text-neutral-100"
                              }`}
                          >
                            {item.name}
                          </a>
                        </Link>
                        {/* quick swap popup  */}
                        {hydration && (
                          <div className=" relative" ref={wrapperRef}>
                            {!open ? (
                              <AiOutlineArrowDown
                                className="2xl:w-4 2xl:h-4 w-3 h-3 outline-none text-neutral-400 group-hover:text-neutral-100 transition-all"
                                onClick={() => setOpen(true)}
                              />
                            ) : (
                              <AiOutlineArrowUp
                                className="2xl:w-4 2xl:h-4 w-3 h-3 outline-none text-cyan-400 group-hover:text-cyan-300 transition-all"
                                onClick={() => setOpen(false)}
                              />
                            )}
                            <div
                              className={`absolute top-3 w-[440px] outline-none rounded-2xl z-50 mt-8 bg-black max-w-sm zoom-80 2xl:zoom-100 2xl:max-w-md ${open ? " block" : "hidden"
                                }`}
                            >
                              <div className=" relative w-full h-full">
                                <div className=" absolute top-0 bottom-0 left-0 right-0 component-color-23 rounded-2xl" />
                                <QuickSwapPopup close={() => setOpen(false)} />
                              </div>
                            </div>
                          </div>
                          // <Popover>
                          //   {({ open }) => (
                          //     <>
                          //       <Popover.Button className="flex flex-row justify-center items-center rounded-sm group outline-none component-color">
                          //         {!open ? (
                          //           <AiOutlineArrowDown className="2xl:w-4 2xl:h-4 w-3 h-3 outline-none text-neutral-400 group-hover:text-neutral-100 transition-all" />
                          //         ) : (
                          //           <AiOutlineArrowUp className="2xl:w-4 2xl:h-4 w-3 h-3 outline-none text-cyan-400 group-hover:text-cyan-300 transition-all" />
                          //         )}
                          //       </Popover.Button>
                          //       <Transition
                          //         enter="transition duration-100 ease-out"
                          //         enterFrom="transform scale-95 opacity-0"
                          //         enterTo="transform scale-100 opacity-100"
                          //         leave="transition duration-75 ease-out"
                          //         leaveFrom="transform scale-100 opacity-100"
                          //         leaveTo="transform scale-95 opacity-0"
                          //       >
                          //         <Popover.Panel className=" absolute outline-none component-color-2 left-[10.5rem] rounded-2xl z-50 mt-8 -translate-x-1/2 transform w-screen max-w-sm zoom-80 2xl:zoom-100 2xl:max-w-md">
                          //           {({ close }) => (
                          //             <QuickSwapPopup close={close} />
                          //           )}
                          //         </Popover.Panel>
                          //       </Transition>
                          //     </>
                          //   )}
                          // </Popover>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
        {/* rightside */}
        {pathname != "/" && (
          <div className="hidden xl:flex text-xs 2xl:text-base gap-2 2xl:gap-4 font-medium h-full ">
            {/* toggle button  */}
            <div
              onClick={() =>
                toggler == "USD" ? setToggler("ADA") : setToggler("USD")
              }
              className="component-color relative cursor-pointer flex justify-center items-center rounded-[8px] h-auto"
            >
              <span
                className={`${toggler == "USD" ? "-translate-x-1/2" : "translate-x-1/2"
                  } absolute small-component-color w-6/12 h-full z-0 transition-all duration-500 ease-in-out rounded-[10px]`}
              ></span>
              <span className="h-full flex justify-center items-center my-auto py-2 px-4 2xl:px-6 rounded-[8px] relative z-10">
                USD
              </span>
              <span className="h-full flex justify-center items-center my-auto py-2 px-4 2xl:px-6 rounded-[8px] relative z-10">
                ADA
              </span>
            </div>

            {/* wallet connections */}
            {wallet == null ? (
              <Popover className="h-auto">
                {({ open }) => (
                  <>
                    <Popover.Button
                      id="connect-wallet"
                      className=" group outline-none secondary-button px-4 py-2 rounded-lg h-full "
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
                      <Popover.Panel className="absolute zoom-80 2xl:zoom-100 outline-none component-color-2 rounded-2xl z-50 mt-8 right-0 transform w-screen max-w-sm 2xl:max-w-md">
                        {({ close }) => <WalletList close={close} />}
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            ) : (
              <div className="component-color h-auto flex items-center gap-6 rounded-md pr-0.5 pl-4 2xl:pl-6 py-0.5">
                <span className="">₳ {wallet.balance}</span>
                <Popover>
                  {({ open }) => (
                    <>
                      <Popover.Button className=" small-component-color flex items-center gap-2 rounded-md p-1 2xl:p-1.5 ">
                        <Image
                          src={wallet?.img}
                          alt="wallet image"
                          width={24}
                          height={24}
                        />
                        <span className=" font-normal">
                          {wallet.address &&
                            wallet.address.substring(0, 3) +
                            "..." +
                            wallet.address.substring(
                              wallet.address.length - 6
                            )}
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
                        <Popover.Panel className="absolute zoom-80 2xl:zoom-100 outline-none component-color-2 rounded-2xl z-50 mt-8 right-0 transform w-screen max-w-sm 2xl:max-w-md">
                          {({ close }) => <ConnectedWallet close={close} />}
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>
            )}

            {/* history  */}
            <button
              onClick={() => router.push("/history")}
              className={`${pathname == "/history" && "bg-gray-500"
                } component-color rounded-md p-2 cursor-pointer text-gray-200 hover:text-white transition-all`}
            >
              <AiOutlineHistory className="w-4 h-4 2xl:w-6 2xl:h-6" />
            </button>

            {/* settings  */}
            <Popover className={` h-auto`}>
              {({ open }) => (
                <>
                  <Popover.Button className="h-full group component-color rounded-md p-2 cursor-pointer text-gray-200 hover:text-white transition-all ">
                    <AiOutlineSetting className="w-4 h-4 2xl:w-6 2xl:h-6" />
                  </Popover.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Popover.Panel className="absolute zoom-80 2xl:zoom-100 outline-none component-color-2 rounded-2xl z-50 2xl:mt-8 mt-4  right-0 transform w-screen max-w-sm 2xl:max-w-md">
                      {({ close }) => <SettingsPopup close={close} />}
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        )}
        {/* in mobile version only this logo will apear  */}
        <Image
          src="/images/logo/primary.png"
          alt="logo"
          width={143}
          height={143}
          className="xl:hidden"
        />
      </div>
    </header>
  );
};

export default observer(Navbar);
