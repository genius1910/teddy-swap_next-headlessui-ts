import { WalletMetadata } from "../hook/listWallets";

export enum WALLET_IDS {
  Eternl = "eternl",
  Gero = "gero",
  Nami = "nami",
}

export interface Wallet {
  isAvailable(): boolean;
  enable(): Promise<any>;
  getMetadata(): WalletMetadata;
}
