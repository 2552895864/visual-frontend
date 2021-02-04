import React from "react";
import { ModuleContainer } from "@/components";
import buildImg from "@/assets/intro/buildImg.png";
import styles from "./WindowBuild.module.less";

const { BorderContainer } = ModuleContainer;
const text =
  "《国家 “十三五”规划纲要(2016-2020年)》提出全面实施“单一窗口”和通关一体化";
const WindowBuild = () => {
  return (
    <BorderContainer className={styles.windowBuild} title="全面建设“单一窗口”">
      <div className={styles.windowBuildLayout}>
        <img src={buildImg} alt="pic" />
        <div className={styles.desc}>{text}</div>
      </div>
    </BorderContainer>
  );
};

export default WindowBuild;
