"use client";
import LiquidityGroupButton from "@/components/liquidity/LiquidityGroupButton";
import Liquidity_BottomTable from "@/components/liquidity/Liquidity_BottomTable";
import React, { useState } from "react";

const Liquidity = () => {
  const [activeTab, setActiveTab] = useState("All Liquidity");
  const [tabs, setTabs] = useState(["All Liquidity", "Your Liquidity"]);

  return (
    <div className="relative">
      <LiquidityGroupButton
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
        setTabs={setTabs}
      />
      {activeTab == "All Liquidity" && <Liquidity_BottomTable />}
    </div>
  );
};

export default Liquidity;
