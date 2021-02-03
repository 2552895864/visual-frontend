import React from "react";
// import intl from "react-intl-universal";
import {
  PageContainer,
  SquareGrid,
  Table,
  ModuleContainer,
} from "@/components";
import { CumulativeValue, ProgressBar, LineChart, EchartPie } from "./modules";
import styles from "./index.module.less";

const CebcPort = () => {
  return (
    <PageContainer className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.left}>
          <div className={styles.square}>
            <SquareGrid></SquareGrid>
          </div>
          <ModuleContainer
            key="今日进口货物类型TOP10"
            title="今日进口货物类型TOP10"
            titleEn="The top 10 types of imports today"
            placement="left"
            className={styles.importTop10}
          >
            <div className={styles.list}>
              <Table></Table>
            </div>
          </ModuleContainer>
          <ModuleContainer
            key="今日出口货物类型TOP10"
            title="今日出口货物类型TOP10"
            titleEn="The top 10 types of exports today"
            placement="left"
            className={styles.exportTop10}
          >
            <div className={styles.list}>
              <Table></Table>
            </div>
          </ModuleContainer>
        </div>
        <div className={styles.middle}>
          <div className={styles.title1}>
            <div className={styles.label}>口岸累计单量</div>
            <div className={styles.value}>
              {Number(29432932).toLocaleString()}
            </div>
          </div>
          <div className={styles.title2}>
            <div className={styles.label}>口岸累计货值</div>
            <CumulativeValue></CumulativeValue>
          </div>
          <div className={styles.bottom}>
            <ProgressBar></ProgressBar>
          </div>
        </div>
        <div className={styles.right}>
          <ModuleContainer
            key="口岸货值分布"
            title="口岸货值分布"
            titleEn="Distribution of value at the port"
            placement="left"
            className={styles.distribution}
          >
            <EchartPie className={styles.pie}></EchartPie>
          </ModuleContainer>
          <ModuleContainer
            key="单量和货值变化趋势"
            title="单量和货值变化趋势"
            titleEn="Trends in volume and value"
            placement="left"
            className={styles.trends}
          >
            <LineChart className={styles.line}></LineChart>
          </ModuleContainer>
        </div>
      </div>
    </PageContainer>
  );
};

export default CebcPort;
