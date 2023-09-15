import { WalletMetadata } from "../hook/listWallets";
import { Wallet, WALLET_IDS } from "./base";

declare global {
  interface Window {
    cardano?: any;
  }
}

export const eternlWallet: Wallet = {
  isAvailable: function (): boolean {
    return !!window?.cardano?.eternl;
  },

  enable: async function (): Promise<any> {
    return await window?.cardano?.eternl.enable();
  },

  getMetadata: function (): WalletMetadata {
    return {
      id: WALLET_IDS.Eternl,
      icon: window?.cardano?.eternl?.icon,
      name: window?.cardano?.eternl?.name,
      apiVersion: window?.cardano?.eternl?.apiVersion,
    };
  },
};
