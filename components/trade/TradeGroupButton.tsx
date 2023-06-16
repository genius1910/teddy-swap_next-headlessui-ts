"use client";

import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";

interface Props {
  tabs: string[];
  setTabs: (value: string[]) => void;
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TradeGroupButton = ({
  tabs,
  setTabs,
  activeTab,
  setActiveTab,
}: Props) => {
  return (
    <div className="flex justify-center items-center mb-8">
      <ul className=" rounded-full component-color flex items-center">
        {tabs.map((item) => {
          return (
            <li
              onClick={() => setActiveTab(item)}
              className={`${
                item == activeTab && " text-white flex items-end"
              } cursor-pointer px-8 group 2xl:px-14 py-2 text-sm md:text-base 2xl:text-lg text-neutral-400 hover:text-white font-semibold transition-all`}
              key={item}
            >
              <span>{item} </span>
              {item == "ADA / TEDY" && item == activeTab && (
                <HiOutlineXMark className=" text-white w-5 h-5 pb-1" />
              )}
            </li>
          );
        })}
        <li>
          <button
            onClick={() => setActiveTab("ADA/TEDY")}
            className={`cursor-pointer px-8 2xl:pl-14 pr-4 py-2 text-sm md:text-base 2xl:text-lg text-neutral-400 hover:text-white font-semibold transition-all`}
          >
            <AiOutlinePlusCircle className=" text-neutral-400 hover:text-white w-8 h-8 transition-all" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TradeGroupButton;
