import React, { useState } from "react";
import {
  ModuleContainer,
  RadialBar,
  Statistic,
  GroupedBar,
  Layout,
  Legend,
  Radio,
} from "@/components";
import { TRADE_COLOR_LIST } from "@/constants";
import styles from "./TradeValue.module.less";

const data = {
  value: {
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
  },
  count: {
    amountOfIncrease: [
      { term: "2020年贸易货值涨幅", count: 45, max: 100, showValue: "45%" },
      { term: "2019年贸易货值涨幅", count: 12, max: 100, showValue: "12%" },
      { term: "2018年贸易货值涨幅", count: 77, max: 100, showValue: "77%" },
    ],
    barData: [
      { date: "2020", value: 43000, type: "series1" },
      { date: "2019", value: 60005, type: "series1" },
      { date: "2018", value: 130003, type: "series1" },
      { date: "2020", value: 13000, type: "series2" },
      { date: "2019", value: 24005, type: "series2" },
      { date: "2018", value: 360003, type: "series2" },
    ],
  },
};

const { HorizontalLayout, VerticalLayout } = Layout;
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
  const [showData, setShowData] = useState(dataSource.value);
  const { amountOfIncrease = [], barData = [] } = showData;
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

  const getType = (value) => {
    setShowData(dataSource[value]);
  };

  return (
    <ModuleContainer
      title="贸易货值详情"
      titleEn="Details of trade value"
      className={styles.tradeValue}
      extra={
        <Radio
          options={[
            { label: "货值", value: "value" },
            { label: "单量", value: "count" },
          ]}
          getType={getType}
        />
      }
    >
      <VerticalLayout options={["56%", "44%"]}>
        <HorizontalLayout options={["60%", "40%"]}>
          <RadialBar
            className={styles.radialBar}
            colors={getRadialBarColor}
            data={amountOfIncrease.concat().reverse()}
            lineWidth={12}
            padding={0}
            innerRadius={0.3}
            radius={0.9}
          />
          <Layout.VerticalLayout
            options={{ repeat: { count: 2, value: "auto" } }}
            className={styles.radialBarLegend}
          >
            {amountOfIncrease.map((item, index) => (
              <Statistic
                className={styles.radialBarLegendItem}
                key={item.term}
                icon={<Icon index={index} />}
                title={item.term}
                value={item.showValue}
                infoGap={8}
                iconGap={9}
                reverse
              />
            ))}
          </Layout.VerticalLayout>
        </HorizontalLayout>
        <div className={styles.groupedBarLayout}>
          <Legend
            legend={["货值", "单量"]}
            className={styles.groupedBarLegend}
          />
          <GroupedBar
            data={barData}
            yAxisLabel={axisLabelStyle}
            xAxisLabel={axisLabelStyle}
            padding={[8, 8, 22, 45]}
            className={styles.groupedBar}
            size={16}
          />
        </div>
      </VerticalLayout>
    </ModuleContainer>
  );
};

export default TradeValue;
