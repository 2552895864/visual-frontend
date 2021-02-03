import React from "react";
import { ModuleContainer, RatePie } from "@/components";
import { RATE_PIE_COLOR_LIST } from "@/constants";
import styles from "./Category.module.less";

const data = [
  { name: "母婴产品", value: 0.78 },
  { name: "日化", value: 0.28 },
  { name: "服装皮具", value: 0.37 },
  { name: "数码产品", value: 0.66 },
  { name: "食品", value: 0.34 },
  { name: "休闲保健", value: 0.66 },
];

const PieCard = ({ name, value, index }) => {
  return (
    <div className={styles.pieCard}>
      <div className={styles.pie}>
        <RatePie color={RATE_PIE_COLOR_LIST[index]} borderWidth={8} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.value}>{`${(value * 100).toFixed(0)}%`}</div>
      </div>
    </div>
  );
};

const Category = ({ dataSource = data }) => {
  return (
    <ModuleContainer
      title="热销品类"
      titleEn="Hot selling category"
      // placement="right"
      className={styles.category}
    >
      <div className={styles.categoryLayout}>
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

export default Category;
