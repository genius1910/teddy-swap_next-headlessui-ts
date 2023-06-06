import React from "react";
import DEX_Leftside from "./DEX_Leftside";
import DEX_Rightside from "./DEX_Rightside";
import DEX_BottomTable from "./DEX_BottomTable";

const DEX_Main = () => {
  return (
    <>
      <div className="flex px-4 2xl:px-0 justify-between items-start w-full flex-col 2xl:flex-row">
        <DEX_Leftside />
        <DEX_Rightside />
      </div>
      <div className="px-4 2xl:px-0">
        <DEX_BottomTable />
      </div>
    </>
  );
};

export default DEX_Main;
