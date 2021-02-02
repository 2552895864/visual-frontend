import React from "react";
import { CircleFlag } from "react-circle-flags";
import { ModuleContainer } from "@/components";
import styles from "./Country.module.less";

const data = [
  { countryName: "阿根廷", countryNameAbbr: "ag", value: "23,442,324" },
  { countryName: "巴西", countryNameAbbr: "br", value: "43,126,859" },
  { countryName: "德国", countryNameAbbr: "ge", value: "13,126,754" },
  { countryName: "希腊", countryNameAbbr: "gr", value: "31,126,595" },
  { countryName: "意大利", countryNameAbbr: "it", value: "9,126,185" },
];

const CountryItem = ({ abbr, name, value }) => {
  return (
    <div className={styles.countryItem}>
      <div className={styles.countryIcon}>
        <CircleFlag
          countryCode={abbr}
          height="33"
          className={styles.countryIconContent}
        />
      </div>
      <div className={styles.countryName}>{name}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

const Country = ({ dataSource = data }) => {
  return (
    <ModuleContainer
      title="热门贸易国家"
      titleEn="Popular trading country"
      className={styles.country}
    >
      <div className={styles.countryLayout}>
        {dataSource.map((item) => (
          <CountryItem
            key={item.countryName}
            abbr={item.countryNameAbbr}
            name={item.countryName}
            value={item.value}
          />
        ))}
      </div>
    </ModuleContainer>
  );
};

export default Country;
