// 为指定位置的数组元素赋值，如果数组前一位置的值为undefined，将赋值前移
export const setArrayValueWithoutUndefined = (value, index, array) => {
  if (index - 1 >= 0 && array[index - 1] === undefined) {
    return setArrayValueWithoutUndefined(value, index - 1, array);
  } else {
    array[index] = value;
  }
};

// 多面积图数据转换-每个面积图Y轴对应数组元素的一个key，config配置面积图渐变色及字段别名
export const buildMultipleLines = (data, config) => {
  return Object.keys(config).map((key) => ({
    key,
    areaColor: config[key].areaColor,
    alias: config[key].alias,
    data: data.map((item) => ({ Date: item.Date, [key]: item[key] })),
  }));
};
