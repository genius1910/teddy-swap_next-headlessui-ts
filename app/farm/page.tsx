"use client";
import FarmGroupButton from "@/components/farm/FarmGroupButton";
import Farm_BottomTable from "@/components/farm/Farm_BottomTable";
import React from "react";

const Index = () => {
  const [activeTab, setActiveTab] = React.useState("All Farms");
  const [tabs, setTabs] = React.useState(["All Farms", "Your Farms"]);

  React.useEffect(() => {
    if (activeTab == "ADA / TEDY") {
      setTabs(["All Farms", "Your Farms", "ADA / TEDY"]);
    } else {
      setTabs(["All Farms", "Your Farms"]);
    }
  }, [activeTab]);
  return (
    <div className="relative">
      <FarmGroupButton
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
        setTabs={setTabs}
      />
      {activeTab == "All Farms" ? (
        <Farm_BottomTable setActiveTab={setActiveTab} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Index;
