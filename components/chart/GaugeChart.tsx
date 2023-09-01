import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Image from "next/image";
import { BsExclamationCircle } from "react-icons/bs";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function getGradient(chart: any) {
  const {
    ctx,
    chartArea: { top, bottom, left, right },
  } = chart;
  const gradientSegment = ctx.createLinearGradient(left, 0, right, 0);
  gradientSegment.addColorStop(0, "#1882FF");
  gradientSegment.addColorStop(1, "#36EBCA");
  return gradientSegment;
}

const data = {
  labels: ["ADA/TEDY", "Other"],
  datasets: [
    {
      label: "Coin database",
      data: [86, 14],
      backgroundColor: (context: any) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) return null;
        if (context.dataIndex == 0) {
          return getGradient(chart);
        } else {
          return "black";
        }
      },
      borderColor: "transparent",
      borderWidth: 5,
      hoverOffset: 4,
    },
  ],
};

export function GaugeChart() {
  const options: any = {
    cutout: "95%",
    rotation: 270,
    circumference: 180,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "green",
        display: false,
      },
    },
  };

  return (
    <div className="relative h-[100px] w-[200px]">
      <div className="absolute inset-0 m-auto">
        <img
          src={`/images/assets/gauge.png`}
          className="w-full h-full"
          alt="Gauge chart"
        />
      </div>
      {/* <div className="opacity-0">
        <Doughnut data={data} options={options} />
      </div> */}
      <div className="text-white absolute pointer-events-none inset-0  top-0 my-auto flex flex-col items-center justify-center mt-8 h-full text-center">
        <p className="text-[36px] leading-[44px] font-normal">86%</p>
        <span className="flex justify-center items-center text-[12px] leading-[14px] font-normal text-gray-400">
          Average Apr
          <BsExclamationCircle className="w-[10px] h-[10px] ml-[2px]" />
        </span>
      </div>
    </div>
  );
}
