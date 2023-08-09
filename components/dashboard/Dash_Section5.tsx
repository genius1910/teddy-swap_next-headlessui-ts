import Image from "next/image";
import React from "react";

const Dash_Section5 = () => {
  return (
    <section id="dash-section-5">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 lg:gap-28 text-base 2xl:text-2xl items-center py-32 md:py-44 2xl:py-60 ">
        <div className="col-span-1 lg:col-span-2 relative hidden lg:block">
          <Image
            src="/images/assets/l-sec5.svg"
            alt="Liquidity Farm image"
            width={520}
            height={520}
            className="w-full drop-shadow-2xl"
          />
        </div>
        <div className=" col-span-1 lg:col-span-2 flex flex-col gap-7 2xl:gap-10 lg:pl-10">
          <h3 className="l-s-heading">A NEW PERSPECTIVE ON DEFI</h3>
          <h1 className="l-heading font-medium">Best in Class Accessibility</h1>
          <h4 className="l-subtitle">
            Access vital information about your liquidity, farming activity, and
            more, personalized to your wallet. Get actionable data at your
            fingertips, empowering you to make informed decisions and optimize
            your returns.
          </h4>
          <div className="col-span-1 lg:col-span-2 relative lg:hidden">
            <Image
              src="/images/assets/l-sec5.svg"
              alt="Liquidity Farm image"
              width={520}
              height={520}
              className="w-full drop-shadow-2xl"
            />
          </div>
          <button className="max-md:hidden mt-2 inline-flex items-center gap-4 font-medium">
            {"Launch TeddySwap"}
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

export default Dash_Section5;
