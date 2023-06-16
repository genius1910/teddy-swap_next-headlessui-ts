import Image from "next/image";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

interface Props {
  setActiveTabs: (value: string) => void;
}

const Trade_TopPairs = ({ setActiveTabs }: Props) => {
  return (
    <div className="mt-6 overflow-x-auto whitespace-nowrap component-color rounded-lg px-4 sm:px-8 py-6">
      <table>
        <tbody className=" text-sm text-left ">
          <tr>
            <th className="pr-4 py-2 font-medium rounded-l-md text-lg">
              Top Pairs
            </th>
            <th className=" pr-4 py-2 font-medium">Price</th>
            <th className=" pr-4 py-2 font-medium">Volume 24H</th>
            <th className=" pr-4 py-2 font-medium">Volume 7D</th>
            <th className=" pr-4 py-2 font-medium">24H %</th>
            <th className=" pr-4 py-2 font-medium rounded-r-md"></th>
          </tr>
        </tbody>
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <tbody key={item} className="w-full text-left">
              <tr>
                <td className="py-4 pr-20">
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
                    <h4 className="text-sm">ADA/TEDY</h4>
                    <MdCheckCircle className="w-3 h-3" />
                  </span>
                </td>
                <td className="py-4 pr-20  text-sm">₳0.0983</td>
                <td className=" py-4 pr-20  text-o_green text-sm">+0.23%</td>
                <td className=" py-4 pr-20  text-o_red text-sm">-0.44%</td>
                <td className="py-4 pr-16  text-sm">450.88K ₳</td>
                <td className="py-4 text-sm">
                  <button
                    onClick={() => {
                      setActiveTabs("ADA / TEDY");
                    }}
                    className="primary-button py-2 px-16 text-center"
                  >
                    {" "}
                    Trade
                  </button>
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
