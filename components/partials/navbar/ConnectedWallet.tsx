import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

interface Props {
  close: () => void;
  setWallet: (value: { img: string; name: string } | null) => void;
  wallet: { img: string; name: string } | null;
}

const ConnectedWallet = ({ close, setWallet, wallet }: Props) => {
  const [activeTab, setActiveTab] = useState("Tokens");
  const token = [
    {
      name: "WMTt",
      imgId: 1,
      price: 0,
    },
    {
      name: "MELDt",
      imgId: 2,
      price: 0,
    },
    {
      name: "cNETAt",
      imgId: 3,
      price: 0,
    },
    {
      name: "HOSkyt",
      imgId: 4,
      price: 0,
    },
    {
      name: "GENSt",
      imgId: 5,
      price: 0,
    },
  ];
  return (
    <div className="relative flex flex-col gap-6 items-center p-6 w-full ">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4 text-base 2xl:text-xl font-medium">
          <Image src={wallet?.img || ""} alt="wallet" width={30} height={30} />
          <h1 className="">{wallet?.name}</h1>
        </div>
        <div className="flex gap-4">
          <button
            className={` text-gray-300 hover:text-gray-100 text-base 2xl:text-lg`}
          >
            <RxCross2
              onClick={() => close()}
              className=" w-6 h-6 2xl:w-8 2xl:h-8 "
            />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-1 small-component-color py-2 px-4 rounded-2xl">
        <p>addr1qyktedkdpu...av5tsefrbxuhsxkyq0u</p>
        <AiOutlineCopy className="w-4 h-4" />
      </div>
      <div className="w-full text-base 2xl:text-lg">
        <button
          className={`p-2 text-gray-500 ${
            activeTab == "Tokens" && "border-b border-b-gray-500 text-white"
          }`}
          onClick={() => {
            setActiveTab("Tokens");
          }}
        >
          Tokens
        </button>
        <button
          className={`p-2 text-gray-500 ${
            activeTab == "NFTs" && "border-b border-b-gray-500 text-white"
          }`}
          onClick={() => {
            setActiveTab("NFTs");
          }}
        >
          NFTs
        </button>
      </div>
      <ul className=" space-y-4 w-full">
        {token.map((item) => {
          return (
            <li
              key={item.name}
              className="flex cursor-pointer text-sm justify-between p-2 rounded-lg border-2 border-transparent active:border-cyan-500"
            >
              <div className="flex gap-4">
                <Image
                  src={`/images/assets/token-${item.imgId}.png`}
                  width={35}
                  height={35}
                  alt="Token image"
                />
                <p>
                  <h2>{item.name}</h2>
                  <p className=" text-gray-400 text-xs">{item.name}</p>
                </p>
              </div>
              <p> {item.price} </p>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          setWallet(null);
        }}
        className="w-full py-4 rounded-2xl border-gray-400 border flex items-center justify-center gap-2 text-center text-gray-400"
      >
        <MdLogout className="w-5 h-5" /> Disconnect
      </button>
    </div>
  );
};

export default ConnectedWallet;
