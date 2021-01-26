import React, { useState, useEffect } from "react";
import moment from "moment";
import { MENU_TRIGGER_NAME, MENU_TRIGGER_EN_NAME } from "@/constants";
import styles from "./Header.module.less";

const Header = ({ title, onClickMenuTrigger }) => {
  const [dateTime, setDateTime] = useState({
    date: moment().format("HH:mm:ss"),
    time: moment().format("YYYY-MM-DD"),
  });
  useEffect(() => {
    let timer = setInterval(() => {
      setDateTime({
        date: moment().format("HH:mm:ss"),
        time: moment().format("YYYY-MM-DD"),
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.datetime}>
        <div className={styles.time}>{dateTime.time}</div>
        <div className={styles.date}>{dateTime.date}</div>
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
