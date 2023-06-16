"use client";
import LiquidityGroupButton from "@/components/liquidity/LiquidityGroupButton";
import Liquidity_BottomTable from "@/components/liquidity/Liquidity_BottomTable";
import Liquidity_Leftside from "@/components/liquidity/Liquidity_Leftside";
import Liquidity_Your from "@/components/liquidity/Liquidity_Your";
import Trade_Leftside from "@/components/trade/page/Trade_Leftside";
import Trade_Rightside from "@/components/trade/page/Trade_Rightside";
import React, { useState } from "react";

const Liquidity = () => {
  const [activeTab, setActiveTab] = useState("All Liquidity");
  const [tabs, setTabs] = useState(["All Liquidity", "Your Liquidity"]);

  return (
    <div className="relative px-2">
      <LiquidityGroupButton
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
        setTabs={setTabs}
      />
      {activeTab == "All Liquidity" ? (
        <Liquidity_BottomTable setActiveTab={setActiveTab} />
      ) : activeTab == "Your Liquidity" ? (
        <Liquidity_Your setActiveTab={setActiveTab} />
      ) : activeTab == "ADA / TEDY" ? (
        <div className="grid grid-cols-12 w-full gap-8 px-4 2xl:px-0 mt-10 items-start">
          <div className=" col-span-12 xl:col-span-4">
            <Liquidity_Leftside />
          </div>
          <div className=" col-span-12 xl:col-span-8 ">
            <Trade_Rightside
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>
      ) : (
        "Select Tab"
      )}
    </div>
  );
};

export default Liquidity;
