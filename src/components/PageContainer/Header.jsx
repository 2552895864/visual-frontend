import React, { useState, useEffect, useContext } from "react";
import { LangContext } from "@/context/locale";
import moment from "moment";
import { MENU_TRIGGER_NAME, MENU_TRIGGER_EN_NAME } from "@/constants";
import styles from "./Header.module.less";

const DateTime = () => {
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
    <div className={styles.datetime}>
      <div className={styles.time}>{dateTime.time}</div>
      <div className={styles.date}>{dateTime.date}</div>
    </div>
  );
};

const MenuTrigger = ({ onClick }) => {
  const { lang, setLang } = useContext(LangContext);
  const handleSite = (event) => {
    setLang(event.target.value);
  };
  return (
    <div className={styles.menuTrigger}>
      <div className={styles.triggerText}>
        <div className={styles.triggerName}>{MENU_TRIGGER_NAME}</div>
        <div className={styles.triggerEnName}>{MENU_TRIGGER_EN_NAME}</div>
      </div>
      <div className={styles.triggerIcon} onClick={onClick}></div>
      <select className="select" onChange={handleSite} value={lang}>
        <option value="zh-CN">中文</option>
        <option value="en-US">English</option>
      </select>
    </div>
  );
};

const Header = ({ title, onClickMenuTrigger }) => {
  return (
    <header className={styles.header}>
      <DateTime />
      <div className={styles.title}>
        <span>{title}</span>
      </div>
      <MenuTrigger onClick={onClickMenuTrigger} />
    </header>
  );
};

export default Header;
