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
import { useWindowSize } from "@/hook/useWindowSize";
import { calculateZoom } from "@/utils/calculateZoom";

interface CustomLabelProps extends LabelProps {
  viewBox?: any;
  size: number;
  fontsize: number;
  align: "left" | "center" | "right";
  controlable?: boolean;
  hiddenable?: boolean;
}

interface PointType {
  name: string;
  price: number;
}

interface FixedLineType {
  current: number;
  deposit?: number;
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
    min: 100,
  };

  const [point, setPoint] = useState<null | PointType>();
  const [scaleSize, setScaleSize] = useState({
    xl: 0,
    xr: 0,
    yt: yConfig.default,
    yb: 0,
  });

  const [clickPoint, setClickPoint] = useState<clickType>({
    x: null,
    y: null,
    clicked: false,
  });

  const [toggle, setToggle] = useState(false);
  const [pickY, setPickY] = useState(false);
  const [predictedPrice, setPredictedPrice] = useState(fixedLines?.current);
  const [fixedLineVisible, setFixedLineVisible] = useState(true);

  const toggleFalse = () => {
    setToggle(false);
    setPredictedPrice(fixedLines?.current);
  };

  const CustomLabel = (props: CustomLabelProps) => {
    const bx = props.size;
    const by = 6;
    let sx = 0;
    if (props.align === "center")
      sx = props.viewBox.x + props.viewBox.width / 2 - bx / 2;
    return (
      <g>
        <path
          className="cursor-pointer price-label"
          d={`M${sx},${props.viewBox.y - by - 6}
              h${bx}
              q7,0 7,7
              v${by}
              q0,7 -7,7
              h-${bx}
              z
            `}
          fill="#353D4C"
          onMouseDown={() => props.controlable && setToggle(true)}
        />
        <text
          className="cursor-pointer price-label"
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
              ? `Predicted Price: ${unit ? unit : ""}${predictedPrice}`
              : `Current Price: ${unit ? unit : ""}${fixedLines?.current}`
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
          x={props.viewBox.x}
          y={props.viewBox.y}
          fill="#ffffff99"
          dy={2}
          dx={props.viewBox.width - 20}
          fontSize="10"
          fontWeight="600"
          textAnchor="middle"
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
            <text fill="#7a7a7a" fontSize={5} transform="translate(0,-15)">
              |
            </text>
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
        <g transform={`translate(${x - 12},${y + 2})`}>
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
          setPredictedPrice(predictedPrice! - dy * 5);
        } else if (pickY) {
          let syt = scaleSize.yt;
          let syb = 0;
          if (dy > 0) {
            if (scaleSize.yt < yConfig.min) syt += 15;
            syb = scaleSize.yb < 0 ? scaleSize.yb + 15 : 0;
          } else {
            syt = scaleSize.yt - 10;
            syb = scaleSize.yb - 10;
          }
          setScaleSize({ ...scaleSize, yt: syt, yb: syb });
        } else {
          const sxl = scaleSize.xl + dx < 0 ? scaleSize.xl + dx : 0;
          const sxr = scaleSize.xr - dx < 0 ? scaleSize.xr - dx : 0;
          const syt =
            scaleSize.yt + dy < yConfig.min ? scaleSize.yt + dy : yConfig.min;
          const syb = scaleSize.yb - dy < 0 ? scaleSize.yb - dy : 0;
          setScaleSize({ ...scaleSize, xl: sxl, xr: sxr, yt: syt, yb: syb });
        }
      }
    }
  };

  const handleScroll = (props: WheelEvent) => {
    let sxl = 0;
    let sxr = scaleSize.xr;
    let syt = scaleSize.yt;
    let syb = scaleSize.yb;
    if (props.deltaY > 0) {
      sxl = scaleSize.xl < 0 ? scaleSize.xl + 45 : 0;
      sxr = scaleSize.xr < 0 ? scaleSize.xr + 45 : 0;
      if (scaleSize.yt + 25 < yConfig.default) {
        syt += 25;
      }
      syb = scaleSize.yb < 0 ? scaleSize.yb + 45 : 0;
    } else {
      sxl = scaleSize.xl - 45;
    }
    setScaleSize({ ...scaleSize, xl: sxl, xr: sxr, yt: syt, yb: syb });
  };

  function disableScroll() {
    const scrollableElements = document.querySelectorAll(".scrollable");

    scrollableElements.forEach((item) => {
      item.addEventListener("wheel", (e) => e.preventDefault());
    });
    !fixedLines?.deposit && setFixedLineVisible(false);
  }

  function enableScroll() {
    const scrollableElements = document.querySelectorAll(".scrollable");

    scrollableElements.forEach((item) => {
      item.removeEventListener("wheel", (e) => e.preventDefault());
    });
    !fixedLines?.deposit && setFixedLineVisible(true);
  }

  return (
    <>
      <div
        className="scrollable select-none zoom-100 xl:zoom-125 2xl:zoom-100"
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

            {fixedLines?.deposit && (
              <ReferenceArea
                y1={predictedPrice}
                y2={fixedLines.deposit}
                fill="rgba(255, 87, 87, 0.08)"
                strokeOpacity={0.3}
              />
            )}

            {!toggle && (
              <>
                <ReferenceLine
                  stroke="#ffffff99"
                  strokeDasharray="3 3"
                  x={point?.name}
                  label={{
                    value:
                      point?.name !== data[data.length - 1].name
                        ? point?.name
                        : "",
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
              </>
            )}

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
                    hiddenable={true}
                  />
                }
              />
            )}

            {fixedLines && fixedLineVisible && (
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
                  y={predictedPrice}
                  label={
                    <CustomLabel
                      value={`${unit}${fixedLines.current}`}
                      align="left"
                      size={175}
                      fontsize={9}
                      controlable={!!fixedLines.deposit}
                    />
                  }
                />
              </>
            )}

            <XAxis
              id="xaxis"
              dataKey="name"
              axisLine={{ stroke: "transparent" }}
              tickLine={false}
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
              padding={{ top: scaleSize.yt, bottom: scaleSize.yb }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default CustomChat;
