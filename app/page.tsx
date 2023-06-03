"use client";
import HomeGroupButton from "@/components/home/HomeGroupButton";
import Leftside from "@/components/home/Leftside";
import { useState } from "react";
import DashboardRightsideButtons from "@/components/home/DashboardRightsideButtons";
import Rightside from "@/components/home/Rightside";

export default function Home() {
  const [tabs, setTabs] = useState(["DEX Info", "User Info", "Pairs"]);
  return (
    <main className="relative">
      <HomeGroupButton tabs={tabs} setTabs={setTabs} />
      <div className="flex justify-between w-full flex-col 2xl:flex-row">
        <Leftside />
        <Rightside />
      </div>
    </main>
  );
}
