import Trade_Leftside from "@/components/trade/page/Trade_Leftside";
import Trade_Rightside from "@/components/trade/page/Trade_Rightside";
import React from "react";

const Trade = () => {
  return (
    <div className="grid grid-cols-12 w-full gap-8 px-4 2xl:px-0 items-start">
      <div className=" col-span-12 xl:col-span-4">
        <Trade_Leftside />
      </div>
      <div className=" col-span-12 xl:col-span-8  component-color  rounded-2xl p-6">
        <Trade_Rightside />
      </div>
    </div>
  );
};

export default Trade;
