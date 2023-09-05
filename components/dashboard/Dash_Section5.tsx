import Image from "next/image";
import React from "react";

const Dash_Section5 = () => {
  return (
    <section
      id="dash-section-5"
      className="max-w-[1152px] mx-auto xl:zoom-80 2xl:zoom-100 px-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-14 items-center max-lg:pt-16 md:py-20 2xl:pt-[280px] 2xl:pb-64">
        <div className="col-span-1 lg:col-span-2 relative hidden lg:block ml-20 max-lg:ml-0">
          <Image
            src="/images/assets/l-sec5.svg"
            alt="Liquidity Farm image"
            width={476}
            height={240}
            className="drop-shadow-2xl"
          />
        </div>
        <div className=" col-span-1 lg:col-span-2 flex flex-col ml-14 max-lg:ml-0 max-lg:text-center">
          <p className="text-sm font-medium text-[#3DFFDC] pt-4">
            A NEW PERSPECTIVE ON DEFI
          </p>
          <p className="text-[#D6D4C6] font-semibold text-[46px] pt-2 max-xl:text-3xl">
            Best in Class Accessibility
          </p>
          <p className="text-[#D6D4C6] font-normal text-[14.8px] leading-[24px] pr-18 pt-2 max-lg:pr-0">
            Access vital information about your liquidity, farming activity, and
            more, personalized to your wallet. Get actionable data at your
            fingertips, empowering you to make informed decisions and optimize
            your returns.
          </p>
          <div className="col-span-1 lg:col-span-2 relative lg:hidden mt-4">
            <Image
              src="/images/assets/l-sec5.svg"
              alt="Liquidity Farm image"
              width={476}
              height={240}
              className="w-full drop-shadow-2xl"
            />
          </div>
          <button className="mt-5 inline-flex items-center gap-[14px] font-medium text-sm max-lg:justify-center">
            {"Launch TeddySwap"}
            <Image
              src={`/images/assets/right-arrow-circle.svg`}
              alt="right arrow"
              width={26}
              height={26}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dash_Section5;
