import React from "react";

const Trade_Hystory = () => {
  return (
    <div className="component-color mt-8 p-6 xl:p-8 rounded-2xl">
      <h1 className="heading-xl font-medium pb-4">Trading Hystory</h1>
      <div className="mt-6 overflow-x-auto whitespace-nowrap text-left">
        <table className="">
          <tbody className="">
            <tr className="text-base border-b border-b-gray-400/20">
              <th className=" py-2 font-medium">Created Time</th>
              <th className=" px-2 py-2 font-medium">Type</th>
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
                  <td className="pr-12 pl-0 py-4 text-sm">
                    2023-03-21 13:46 GMT-5
                  </td>
                  <td className="pr-12 w-full pl-2 py-4 flex flex-col text-sm">
                    {Math.random() > 0.5 ? (
                      <span className="text-[#FF4C4C]">Sell</span>
                    ) : (
                      <span className="text-[#00FDC0]">Buy</span>
                    )}
                  </td>
                  <td className="pr-12 pl-2 py-4  text-sm">0 ADA</td>
                  <td className="pr-12 pl-2 py-4  text-sm">
                    363,927,1119 cNETA
                  </td>
                  <td className="px-7 pl-2 py-4  text-sm">
                    {(Math.random() * 9.2819186).toFixed(6)} ADA
                  </td>
                  <td className="px-7 pl-2 py-4 w-full text-sm">
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

export default Trade_Hystory;
