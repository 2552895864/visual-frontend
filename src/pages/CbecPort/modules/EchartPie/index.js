import React, { useState, useEffect, useRef } from "react";
import echarts from "echarts";
import { v4 as uuidv4 } from "uuid";
import { useInterval } from "@/hooks";
import getChartOption from "../../options/pie";

const mockData = [
  { name: "武邮快件", value: 15, percent: 0.15 },
  { name: "东湖综保", value: 71, percent: 0.71 },
  { name: "邮局海关", value: 24, percent: 0.24 },
];

function EchartPie({ className, duration = 8000, data = mockData }) {
  const chartRef = useRef(null);
  const [dataIndex, setDataIndex] = useState(0);
  const containerId = uuidv4();

  const initChart = (data, duration) => {
    const myChart = echarts.init(document.getElementById(containerId));
    myChart.setOption(getChartOption(data, duration));
    chartRef.current = myChart;
    return myChart;
  };

  // CDM
  useEffect(() => {
    const chart = initChart(data, duration);
    return () => {
      echarts.dispose(chart);
    };
  }, []);
  useInterval(() => {
    chartRef.current.dispatchAction({
      type: "pieUnSelect",
      seriesIndex: [0, 1],
      dataIndex,
    });
    setDataIndex((dataIndex + 1) % data.length);
  }, duration);

  return <div id={containerId} className={className}></div>;
}

export default EchartPie;
