import { WalletMetadata } from "../hook/listWallets";
import { Wallet, WALLET_IDS } from "./base";

declare global {
  interface Window {
    cardano?: any;
  }
}

export const geroWallet: Wallet = {
  isAvailable: function (): boolean {
    return !!window?.cardano?.gerowallet;
  },

  enable: async function (): Promise<any> {
    return await window?.cardano?.gerowallet.enable();
  },

  getMetadata: function (): WalletMetadata {
    return {
      id: WALLET_IDS.Gero,
      icon: window?.cardano?.gerowallet?.icon,
      name: window?.cardano?.gerowallet?.name,
      apiVersion: window?.cardano?.gerowallet?.apiVersion,
    };
  },
};
