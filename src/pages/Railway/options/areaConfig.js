// 坐标轴相关配置
export const axisConfig = {
  x: {
    showTitle: false,
    title: "",
    range: [0, 0.99],
    color: "rgba(254,244,235,0.6)",
    labelOffset: 24,
    labelStyle: {
      fontSize: 17.54,
      fontFamily: "SourceHanSansCN-Normal",
    },
    lineWidth: 1,
  },
  y: {
    showTitle: false,
    title: "",
    range: [0.1, 0.83],
    color: "rgba(254,244,235,0.6)",
    labelOffset: 14,
    labelStyle: {
      fontSize: 17.54,
      fontFamily: "SourceHanSansCN-Normal",
    },
    lineWidth: 1,
  },
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
