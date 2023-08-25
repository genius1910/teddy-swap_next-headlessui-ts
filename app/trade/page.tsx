"use client";
import TradeGroupButton from "@/components/trade/TradeGroupButton";
import Trade_Leftside from "@/components/trade/page/Trade_Leftside";
import Trade_Rightside from "@/components/trade/page/Trade_Rightside";
import React from "react";

const Trade = () => {
  const [activeTab, setActiveTab] = React.useState("Select Pair");
  const [tabs, setTabs] = React.useState(["Select Pair", "ADA / TEDY"]);

  return (
    <div className="relative">
      <TradeGroupButton
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
        setTabs={setTabs}
      />
      <div className="max-2xl:max-w-[1400px] mx-auto xl:zoom-80 2xl:zoom-100 grid grid-cols-12 w-full gap-8 px-4 xl:px-0 items-start">
        <div className=" col-span-12 xl:col-span-4">
          <Trade_Leftside />
        </div>
        <div className=" col-span-12 xl:col-span-8 ">
          <Trade_Rightside activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </div>
  );
};

export default Trade;
