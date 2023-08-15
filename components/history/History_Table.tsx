import useAuthenticate from "@/context/mobx/useAuthenticate";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsExclamationCircle, BsPlus, BsThreeDots } from "react-icons/bs";
import { MdEventRepeat } from "react-icons/md";

const History_Table = () => {
  const [query, setQuery] = useState("");

  const histories = [
    {
      type: "Add Liquidity",
    },
    {
      type: "Remove Liquidity",
    },
    {
      type: "Add Liquidity",
    },
    {
      type: "Swap",
    },
    {
      type: "Add Liquidity",
    },
    {
      type: "Swap",
    },
  ];

  const isWalletConnected = useAuthenticate.isWalletConnected();
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
        <div className="w-full ">
          <h4 className="mb-2 max-lg:text-sm">Search by date</h4>
          <div className="relative mid-s-component-color flex w-full sm:w-auto items-center rounded-lg">
            <MdEventRepeat className=" text-gray-400 w-6 h-6 ml-2 " />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="YYYY/MM/DD - YYYY/MM/DD"
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
        <table className="w-full text-center text-sm">
          <tbody className=" mid-s-component-color text-sm text-center">
            <tr>
              <th className=" px-4 py-2 font-medium rounded-l-md">
                {" "}
                <span className="flex items-center justify-center gap-1">
                  Assets <BsExclamationCircle className="w-3 h-3" />
                </span>
              </th>
              <th className=" px-4 py-2 font-medium">
                <span className="flex items-center justify-center gap-1">
                  Action <BsExclamationCircle className="w-3 h-3" />
                </span>
              </th>
              <th className=" px-4 py-2 font-medium">
                <span className="flex items-center justify-center gap-1">
                  Date & Time <BsExclamationCircle className="w-3 h-3" />
                </span>
              </th>
              <th className=" px-4 py-2 font-medium">
                {" "}
                <span className="flex items-center justify-center gap-1">
                  Status <BsExclamationCircle className="w-3 h-3" />
                </span>
              </th>
              <th className="  font-medium rounded-r-md">
                <span className="flex items-center justify-center gap-1">
                  Actions <BsExclamationCircle className="w-3 h-3" />
                </span>
              </th>
            </tr>
          </tbody>
          {query == "" ? (
            histories.map((item, i) => {
              return (
                <tbody
                  style={{ borderBottom: isWalletConnected ? "2px" : "0px" }}
                  key={i}
                  className="my-4 relative px-0"
                >
                  <tr
                    aria-colspan={5}
                    className=" backdrop-blur-md h-full w-full absolute"
                  >
                    {i == 1 && (
                      <td className="flex items-center justify-center mt-10">
                        <button
                          onClick={() =>
                            document.getElementById("connect-wallet")?.click()
                          }
                          className="w-auto secondary-button py-2 px-6"
                        >
                          Connect Wallet
                        </button>
                      </td>
                    )}
                  </tr>
                  <tr>
                    <td className="px-10 pl-4 py-10 whitespace-nowrap">
                      <span className="flex items-center gap-3 justify-center ">
                        <span className="gap-1 w-max flex items-center px-2 py-1.5 rounded-lg">
                          <Image
                            src={`/images/assets/token-1.png`}
                            height={28}
                            width={28}
                            alt="Token"
                          />
                          <p className="text-sm">
                            <span className="font-semibold">ADA</span> 89.0
                          </p>
                        </span>
                        {item.type == "Swap" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="10"
                            viewBox="0 0 24 10"
                            fill="none"
                          >
                            <path
                              d="M1.28906 4.45678C0.944284 4.45678 0.664785 4.73628 0.664785 5.08105C0.664785 5.42583 0.944284 5.70533 1.28906 5.70533V4.45678ZM23.3721 5.52249C23.6159 5.27869 23.6159 4.88342 23.3721 4.63962L19.3992 0.666746C19.1554 0.422951 18.7602 0.422951 18.5164 0.666746C18.2726 0.910542 18.2726 1.30581 18.5164 1.54961L22.0478 5.08105L18.5164 8.6125C18.2726 8.8563 18.2726 9.25157 18.5164 9.49536C18.7602 9.73916 19.1554 9.73916 19.3992 9.49536L23.3721 5.52249ZM1.28906 5.70533H22.9307V4.45678H1.28906V5.70533Z"
                              fill="white"
                            />
                          </svg>
                        ) : (
                          <BsPlus className="w-6 h-6" />
                        )}
                        <span className=" gap-1 w-max flex items-center px-2 py-1.5 rounded-lg">
                          <Image
                            src={`/images/assets/teddy.png`}
                            height={28}
                            width={28}
                            alt="Token"
                          />
                          <p className="text-sm">
                            <span className="font-semibold">TEDDY</span> 349.0{" "}
                          </p>
                        </span>
                      </span>
                    </td>
                    <td className="px-10 py-4 text-sm 2xl:text-base">
                      {item.type}
                    </td>
                    <td className="px-10  py-4 text-sm 2xl:text-base">
                      January 3, 2023 11:00 AM
                    </td>
                    <td className="px-10 py-4 gap-1 text-sm 2xl:text-base">
                      <span>Complete</span>
                    </td>
                    <td className="px-10 py-4  gap-1 text-sm 2xl:text-base">
                      <span className="grid grid-cols-3 gap-2">
                        <button className="flex h-8 w-8 bg-gray-800 items-center gap-1 rounded-md p-1">
                          <svg
                            className="ml-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="18"
                            viewBox="0 0 15 18"
                            fill="none"
                          >
                            <path
                              d="M1.92711 17.3749C1.45411 17.3749 1.05374 17.211 0.725994 16.8833C0.398248 16.5555 0.234375 16.1551 0.234375 15.6821V3.79693H1.63898V15.6821C1.63898 15.7542 1.66899 15.8202 1.72901 15.8802C1.78904 15.9403 1.85507 15.9703 1.92711 15.9703H11.0031V17.3749H1.92711ZM5.20454 14.0974C4.73153 14.0974 4.33115 13.9336 4.0034 13.6058C3.67567 13.2781 3.51181 12.8777 3.51181 12.4047V1.74401C3.51181 1.27101 3.67567 0.870634 4.0034 0.542888C4.33115 0.215142 4.73153 0.0512695 5.20454 0.0512695H13.056C13.529 0.0512695 13.9294 0.215142 14.2571 0.542888C14.5849 0.870634 14.7487 1.27101 14.7487 1.74401V12.4047C14.7487 12.8777 14.5849 13.2781 14.2571 13.6058C13.9294 13.9336 13.529 14.0974 13.056 14.0974H5.20454ZM5.20454 12.6929H13.056C13.128 12.6929 13.1941 12.6628 13.2541 12.6028C13.3141 12.5428 13.3441 12.4767 13.3441 12.4047V1.74401C13.3441 1.67196 13.3141 1.60593 13.2541 1.54591C13.1941 1.48588 13.128 1.45587 13.056 1.45587H5.20454C5.1325 1.45587 5.06647 1.48588 5.00645 1.54591C4.94641 1.60593 4.91639 1.67196 4.91639 1.74401V12.4047C4.91639 12.4767 4.94641 12.5428 5.00645 12.6028C5.06647 12.6628 5.1325 12.6929 5.20454 12.6929Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                        <button className="flex h-8 w-8 bg-gray-800 items-center gap-1 rounded-md p-1">
                          <svg
                            className="ml-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                          >
                            <path
                              d="M2.34061 14.7342C1.92015 14.7342 1.56426 14.5886 1.27293 14.2972C0.981602 14.0059 0.835938 13.65 0.835938 13.2296V10.2683H2.08447V13.2296C2.08447 13.2936 2.11115 13.3523 2.1645 13.4057C2.21787 13.459 2.27658 13.4857 2.34061 13.4857H13.4815C13.5455 13.4857 13.6042 13.459 13.6576 13.4057C13.711 13.3523 13.7377 13.2936 13.7377 13.2296V2.08866C13.7377 2.02462 13.711 1.96592 13.6576 1.91255C13.6042 1.8592 13.5455 1.83252 13.4815 1.83252H2.34061C2.27658 1.83252 2.21787 1.8592 2.1645 1.91255C2.11115 1.96592 2.08447 2.02462 2.08447 2.08866V5.04994H0.835938V2.08866C0.835938 1.6682 0.981602 1.31231 1.27293 1.02098C1.56426 0.729649 1.92015 0.583984 2.34061 0.583984H13.4815C13.902 0.583984 14.2579 0.729649 14.5492 1.02098C14.8405 1.31231 14.9862 1.6682 14.9862 2.08866V13.2296C14.9862 13.65 14.8405 14.0059 14.5492 14.2972C14.2579 14.5886 13.902 14.7342 13.4815 14.7342H2.34061ZM6.80659 11.3727L5.92942 10.4699L8.11599 8.28337H0.835938V7.03485H8.11599L5.92942 4.84828L6.80659 3.94549L10.5202 7.65911L6.80659 11.3727Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                        <Popover>
                          {({ open }) => (
                            <>
                              <Popover.Button className="flex w-8 h-8 bg-gray-800 items-center justify-center gap-1 rounded-md p-1">
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
                      </span>
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
