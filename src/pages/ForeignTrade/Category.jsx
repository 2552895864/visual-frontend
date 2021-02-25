import React, { useState } from "react";
import {
  ModuleContainer,
  RatePie,
  Statistic,
  Layout,
  Radio,
} from "@/components";
import { RATE_PIE_COLOR_LIST } from "@/constants";
import styles from "./Category.module.less";

const data = {
  import: [
    { name: "母婴产品", value: 0.78, showValue: "78%" },
    { name: "日化", value: 0.28, showValue: "28%" },
    { name: "服装皮具", value: 0.37, showValue: "37%" },
    { name: "数码产品", value: 0.66, showValue: "66%" },
    { name: "食品", value: 0.34, showValue: "34%" },
    { name: "休闲保健", value: 0.66, showValue: "66%" },
  ],
  export: [
    { name: "母婴产品", value: 0.58, showValue: "58%" },
    { name: "日化", value: 0.38, showValue: "38%" },
    { name: "服装皮具", value: 0.47, showValue: "47%" },
    { name: "数码产品", value: 0.76, showValue: "76%" },
    { name: "食品", value: 0.14, showValue: "14%" },
    { name: "休闲保健", value: 0.86, showValue: "86%" },
  ],
};

const Category = ({ dataSource = data }) => {
  const [showData, setShowData] = useState(dataSource.import);
  const getType = (value) => {
    setShowData(dataSource[value]);
  };
  return (
    <ModuleContainer
      title="商品结构"
      titleEn="Commodity composition"
      className={styles.category}
      contentPadding={[19, 0, 0, 0]}
      extra={
        <Radio
          options={[
            { label: "进口", value: "import" },
            { label: "出口", value: "export" },
          ]}
          getType={getType}
        />
      }
    >
      <Layout.NormalLayout
        columnsOptions={{ repeat: { count: 3, value: "auto" } }}
        rowsOptions={{ repeat: { count: 2, value: "auto" } }}
        rowsGap="30px"
        className={styles.categoryLayout}
      >
        {showData.map((item, index) => (
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
      </Layout.NormalLayout>
    </ModuleContainer>
  );
};

export default Category;
