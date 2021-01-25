import React from "react";
import { MENU_TRIGGER_NAME, MENU_TRIGGER_EN_NAME } from "@/constants";
import styles from "./Header.module.less";

const Header = ({ title, onClickMenuTrigger }) => {
  return (
    <header className={styles.header}>
      <div className={styles.datetime}>
        <div className={styles.time}>09:56:23</div>
        <div className={styles.date}>2021-01-25</div>
      </div>
      <div className={styles.title}>
        <span>{title}</span>
      </div>
      <div className={styles.menuTrigger}>
        <div className={styles.triggerText}>
          <div className={styles.triggerName}>{MENU_TRIGGER_NAME}</div>
          <div className={styles.triggerEnName}>{MENU_TRIGGER_EN_NAME}</div>
        </div>
        <div className={styles.triggerIcon} onClick={onClickMenuTrigger}></div>
      </div>
    </header>
  );
};

export default Header;
