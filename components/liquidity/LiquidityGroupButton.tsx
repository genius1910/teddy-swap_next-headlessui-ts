"use client";

import React, { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface Props {
  tabs: string[];
  setTabs: (value: string[]) => void;
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const LiquidityGroupButton = ({
  tabs,
  setTabs,
  activeTab,
  setActiveTab,
}: Props) => {
  return (
    <div className="flex justify-center items-center">
      <ul className=" rounded-full component-color flex items-center flex-wrap justify-center">
        {tabs.map((item) => {
          return (
            <li
              onClick={() => setActiveTab(item)}
              className={`${item == activeTab && " text-white flex items-center justify-center"
                } cursor-pointer relative px-6 md:px-8 2xl:px-14 py-2 text-xs 2xl:text-base text-neutral-400 hover:text-white font-semibold transition-all`}
              key={item}
            >
              <span>{item}</span>
              {item == "ADA / TEDY" && item == activeTab && (
                <HiOutlineXMark className=" text-white w-4 h-4" />
              )}
            </li>
          );
        })}
        <li>
          <button
            onClick={() => setActiveTab("ADA / TEDY")}
            className={`cursor-pointer px-6 2xl:pl-10 2xl:pr-4 md:pl-8 md:pr-4 py-2 text-xs 2xl:text-base text-neutral-400 hover:text-white font-semibold transition-all`}
          >
            <AiOutlinePlusCircle className=" text-neutral-400 hover:text-white w-5 h-5 transition-all" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LiquidityGroupButton;
