"use client";
import { useWindowSize } from "@/hook/useWindowSize";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Dash_Section8 = () => {
  const window = useWindowSize();

  return (
    <section id="dash-section-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 text-lg 2xl:text-2xl items-center py-24 md:py-36 2xl:py-44 mt-16 lg:mt-20 2xl:mt-28">
        <div className=" col-span-1 lg:col-span-3 flex flex-col gap-6">
          <h3 className="l-s-heading text-[#1ED6FF]">POWERED BY CARDANO</h3>
          <h1 className="l-heading font-medium">Built on a solid foundation</h1>
          <h4 className="l-subtitle max-w-5xl">
            TeddySwap leverages on- and off-chain infrastructure to provide an
            unparalleled user experience and functionality.
          </h4>
        </div>
      </div>
      <ul
        style={{
          zoom: `${
            window?.width && window.width > 720 && window.width < 1601
              ? "80%"
              : "100%"
          }`,
        }}
        className=" flex flex-wrap justify-evenly mx-auto gap-16 lg:gap-28 w-full pb-24 md:pb-36 2xl:pb-44"
      >
        <li className="space-y-16 lg:space-y-28 ">
          <Link legacyBehavior href={`https://www.harmoniclabs.tech/`}>
            <Image
              width={302}
              height={302}
              alt="Harmonic labs"
              src={`/images/assets/harmonic.svg`}
              className=" cursor-pointer"
            />
          </Link>
          <Link legacyBehavior href={`https://saturnlabs.org/`}>
            <Image
              width={372}
              height={200}
              alt="Saturn labs"
              src={`/images/assets/saturnlabs.svg`}
              className=" cursor-pointer"
            />
          </Link>
        </li>
        <li className="space-y-16 lg:space-y-28">
          <Link
            legacyBehavior
            href={`https://developers.cardano.org/docs/smart-contracts/plu-ts/`}
          >
            <Image
              width={252}
              height={252}
              alt="Plus Ts labs"
              src={`/images/assets/plus-ts.svg`}
              className=" cursor-pointer"
            />
          </Link>
          <Link legacyBehavior href={`https://txpipe.io/`}>
            <Image
              width={372}
              height={200}
              alt="Txpipe.io"
              src={`/images/assets/tx.svg`}
              className=" cursor-pointer"
            />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Dash_Section8;
