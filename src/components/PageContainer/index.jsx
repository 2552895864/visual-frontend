import React, { useState } from "react";
import classNames from "classnames";

import Menu from "./Menu";
import styles from "./index.module.less";

const PageContainer = ({ className = "", children }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const pageContainerClass = classNames(styles.pageContainer, className);
  const onOpenMenu = () => {
    setMenuVisible(true);
  };

  const onCloseMenu = () => {
    setMenuVisible(false);
  };
  return (
    <div className={pageContainerClass}>
      <div onClick={onOpenMenu}>Switch</div>
      <div className={styles.pageContainerContent}>{children}</div>
      <Menu visible={menuVisible} onClose={onCloseMenu} />
    </div>
  );
};

export default PageContainer;
