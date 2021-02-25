import React, { useReducer, useEffect } from "react";
import {
  PageContainer,
  SquareGrid,
  Table,
  ModuleContainer,
} from "@/components";
import intl from "react-intl-universal";
import getChartOption from "./options/pie";
import { useInterval } from "@/hooks";
import { CumulativeValue, ProgressBar, LineChart, EchartPie } from "./modules";
import { SquareGridData, mockPie } from "./mock";
import styles from "./index.module.less";

const CebcPort = () => {
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "init":
        return {
          ...state,
          SquareGridData: SquareGridData,
        };
      case "update":
        return {
          ...state,
          SquareGridData: Object.keys(state.SquareGridData).reduce(
            (acc, key) => ({
              ...acc,
              [key]: state.SquareGridData[key] * 1.01,
            }),
            {}
          ),
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {});
  //CDM
  useEffect(() => {
    dispatch({ type: "init" });
  }, []);
  useInterval(() => {
    dispatch({ type: "update" });
  }, 6000);
  return (
    <PageContainer className={styles.container} title="跨境电商数据大盘">
      <div className={styles.layout}>
        <div className={styles.left}>
          <div className={styles.square}>
            <SquareGrid data={state.SquareGridData}></SquareGrid>
          </div>
          <ModuleContainer
            key="今日进口货物类型TOP10"
            title={intl.get("cbecPort.importTop10Title")}
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
            title={intl.get("cbecPort.exportTop10Title")}
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
            <div className={styles.label}>
              {intl.get("cbecPort.cumulativeQuantity")}
            </div>
            <div className={styles.value}>
              {Number(29432932).toLocaleString()}
            </div>
          </div>
          <div className={styles.title2}>
            <div className={styles.label}>
              {intl.get("cbecPort.cumulativePortValue")}
            </div>
            <CumulativeValue></CumulativeValue>
          </div>
          <div className={styles.bottom}>
            <ProgressBar></ProgressBar>
          </div>
        </div>
        <div className={styles.right}>
          <ModuleContainer
            key="口岸货值分布"
            title={intl.get("cbecPort.portCargoValue")}
            titleEn="Distribution of value at the port"
            placement="left"
            className={styles.distribution}
          >
            <EchartPie
              className={styles.pie}
              data={mockPie}
              getChartOption={getChartOption}
            ></EchartPie>
          </ModuleContainer>
          <ModuleContainer
            key="单量和货值变化趋势"
            title={intl.get("cbecPort.changeTrend")}
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
