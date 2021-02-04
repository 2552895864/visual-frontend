import React, { useEffect, useReducer } from "react";
import classnames from "classnames";
import intl from "react-intl-universal";
import { Interval } from "@/utils";
import { CBEC_PROVINCE_EXPORT, CBEC_PROVINCE_IMPORT } from "@/constants";
import styles from "./RankRadio.module.less";

const RankRadio = ({ getType = () => {} }) => {
  const STATUS = [
    { label: intl.get("cbecProvince.import"), flag: true },
    { label: intl.get("cbecProvince.export"), flag: false },
  ];
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "updateState":
          return { ...state, isImport: !state.isImport };
        default:
          throw state;
      }
    },
    { isImport: true }
  );
  const handleClickState = () => {
    dispatch({ type: "updateState" });
  };

  useEffect(() => {
    getType(state.isImport ? CBEC_PROVINCE_IMPORT : CBEC_PROVINCE_EXPORT);
  }, [getType, state.isImport]);

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
            [styles.selectedItem]: state.isImport === s.flag,
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
