import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const data = {
  labels: ["ADA/TEDY", "cUSD/TEDY", "ADA/cBTC", "ADA/USD"],
  datasets: [
    {
      label: "Coin database",
      data: [85, 10, 5, 10],
      backgroundColor: ["#3DFFDC", "#5A3FFF", "#268AFF", "#1ED6FF"],
      borderColor: "transparent",
      borderWidth: 5,
      hoverOffset: 4,
    },
  ],
};

export function PieChartTokenOmics() {
  const options: any = {
    cutout: "80%",
    doughnutCenterText: {
      text: "85%",
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
  };

  return (
    <div className="relative drop-shadow-2xl w-full">
      <Doughnut data={data} options={options} />
      <div className="absolute pointer-events-none inset-0 m-auto flex flex-col justify-center items-center w-full h-full text-sm">
        <p className="text-5xl text-[#3DFFDC] lg:text-6xl 2xl:text-7xl font-bold">
          85%
        </p>
        <p className="text-white text-2xl lg:text-3xl 2xl:text-[35px] 2xl:leading-[70px] font-semibold">
          Public
        </p>
      </div>
    </div>
  );
}
