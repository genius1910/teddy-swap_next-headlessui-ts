"use client";

import React, { useState } from "react";

interface Props {
  tabs: string[];
  setTabs: (value: string[]) => void;
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const HomeGroupButton = ({ tabs, setTabs, activeTab, setActiveTab }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <ul className=" rounded-full component-color flex items-center">
        {tabs.map((item) => {
          return (
            <li
              onClick={() => setActiveTab(item)}
              className={`${
                item == activeTab && " text-white"
              } cursor-pointer px-8 2xl:px-14 py-2 text-sm md:text-base 2xl:text-lg text-neutral-400 hover:text-white font-semibold transition-all`}
              key={item}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeGroupButton;
