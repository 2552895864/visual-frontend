import React from "react";
import classNames from "classnames";
import { Statistic } from "@/components";
import test from "@/assets/security/审单.png";
import styles from "./index.module.less";

const OverView = ({ className }) => {
  const containerClass = classNames(styles.statistic, className);

  return (
    <div className={containerClass}>
      <Statistic
        icon={<img src={test} alt=""></img>}
        title="网络安全漏洞"
        value="28个"
        iconClassName={styles.icon}
        titleClassName={styles.title}
        valueClassName={styles.value}
        infoGap={9}
        iconGap={24}
      ></Statistic>
    </div>
  );
};

export default OverView;
