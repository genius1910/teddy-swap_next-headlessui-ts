"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

interface Props {
  tabs: {
    name: string;
    params: string;
  }[];
}

const HomeGroupButton = ({ tabs }: Props) => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const router = useRouter();
  return (
    <div className="flex justify-center items-center">
      <ul className=" rounded-full component-color flex items-center">
        {tabs.map((item, i) => {
          return (
            <li
              onClick={() => router.push(`/dashboard?tab=${item.params}`)}
              className={`${
                (item.params == tab || (i == 0 && !tab)) && " text-white"
              } cursor-pointer px-6 md:px-8 2xl:px-14 py-2 text-xs 2xl:text-base text-neutral-400 hover:text-white font-semibold transition-all`}
              key={item.params}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeGroupButton;
