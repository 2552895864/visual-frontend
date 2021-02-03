import React from "react";
// import intl from "react-intl-universal";
import { PageContainer } from "@/components";
import Business from "./Business";
import Category from "./Category";
import CbecData from "./CbecData";
import Country from "./Country";
import TradeValue from "./TradeValue";
import MainStatistics from "./MainStatistics";
import DetailStatistics from "./DetailStatistics";
import Earth from "./Earth";
import styles from "./index.module.less";

const ForeignTrade = () => {
  return (
    <PageContainer>
      <div className={styles.foreignTrade}>
        <div className={styles.left}>
          <CbecData />
          <Country />
          <Business />
        </div>
        <div className={styles.middle}>
          <MainStatistics />
          <Earth />
          <DetailStatistics />
        </div>
        <div className={styles.right}>
          <TradeValue />
          <Category />
        </div>
      </div>
    </PageContainer>
  );
};

export default ForeignTrade;
