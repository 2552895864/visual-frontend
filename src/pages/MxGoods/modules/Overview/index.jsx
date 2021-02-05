import React from "react";
import classnames from "classnames";
import styles from "./index.module.less";

function Overview({ className }) {
  const containerClass = classnames({
    [styles.container]: true,
    [className]: className,
  });

  return (
    <div className={containerClass}>
      <div className={styles.left}>
        <div className={styles.value}>{Number(65159).toLocaleString()}</div>
        <div className={styles.label}>货运量(标准箱)</div>
      </div>
      <div className={styles.middle}>
        <div className={styles.value}>{Number(32845475).toLocaleString()}</div>
        <div className={styles.label}>货值</div>
      </div>
      <div className={styles.right}>
        <div className={styles.value}>{Number(16152).toLocaleString()}</div>
        <div className={styles.label}>业务量</div>
      </div>
    </div>
  );
}

export default Overview;
