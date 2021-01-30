import React, { useEffect, useRef, useState } from "react";
import { ModuleContainer } from "@/components";
import styles from "./Category.module.less";

let index = 0;
const Category = () => {
  const box1Ref = useRef();
  const box2Ref = useRef();
  const [initial, setInitial] = useState(false);

  function switchData(active, inActive) {
    if (!active.current || !inActive.current) {
      return false;
    }

    active.current.classList.add(styles.tableOut);
    setTimeout(() => {
      if (!active.current || !inActive.current) {
        return false;
      }
      inActive.current.classList.add(styles.tableIn);
      setTimeout(() => {
        if (!active.current || !inActive.current) {
          return false;
        }
        active.current.classList.remove(styles.tableOut);
        inActive.current.classList.remove(styles.tableIn);
      }, 1500);
    }, 1000);
  }

  useEffect(() => {
    box1Ref.current.style.left = 0;
    // box1Ref.current.classList.add('table-out');
    let interval;
    if (!initial) {
      interval = setInterval(() => {
        switchData(box1Ref, box2Ref);
        // if (activeTable ){
        //   switchData(box1Ref, box2Ref);
        // }else{
        //   switchData(box2Ref, box1Ref);
        // }
      }, 5000);
      setInitial(true);
    }
    return function cleanUp() {
      if (index !== 0) {
        clearInterval(interval);
      }
      index++;
    };
  }, [initial]);

  return (
    <ModuleContainer
      className={styles.tableContainer}
      title="进出口热销货物"
      titleEn="Import and export hot category"
    >
      <table ref={box1Ref} className={styles.table}>
        <tbody>
          <tr style={{ marginLeft: -300 }}>
            {/* <td><img src={shuma} /></td> */}
            <td>索尼A7R4 全画幅微单</td>
            <td>进口</td>
            <td>日本</td>
            <td>1,325,357</td>
          </tr>
          <tr>
            {/* <td><img src={priyongpin}/></td> */}
            <td>欧乐B电动牙刷</td>
            <td>进口</td>
            <td>德国</td>
            <td>31,325,357</td>
          </tr>
          <tr>
            {/* <td><img src={luntai}/></td> */}
            <td>福特Focus RS</td>
            <td>进口</td>
            <td>美国</td>
            <td>23,425,357</td>
          </tr>
          <tr>
            {/* <td><img src={pfood}/></td> */}
            <td>海底捞火锅</td>
            <td>出口</td>
            <td>中本</td>
            <td>23,425,357</td>
          </tr>
          <tr>
            {/* <td><img src={shuma}/></td> */}
            <td>索尼A7R4 全画幅微单</td>
            <td>进口</td>
            <td>日本</td>
            <td>1,325,357</td>
          </tr>
          {/* <tr>
            <td><img src={priyongpin}/></td>
            <td>欧乐B电动牙刷</td>
            <td>进口</td>
            <td>德国</td>
            <td>31,325,357</td>
          </tr> */}
        </tbody>
      </table>
      <table ref={box2Ref} style={{ left: 0 }} className={styles.table}>
        <tbody>
          <tr style={{ marginLeft: "-18.75rem" }}>
            {/* <td><img src={shuma} /></td> */}
            <td>索尼A7R4 全画幅微单</td>
            <td>进口</td>
            <td>日本</td>
            <td>1,325,357</td>
          </tr>
          <tr>
            {/* <td><img src={priyongpin}/></td> */}
            <td>欧乐B电动牙刷</td>
            <td>进口</td>
            <td>德国</td>
            <td>31,325,357</td>
          </tr>
          <tr>
            {/* <td><img src={luntai}/></td> */}
            <td>福特Focus RS</td>
            <td>进口</td>
            <td>美国</td>
            <td>23,425,357</td>
          </tr>
          <tr>
            {/* <td><img src={pfood}/></td> */}
            <td>海底捞火锅</td>
            <td>出口</td>
            <td>中本</td>
            <td>23,425,357</td>
          </tr>
          <tr>
            {/* <td><img src={shuma}/></td> */}
            <td>索尼A7R4 全画幅微单</td>
            <td>进口</td>
            <td>日本</td>
            <td>1,325,357</td>
          </tr>
          {/* <tr>
            <td><img src={priyongpin}/></td>
            <td>欧乐B电动牙刷</td>
            <td>进口</td>
            <td>德国</td>
            <td>31,325,357</td>
          </tr> */}
        </tbody>
      </table>
    </ModuleContainer>
    // <div className={styles.tableContainer}>

    // </div>
  );
};

export default Category;
