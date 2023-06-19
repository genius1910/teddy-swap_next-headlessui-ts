import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
ChartJS.defaults.set("plugins.datalabels", {
  color: "white",
  datalabels: {
    display: false,
    formatter: function (value: any, context: any) {
      return value + "%";
    },
  },
  formatter: function (value: any, context: any) {
    return value + "%";
  },
});
ChartJS.defaults.font.size = 14;
ChartJS.defaults.font.family = "Montserrat";
ChartJS.defaults.font.weight = "normal";

ChartJS.defaults.set("plugins.legend", {
  display: false,
});

export const data = {
  labels: [
    "ADA/TEDY",
    "ADA/iUSD",
    "TEDY/ADA",
    "ADA/CBTC",
    "USD/TEDY",
    "TEDY/USD",
  ],
  datasets: [
    {
      label: "Coin database",
      data: [39, 27, 12, 42, 16],
      backgroundColor: [
        "rgba(61, 255, 220, 0.6)",
        "rgba(90, 63, 255, 0.6)",
        "rgba(38, 138, 255, 0.6)",
        "rgba(30, 214, 255, 0.6)",
        "rgba(173, 225, 255, 0.6)",
      ],
      borderColor: [
        "rgba(61, 255, 225, 1)",
        "rgba(90, 144, 255, 1)",
        "rgba(38, 200, 255, 1)",
        "rgba(30, 255, 255, 1)",
        "rgba(173, 255, 255, 1)",
      ],
      borderWidth: 2,
      hoverOffset: 4,
    },
  ],
};

export function PieChart() {
  const options: any = {
    plugins: [ChartDataLabels, { display: false }],
  };

  return <Pie data={data} options={options} />;
}
