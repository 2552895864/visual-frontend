import React from "react";
import { Layout } from "@/components";
import { useSpring, animated } from "react-spring";
import classNames from "classnames";
import styles from "./MainStatistics.module.less";

const data = [
  { name: "当日业务量", value: 65159 },
  { name: "当日贸易货值", value: 331234 },
  { name: "活跃企业数", value: 16322 },
];

const MainStatisticsItem = ({ value, name, isLast }) => {
  const valueAnimation = useSpring({
    value,
    from: { value: value / 2 },
    delay: 1000,
    config: { duration: 10000000000 },
  });

  const mainStatisticsItemClass = classNames(styles.mainStatisticsItem, {
    [styles.mainStatisticsItemGap]: !isLast,
  });
  return (
    <div className={mainStatisticsItemClass}>
      <animated.div className={styles.value}>
        {valueAnimation.value.interpolate((x) =>
          (+x.toFixed(2)).toLocaleString()
        )}
      </animated.div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};

const MainStatistics = ({ dataSource = data }) => {
  return (
    <Layout.HorizontalLayout
      options={{ repeat: { count: 3, value: "30%" } }}
      className={styles.mainStatistics}
      gap="5.6%"
    >
      {dataSource.map((item, index) => (
        <MainStatisticsItem
          key={item.name}
          value={item.value}
          name={item.name}
          isLast={index === dataSource.length - 1}
        />
      ))}
    </Layout.HorizontalLayout>
  );
};

export default MainStatistics;
