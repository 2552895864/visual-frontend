import React from "react";
import { ModuleContainer, Statistic, Layout } from "@/components";
import icon from "./options/railwayIcon";
import styles from "./RailwayBusiness.module.less";
const { VerticalLayout } = Layout;
const data = [
  {
    icon: "classes",
    name: "进出境列次",
    value: 64,
    iconSize: { height: "32px" },
  },
  {
    icon: "line",
    name: "运行路线",
    value: 162,
    iconSize: { width: "34px" },
  },
  {
    icon: "ton",
    name: "进出货运吨数",
    value: 6667132,
    iconSize: { width: "39px", height: "38px" },
  },
  {
    icon: "duration",
    name: "平均中转时长（分钟）",
    value: 98.13,
    iconSize: { width: "44px", height: "32px" },
  },
  {
    icon: "person",
    name: "累计服务人次",
    value: 12377,
    iconSize: { width: "42px" },
  },
];
export const infoGap = 10;
const RailwayBusiness = ({ dataSource = data }) => {
  return (
    <ModuleContainer
      className={styles.railwayBusiness}
      title="铁路运输业务情况"
      titleEn="Railway transport business"
    >
      <VerticalLayout
        options={{ repeat: { count: dataSource.length, value: "auto" } }}
        gap={50}
        className={styles.layout}
      >
        {dataSource.map((i) => (
          <Statistic
            iconClassName={styles.icon}
            icon={<img src={icon[i.icon]} alt="icon" style={i.iconSize} />}
            key={i.name}
            title={i.name}
            titleClassName={styles.name}
            value={i.value}
            valueClassName={styles.value}
            infoGap={10}
          />
        ))}
      </VerticalLayout>
    </ModuleContainer>
  );
};

export default RailwayBusiness;
