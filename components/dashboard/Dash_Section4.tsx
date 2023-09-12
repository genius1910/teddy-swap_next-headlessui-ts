import Image from "next/image";
import React from "react";

const Dash_Section4 = () => {
  return (
    <section
      id="dash-section-4"
      className="max-w-[1152px] mx-auto xl:zoom-80 2xl:zoom-100 px-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-4 px-20 max-lg:px-0">
        <div className=" col-span-1 lg:col-span-2 flex flex-col justify-center max-lg:text-center">
          <p className="text-[#ADE1FF] font-semibold text-[15px] leading-[18px]">
            CARDANO TOKENS, AT YOUR FINGERTIPS
          </p>
          <p className="text-[#D6D4C6] font-semibold text-[46px] pt-2 max-xl:text-3xl">
            Stable Swap for Cardano
          </p>
          <p className="mt-4 pr-[50px] max-lg:pr-0 text-[14.8] leading-[21px] font-normal">
            Leverage the power of smart contracts to achieve stable and reliable
            transactions, anytime, anywhere. Say goodbye to excessive volatility
            and enjoy seamless trading with minimal slippage.
          </p>
          <div className="lg:hidden col-span-1 lg:col-span-2 flex items-center justify-center w-full h-full mt-4">
            <Image
              src="/images/assets/quick-swap.svg"
              alt="Quick Swap info"
              width={286}
              height={278}
              className="drop-shadow-2xl"
            />
          </div>
          <button className="mt-5 inline-flex items-center gap-[14px]  font-medium text-sm max-lg:justify-center">
            {"Swap now"}
            <Image
              src={`/images/assets/right-arrow-circle.svg`}
              alt="right arrow"
              width={26}
              height={26}
            />
          </button>
        </div>
        <div className="max-lg:hidden col-span-1 lg:col-span-2 flex items-center justify-center w-full h-full ml-2 max-lg:ml-0">
          <Image
            src="/images/assets/quick-swap.svg"
            alt="Quick Swap info"
            width={286}
            height={278}
            className="drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Dash_Section4;
