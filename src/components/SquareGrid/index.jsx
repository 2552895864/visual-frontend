import React from "react";
import Statistic from "./Statistic";
import styles from "./index.module.less";

const defaultData = [
  { label: "今日进口总单量", number: 0, suffix: "票" },
  { label: "今日进口总单量", number: 0, suffix: "票" },
  { label: "今日进口总单量", number: 0, suffix: "万元" },
  { label: "今日进口总单量", number: 0, suffix: "万元" },
];

function SquareGrid({ data = defaultData }) {
  return (
    <div className={styles.container}>
      {data.map((item, index) => {
        if (index === 1 || index === 2) {
          return (
            <Statistic {...item} key={index} valueClassName={styles.gold} />
          );
        }
        return <Statistic {...item} key={index} />;
      })}
    </div>
  );
}

export default SquareGrid;
