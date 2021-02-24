import React from "react";
import { ModuleContainer, Layout, Area, Statistic } from "@/components";
import styles from "./Growth.module.less";

const data = {
  chartData: [
    { Date: "2021-01-01", value: 0.6 },
    { Date: "2021-02-02", value: 0.35 },
    { Date: "2021-03-03", value: 0.77 },
    { Date: "2021-04-04", value: 1.1 },
    { Date: "2021-05-05", value: 0.75 },
    { Date: "2021-06-06", value: 0.6 },
  ],
  statisticData: [
    { name: "新增列次", value: 31 },
    { name: "新增线路", value: 7 },
    { name: "日公里数", value: 6423 },
    { name: "日牵引量", value: "34,235吨" },
  ],
};
const extra = (charts) => {
  charts.annotation().text({
    content: "增长率",
    position: ["start", "end"],
    top: true,
    offsetX: -25,
    offsetY: -10,
    style: {
      fontSize: 15,
      fontFamily: "SourceHanSansCN-Normal",
      fill: "#E0FCFF",
    },
  });
  return charts;
};

const Growth = ({ dataSource = data }) => {
  const { chartData, statisticData } = dataSource;
  const xAxisLabel = {
    labelStyle: {
      fontSize: 18,
      fontWeight: 400,
      color: "#E0FCFF80",
      fontFamily: "Source Han Sans CN",
    },
  };
  const yAxisLabel = {
    labelStyle: xAxisLabel.labelStyle,
    formatter: (value) => `${value * 100}%`,
  };
  return (
    <ModuleContainer
      className={styles.growth}
      title="月度铁路货运能力增长情况"
      titleEn="Monthly growth of rail freight capacity"
    >
      <Layout.VerticalLayout
        options={["58%", "35%"]}
        gap="7%"
        className={styles.layout}
      >
        <Area
          data={chartData}
          className={styles.area}
          axis={{ x: xAxisLabel, y: yAxisLabel }}
          padding={[18, 8, 18, 30]}
          shape={{ line: "smooth", area: "smooth" }}
          areaColor={{ source: "#00B4F7", target: "#00B4F700" }}
          extra={extra}
        />
        <Layout.NormalLayout
          columnsOptions={["54%", "46%"]}
          rowsOptions={{ repeat: { count: 2, value: "auto" } }}
          rowsGap={40}
        >
          {statisticData.map((i) => (
            <Statistic
              key={i.name}
              title={i.name}
              value={i.value}
              infoGap={10}
              titleClassName={styles.name}
              valueClassName={styles.value}
            />
          ))}
        </Layout.NormalLayout>
      </Layout.VerticalLayout>
    </ModuleContainer>
  );
};

export default Growth;
