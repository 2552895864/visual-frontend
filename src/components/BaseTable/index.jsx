import React from "react";
import classNames from "classnames";
import getPadding from "../utils/getPadding";
import styles from "./index.module.less";

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
}) => {
  const defaultTextAlign = "left";
  const tableClass = classNames(styles.table, className);
  const headerClass = classNames(styles.tableHead, headerClassName, {
    [styles.tableHeadHidden]: !showHeader,
  });
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
        {dataSource.map((record, index) => (
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
