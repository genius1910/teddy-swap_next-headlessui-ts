import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="py-16 md:py-28 2xl:py-36 max-w-[1152px] mx-auto xl:zoom-80 2xl:zoom-100 px-4"
    >
      <ul className="gap-8 justify-center w-full mx-auto text-[#C2CAD1] grid gird-cols-1 max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5">
        <li className="space-y-4 lg:col-span-1 max-lg:col-span-1 max-sm:col-span-1 flex flex-col items-center max-lg:justify-center justify-between">
          <Image
            alt="TeddySwap"
            src="/images/logo/primary.png"
            width={200}
            height={100}
            className="drop-shadow-2xl"
          />
          <p className="text-[#EAFFFC] text-[12px] leading-[17px] font-normal max-w-[210px]">
            TeddySwap is a decentralized exchange and automated liquidity
            protocol for stablecoins.
          </p>
        </li>
        <li className="space-y-4 lg:col-span-1 max-lg:col-span-1 max-sm:col-span-1 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center pl-10 max-lg:pl-0">
          <p className="font-medium text-sm text-white">TeddySwap</p>
          <div className="flex flex-col gap-3 font-semibold">
            <a href="#" className="text-[12px] leading-[17px] text-[#C2CAD1]">
              Docs
            </a>
            <a href="#" className="text-[12px] leading-[17px] text-[#C2CAD1]">
              News and Updates
            </a>
            <a href="#" className="text-[12px] leading-[17px] text-[#C2CAD1]">
              Tokenomics
            </a>
          </div>
        </li>
        <li className="space-y-4 lg:col-span-1 max-lg:col-span-1 max-sm:col-span-1 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
          <p className="font-medium text-sm text-white">Resources</p>
          <div className="flex flex-col font-semibold">
            <a href="#" className="text-[12px] leading-[17px] text-[#C2CAD1]">
              Litepaper
            </a>
          </div>
        </li>
        <li className="space-y-4 lg:col-span-1 max-lg:col-span-1 max-sm:col-span-1 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
          <h2 className="font-medium text-sm text-white">Foundation</h2>
          <div className="flex flex-col gap-2 font-semibold">
            <a href="#" className="text-[12px] leading-[17px] text-[#C2CAD1]">
              info@teddyswap.org
            </a>
          </div>
        </li>
        <li className="space-y-4 lg:col-span-1 max-lg:col-span-2 max-sm:col-span-1 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
          <div className="flex items-center gap-4">
            <Link href={"https://twitter.com/TeddySwap"} legacyBehavior>
              <a>
                <Image
                  src="/images/icons/solid/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="drop-shadow-2xl"
                />
              </a>
            </Link>
            <Link href={"https://t.me/teddyswap"} legacyBehavior>
              <a>
                <Image
                  src="/images/icons/solid/telegram.svg"
                  alt="Telegram"
                  width={24}
                  height={24}
                  className="drop-shadow-2xl"
                />
              </a>
            </Link>
            <Link href={"https://discord.gg/GRvcAnqtZG"} legacyBehavior>
              <a>
                <Image
                  src="/images/icons/solid/discord.svg"
                  alt="Discord"
                  width={24}
                  height={24}
                  className="drop-shadow-2xl"
                />
              </a>
            </Link>
            <Link href={"https://medium.com/@TeddySwapDEX"} legacyBehavior>
              <a>
                <Image
                  src="/images/icons/solid/medium.svg"
                  alt="Medium"
                  width={24}
                  height={24}
                  className="drop-shadow-2xl"
                />
              </a>
            </Link>
          </div>
          <p className="text-[#EAFFFC] font-semibold text-[12px] leading-4 max-w-[150px]">
            TeddySwap is a Malaysia based DAO.
          </p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
