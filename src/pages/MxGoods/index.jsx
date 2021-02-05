import React from "react";
// import intl from "react-intl-universal";
import { PageContainer, ModuleContainer, Area, Table } from "@/components";
import { buildMultipleLines } from "@/utils/utils";
import {
  GoodsTable,
  Scan,
  Overview,
  BreathingLights,
  Statistic,
} from "./modules";
import { axisConfig, extra, multiAreaConfig } from "./options/area";
import mockAreaData from "./mock/area";
import styles from "./index.module.less";

const MxGoods = () => {
  return (
    <PageContainer>
      <div className={styles.map}></div>
      <div className={styles.layout}>
        <div className={styles.left}>
          <div className={styles.statistic}>
            <Statistic></Statistic>
          </div>
          <ModuleContainer
            key="月度进出口货运量变化趋势"
            title="月度进出口货运量变化趋势"
            titleEn="Change trend of monthly import and export freight volume"
            placement="left"
            className={styles.changeTrend}
          >
            <Area
              className={styles.area}
              padding={[30, 8, 30, 35]}
              shape={{ line: "smooth", area: "smooth" }}
              axis={axisConfig}
              extra={extra}
              multipleLines={buildMultipleLines(mockAreaData, multiAreaConfig)}
            ></Area>
          </ModuleContainer>
          <ModuleContainer
            key="货物进出口热门路线"
            title="货物进出口热门路线"
            titleEn="Popular routes for import and export of goods"
            placement="left"
            className={styles.popularRoutes}
          >
            <div className={styles.goodsTable}>
              <GoodsTable></GoodsTable>
            </div>
          </ModuleContainer>
          <ModuleContainer
            key="扫码获取"
            title="扫码获取"
            titleEn="Scan code acquisition"
            placement="left"
            className={styles.scanCode}
          >
            <div className={styles.scan}>
              <Scan></Scan>
            </div>
          </ModuleContainer>
        </div>
        <div className={styles.middle}>
          <div className={styles.overview}>
            <Overview></Overview>
          </div>
        </div>
        <div className={styles.right}>
          <ModuleContainer
            key="货物进口热度排名"
            title="货物进口热度排名"
            titleEn="Ranking of import heat of goods"
            placement="right"
            className={styles.rankingImport}
          >
            <div className={styles.table}>
              <Table theme="blue"></Table>
            </div>
          </ModuleContainer>
          <ModuleContainer
            key="货物出口热度排名"
            title="货物出口热度排名"
            titleEn="Ranking of export heat of goods"
            placement="right"
            className={styles.rankingExport}
          >
            <div className={styles.table}>
              <Table theme="blue"></Table>
            </div>
            <div className={styles.breathingLights}>
              <BreathingLights></BreathingLights>
            </div>
          </ModuleContainer>
        </div>
      </div>
    </PageContainer>
  );
};

export default MxGoods;
