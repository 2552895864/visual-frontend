import React from "react";
import { ModuleContainer, Area } from "@/components";
import styles from "./Business.module.less";

const Business = () => {
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
        className={styles.area}
        axis={{ x: axisLabelStyle, y: axisLabelStyle }}
        padding={[10, 6, 10, 25]}
        shape={{ line: "smooth", area: "smooth" }}
        areaColor={{ source: "#00B4F7", target: "#00B4F700" }}
      />
    </ModuleContainer>
  );
};

export default Business;
