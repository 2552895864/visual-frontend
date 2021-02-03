import React from "react";
import { ModuleContainer, Area } from "@/components";
import styles from "./Business.module.less";

const Business = () => {
  const axisLabelStyle = {
    style: {
      fontSize: 14,
      fontWeight: 400,
      color: "#E0FCFF80",
      fontFamily: "Source Han Sans CN",
    },
  };
  return (
    <ModuleContainer
      title="累积业务量"
      titleEn="Cumulative business volume"
      className={styles.business}
    >
      <div className={styles.areaLayout}>
        <Area
          className={styles.area}
          axis={{ x: axisLabelStyle, y: axisLabelStyle }}
          padding={[8, 8, 18, 25]}
          shape={{ line: "smooth", area: "smooth" }}
          areaColor={{ source: "#00B4F7", target: "#00B4F700" }}
        />
      </div>
    </ModuleContainer>
  );
};

export default Business;
