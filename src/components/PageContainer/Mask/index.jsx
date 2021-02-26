import React from "react";
import classNames from "classnames";
import styles from "./index.module.less";
const Mask = ({ show }) => {
  return (
    <div
      className={classNames(styles.mask, {
        [styles.hidden]: !show,
      })}
    ></div>
  );
};

export default Mask;
