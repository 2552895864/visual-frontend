import React from "react";
import classNames from "classnames";
import getPadding from '../utils/getPadding'
import Border from "./Border";
import styles from "./index.module.less";

/**
 * 页面模块通用组件
 * @param {string} title 标题
 * @param {string} titleEn 英文标题
 * @param {left | right} placement 标题位置
 * @param {number | number[]} contentPadding 内容的Padding
 * @param {string} className 容器类名
 * @param {ReactNode} extra 右/左上角的操作区域
 */
const ModuleContainer = ({
  title = "标题",
  titleEn = "title",
  placement = "left",
  className = "",
  children,
  extra,
  contentPadding,
}) => {
  const containerClass = classNames(styles.moduleContainer, className);
  const headerClass = classNames(styles.moduleContainerHeader, {
    [styles.moduleContainerHeaderLeft]: placement === "left",
    [styles.moduleContainerHeaderRight]: placement === "right",
  });
  const extraClass = classNames(styles.moduleContainerHeaderExtra, {
    [styles.moduleContainerHeaderExtraLeft]: placement === "right",
    [styles.moduleContainerHeaderExtraRight]: placement === "left",
    [styles.moduleContainerHeaderExtraHidden]: !extra,
  });
  return (
    <div className={containerClass}>
      <div className={headerClass}>
        <div className={styles.moduleContainerTitle}>{title}</div>
        <div className={styles.moduleContainerTitleEn}>{titleEn}</div>
        <div className={extraClass}>{extra}</div>
      </div>
      <div
        className={styles.moduleContainerContent}
        style={{ padding: getPadding(contentPadding) }}
      >
        {children}
      </div>
    </div>
  );
};
ModuleContainer.BorderContainer = Border;
export default ModuleContainer;
