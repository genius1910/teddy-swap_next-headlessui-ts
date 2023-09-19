"use client";
import Image from "next/image";
import React, { useMemo, useState, useCallback, lazy } from "react";
import { RxCross2 } from "react-icons/rx";
import { observer } from "mobx-react-lite";
import { connetingWallet } from "@/hook/listWallets";
import { useListWallets, walletList, WalletMetadata } from "@/hook/listWallets";

interface Props {
  close: () => void;
}

const WalletLists = ({ close }: Props) => {
  const availableWallets = useListWallets();
  const [selectedWallet, setSelectedWallet] = useState<WalletMetadata | undefined>();

  useMemo(() => {
    if (!selectedWallet) return;
    connetingWallet(selectedWallet.id);
  }, [selectedWallet]);

  const connectWallet = (item: any) => {
    let connectW = null;
    availableWallets.map((wallet) => {
      if (wallet.id === item.key) {
        connectW = wallet;
      }
    });
    if (!connectW) {
      window.open(item.installURL);
      return;
    }
    setSelectedWallet(connectW);
  };

  return (
    <div className="relative flex flex-col items-center w-full gap-6 ">
      <div className="flex items-center justify-between pt-8 pl-[38px] pr-[17px] w-full">
        <div className="flex text-base font-semibold 2xl:text-xl">
          Connect Wallet
        </div>
        <div className="flex gap-4">
          <button
            className={` text-gray-300 hover:text-gray-100 text-base 2xl:text-lg`}
          >
            <RxCross2 onClick={() => close()} className="w-6 h-6 " />
          </button>
        </div>
      </div>
      <ul className="w-full px-[25px] pb-8">
        {walletList.map((item) => {
          return (
            <li key={item.name} className="w-full">
              <button
                onClick={() => {
                  connectWallet(item);
                }}
                className="flex items-center justify-between w-full px-3 py-4 text-xl font-normal border border-transparent rounded-lg hover:bg-gray-600 focus:border-o_cyan"
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
