import React from "react";

const Progress = ({ percentage }: { percentage: number }) => {
  return (
    <div className="h-8 w-full bg-gray-600 mt-1 rounded-lg">
      <div
        className={`w-[${percentage}%] bg-gradient-to-r from-[#1882FF] to-[#36EBCA] h-full rounded-lg`}
      />
    </div>
  );
};

export default Progress;
