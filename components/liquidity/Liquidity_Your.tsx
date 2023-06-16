import Image from 'next/image';
import React from 'react'
import Liquidity_BottomTable from './Liquidity_BottomTable';
const liquidityAndFarms = [
    {
        title: "Your Liquidity",
        perc1: 6.52,
        perc1_Subtitle: "APR this week",
        perc2: 8.3,
        perc2_Subtitle: "Pool Diversion This Week",
        button1: "Add/Remove",
        button2: "View Liquidity",
        tvl: [
            {
                color: "bg-purple-500",
                name: "ADA/TEDY",
                price: "120,030",
            },
            {
                color: "bg-cyan-500",
                name: "cUSD/TEDY",
                price: "124,943",
            },
            {
                color: "bg-blue-500",
                name: "ADA/cBTC",
                price: "532,63",
            },
            {
                color: "bg-blue-500",
                name: "ADA/USD",
                price: "843,030",
            },
            {
                color: "bg-green-500",
                name: "USD/TEDY",
                price: "843,030",
            },
        ],
        earningTokens: [
            "/images/assets/teddy.png",
            "/images/assets/blue_ada.png",
            "/images/assets/token-1.png",
            "/images/assets/wallet-1.png",
        ],
    }]
const Liquidity_Your = () => {
    return (
        <div className='w-full mt-10'>
            {liquidityAndFarms.map((item) => {
                return (
                    <div
                        key={item.title}
                        className=" lg:col-span-2 rounded-2xl component-color p-6"
                    >
                        <h1>{item.title}</h1>
                        <div className="flex gap-10 xl:gap-4 flex-wrap xl:flex-nowrap justify-center xl:justify-between items-center">
                            <div className=" space-y-3">
                                <div className="flex lg:flex-col flex-row gap-6 my-4 w-full lg:translate-x-1/3 text-center">
                                    <div className="  text-2xl flex flex-col leading-tight text-[#3DFFDC]">
                                        <h2 className="font-semibold">{item.perc1}%</h2>
                                        <p className=" text-xss text-gray-400">
                                            {item.perc1_Subtitle}
                                        </p>
                                    </div>
                                    <div className="  text-2xl flex flex-col leading-tight">
                                        <h2 className="font-semibold">{item.perc2}%</h2>
                                        <p className=" text-xss text-gray-400">
                                            {item.perc2_Subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-40 h-40 rounded-full bg-cyan-500" />
                            <div className="flex flex-col gap-2">
                                {item.tvl.map((_item, i) => {
                                    return (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className={`w-3.5 h-3.5 ${_item.color}`} />
                                            <div className="flex items-center gap-1">
                                                <Image
                                                    src={`/images/assets/token-1.png`}
                                                    alt="icon1"
                                                    width={20}
                                                    height={20}
                                                />
                                                <Image
                                                    src={`/images/assets/teddy.png`}
                                                    alt="icon2"
                                                    width={20}
                                                    height={20}
                                                    className="-ml-2"
                                                />
                                                <h4 className="text-sm">{_item.name}</h4>
                                            </div>
                                            <p className="text-sm whitespace-nowrap text-right font-normal ml-4">
                                                <span>₳{_item.price}</span>{" "}
                                                <span className=" text-xss">TVL</span>
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex flex-col justify-between space-y-6 whitespace-nowrap font-normal">
                                <div className="flex gap-5">
                                    <div className=" text-gray-400">
                                        <p className="text-xss">Earnings this month</p>
                                        <h4 className="text-base leading-2 text-white">
                                            ₳13,420.90
                                        </h4>
                                        <p className="text-xs">$284.90</p>
                                    </div>
                                    <div className=" text-gray-400">
                                        <p className="text-xss">Earnings this month</p>
                                        <h4 className="text-base leading-2 text-white">
                                            ₳13,420.90
                                        </h4>
                                        <p className="text-xs">$284.90</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs text-gray-400 my-2">
                                        Tokens you are earning
                                    </h4>
                                    <div className="flex items-center gap-2">
                                        {item.earningTokens.map((token) => {
                                            return (
                                                <Image
                                                    key={token}
                                                    alt={token}
                                                    src={token}
                                                    width={26}
                                                    height={26}
                                                />
                                            );
                                        })}
                                        <p className="text-xss text-gray-400">+3more</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <Liquidity_BottomTable />
        </div>
    )
}

export default Liquidity_Your