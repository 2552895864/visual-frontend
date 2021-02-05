import React from "react";
import classnames from "classnames";
import styles from "./index.module.less";

function Scan({ className }) {
  const containerClass = classnames({
    [styles.container]: true,
    [className]: className,
  });

  const handleOpenPopup = () => {};

  return (
    <div className={containerClass}>
      <div className={styles.left}>
        <div className={styles.qrCode}></div>
        <div className={styles.textContent}>
          <div className={styles.title}>单一窗口</div>
          <div className={styles.location}>
            <div className={styles.label}>访问路径：</div>
            <div className={styles.link} onClick={handleOpenPopup}>
              湖北省单一窗口
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.qrCode}></div>
        <div className={styles.textContent}>
          <div className={styles.title}>物流企业服务</div>
          <div className={styles.location}>
            <div className={styles.label}>访问路径：</div>
            <div className={styles.link} onClick={handleOpenPopup}>
              湖北省单一窗口
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scan;
