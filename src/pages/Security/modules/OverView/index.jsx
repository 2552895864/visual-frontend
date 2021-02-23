import React from "react";
import classNames from "classnames";
import { Statistic, RatePie } from "@/components";
import bug from "@/assets/security/bug.png";
import event from "@/assets/security/event.png";
import styles from "./index.module.less";

const RatePieItem = (props) => (
  <div className={styles.pie}>
    <RatePie {...props}></RatePie>
  </div>
);

const OverView = ({ className }) => {
  const containerClass = classNames(styles.container, className);

  return (
    <div className={containerClass}>
      <Statistic
        icon={<img src={bug} alt=""></img>}
        title="网络安全漏洞"
        value="28个"
        iconClassName={styles.icon}
        titleClassName={styles.title}
        valueClassName={styles.value}
        className={styles.item}
        infoGap={9}
        iconGap={24}
      ></Statistic>
      <Statistic
        icon={
          <RatePieItem
            color="#476DF4"
            borderWidth={8}
            value={0.28}
          ></RatePieItem>
        }
        title="DNS劫持占比"
        value="28%"
        iconClassName={styles.icon}
        titleClassName={styles.title}
        valueClassName={styles.value}
        className={styles.item}
        infoGap={9}
        iconGap={24}
      ></Statistic>
      <Statistic
        icon={<img src={event} alt=""></img>}
        title="网络安全事件"
        value="163起"
        iconClassName={styles.icon}
        titleClassName={styles.title}
        valueClassName={styles.value}
        className={styles.item}
        infoGap={9}
        iconGap={24}
      ></Statistic>
      <Statistic
        icon={
          <RatePieItem
            color="#E87873"
            borderWidth={8}
            value={0.66}
          ></RatePieItem>
        }
        title="网站可用率"
        value="66%"
        iconClassName={styles.icon}
        titleClassName={styles.title}
        valueClassName={styles.value}
        className={styles.item}
        infoGap={9}
        iconGap={24}
      ></Statistic>
    </div>
  );
};

export default OverView;
