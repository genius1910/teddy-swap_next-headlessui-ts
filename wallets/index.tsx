import { WalletMetadata } from "../hook/listWallets";
import { eternlWallet } from "./eternl";
import { geroWallet } from "./gero";
import { namiWallet } from "./nami";

export const SUPPORTED_WALLETS = [eternlWallet, geroWallet, namiWallet];

export function getAvailableWallets(): WalletMetadata[] {
  const result: WalletMetadata[] = [];

  SUPPORTED_WALLETS.forEach((wallet) => {
    if (wallet.isAvailable()) {
      result.push(wallet.getMetadata());
    }
  });

  return result;
}
