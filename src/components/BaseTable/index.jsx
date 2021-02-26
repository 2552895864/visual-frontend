import React, { useEffect, useReducer } from "react";
import classNames from "classnames";
// import QueueAnim from "rc-queue-anim";
import { Interval } from "@/utils";
import getPadding from "../utils/getPadding";
import styles from "./index.module.less";

const useData = (dataSource, size, delay = 500) => {
  const pageSize =
    parseInt(dataSource.length / size) +
    (dataSource.length % size === 0 ? 0 : 1);
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "updatePage":
          return {
            ...state,
            currentPage:
              state.currentPage === pageSize ? 1 : state.currentPage + 1,
          };
        case "sendData":
          const start = (state.currentPage - 1) * size;
          const end = size * state.currentPage;
          return {
            ...state,
            data: dataSource.slice(start, end),
          };
        case "sendEmptyData":
          return {
            ...state,
            data: [],
          };
        default:
          throw state;
      }
    },
    { currentPage: 1, data: dataSource.slice(0, size) }
  );

  useEffect(() => {
    const timer = new Interval();
    timer.repeat(() => {
      dispatch({ type: "updatePage" });
    }, 5000);
    return () => {
      timer.clear();
    };
  }, []);

  // useEffect(() => {
  //   dispatch({ type: "sendEmptyData" });
  //   let timer = setTimeout(() => {
  //     dispatch({ type: "sendData" });
  //   }, delay);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [state.currentPage, delay]);
  // return state.data;
  const start = (state.currentPage - 1) * size;
  const end = size * state.currentPage;
  return dataSource.slice(start, end);
};

//FIXME:单元格省略
//FIXME:设置宽度
//FIXME:动画
/**
 *
 * @param {ColumnType[]} columns 表格列的配置 title, dataIndex, key, textAlign,render
 * @param {Object[]} dataSource 数据数组
 * @param {boolean} showHeader 是否显示表头
 * @param {string} headerClassName 表头类名
 * @param {Function} rowClassName 表格行的类名 function(record, index): string
 * @param {string} rowKey 表格行 key 的取值
 * @param {number} rowHeight 行高
 * @param {number} rowPadding 单元格padding
 * @param {string} className 表格类名
 * @param {CSSProperties} style 表格样式
 * @param {boolean} bordered 是否显示表格行边框
 * @param {number} delay 动画延时
 */
const Table = ({
  columns,
  dataSource,
  showHeader = true,
  headerClassName,
  rowClassName = () => {},
  rowKey,
  rowHeight,
  tdPadding,
  className,
  style,
  bordered = true,
  size,
  delay,
}) => {
  const defaultTextAlign = "left";
  const tableClass = classNames(styles.table, className);
  const headerClass = classNames(styles.tableHead, headerClassName, {
    [styles.tableHeadHidden]: !showHeader,
  });
  const showData = useData(dataSource, size, delay);
  return (
    <table className={tableClass} style={style}>
      <thead className={headerClass}>
        <tr>
          {columns.map((c) => (
            <th
              key={c.key}
              style={{
                textAlign: c.textAlign || defaultTextAlign,
                width: c.width,
              }}
            >
              {c.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {showData.map((record, index) => (
          <tr
            className={classNames(styles.tableRow, {
              [rowClassName(record, index)]: rowClassName,
            })}
            key={record[rowKey]}
            style={{ height: rowHeight, lineHeight: rowHeight }}
          >
            {columns.map((c, tdIndex) => (
              <td
                key={tdIndex}
                style={{
                  textAlign: c.textAlign || defaultTextAlign,
                  width: c.width,
                  padding: getPadding(tdPadding),
                }}
                className={classNames({
                  [styles.ellipsis]: c.ellipsis,
                  [styles.tdBorderBottom]: bordered,
                })}
              >
                {c.render
                  ? c.render(record[c.dataIndex], record)
                  : record[c.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
