import React from "react";
import classNames from "classnames";
import styles from "./index.module.less";

const ModuleContainer = ({
  title = "标题",
  titleEn = "title",
  placement = "left",
  className = "",
  children,
}) => {
  const containerClass = classNames(styles.moduleContainer, className);
  const headerClass = classNames(styles.moduleContainerHeader, {
    [styles.moduleContainerHeaderLeft]: placement === "left",
    [styles.moduleContainerHeaderRight]: placement === "right",
  });
  return (
    <div className={containerClass}>
      <div className={headerClass}>
        <div className={styles.moduleContainerTitle}>{title}</div>
        <div className={styles.moduleContainerTitleEn}>{titleEn}</div>
      </div>
      <div className={styles.moduleContainerContent}>{children}</div>
    </div>
  );
};

export default ModuleContainer;
