import Liquidity_BottomStats from "@/components/liquidity/token_bottomside/Liquidity_Stats";
import Image from "next/image";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

const Farm_SelectedTokenBottomside = () => {
    return (
        <div className="component-color rounded-2xl p-6">
            <div className="flex justify-between text-xl">
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
                    <h4 className="text-lg font-medium">ADA/USDA - Farm</h4>
                    <MdCheckCircle className="w-3 h-3" />
                </span>

                <h4 className="text-xl font-medium">
                    Farm APR: <span className="text-cyan-gradient font-bold">34.56%</span>
                </h4>
            </div>
            <div className="grid grid-cols-4 border-b border-gray-600 pb-4 text-xl font-medium mt-10">
                <h1>Staked Liquidity</h1>
                <h1>% of Emissions</h1>
                <h1>Staked</h1>
                <h1 className="">Your Liquidity</h1>
            </div>
            <div className="grid grid-cols-4 mt-2">
                <div>
                    <p>3.23m USDA</p>
                    <p>6.12m ADA</p>
                    <p>77,970,944,334,894 LP Tokens</p>
                </div>
                <div>
                    <p>85.23%</p>
                </div>
                <div>
                    <p>0</p>
                </div>
                <div>
                    <p>12,358</p>
                </div>
            </div>
            <Liquidity_BottomStats />
        </div>
    );
};

export default Farm_SelectedTokenBottomside;
