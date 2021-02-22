import React from "react";
import classnames from "classnames";
import intl from "react-intl-universal";
import { Progress } from "antd";
import styles from "./index.module.less";

function Popover({ quantity = 1111, percent = 50, positionClass }) {
  const containerClass = classnames({
    [styles.container]: true,
    [positionClass]: positionClass,
  });
  return (
    <div className={containerClass}>
      <div className={styles.quantity}>
        <div className={styles.value}>{quantity}</div>
        <div className={styles.label}>{intl.get("cbecPort.stepValue")}</div>
      </div>
      <div className={styles.percentage}>
        <div className={styles.progress}>
          <Progress
            type="circle"
            percent={percent}
            width={42}
            format={(percent) => `${percent}%`}
            strokeColor="#2ba8eb"
            trailColor="rgba(43,168,235,0.3)"
          />
        </div>
        <div className={styles.label}>{intl.get("cbecPort.percent")}</div>
      </div>
    </div>
  );
}

export default Popover;
