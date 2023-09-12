import Image from "next/image";
import React from "react";

const Dash_Section2 = () => {
  return (
    <section
      id="dash-section-2"
      className="max-w-[1152px] mx-auto xl:zoom-80 2xl:zoom-100 px-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center md:py-24 2xl:py-52 max-lg:py-16">
        <div className=" col-span-1 lg:col-span-1 flex flex-col ml-14 max-lg:ml-0 max-lg:text-center max-lg:max-w-full">
          <p className=" text-sm font-medium text-[#3DFFDC] pt-4">
            A NEW PARADIGM FOR THE DEX
          </p>
          <p className="text-[#D6D4C6] font-semibold text-[46px] pt-2 max-xl:text-3xl">
            The {`world’s`} most accessible exchange
          </p>
          <p className="text-[#D6D4C6] font-normal text-[14.8px] leading-[24px] pr-20 pt-2 max-lg:pr-0">
            TeddySwap combines stable-swap formulas, enhanced security features,
            and {`Cardano's`} first open source batcher protocol to enhance the
            AMM Decentralized Exchange experience. A cutting edge user interface
            ties it all together.
          </p>
          <div className="lg:hidden col-span-1 lg:col-span-1 mt-4">
            <Image
              src="/images/assets/l-sec2.svg"
              alt="User info"
              width={520}
              height={520}
              className="w-full drop-shadow-2xl"
            />
          </div>
          <button className="mt-5 inline-flex items-center gap-[14px] font-medium text-sm max-lg:justify-center">
            {"Try demo"}
            <Image
              src={`/images/assets/right-arrow-circle.svg`}
              alt="right arrow"
              width={26}
              height={26}
            />
          </button>
        </div>
        <div className="max-lg:hidden col-span-1 lg:col-span-1">
          <Image
            src="/images/assets/l-sec2.svg"
            alt="User info"
            width={520}
            height={520}
            className="w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Dash_Section2;
