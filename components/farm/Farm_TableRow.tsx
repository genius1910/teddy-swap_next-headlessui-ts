import React, { Fragment, useState } from "react";
import Image from "next/image";
import {
  BsChevronDown,
  BsPatchCheckFill,
  BsQuestionCircle,
} from "react-icons/bs";

interface Props {
  item: number;
  setActiveTab: (value: string) => void;
}
const Farm_TableRow = ({ item, setActiveTab }: Props) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Fragment>
      <tbody className="border-b-1 border-b-[#3D505A]">
        <tr
          onClick={() =>
            showDetails ? setShowDetails(false) : setShowDetails(true)
          }
          className={`${showDetails && "border-b-0 mb-20"} cursor-pointer`}
        >
          <td className={`px-10 pl-8 py-4`}>
            <span className="flex items-center">
              <Image
                src={`/images/assets/token-1.png`}
                alt="icon1"
                width={30}
                height={30}
              />
              <Image
                src={`/images/assets/teddy.png`}
                alt="icon2"
                width={30}
                height={30}
                className="-ml-3"
              />
              <p className="ml-3 text-[16px] leading-[19.5px] font-semibold">
                ADA/TEDY
              </p>
              <BsPatchCheckFill className="ml-[6px] w-[14px] h-[14px]" />
            </span>
          </td>
          <td className="px-8 lg:px-16 py-[30px] text-[15px] leading-[18px] font-medium text-[#DBDBDB]">
            <span>26.29M ₳</span>
          </td>
          <td className="px-8 lg:px-16 py-[30px]  gap-1 text-[15px] leading-[18px] font-medium text-[#DBDBDB]">
            <span>82%</span>
          </td>
          <td className="px-8 lg:px-16 py-[30px]  gap-1 text-[15px] leading-[18px] font-medium text-[#DBDBDB]">
            <span>8,230,456 TEDY</span>
          </td>
          <td className="px-8 lg:px-16 py-[30px] gap-1 text-[15px] leading-[18px] font-medium text-[#DBDBDB]">
            <span>12,768 LP</span>
          </td>
          <td className=" py-8  text-[15px] leading-[18px] font-medium text-[#DBDBDB] flex flex-row justify-between">
            <span className="pl-12">122.63%</span>
            <span className="flex items-center gap-1 pl-12">
              <Image
                src={`/images/assets/token-1.png`}
                alt="icon1"
                width={21}
                height={21}
              />
              <Image
                src={`/images/assets/teddy.png`}
                alt="icon2"
                width={21}
                height={21}
                className="-ml-3"
              />
            </span>
          </td>
          <td className=" pl-6 pr-2">
            <Image
              src="/images/assets/BsChevronDown.svg"
              alt="Batchers info"
              width={14}
              height={8}
              className="drop-shadow-2xl
            "
            />
          </td>
        </tr>
        {showDetails && (
          <tr className="bg-black/10 ">
            <td colSpan={9} className=" border-t-0 bg-black/10 overflow-hidden">
              <span className=" px-[34px] py-8 flex justify-between">
                <p className="text-base ml-1">
                  <span className=" flex items-center gap-3">
                    <Image
                      src={`/images/assets/token-2.png`}
                      alt="icon1"
                      width={31}
                      height={31}
                    />
                    <span className="flex flex-col gap-[2px]">
                      <div className="flex flex-row justify-center items-center gap-1">
                        <span className="text-[14px] leading-[17px] font-medium text-[#899398]">
                          Pending TEDY
                        </span>
                        <BsQuestionCircle
                          title="The amount of Teddy tokens that you are due to receive from the farm, but have not yet been claimed."
                          className="w-[10px] h-[10px] cursor-pointer"
                        />
                      </div>

                      <span className="text-[18px] leading-[22px] font-medium">
                        1,221
                      </span>
                    </span>
                  </span>
                  <br />
                  <span className=" flex items-center gap-3 mt-4">
                    <Image
                      src={`/images/assets/token-3.png`}
                      alt="icon1"
                      width={31}
                      height={31}
                    />
                    <span className="flex flex-col gap-[2px]">
                      <div className="flex flex-row justify-center items-center gap-1">
                        <span className="text-[14px] leading-[17px] font-medium text-[#899398]">
                          Pending ADA
                        </span>
                        <BsQuestionCircle
                          title="The amount of ADA tokens that you are due to receive from the farm, but have not yet been claimed."
                          className="w-[10px] h-[10px] cursor-pointer"
                        />
                      </div>

                      <span className="text-[18px] leading-[22px] font-medium">
                        1,221
                      </span>
                    </span>
                  </span>
                </p>

                <p className="flex flex-col gap-1 ml-12 text-base">
                  <span>
                    <span className="text-[14px] leading-[17px] font-medium text-[#899398]">
                      Harvested
                    </span>
                    <br />
                    <span className="text-[18px] leading-[22px] font-medium">
                      12,432
                    </span>
                  </span>
                  <br />
                  <span className="-mt-2">
                    <span className="text-[14px] leading-[17px] font-medium text-[#899398]">
                      Harvested
                    </span>
                    <br />
                    <span className="text-[18px] leading-[22px] font-medium">
                      28.2
                    </span>
                  </span>
                </p>
                <p className="px-6 py-3 flex gap-6 text-[16px] leading-[19.5px] font-semibold items-start my-auto translate-y-2/6">
                  <button
                    onClick={() => {
                      setActiveTab("ADA / TEDY");
                    }}
                    className="primary-button w-[204px] rounded-[12px]"
                  >
                    Harvest
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("ADA / TEDY");
                    }}
                    className="primary-button w-[204px] rounded-[12px]"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("ADA / TEDY");
                    }}
                    className="third-button w-[204px] rounded-[12px]"
                  >
                    Withdraw
                  </button>
                </p>
              </span>
            </td>
          </tr>
        )}
      </tbody>
    </Fragment>
  );
};

export default Farm_TableRow;
