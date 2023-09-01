import React, { PureComponent, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceDot,
  ReferenceArea,
} from "recharts";

import { CategoricalChartState } from "recharts/types/chart/generateCategoricalChart";
import { LabelProps } from "recharts";
import { WheelEvent } from "react";

interface CustomLabelProps extends LabelProps {
  viewBox?: any;
  size: number;
  fontsize: number;
  align: "left" | "center" | "right";
  controlable?: boolean;
}

interface PointType {
  name: string;
  price: number;
}

interface FixedLineType {
  current: number;
  deposit: number;
}

interface Props {
  data: PointType[];
  fixedLines?: FixedLineType;
  labelVisble?: boolean;
  unit?: string;
  setFixedLines?: Function;
}

interface clickType {
  x: null | number | undefined;
  y: null | number | undefined;
  clicked: boolean;
}

const CustomChat = ({
  data,
  fixedLines,
  labelVisble,
  unit,
  setFixedLines,
}: Props) => {
  const yConfig = {
    default: 100,
    min: 200,
  };

  const [point, setPoint] = useState<null | PointType>();
  const [scaleSize, setScaleSize] = useState({
    xl: 0,
    xr: 0,
    y: yConfig.default,
  });

  const [clickPoint, setClickPoint] = useState<clickType>({
    x: null,
    y: null,
    clicked: false,
  });

  const [toggle, setToggle] = useState(false);
  const [pickY, setPickY] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(fixedLines?.current);

  const toggleFalse = () => {
    setToggle(false);
    setFixedLines && setFixedLines({ ...fixedLines, current: currentPrice });
  };

  const CustomLabel = (props: CustomLabelProps) => {
    const bx = props.size;
    const by = 17;
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
          className="cursor-pointer"
          x={sx}
          y={props.viewBox.y - by / 2}
          rx={5}
          ry={5}
          fill="url(#gradient)"
          fontStyle="#fff"
          width={bx}
          height={by}
          onMouseDown={() => props.controlable && setToggle(true)}
        />
        <text
          className="cursor-pointer"
          x={props.viewBox.x}
          y={props.viewBox.y}
          fill="#fff"
          dy={by / 6}
          dx={sx + props.size / 2}
          fontSize={props.fontsize}
          textAnchor="middle"
          onMouseDown={() => props.controlable && setToggle(true)}
        >
          {props.controlable
            ? toggle
              ? `Predicted Price: ${unit ? unit : ""}${currentPrice}`
              : `Current Price: ${unit ? unit : ""}${currentPrice}`
            : `${props.value}`}
        </text>
        {props.controlable && (
          <>
            {toggle ? (
              <image
                x={props.viewBox.width - 20}
                y={props.viewBox.y - 20 / 2 - 7}
                href="/images/assets/teddybear.svg"
                height="20"
                width="20"
              />
            ) : (
              <rect
                className="cursor-pointer"
                x={props.viewBox.width - 14}
                y={props.viewBox.y - 8 / 2}
                rx={4}
                ry={4}
                fill="#268AFF"
                fontStyle="#fff"
                width={14}
                height={8}
                onMouseDown={() => props.controlable && setToggle(true)}
              />
            )}
          </>
        )}
      </g>
    );
  };

  const CustomYLabel = (props: CustomLabelProps) => {
    return (
      <g>
        <rect
          className="cursor-ns-resize"
          x={props.viewBox.width - 50}
          y={0}
          width={50}
          height={1000}
          fill="transparent"
          onMouseDown={(e) => {
            setPickY(true);
          }}
        />
        <text
          className="cursor-pointer"
          x={props.viewBox.x}
          y={props.viewBox.y}
          fill="#ffffff99"
          dy={4}
          dx={props.viewBox.width - 20}
          fontSize="10"
          fontWeight="600"
          textAnchor="middle"
          onMouseDown={() => setToggle(true)}
        >
          {props.value}
        </text>
      </g>
    );
  };

  class CustomizedXAxisTick extends PureComponent {
    render() {
      const { x, y, payload }: any = this.props;
      return (
        payload.index < data.length - 1 && (
          <g transform={`translate(${x},${y + 3})`}>
            <text
              fill="#ffffff99"
              fontSize={10}
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

  class CustomizedYAxisTick extends PureComponent {
    render() {
      const { x, y, payload }: any = this.props;
      return (
        <g transform={`translate(${x - 12},${y})`}>
          <text
            fill="#ffffff99"
            fontSize={10}
            textAnchor="middle"
            fontFamily="Montserrat"
          >
            {`${unit ? unit : ""}${payload.value}`}
          </text>
        </g>
      );
    }
  }

  const mouseDown = (props: CategoricalChartState) => {
    setClickPoint({ x: props?.chartX, y: props?.chartY, clicked: true });
  };

  const mouseUpOut = () => {
    setClickPoint({ ...clickPoint, clicked: false });
    setPoint(null);
    toggleFalse();
    setPickY(false);
  };

  const mouseMove = (props: CategoricalChartState) => {
    setPoint(props?.activePayload![0].payload);
    if (props?.chartX && props?.chartY && clickPoint.y && clickPoint.x) {
      setClickPoint({ ...clickPoint, x: props.chartX, y: props.chartY });
      const dx = props.chartX - clickPoint.x;
      const dy = props.chartY - clickPoint.y;

      if (clickPoint.clicked) {
        if (toggle) {
          setCurrentPrice(currentPrice! - dy * 5);
        } else if (pickY) {
          let sy = scaleSize.y;
          if (scaleSize.y + dy < yConfig.min) {
            sy += dy;
          }
          setScaleSize({ ...scaleSize, y: sy });
        } else {
          const sxl = scaleSize.xl + dx < 0 ? scaleSize.xl + dx : 0;
          const sxr = scaleSize.xr - dx < 0 ? scaleSize.xr - dx : 0;
          setScaleSize({ ...scaleSize, xl: sxl, xr: sxr });
        }
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
      if (scaleSize.y + 25 < yConfig.default) {
        sy += 25;
      }
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
        style={{
          overflow: "hidden",
          flexBasis: "50%",
          height: "100%",
          top: "0",
        }}
      >
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
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

            {fixedLines && (
              <ReferenceArea
                y1={currentPrice}
                y2={fixedLines.deposit}
                fill="rgba(255, 87, 87, 0.08)"
                strokeOpacity={0.3}
              />
            )}

            <ReferenceLine
              stroke="#ffffff99"
              strokeDasharray="3 3"
              x={point?.name}
              label={{
                value: point?.name,
                position: "insideBottom",
                fontSize: 10,
                fill: "#ffffff99",
                fontWeight: "600",
              }}
            />
            <ReferenceLine
              stroke="#ffffff99"
              strokeDasharray="3 3"
              y={point?.price}
              label={
                <CustomYLabel
                  value={`${unit}${point?.price}`}
                  align="left"
                  size={175}
                  fontsize={9}
                />
              }
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
                    value={`${unit}${point?.price}`}
                    align="left"
                    size={175}
                    fontsize={9}
                  />
                }
              />
            )}

            {fixedLines && (
              <>
                <ReferenceLine
                  key="deposit"
                  stroke="#ffffff99"
                  strokeDasharray="3 3"
                  style={{ cursor: "pointer" }}
                  y={fixedLines.deposit}
                  label={
                    <CustomLabel
                      value={`Your Liquidity Deposit: ${unit}${fixedLines.deposit}`}
                      align="left"
                      size={175}
                      fontsize={9}
                    />
                  }
                />
                <ReferenceLine
                  key="current"
                  stroke="#ffffff99"
                  strokeDasharray="3 3"
                  y={currentPrice}
                  label={
                    <CustomLabel
                      value="Current Price"
                      align="left"
                      size={175}
                      fontsize={9}
                      controlable={true}
                    />
                  }
                />
              </>
            )}

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
              tickLine={false}
              mirror
              tick={<CustomizedYAxisTick />}
              padding={{ top: scaleSize.y }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default CustomChat;
