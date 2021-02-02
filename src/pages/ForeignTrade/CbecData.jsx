import React from "react";
import { ModuleContainer } from "@/components";
import styles from "./CbecData.module.less";

const data = [
  { name: "跨境电商出口涨幅", value: "78%" },
  { name: "跨境电商进口涨幅", value: "28%" },
  { name: "跨境电商货值涨幅", value: "37%" },
  { name: "跨境电商单量涨幅", value: "66%" },
];

const PieCard = ({ name, value }) => {
  return (
    <div className={styles.pieCard}>
      <div className={styles.pie}></div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.value}>{value}</div>
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
        {dataSource.map((item) => (
          <PieCard key={item.name} name={item.name} value={item.value} />
        ))}
      </div>
    </ModuleContainer>
  );
};

export default CbecData;
