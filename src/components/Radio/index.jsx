import React, { useEffect, useReducer } from "react";
import classnames from "classnames";
import { Interval } from "@/utils";
import styles from "./index.module.less";

const RankRadio = ({ getType = () => {}, options }) => {
  const STATUS = [
    { label: options[0].label, flag: true },
    { label: options[1].label, flag: false },
  ];
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "updateState":
          return { ...state, isLeft: !state.isLeft };
        default:
          throw state;
      }
    },
    { isLeft: true }
  );
  const handleClickState = () => {
    dispatch({ type: "updateState" });
  };

  useEffect(() => {
    getType(state.isLeft ? options[0].value : options[1].value);
  }, [getType, options, state.isLeft]);

  useEffect(() => {
    const timer = new Interval();
    timer.repeat(() => {
      handleClickState();
    }, 10000);
    return () => {
      timer.clear();
    };
  }, []);
  return (
    <div className={styles.rankRadio}>
      {STATUS.map((s) => (
        <div
          key={s.flag.toString()}
          className={classnames(styles.item, {
            [styles.selectedItem]: state.isLeft === s.flag,
          })}
          onClick={handleClickState}
        >
          {s.label}
        </div>
      ))}
    </div>
  );
};

export default RankRadio;
