import { makeAutoObservable } from "mobx";

interface AuthenticateProps {
  img: string;
  name: string;
}

class Authenticate {
  walletConnected: AuthenticateProps | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setWalletConnections({ img, name }: AuthenticateProps) {
    this.walletConnected = { img, name };
  }

  disconnectWallet() {
    this.walletConnected = null;
  }
  isWalletConnected() {
    return this.walletConnected != null;
  }
}

const useAuthenticate = new Authenticate();
export default useAuthenticate;
