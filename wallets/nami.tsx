import { WalletMetadata } from "../hook/listWallets";
import { Wallet, WALLET_IDS } from "./base";

declare global {
  interface Window {
    cardano?: any;
  }
}

export const namiWallet: Wallet = {
  isAvailable: function (): boolean {
    return !!window?.cardano?.nami;
  },

  enable: async function (): Promise<any> {
    return await window?.cardano?.nami.enable();
  },

  getMetadata: function (): WalletMetadata {
    return {
      id: WALLET_IDS.Nami,
      icon: window?.cardano?.nami?.icon,
      name: window?.cardano?.nami?.name,
      apiVersion: window?.cardano?.nami?.apiVersion,
    };
  },
};
