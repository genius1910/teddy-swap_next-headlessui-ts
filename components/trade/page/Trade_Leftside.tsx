"use-client";
import React from "react";
import Trade_Swap from "./leftside/Trade_Swap";
import Trade_KeyStats from "./leftside/Trade_KeyStats";

const Trade_Leftside = () => {
  return (
    <div className="space-y-4">
      <div className="component-color rounded-2xl">
        <Trade_Swap />
      </div>
      <div className="component-color p-6 rounded-2xl">
        <Trade_KeyStats />
      </div>
    </div>
  );
};

export default Trade_Leftside;
