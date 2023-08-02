import Image from "next/image";
import React from "react";

const Dash_Section3 = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center text-center gap-10">
        <h3 className="l-section-heading">FEATURES</h3>
        <h1 className="l-xl-heading">Making DeFi easy to use for everyone</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 text-lg 2xl:text-2xl items-center py-24 md:py-36 2xl:py-44">
        <div className="col-span-1 lg:col-span-2 relative">
          <Image
            src="/images/assets/l-sec3.svg"
            alt="Batchers info"
            width={520}
            height={520}
            className="w-9/12 drop-shadow-2xl"
          />
        </div>
        <div className=" col-span-1 lg:col-span-2 flex flex-col gap-10">
          <h3 className="l-s-heading">DECENTRALIZING TRADING</h3>
          <h1 className="l-heading font-medium">
            Open-Source Batcher Protocol
          </h1>
          <h4 className="l-subtitle">
            TeddySwap combines stable-swap formulas, enhanced security features,
            and {`Cardano's`} first open source batcher protocol to enhance the
            AMM Decentralized Exchange experience. A cutting edge user interface
            ties it all together.
          </h4>
          <button className="mt-2 inline-flex items-center gap-4 font-medium">
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
