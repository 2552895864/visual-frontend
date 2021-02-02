import React, { useEffect } from "react";
import echarts from "echarts";
import { v4 as uuidv4 } from "uuid";
import delay from "lodash/delay";
import { Interval } from "@/utils";

const RatePie = () => {
  const containerId = uuidv4();
  useEffect(() => {
    const interval = new Interval();
    let chart = echarts.init(document.getElementById());
    chart.setOption({
      color: ["#476df4", "transparent"],
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "80%",
          center: ["50%", "50%"],
          label: {
            show: false,
          },
          data: [
            { value: 52313322, name: "SONY" },
            { value: 102389231, name: "HUAWEI" },
          ],
        },
      ],
    });
    interval.repeat(() => {
      chart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: 0,
      });
      delay(() => {
        chart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: 0,
        });
      }, 800);
    }, 4000);
    return () => {
      interval.clear();
    };
  }, []);
  return <div id={containerId}></div>;
};

export default RatePie;
