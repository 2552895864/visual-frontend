import React from "react";
import { Statistic, Layout } from "@/components";
import styles from "./DetailStatistics.module.less";

import car from "@/assets/foreignTrade/car.png";
import person from "@/assets/foreignTrade/person.png";
import cabinRate from "@/assets/foreignTrade/cabinRate.png";
import goodsRate from "@/assets/foreignTrade/goodsRate.png";

const data = [
  { name: "周通关车次", value: "112", type: "car" },
  { name: "日通关人次", value: "7,853", type: "person" },
  { name: "舱单申报覆盖率", value: "98.23%", type: "cabinRate" },
  { name: "货物申报覆盖率", value: "98.13%", type: "goodsRate" },
];

const icon = {
  car,
  person,
  cabinRate,
  goodsRate,
};

const DetailStatistics = ({ dataSource = data }) => {
  return (
    <Layout.HorizontalLayout options={{ repeat: { count: 4, value: "25%" } }}>
      {dataSource.map((item) => (
        <Statistic
          icon={
            <img
              className={styles.iconImg}
              src={icon[item.type]}
              alt={item.type}
            />
          }
          iconClassName={styles.icon}
          title={item.name}
          value={item.value}
          titleClassName={styles.title}
          valueClassName={styles.value}
          reverse
          infoGap={5}
          key={item.name}
          className={styles.item}
        />
      ))}
    </Layout.HorizontalLayout>
  );
};

export default DetailStatistics;
