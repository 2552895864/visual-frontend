import React from "react";
import { ModuleContainer, RatePie } from "@/components";
import { RATE_PIE_COLOR_LIST } from "@/constants";
import styles from "./CbecData.module.less";

const data = [
  { name: "跨境电商出口涨幅", value: 0.78 },
  { name: "跨境电商进口涨幅", value: 0.28 },
  { name: "跨境电商货值涨幅", value: 0.37 },
  { name: "跨境电商单量涨幅", value: 0.66 },
];

const PieCard = ({ name, value, index }) => {
  return (
    <div className={styles.pieCard}>
      <div className={styles.pie}>
        <RatePie color={RATE_PIE_COLOR_LIST[index]} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.value}>{`${(value * 100).toFixed(0)}%`}</div>
      </div>
    </div>
  );
};

const CbecData = ({ dataSource = data }) => {
  return (
    <ModuleContainer
      title="跨境电商数据"
      titleEn="Cross-border e-commerce data"
      className={styles.cbecData}
    >
      <div className={styles.cbecDataLayout}>
        {dataSource.map((item, index) => (
          <PieCard
            key={item.name}
            name={item.name}
            value={item.value}
            index={index}
          />
        ))}
      </div>
    </ModuleContainer>
  );
};

export default CbecData;
