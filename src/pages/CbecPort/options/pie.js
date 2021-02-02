const option = {
  tooltip: {
    show: false,
  },
  legend: {
    show: false,
  },
  series: [
    {
      name: "",
      type: "pie",
      radius: ["40%", "70%"],
      center: ["50%", "50%"],
      itemStyle: {
        color: (params) => {
          const arr = {
            邮局海关: "#f1cb34",
            武邮快件: "#476df4",
            东湖综保: "#2ba8eb",
          };
          return arr[params.name];
        },
      },
      labelLine: {
        length: 40,
        length2: 80,
        lineStyle: { color: "#fff" },
      },
      label: {
        color: "#fff",
        fontSize: 18,
        align: "left",
        lineHeight: 30,
        alignTo: "labelLine",
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
    {
      name: "pie",
      type: "pie",
      radius: ["40%", "70%"],
      center: ["50%", "50%"],
      itemStyle: {
        color: (params) => {
          const arr = {
            邮局海关: "#f1cb34",
            武邮快件: "#476df4",
            东湖综保: "#2ba8eb",
          };
          return arr[params.name];
        },
      },
      label: {
        color: "#fff",
        fontSize: 22,
        formatter: (params) => `${params.percent.toFixed(0)}%`,
        position: "inner",
        align: "center",
        lineHeight: 30,
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};
export default function getChartOption(data, animationDuration) {
  return {
    ...option,
    series: [
      {
        ...option.series[0],
        data,
      },
      {
        ...option.series[1],
        data,
      },
    ],
    animationDuration,
  };
}
