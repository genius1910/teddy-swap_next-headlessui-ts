import Image from "next/image";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdArrowDownward } from "react-icons/md";
import { BsExclamationCircle, BsPatchCheckFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

const DEX_BottomTable = () => {
  return (
    <div className="w-full mt-6 component-color rounded-2xl ">
      <div className="px-4 sm:px-8 py-6">
        <div className="flex items-center gap-4">
          <div className=" relative">
            <select
              className=" text-[15px] leading-[18.3px] py-3 bg-[#333B4B] rounded-[8px] ml-[4px] pr-2 w-[58px] h-10 pl-[11px] pt-[12px]"
              style={{ appearance: "none" }}
            >
              <option value="1D">1D</option>
              <option value="2D">2D</option>
              <option value="3D">3D</option>
              <option value="1W">1W</option>
            </select>
            <MdKeyboardArrowDown className=" absolute right-2.5 w-4 h-4 font-extrabold top-3" />
          </div>
          <div className="relative bg-[#333B4B] flex w-10/12 sm:w-auto items-center rounded-[6px] -ml-[6px] h-10">
            <AiOutlineSearch className=" text-[#C7C7C7] text-[22px] ml-[10px]" />
            <input
              placeholder="Type token name, ticker, or policy id"
              className="text-[#C7C7C7] text-[14px] w-full sm:w-[368px] py-3 ml-[8px] bg-transparent outline-none rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto whitespace-nowrap">
        <table className="tbody-b-remove w-full">
          <thead className="text-[#DBDBDB] text-[13.32px] leading-[16.24px]">
            <tr>
              <th className="w-10" />
              <th className="pb-[15px] font-medium text-left w-8 pr-2  border-b-[1px] border-b-[#FFFFFF47] ">
                #
              </th>
              <th className="pb-[15px] font-medium text-left w-[320px] pr-[100px] border-b-[1px] border-b-[#FFFFFF47] ">
                Token name
              </th>
              <th className="pb-[15px] font-medium text-right w-[134px] pr-[10px] border-b-[1px] border-b-[#FFFFFF47] ">
                Price
              </th>
              <th className="pb-[15px] font-medium text-right w-[158px] pr-[10px] border-b-[1px] border-b-[#FFFFFF47] ">
                Change 1D
              </th>
              <th className="pb-[15px] font-medium text-right w-[166px] pr-[24px] border-b-[1px] border-b-[#FFFFFF47] ">
                <span className="flex items-center justify-end place-items-end gap-1 relative">
                  Volume 1D
                  <BsExclamationCircle
                    title="The total trading volume for the entire Cardano DEX over the past 24 hours."
                    className="w-2.5 h-2.5 absolute  right-[-13px] cursor-pointer"
                  />
                </span>
              </th>
              <th className="pb-[15px] font-medium text-right items-end w-[117px] pr-[24px] border-b-[1px] border-b-[#FFFFFF47] ">
                <span className="flex items-center justify-end place-items-end gap-1 relative">
                  <MdArrowDownward className="w-4 h-4 text-[#268AFF]" /> TVL{" "}
                  <BsExclamationCircle
                    title="The total value of the liquidity in the entire Cardano Decentralized Exchange (DEX)."
                    className="w-2.5 h-2.5 absolute  right-[-13px] cursor-pointer"
                  />
                </span>
              </th>
              <th className="pb-[15px] font-medium rounded-r-md text-left border-b-[1px] border-b-[#FFFFFF47] ">
                <span className="flex items-center justify-end place-items-end gap-1 relative">
                  FD Market cap
                  <BsExclamationCircle
                    title="The fully diluted market capitalization of Teddy, taking into account the liquidity in the Teddy/ADA pool."
                    className="w-2.5 h-2.5 absolute right-[-13px] cursor-pointer"
                  />
                </span>
              </th>
              <th className="w-[47px]" />
            </tr>
          </thead>
          <tbody className=" cursor-pointer medium-text rounded-lg transition-all duration-150 ease-in-out justify-center items">
            <tr className="h-3" />
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <tr key={item} className="hover:bg-[#D9D9D9]/10">
                  <td className="w-10" />
                  <td className="py-2 text-[#C4C4C4] text-left text-sm pt-3">
                    {index + 1}
                  </td>
                  <td className=" pl-[14px] py-2">
                    <span className="flex items-center gap-3">
                      <Image
                        src={`/images/assets/teddy.png`}
                        alt="icon2"
                        width={26}
                        height={26}
                        className="-ml-3"
                      />
                      <div className="flex gap-1 items-center">
                        <p className="text-[16px] leading-[19.5px] font-[500]">
                          TEDY
                        </p>
                        <BsPatchCheckFill className="w-2.5 h-2.5" />
                        <p className="text-[#8D8D8D] text-[10px] leading-[12.2px] mt-0.5">
                          TeddySwap
                        </p>
                      </div>
                    </span>
                  </td>
                  <td className="py-2 gap-1 text-right pr-[10px]">
                    <span className="text-[16px] leading-[19.5px] font-[500] text-[#DBDBDB]">
                      ₳2.000341
                    </span>
                  </td>
                  <td className="py-2  gap-1  text-[#2CC696] text-right pr-[10px]">
                    <span className="text-[16px] leading-[19.5px] font-[500] ">
                      +{(Math.random() * 4).toFixed(2)}%
                    </span>
                  </td>
                  <td className="py-2  gap-1  text-right pr-[24px] text-[#DBDBDB] font-[500]">
                    <span className="text-[16px] leading-[19.5px]">
                      {" "}
                      ₳{(Math.random() * 7).toFixed(1)}M
                    </span>
                  </td>
                  <td className="py-2  gap-1  text-right pr-[24px] text-[#DBDBDB] font-[500]">
                    <span className="text-[16px] leading-[19.5px]">
                      {" "}
                      ₳{(Math.random() * 7).toFixed(1)}M
                    </span>
                  </td>
                  <td className="py-2  gap-1  text-right">
                    <span className="text-[16px] leading-[19.5px] text-[#DBDBDB] font-[500]">
                      {" "}
                      ₳{(Math.random() * 120).toFixed(0)}M
                    </span>
                  </td>
                  <td className="w-[47px]" />
                </tr>
              );
            })}
            <tr className="h-3" />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DEX_BottomTable;
