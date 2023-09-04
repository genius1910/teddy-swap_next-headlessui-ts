"use client";

import React, { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

interface Props {
  tabs: string[];
  setTabs: (value: string[]) => void;
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const FarmGroupButton = ({ tabs, setTabs, activeTab, setActiveTab }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <ul className=" rounded-full component-color flex items-center">
        {tabs.map((item) => {
          return (
            <li
              onClick={() => setActiveTab(item)}
              className={`${
                item == activeTab && " text-white flex items-end"
              } cursor-pointer relative px-6 md:px-8 2xl:px-14 py-2 text-xs 2xl:text-base text-neutral-400 hover:text-white font-semibold transition-all`}
              key={item}
            >
              <span>{item}</span>
              {item == "ADA / TEDY" && item == activeTab && (
                <HiOutlineXMark className=" text-white w-5 h-5 pb-1" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FarmGroupButton;
