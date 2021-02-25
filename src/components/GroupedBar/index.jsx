import { useEffect } from "react";
import { Chart } from "@antv/g2";
import classnames from "classnames";
import { v4 as uuidv4 } from "uuid";
import styles from "./index.module.less";

const defaultData = [
  { date: "第一周", value: 34000, type: "series1" },
  { date: "第二周", value: 80005, type: "series1" },
  { date: "第三周", value: 100003, type: "series1" },
  { date: "第一周", value: 31000, type: "series2" },
  { date: "第二周", value: 42005, type: "series2" },
  { date: "第三周", value: 260003, type: "series2" },
];

const initChart = (
  {
    data = defaultData,
    axisColor = "#A0A5A9",
    padding = [8, 128, 94, 96],
    yAxisLabel = null,
    xAxisLabel = null,
    size = 16,
    marginRatio = 0,
  },
  id
) => {
  const chart = new Chart({
    container: id,
    autoFit: true,
    padding,
  });
  chart.data(data);
  chart.scale({
    value: {
      range: [0, 0.95],
      nice: true,
      formatter: (value) =>
        value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,"),
    },
    date: {},
  });
  chart.axis("date", {
    title: null,
    tickLine: {
      alignTick: true,
      style: {
        stroke: "transparent",
      },
    },
    line: {
      style: {
        lineWidth: 3,
        stroke: axisColor,
      },
    },
    label: yAxisLabel || {
      offset: 20,
      style: {
        fontSize: 20,
        fontFamily: "Microsoft YaHei",
        fontWeight: "bold",
        fill: axisColor,
      },
    },
  });

  chart.axis("value", {
    grid: null,
    title: null,
    tickLine: {
      alignTick: true,
      style: {
        stroke: "transparent",
      },
    },
    line: {
      style: {
        lineWidth: 3,
        stroke: axisColor,
      },
    },
    label: xAxisLabel || {
      offset: 20,
      style: {
        fontSize: 20,
        fontFamily: "Microsoft YaHei",
        fontWeight: "bold",
        fill: axisColor,
      },
    },
  });
  chart.coordinate().transpose();
  chart
    .interval()
    .position("date*value")
    .size(size)
    .style({ radius: [20, 20, 0, 0] })
    .color("type", ["l(0) 0:#84AAFF 1:#4979FF", "l(0) 0:#9BEBFF 1:#00B4F7"])
    .label("value", {
      style: {
        fill: "#FFFFFF",
      },
      offset: 10,
    })
    .adjust([
      {
        type: "dodge",
        marginRatio,
      },
    ]);
  chart.legend(false);
  chart.interaction("element-active");
  chart.render();

  return chart;
};

/**
 * @param {String} props.className 容器的 className ，默认 width: 1000px;height: 300px;
 * @param {Array} props.data 图表数据，Array Item 参考： { date: "2018-01-01", value: 34000 }
 * @param {String} props.axisColor 坐标轴颜色，默认值：'#20424C'
 * @param {Array} props.barColors 柱子颜色，分别为[奇数柱子颜色,偶数柱子颜色]，默认值：["#69E9FC", "#2555EB"]
 * @param {Array} props.padding 容器padding，顺序为：上、右、下、左，默认值：[8, 8, 48, 64]
 * @param {Object} props.yAxisLabel y轴Label配置项
 * @param {Object} props.xAxisLabel x轴Label配置项
 * @param {Number} props.size 柱子宽度
 */
function GroupedBar(props) {
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

export default GroupedBar;
