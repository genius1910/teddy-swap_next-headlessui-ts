import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

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
  labels: ["ADA/TEDY"],
  datasets: [
    {
      label: "Coin database",
      data: [100],
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
    <div className="relative -mt-10">
      <Doughnut data={data} options={options} />
      <div className="text-5xl text-white absolute pointer-events-none inset-0  top-0 my-auto flex flex-col items-center justify-center mt-11 h-full text-center">
        <h1>86%</h1>
        <p className="text-xs text-gray-400">Average Apr</p>
      </div>
    </div>
  );
}
