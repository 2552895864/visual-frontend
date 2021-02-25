import React, { useRef, useEffect } from "react";
import classnames from "classnames";
import styles from "./index.module.less";

function FlashingPoint({ className, offsetX, offsetY, radius = 10, index }) {
  const pointRef = useRef();
  const containerClass = classnames({
    [styles.container]: true,
    [className]: className,
  });

  useEffect(() => {
    pointRef.current &&
      (pointRef.current.style.transform = `translate(${offsetX}px,${offsetY}px)`);
    pointRef.current && (pointRef.current.style.width = `${radius * 2}px`);
    pointRef.current && (pointRef.current.style.height = `${radius * 2}px`);
  }, []);

  return (
    <div className={containerClass} ref={pointRef}>
      <div
        className={classnames(styles["bling-1"], styles[`bling-1-${index}`])}
      ></div>
      <div
        className={classnames(styles["bling-2"], styles[`bling-2-${index}`])}
      ></div>
      <div
        className={classnames(styles["bling-3"], styles[`bling-3-${index}`])}
      ></div>
    </div>
  );
}

export default FlashingPoint;
