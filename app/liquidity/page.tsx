"use client";
import LiquidityGroupButton from "@/components/liquidity/LiquidityGroupButton";
import Liquidity_BottomTable from "@/components/liquidity/Liquidity_BottomTable";
import Liquidity_Leftside from "@/components/liquidity/Liquidity_Leftside";
import Liquidity_Rightside from "@/components/liquidity/Liquidity_Rightside";
import Liquidity_Your from "@/components/liquidity/Liquidity_Your";
import Trade_Leftside from "@/components/trade/page/Trade_Leftside";
import Trade_Rightside from "@/components/trade/page/Trade_Rightside";
import React, { useEffect, useState } from "react";

const Liquidity = () => {
  const [activeTab, setActiveTab] = useState("All Liquidity");
  const [tabs, setTabs] = useState(["All Liquidity", "Your Liquidity"]);

  useEffect(() => {
    if (activeTab == "ADA / TEDY") {
      setTabs(["All Liquidity", "Your Liquidity", "ADA / TEDY"]);
    } else {
      setTabs(["All Liquidity", "Your Liquidity"]);
    }
  }, [activeTab]);

  return (
    <div>
      <div className="px-2">
        <LiquidityGroupButton
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
          setTabs={setTabs}
        />
      </div>
      <div className="relative px-2 max-2xl:max-w-[1400px] mx-auto xl:zoom-80 2xl:zoom-100">
        {activeTab == "All Liquidity" ? (
          <Liquidity_BottomTable setActiveTab={setActiveTab} />
        ) : activeTab == "Your Liquidity" ? (
          <Liquidity_Your setActiveTab={setActiveTab} />
        ) : activeTab == "ADA / TEDY" ? (
          <div className="grid grid-cols-12 w-full gap-6 mt-10 items-start">
            <div className=" col-span-12 xl:col-span-4">
              <Liquidity_Leftside />
            </div>
            <div className="max-w-[910px] col-span-12 tradexl:col-span-8">
              <Liquidity_Rightside
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
          </div>
        ) : (
          "Select Tab"
        )}
      </div>
    </div>
  );
};

export default Liquidity;
