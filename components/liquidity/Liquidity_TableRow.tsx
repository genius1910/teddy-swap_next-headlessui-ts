import React, { Fragment, useState } from "react";
import Image from "next/image";
import {
  BsChevronDown,
  BsExclamationCircle,
  BsPatchCheck,
  BsPatchCheckFill,
} from "react-icons/bs";

interface Props {
  item: number;
  setActiveTab: (value: string) => void;
}
const Liquidity_TableRow = ({ item, setActiveTab }: Props) => {
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
            <span>450.88K ₳</span>
          </td>
          <td className="px-8 lg:px-16 py-[30px]  gap-1 text-[15px] leading-[18px] font-medium text-[#DBDBDB]">
            <span>8,230,456 TEDY</span>
          </td>
          <td className="px-8 lg:px-16 py-[30px] gap-1 text-[15px] leading-[18px] font-medium text-[#DBDBDB]">
            <span>0.23%</span>
          </td>
          <td className=" py-8  text-[15px] leading-[18px] font-medium text-[#DBDBDB] flex flex-row justify-between">
            <span className="pl-12">53</span>
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
          <tr>
            <td colSpan={9} className=" border-t-0 bg-black/10 overflow-hidden">
              <span className="flex justify-between">
                <p className="pl-[31px] py-6 flex flex-col gap-[11px] text-base pb-12">
                  <span className="text-[16px] leading-[19.5px] font-medium text-[#899398]">
                    Price
                  </span>
                  <span className="text-[14px] leading-[17.5px] font-medium text-[#DBDBDB]">
                    <span className=" text-gray-300 text-sm">
                      1 ADA = 10.4545 TEDDY
                    </span>
                    <br />
                    <span className=" text-gray-300 text-sm">
                      1 TEDY = 0.19903 ADA
                    </span>
                  </span>
                </p>
                <p className="pl-[16px] py-6 flex flex-col gap-[11px] text-base pb-12">
                  <span className="text-[16px] leading-[19.5px] font-medium text-[#899398] flex items-center gap-[2px]">
                    <span>Total Liquidity</span>{" "}
                    <button>
                      <BsExclamationCircle
                        title="The total value of liquidity in the Teddy/ADA pool."
                        className="w-[10px] h-[10px]"
                      />
                    </button>
                  </span>
                  <span className="text-[14px] leading-[17.5px] font-medium text-[#DBDBDB]">
                    <span className=" text-gray-300 text-sm">
                      ADA: 26,747,918
                    </span>
                    <br />
                    <span className=" text-gray-300 text-sm">
                      TEDY: 134,384,920
                    </span>
                  </span>
                </p>
                <p className="pl-[24px] py-6 flex flex-col gap-[11px] text-base pb-12">
                  <span className="text-[16px] leading-[19.5px] font-medium text-[#899398] flex items-center gap-[2px]">
                    Your Liquidity{" "}
                    <button>
                      <BsExclamationCircle
                        title="The amount of liquidity that you have provided to the Teddy/ADA pool."
                        className="w-[10px] h-[10px]"
                      />
                    </button>
                  </span>
                  <span className="text-[14px] leading-[17.5px] font-medium text-[#DBDBDB]">
                    <span className=" text-gray-300 text-sm">ADA: 0</span>
                    <br />
                    <span className=" text-gray-300 text-sm">TEDY: 2</span>
                  </span>
                </p>
                <p className="pl-[20px] py-6 flex flex-col gap-[11px] text-base pb-12">
                  <span className="text-[16px] leading-[19.5px] font-medium text-[#899398] flex items-center gap-[2px]">
                    Impermanent Loss (1M){" "}
                    <button>
                      <BsExclamationCircle
                        title="The potential loss that you can incur due to price fluctuations when providing liquidity to the Teddy/ADA"
                        className="w-[10px] h-[10px]"
                      />
                    </button>
                  </span>
                  <span className="text-[14px] leading-[17.5px] font-medium text-[#DBDBDB]">
                    <span>2.3</span>
                    <span> </span>
                  </span>
                </p>
                <p className="px-6 py-3 flex gap-6  items-start my-auto translate-y-2/6 text-[16px] leading-[19.5px] font-semibold">
                  <button className="primary-button w-[204px] rounded-[12px]">
                    Swap
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("ADA / TEDY");
                    }}
                    className="primary-button w-[204px] rounded-[12px]"
                  >
                    Add liquidity
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

export default Liquidity_TableRow;
