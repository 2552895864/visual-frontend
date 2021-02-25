import React, { useEffect } from "react";
import styles from "./MapDot.module.less";

const MapDot = () => {
  const onclickPanel = (e) => {
    console.log(e);
  };
  useEffect(() => {}, []);
  return <div className={styles.mapDot} onClick={onclickPanel}>
    <div className={styles.dot}></div>
  </div>;
};

export default MapDot;
