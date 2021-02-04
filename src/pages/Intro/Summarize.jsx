import React from "react";
import { ModuleContainer } from "@/components";
import styles from "./Summarize.module.less";

const { BorderContainer } = ModuleContainer;

const Text = [
  {
    title: "愿景",
    content: "建设平安、效能、智慧、法治和绿色五型口岸",
  },
  {
    title: "使命",
    content: "高效的为进出口企业和监管部门提供可持续的高质量服务",
  },
  {
    title: "价值观",
    content: "坚持强化信息透明化、管理扁平化、集约高效化",
  },
];

const Summarize = () => {
  return (
    <BorderContainer className={styles.summarize}>
      <div className={styles.summarizeLayout}>
        {Text.map((item) => (
          <div className={styles.summarizeItem}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.content}>{item.content}</div>
          </div>
        ))}
      </div>
    </BorderContainer>
  );
};

export default Summarize;
