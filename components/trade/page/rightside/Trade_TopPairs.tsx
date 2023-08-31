import Image from "next/image";
import React from "react";
import { BsExclamationCircle, BsPatchCheckFill } from "react-icons/bs";
import { MdCheckCircle } from "react-icons/md";

interface Props {
  setActiveTabs: (value: string) => void;
}

const Trade_TopPairs = ({ setActiveTabs }: Props) => {
  return (
    <div className=" overflow-x-auto whitespace-nowrap component-color rounded-lg pt-5 pl-[42px] pr-4 pb-[10px] max-w-[910px]">
      <table>
        <thead className=" text-sm text-left ">
          <tr>
            <th className="pr-4 pt-2 pl-2 pb-[17px] font-semibold text-[20px] leading-6 text-[#DBDBDB] w-[227px]">
              Top Pairs
            </th>
            <th className=" pr-4 pt-2 pb-[17px] font-semibold text-[#DBDBDB] text-[14.4px] leading-[18px] w-[100px]">
              Price
            </th>
            <th className=" pl-2 pr-8 pt-2 pb-[17px] font-semibold text-[#DBDBDB] text-[14.4px] leading-[18px]">
              Change 24H
            </th>
            <th className=" px-2 pr-8 pt-2 pb-[17px] font-semibold text-[#DBDBDB] text-[14.4px] leading-[18px]">
              Change 7D
            </th>
            <th className=" px-2 pr-2 pt-2 pb-[17px] font-semibold text-[#DBDBDB] text-[14.4px] leading-[18px]">
              <div className="flex items-center gap-1">
                Volume 24H
                <button title={`24 volume changing data`}>
                  <BsExclamationCircle className="w-3 h-3" />
                </button>
              </div>
            </th>
            <th className=" pr-4 pt-2 pb-[17px] rounded-r-md"></th>
          </tr>
        </thead>
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <tbody key={item} className="w-full border-b-0 text-left">
              <tr>
                <td className="py-[25px] pr-16">
                  <span className="flex flex-row items-center gap-[6px] justify-center">
                    <Image
                      src={`/images/assets/token-1.png`}
                      alt="icon1"
                      width={22}
                      height={22}
                    />
                    <Image
                      src={`/images/assets/teddy.png`}
                      alt="icon2"
                      width={22}
                      height={22}
                      className="-ml-3"
                    />
                    <p className="text-[16px] font-semibold leading-[18px]">
                      ADA/TEDY
                    </p>
                    <BsPatchCheckFill className="w-[14px] h-[14px]" />
                  </span>
                </td>
                <td className="text-[14.4px] leading-[18px] font-medium text-[#DBDBDB]">
                  ₳0.0983
                </td>
                <td className=" pr-6 text-[14.4px] leading-[18px] font-medium text-[#7BEF8E] text-center">
                  +0.23%
                </td>
                <td className=" pr-6 text-[14.4px] leading-[18px] font-medium text-[#FF6060] text-center">
                  -0.44%
                </td>
                <td className="text-[14.4px] leading-[18px] font-medium text-[#DBDBDB] text-center">
                  450.88K ₳
                </td>
                <td className=" pl-4 text-[14.4px] leading-[18px] font-medium">
                  <button
                    onClick={() => {
                      setActiveTabs("ADA / TEDY");
                    }}
                    className="primary-button py-1.5 px-12 text-center rounded-lg"
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
