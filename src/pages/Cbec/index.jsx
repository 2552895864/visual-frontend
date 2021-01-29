import React from "react";
import { PageContainer } from "@/components";
import StatisticsOverview from "./StatisticsOverview";
import Trend from "./Trend";
import GoodsType from "./GoodsType";
import StatisticsDetail from "./StatisticsDetail";
import Rank from "./Rank";
import Category from "./Category";
import styles from "./index.module.less";

const Cbec = () => {
  return (
    <PageContainer className={styles.coverPageContainer}>
      <div className={styles.cbecLayout}>
        <div className={styles.left}>
          <StatisticsOverview />
          <Trend />
          <div className={styles.leftBottom}>
            <GoodsType />
            <Category />
          </div>
        </div>
        <div className={styles.right}>
          <StatisticsDetail />
          <Rank />
        </div>
      </div>
    </PageContainer>
  );
};

export default Cbec;
