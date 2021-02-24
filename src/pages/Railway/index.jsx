import React from "react";
import { PageContainer, Layout } from "@/components";
import Business from "./Business";
import Distribution from "./Distribution";
import Growth from "./Growth";
import RailwayBusiness from "./RailwayBusiness";
import RailwayBusinessExtra from "./RailwayBusinessExtra";
import Trend from "./Trend";
import styles from "./index.module.less";
const { VerticalLayout, HorizontalLayout } = Layout;
const Railway = () => {
  return (
    <PageContainer className={styles.railwayCover}>
      <HorizontalLayout
        options={["70.5%", "25.5%"]}
        gap="4%"
        className={styles.railway}
      >
        <VerticalLayout options={["58%", "34%"]} gap="8%">
          <HorizontalLayout options={["28%", "72%"]}>
            <RailwayBusiness />
            <RailwayBusinessExtra />
          </HorizontalLayout>
          <HorizontalLayout options={["40.5%", "54%"]} gap="5.5%">
            <Trend />
            <Business />
          </HorizontalLayout>
        </VerticalLayout>

        <VerticalLayout options={["41%", "54%"]} gap="5%">
          <Distribution />
          <Growth />
        </VerticalLayout>
      </HorizontalLayout>
    </PageContainer>
  );
};

export default Railway;
