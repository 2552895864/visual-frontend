import React from "react";
import { ModuleContainer } from "@/components";
import styles from "./SingleWindow.module.less";

const { BorderContainer } = ModuleContainer;

const text =
  "按照联合国贸易便利化与电子业务中心（UN/CEFACT）建议书的解释，国际贸易“单一窗口”是指参与国际贸易和运输的各方，通过单一的平台提交标准化的信息和单证以满足相关法律法规及管理的要求。";

const SingleWindow = () => {
  return (
    <BorderContainer
      className={styles.singleWindow}
      title="单一窗口"
      headerMarginTop={31}
    >
      <div className={styles.singleWindowLayout}>
        <div className={styles.desc}>{text}</div>
        <div className={styles.img}></div>
      </div>
    </BorderContainer>
  );
};

export default SingleWindow;
