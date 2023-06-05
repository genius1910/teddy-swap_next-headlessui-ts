import React from "react";
import User_Rightside from "./User_Rightside";
import User_Leftside from "./User_Leftside";

const User_Main = () => {
  return (
    <>
      <div className="flex px-4 2xl:px-0 justify-between w-full flex-col 2xl:flex-row">
        <User_Leftside />
        <User_Rightside />
      </div>
    </>
  );
};

export default User_Main;
