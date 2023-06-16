import React, { Fragment, useState } from "react";
import { MdArrowDownward, MdArrowUpward, MdCheckCircle } from "react-icons/md";
import Image from "next/image";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  item: number;
  setActiveTab: (value: string) => void;
}
const Farm_TableRow = ({ item, setActiveTab }: Props) => {
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
          <td className="px-8 lg:px-16 py-8 text-base">
            <span>26.29M ₳</span>
          </td>
          <td className="px-8 lg:px-16 py-8  gap-1 text-base">
            <span>82%</span>
          </td>
          <td className="px-8 lg:px-16 py-8  gap-1 text-base">
            <span>8,230,456 TEDY</span>
          </td>
          <td className="px-8 lg:px-16 py-8 gap-1 text-base">
            <span>12,768 LP</span>
          </td>
          <td className="px-8 lg:pl-16 py-8  text-base">
            <span className="flex items-center gap-1">
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
            </span>
          </td>
          <td className="w-full pr-8 ">
            <BsChevronDown className="w-4  h-4 text-o_cyan" />
          </td>
        </tr>
        {showDetails && (
          <tr>
            <td
              colSpan={9}
              className=" border-t-0 bg-black/10 w-full overflow-hidden"
            >
              <span className="flex justify-between">
                <p className="px-6 py-4  gap-1 text-base">
                  <span className=" flex items-center gap-2">
                    <Image
                      src={`/images/assets/token-2.png`}
                      alt="icon1"
                      width={29}
                      height={29}
                    />
                    <span className="flex flex-col">
                      <span className=" text-gray-400">Pending TEDY</span>
                      <span className=" text-cyan-gradient font-medium">
                        1,221
                      </span>
                    </span>
                  </span>
                  <br />
                  <span className=" flex items-center gap-2">
                    <Image
                      src={`/images/assets/token-3.png`}
                      alt="icon1"
                      width={29}
                      height={29}
                    />
                    <span className="flex flex-col">
                      <span className=" text-gray-400">Pending TEDY</span>
                      <span className=" text-cyan-gradient font-medium">
                        1,221
                      </span>
                    </span>
                  </span>
                </p>

                <p className="px-6 py-4 flex flex-col gap-1 text-base">
                  <span>
                    <span className=" text-gray-400">Harvested</span>
                    <br />
                    <span className=" text-white text-sm">12,432</span>
                  </span>
                  <br />
                  <span>
                    <span className=" text-gray-400">Harvested</span>
                    <br />
                    <span className=" text-white text-sm">28.2</span>
                  </span>
                </p>
                <p className="px-6 py-4 flex gap-4 text-base items-start my-auto translate-y-2/6">
                  <button className="primary-button w-52 p-2.5 font-medium">
                    Harvest
                  </button>
                  <button className="third-button w-52 p-2.5 font-medium">
                    Withdraw
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("ADA / TEDY");
                    }}
                    className="primary-button w-52"
                  >
                    Stake
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
