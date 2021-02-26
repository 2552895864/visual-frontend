import React, { useEffect, useRef, useState } from "react";
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

const EarthStatistics = ({ position, show }) => {
  return (
    <div
      className={styles.earthStatistics}
      style={{ ...position, visibility: show ? "visible" : "hidden" }}
    >
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
  const [position, setPosition] = useState({ left: null, top: null });
  const [hasStatistics, setStatistics] = useState(false);
  useEffect(() => {
    mapRef.current.onmousemove = function (event) {
      setStatistics(true);
      setPosition({
        left: event.clientX - document.body.clientWidth * 0.285,
        top: event.clientY - 110,
      });
    };
    mapRef.current.onmouseout = function () {
      setStatistics(false);
    };
    initEarth(mapRef);
  }, []);
  return (
    <div className={styles.earthLayout}>
      <div ref={mapRef} className={styles.earth}></div>
      <EarthStatistics position={position} show={hasStatistics} />
    </div>
  );
};

export default Earth;
