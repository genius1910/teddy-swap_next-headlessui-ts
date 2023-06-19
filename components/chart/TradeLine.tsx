import React from "react";
import { Line } from "react-chartjs-2";
import { ArcElement, CategoryScale, Chart, registerables } from "chart.js";

Chart.register(CategoryScale, ArcElement, ...registerables);

const styles = {
  wrapper: "flex justify-between p-5  hover:bg-[#30363B] duration-300",
  container: "flex flex-col text-white items-center justify-center",
  name: "font-bold",
  chart: "w-56 h-full",
  price: "flex flex-col text-white",
  percent: "text-green-400",
};

const TradeLine = ({ coin, price }: { coin: any; price: any }) => {
  const randomNumber = () => {
    let data: any = [];
    for (let i = 0; i < 20; i++) {
      let randomNum = Math.floor(Math.random() * 100);
      data = [...data, randomNum];
    }
    return data;
  };

  const setGraphColor = () => {
    if (coin.change < 0) {
      return "#ef4b09";
    } else {
      return "#00ff1a";
    }
  };

  const data: any = {
    labels: [" .", " .", " .", " .", " .", " .", " .", " .", " .", " ."],
    datasets: [
      {
        fill: false,
        lineTension: 0.0,
        backgroundColor: setGraphColor(),
        borderColor: setGraphColor(),
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: setGraphColor(),
        pointBackgroundColor: setGraphColor(),
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: setGraphColor(),
        pointHoverBorderColor: setGraphColor(),
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: randomNumber(),
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
  };
  return (
    <div className={styles.chart}>
      <Line data={data} options={options} width={400} height={150} />
    </div>
  );
};

export default TradeLine;
