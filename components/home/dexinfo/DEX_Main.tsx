import React from "react";
import DEX_Leftside from "./DEX_Leftside";
import DEX_Rightside from "./DEX_Rightside";
import DEX_BottomTable from "./DEX_BottomTable";
import TimeGroupButton from "../TimeGroupButton";

const DEX_Main = () => {
  return (
    <div className="max-xl:max-w-[1400px] mx-auto xl:zoom-80 xl:zoom-100">
      <div className="flex justify-between items-start w-full gap-8 flex-col xl:flex-row">
        <DEX_Leftside />
        <DEX_Rightside />
      </div>
      <div className="">
        <DEX_BottomTable />
      </div>
    </div>
  );
};

export default DEX_Main;
