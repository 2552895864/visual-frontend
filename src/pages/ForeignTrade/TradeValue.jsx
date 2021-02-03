import React from "react";
import { ModuleContainer, RadialBar, HorizontalBar } from "@/components";
import { TRADE_COLOR_LIST } from "@/constants";
import styles from "./TradeValue.module.less";

const data = {
  amountOfIncrease: [
    { term: "2020", count: 82, max: 100 },
    { term: "2019", count: 67, max: 100 },
    { term: "2018", count: 57, max: 100 },
  ],
};

const LegendItem = ({ value, name, index }) => {
  const color = TRADE_COLOR_LIST[index];
  return (
    <div className={styles.legendItem}>
      <div
        className={styles.icon}
        style={{
          border: `1px solid ${color}`,
        }}
      >
        <div
          className={styles.iconInner}
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <div className={styles.info}>
        <div className={styles.value}>{`${value}%`}</div>
        <div className={styles.name}>{`${name}年贸易货值涨幅`}</div>
      </div>
    </div>
  );
};

const TradeValue = ({ dataSource = data }) => {
  const { amountOfIncrease } = dataSource;
  const getRadialBarColor = amountOfIncrease.reduce((prev, cur, index) => {
    const color = TRADE_COLOR_LIST[index];
    prev[cur.term] = {
      backgroundColor: `${color}80`,
      foregroundColor: color,
    };
    return prev;
  }, {});

  const axisLabelStyle = {
    style: {
      fontSize: 14,
      fontWeight: 400,
      color: "#E0FCFF80",
      fontFamily: "Source Han Sans CN",
    },
  };

  const barValueLabelStyle = {
    style: {
      fontSize: 16,
      fontFamily: "Source Han Sans CN",
      fontWeight: 400,
      fill: "#FFFFFF",
    },
  };
  return (
    <ModuleContainer
      title="贸易货值详情"
      titleEn="Details of trade value"
      placement="right"
      className={styles.tradeValue}
    >
      <div className={styles.tradeValueLayout}>
        <div className={styles.top}>
          <RadialBar
            className={styles.radialBar}
            colors={getRadialBarColor}
            data={amountOfIncrease.concat().reverse()}
            lineWidth={12}
            padding={0}
            innerRadius={0.3}
            radius={1}
          />
          <div className={styles.legend}>
            {amountOfIncrease.map((item, index) => (
              <LegendItem value={item.count} name={item.term} index={index} />
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <HorizontalBar
            className={styles.horizontalBar}
            xAxisLabel={axisLabelStyle}
            yAxisLabel={axisLabelStyle}
            padding={[8, 8, 22, 45]}
            shape="smooth"
            lineColor="#00B4F7"
            valueLabelStyle={barValueLabelStyle}
          />
        </div>
      </div>
    </ModuleContainer>
  );
};

export default TradeValue;
