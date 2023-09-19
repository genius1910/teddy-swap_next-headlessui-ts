import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { usePathname } from "next/navigation";
Chart.register(ArcElement);


export function PieChartDoughnut(isWalletConnected:any) {

  const [data,] = useState({
    labels: ["ADA/TEDY", "cUSD/TEDY", "ADA/cBTC", "ADA/USD"],
    datasets: [
      {
        label: "Coin database",
        data: [120030, 86342, 23085, 12018],
        backgroundColor: ["#3DFFDC", "#5A3FFF", "#268AFF", "#1ED6FF"],
        borderColor: "transparent",
        borderWidth: 5,
        hoverOffset: 4,
      },
    ],
  });
  const [options,]: any = useState({
    cutout: "80%",
    doughnutCenterText: {
      text: "Center Text",
      color: "black",
      fontStyle: "bold",
      fontPadding: 20,
    },
    plugins: {
      legend: {
        display: false,
        align: "right",
        labels: {
          color: "green",
          font: {
            size: 12,
            weight: "bold",
          },
        },
      },
      datalabels: {
        display: false,
      },
    },
  });

  const pathname = usePathname();

  return (
    <div className="relative">
      <Doughnut data={data} options={options} />
      <div className=" absolute pointer-events-none inset-0 top-32 my-auto flex flex-col items-center h-full text-center text-sm">
        <p className=" text-[16px] leading-[19.5px] font-medium">
          ₳
          {isWalletConnected
            ? "198,930"
            : pathname != "/dashboard"
            ? "124,213"
            : "--"}
        </p>
        <p className="text-[10px] leading-[12px] font-medium text-[#B0B3B8]">
          $
          {isWalletConnected
            ? "54,023"
            : pathname != "/dashboard"
            ? "32,213"
            : "--"}
        </p>
      </div>
    </div>
  );
}
