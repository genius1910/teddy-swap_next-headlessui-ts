import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="py-16 md:py-28 2xl:py-36">
      <ul className="gap-8 flex justify-between flex-wrap w-full mx-auto text-[#C2CAD1]">
        <li className="space-y-4 max-w-[18rem]">
          <Image
            alt="TeddySwap"
            src="/images/logo/primary.png"
            width={200}
            height={100}
          />
          <p className="text-[#EAFFFC]">
            TeddySwap is a decentralized exchange and automated liquidity
            protocol for stablecoins.
          </p>
        </li>
        <li className="space-y-4">
          <h2 className="font-semibold text-xl text-white">TeddySwap</h2>
          <div className="flex flex-col gap-2 font-semibold">
            <a href="#" className="">
              Docs
            </a>
            <a href="#" className="">
              News and Updates
            </a>
            <a href="#" className="">
              Tokenomics
            </a>
          </div>
        </li>
        <li className="space-y-4">
          <h2 className="font-semibold text-xl text-white">Resources</h2>
          <div className="flex flex-col gap-2 font-semibold">
            <a href="#">Litepaper</a>
          </div>
        </li>
        <li className="space-y-4">
          <h2 className="font-semibold text-xl text-white">Foundation</h2>
          <div className="flex flex-col gap-2 font-semibold">
            <a href="#" className="text-lg text-[#C2CAD1]">
              info@teddyswap.org
            </a>
          </div>
        </li>
        <li className="space-y-4 max-w-[17rem]">
          <div className="flex items-center gap-4">
            <Link href={"https://twitter.com/TeddySwap"} legacyBehavior>
              <Image
                src="/images/icons/solid/twitter.svg"
                alt="Twitter"
                width={40}
                height={40}
              />
            </Link>
            <Link href={"https://t.me/teddyswap"} legacyBehavior>
              <Image
                src="/images/icons/solid/telegram.svg"
                alt="Telegram"
                width={40}
                height={40}
              />
            </Link>
            <Link href={"https://discord.gg/GRvcAnqtZG"} legacyBehavior>
              <Image
                src="/images/icons/solid/discord.svg"
                alt="Discord"
                width={40}
                height={40}
              />
            </Link>
            <Link href={"https://medium.com/@TeddySwapDEX"} legacyBehavior>
              <Image
                src="/images/icons/solid/medium.svg"
                alt="Medium"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <h2 className="text-[#EAFFFC] font-semibold text-lg">
            TeddySwap is a Malaysia based DAO.
          </h2>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
