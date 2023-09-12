import React, { useState } from "react";
import User_Rightside from "./User_Rightside";
import User_Leftside from "./User_Leftside";
import History_Table from "@/components/history/History_Table";
import LockButton from "@/components/svg/LockButton";
import TimeGroupButton from "../TimeGroupButton";
import UnlockButton from "@/components/svg/UnlockButton";
import useAuthenticate from "@/context/mobx/useAuthenticate";

const User_Main = () => {
  const [lock, setLock] = useState(false);

  const isWalletConnected = useAuthenticate.isWalletConnected();

  return (
    <section
      id="user-main"
      className="max-2xl:max-w-[1400px] mx-auto xl:zoom-80 2xl:zoom-100 px-4 pt-8"
    >
      <div
        className={`${
          isWalletConnected ? "justify-between" : "justify-end"
        } flex max-sm:justify-center max-sm:items-center gap-6 flex-wrap items-center mt-6 xl:mt-0 xl:px-0 sm:px-4`}
      >
        {isWalletConnected ? (
          <button
            onClick={() => (lock ? setLock(false) : setLock(true))}
            type="button"
            className="-mb-4 max-sm:mb-0"
          >
            {lock ? <UnlockButton /> : <LockButton />}
          </button>
        ) : (
          <span className="sr-only">No lock button</span>
        )}
        <div className={`${lock && "blur-sm pointer-events-none select-none"}`}>
          <TimeGroupButton isRelative={true} />
        </div>
      </div>
      <div
        className={`${
          lock && "blur-[10px] pointer-events-none select-none"
        } flex px-0 justify-between items-start w-full flex-col xl:flex-row transition duration-300`}
      >
        <User_Leftside />
        <User_Rightside />
      </div>
      <div
        className={`${
          lock && "blur-sm pointer-events-none select-none"
        } xl:px-0`}
      >
        <History_Table />
      </div>
    </section>
  );
};

export default User_Main;
