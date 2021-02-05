import React from "react";
import classnames from "classnames";
import styles from "./index.module.less";

function BreathingLights({ className }) {
  const containerClass = classnames({
    [styles.container]: true,
    [className]: className,
  });

  return (
    <div className={containerClass}>
      <div className={styles.query}>
        <div className={styles.label}>查询</div>
      </div>
      <div className={styles.repair}>
        <div className={styles.label}>联网报检</div>
      </div>
      <div className={styles.service}>
        <div className={styles.circle}></div>
        <div className={styles.inner}>
          <div className={styles.label}>企业服务</div>
        </div>
      </div>
      <div className={styles.pretreatment}>
        <div className={styles.label}>申报预处理</div>
      </div>
      <div className={styles.manage}>
        <div className={styles.label}>作业管理</div>
      </div>
    </div>
  );
}

export default BreathingLights;
