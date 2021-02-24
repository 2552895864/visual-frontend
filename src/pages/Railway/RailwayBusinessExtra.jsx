import React from "react";
import { Statistic, Layout } from "@/components";
import { infoGap } from "./RailwayBusiness";
import styles from "./RailwayBusiness.module.less";
import extraStyles from "./RailwayBusinessExtra.module.less";
const { VerticalLayout, HorizontalLayout } = Layout;
const data = [
  { name: "运输货值", value: "32,845,475" },
  { name: "运输列次", value: "32,234" },
  { name: "最短全线运输周期", value: "14天" },
  { name: "最大日牵引量", value: "545,534,326箱" },
  { name: "最快运输速度", value: "2342公里/日" },
];
const RailwayBusinessExtra = ({ dataSource = data }) => {
  const groupOne = dataSource.slice(0, 2);
  const groupTwo = dataSource.slice(2, 3)[0];
  const groupThree = dataSource.slice(3);
  return (
    <div className={extraStyles.railwayBusinessExtra}>
      <VerticalLayout
        options={{ repeat: { count: 2, value: "auto" } }}
        gap="36%"
      >
        <VerticalLayout
          options={{ repeat: { count: 2, value: "auto" } }}
          gap="28px"
        >
          {groupOne.map((i) => (
            <Statistic
              key={i.name}
              title={i.name}
              titleClassName={styles.name}
              value={i.value}
              valueClassName={styles.value}
              infoGap={infoGap}
            />
          ))}
        </VerticalLayout>

        <VerticalLayout
          options={{ repeat: { count: 2, value: "auto" } }}
          gap="30px"
        >
          <Statistic
            title={groupTwo.name}
            titleClassName={styles.name}
            value={groupTwo.value}
            valueClassName={styles.value}
            infoGap={infoGap}
          />
          <HorizontalLayout
            options={{ repeat: { count: 2, value: "auto" } }}
            gap="33px"
            className={extraStyles.bottom}
          >
            {groupThree.map((i) => (
              <Statistic
                key={i.name}
                title={i.name}
                titleClassName={styles.name}
                value={i.value}
                valueClassName={styles.value}
                infoGap={infoGap}
              />
            ))}
          </HorizontalLayout>
        </VerticalLayout>
      </VerticalLayout>
    </div>
  );
};

export default RailwayBusinessExtra;
