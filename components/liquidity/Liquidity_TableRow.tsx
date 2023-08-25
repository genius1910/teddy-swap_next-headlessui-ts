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
      <tbody>
        <tr
          onClick={() =>
            showDetails ? setShowDetails(false) : setShowDetails(true)
          }
          className={`${showDetails && "border-b-0 mb-20"} cursor-pointer`}
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
              <BsPatchCheckFill className="w-3 h-3" />
            </span>
          </td>
          <td className="px-8 lg:px-16 py-8 text-base">
            <span>26.29M ₳</span>
          </td>
          <td className="px-8 lg:px-16 py-8  gap-1 text-base">
            <span>450.88K ₳</span>
          </td>
          <td className="px-8 lg:px-16 py-8  gap-1 text-base">
            <span>8,230,456 TEDY</span>
          </td>
          <td className="px-8 lg:px-16 py-8 gap-1 text-base">
            <span>0.23%</span>
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
          <td className=" pl-8">
            <BsChevronDown className="w-4  h-4 text-o_cyan" />
          </td>
        </tr>
        {showDetails && (
          <tr>
            <td colSpan={9} className=" border-t-0 bg-black/10 overflow-hidden">
              <span className="flex justify-between">
                <p className="px-6 py-4 flex flex-col gap-1 text-base">
                  <span className=" text-gray-400">Price</span>
                  <span>
                    <span className=" text-gray-300 text-sm">
                      1 ADA = 10.4545 TEDDY
                    </span>
                    <br />
                    <span className=" text-gray-300 text-sm">
                      1 TEDY = 0.19903 ADA
                    </span>
                  </span>
                </p>
                <p className="px-6 py-4 flex flex-col gap-1 text-base">
                  <span className=" text-gray-400 flex items-center gap-1">
                    <span>Total Liquidity</span>{" "}
                    <button>
                      <BsExclamationCircle className="w-3 h-3" />
                    </button>
                  </span>
                  <span>
                    <span className=" text-gray-300 text-sm">
                      ADA: 26,747,918
                    </span>
                    <br />
                    <span className=" text-gray-300 text-sm">
                      TEDY: 134,384,920
                    </span>
                  </span>
                </p>
                <p className="px-6 py-4 flex flex-col gap-1 text-base">
                  <span className=" text-gray-400 flex items-center gap-1">
                    Your Liquidity{" "}
                    <button>
                      <BsExclamationCircle className="w-3 h-3" />
                    </button>
                  </span>
                  <span>
                    <span className=" text-gray-300 text-sm">ADA: 0</span>
                    <br />
                    <span className=" text-gray-300 text-sm">TEDY: 2</span>
                  </span>
                </p>
                <p className="px-6 py-4 flex flex-col gap-1 text-base">
                  <span className=" text-gray-400 flex items-center gap-1">
                    Impermanent Loss (1M){" "}
                    <button>
                      <BsExclamationCircle className="w-3 h-3" />
                    </button>
                  </span>
                  <span className="text-gray-300 text-sm">
                    <span>2.3</span>
                    <span> </span>
                  </span>
                </p>
                <p className="px-6 py-4 flex gap-4 text-base items-start my-auto translate-y-2/6">
                  <button className="primary-button w-52 rounded-lg p-2.5 font-medium">
                    Swap
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("ADA / TEDY");
                    }}
                    className="primary-button w-52 rounded-lg"
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
