const option = {
  tooltip: {
    show: false,
  },
  legend: {
    show: true,
    right: 0,
    top: "18%",
    orient: "vertical",
    icon: "circle",
    textStyle: {
      color: "#FEFEFE",
      fontSize: 13,
    },
  },
  series: [
    {
      z: 2,
      selectedMode: "single",
      name: "pie2",
      type: "pie",
      radius: ["65%", "80%"],
      center: ["40%", "55%"],
      left: "10%",
      label: {
        color: "#fff",
        fontSize: 22,
        formatter: (params) => `${params.percent.toFixed(1)}%`,
        position: "outer",
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
    {
      z: 1,
      selectedMode: "single",
      name: "pie1",
      type: "pie",
      left: "10%",
      radius: ["60%", "85%"],
      center: ["40%", "55%"],
      label: {
        show: false,
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
export default function getChartOption(mychart, data, animationDuration) {
  // const sum = data.reduce((acc, { value }) => {
  //   return acc + value;
  // }, 0);
  return {
    ...option,
    series: [
      {
        ...option.series[0],
        data,
        itemStyle: {
          color: (params) => {
            const colors = [
              [
                {
                  offset: 0,
                  color: "rgba(112, 231, 240, 1) ", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(24, 165, 196, 1)", // 100% 处的颜色
                },
              ],
              [
                {
                  offset: 0,
                  color: "rgba(119, 170, 238, 1)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(61, 106, 249, 1)", // 100% 处的颜色
                },
              ],
              [
                {
                  offset: 0,
                  color: "rgba(74, 251, 157, 1)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(0, 149, 184, 1)", // 100% 处的颜色
                },
              ],
            ];
            const names = data.map(({ name }) => name);
            const arr = names.reduce((acc, name, index) => {
              return {
                ...acc,
                [name]: colors[index],
              };
            }, {});
            return {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: arr[params.name],
            };
          },
        },
      },
      {
        ...option.series[1],
        data,
        itemStyle: {
          color: (params) => {
            const colors = [
              [
                {
                  offset: 0,
                  color: "rgba(112, 231, 240, 0.1) ", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(24, 165, 196, 0.1)", // 100% 处的颜色
                },
              ],
              [
                {
                  offset: 0,
                  color: "rgba(119, 170, 238, 0.1)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(61, 106, 249, 0.1)", // 100% 处的颜色
                },
              ],
              [
                {
                  offset: 0,
                  color: "rgba(74, 251, 157, 0.1)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(0, 149, 184, 0.1)", // 100% 处的颜色
                },
              ],
            ];

            const names = data.map(({ name }) => name);
            const arr = names.reduce((acc, name, index) => {
              return {
                ...acc,
                [name]: colors[index],
              };
            }, {});
            return {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: arr[params.name],
            };
          },
        },
      },
    ],
    // legend: {
    //   ...option.legend,
    //   formatter: function (name) {
    //     const labelName = data.find(({ name: itemName }) => itemName === name);
    //     const value = (labelName && labelName.value) || 0;
    //     const percent = Number((value / sum) * 100).toFixed(1);
    //     return `${name}  ${percent}%`;
    //   },
    // },
    animationDuration,
  };
}
