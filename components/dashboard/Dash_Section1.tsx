import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsDiscord, BsMedium, BsTelegram, BsTwitter } from "react-icons/bs";

const Dash_Section1 = () => {
  return (
    <section id="dash-section-1">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 text-lg 2xl:text-2xl items-center py-16 max-sm:pb-6 md:py-28 2xl:py-36">
        <div className=" col-span-1 lg:col-span-2 flex flex-col gap-6 2xl:gap-10">
          <h1 className="l-heading">
            Decentralized Stablecoin Exchange on Cardano
          </h1>
          <h4 className="l-subtitle">
            A scalable decentralized exchange and automated liquidity provision
            protocol for stablecoins.
          </h4>
          <Link
            href={`https://twitter.com/TeddySwap/status/1684620004350738432?s=20`}
          >
            <button className="l-button mt-2">{"What's New"}</button>
          </Link>
        </div>
        <div className="max-lg:hidden col-span-1 relative">
          <Image
            src="/images/assets/swap-tokens-modal.svg"
            alt="Swap tokens"
            width={520}
            height={520}
            className="drop-shadow-2xl"
          />
        </div>
      </div>
      <div className="flex max-sm:flex-col whitespace-nowrap max-sm:items-start justify-end w-full gap-6">
        <h5>Join Our Community:</h5>
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
