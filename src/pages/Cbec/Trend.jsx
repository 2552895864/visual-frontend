import React, { useEffect } from "react";
import echarts from "echarts";
import { ModuleContainer } from "@/components";
import tools from "@/utils/echarts-tooltip-auto-show";
import getChartsOption from "./options/rank";
import styles from "./Trend.module.less";

const data = {
  xCoordinate: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ],
  barData: [
    33000,
    31000,
    36000,
    32500,
    34500,
    31500,
    33000,
    31000,
    36000,
    32500,
    34500,
    31500,
  ],
  lineData: [
    32000,
    29000,
    34500,
    25800,
    34000,
    33000,
    22000,
    29000,
    24500,
    35800,
    24000,
    35000,
  ],
};

const Trend = ({ dataSource = data }) => {
  const options = getChartsOption(dataSource);
  useEffect(() => {
    const myChart = echarts.init(document.getElementById("rank"));
    myChart.setOption(options);
    tools.loopShowTooltip(myChart, options, {
      loopSeries: true,
    });
  });
  return (
    <ModuleContainer
      title="月申报单量与货值"
      titleEn="The number of declaration forms TOP5 enterprises"
      className={styles.rank}
    >
      <div id="rank" className={styles.rankChart}></div>
    </ModuleContainer>
  );
};

export default Trend;
