import React from "react";
import styles from "./MapDot.module.less";
import oneDot from "@/assets/cebc/one.png";
import twoDot from "@/assets/cebc/two.png";
import threeDot from "@/assets/cebc/three.png";

const MapDot = () => {
  return (
    <div className={styles.mapDot}>
      <img src={oneDot} alt="one" className={styles.one} />
      {/* <img src={twoDot} alt="one" className={styles.two} />
      <img src={threeDot} alt="one" className={styles.three} /> */}
    </div>
  );
};

export default MapDot;
