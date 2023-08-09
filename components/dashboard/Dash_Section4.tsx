import Image from "next/image";
import React from "react";

const Dash_Section4 = () => {
  return (
    <section id="dash-section-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 text-base 2xl:text-2xl items-center py-24 max-2xl:pt-10 md:py-36 2xl:py-44">
        <div className=" col-span-1 lg:col-span-2 flex flex-col gap-7 2xl:gap-10">
          <h3 className="l-s-heading text-[#ADE1FF]">
            CARDANO TOKENS, AT YOUR FINGERTIPS
          </h3>
          <h1 className="l-heading">Stable Swap for Cardano</h1>
          <h4 className="l-subtitle">
            Leverage the power of smart contracts to achieve stable and reliable
            transactions, anytime, anywhere. Say goodbye to excessive volatility
            and enjoy seamless trading with minimal slippage.
          </h4>
          <div className="lg:hidden col-span-1 lg:col-span-2 flex items-center justify-center w-full h-full">
            <Image
              src="/images/assets/quick-swap.svg"
              alt="Quick Swap info"
              width={520}
              height={520}
              className=" w-full lg:w-7/12 drop-shadow-2xl"
            />
          </div>
          <button className="max-md:hidden mt-2 inline-flex items-center gap-4 font-medium">
            {"Swap now"}
            <Image
              src={`/images/assets/right-arrow-circle.svg`}
              alt="right arrow"
              width={40}
              height={40}
            />
          </button>
        </div>
        <div className="max-lg:hidden col-span-1 lg:col-span-2 flex items-center justify-center w-full h-full">
          <Image
            src="/images/assets/quick-swap.svg"
            alt="Quick Swap info"
            width={520}
            height={520}
            className=" w-full lg:w-7/12 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Dash_Section4;
