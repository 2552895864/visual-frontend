import React, { useState } from "react";
import classNames from "classnames";
import { HelmetProvider, Helmet } from "react-helmet-async";

import { DEFAULT_TITLE } from "@/constants";

import Menu from "./Menu";
import styles from "./index.module.less";

const PageContainer = ({ title = DEFAULT_TITLE, className = "", children }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const pageContainerClass = classNames(styles.pageContainer, className);
  const onOpenMenu = () => {
    setMenuVisible(true);
  };

  const onCloseMenu = () => {
    setMenuVisible(false);
  };
  return (
    <HelmetProvider>
      <div className={pageContainerClass}>
        <Helmet>
          <title>{title}</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <div onClick={onOpenMenu}>Switch</div>
        <div className={styles.pageContainerContent}>{children}</div>
        <Menu visible={menuVisible} onClose={onCloseMenu} />
      </div>
    </HelmetProvider>
  );
};

export default PageContainer;
