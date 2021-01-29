import React from "react";
import styles from "./Rank.module.less";

const data = [
  { name: "中国", value: 7138 },
  { name: "欧盟", value: 5783 },
  { name: "美国", value: 5138 },
];

const FIRST_WIDTH = 507;
const Rank = () => {
  const firstValue = data[0].value;
  const getWidth = (value) => {
    return `${FIRST_WIDTH * (value / firstValue)}px`;
  };
  return (
    <div className={styles.rank}>
      {data.map((item, index) => (
        <div key={item.name} className={styles.rankItem}>
          <div className={styles.rankValue}>{`No.${index + 1}`}</div>
          <div className={styles.countryName}>{item.name}</div>
          <div
            className={styles.percent}
            style={{ width: getWidth(item.value) }}
          ></div>
          <div className={styles.value}>{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Rank;
