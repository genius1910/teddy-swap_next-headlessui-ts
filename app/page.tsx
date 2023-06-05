"use client";
import HomeGroupButton from "@/components/home/HomeGroupButton";
import DEX_Main from "@/components/home/dexinfo/DEX_Main";
import Pairs_Main from "@/components/home/pairs/Pairs_Main";
import User_Main from "@/components/home/userinfo/User_Main";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("DEX Info");
  const [tabs, setTabs] = useState(["DEX Info", "User Info", "Pairs"]);
  const [hydration, setHydration] = useState(false);
  useEffect(() => {
    setHydration(true);
  }, []);

  return (
    <main className="relative">
      <HomeGroupButton
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
        setTabs={setTabs}
      />
      {hydration && (
        <>
          {activeTab == "DEX Info" ? (
            <DEX_Main />
          ) : activeTab == "User Info" ? (
            <User_Main />
          ) : (
            <Pairs_Main />
          )}
        </>
      )}
    </main>
  );
}
