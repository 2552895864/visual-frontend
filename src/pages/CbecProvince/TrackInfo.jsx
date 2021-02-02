import React from "react";
import classnames from "classnames";
import { ModuleContainer } from "@/components";

import styles from "./TrackInfo.module.less";

const showOrder = [
  { label: "商品名称", name: "name" },
  { label: "原产地", name: "origin" },
  { label: "起运国", name: "startCountry" },
  { label: "口岸名称", name: "portName" },
];
const LabelCard = ({ label, value = "", mode }) => (
  <div className={styles.labelCardContainer}>
    <div className={styles.label}>{label}</div>
    <div
      className={classnames(styles.value, {
        [styles.flyOutIn]: mode === "after",
        [styles.flyInOut]: mode === "before",
      })}
    >
      {value.toString()}
    </div>
  </div>
);

const TrackInfo = ({ statusInfo, statusItemMode }) => {
  return (
    <ModuleContainer
      title="溯源信息"
      titleEn="Traceability information"
      className={styles.trackInfo}
    >
      <div className={styles.trackInfoLayout}>
        <LabelCard
          label="运单号"
          value={statusInfo.num}
          mode={statusItemMode}
        />
        <div className={styles.division}></div>
        <div className={styles.grid}>
          {showOrder.map((item) => (
            <LabelCard
              key={item.name}
              label={item.label}
              value={statusInfo[item.name]}
              mode={statusItemMode}
            />
          ))}
        </div>
      </div>
    </ModuleContainer>
  );
};

export default TrackInfo;
