import React, { useEffect } from "react";
import echarts from "echarts";
import { v4 as uuidv4 } from "uuid";
// import delay from "lodash/delay";
// import { Interval } from "@/utils";
import styles from "./index.module.less";

const RatePie = ({ color = "#476df4", borderWidth = 5, value }) => {
  const containerId = uuidv4();
  useEffect(() => {
    // const interval = new Interval();
    let chart = echarts.init(document.getElementById(containerId));
    chart.setOption({
      color: [color, "transparent"],
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
            { value: 100 * value, name: "SONY" },
            { value: 100 * (1 - value), name: "HUAWEI" },
          ],
        },
      ],
    });
    // interval.repeat(() => {
    //   chart.dispatchAction({
    //     type: "highlight",
    //     seriesIndex: 0,
    //     dataIndex: 0,
    //   });
    //   delay(() => {
    //     chart.dispatchAction({
    //       type: "downplay",
    //       seriesIndex: 0,
    //       dataIndex: 0,
    //     });
    //   }, 800);
    // }, 4000);
    // return () => {
    //   interval.clear();
    // };
  }, [containerId, color]);
  return (
    <div
      id={containerId}
      className={styles.ratePie}
      style={{
        border: `${borderWidth}px solid ${color}4D`,
        borderRadius: "50%",
      }}
    ></div>
  );
};

export default RatePie;
