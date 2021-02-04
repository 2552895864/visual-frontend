import React from "react";
import { ModuleContainer } from "@/components";
import styles from "./Mechanism.module.less";

const { BorderContainer } = ModuleContainer;
const text = [
  "中央层面：国务院口岸工作部际联席会议（国务院副总理任召集人）",
  "单一窗口建设工作组：海关总署牵头，共25家成员",
  "地方层面：地方协调推进机制（各省级人民政府牵头）",
];
const Mechanism = () => {
  return (
    <BorderContainer
      className={styles.mechanism}
      title="工作机制"
      headerMarginTop={30}
    >
      <div className={styles.mechanismLayout}>
        <div className={styles.tree}></div>
        <div className={styles.desc}>
          {text.map((t) => (
            <div className={styles.descItem}>{t}</div>
          ))}
        </div>
      </div>
    </BorderContainer>
  );
};

export default Mechanism;
