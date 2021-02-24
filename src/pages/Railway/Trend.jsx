import React from "react";
import { ModuleContainer, Area } from "@/components";
import { buildMultipleLines } from "@/utils/utils";
import styles from "./Trend.module.less";
import { axisConfig, multiAreaConfig } from "./options/areaConfig";

const data = [
  { Date: "2021-01-01", input: 21000, output: 14500 },
  { Date: "2021-02-02", input: 16000, output: 23500 },
  { Date: "2021-03-03", input: 25000, output: 27000 },
  { Date: "2021-04-04", input: 27000, output: 20000 },
  { Date: "2021-05-05", input: 23000, output: 17000 },
  { Date: "2021-06-06", input: 24000, output: 25000 },
  { Date: "2021-07-04", input: 27000, output: 20000 },
  { Date: "2021-08-05", input: 23000, output: 17000 },
  { Date: "2021-09-06", input: 24000, output: 25000 },
];

const Trend = ({ dataSource = data }) => {
  return (
    <ModuleContainer
      className={styles.trend}
      title="月度进出口货运量变化趋势"
      titleEn="Change trend of monthly import and export freight volume"
    >
      <Area
        className={styles.area}
        padding={[10, 8, 25, 35]}
        axis={axisConfig}
        multipleLines={buildMultipleLines(dataSource, multiAreaConfig)}
      />
    </ModuleContainer>
  );
};

export default Trend;
