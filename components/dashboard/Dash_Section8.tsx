import Image from "next/image";
import React from "react";

const Dash_Section8 = () => {
  return (
    <section id="dash-section-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 text-lg 2xl:text-2xl items-center py-24 md:py-36 2xl:py-44 mt-16 lg:mt-20 2xl:mt-28">
        <div className=" col-span-1 lg:col-span-3 flex flex-col gap-6">
          <h3 className="l-s-heading text-[#1ED6FF]">POWERED BY CARDANO</h3>
          <h1 className="l-heading font-medium">Built on a solid foundation</h1>
          <h4 className="l-subtitle max-w-5xl">
            Axo leverages on- and off-chain infrastructure to provide an
            unparalleled user experience and functionality.
          </h4>
        </div>
      </div>
      <ul className=" flex flex-wrap justify-evenly mx-auto gap-16 lg:gap-28 w-full pb-24 md:pb-36 2xl:pb-44">
        <li className="space-y-16 lg:space-y-28">
          <Image
            width={302}
            height={302}
            alt="Harmonic labs"
            src={`/images/assets/harmonic.svg`}
          />
          <Image
            width={372}
            height={200}
            alt="Saturn labs"
            src={`/images/assets/saturnlabs.svg`}
          />
        </li>
        <li className="space-y-16 lg:space-y-28">
          <Image
            width={252}
            height={252}
            alt="Plus Ts labs"
            src={`/images/assets/plus-ts.svg`}
          />
          <Image
            width={372}
            height={200}
            alt="Tspipe.io"
            src={`/images/assets/tx.svg`}
          />
        </li>
      </ul>
    </section>
  );
};

export default Dash_Section8;
