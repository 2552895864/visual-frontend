import React from "react";
import { PageContainer, Layout } from "@/components";
import StatisticsOverview from "./StatisticsOverview";
import Trend from "./Trend";
import GoodsType from "./GoodsType";
import StatisticsDetail from "./StatisticsDetail";
import Rank from "./Rank";
import Category from "./Category";
import MapDot from "./MapDot";
import styles from "./index.module.less";

const { VerticalLayout, HorizontalLayout } = Layout;
const Cbec = () => {
  return (
    <PageContainer
      className={styles.coverPageContainer}
      title="跨境电商数据大盘"
      hsl={false}
    >
      <HorizontalLayout
        options={["46.5%", "50%"]}
        className={styles.cbecLayout}
      >
        <VerticalLayout options={["22%", "32%", "38%"]}>
          <StatisticsOverview />
          <Trend />
          <HorizontalLayout
            options={["43%", "50%"]}
            className={styles.leftBottom}
          >
            <GoodsType />
            <Category />
          </HorizontalLayout>
        </VerticalLayout>
        <VerticalLayout options={["22%", "63%", "13%"]}>
          <StatisticsDetail />
          <MapDot />
          <Rank />
        </VerticalLayout>
      </HorizontalLayout>
    </PageContainer>
  );
};

export default Cbec;
