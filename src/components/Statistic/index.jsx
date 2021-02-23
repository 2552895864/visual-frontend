import React from "react";
import classNames from "classnames";
import styles from "./index.module.less";

/**
 * 统计数值
 * @param {ReactNode} icon  统计数据的icon ,为React元素
 * @param {*} title 数值的标题
 * @param {*} value 数值内容
 * @param {*} iconClassName icon样式类名
 * @param {*} titleClassName 数值的标题样式类名
 * @param {*} valueClassName 数值内容样式类名
 * @param {*} className 容器样式类名
 * @param {*} reverse 数值标题内容上下顺序调转，默认为false
 * @param {*} infoGap 数值标题和数值内容间隔
 * @param {*} iconGap icon 和数值显示区域间隔
 */
const Statistic = ({
  icon,
  title,
  value,
  iconClassName,
  titleClassName = "",
  valueClassName = "",
  className,
  reverse,
  infoGap,
  iconGap,
}) => {
  const containerClass = classNames(styles.statistic, className);
  const iconClass = classNames(styles.icon, iconClassName, {
    [styles.iconHidden]: !icon,
  });
  const titleClass = classNames(styles.title, titleClassName);
  const valueClass = classNames(styles.value, valueClassName);
  const infoEle = [
    <div className={titleClass} key="title">
      {title}
    </div>,
    <div className={valueClass} key="value">
      {value}
    </div>,
  ];
  return (
    <div className={containerClass}>
      <div className={iconClass} style={{ marginRight: iconGap }}>
        {icon}
      </div>
      <div className={styles.infoArea} style={{ gridRowGap: infoGap }}>
        {reverse ? infoEle.reverse() : infoEle}
      </div>
    </div>
  );
};

export default Statistic;
