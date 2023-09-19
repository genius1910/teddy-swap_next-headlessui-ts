'use client'
import { makeAutoObservable } from "mobx";

interface AuthenticateProps {
  id: string | null,
  img: string;
  name: string;
  balance: string;
  network: string;
  usedAddresses: string[];
  unusedAddresses: string[];
  rewardAddresses: string[];
  changeAddress: string;
  address: string;
}

class Authenticate {
  walletConnected: AuthenticateProps | null | any = null;

  constructor() {
    makeAutoObservable(this);
  }

  setWalletConnections(data: AuthenticateProps) {
    this.walletConnected = data;
    localStorage.setItem("wallet", data.id as string);
  }

  disconnectWallet() {
    this.walletConnected = null;
    localStorage.removeItem("wallet");
  }
  isWalletConnected() {
    return this.walletConnected != null;
  }
}

const useAuthenticate = new Authenticate();
export default useAuthenticate;
