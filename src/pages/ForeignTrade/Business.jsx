import React from "react";
import { ModuleContainer, Area } from "@/components";
import styles from "./Business.module.less";

const data = [
  { Date: "2021-01-01", value: 120 },
  { Date: "2021-02-02", value: 150 },
  { Date: "2021-03-03", value: 250 },
  { Date: "2021-04-04", value: 500 },
  { Date: "2021-05-05", value: 620 },
  { Date: "2021-06-06", value: 500 },
];
const Business = ({ dataSource = data }) => {
  const axisLabelStyle = {
    labelStyle: {
      fontSize: 14,
      fontWeight: 400,
      color: "#E0FCFF80",
      fontFamily: "Source Han Sans CN",
    },
  };
  return (
    <ModuleContainer
      title="月度贸易货值变化"
      titleEn="Monthly change in trade value"
      className={styles.business}
    >
      <Area
        data={dataSource}
        className={styles.area}
        axis={{ x: axisLabelStyle, y: { ...axisLabelStyle, title: "货值" } }}
        padding={[10, 6, 10, 25]}
        shape={{ line: "smooth", area: "smooth" }}
        areaColor={{ source: "#00B4F7", target: "#00B4F700" }}
      />
    </ModuleContainer>
  );
};

export default Business;
