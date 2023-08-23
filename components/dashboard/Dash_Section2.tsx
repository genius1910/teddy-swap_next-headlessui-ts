import Image from "next/image";
import React from "react";

const Dash_Section2 = () => {
  return (
    <section id="dash-section-2">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 text-base 2xl:text-2xl items-center py-32 md:py-44 2xl:py-60">
        <div className=" col-span-1 lg:col-span-2 flex flex-col gap-7 2xl:gap-10">
          <h3 className="l-s-heading">A NEW PARADIGM FOR THE DEX</h3>
          <h1 className="l-heading">
            The {`world’s`} most accessible exchange
          </h1>
          <h4 className="l-subtitle">
            TeddySwap combines stable-swap formulas, enhanced security features,
            and {`Cardano's`} first open source batcher protocol to enhance the
            AMM Decentralized Exchange experience. A cutting edge user interface
            ties it all together.
          </h4>
          <div className="lg:hidden col-span-1 lg:col-span-2">
            <Image
              src="/images/assets/l-sec2.svg"
              alt="User info"
              width={520}
              height={520}
              className="w-full drop-shadow-2xl -ml-1.5"
            />
          </div>
          <button className="mt-2 max-md:hidden inline-flex items-center gap-4 font-medium">
            {"Try demo"}
            <Image
              src={`/images/assets/right-arrow-circle.svg`}
              alt="right arrow"
              width={40}
              height={40}
            />
          </button>
        </div>
        <div className="max-lg:hidden col-span-1 lg:col-span-2">
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
