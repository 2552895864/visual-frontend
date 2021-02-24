import React from "react";
import { v4 as uuidv4 } from "uuid";
import get from "lodash/get";
import classNames from "classnames";
import styles from "./index.module.less";

const getRepeatConfig = (options) => {
  const config = [["100%"], 1];
  const isRepeat = get(options, "repeat", null) || null;
  if (isRepeat) {
    const count = get(options, "repeat.count", 1);
    let value = get(options, "repeat.value", "100px");
    if (Array.isArray(value)) {
      value = value.join(" ");
    }
    config[0] = `repeat(${count}, ${value})`;
    config[1] = count;
  } else {
    if (Array.isArray(options) && options.length) {
      config[0] = options.join(" ");
      config[1] = options.join(" ").length;
    }
  }
  return config;
};

const BaseContainer = ({ className, style, options, children }) => {
  return (
    <div className={classNames(styles.pageLayout, className)} style={style}>
      {children
        ? children
        : options.map((i) => (
            <div key={uuidv4()} className={styles.defaultBlock}></div>
          ))}
    </div>
  );
};

/**
 * 垂直方向布局
 * @param {*} options 子元素宽度数组 ['76%','12%']或['1920px','1080px']  或者 设置 repeat 重复，{ count: 1, width: "auto" },count重复的个数，width索要重复的值
 * @param {*} gap 子元素间隔
 * @param {*} className 容器类名
 * @param {*}
 * @param {*} children
 */
const VerticalLayout = ({ children, options, gap, className }) => {
  const [currentOptions, length] = getRepeatConfig(options);
  const verticalStyle = {
    gridTemplateRows: currentOptions,
    gridRowGap: gap,
  };
  return (
    <BaseContainer
      options={[...new Array(length).keys()]}
      style={verticalStyle}
      className={className}
    >
      {children}
    </BaseContainer>
  );
};

/**
 * 水平方向布局
 * @param {*} options 子元素宽度数组 ['76%','12%']或['1920px','1080px']或者auto
 * @param {*} gap 子元素间隔
 * @param {*} className 容器类名
 * @param {*} children
 */
const HorizontalLayout = ({ children, options, gap, className }) => {
  const [currentOptions, length] = getRepeatConfig(options);
  const horizontalStyle = {
    gridTemplateColumns: currentOptions,
    gridColumnGap: gap,
  };
  return (
    <BaseContainer
      options={[...new Array(length).keys()]}
      style={horizontalStyle}
      className={className}
    >
      {children}
    </BaseContainer>
  );
};

const NormalLayout = ({
  children,
  columnsOptions,
  rowsOptions,
  columnsGap,
  rowsGap,
  className,
}) => {
  const [currentColumnsOptions, columnsLength] = getRepeatConfig(
    columnsOptions
  );
  const [currentRowsOptions, rowsLength] = getRepeatConfig(rowsOptions);
  const style = {
    gridTemplateRows: currentRowsOptions,
    gridTemplateColumns: currentColumnsOptions,
    gridColumnGap: columnsGap,
    gridRowGap: rowsGap,
  };
  return (
    <BaseContainer
      options={[...new Array(columnsLength * rowsLength).keys()]}
      style={style}
      className={className}
    >
      {children}
    </BaseContainer>
  );
};
const Layout = {
  VerticalLayout,
  HorizontalLayout,
  NormalLayout,
};
export default Layout;
