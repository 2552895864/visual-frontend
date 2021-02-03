import React from "react";
import classnames from "classnames";
import styles from "./Statistic.module.less";

function Statistic({
  label = "今日进口总单量",
  number = 42234,
  suffix = "票",
  valueClassName,
}) {
  const valueClass = classnames({
    [styles.value]: true,
    [valueClassName]: valueClassName,
  });
  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <div className={valueClass}>
        <div className={styles.number}>{number.toLocaleString()}</div>
        <div className={styles.suffix}>{suffix}</div>
      </div>
    </div>
  );
}

export default Statistic;
