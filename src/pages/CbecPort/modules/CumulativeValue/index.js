import React, { useState, useRef, useEffect } from "react";
import { setArrayValueWithoutUndefined } from "@/utils/utils";
import { useInterval } from "@/hooks";
import FlipperCard from "../FlipperCard";
import styles from "./index.module.less";

function CumulativeValue({ value = 27663528 }) {
  const [val, setVal] = useState(value);
  const ref = useRef([]);
  const refs = ref.current;
  useEffect(() => {
    const valueStrs = `${value}`.split("");
    refs.forEach((item, index) => item.setFront(valueStrs[index]));
  }, [value, refs]);
  const tick = () => {
    const newVal = val + Math.round(Math.random() * 10000);
    const FrontStrs = `${val}`.split("");
    const BackStrs = `${newVal}`.split("");
    refs.forEach((item, index) => {
      if (FrontStrs[index] !== BackStrs[index]) {
        item.flipDown(FrontStrs[index], BackStrs[index]);
      }
    });
    setVal(newVal);
  };
  useInterval(tick, 1000);
  return (
    <div className={styles.value}>
      <div className={styles.content}>
        {val
          .toLocaleString()
          .split("")
          .map((item, index) => {
            if (item === ",")
              return (
                <em className={styles.numberCard} key={index}>
                  {item}
                </em>
              );
            return (
              <FlipperCard
                ref={(element) => {
                  if (!refs[index]) {
                    setArrayValueWithoutUndefined(element, index, refs);
                  }
                }}
                key={index}
              ></FlipperCard>
            );
          })}
      </div>
    </div>
  );
}

export default CumulativeValue;
