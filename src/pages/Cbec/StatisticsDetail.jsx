import React from "react";
import { Statistic, Layout } from "@/components";
import styles from "./StatisticsDetail.module.less";

const data = [
  { name: "9991出口单量", value: 12314333 },
  { name: "9993出口单量", value: 41212313 },
  { name: "9912进口单量", value: 23455234 },
  { name: "9913进口单量", value: 1662651 },
];

const StatisticsDetail = () => {
  return (
    <Layout.NormalLayout
      columnsOptions={{ repeat: { count: 2, value: "auto" } }}
      rowsOptions={{ repeat: { count: 2, value: "auto" } }}
      rowsGap="27px"
      className={styles.statisticsDetail}
    >
      {data.map((item) => (
        <Statistic
          key={item.name}
          title={item.name}
          titleClassName={styles.name}
          value={(+item.value.toFixed(2)).toLocaleString()}
          valueClassName={styles.value}
          infoGap={26}
        />
      ))}
    </Layout.NormalLayout>
  );
};

export default StatisticsDetail;
