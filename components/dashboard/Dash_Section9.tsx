import Link from "next/link";
import React from "react";
import { BsDiscord, BsMedium, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Dash_Section9 = () => {
  return (
    <section id="dash-section-9" className="py-24 md:py-36 2xl:py-44 w-full">
      <div className="flex flex-col items-center justify-center gap-10 mx-auto text-center w-full max-w-6xl">
        <h3 className="l-s-heading uppercase">A shared journey</h3>
        <h1 className="l-heading font-semibold">
          Together, we drive financial freedom and opportunity to all
        </h1>
        <h4 className="l-subtitle max-w-3xl text-base 2xl:text-2xl ">
          Join a dedicated community and shapethe future of finance -
          decentralized, non-custodial and effiecient.
        </h4>
        <div className="flex items-center justify-center w-full gap-6">
          <Link legacyBehavior href={"https://twitter.com/TeddySwap"}>
            <a>
              <BsTwitter className="w-14 h-14 text-white rounded-full border-2 border-[#1c64b7] p-3" />
            </a>
          </Link>
          <Link legacyBehavior href={"https://t.me/teddyswap"}>
            <a>
              <FaTelegramPlane className="w-14 h-14 text-white rounded-full border-2 border-[#1c64b7] p-3" />
            </a>
          </Link>
          <Link legacyBehavior href={"https://discord.gg/GRvcAnqtZG"}>
            <a>
              <BsDiscord className="w-14 h-14 text-white rounded-full border-2 border-[#1c64b7] p-3" />
            </a>
          </Link>
          <Link legacyBehavior href={"https://medium.com/@TeddySwapDEX"}>
            <a>
              <BsMedium className="w-14 h-14 text-white rounded-full border-2 border-[#1c64b7] p-3" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Dash_Section9;
