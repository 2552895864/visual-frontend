// 坐标轴相关配置
export const axisConfig = {
  x: {
    showTitle: false,
    title: "",
    range: [0, 0.99],
    color: "rgba(254,244,235,0.6)",
    labelStyle: {
      fontSize: 17.54,
      fontFamily: "SourceHanSansCN-Normal",
    },
  },
  y: {
    showTitle: false,
    title: "",
    range: [0, 0.763],
    color: "rgba(254,244,235,0.6)",
    labelStyle: {
      fontSize: 17.54,
      fontFamily: "SourceHanSansCN-Normal",
    },
  },
};

// 自定义Y轴title
export const extra = (charts) => {
  charts.annotation().text({
    content: "货值",
    position: ["start", "end"],
    top: true,
    offsetX: 16,
    offsetY: 14,
    style: {
      fontSize: 15,
      fontFamily: "SourceHanSansCN-Normal",
      fill: "#E0FCFF",
    },
  });
  return charts;
};

// 多个面积图的key不能相同，可配置每个key对应渐变色、别名
export const multiAreaConfig = {
  input: {
    areaColor: { source: "#36CFFF", target: "#072530" },
    alias: "进口",
  },
  output: {
    areaColor: { source: "#4979FF", target: "#072530" },
    alias: "出口",
  },
};
