import React from "react";
import classNames from "classnames";

import board from "@/assets/cebcProvince/board.png";
import digitalBusiness from "@/assets/cebcProvince/digitalBusiness.png";
import manage from "@/assets/cebcProvince/manage.png";
import pay from "@/assets/cebcProvince/pay.png";
import store from "@/assets/cebcProvince/store.png";

import styles from "./Statistics.module.less";

const data = [
  { icon: pay, value: 91, key: "pay" },
  { icon: digitalBusiness, value: 83, key: "digitalBusiness" },
  { icon: board, value: 24, key: "board" },
  { icon: store, value: 17, key: "store" },
  { icon: manage, value: 6, key: "manage" },
];
const Badge = ({ dataSource: { icon, value, key }, isLast }) => {
  const containerClass = classNames(styles.badgeContainer,{
    [styles.lastBadge]:isLast
  })
  return (
    <div className={containerClass}>
      <div className={styles.ring}>
        <div className={styles.ringInner}> </div>
      </div>
      <img className={styles.icon} src={icon} alt={key} />
      <div className={styles.text}>
        <span>{value}</span>
        <span>家</span>
      </div>
    </div>
  );
};

const Statistics = () => {
  return (
    <div className={styles.statistics}>
      {data.map((item, index) => (
        <Badge
          key={item.key}
          dataSource={item}
          isLast={index === data.length - 1}
        />
      ))}
    </div>
  );
};

export default Statistics;
