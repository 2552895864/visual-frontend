import React from "react";
import styles from "./StatisticsDetail.module.less";

const data = [
  { name: "9991出口单量", value: 12314333 },
  { name: "9993出口单量", value: 41212313 },
  { name: "9912进口单量", value: 23455234 },
  { name: "9913进口单量", value: 1662651 },
];

const StatisticsDetail = () => {
  return (
    <div className={styles.statisticsDetail}>
      {data.map((item) => (
        <div className={styles.statisticsDetailItem} key={item.name}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.value}>
            {(+item.value.toFixed(2)).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsDetail;
