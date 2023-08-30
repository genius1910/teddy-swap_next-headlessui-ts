import React, { useState } from "react";

const times = ["1H", "1D", "1W", "1M", "3M", "1Y", "All Time"];
interface Props {
  isRelative?: boolean;
}
const TimeGroupButton = ({ isRelative }: Props) => {
  const [currentTime, setCurrentTime] = useState("1w");
  return (
    <div
      className={`flex whitespace-nowrap flex-col right-0 top-2 ${
        !isRelative && "2xl:absolute mx-auto"
      }`}
    >
      {/* all button  */}
      <ul className="flex items-center component-color rounded-xl text-sm w-full">
        {times.map((item) => {
          return (
            <li key={item}>
              <button
                onClick={() => setCurrentTime(item)}
                className={`${
                  item == currentTime && "small-component-color rounded-xl"
                } text-white py-2 px-3 sm:px-4`}
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

export default TimeGroupButton;
