import React from "react";
import {
  ModuleContainer,
  RadialBar,
  Statistic,
  GroupedBar,
} from "@/components";
import { TRADE_COLOR_LIST } from "@/constants";
import styles from "./TradeValue.module.less";

const data = {
  amountOfIncrease: [
    { term: "2020年贸易货值涨幅", count: 82, max: 100, showValue: "82%" },
    { term: "2019年贸易货值涨幅", count: 67, max: 100, showValue: "67%" },
    { term: "2018年贸易货值涨幅", count: 57, max: 100, showValue: "57%" },
  ],
  barData: [
    { date: "2020", value: 34000, type: "series1" },
    { date: "2019", value: 80005, type: "series1" },
    { date: "2018", value: 100003, type: "series1" },
    { date: "2020", value: 31000, type: "series2" },
    { date: "2019", value: 42005, type: "series2" },
    { date: "2018", value: 260003, type: "series2" },
  ],
};
const Icon = ({ index }) => {
  const color = TRADE_COLOR_LIST[index];
  return (
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
  );
};

const TradeValue = ({ dataSource = data }) => {
  const { amountOfIncrease, barData } = dataSource;
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

  return (
    <ModuleContainer
      title="贸易货值详情"
      titleEn="Details of trade value"
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
              <Statistic
                key={item.term}
                icon={<Icon index={index} />}
                title={item.term}
                value={item.showValue}
                infoGap={8}
                reverse
              />
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <GroupedBar
            data={barData}
            yAxisLabel={axisLabelStyle}
            xAxisLabel={axisLabelStyle}
            padding={[8, 8, 22, 45]}
            className={styles.groupedBar}
            size={16}
          />
        </div>
      </div>
    </ModuleContainer>
  );
};

export default TradeValue;
