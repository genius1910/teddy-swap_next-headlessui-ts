import React, { useEffect, useState } from "react";
import AmountAndTokenField_2 from "@/components/trade/quickSwap/AmountAndTokenField_2";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import useAuthenticate from "@/context/mobx/useAuthenticate";

import SelectTokenView from "@/components/trade/quickSwap/SelectTokenView";

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

interface SelectedTokenProps {
  name: string;
  imgId: number;
  price: number;
}

interface SwapTokensProps {
  setShowComponent: (show: string) => void;
  selectedToken: any;
  selectedToken2: any;
  setSelectedToken: (token: any) => void; // Replace 'any' with the type of token
  setSelectedToken2: (token: any) => void; // Replace 'any' with the type of token
}

const User_SwapTokens: React.FC<SwapTokensProps> = ({
  setShowComponent,
  selectedToken,
  selectedToken2,
  setSelectedToken,
  setSelectedToken2,
}) => {
  const authenticate = useAuthenticate;
  const [show, setShow] = useState("");
  const [selectToken, setSelectToken] = useState<SelectedTokenProps>();
  const [selectToken2, setSelectToken2] = useState<SelectedTokenProps>();
  useEffect(() => {
    setSelectToken(selectedToken);
  }, [selectedToken]);
  useEffect(() => {
    setSelectToken2(selectedToken2);
  }, [selectedToken2]);
  return (
    <div className=" w-full flex flex-col gap-2">
      <div className=" relative">
        <AmountAndTokenField_2
          selectedToken={selectToken}
          setShowComponent={setShow}
          id="token-view-1"
          name="Amount"
        />
        <div
          className={`absolute top-2 left-1 right-1 z-20 ${
            show === "token-view-1" ? "flex" : "hidden"
          }`}
        >
          <SelectTokenView
            setSelectedToken={setSelectToken}
            setShowComponent={setShow}
          />
        </div>
      </div>
      <div className=" relative">
        <AmountAndTokenField_2
          selectedToken={selectToken2}
          setShowComponent={setShow}
          id="token-view-2"
          name="Converted to"
        />
        <div
          className={`absolute top-2 left-1 right-1 z-20 ${
            show === "token-view-2" ? "" : "hidden"
          }`}
        >
          <SelectTokenView
            setSelectedToken={setSelectToken2}
            setShowComponent={setShow}
          />
        </div>
      </div>
      <div className="bg-[#1F2635] text-sm text-[#505A63] flex flex-col gap-3 w-full rounded-2xl p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[5px]">
            <p className="text-sm font-normal text-[#505A63]">Batcher fee</p>
            <AiOutlineExclamationCircle
              title="The fee that you pay to the batcher for processing your trades."
              className="cursor-pointer w-3 h-3"
            />
          </div>
          <p
            className={`${
              selectToken && selectToken2
                ? "text-xs text-white"
                : "text-xs text-white hidden"
            }`}
          >
            $1 = ₳0.7777
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[5px]">
            <p className="text-sm font-normal text-[#505A63]">Rate</p>
            <AiOutlineExclamationCircle
              title="The current exchange rate between Teddy and ADA."
              className="cursor-pointer w-3 h-3"
            />
          </div>
          <p
            className={` ${
              selectToken && selectToken2
                ? "text-xs text-white"
                : "text-xs text-white hidden"
            }`}
          >
            $0.00
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          setSelectedToken(selectToken);
          setSelectedToken2(selectToken2);
          authenticate.walletConnected != null
            ? selectToken && selectToken2
              ? setShowComponent("confirm-swap")
              : alert("Please select two tokens")
            : document.getElementById("connect-wallet")?.click();
        }}
        type="button"
        className=" secondary-button text-sm xl:text-lg py-2 xl:py-3 rounded-2xl border-2 mt-2"
      >
        {authenticate.walletConnected != null
          ? "Swap Tokens"
          : "Connect Wallet"}
      </button>
      <p className="  text-[#505A63] text-[10px] font-normal leading-[14px] mt-3 flex flex-col text-center mx-auto w-80">
        Above rates and fees are applicable to card transactions only (not
        necessarily applicable for all exchanges in wallets)
      </p>
    </div>
  );
};

export default User_SwapTokens;
