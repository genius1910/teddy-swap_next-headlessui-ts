"use client";
import useAuthenticate from "@/context/mobx/useAuthenticate";
import Image from "next/image";
import React, { useMemo, useState, useCallback, lazy } from "react";
import { RxCross2 } from "react-icons/rx";
import { observer } from "mobx-react-lite";

import { useListWallets, WalletMetadata } from "@/hook/listWallets";
import {
  enable,
  getBalance,
  getChangeAddress,
  getNetwork,
  getRewardAddresses,
  getUnusedAddresses,
  getUsedAddresses,
} from "@/wallets/api";

type WalletState = {
  connected: boolean;
  balance: string;
  network: string;
  unusedAddresses: string[];
  usedAddresses: string[];
  rewardAddresses: string[];
  changeAddress: string;
};

interface Props {
  close: () => void;
}

const WalletLists = ({ close }: Props) => {
  const availableWallets = useListWallets();
  const [selectedWallet, setSelectedWallet] = useState<
    WalletMetadata | undefined
  >();
  const [enabledWallet, setEnabledWallet] = useState<Partial<WalletState>>();
  const [error, setError] = useState();

  const mergeEnabledWalletState = useCallback((delta: Partial<WalletState>) => {
    setEnabledWallet((prev) => ({ ...prev, ...delta }));
  }, []);

  const [img, setImg] = useState<string>("");

  useMemo(async () => {
    try {
      setError(undefined);
      if (!selectedWallet) return;
      mergeEnabledWalletState({
        connected: false,
        balance: "",
        network: "",
        usedAddresses: [],
        unusedAddresses: [],
        rewardAddresses: [],
        changeAddress: "",
      });
      const data = await enable(selectedWallet.id);
      mergeEnabledWalletState({ connected: true });
      const network = await getNetwork();
      const usedAddresses = await getUsedAddresses();
      const unusedAddresses = await getUnusedAddresses();
      const rewardAddresses = await getRewardAddresses();
      const changeAddress = await getChangeAddress();
      mergeEnabledWalletState({
        network,
        usedAddresses,
        unusedAddresses,
        rewardAddresses,
        changeAddress,
      });
      const balance = await getBalance();
      mergeEnabledWalletState({ balance });
      authenticate.setWalletConnections({
        img: img,
        name: selectedWallet.name,
        balance: balance,
        network: network,
        usedAddresses: usedAddresses,
        unusedAddresses: unusedAddresses,
        rewardAddresses: rewardAddresses,
        changeAddress: changeAddress,
        address: usedAddresses[0]
          ? usedAddresses[0]
          : unusedAddresses[0]
          ? unusedAddresses[0]
          : changeAddress,
      });
    } catch (err: any) {
      setError(err.message || err.info || err);
    }
  }, [mergeEnabledWalletState, selectedWallet]);

  const walletList = [
    {
      name: "Nami",
      img: "/images/assets/wallet-1.png",
      key: "nami",
      installURL:
        "https://chrome.google.com/webstore/detail/nami/lpfcbjknijpeeillifnkikgncikgfhdo",
    },
    {
      name: "Eternal",
      img: "/images/assets/wallet-3.svg",
      key: "eternl",
      installURL:
        "https://chrome.google.com/webstore/detail/eternl/kmhcihpebfmpgmihbkipmjlmmioameka",
    },
    {
      name: "GeroWallet",
      img: "/images/assets/wallet-2.svg",
      key: "gero",
      installURL:
        "https://chrome.google.com/webstore/detail/gerowallet/bgpipimickeadkjlklgciifhnalhdjhe",
    },
  ];

  const authenticate = useAuthenticate;

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
    setImg(item.img);
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
