import React from "react";
import { ModuleContainer, RatePie, Statistic } from "@/components";
import { RATE_PIE_COLOR_LIST } from "@/constants";
import styles from "./Category.module.less";

const data = [
  { name: "母婴产品", value: 0.78, showValue: "78%" },
  { name: "日化", value: 0.28, showValue: "28%" },
  { name: "服装皮具", value: 0.37, showValue: "37%" },
  { name: "数码产品", value: 0.66, showValue: "66%" },
  { name: "食品", value: 0.34, showValue: "34%" },
  { name: "休闲保健", value: 0.66, showValue: "66%" },
];

const Category = ({ dataSource = data }) => {
  return (
    <ModuleContainer
      title="热销品类"
      titleEn="Hot selling category"
      className={styles.category}
    >
      <div className={styles.categoryLayout}>
        {dataSource.map((item, index) => (
          <Statistic
            icon={
              <RatePie
                color={RATE_PIE_COLOR_LIST[index]}
                borderWidth={8}
                value={item.value}
              />
            }
            iconClassName={styles.icon}
            title={item.name}
            value={item.showValue}
            key={item.name}
          />
        ))}
      </div>
    </ModuleContainer>
  );
};

export default Category;
