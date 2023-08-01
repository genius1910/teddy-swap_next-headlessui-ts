import Image from "next/image";
import React from "react";
import { BsDiscord, BsTelegram, BsTwitter } from "react-icons/bs";

const Dash_Section1 = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 text-lg 2xl:text-2xl  py-16 md:py-28 2xl:py-36">
        <div className=" col-span-1 lg:col-span-2 flex flex-col gap-6">
          <h1 className="text-5xl 2xl:text-7xl font-medium">
            Decentralized Stablecoin Exchange on Cardano
          </h1>
          <h4 className=" font-light max-w-2xl tracking-wide">
            A scalable decentralized exchange and automated liquidity provision
            protocol for stablecoins.
          </h4>
          <button className="primary-button px-12 py-4 w-fit max-sm:w-full">
            {"What's New"}
          </button>
        </div>
        <div className="col-span-1">
          <Image
            src="/images/assets/swap-tokens-modal.svg"
            alt="Swap tokens"
            width={520}
            height={520}
          />
        </div>
      </div>
      <div className="flex items-center lg:justify-end w-full gap-6">
        <h5>Join Our Community:</h5>
        <BsTwitter className="w-5 h-5 text-[#ade1ff]" />
        <BsTelegram className="w-5 h-5 text-[#ade1ff]" />
        <BsDiscord className="w-5 h-5 text-[#ade1ff]" />
      </div>
    </section>
  );
};

export default Dash_Section1;
