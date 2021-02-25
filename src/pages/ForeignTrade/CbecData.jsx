import React from "react";
import { ModuleContainer, Statistic, RingProcess, Layout } from "@/components";
import { RATE_PIE_COLOR_LIST } from "@/constants";
import styles from "./CbecData.module.less";

const data = [
  { name: "进口贸易额", value: 0.78, showValue: "78%", count: 123123 },
  { name: "出口贸易额", value: 0.28, showValue: "28%", count: 23432 },
  { name: "进口业务量", value: 0.37, showValue: "37%", count: 56234 },
  { name: "出口业务量", value: 0.66, showValue: "66%", count: 97774 },
];

const CbecData = ({ dataSource = data }) => {
  return (
    <ModuleContainer
      title="进出口贸易额和业务量"
      titleEn="Import and export trade volume and business volume"
      className={styles.cbecData}
      contentPadding={[13, 0, 0, 0]}
    >
      <Layout.NormalLayout
        rowsOptions={{ repeat: { count: 2, value: "auto" } }}
        columnsOptions={{ repeat: { count: 2, value: "auto" } }}
        rowsGap="29px"
      >
        {dataSource.map((item, index) => (
          <Statistic
            icon={
              <RingProcess
                data={[item]}
                color={RATE_PIE_COLOR_LIST[index]}
                padding={0}
                innerRadius={0.73}
              />
            }
            iconClassName={styles.icon}
            key={item.name}
            title={item.name}
            value={item.count.toLocaleString()}
            infoGap={19}
          />
        ))}
      </Layout.NormalLayout>
    </ModuleContainer>
  );
};

export default CbecData;
