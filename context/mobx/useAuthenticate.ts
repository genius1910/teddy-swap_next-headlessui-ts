import { makeAutoObservable } from "mobx";

interface AuthenticateProps {
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
    if (typeof window !== "undefined") {
      const item = localStorage.getItem("wallet");
      if (item) {
        this.walletConnected = JSON.parse(item);
      } else {
        this.walletConnected = null;
      }
    }
  }

  setWalletConnections(data: AuthenticateProps) {
    this.walletConnected = data;
    localStorage.setItem("wallet", JSON.stringify(data));
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
