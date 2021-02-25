import React, { useEffect, useRef } from "react";
import { useInterval } from "@/hooks";
import pfood from "@/assets/global/pfood.png";
import food from "@/assets/global/food.png";
import luntai from "@/assets/global/luntai.png";
import priyongpin from "@/assets/global/priyongpin.png";
import riyongpin from "@/assets/global/riyongpin.png";
import shuma from "@/assets/global/shuma.png";
import styles from "./index.module.less";

const iconMap = {
  gold: {
    pfood: pfood,
    priyongpin: priyongpin,
    shuma: shuma,
    luntai: luntai,
  },
  blue: {
    pfood: food,
    priyongpin: riyongpin,
    shuma: shuma,
    luntai: luntai,
  },
};

function Table({ theme = "gold", duration = 5000, delay = 0 }) {
  const box1Ref = useRef();
  const box2Ref = useRef();

  function switchData(active, inActive) {
    if (!active.current || !inActive.current) {
      return false;
    }
    active.current.classList.add(styles["table-out"]);
    setTimeout(() => {
      if (!active.current || !inActive.current) {
        return false;
      }
      inActive.current.classList.add(styles["table-in"]);
      setTimeout(() => {
        if (!active.current || !inActive.current) {
          return false;
        }
        active.current.classList.remove(styles["table-out"]);
        inActive.current.classList.remove(styles["table-in"]);
      }, 1500);
    }, 1000);
  }
  useEffect(() => {
    let id = "";
    setTimeout(() => {
      switchData(box1Ref, box2Ref);
      id = setInterval(() => {
        switchData(box1Ref, box2Ref);
      }, duration);
    }, delay);
    return () => clearInterval(id);
  }, []);
  // useInterval(() => {
  //   switchData(box1Ref, box2Ref);
  // }, 5000);

  useEffect(() => {
    box1Ref.current.style.left = 0;
  });
  return (
    <div className={styles.tableContainer}>
      <table ref={box1Ref} className={styles.table}>
        <tbody>
          <tr style={{ marginLeft: -300 }}>
            <td>
              <img src={iconMap[theme].shuma} alt="shuma" />
            </td>
            <td>索尼A7R4 全画幅微单</td>
            <td>进口</td>
            <td>日本</td>
            <td>1,325,357</td>
          </tr>
          <tr>
            <td>
              <img src={iconMap[theme].priyongpin} alt="priyongpin" />
            </td>
            <td>欧乐B电动牙刷</td>
            <td>进口</td>
            <td>德国</td>
            <td>31,325,357</td>
          </tr>
          <tr>
            <td>
              <img src={iconMap[theme].luntai} alt="luntai" />
            </td>
            <td>福特Focus RS</td>
            <td>进口</td>
            <td>美国</td>
            <td>23,425,357</td>
          </tr>
          <tr>
            <td>
              <img src={iconMap[theme].pfood} alt="pfood" />
            </td>
            <td>海底捞火锅</td>
            <td>出口</td>
            <td>中本</td>
            <td>23,425,357</td>
          </tr>
        </tbody>
      </table>
      <table ref={box2Ref} style={{ left: 0 }} className={styles.table}>
        <tbody>
          <tr style={{ marginLeft: "-18.75rem" }}>
            <td>
              <img src={iconMap[theme].shuma} alt="shuma" />
            </td>
            <td>索尼A7R4 全画幅微单</td>
            <td>进口</td>
            <td>日本</td>
            <td>1,325,357</td>
          </tr>
          <tr>
            <td>
              <img src={iconMap[theme].priyongpin} alt="priyongpin" />
            </td>
            <td>欧乐B电动牙刷</td>
            <td>进口</td>
            <td>德国</td>
            <td>31,325,357</td>
          </tr>
          <tr>
            <td>
              <img src={iconMap[theme].luntai} alt="luntai" />
            </td>
            <td>福特Focus RS</td>
            <td>进口</td>
            <td>美国</td>
            <td>23,425,357</td>
          </tr>
          <tr>
            <td>
              <img src={iconMap[theme].pfood} alt="pfood" />
            </td>
            <td>海底捞火锅</td>
            <td>出口</td>
            <td>中本</td>
            <td>23,425,357</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
