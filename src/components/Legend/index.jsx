import React from "react";
import Layout from "../GridLayout";
import classNames from "classnames";
import styles from "./index.module.less";

const Legend = ({ legend, className }) => {
  return (
    <Layout.HorizontalLayout
      options={{ repeat: { count: 2, value: "auto" } }}
      gap="19px"
      className={classNames(styles.legend, className)}
    >
      {legend.map((value, index) => (
        <div key={value} className={styles.legendItem}>
          <div
            className={classNames(styles.legendIcon, {
              [styles.legendIconRight]: index === 1,
              [styles.legendIconLeft]: index === 0,
            })}
          ></div>
          <div className={styles.legendLabel}>{value}</div>
        </div>
      ))}
    </Layout.HorizontalLayout>
  );
};

export default Legend;
