import React, { useReducer } from "react";
import { useInterval } from "@/hooks";
import classnames from "classnames";
import Popover from "../Popover";
import styles from "./index.module.less";

const mockData = [
  {
    current: 0,
    quantity: 1231,
    percent: 35,
  },
  {
    current: 1,
    quantity: 1221,
    percent: 31,
  },
  {
    current: 2,
    quantity: 1283,
    percent: 35,
  },
  {
    current: 3,
    quantity: 1932,
    percent: 12,
  },
  {
    current: 4,
    quantity: 1231,
    percent: 66,
  },
];

function ProgressBar({ data = mockData }) {
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "move":
        if (state.direction === "right") {
          return {
            ...state,
            current: (state.current + 1) % 5,
            data: data[(state.current + 1) % 5],
          };
        } else {
          return {
            ...state,
            current: state.current - 1 < 0 ? 4 : state.current - 1,
            data: data[state.current - 1 < 0 ? 4 : state.current - 1],
          };
        }
      case "changeDirection":
        return {
          ...state,
          direction: payload,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    current: 0,
    direction: "right",
    data: data[0],
  });
  const linePointClass = classnames({
    [styles.line]: true,
    [styles[`line-point-position${state.current + 1}`]]: true,
  });
  useInterval(() => {
    if (state.current === 4) {
      dispatch({ type: "changeDirection", payload: "left" });
    } else if (state.current === 0) {
      dispatch({ type: "changeDirection", payload: "right" });
    }
    dispatch({ type: "move" });
  }, 6000);
  const labels = ["申报", "托运", "审单", "查验", "放行"];
  return (
    <div className={styles.container}>
      <div className={linePointClass}>
        {labels.map((label, index) => {
          const pointClass = classnames({
            [styles[`point${index + 1}`]]: true,
            [styles[`active${index + 1}`]]: index === state.current,
            [styles.active]: index === state.current,
          });
          return (
            <div className={pointClass} key={index}>
              <div className={styles.label}>{label}</div>
            </div>
          );
        })}
        <Popover
          {...state.data}
          positionClass={styles[`position${state.current + 1}`]}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
