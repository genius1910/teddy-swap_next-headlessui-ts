import React from "react";
import AmountAndTokenField_2 from "@/components/trade/quickSwap/AmountAndTokenField_2";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import useAuthenticate from "@/context/mobx/useAuthenticate";

interface Props {
  setShowComponent: (value: string) => void;
  selectedToken?: {
    name: string;
    imgId: number;
    price: number;
  };
  selectedToken2?: {
    name: string;
    imgId: number;
    price: number;
  };
}

const User_SwapTokens = ({
  setShowComponent,
  selectedToken,
  selectedToken2,
}: Props) => {
  const authenticate = useAuthenticate;
  return (
    <div className=" w-full flex flex-col gap-2">
      <AmountAndTokenField_2
        selectedToken={selectedToken}
        setShowComponent={setShowComponent}
        id="token-view-1"
        name="Amount"
      />
      <AmountAndTokenField_2
        selectedToken={selectedToken2}
        setShowComponent={setShowComponent}
        id="token-view-2"
        name="Converted to"
      />
      <div className="bg-[#1F2635] text-sm text-[#505A63] flex flex-col gap-3 w-full rounded-2xl p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h4>Our current rate</h4>
            <AiOutlineExclamationCircle
              title="This is our current rate"
              className="cursor-pointer w-5 h-5"
            />
          </div>
          <p className="text-xs text-white">$1 = ₳0.7777</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h4>No fees</h4>
            <AiOutlineExclamationCircle
              title="don't need to additional fees "
              className="cursor-pointer w-5 h-5"
            />
          </div>
          <p className="text-xs text-white">$0.00</p>
        </div>
      </div>
      <button
        onClick={() =>
          authenticate.walletConnected != null
            ? setShowComponent("confirm-swap")
            : document.getElementById("connect-wallet")?.click()
        }
        type="button"
        className=" secondary-button text-sm 2xl:text-lg py-2 2xl:py-3 rounded-2xl border-2"
      >
        {authenticate.walletConnected != null
          ? "Confirm Swap"
          : "Connect Wallet"}
      </button>
      <p className="  text-[#505A63] text-[0.65rem] mt-2 flex flex-col text-center mx-auto w-80">
        Above rates and fees are applicable to card transactions only (not
        necessarily applicable for all exchanges in wallets)
      </p>
    </div>
  );
};

export default User_SwapTokens;
