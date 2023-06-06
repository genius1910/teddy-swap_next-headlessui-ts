import React, { Fragment, useState } from "react";
import { MdArrowDownward, MdArrowUpward, MdCheckCircle } from "react-icons/md";
import Image from "next/image";

interface Props {
  item: number;
}
const Pairs_TableRow = ({ item }: Props) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Fragment>
      <tbody>
        <tr
          onClick={() =>
            showDetails ? setShowDetails(false) : setShowDetails(true)
          }
          className={`${
            showDetails && "border-b-0 bg-black/10 mb-20"
          } cursor-pointer`}
        >
          <td className={`px-10 pl-4 py-4`}>
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
            <span className="flex items-center">
              <span>0.23%</span>
              <MdArrowUpward className={`w-4 h-4 `} />
            </span>
          </td>
          <td className="px-10  py-4 text-o_red gap-1 text-base">
            <span className="flex items-center">
              <span>0.44%</span>
              <MdArrowDownward className={`w-4 h-4 `} />
            </span>
          </td>
          <td className="px-10 py-4  gap-1 text-base">
            <span>8,230,456 ADA</span>
          </td>
          <td className="px-10 py-4  gap-1 text-base">
            <span>here is line</span>
          </td>
        </tr>
        {showDetails && (
          <tr>
            <td colSpan={9} className=" border-t-0 bg-black/10 w-full ">
              <span className="flex">
                <p className="px-6 py-4 flex flex-col gap-1 text-base">
                  <span className=" text-gray-500">ADA Price</span>
                  <span className=" text-gray-300">1 ADA = 10.4545 TEDDY</span>
                </p>
                <p className="px-6 py-4 flex flex-col gap-1 text-base">
                  <span className=" text-gray-500">Pool tdergence</span>
                  <span className=" text-gray-300">3.2% (1 hour)</span>
                </p>
                <p className="px-6 py-4 flex flex-col gap-1 text-base">
                  <span className=" text-gray-500">Total LPs</span>
                  <span className=" text-gray-300">10393020302190034</span>
                </p>
                <p className="px-6 py-4 flex flex-col gap-1 text-base">
                  <span className=" text-gray-500">Trading Fees APR</span>
                  <span className=" text-gray-300">6.2%</span>
                </p>
                <p className="px-6 py-4 flex flex-col gap-1 text-base">
                  <span className=" text-gray-500">LP Fee</span>
                  <span className=" text-gray-300">0.23%</span>
                </p>
                <p className="px-6 py-4 flex gap-4 text-base">
                  <button className=" secondary-button w-52">Swap</button>
                  <button className="primary-button w-52">Add liquidity</button>
                </p>
              </span>
            </td>
          </tr>
        )}
      </tbody>
    </Fragment>
  );
};

export default Pairs_TableRow;
