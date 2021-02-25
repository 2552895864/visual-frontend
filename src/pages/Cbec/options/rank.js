import echarts from "echarts";
const option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: 68,
    top: 8,
    right: 0,
    bottom: 25,
  },
  xAxis: {
    type: "category",
    axisLabel: {
      fontSize: 18,
      fontFamily: "Source Han Sans CN",
      fontWeight: 400,
      color: "#FFFFFF99",
      lineHeight: 18,
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    type: "value",
    name: "货值",
    // min:15000,
    // max:40000,
    // interval:5000,
    // interval: 100000,
    axisLabel: {
      fontSize: 18,
      fontFamily: "Source Han Sans CN",
      fontWeight: 400,
      color: "#FFFFFF99",
      lineHeight: 18,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      lineStyle: {
        type: "dashed",
        color: "rgba(255,255,255,0.2)",
      },
    },
  },
  series: [
    {
      type: "bar",
      barWidth: 22.5,
      itemStyle: {
        color: "#f1cb34",
        normal: {
          barBorderRadius: [4, 4, 0, 0],
          color: function (params) {
            // var colorList = ['#2ba8eb','#f1cb34'];
            if (params.dataIndex % 2 === 0) {
              return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(155, 235, 255, 1)" },
                { offset: 1, color: "rgba(0, 180, 247, 1)" },
              ]);
            } else {
              return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(132, 170, 255, 1)" },
                { offset: 1, color: "rgba(73, 121, 255, 1)" },
              ]);
            }
          },
        },
      },
      animationDelay: function (idx) {
        return idx * 100 + 4500;
      },
    },
    {
      name: "进口",
      type: "line",
      smooth: true,
      symbol: "none",
      sampling: "average",
      itemStyle: {
        normal: {
          lineStyle: {
            width: 1,
            color: "#4CE1FF"
          },
        },
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 1,
            color: "#4CE1FF1A",
          },
          {
            offset: 0,
            color: "#4CE1FF40",
          },
        ]),
      },
      animationDelay: 3500,
    },
  ],
  animationEasing: "elasticOut",
};

export default function getChartsOption({ xCoordinate, barData, lineData }) {
  return {
    ...option,
    xAxis: {
      ...option.xAxis,
      data: xCoordinate,
    },
    series: [
      {
        ...option.series[0],
        data: barData,
      },
      {
        ...option.series[1],
        data: lineData,
      },
    ],
  };
}
