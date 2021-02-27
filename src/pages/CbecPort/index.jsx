import React, { useReducer, useEffect, useRef } from "react";
import {
  PageContainer,
  SquareGrid,
  Table,
  ModuleContainer,
} from "@/components";
import GridLayout from "react-grid-layout";
import { useCheckoutAnimate } from "@/hooks";
import intl from "react-intl-universal";
import getChartOption from "./options/pie";
// import { useInterval } from "@/hooks";
import { CumulativeValue, ProgressBar, LineChart, EchartPie } from "./modules";
import {
  SquareGridData,
  mockPie,
  mockTable1,
  mockTable2,
  mockLine,
} from "./mock";
import PubSub from "pubsub-js";
import { screen, pubsubKey } from "@/config";
import styles from "./index.module.less";

const { screenWidth, screenHeight } = screen;

const layout = [
  // 左边
  {
    i: "l1",
    x: 0,
    y: 0,
    w: 7,
    h: 3,
  },
  {
    i: "l2",
    x: 0,
    y: 3,
    w: 7,
    h: 3.5,
  },
  {
    i: "l3",
    x: 0,
    y: 6,
    w: 7,
    h: 4,
  },
  //中间
  {
    i: "m1",
    x: 7,
    y: 0,
    w: 9,
    h: 3,
  },
  {
    i: "m2",
    x: 7,
    y: 4,
    w: 9,
    h: 3,
  },
  {
    i: "m3",
    x: 7,
    y: 8,
    w: 9,
    h: 6,
  },
  // 右边
  {
    i: "r1",
    x: 16,
    y: 0,
    w: 7,
    h: 5.2,
  },
  {
    i: "r2",
    x: 16,
    y: 6,
    w: 7,
    h: 5,
  },
];

const CebcPort = () => {
  const l1Ref = useRef();
  const l2Ref = useRef();
  const l3Ref = useRef();
  const r1Ref = useRef();
  const r2Ref = useRef();
  const containerPadding = [46, 54, 0, 54];
  const rowCount = 12;
  const rowHeight =
    (screenHeight - containerPadding[0] - containerPadding[2]) / rowCount;
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "update":
        return {
          ...state,
          SquareGridData: SquareGridData[payload],
          pieData: mockPie,
          table1Data: mockTable1[payload],
          table2Data: mockTable2[payload],
          lineData: mockLine[payload],
        };
      default:
        return state;
    }
  };
  useCheckoutAnimate(
    [
      { refs: [l1Ref, l2Ref, l3Ref], options: { x: "-500px", stagger: 0.5 } },
      {
        refs: [r1Ref, r2Ref],
        options: { x: `${screenWidth + 500}px`, stagger: 0.5 },
      },
    ],
    {
      opacity: 0,
      duration: 2,
    },
    pubsubKey.leaveAnimateKey
  );
  const [state, dispatch] = useReducer(reducer, {
    SquareGridData: SquareGridData["武邮快件"],
    pieData: mockPie,
    table1Data: mockTable1["武邮快件"],
    table2Data: mockTable2["武邮快件"],
    lineData: mockLine["武邮快件"],
  });

  //CDM
  useEffect(() => {
    const pubSub_token = PubSub.subscribe(
      pubsubKey.portChange,
      function (t, m) {
        dispatch({ type: "update", payload: m });
      }
    );
    return () => {
      PubSub.unsubscribe(pubSub_token);
    };
  }, []);
  // useInterval(() => {
  //   dispatch({ type: "update" });
  // }, 6000);
  return (
    <PageContainer className={styles.container} title="跨境电商数据大盘">
      <GridLayout
        className={`layout ${styles.layout}`}
        layout={layout}
        cols={24}
        rowHeight={rowHeight}
        width={screenWidth}
        margin={[0, 0]}
        containerPadding={[0, 54]}
        isDraggable={false}
        isResizable={false}
      >
        <div key="l1" ref={l1Ref} className={styles.square}>
          <SquareGrid data={state.SquareGridData}></SquareGrid>
        </div>
        <div key="l2" ref={l2Ref}>
          <ModuleContainer
            key="今日进口货物类型TOP10"
            title={intl.get("cbecPort.importTop10Title")}
            titleEn="The top 10 types of imports today"
            placement="left"
            className={styles.importTop10}
          >
            <div className={styles.list}>
              <Table
                duration={10000}
                delay={3000}
                data={state.table1Data}
              ></Table>
            </div>
          </ModuleContainer>
        </div>
        <div key="l3" ref={l3Ref}>
          <ModuleContainer
            key="今日出口货物类型TOP10"
            title={intl.get("cbecPort.exportTop10Title")}
            titleEn="The top 10 types of exports today"
            placement="left"
            className={styles.exportTop10}
          >
            <div className={styles.list}>
              <Table
                duration={10000}
                delay={5500}
                data={state.table2Data}
              ></Table>
            </div>
          </ModuleContainer>
        </div>
        <div key="m1">
          <div className={styles.title1}>
            <div className={styles.label}>
              {intl.get("cbecPort.cumulativeQuantity")}
            </div>
            <div className={styles.value}>
              {Number(29432932).toLocaleString()}
            </div>
          </div>
        </div>
        <div key="m2">
          <div className={styles.title2}>
            <div className={styles.label}>
              {intl.get("cbecPort.cumulativePortValue")}
            </div>
            <CumulativeValue></CumulativeValue>
          </div>
        </div>
        <div key="m3">
          <div className={styles.bottom}>
            <ProgressBar></ProgressBar>
          </div>
        </div>
        <div key="r1" ref={r1Ref}>
          <ModuleContainer
            key="口岸货值分布"
            title={intl.get("cbecPort.portCargoValue")}
            titleEn="Distribution of value at the port"
            placement="left"
            className={styles.distribution}
          >
            <EchartPie
              className={styles.pie}
              data={state.pieData}
              getChartOption={getChartOption}
              duration={10000}
              initDuration={0}
            ></EchartPie>
          </ModuleContainer>
        </div>
        <div key="r2" ref={r2Ref}>
          <ModuleContainer
            key="单量和货值变化趋势"
            title={intl.get("cbecPort.changeTrend")}
            titleEn="Trends in volume and value"
            placement="left"
            className={styles.trends}
          >
            <LineChart
              className={styles.line}
              data={state.lineData}
            ></LineChart>
          </ModuleContainer>
        </div>
      </GridLayout>
    </PageContainer>
  );
};

export default CebcPort;
