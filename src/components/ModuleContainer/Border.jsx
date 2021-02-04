import React from "react";
import classNames from "classnames";
import styles from "./Border.module.less";

/**
 * 页面模块通用组件
 * @param {string} title 标题
 * @param {left | center} placement 标题位置
 * @param {string} className 容器类名
 */
const Border = ({
  title = "",
  placement = "center",
  className = "",
  children,
  headerMarginTop = 39,
}) => {
  const containerClass = classNames(styles.border, className);
  const headerClass = classNames(styles.borderHeader, {
    [styles.borderHeaderHidden]: !title,
    [styles.borderHeaderLeft]: placement === "left",
    [styles.borderHeaderCenter]: placement === "center",
  });
  return (
    <div className={containerClass}>
      <div className={headerClass} style={{ paddingTop: headerMarginTop }}>
        {title}
      </div>
      <div
        style={{
          height: `calc(100% - 19px - ${headerMarginTop}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Border;
