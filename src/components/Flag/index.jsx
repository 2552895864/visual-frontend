import React from "react";
import styles from "./index.module.less";
import flag from "./flag";
import countryMapping from "./countryMapping";
const Flag = ({ countryCode }) => {
  return (
    <img
      className={styles.icon}
      src={flag[countryMapping[countryCode]]}
      alt={countryCode}
    />
  );
};

export default Flag;
