import Image from "next/image";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

const Trade_TopPairs = () => {
  return (
    <div className="mt-6 overflow-x-auto whitespace-nowrap component-color rounded-lg px-4 sm:px-8 py-6">
      <table>
        <tbody className=" text-base ">
          <tr>
            <th className=" px-4 py-2 font-medium rounded-l-md text-base">
              Top Pairs
            </th>
            <th className=" px-4 py-2 font-medium">Price</th>
            <th className=" px-4 py-2 font-medium">TVL</th>
            <th className=" px-4 py-2 font-medium">Volume 24H</th>
            <th className=" px-4 py-2 font-medium">Volume 7D</th>
            <th className=" px-4 py-2 font-medium">24H %</th>
            <th className=" px-4 py-2 font-medium rounded-r-md"></th>
          </tr>
        </tbody>
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <tbody key={item} className=" ">
              <tr>
                <td className="px-10 pl-4 py-4">
                  <span className="flex items-center gap-1">
                    <Image
                      src={`/images/assets/token-1.png`}
                      alt="icon1"
                      width={29}
                      height={29}
                    />
                    <Image
                      src={`/images/assets/teddy.png`}
                      alt="icon2"
                      width={29}
                      height={29}
                      className="-ml-3"
                    />
                    <h4 className="text-base">ADA/TEDY</h4>
                    <MdCheckCircle className="w-3 h-3" />
                  </span>
                </td>
                <td className="px-10 py-4 flex flex-col gap-1 text-base">
                  <span>2.000341 ₳</span>
                  <span className=" text-xs">0.871$</span>
                </td>
                <td className="px-10 py-4  gap-1 text-base">
                  <span>13.63M ₳</span>
                </td>
                <td className="px-10 py-4  gap-1 text-base">
                  <span>450.88K ₳</span>
                </td>
                <td className="px-10 py-4  gap-1 text-base">
                  <span>112,450.88K ₳</span>
                </td>
                <td className="px-10  py-4 text-o_green gap-1 text-base">
                  <span>0.23%</span>
                </td>
                <td className="px-10  py-4 text-o_red gap-1 text-base">
                  <span>0.44%</span>
                </td>
                <td className="px-10 py-4  gap-1 text-base">
                  <span>8,230,456 ADA</span>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Trade_TopPairs;
