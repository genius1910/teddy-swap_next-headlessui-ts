"use client";
import FarmGroupButton from "@/components/farm/FarmGroupButton";
import Farm_BottomTable from "@/components/farm/Farm_BottomTable";
import Farm_Dashboard from "@/components/farm/Farm_Dashboard";
import Farm_Leftside from "@/components/farm/Farm_Leftside";
import Farm_Rightside from "@/components/farm/Farm_Rightside";
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
    <div className="px-2">
      <FarmGroupButton
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
        setTabs={setTabs}
      />
      <div className="relative px-2 max-2xl:max-w-[1400px] mx-auto xl:zoom-80 2xl:zoom-100">
        {activeTab == "All Farms" ? (
          <Farm_BottomTable setActiveTab={setActiveTab} />
        ) : activeTab == "Your Farms" ? (
          <div>
            <Farm_Dashboard />
            <Farm_BottomTable
              isItDashboard={true}
              setActiveTab={setActiveTab}
            />
          </div>
        ) : activeTab == "ADA / TEDY" ? (
          <div className="grid grid-cols-12 w-full gap-6 mt-8 items-start">
            <div className=" col-span-12 xl:col-span-4">
              <Farm_Leftside />
            </div>
            <div className=" col-span-12 xl:col-span-8 ">
              <Farm_Rightside
                setActiveTab={setActiveTab}
                activeTab={activeTab}
              />
            </div>
          </div>
        ) : (
          "Select a tab"
        )}
      </div>
    </div>
  );
};

export default Index;
