import useAuthenticate from "@/context/mobx/useAuthenticate";
import Image from "next/image";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { observer } from "mobx-react-lite";

interface Props {
  close: () => void;
}

const WalletLists = ({ close }: Props) => {
  const walletList = [
    {
      name: "Nami",
      img: "/images/assets/wallet-1.png",
    },
    {
      name: "Eternal",
      img: "/images/assets/wallet-3.svg",
    },
    {
      name: "GeroWallet",
      img: "/images/assets/wallet-2.svg",
    },
  ];

  const authenticate = useAuthenticate;
  return (
    <div className="relative flex flex-col gap-6 items-center p-6 w-full ">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-4 text-base 2xl:text-xl font-medium">
          Connect Wallet
        </div>
        <div className="flex gap-4">
          <button
            className={` text-gray-300 hover:text-gray-100 text-base 2xl:text-lg`}
          >
            <RxCross2
              onClick={() => close()}
              className=" w-6 h-6 2xl:w-8 2xl:h-8 "
            />
          </button>
        </div>
      </div>
      <ul className="space-y-2 w-full ">
        {walletList.map((item) => {
          return (
            <li key={item.name} className="w-full">
              <button
                onClick={() => {
                  authenticate.setWalletConnections(item);
                }}
                className="flex text-base font-normal w-full items-center justify-between py-4 px-2 rounded-lg hover:bg-gray-600 border-transparent focus:border-o_cyan border"
              >
                <p>{item.name}</p>
                <Image src={item.img} alt={item.name} width={30} height={30} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default observer(WalletLists);
