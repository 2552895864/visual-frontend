import React, { useState, useEffect, useContext } from "react";
import intl from "react-intl-universal";
import moment from "moment";

import { LangContext } from "@/context/locale";
import {
  MENU_TRIGGER_NAME,
  MENU_TRIGGER_EN_NAME,
  LANG_EN_US_VALUE,
  LANG_ZH_CN_VALUE,
} from "@/constants";
import zhIcon from "@/assets/pageContainer/langZh.svg";
import enIcon from "@/assets/pageContainer/langEn.svg";
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
  const toggleLang = () => {
    setLang(lang === LANG_EN_US_VALUE ? LANG_ZH_CN_VALUE : LANG_EN_US_VALUE);
  };
  return (
    <div className={styles.menuTrigger}>
      <div className={styles.triggerText}>
        <div className={styles.triggerName}>{MENU_TRIGGER_NAME}</div>
        <div className={styles.triggerEnName}>{MENU_TRIGGER_EN_NAME}</div>
      </div>
      <div className={styles.triggerIcon} onClick={onClick}></div>
      <img
        src={lang === LANG_EN_US_VALUE ? enIcon : zhIcon}
        className={styles.langToggleIcon}
        alt="lang"
        onClick={toggleLang}
      />
    </div>
  );
};

const Header = ({ title, onClickMenuTrigger }) => {
  return (
    <header className={styles.header}>
      <DateTime />
      <div className={styles.title}>
        <span>{title || intl.get("common.title")}</span>
      </div>
      <MenuTrigger onClick={onClickMenuTrigger} />
    </header>
  );
};

export default Header;
