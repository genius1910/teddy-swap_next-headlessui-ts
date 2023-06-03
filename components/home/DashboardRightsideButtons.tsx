import React, { useState } from "react";

const times = ["1h", "1d", "1w", "1m", "3m", "1y", "All Time"];
const DashboardRightsideButtons = () => {
  const [currentTime, setCurrentTime] = useState("1w");
  return (
    <div className="flex flex-col right-0 top-2 mx-auto 2xl:absolute">
      {/* all button  */}
      <ul className="flex items-center component-color rounded-xl text-sm w-full">
        {times.map((item) => {
          return (
            <li key={item}>
              <button
                onClick={() => setCurrentTime(item)}
                className={`${
                  item == currentTime && "small-component-color rounded-xl"
                } text-white py-2 px-4`}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DashboardRightsideButtons;
