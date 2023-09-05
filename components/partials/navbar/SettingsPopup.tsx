import React from "react";
import { RxCross2 } from "react-icons/rx";
import LanguageList from "./LanguageList";
import {
  BsBook,
  BsExclamationCircle,
  BsGithub,
  BsQuestionCircle,
} from "react-icons/bs";

const SettingsPopup = ({ close }: { close: () => void }) => {
  return (
    <div className="relative text-base 2xl:text-xl flex flex-col items-center w-full text-gray-400 ">
      <div className="flex items-center justify-between w-full pl-4 pr-6 pt-8">
        <h1 className="flex font-medium text-xl text-[#AAA9A1]">Theme</h1>
        <div className="flex">
          <button
            className={` text-gray-400 hover:text-gray-100 text-base 2xl:text-lg`}
          >
            <RxCross2
              onClick={() => close()}
              className=" w-6 h-6 2xl:w-6 2xl:h-6 text-[#ABABAB]"
            />
          </button>
        </div>
      </div>
      <div className=" flex gap-4 items-center w-full px-4 pt-5">
        <div className="small-component-color rounded-xl px-[20px] py-[10px] w-15 h-15 text-3xl text-center">
          ?
        </div>
        <p className=" italic text-[#DBDBDB] text-xl">Coming soon</p>
      </div>
      <div className="w-full px-4 pt-5">
        <h1 className="flex font-medium text-xl text-[#AAA9A1]">Language</h1>
        <LanguageList />
      </div>
      <ul className="px-8 space-y-6 w-full py-10">
        <li className="flex items-center gap-3 cursor-pointer">
          <BsExclamationCircle className=" text-[#DBDBDB] w-6 h-6" />
          <p className="text-[#AAA9A1] text-xl font-medium">About</p>
        </li>
        <li className="flex items-center gap-3 cursor-pointer">
          <BsQuestionCircle className=" text-[#DBDBDB] w-6 h-6" />
          <p className="text-[#AAA9A1] text-xl font-medium">How to use</p>
        </li>
        <li className="flex items-center gap-3 cursor-pointer">
          <BsBook className=" text-[#DBDBDB] w-6 h-6" />
          <p className="text-[#AAA9A1] text-xl font-medium">Docs</p>
        </li>
        <li className="flex items-center gap-3 cursor-pointer">
          <BsGithub className=" text-[#DBDBDB] w-6 h-6" />
          <p className="text-[#AAA9A1] text-xl font-medium">Github</p>
        </li>
      </ul>
    </div>
  );
};

export default SettingsPopup;
