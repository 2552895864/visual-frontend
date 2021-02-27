import React, { useState, useRef } from "react";
// import intl from "react-intl-universal";
import classnames from "classnames";
import { PageContainer, ModuleContainer, Area, Table } from "@/components";
import { buildMultipleLines, isInDiv, nextTick } from "@/utils/utils";
import GridLayout from "react-grid-layout";
import { useCheckoutAnimate } from "@/hooks";
import {
  GoodsTable,
  Scan,
  Overview,
  BreathingLights,
  Statistic,
  Popup,
  FlashingPoint,
} from "./modules";
import { axisConfig, extra, multiAreaConfig } from "./options/area";
import { screen, pubsubKey } from "@/config";
import getPoints from "./options/getPoints";
import mockAreaData from "./mock/area";
import styles from "./index.module.less";

const { screenWidth, screenHeight } = screen;

const layout = [
  // 左边
  {
    i: "l1",
    x: 0,
    y: 0,
    w: 7,
    h: 1.3,
  },
  {
    i: "l2",
    x: 0,
    y: 2,
    w: 7,
    h: 3.7,
  },
  {
    i: "l3",
    x: 0,
    y: 5,
    w: 7,
    h: 2.9,
  },
  {
    i: "l4",
    x: 0,
    y: 8,
    w: 7,
    h: 2,
  },
  //中间
  {
    i: "m1",
    x: 7,
    y: 0,
    w: 10,
    h: 8,
  },
  {
    i: "m2",
    x: 7,
    y: 9,
    w: 10,
    h: 4,
  },
  // 右边
  {
    i: "r1",
    x: 17,
    y: 0,
    w: 6.8,
    h: 3.8,
  },
  {
    i: "r2",
    x: 17,
    y: 6,
    w: 6.8,
    h: 3.8,
  },
  {
    i: "r3",
    x: 17,
    y: 10,
    w: 6.8,
    h: 3.5,
  },
];

const MxGoods = () => {
  const popupRef = useRef();
  const [popupVisibility, setPopupVisibility] = useState(false);

  const l1Ref = useRef();
  const l2Ref = useRef();
  const l3Ref = useRef();
  const l4Ref = useRef();
  const r1Ref = useRef();
  const r2Ref = useRef();
  const r3Ref = useRef();
  const containerPadding = [0, 43, 0, 43];
  const rowCount = 12;
  const rowHeight =
    (screenHeight - containerPadding[0] - containerPadding[2]) / rowCount;
  useCheckoutAnimate(
    [
      {
        refs: [l1Ref, l2Ref, l3Ref, l4Ref],
        options: { x: "-500px", stagger: 0.5 },
      },
      {
        refs: [r1Ref, r2Ref, r3Ref],
        options: { x: `${screenWidth + 500}px`, stagger: 0.5 },
      },
    ],
    {
      opacity: 0,
      duration: 2,
    },
    pubsubKey.leaveAnimateKey
  );
  const handleOpenPopup = () => {
    setPopupVisibility(true);
    nextTick(() => {
      const closePopup = (e) => {
        if (!isInDiv(e, popupRef.current)) {
          setPopupVisibility(false);
          window.removeEventListener("click", closePopup);
        }
      };
      window.addEventListener("click", closePopup);
    });
  };
  return (
    <>
      <PageContainer
        className={classnames({
          [styles.container]: true,
          [styles.blur]: popupVisibility,
        })}
        title="进出口大数据监测"
      >
        <GridLayout
          className={`layout ${styles.layout}`}
          layout={layout}
          cols={24}
          rowHeight={rowHeight}
          width={screenWidth}
          margin={[0, 0]}
          containerPadding={[43, 0]}
          isDraggable={false}
          isResizable={false}
        >
          <div className={styles.statistic} key="l1" ref={l1Ref}>
            <Statistic></Statistic>
          </div>
          <div key="l2" ref={l2Ref}>
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
                multipleLines={buildMultipleLines(
                  mockAreaData,
                  multiAreaConfig
                )}
              ></Area>
            </ModuleContainer>
          </div>
          <div key="l3" ref={l3Ref}>
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
          </div>
          <div key="l4" ref={l4Ref}>
            <ModuleContainer
              key="扫码获取"
              title="扫码获取"
              titleEn="Scan code acquisition"
              placement="left"
              className={styles.scanCode}
            >
              <div className={styles.scan}>
                <Scan onOpenPopup={handleOpenPopup}></Scan>
              </div>
            </ModuleContainer>
          </div>
          <div className={styles.mapPoint} key="m1">
            <div className={styles.map}>
              {getPoints().map((props, index) => (
                <FlashingPoint
                  key={index}
                  className={styles.points}
                  {...props}
                ></FlashingPoint>
              ))}
            </div>
          </div>

          <div className={styles.overview} key="m2">
            <Overview></Overview>
          </div>
          <div key="r1" ref={r1Ref}>
            <ModuleContainer
              key="货物进口热度排名"
              title="货物进口热度排名"
              titleEn="Ranking of import heat of goods"
              // placement="right"
              className={styles.rankingImport}
            >
              <div className={styles.table}>
                <Table
                  theme="blue"
                  rowHeight={60}
                  duration={10000}
                  delay={3000}
                ></Table>
              </div>
            </ModuleContainer>
          </div>

          <div key="r2" ref={r2Ref}>
            <ModuleContainer
              key="货物出口热度排名"
              title="货物出口热度排名"
              titleEn="Ranking of export heat of goods"
              // placement="right"
              className={styles.rankingExport}
            >
              <div className={styles.table}>
                <Table
                  theme="blue"
                  rowHeight={60}
                  duration={10000}
                  delay={5500}
                ></Table>
              </div>
            </ModuleContainer>
          </div>
          <div key="r3" ref={r3Ref}>
            <div className={styles.lightWrapper}>
              <div className={styles.breathingLights}>
                <BreathingLights></BreathingLights>
              </div>
            </div>
          </div>
        </GridLayout>
        {/* 弹出层 */}
      </PageContainer>
      <div
        className={classnames({
          [styles.popup]: true,
          [styles.hidden]: !popupVisibility,
        })}
        ref={popupRef}
      >
        <Popup></Popup>
      </div>
    </>
  );
};

export default MxGoods;
