const getPoints = () => {
  const points = [
    {
      offsetX: 74.37656356887405,
      offsetY: -56.162390634481994,
      radius: 12.58682085556102,
      index: 1,
    },
    {
      offsetX: -11.479051444651247,
      offsetY: -8.331868664757252,
      radius: 9.427964507252835,
      index: 2,
    },
    {
      offsetX: -69.99618195982809,
      offsetY: -144.77247185541154,
      radius: 6.448105779841555,
      index: 1,
    },
    {
      offsetX: 28.852103932614483,
      offsetY: -94.0823162794915,
      radius: 13.831264038384338,
      index: 2,
    },
    {
      offsetX: 8.178003661689047,
      offsetY: -107.80501902609353,
      radius: 11.340881452081362,
      index: 1,
    },
    {
      offsetX: 19.856368480457803,
      offsetY: -38.350309659383186,
      radius: 7.271268567601887,
      index: 3,
    },
    {
      offsetX: -74.33670502167294,
      offsetY: 3.1016904891262698,
      radius: 13.21375848708544,
      index: 3,
    },
    {
      offsetX: 84.5639489727632,
      offsetY: -102.36745510767912,
      radius: 7.604297302283111,
      index: 3,
    },
    {
      offsetX: 1.3561297176872387,
      offsetY: -47.137442250122504,
      radius: 7.5778122246676265,
      index: 2,
    },
    {
      offsetX: 75.01043928655042,
      offsetY: -72.61606082571994,
      radius: 13.44765951031093,
      index: 3,
    },
    {
      offsetX: 55.01043928655042,
      offsetY: -32.61606082571994,
      radius: 8.44765951031093,
      index: 4,
    },
    {
      offsetX: 35.01043928655042,
      offsetY: -77.61606082571994,
      radius: 7.44765951031093,
      index: 4,
    },
    {
      offsetX: 22.01043928655042,
      offsetY: -32.61606082571994,
      radius: 8.44765951031093,
      index: 4,
    },
  ];
  // 使用下面的代码生成随机点
  // const points = new Array(10).fill({}).map((item) => {
  //   const xRange = [-80, 100];
  //   const yRange = [-150, 30];
  //   return {
  //     offsetX: Math.random() * (xRange[1] - xRange[0]) + xRange[0],
  //     offsetY: Math.random() * (yRange[1] - yRange[0]) + yRange[0],
  //     radius: Math.random() * 10 + 5,
  //   };
  // });
  // console.log(JSON.stringify(points));
  // return Object.keys(points).map((index) => points[index]);
  return points;
};

export default getPoints;
