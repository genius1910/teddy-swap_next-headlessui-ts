import React, { PureComponent, useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceDot,
} from "recharts";

import { CategoricalChartState } from "recharts/types/chart/generateCategoricalChart";
import { LabelProps } from "recharts";
import { MouseEvent } from "react";
import { WheelEvent } from "react";

interface CustomLabelProps extends LabelProps {
  viewBox?: any;
  size: number;
  fontsize: number;
  align: "left" | "center" | "right";
}

interface PointType {
  name: string;
  price: number;
}

interface FixedLineType {
  title: string;
  price: number;
}

interface Props {
  data: PointType[];
  fixedLines?: FixedLineType[];
  labelVisble?: boolean;
  unit?: string;
}

interface clickType {
  x: null | number | undefined;
  y: null | number | undefined;
  type: "graph" | "xaxis" | "yaxis" | null;
}

const CustomChat = ({ data, fixedLines, labelVisble, unit }: Props) => {
  const [point, setPoint] = useState<null | PointType>();
  const [scaleSize, setScaleSize] = useState({ xl: 0, xr: 0, y: 0 });
  const [clickPoint, setClickPoint] = useState<clickType>({
    x: null,
    y: null,
    type: null,
  });

  const CustomLabel = (props: CustomLabelProps) => {
    const bx = props.size;
    const by = 24;
    let sx = 0;
    if (props.align === "center")
      sx = props.viewBox.x + props.viewBox.width / 2 - bx / 2;

    return (
      <g>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#181D2D" />
            <stop offset="100%" stopColor="#2E2F3A" />
          </linearGradient>
        </defs>
        <rect
          x={sx}
          y={props.viewBox.y - by / 2}
          rx={5}
          ry={5}
          fill="url(#gradient)"
          fontStyle="#fff"
          width={bx}
          height={by}
        />
        <text
          x={props.viewBox.x}
          y={props.viewBox.y}
          fill="#fff"
          dy={by / 6}
          dx={sx + props.size / 2}
          fontSize={props.fontsize}
          textAnchor="middle"
        >
          {`${props.value}${unit ? unit : ""}`}
        </text>
      </g>
    );
  };

  class CustomizedXAxisTick extends PureComponent {
    render() {
      const { x, y, payload }: any = this.props;
      return (
        payload.index < data.length - 1 && (
          <g transform={`translate(${x},${y})`}>
            <text
              fill="#ffffff99"
              fontSize={9.92}
              textAnchor="middle"
              fontFamily="Montserrat"
            >
              {payload.value}
            </text>
          </g>
        )
      );
    }
  }

  const mouseDown = (props: CategoricalChartState) => {
    setClickPoint({ x: props?.chartX, y: props?.chartY, type: "graph" });
  };

  const mouseUpOut = () => {
    setClickPoint({ ...clickPoint, type: null });
    setPoint(null);
  };

  const mouseYDown = (props: MouseEvent) => {
    setClickPoint({ x: props?.clientX, y: props?.clientY, type: "yaxis" });
  };

  const mouseYMove = (props: MouseEvent) => {
    if (props?.clientX && props?.clientY && clickPoint.y && clickPoint.x) {
      setClickPoint({ ...clickPoint, y: props.clientY });
      const dy = props.clientY - clickPoint.y;

      if (clickPoint.type === "yaxis") {
        const sy = scaleSize.y + dy < 0 ? scaleSize.y + dy : 0;
        setScaleSize({ ...scaleSize, y: sy });
      }
    }
  };

  const mouseMove = (props: CategoricalChartState) => {
    setPoint(props?.activePayload![0].payload);
    if (props?.chartX && props?.chartY && clickPoint.y && clickPoint.x) {
      setClickPoint({ ...clickPoint, x: props.chartX });
      const dx = props.chartX - clickPoint.x;

      if (clickPoint.type === "graph") {
        const sxl = scaleSize.xl + dx < 0 ? scaleSize.xl + dx : 0;
        const sxr = scaleSize.xr - dx < 0 ? scaleSize.xr - dx : 0;
        setScaleSize({ ...scaleSize, xl: sxl, xr: sxr });
      }
    }
  };

  const handleScroll = (props: WheelEvent) => {
    let sxl = 0;
    let sxr = 0;
    let sy = scaleSize.y;
    if (props.deltaY > 0) {
      sxl = scaleSize.xl < 0 ? scaleSize.xl + 45 : 0;
      sxr = scaleSize.xr < 0 ? scaleSize.xr + 45 : 0;
      sy = scaleSize.y < 0 ? scaleSize.y + 25 : 0;
    } else {
      sxl = scaleSize.xl - 45;
      sxr = scaleSize.xr - 45;
    }
    setScaleSize({ ...scaleSize, xl: sxl, xr: sxr, y: sy });
  };

  function disableScroll() {
    const scrollableElements = document.querySelectorAll(".scrollable");

    scrollableElements.forEach((item) => {
      item.addEventListener("wheel", (e) => e.preventDefault());
    });
  }

  function enableScroll() {
    const scrollableElements = document.querySelectorAll(".scrollable");

    scrollableElements.forEach((item) => {
      item.removeEventListener("wheel", (e) => e.preventDefault());
    });
  }

  return (
    <>
      <div
        className="scrollable select-none"
        onWheel={(e) => handleScroll(e)}
        onMouseLeave={() => enableScroll()}
        onMouseEnter={() => disableScroll()}
      >
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
            onMouseDown={(e) => mouseDown(e)}
            onMouseUp={() => mouseUpOut()}
            onMouseMove={(e) => mouseMove(e)}
            onMouseLeave={() => mouseUpOut()}
          >
            <defs>
              <linearGradient id="price" x1="0" y1="0" x2="0" y2="1">
                <stop offset="10%" stopColor="#268AFF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#268AFF" stopOpacity={0} />
              </linearGradient>
            </defs>

            <Area
              layout="vertical"
              type="linear"
              dataKey="price"
              stroke="#268AFF"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#price)"
            />

            <ReferenceDot
              x={point?.name}
              y={point?.price}
              r={4}
              fill="#268AFF"
              stroke="none"
            />

            {labelVisble && (
              <ReferenceLine
                stroke="#ffffff99"
                strokeDasharray="3 3"
                y={point?.price}
                label={
                  <CustomLabel
                    value={point?.price}
                    align="center"
                    size={83}
                    fontsize={12}
                  />
                }
              />
            )}

            {fixedLines?.map((line) => {
              return (
                <ReferenceLine
                  key={line.title}
                  stroke="#ffffff99"
                  strokeDasharray="3 3"
                  y={line.price}
                  label={
                    <CustomLabel
                      value={line?.title}
                      align="left"
                      size={175}
                      fontsize={9}
                    />
                  }
                />
              );
            })}

            <XAxis
              id="xaxis"
              dataKey="name"
              axisLine={{ stroke: "transparent" }}
              tickLine={{ transform: "translate(0,-20)" }}
              tick={<CustomizedXAxisTick />}
              mirror
              padding={{ left: scaleSize.xl, right: scaleSize.xr }}
            />

            <YAxis
              id="yaxis"
              dataKey="price"
              orientation="right"
              axisLine={{ stroke: "transparent" }}
              stroke="#ffffff99"
              tickLine={false}
              fontSize={9.92}
              fontFamily="Montserrat"
              unit={unit}
              mirror
              padding={{ top: scaleSize.y }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div
        className="absolute right-0 h-full w-[40px] cursor-ns-resize"
        onMouseDown={(e) => mouseYDown(e)}
        onMouseMove={(e) => mouseYMove(e)}
        onMouseUp={() => mouseUpOut()}
        onMouseOut={() => mouseUpOut()}
      />
    </>
  );
};

export default CustomChat;
