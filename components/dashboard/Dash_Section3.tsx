import Image from "next/image";
import React from "react";

const Dash_Section3 = () => {
  return (
    <section
      id="dash-section-3"
      className="max-w-[1152px] mx-auto xl:zoom-80 2xl:zoom-100 px-4"
    >
      <div className="flex flex-col justify-center items-center text-center gap-5 2xl:gap-10">
        <p className="text-[#ADE1FF] font-medium text-[15px] leading-[18px]">
          FEATURES
        </p>
        <p className="text-[#D6D4C6] font-semibold text-[46px] leading-[56px] max-xl:text-3xl max-w-[524px]">
          Making DeFi a joy to use for everyone
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-14 items-center py-32 max-lg:pt-16 md:py-44 2xl:py-60">
        <div className="max-lg:hidden col-span-1 lg:col-span-2 relative max-lg:py-4 max-lg:items-center flex justify-center mr-6 max-lg:mr-0 py-8">
          <Image
            src="/images/assets/l-sec3.svg"
            alt="Batchers info"
            width={310}
            height={213}
            className="drop-shadow-2xl
            "
          />
        </div>
        <div className=" col-span-1 lg:col-span-2 flex flex-col ml-10 max-lg:ml-0">
          <p className="text-sm font-medium text-[#3DFFDC] pt-4">
            DECENTRALIZING TRADING
          </p>
          <p className="text-[#D6D4C6] font-semibold text-[46px] pt-2 max-xl:text-3xl">
            Open-Source Batcher Protocol
          </p>
          <p className="text-[#D6D4C6] font-normal text-[14.8px] leading-[24px] pr-24 pt-2">
            Streamline your transaction processing and boost scalability like
            never before. Our cutting-edge solution enables efficient batching
            of multiple transactions, reducing costs and improving network
            throughput
          </p>
          <div className="lg:hidden col-span-1 lg:col-span-2 relative mt-4 max-lg:justify-center max-lg:items-center flex">
            <Image
              src="/images/assets/l-sec3.svg"
              alt="Batchers info"
              width={310}
              height={213}
              className="drop-shadow-2xl"
            />
          </div>
          <button className="mt-5 inline-flex items-center gap-[14px] font-medium text-sm max-lg:justify-center">
            {"How it works"}
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

export default Dash_Section3;
