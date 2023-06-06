"use client";
import LBE_Leftside from "@/components/lbe/LBE_Leftside";
import LBE_Rightside from "@/components/lbe/LBE_Rightside";
import React from "react";

const Index = () => {
  return (
    <div className="grid grid-cols-8 w-full gap-8 px-4 2xl:px-0 items-start">
      <div className=" col-span-8 xl:col-span-3 component-color rounded-lg px-6 py-6">
        <LBE_Leftside />
      </div>
      <div className=" col-span-8 xl:col-span-5 component-color  rounded-lg">
        <LBE_Rightside />
      </div>
    </div>
  );
};

export default Index;
