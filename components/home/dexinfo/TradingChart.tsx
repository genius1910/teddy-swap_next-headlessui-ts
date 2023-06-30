import { createChart, ColorType, IChartApi } from "lightweight-charts";
import React, { useEffect, useRef } from "react";

interface ChartComponentProps {
  data: { time: string; value: number }[];
  colors?: {
    backgroundColor?: string;
    lineColor?: string;
    textColor?: string;
    areaTopColor?: string;
    areaBottomColor?: string;
  };
}

export const ChartComponent: React.FC<ChartComponentProps> = (props) => {
  const {
    data,
    colors: {
      backgroundColor = "transparent",
      lineColor = "#268AFF",
      textColor = "white",
      areaTopColor = "#268AFF",
      areaBottomColor = "rgba(41, 98, 255, 0.28)",
    } = {},
  } = props;

  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current!.clientWidth,
        });
      }
    };

    chartRef.current = createChart(chartContainerRef.current!, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
        fontFamily: "Montserrat",
      },
      width: chartContainerRef.current!.clientWidth,
      height: chartContainerRef.current!.clientHeight || 222,

      grid: {
        vertLines: {
          color: "transparent",
        },
        horzLines: {
          color: "transparent",
        },
      },
    });

    chartRef.current.timeScale().fitContent();

    const newSeries = chartRef.current.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
      priceLineVisible: false,
    });
    newSeries.setData(data);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      if (chartRef.current) {
        chartRef.current.remove();
      }
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);

  return (
    <div
      ref={chartContainerRef}
      style={{
        borderBottomLeftRadius: "30px",
        borderBottomRightRadius: "30px",
        overflow: "hidden",
        marginTop: "-26px",
      }}
    />
  );
};

const initialData = [
  { time: "2023-12-19", value: 100 },
  { time: "2023-12-20", value: 23 },
  { time: "2023-12-21", value: 67 },
  { time: "2023-12-22", value: 2 },
  { time: "2023-12-23", value: 73 },
  { time: "2023-12-24", value: 35 },
  { time: "2023-12-25", value: 20 },
  { time: "2023-12-26", value: 10 },
  { time: "2023-12-27", value: 15 },
  { time: "2023-12-28", value: 45 },
  { time: "2023-12-29", value: 50 },
  { time: "2023-12-30", value: 45 },
  { time: "2023-12-31", value: 55 },
];

export const ChartApp: React.FC = () => {
  return <ChartComponent data={initialData} />;
};
