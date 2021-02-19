import React, { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./index.module.less";

function NumberTransition({ value = 0, theme = "default", duration = 3000 }) {
  const componentId = uuidv4();
  const odObject = useRef(null);
  // CDM
  useEffect(() => {
    window.odometerOptions = { auto: false };
    const number = document.getElementById(componentId);
    odObject.current = new window.Odometer({
      el: number,
      value: value,
      format: "(,ddd)",
      theme,
      duration,
    });
  }, []);
  useEffect(() => {
    odObject.current.update(value);
  }, [value]);
  return <span className={styles.container} id={componentId}></span>;
}

export default NumberTransition;
