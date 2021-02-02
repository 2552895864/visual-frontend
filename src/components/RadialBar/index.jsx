import React, { useEffect } from "react";
import { Chart } from "@antv/g2";
import classnames from "classnames";
import { v4 as uuidv4 } from "uuid";
import styles from "./index.module.less";

const defaultData = [
  { term: "test3", count: 9, max: 100 },
  { term: "test2", count: 8, max: 100 },
  { term: "test1", count: 8, max: 100 },
];

const defaultColors = {
  test1: {
    backgroundColor: "rgba(104,233,252,.5)",
    foregroundColor: "rgb(104,233,252)",
  },
  test2: {
    backgroundColor: "rgba(37,85,235,.5)",
    foregroundColor: "rgb(37,85,235)",
  },
  test3: {
    backgroundColor: "rgba(238,168,74,.5)",
    foregroundColor: "rgb(238,168,74)",
  },
};

const initChart = (
  {
    data = defaultData,
    colors = defaultColors,
    lineWidth = 10,
    padding = 8,
    innerRadius = 0.3,
    radius = 1,
  },
  id
) => {
  const chart = new Chart({
    container: id,
    autoFit: true,
    padding,
  });

  chart.data(data);

  chart.coordinate("theta", {
    innerRadius,
    radius,
  });

  chart.axis("term", {
    tickLine: null,
    grid: null,
    line: null,
  });

  chart.legend(false);

  chart.scale({
    max: {
      min: 0,
      max: 100,
    },
    count: {
      min: 0,
      max: 100,
    },
  });

  chart.scale("term", {
    formatter: () => "",
  });

  chart
    .interval()
    .position("term*max")
    .shape("line")
    .color("term", (term) => {
      return colors[term].backgroundColor;
    })
    .style({
      lineWidth,
      lineCap: "round",
    }); // 线状柱状图

  chart
    .interval()
    .position("term*count")
    .shape("line")
    .color("term", (term) => {
      return colors[term].foregroundColor;
    })
    .style({
      lineWidth,
      lineCap: "round",
    }); // 线状柱状图

  chart.render();
  return chart;
};

/**
 * 
 * @param {String} props.className 容器的 className ，默认 width: 400px;height: 400px;
 * @param {Array} props.data 图表数据，Array Item 参考： { term: "test3", count: 9, max: 100 }
 * @param {Object} props.colors 指定 Array Item 对应颜色，参考：
 * @param {Array|Number} props.padding 容器padding，顺序为：上、右、下、左，默认值：8
 * @param {Number} props.innerRadius 内径 innerRadius 默认{0.3}
 * @param {Number} props.radius 外径 radius 默认{1}
 * {
    test1: {
      backgroundColor: "rgba(104,233,252,.5)",
      foregroundColor: "rgb(104,233,252)",
    }
  };
 * @param {Number} props.lineWidth 描述线段宽度的数字。 0、 负数、 Infinity 和 NaN 会被忽略。参考：https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineWidth
 */
function RadialBar(props) {
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

export default RadialBar;
