"use client";
import { useWindowSize } from "@/hook/useWindowSize";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Dash_Section8 = () => {
  const window = useWindowSize();

  return (
    <section id="dash-section-8" className="cardano-soild-bg w-full">
      <div className="grid items-center py-10 md:py-16 2xl:pt-44 2xl:pb-[88px] mt-8 lg:mt-12 2xl:mt-24 justify-center px-4">
        <div className="flex flex-col gap-3  max-lg:text-center">
          <p className="text-[#1ED6FF] text-[15px] leading-[18px] font-semibold">
            POWERED BY CARDANO
          </p>
          <p className="text-[46px] leading-[52px] font-medium max-lg:text-3xl">
            Built on a solid foundation
          </p>
          <p className="text-[15px] font-normal leading-[21px] max-w-[640px]">
            TeddySwap leverages on- and off-chain infrastructure to provide an
            unparalleled user experience and functionality.
          </p>
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
        className=" flex flex-wrap justify-center 2xl:gap-40 gap-24 mx-auto w-full max-lg:pb-0 max-lg:gap-12 pb-24 md:pb-36 2xl:pb-44 px-4"
      >
        <li className="space-y-16 lg:space-y-24 max-lg:space-y-12">
          <Link legacyBehavior href={`https://www.harmoniclabs.tech/`}>
            <Image
              width={202}
              height={46}
              alt="Harmonic labs"
              src={`/images/assets/harmonic.svg`}
              className=" cursor-pointer drop-shadow-2xl"
            />
          </Link>
          <Link legacyBehavior href={`https://saturnlabs.org/`}>
            <Image
              width={247}
              height={46}
              alt="Saturn labs"
              src={`/images/assets/saturnlabs.svg`}
              className=" cursor-pointer drop-shadow-2xl"
            />
          </Link>
        </li>
        <li className="space-y-16 lg:space-y-24">
          <Link
            legacyBehavior
            href={`https://developers.cardano.org/docs/smart-contracts/plu-ts/`}
          >
            <Image
              width={154}
              height={46}
              alt="Plus Ts labs"
              src={`/images/assets/plus-ts.svg`}
              className=" cursor-pointer drop-shadow-2xl flex justify-center"
            />
          </Link>
          <Link legacyBehavior href={`https://txpipe.io/`}>
            <Image
              width={195}
              height={46}
              alt="Txpipe.io"
              src={`/images/assets/tx.svg`}
              className=" cursor-pointer drop-shadow-2xl"
            />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Dash_Section8;
