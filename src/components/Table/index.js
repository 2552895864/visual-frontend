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

const mockData = [
  {
    name: "索尼A7R4 全画幅微单",
    type: "进口",
    country: "德国",
    value: 1325357,
    srcIndex: "shuma",
  },
  {
    name: "欧乐B电动牙刷",
    type: "进口",
    country: "日本",
    value: 31325357,
    srcIndex: "priyongpin",
  },
  {
    name: "福特Focus RS",
    type: "进口",
    country: "美国",
    value: 23425357,
    srcIndex: "luntai",
  },
  {
    name: "海底捞火锅",
    type: "出口",
    country: "中本",
    value: 23425357,
    srcIndex: "pfood",
  },
];

function Table({
  theme = "gold",
  data = mockData,
  duration = 5000,
  delay = 0,
}) {
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

  const getData = (theme) =>
    data.map((item) => ({ ...item, src: iconMap[theme][item.srcIndex] }));
  return (
    <div className={styles.tableContainer}>
      <table ref={box1Ref} className={styles.table}>
        <tbody>
          {getData(theme).map(({ src, name, type, country, value }, index) => (
            <tr style={index === 0 ? { marginLeft: -300 } : {}}>
              <td>
                <img src={src} alt="" />
              </td>
              <td>{name}</td>
              <td>{type}</td>
              <td>{country}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table ref={box2Ref} style={{ left: 0 }} className={styles.table}>
        <tbody>
          {getData(theme).map(({ src, name, type, country, value }, index) => (
            <tr style={index === 0 ? { marginLeft: "-18.75rem" } : {}}>
              <td>
                <img src={src} alt="" />
              </td>
              <td>{name}</td>
              <td>{type}</td>
              <td>{country}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
