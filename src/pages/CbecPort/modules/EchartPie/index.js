import React, { useState, useEffect, useRef } from "react";
import echarts from "echarts";
import { v4 as uuidv4 } from "uuid";
import PubSub from "pubsub-js";
import { pubsubKey } from "src/config";
import { useInterval } from "src/hooks";

const mockData = [
  { name: "生鲜", value: 134, percent: 0.134 },
  { name: "贸易企业", value: 168, percent: 0.168 },
  { name: "商场超市", value: 211, percent: 0.211 },
  { name: "生产企业", value: 183, percent: 0.183 },
  { name: "进口商", value: 249, percent: 0.249 },
];

function EchartPie({
  className,
  getChartOption,
  initDuration = 3000,
  data = mockData,
}) {
  const chartRef = useRef(null);
  const [dataIndex, setDataIndex] = useState(0);
  const [inner, setInner] = useState(data);
  const containerId = uuidv4();

  const initChart = (data, duration) => {
    const myChart = echarts.init(document.getElementById(containerId));
    myChart.setOption(getChartOption(myChart, data, duration));
    chartRef.current = myChart;
    return myChart;
  };

  const tick = (chart) => {
    const msgMap = {
      0: "武邮快件",
      1: "邮局海关",
      2: "东湖综保",
    };
    PubSub.publish(pubsubKey.portChange, msgMap[dataIndex]);
    chart.dispatchAction({
      type: "pieSelect",
      seriesIndex: [0, 1],
      dataIndex,
    });
    setDataIndex((dataIndex + 1) % data.length);
  };

  // CDM
  useEffect(() => {
    const chart = initChart(inner, initDuration);
    tick(chart);
    return () => {
      echarts.dispose(chart);
    };
  }, []);

  useEffect(() => {
    if (inner !== data) {
      chartRef.current.setOption(
        getChartOption(chartRef.current, data, initDuration)
      );
      setInner(data);
    }
  }, [data]);

  useInterval(() => {
    tick(chartRef.current);
  }, 10000);

  return <div id={containerId} className={className}></div>;
}

export default EchartPie;
