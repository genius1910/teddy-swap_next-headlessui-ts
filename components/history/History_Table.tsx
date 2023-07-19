import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
import {
  AiFillCheckCircle,
  AiFillFilter,
  AiFillSwitcher,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsArrowRight, BsDot, BsThreeDots } from "react-icons/bs";
import { MdArrowDownward, MdTune } from "react-icons/md";

const History_Table = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="w-full mt-10 component-color rounded-lg px-4 sm:px-8 py-6 ">
      <h1 className="heading-xl mb-6 font-medium">Transaction History</h1>
      <div className="flex justify-between gap-4 w-full flex-wrap 2xl:flex-nowrap relative ">
        <div className="w-full ">
          <h4 className="mb-2 max-lg:text-sm">Search by token</h4>
          <div className="relative mid-s-component-color flex w-full sm:w-auto items-center rounded-lg">
            <AiOutlineSearch className=" text-gray-400 w-6 h-6 ml-2 " />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type token name, ticket, or policy id"
              className=" placeholder:text-gray-400 text-sm w-full h-full p-[1.05rem] bg-transparent outline-none rounded-lg"
            />
          </div>
        </div>
        <div className="w-full">
          <h4 className="mb-2 max-lg:text-sm">Search by Action</h4>
          <div className="relative mid-s-component-color flex items-center rounded-lg">
            <select
              name="actions"
              id="actions"
              className=" placeholder:text-gray-400 text-sm w-full 2xl:w-96 p-4 bg-transparent outline-none rounded-lg"
            >
              <option className=" bg-gray-800" value="All">
                All
              </option>
              <option className=" bg-gray-800" value="Swap">
                Swap
              </option>
              <option className=" bg-gray-800" value="Deposit">
                Deposit
              </option>
              <option className=" bg-gray-800" value="Withdraw">
                Withdraw
              </option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <h4 className="mb-2 max-lg:text-sm">Search by Status</h4>
          <div className="relative mid-s-component-color flex w-full sm:w-auto items-center rounded-lg">
            <select
              name="actions"
              id="actions"
              className=" placeholder:text-gray-400 text-sm w-full 2xl:w-96 p-4 bg-transparent outline-none rounded-lg"
            >
              <option className=" bg-gray-800" value="All">
                All
              </option>
              <option className=" bg-gray-800" value="Complete">
                Complete
              </option>
              <option className=" bg-gray-800" value="Pending">
                Pending
              </option>
              <option className=" bg-gray-800" value="Canceled">
                Canceled
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-6 overflow-x-auto whitespace-nowrap w-full">
        <table className="w-full text-center">
          <tbody className=" mid-s-component-color text-base ">
            <tr>
              <th className=" px-4 py-2 font-medium rounded-l-md">Assets</th>
              <th className=" px-4 py-2 font-medium">Action</th>
              <th className=" px-4 py-2 font-medium">Date & Time</th>
              <th className=" px-4 py-2 font-medium">Status</th>
              <th className="  font-medium rounded-r-md"></th>
            </tr>
          </tbody>
          {query == "" ? (
            [1, 2, 3, 4, 5].map((item) => {
              return (
                <tbody key={item} className="my-4">
                  <tr>
                    <td className="px-10 pl-4 py-10 whitespace-nowrap">
                      <span className="flex items-center gap-3 justify-center ">
                        <span className=" bg-gray-600 gap-1 w-max flex items-center px-2 py-1.5 rounded-lg">
                          <Image
                            src={`/images/assets/token-1.png`}
                            height={22}
                            width={22}
                            alt="Token"
                          />
                          <p className="text-xs">89.0 ADA</p>
                        </span>
                        <BsArrowRight className="w-4 h-4" />
                        <span className=" bg-gray-600 gap-1 w-max flex items-center px-2 py-1.5 rounded-lg">
                          <Image
                            src={`/images/assets/teddy.png`}
                            height={22}
                            width={22}
                            alt="Token"
                          />
                          <p className="text-xs">349.0 TEDDY</p>
                        </span>
                      </span>
                    </td>
                    <td className="px-10 py-4 text-base">Swap</td>
                    <td className="px-10  py-4 text-base">
                      January 3, 2023
                      <br />
                      11:00 AM
                    </td>
                    <td className="px-10 py-4  gap-1 text-base">
                      <span className=" inline-flex items-center gap-1 rounded-md border border-gray-500 pl-2 pr-4 py-1">
                        <BsDot className="w-5 h-5 text-o_green" />
                        <span>Complete</span>
                      </span>
                    </td>
                    <td className="px-10 py-4  gap-1 text-base">
                      <Popover>
                        {({ open }) => (
                          <>
                            <Popover.Button className="inline-flex items-center gap-1 rounded-md border border-gray-500 p-1 px-2 py-1 ">
                              <BsThreeDots className="w-5 h-5" />
                            </Popover.Button>
                            <Transition
                              enter="transition duration-100 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-75 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                            >
                              <Popover.Panel className="absolute outline-none small-component-color text-gray-300 rounded-2xl -top-8 right-5 z-50 mt-8 transform max-w-sm 2xl:max-w-md">
                                {({ close }) => (
                                  <div className=" p-3 rounded-xl text-xs font-normal flex flex-col items-start justify-start w-full gap-2">
                                    <button>View on Explorer</button>
                                    <button>Copy Transaction ID</button>
                                  </div>
                                )}
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    </td>
                  </tr>
                </tbody>
              );
            })
          ) : (
            <tbody>
              <tr>
                <td colSpan={5} rowSpan={6} className="mx-auto w-full py-6 ">
                  <span className="w-full mx-auto">
                    <Image
                      src={`/images/assets/robot.svg`}
                      alt="robot"
                      width={200}
                      height={290}
                      className="mx-auto "
                    />
                  </span>
                  <h2 className="text-lg 2xl:text-2xl my-6">No orders found</h2>
                  <button className="py-4 px-20 primary-button rounded-2xl text-lg 2xl:text-xl w-72">
                    Swap
                  </button>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default History_Table;
