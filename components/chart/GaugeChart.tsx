import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function getGradient(chart: any) {
  const {
    ctx,
    chartArea: { top, bottom, left, right },
  } = chart;
  const gradientSegment = ctx.createLinearGradient(left, 0, right, 0);
  gradientSegment.addColorStop(0, "red");
  gradientSegment.addColorStop(0.5, "orange");
  gradientSegment.addColorStop(1, "green");
  return gradientSegment;
}

const data = {
  labels: ["ADA/TEDY"],
  datasets: [
    {
      label: "Coin database",
      data: [90],
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
    cutout: "80%",
    rotation: 270,
    circumference: 180,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="relative">
      <Doughnut data={data} options={options} />
    </div>
  );
}
