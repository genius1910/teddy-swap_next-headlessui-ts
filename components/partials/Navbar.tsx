"use client";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  AiOutlineArrowDown,
  AiOutlineSetting,
  AiOutlineHistory,
  AiOutlineArrowUp,
} from "react-icons/ai";
import MobileMenu from "./navbar/MobileMenu";
import Link from "next/link";
const QuickSwapPopup = dynamic(() => import("../trade/QuickSwapPopup"), {
  ssr: false,
});
import dynamic from "next/dynamic";
import WalletList from "./navbar/WalletList";
import SettingsPopup from "./navbar/SettingsPopup";
import ConnectedWallet from "./navbar/ConnectedWallet";
import { useRouter } from "next/navigation";
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
  {
    name: "Trading Competition",
    link: "#",
  },
];

const Navbar = () => {
  const [toggler, setToggler] = useState("USD");
  const [hydration, setHydration] = useState(false);
  const [wallet, setWallet] = useState<{ img: string; name: string } | null>(
    null
  );

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setHydration(true);
  }, []);

  return (
    <div className="navbar-color relative z-50 py-3 2xl:py-5 px-8 flex items-center gap-4 justify-between">
      {/* leftside  */}

      {/* mobile menu  */}
      <MobileMenu
        wallet={wallet}
        setWallet={setWallet}
        toggler={toggler}
        setToggler={setToggler}
      />
      {/* desktop menu  */}
      <div className="hidden xl:flex items-center gap-10 2xl:gap-20">
        <Image
          src="/images/logo/primary.png"
          alt="logo"
          width={143}
          height={26}
          className="hidden xl:block"
        />
        <ul className="flex items-center gap-8 2xl:gap-14 text-sm 2xl:text-[1.10rem] font-semibold">
          {navMenuList.map((item, index) => (
            <li key={index}>
              {item.link != "/trade" ? (
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
              ) : (
                <div className="flex items-center gap-1 ">
                  <Link href={item.link} legacyBehavior>
                    <a className="hover:text-neutral-100 text-neutral-400 transition-all">
                      {item.name}
                    </a>
                  </Link>
                  {/* quick swap popup  */}
                  {hydration && (
                    <Popover>
                      {({ open }) => (
                        <>
                          <Popover.Button className=" rounded-sm group outline-none component-color">
                            {!open ? (
                              <AiOutlineArrowDown className="w-5 h-5 outline-none text-neutral-400 group-hover:text-neutral-100 transition-all" />
                            ) : (
                              <AiOutlineArrowUp className="w-5 outline-none h-5 text-cyan-400 group-hover:text-cyan-300 transition-all" />
                            )}
                          </Popover.Button>
                          <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                          >
                            <Popover.Panel className="absolute outline-none component-color-2 left-[10.5rem] rounded-2xl z-50 mt-8 -translate-x-1/2 transform w-screen max-w-sm 2xl:max-w-md">
                              {({ close }) => <QuickSwapPopup close={close} />}
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* rightside */}
      <div className="hidden xl:flex text-sm 2xl:text-base gap-2 2xl:gap-4 font-medium h-full ">
        {/* toggle button  */}
        <div
          onClick={() =>
            toggler === "USD" ? setToggler("ADA") : setToggler("USD")
          }
          className="component-color relative cursor-pointer flex justify-evenly items-center gap-1 rounded-md h-auto"
        >
          <span
            className={`${
              toggler == "USD" ? "-translate-x-1/2" : "translate-x-1/2"
            } rounded-md small-component-color w-6/12 h-full absolute z-0 transition-all duration-500 ease-in-out`}
          ></span>
          <span className="h-full 2xl:py-2 px-4 2xl:px-6 rounded-md relative z-10">
            USD
          </span>
          <span className="h-full 2xl:py-2 px-4 2xl:px-6 rounded-md relative z-10 ">
            ADA
          </span>
        </div>

        {/* wallet connections */}
        {wallet == null ? (
          <Popover className="h-auto">
            {({ open }) => (
              <>
                <Popover.Button className=" group outline-none primary-button px-4 py-2 rounded-lg h-full ">
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
                  <Popover.Panel className="absolute outline-none component-color-2 rounded-2xl z-50 mt-8 right-0 transform w-screen max-w-sm 2xl:max-w-md">
                    {({ close }) => (
                      <WalletList close={close} setWallet={setWallet} />
                    )}
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ) : (
          <div className="component-color h-auto flex items-center gap-6 rounded-md pr-0.5 pl-4 2xl:pl-6 py-0.5">
            <span className="">9,386.5863 ₳</span>
            <Popover>
              {({ open }) => (
                <>
                  <Popover.Button className=" small-component-color flex items-center gap-2 rounded-md p-1 2xl:p-1.5 ">
                    <Image
                      src={wallet?.img}
                      alt="wallet image"
                      width={27}
                      height={27}
                    />
                    <span className=" font-normal">addr1...qx6lyz1h</span>
                  </Popover.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Popover.Panel className="absolute outline-none component-color-2 rounded-2xl z-50 mt-8 right-0 transform w-screen max-w-sm 2xl:max-w-md">
                      {({ close }) => (
                        <ConnectedWallet
                          close={close}
                          setWallet={setWallet}
                          wallet={wallet}
                        />
                      )}
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
          className={`${
            pathname == "/history" && "bg-gray-500"
          } component-color rounded-md p-2 2xl:p-2 cursor-pointer text-gray-200 hover:text-white transition-all`}
        >
          <AiOutlineHistory className="w-5 h-5 2xl:w-6 2xl:h-6" />
        </button>

        {/* settings  */}
        <Popover className={` h-auto`}>
          {({ open }) => (
            <>
              <Popover.Button className="h-full group component-color rounded-md p-2 2xl:p-2 cursor-pointer text-gray-200 hover:text-white transition-all ">
                <AiOutlineSetting className="w-5 h-5 2xl:w-6 2xl:h-6" />
              </Popover.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel className="absolute outline-none component-color-2 rounded-2xl z-50 mt-8 right-0 transform w-screen max-w-sm 2xl:max-w-md">
                  {({ close }) => <SettingsPopup close={close} />}
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
      {/* in mobile version only this logo will apear  */}
      <Image
        src="/images/logo/small-primary.png"
        alt="logo"
        width={40}
        height={40}
        className="xl:hidden"
      />
    </div>
  );
};

export default Navbar;
