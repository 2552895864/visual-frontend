import React, { useReducer } from "react";
import { AnnouncementTable } from "../index";
import classnames from "classnames";
import styles from "./index.module.less";

function Popup({ className }) {
  const options = [
    {
      title: "武汉新港",
      className: styles.newPort,
      tableName: "XingGang",
    },
    {
      title: "天河机场",
      className: styles.tianhe,
      tableName: "TianHe",
    },
    {
      title: "黄石新港",
      className: styles.huangshi,
      tableName: "HuangShi",
    },
    {
      title: "铁路口岸",
      className: styles.railway,
      tableName: "TieLu",
    },
    {
      title: "行政事业和政府性基金",
      className: styles.administration,
      tableName: "XingZheng",
    },
  ];
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "select":
        return {
          ...state,
          tableName: payload,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { tableName: "XingGang" });
  const containerClass = classnames({
    [styles.container]: true,
    [className]: className,
  });

  return (
    <div className={containerClass}>
      <div className={styles.border}></div>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <div className={styles.options}>
          {options.map(({ title, className, tableName }, index) => (
            <div
              className={styles.option}
              key={index}
              onClick={() => {
                dispatch({ type: "select", payload: tableName });
              }}
            >
              <div className={styles.title}>{title}</div>
              <div
                className={classnames(className, styles.image, {
                  [styles.active]: state.tableName === tableName,
                })}
              ></div>
            </div>
          ))}
        </div>
        <div className={styles.table}>
          <AnnouncementTable tableName={state.tableName}></AnnouncementTable>
        </div>
      </div>
    </div>
  );
}

export default Popup;
