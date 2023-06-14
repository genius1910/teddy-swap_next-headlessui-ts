"use client";
import LBE_Leftside from "@/components/lbe/LBE_Leftside";
import LBE_Rightside from "@/components/lbe/LBE_Rightside";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [hydration, setHydration] = useState(false);
  useEffect(() => {
    setHydration(true);
  }, []);
  return (
    <div className="grid grid-cols-12 w-full gap-8 px-4 2xl:px-0 items-start">
      <div className=" col-span-12 xl:col-span-4 component-color rounded-lg px-6 py-6">
        <LBE_Leftside />
      </div>
      <div className=" col-span-12 xl:col-span-8 component-color  rounded-lg">
        {hydration && <LBE_Rightside />}
      </div>
    </div>
  );
};

export default Index;
