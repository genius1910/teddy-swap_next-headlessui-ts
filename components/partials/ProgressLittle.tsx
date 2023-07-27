import React from "react";

const ProgressLittle = ({ percentage }: { percentage: number }) => {
  return (
    <div className="relative h-6 w-full bg-gray-600 mt-1 rounded-lg">
      <div
        style={{ width: `${percentage}%` }}
        className={` bg-gradient-to-r from-[#1882FF] to-[#36EBCA] h-full rounded-lg`}
      />
      <p className="absolute drop-shadow-md text-xs inset-0 m-auto w-full h-full flex justify-center items-center">
        {percentage}%
      </p>
    </div>
  );
};

export default ProgressLittle;
