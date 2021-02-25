import React from "react";
import { PageContainer, Layout } from "@/components";
import Business from "./Business";
import Category from "./Category";
import CbecData from "./CbecData";
import Country from "./Country";
import TradeValue from "./TradeValue";
import MainStatistics from "./MainStatistics";
import DetailStatistics from "./DetailStatistics";
import Earth from "./Earth";
import styles from "./index.module.less";

const { HorizontalLayout, VerticalLayout } = Layout;
const ForeignTrade = () => {
  return (
    <PageContainer className={styles.cover} title="湖北外资外贸全景">
      <HorizontalLayout
        options={["28.5%", "39%", "28.5%"]}
        gap="2%"
        className={styles.foreignTrade}
      >
        <VerticalLayout options={["28.5%", "32%", "29.5%"]} gap="5%">
          <CbecData />
          <Country />
          <Business />
        </VerticalLayout>
        <VerticalLayout options={["71.5%", "11.5%", "15.5%"]}>
          <Earth />
          <MainStatistics />
          <DetailStatistics />
        </VerticalLayout>
        <VerticalLayout options={["66%", "28%"]} gap="6%">
          <TradeValue />
          <Category />
        </VerticalLayout>
      </HorizontalLayout>
    </PageContainer>
  );
};

export default ForeignTrade;
