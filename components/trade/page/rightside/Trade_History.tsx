import React from "react";

const Trade_History = () => {
  return (
    <div className="component-color rounded-[14px] pt-[30px] pl-[34px] pr-[30px] pb-4">
      <p className=" text-[20px] leading-6 font-semibold mr-[6px]">
        Trading History
      </p>
      <div className="mt-8 overflow-x-auto whitespace-nowrap text-left">
        <table className="">
          <tbody className="">
            <tr className="text-sm font-semibold border-b border-b-gray-400/30">
              <th className=" py-2 font-medium">Created Time</th>
              <th className="mr-2 px-2 py-2 font-medium">Type</th>
              <th className=" px-2 py-2 font-medium">Price</th>
              <th className=" px-2 py-2 font-medium">Input</th>
              <th className=" px-2 py-2 font-medium">Output</th>
              <th className=" px-2 py-2 font-medium">Owner</th>
            </tr>
          </tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => {
            return (
              <tbody key={item} className=" border-b-0">
                <tr>
                  <td className="pr-12 pl-0 py-4 text-sm font-medium">
                    2023-03-21 13:46 GMT-5
                  </td>
                  <td className="pr-12 w-full pl-2 py-4 flex flex-col text-sm font-medium">
                    {Math.random() > 0.5 ? (
                      <span className="text-[#FF4C4C]">Sell</span>
                    ) : (
                      <span className="text-[#00FDC0]">Buy</span>
                    )}
                  </td>
                  <td className="pr-12 pl-2 py-4 text-sm font-medium">0 ADA</td>
                  <td className="pr-12 pl-2 py-4 text-sm font-medium">
                    363,927,1119 cNETA
                  </td>
                  <td className="px-7 pl-2 py-4  text-sm font-medium">
                    {(Math.random() * 9.2819186).toFixed(6)} ADA
                  </td>
                  <td className="px-7 pl-2 py-4 w-full text-sm font-medium">
                    addj4f7...92vt
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Trade_History;
