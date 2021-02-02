export const setArrayValueWithoutUndefined = (value, index, array) => {
  if (index - 1 >= 0 && array[index - 1] === undefined) {
    return setArrayValueWithoutUndefined(value, index - 1, array);
  } else {
    array[index] = value;
  }
};
