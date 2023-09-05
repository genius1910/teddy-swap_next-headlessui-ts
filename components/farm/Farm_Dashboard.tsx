import React from "react";
import Farm_Dash_Leftside from "./dashboard/Farm_Dash_Leftside";
import Farm_Dash_Rightside from "./dashboard/Farm_Dash_Rightside";

const Farm_Dashboard = () => {
  return (
    <div className="grid grid-cols-12 w-full gap-6 mt-8 items-start">
      <div className=" col-span-12 xl:col-span-3 relative">
        <Farm_Dash_Leftside />{" "}
      </div>
      <div className=" col-span-12 xl:col-span-9 h-full ">
        <Farm_Dash_Rightside />
      </div>
    </div>
  );
};

export default Farm_Dashboard;
