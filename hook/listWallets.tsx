import { useEffect, useState } from "react";
import { getAvailableWallets } from "../wallets";
import { WALLET_IDS } from "../wallets/base";
import {
  enable,
  getBalance,
  getChangeAddress,
  getNetwork,
  getRewardAddresses,
  getUnusedAddresses,
  getUsedAddresses,
} from "@/wallets/api";
import useAuthenticate from "@/context/mobx/useAuthenticate";

export const walletList = [
  {
    id: 'nami',
    name: "Nami",
    img: "/images/assets/wallet-1.png",
    key: "nami",
    installURL:
      "https://chrome.google.com/webstore/detail/nami/lpfcbjknijpeeillifnkikgncikgfhdo",
  },
  {
    id: 'eternl',
    name: "Eternal",
    img: "/images/assets/wallet-3.svg",
    key: "eternl",
    installURL:
      "https://chrome.google.com/webstore/detail/eternl/kmhcihpebfmpgmihbkipmjlmmioameka",
  },
  {
    id: 'gero',
    name: "GeroWallet",
    img: "/images/assets/wallet-2.svg",
    key: "gero",
    installURL:
      "https://chrome.google.com/webstore/detail/gerowallet/bgpipimickeadkjlklgciifhnalhdjhe",
  },
];

export type WalletMetadata = {
  id: WALLET_IDS,
  icon: string;
  name: string;
  apiVersion: string;
};

export const useListWallets = () => {
  const [wallets, setWallets] = useState<WalletMetadata[]>([]);

  useEffect(() => {
    setWallets(getAvailableWallets());
  }, []);

  return wallets;
};

export const connetingWallet = async (id: WALLET_IDS) => {
  const authenticate = useAuthenticate;
  try {
    const data = await enable(id);
    const network = await getNetwork();
    const usedAddresses = await getUsedAddresses();
    const unusedAddresses = await getUnusedAddresses();
    const rewardAddresses = await getRewardAddresses();
    const changeAddress = await getChangeAddress();
    const balance = await getBalance();
    authenticate.setWalletConnections({
      id: id,
      img: walletList.filter(item => item.id == id)[0].img,
      name: walletList.filter(item => item.id == id)[0].name,
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
    console.log(err);
  }
}
