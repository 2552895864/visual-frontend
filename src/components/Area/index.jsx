import { Chart } from "@antv/g2";
import { useEffect } from "react";
import classnames from "classnames";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import styles from "./index.module.less";

const defaultData = [
  { Date: "2021-01-01", value: 120 },
  { Date: "2021-02-02", value: 150 },
  { Date: "2021-03-03", value: 250 },
  { Date: "2021-04-04", value: 500 },
  { Date: "2021-05-05", value: 620 },
  { Date: "2021-06-06", value: 500 },
];

const initChart = (
  {
    data = defaultData,
    key = "业务量",
    axisColor = "#20424C",
    lineColor = "#55FAFE",
    padding = [8, 8, 48, 64],
    shape = 'line',
    yAxisLabel = null,
    xAxisLabel = null,
  },
  id
) => {
  const chart = new Chart({
    container: id,
    autoFit: true,
    padding,
  });

  chart.scale("Date", {
    range: [0, 0.99], // 右侧留白
    type: "cat",
    formatter: (date) => moment(date).format("M月"),
  });

  chart.scale({
    range: {
      range: [0, 0.95],
      min: 0,
      nice: true,
      sync: true,
    },
    value: {
      range: [0, 0.95],
      min: 0,
      nice: true,
      sync: true,
      alias: key,
    },
  });

  chart.tooltip({
    showCrosshairs: true,
    shared: true,
  });

  // view1
  const view1 = chart.createView({
    padding,
  });
  view1.data(data);
  view1.tooltip(false);
  view1.axis(false);
  view1
    .area()
    .position("Date*value")
    .color(`l(90) 0:${lineColor} 1:${axisColor}`)
    .style({
      fillOpacity: 0.1,
    })
    .shape(shape);

  // view2
  const view2 = chart.createView({
    padding,
  });

  view2.data(data);
  view2.axis("value", {
    tickLine: {
      style: {
        stroke: "transparent",
      },
      alignTick: true,
    },
    line: {
      style: { stroke: axisColor, lineWidth: 3 },
    },
    grid: null,
    label: yAxisLabel || {
      offset: 18,
      style: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Microsoft YaHei",
      },
    },
  });
  view2.axis("Date", {
    line: {
      style: { stroke: axisColor, lineWidth: 3 },
    },
    tickLine: null,
    label: xAxisLabel || {
      offset: 25,
      style: {
        fontSize: 20,
        fontWeight: "bold",
      },
    },
  });
  view2.line().color(lineColor).position("Date*value").shape(shape);
  view2.point().position("Date*value").color(lineColor).shape("circle");

  chart.removeInteraction("legend-filter"); // 关闭图例过滤交互

  chart.render();
  return chart;
};

/**
 *
 * @param {String} props.className 容器的 className ，默认 width: 1000px;height: 350px;
 * @param {Array} props.data 图表数据，Array Item 参考： { Date: "2021-01-01", value: 120 }
 * @param {String} props.key tooltip 显示的值的名称，默认值：'业务量'
 * @param {String} props.axisColor 坐标轴颜色，默认值：'#20424C'
 * @param {String} props.lineColor 折线颜色，默认值：'#55FAFE'
 * @param {Array} props.padding 容器padding，顺序为：上、右、下、左，默认值：[8, 8, 48, 64]
 * @param {Object} props.yAxisLabel y轴Label配置项
 * @param {Object} props.xAxisLabel x轴Label配置项
 * @param {String} props.shape 线图支持的图形：line,dot,smooth, 默认line
 */

function Area(props) {
  const containerClass = classnames({
    [styles.container]: true,
    [props.className]: props.className,
  });
  const containerId = uuidv4();
  // CDM
  useEffect(() => {
    const chart = initChart(props, containerId);
    return () => {
      chart.destroy();
    };
  });
  return <div id={containerId} className={containerClass}></div>;
}

export default Area;
