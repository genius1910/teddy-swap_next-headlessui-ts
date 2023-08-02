import Image from "next/image";
import React from "react";

const Dash_Section8 = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 text-lg 2xl:text-2xl items-center py-24 md:py-36 2xl:py-44">
        <div className=" col-span-1 lg:col-span-3 flex flex-col gap-6">
          <h3 className="l-s-heading text-[#1ED6FF]">POWERED BY CARDANO</h3>
          <h1 className="l-heading">Built on a solid foundation</h1>
          <h4 className="l-subtitle max-w-5xl">
            Axo leverages on- and off-chain infrastructure to provide an
            unparalleled user experience and functionality.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Dash_Section8;
