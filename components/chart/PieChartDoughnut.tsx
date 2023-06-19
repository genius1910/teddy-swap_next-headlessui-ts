import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const data = {
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
};

export function PieChartDoughnut() {
  const options: any = {
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
    },
  };

  return (
    <div className="relative">
      <Doughnut data={data} options={options} />
      <div className=" absolute pointer-events-none inset-0 top-32 my-auto flex flex-col items-center h-full text-center text-sm">
        <h1>₳198,930</h1>
        <p className="text-xs text-gray-400">$54,023</p>
      </div>
    </div>
  );
}
