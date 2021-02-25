import React from "react";
import { Layout } from "@/components";
import { useSpring, animated } from "react-spring";
import styles from "./StatisticsOverview.module.less";

const data = [
  { name: "累计货值", value: 135123, unit: "万元" },
  { name: "累计单量", value: 54123, unit: "万元" },
];
const StatisticsOverview = ({ dataSource = data }) => {
  const titleAnimation = useSpring({
    value1: 999999,
    value2: 99999,
    from: { value1: 135123, value2: 54123 },
    delay: 6000,
    config: { duration: 10000000000 },
  });
  return (
    <Layout.HorizontalLayout
      options={{ repeat: { count: 2, value: "50%" } }}
      className={styles.statisticsOverview}
    >
      {dataSource.map((item, index) => (
        <div key={item.name}>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.value}>
            <animated.span>
              {titleAnimation[`value${index + 1}`].interpolate((x) =>
                (+x.toFixed(2)).toLocaleString()
              )}
            </animated.span>
            <span>{item.unit}</span>
          </p>
        </div>
      ))}
    </Layout.HorizontalLayout>
  );
};

export default StatisticsOverview;
