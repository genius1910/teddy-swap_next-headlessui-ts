import Image from "next/image";
import React from "react";

const Dash_Section6 = () => {
  return (
    <section id="dash-section-6">
      <div className="flex flex-col justify-center items-center text-center gap-6 2xl:gap-10 mt-10">
        <h3 className="l-section-heading">SECURITY</h3>
        <h1 className="l-xl-heading">Making DeFi Secure for everyone</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 lg:gap-24 text-lg 2xl:text-2xl items-center py-32 md:py-44 2xl:py-60">
        <div className="max-lg:hidden col-span-1 lg:col-span-2 relative flex items-center justify-center lg:justify-end">
          <Image
            src="/images/assets/global.svg"
            alt="Global image"
            width={520}
            height={520}
            className="w-10/12 drop-shadow-2xl"
          />
        </div>
        <div className=" col-span-1 lg:col-span-2 flex flex-col gap-14">
          <div>
            <h3 className="l-s-heading mb-2 text-[#ADE1FF]">
              Batcher Protocol
            </h3>
            <h4 className="l-subtitle2">
              Deconstruct the walled gardens of classic financial institutions
              by becoming an owner of the TeddySwap protocol.
            </h4>
          </div>
          <div>
            <h3 className="l-s-heading mb-2 text-[#ADE1FF]">
              Hosting Infrastructure
            </h3>
            <h4 className="l-subtitle2">
              Level up beyond constant product pools and let your capital work
              for you by providing liquidity to historically stable and more
              predictable assets.
            </h4>
          </div>
          <div>
            <h3 className="l-s-heading mb-2 text-[#ADE1FF]">
              TeddySwap vaults
            </h3>
            <h4 className="l-subtitle2">
              Earn our platform token TEDY by providing liquidity to the
              available stablecoin pairs on our decentralized exchange.
            </h4>
          </div>
        </div>
        <div className="lg:hidden col-span-1 lg:col-span-2 relative flex items-center justify-center lg:justify-end">
          <Image
            src="/images/assets/global.svg"
            alt="Global image"
            width={520}
            height={520}
            className="w-10/12 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Dash_Section6;
