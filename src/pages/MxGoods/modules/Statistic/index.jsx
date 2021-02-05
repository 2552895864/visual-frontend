import React from "react";
import classnames from "classnames";
import styles from "./index.module.less";

function Statistic({ className }) {
  const containerClass = classnames({
    [styles.container]: true,
    [className]: className,
  });

  return (
    <div className={containerClass}>
      <div className={styles.left}>
        <div className={styles.label}>当日进口货运量</div>
        <div className={styles.value}>{Number(76159).toLocaleString()}</div>
      </div>
      <div className={styles.right}>
        <div className={styles.label}>当日出口货运量</div>
        <div className={styles.value}>{Number(129673).toLocaleString()}</div>
      </div>
    </div>
  );
}

export default Statistic;
