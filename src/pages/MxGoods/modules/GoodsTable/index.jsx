import React from "react";
import classnames from "classnames";
import styles from "./index.module.less";

const mockData = [
  {
    key: 0,
    type: "进口",
    sourceCountry: "韩国",
    destinationCountry: "中国",
    goodsSource: "韩国",
    count: Number(42516).toLocaleString(),
    cycle: "12",
  },
  {
    key: 1,
    type: "进口",
    sourceCountry: "日本",
    destinationCountry: "中国",
    goodsSource: "新西兰",
    count: Number(156230).toLocaleString(),
    cycle: "12",
  },
  {
    key: 2,
    type: "出口",
    sourceCountry: "新西兰",
    destinationCountry: "中国",
    goodsSource: "日本",
    count: Number(15200).toLocaleString(),
    cycle: "10",
  },
];

const mockColumns = [
  {
    dataIndex: "type",
    title: "类型",
    width: 45,
  },
  {
    dataIndex: "sourceCountry",
    title: "企运国",
    width: 65,
  },
  {
    dataIndex: "destinationCountry",
    title: "目的国",
    width: 62,
  },
  {
    dataIndex: "goodsSource",
    title: "货源地",
    width: 65,
  },
  {
    dataIndex: "count",
    title: "数量",
    width: 75,
  },
  {
    dataIndex: "cycle",
    title: "周期",
    width: 45,
  },
];

const getStyle = (columns, key) => {
  const column = columns.find(({ dataIndex }) => dataIndex === key);
  if (column) {
    return {
      width: column.width || 100,
    };
  }
  return {
    display: "none",
  };
};

function GoodsTable({ data = mockData, columns = mockColumns, className }) {
  const containerClass = classnames({
    [styles.container]: true,
    [className]: className,
  });
  return (
    <div className={containerClass}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map(({ dataIndex, title, width }) => (
              <th key={dataIndex} className={styles.th}>
                <span className={styles.headerColumn}>
                  <div style={{ width }}>{title}</div>
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.key}>
              {Object.keys(item).map((key) => (
                <td
                  key={key}
                  className={styles.td}
                  style={getStyle(columns, key)}
                >
                  {item[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GoodsTable;
