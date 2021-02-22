import React, { useEffect } from "react";
import { Chart } from "@antv/g2";
import classnames from "classnames";
import { v4 as uuidv4 } from "uuid";
import styles from "./index.module.less";

const defaultData = [{ name: "男性", value: 0.564, showValue: "56.4%" }];

const initChart = (
  {
    data = defaultData,
    color = "#0a9afe",
    padding = 8,
    innerRadius = 0.8,
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
  chart.legend(false);
  chart.tooltip({
    showMarkers: false,
  });
  chart.facet("rect", {
    fields: ["name"],
    padding,
    showTitle: false,
    eachView: (view, facet) => {
      const data = facet.data;
      data.push({ name: "", value: 1 - data[0].value });
      view.data(data);
      view.coordinate("theta", {
        innerRadius,
        radius,
      });
      view
        .interval()
        .adjust("stack")
        .position("value")
        .color("name", [color, `${color}4D`])
        .style({
          opacity: 1,
          lineCap: "round",
        });
      view.annotation().text({
        position: ["50%", "40%"],
        content: data[0].showValue,
        style: {
          fontSize: 20,
          fill: color,
          textAlign: "center",
          fontFamily: "Source Han Sans CN",
          fontWeight: 400,
        },
        offsetY: 10,
      });
      view.interaction("element-active");
    },
  });
  chart.render();

  return chart;
};

/**
 *
 * @param {String} props.className 容器的 className ，默认 width: 400px;height: 400px;
 * @param {Array} props.data 图表数据，Array Item 参考： { name: "test3", value: 100 }
 * @param {Object} props.color 指定圆环颜色，十六进制颜色代码
 * @param {Array|Number} props.padding 容器padding，顺序为：上、右、下、左，默认值：8
 * @param {Number} props.innerRadius 内径 innerRadius 默认{0.3}
 * @param {Number} props.radius 外径 radius 默认{1}
 */
function RingProcess(props) {
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

export default RingProcess;
