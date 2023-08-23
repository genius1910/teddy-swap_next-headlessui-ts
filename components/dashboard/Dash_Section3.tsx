import Image from "next/image";
import React from "react";

const Dash_Section3 = () => {
  return (
    <section id="dash-section-3">
      <div className="flex flex-col justify-center items-center text-center gap-6 xl:gap-10">
        <h3 className="l-section-heading">FEATURES</h3>
        <h1 className="l-xl-heading">Making DeFi easy to use for everyone</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-14 text-base xl:text-2xl items-center py-32 max-lg:pt-16 md:py-44 xl:py-60">
        <div className="max-lg:hidden col-span-1 lg:col-span-2 relative">
          <Image
            src="/images/assets/l-sec3.svg"
            alt="Batchers info"
            width={520}
            height={520}
            className="w-full lg:w-9/12 drop-shadow-2xl"
          />
        </div>
        <div className=" col-span-1 lg:col-span-2 flex flex-col gap-7 xl:gap-10">
          <h3 className="l-s-heading">DECENTRALIZING TRADING</h3>
          <h1 className="l-heading font-medium">
            Open-Source Batcher Protocol
          </h1>
          <h4 className="l-subtitle">
            Streamline your transaction processing and boost scalability like
            never before. Our cutting-edge solution enables efficient batching
            of multiple transactions, reducing costs and improving network
            throughput
          </h4>
          <div className="lg:hidden col-span-1 lg:col-span-2 relative">
            <Image
              src="/images/assets/l-sec3.svg"
              alt="Batchers info"
              width={520}
              height={520}
              className="w-full lg:w-9/12 drop-shadow-2xl"
            />
          </div>
          <button className="mt-2 max-md:hidden inline-flex items-center gap-4 font-medium">
            {"How it works"}
            <Image
              src={`/images/assets/right-arrow-circle.svg`}
              alt="right arrow"
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dash_Section3;
