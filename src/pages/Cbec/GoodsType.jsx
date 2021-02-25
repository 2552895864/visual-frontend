import React, { useEffect } from "react";
import { Chart } from "@antv/g2";
import { v4 as uuidv4 } from "uuid";
// import intl from "react-intl-universal";
import { ModuleContainer } from "@/components";
import styles from "./GoodsType.module.less";
const data = [
  { question: "食品", percent: 0.5, flag: 1 },
  { question: "服装", percent: 0.62, flag: 0 },
  { question: "电器", percent: 0.72, flag: 1 },
  { question: "日用品", percent: 0.78, flag: 0 },
];

const renderRadialBar = (id) => {
  const chart = new Chart({
    container: id,
    autoFit: true,
    // height: 500,
  });

  chart.data(data);

  chart.scale("percent", {
    min: 0,
    max: 1,
  });

  chart.tooltip({
    title: "question",
    showMarkers: false,
  });

  chart.legend(false);
  chart.axis("question", {
    grid: null,
    tickLine: null,
    line: null,
    // label: {
    //   formatter: (text, item, index) =>
    //     `<div style={{ color: item.flag ? "#1EC2FF" : "#FFC47F" }}>
    //       {item.question}
    //     </div>`,
    // },
  });

  chart.coordinate("polar", { innerRadius: 0.1, radius: 0.8 }).transpose();
  chart.theme({
    maxColumnWidth: 12,
    minColumnWidth: 12,
  });
  chart
    .interval()
    .position("question*percent")
    .color("flag", (val) => (val ? "#1EC2FF" : "#4A7AFF"))
    .style({
      lineCap: "round",
    })
    .tooltip("percent", (val) => {
      return {
        name: "占比",
        value: val * 100 + "%",
      };
    })
    .label("percent", {
      offset: -2,
      content: (data) => {
        return data.percent * 100 + "%";
      },
    });

  chart.interaction("element-active");

  chart.render();
  return chart;
};

const RadialBar = () => {
  const containerId = uuidv4();
  useEffect(() => {
    const chart = renderRadialBar(containerId);
    return () => {
      chart.destroy();
    };
  }, [containerId]);
  return <div id={containerId} className={styles.goodsTypeChart}></div>;
};

const GoodsType = () => {
  return (
    <ModuleContainer
      title="进出口热销品类"
      titleEn="The value of goods declared"
      className={styles.goodsType}
    >
      <RadialBar />
    </ModuleContainer>
  );
};

export default GoodsType;
