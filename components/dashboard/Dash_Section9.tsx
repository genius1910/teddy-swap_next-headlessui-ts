import Link from "next/link";
import React from "react";
import { BsDiscord, BsMedium, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Dash_Section9 = () => {
  return (
    <section
      id="dash-section-9"
      className="py-16 md:py-20 2xl:py-28 max-w-[1152px] mx-auto xl:zoom-80 2xl:zoom-100 px-4"
    >
      <div className="flex flex-col items-center justify-center mx-auto text-center w-full max-w-6xl">
        <p className="text-4 leading-[18px] font-semibold text-[#3DFFDC]">
          A shared journey
        </p>
        <p className="text-[#D6D4C6] text-[46px] leading-[52px] font-semibold max-w-[860px] max-lg:text-3xl mt-6">
          Together, we drive financial freedom and opportunity to all
        </p>
        <p className="text-[#D6D4C6] text-[15px] leading-[21px] font-normal max-w-[516px] mt-6">
          Join a dedicated community and shape the future of finance -
          decentralized, non-custodial and effiecient.
        </p>
        <div className="flex items-center justify-center w-full mt-10 gap-5">
          <Link legacyBehavior href={"https://twitter.com/TeddySwap"}>
            <a>
              <BsTwitter className="w-10 h-10 text-white rounded-full border-2 border-[#1c64b7] p-[6px]" />
            </a>
          </Link>
          <Link legacyBehavior href={"https://t.me/teddyswap"}>
            <a>
              <FaTelegramPlane className="w-10 h-10 text-white rounded-full border-2 border-[#1c64b7] p-[6px]" />
            </a>
          </Link>
          <Link legacyBehavior href={"https://discord.gg/GRvcAnqtZG"}>
            <a>
              <BsDiscord className="w-10 h-10 text-white rounded-full border-2 border-[#1c64b7] p-[6px]" />
            </a>
          </Link>
          <Link legacyBehavior href={"https://medium.com/@TeddySwapDEX"}>
            <a>
              <BsMedium className="w-10 h-10 text-white rounded-full border-2 border-[#1c64b7] p-[6px]" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Dash_Section9;
