import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsDiscord, BsMedium, BsTelegram, BsTwitter } from "react-icons/bs";

const Dash_Section1 = () => {
  return (
    <section
      id="dash-section-1"
      className="max-w-[1152px] mx-auto xl:zoom-80 2xl:zoom-100 px-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center md:pt-24 2xl:pt-52">
        <div className=" col-span-1 lg:col-span-2 flex flex-col max-w-[656px] max-lg:justify-center max-lg:items-center max-lg:max-w-full ">
          <p className="text-[50px] font-semibold leading-[60px] text-[#D6D4C6] max-lg:text-3xl max-lg:text-center">
            Stablecoin Decentralized Exchange on Cardano
          </p>
          <p className="pt-6 text-lg font-normal max-w-[540px] pr-20 max-lg:text-center max-lg:px-10">
            A scalable decentralized exchange and automated liquidity provision
            protocol for Cardano stablecoins.
          </p>
          <Link
            href={`https://twitter.com/TeddySwap/status/1684620004350738432?s=20`}
            className="pt-8"
          >
            <button className="l-button mt-2 text-base font-medium">
              {"What's New"}
            </button>
          </Link>
        </div>
        <div className="max-lg:hidden max-lg:justify-center max-lg:items-center flex col-span-1 relative ml-7 max-lg:ml-0">
          <Image
            src="/images/assets/swap-tokens-modal.svg"
            alt="Swap tokens"
            width={342}
            height={350}
            className="drop-shadow-2xl"
          />
        </div>
      </div>
      <div className="flex whitespace-nowrap max-sm:items-start justify-end w-full gap-6 mt-28 max-lg:mt-10 max-md:justify-center">
        <p className=" text-sm font-medium">Join Our Community:</p>
        <div className="flex items-center max-sm:justify-start lg:justify-end gap-6">
          <Link legacyBehavior href={"https://twitter.com/TeddySwap"}>
            <a>
              <BsTwitter className="w-5 h-5 text-[#ade1ff]" />
            </a>
          </Link>
          <Link legacyBehavior href={"https://t.me/teddyswap"}>
            <a>
              <BsTelegram className="w-5 h-5 text-[#ade1ff]" />
            </a>
          </Link>
          <Link legacyBehavior href={"https://discord.gg/GRvcAnqtZG"}>
            <a>
              <BsDiscord className="w-5 h-5 text-[#ade1ff]" />
            </a>
          </Link>
          <Link legacyBehavior href={"https://medium.com/@TeddySwapDEX"}>
            <a>
              <BsMedium className="w-5 h-5 text-[#ade1ff]" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Dash_Section1;
