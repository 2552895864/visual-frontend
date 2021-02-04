import React, { useRef, useEffect } from "react";
import styles from "./Map.module.less";
import initMap from "./options/map";

const Map = () => {
  const currentRef = useRef();
  useEffect(() => {
    if (currentRef.current) {
      initMap(currentRef.current);
    }
  }, []);
  return <div ref={currentRef} className={styles.map}></div>;
};

export default Map;
