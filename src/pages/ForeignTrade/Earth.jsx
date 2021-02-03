import React, { useEffect, useRef } from "react";
import UpIcon from "@/assets/foreignTrade/up.svg";
import DownIcon from "@/assets/foreignTrade/down.svg";
import initEarth from "./options/earth";
import styles from "./Earth.module.less";

const data = [
  { name: "营商环境排名", value: 36, unit: "", isUp: true },
  { name: "跨境指标排名", value: 12, unit: "", isUp: false },
  { name: "国际贸易市场份额", value: 65, unit: "%", isUp: true },
  { name: "整体通关时间", value: 36, unit: "h", isUp: true },
];

const EarthStatistics = () => {
  return (
    <div className={styles.earthStatistics}>
      {data.map((item) => (
        <div key={item.name} className={styles.item}>
          <div className={styles.name}>{`${item.name}：`}</div>
          <div className={styles.valueArea}>
            <div className={styles.value}>{`${item.value}${item.unit}`}</div>
            <img
              src={item.isUp ? UpIcon : DownIcon}
              alt="trend"
              className={styles.icon}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const Earth = () => {
  const mapRef = useRef();
  useEffect(() => {
    initEarth(mapRef);
  }, []);
  return (
    <div className={styles.earthLayout}>
      <div ref={mapRef} className={styles.earth}></div>
      <EarthStatistics />
    </div>
  );
};

export default Earth;
