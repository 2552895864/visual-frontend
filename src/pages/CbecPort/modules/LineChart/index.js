import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useInterval } from "@/hooks";
import initChart from "../../options/line";
import classnames from "classnames";
import styles from "./index.module.less";

const mockData = [
  { time: "1月", value: 33333, counts: 260 },
  { time: "2月", value: 35348, counts: 240 },
  { time: "3月", value: 26666, counts: 370 },
  { time: "4月", value: 29999, counts: 350 },
  { time: "5月", value: 34542, counts: 270 },
  { time: "6月", value: 38999, counts: 370 },
];

function LineChart({ data = mockData, className, duration = 5000 }) {
  const chartRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [inner, setInner] = useState(data);
  const containerId = uuidv4();
  const containerClass = classnames(styles.container, {
    [className]: className,
  });
  // CDM
  useEffect(() => {
    const chart = initChart({ containerId, data: inner, duration });
    chartRef.current = chart;
    return () => {
      chart.destroy();
    };
  }, []);
  useEffect(() => {
    if (data !== inner) {
      chartRef.current.changeData(data);
      setInner(data);
    }
  }, [data]);
  useInterval(() => {
    const point = chartRef.current
      .hideTooltip()
      .getXY(data[index % data.length]);
    chartRef.current.showTooltip(point);
    setIndex(index + 1);
  }, duration);
  return <div id={containerId} className={containerClass}></div>;
}

export default LineChart;
