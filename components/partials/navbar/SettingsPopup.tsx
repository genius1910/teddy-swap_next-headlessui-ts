import React from "react";
import { RxCross2 } from "react-icons/rx";
import LanguageList from "./LanguageList";
import { BsBook, BsExclamationCircle, BsGithub, BsQuestionCircle } from "react-icons/bs";

const SettingsPopup = ({ close }: { close: () => void }) => {
  return <div className="relative text-base 2xl:text-xl flex flex-col gap-6 items-center p-6 w-full text-gray-400 ">
    <div className="flex items-center justify-between w-full">
      <h1 className="flex gap-4 font-medium">
        Theme
      </h1>
      <div className="flex gap-4">
        <button
          className={` text-gray-400 hover:text-gray-100 text-base 2xl:text-lg`}
        >
          <RxCross2
            onClick={() => close()}
            className=" w-6 h-6 2xl:w-8 2xl:h-8 "
          />
        </button>
      </div>
    </div>
    <div className=" small-component-color rounded-xl p-2 flex justify-between items-center w-full">
      <button className="w-full py-2 text-white focus:border-[#3DFFDC] rounded-xl border border-transparent">Light</button>
      <button className="w-full py-2 text-white focus:border-[#3DFFDC] rounded-xl border border-transparent">Dark</button>
      <button className="w-full py-2 text-white focus:border-[#3DFFDC] rounded-xl border border-transparent">System</button>
    </div>
    <div className="w-full">
      <h1 className="flex gap-4 font-medium">
        Language
      </h1>
      <LanguageList />
    </div>
    <ul className="p-2 space-y-5 w-full">
      <li className="flex items-center gap-4 cursor-pointer text-gray-400">
        <BsExclamationCircle className=" text-gray-300" />
        <p>About</p>
      </li>
      <li className="flex items-center gap-4 cursor-pointer text-gray-400">
        <BsQuestionCircle className=" text-gray-300" />
        <p>How to use</p>
      </li>
      <li className="flex items-center gap-4 cursor-pointer text-gray-400">
        <BsBook className=" text-gray-300" />
        <p>Docs</p>
      </li>
      <li className="flex items-center gap-4 cursor-pointer text-gray-400">
        <BsGithub className=" text-gray-300" />
        <p>Github</p>
      </li>
    </ul>
  </div>;
};

export default SettingsPopup;
