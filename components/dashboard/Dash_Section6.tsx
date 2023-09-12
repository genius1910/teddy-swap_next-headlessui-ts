import Image from "next/image";
import React from "react";

const Dash_Section6 = () => {
  return (
    <section
      id="dash-section-6"
      className="max-w-[1152px] mx-auto xl:zoom-80 2xl:zoom-100 px-4"
    >
      <div className="flex flex-col justify-center items-center text-center gap-5 2xl:gap-10 max-lg:pt-16">
        <p className="text-[#ADE1FF] font-medium text-[15px] leading-[18px]">
          SECURITY
        </p>
        <p className="text-[#D6D4C6] font-semibold text-[46px] leading-[56px] max-xl:text-3xl max-w-[524px]">
          Making DeFi Secure for everyone
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 lg:gap-24 text-lg 2xl:text-2xl items-center py-12 max-lg:pt-16 md:py-24 2xl:py-36 mr-20 max-lg:mr-0">
        <div className="max-lg:hidden col-span-1 lg:col-span-2 relative flex items-center justify-center lg:justify-end ml-4">
          <Image
            src="/images/assets/global.svg"
            alt="Global image"
            width={412}
            height={414}
            className="drop-shadow-2xl"
          />
        </div>
        <div className=" col-span-1 lg:col-span-2 flex flex-col justify-center">
          <div>
            <p className=" text-[15px] leading-[18px] font-semibold text-[#ADE1FF] mb-3">
              Batcher Protocol
            </p>
            <p className=" text-[14.8px] leading-[21px] font-normal text-[#E2E2E2]">
              Deconstruct the walled gardens of classic financial institutions
              by becoming an owner of the TeddySwap protocol.
            </p>
          </div>
          <div className="mt-[45px]">
            <p className=" text-[15px] leading-[18px] font-semibold text-[#ADE1FF] mb-3">
              Hosting Infrastructure
            </p>
            <p className=" text-[14.8px] leading-[21px] font-normal text-[#E2E2E2]">
              Level up beyond constant product pools and let your capital work
              for you by providing liquidity to historically stable and more
              predictable assets.
            </p>
          </div>
          <div className="mt-[30px]">
            <p className=" text-[15px] leading-[18px] font-semibold text-[#ADE1FF] mb-3">
              TeddySwap vaults
            </p>
            <p className=" text-[14.8px] leading-[21px] font-normal text-[#E2E2E2]">
              Earn our platform token TEDY by providing liquidity to the
              available stablecoin pairs on our decentralized exchange.
            </p>
          </div>
        </div>
        <div className="lg:hidden col-span-1 lg:col-span-2 relative flex items-center justify-center lg:justify-end">
          <Image
            src="/images/assets/global.svg"
            alt="Global image"
            width={420}
            height={420}
            className="drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Dash_Section6;
