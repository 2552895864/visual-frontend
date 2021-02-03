import React from "react";
import styles from "./DetailStatistics.module.less";

import car from "@/assets/foreignTrade/car.png";
import person from "@/assets/foreignTrade/person.png";
import cabinRate from "@/assets/foreignTrade/cabinRate.png";
import goodsRate from "@/assets/foreignTrade/goodsRate.png";

const data = [
  { name: "日通关车次", value: "112", type: "car" },
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

const DetailStatisticsItem = ({ value, name, type }) => {
  return (
    <div className={styles.detailStatisticsItem}>
      <img className={styles.icon} src={icon[type]} alt={type} />
      <div className={styles.info}>
        <div className={styles.value}>{value}</div>
        <div className={styles.name}>{name}</div>
      </div>
    </div>
  );
};

const DetailStatistics = ({ dataSource = data }) => {
  return (
    <div className={styles.detailStatistics}>
      {dataSource.map((item, index) => (
        <DetailStatisticsItem
          key={item.name}
          value={item.value}
          name={item.name}
          isLast={index === dataSource.length - 1}
          type={item.type}
        />
      ))}
    </div>
  );
};

export default DetailStatistics;
