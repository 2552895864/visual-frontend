import React from "react";
import { ModuleContainer } from "@/components";
import report1 from "@/assets/intro/report1.png";
import report2 from "@/assets/intro/report2.png";
import styles from "./WindowReport.module.less";

const { BorderContainer } = ModuleContainer;

const img = [report1, report2];
const text =
  "面向企事业单位，以抚慰为核心，聚力“六稳”“六保”,提高能效果，实现增效降本";

const WindowReport = () => {
  return (
    <BorderContainer
      className={styles.windowReport}
      title="省领导高度重视“单一窗口建设”"
      headerMarginTop={34}
    >
      <div className={styles.windowReportLayout}>
        <div className={styles.images}>
          {img.map((m) => (
            <img src={m} alt="pic" />
          ))}
        </div>
        <div className={styles.desc}>{text}</div>
      </div>
    </BorderContainer>
  );
};

export default WindowReport;
