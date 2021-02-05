import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ModuleContainer } from "@/components";
import plan1 from "@/assets/intro/plan1.png";
import plan2 from "@/assets/intro/plan2.png";
import plan3 from "@/assets/intro/plan3.png";
import styles from "./Plan.module.less";

const { BorderContainer } = ModuleContainer;

const text = [
  "推动制定并公开作业时限标准，规范和优化通关作业各环节流程",
  "数据分析辅助资源优化配置，港口协同提高运输效率",
];
const img = [plan1, plan2, plan3];

const Plan = () => {
  return (
    <BorderContainer className={styles.plan} title="我省印发方案">
      <div className={styles.planLayout}>
        <div className={styles.images}>
          {img.map((m) => (
            <img key={uuidv4()} src={m} alt="pic" />
          ))}
        </div>
        <div className={styles.desc}>
          {text.map((t) => (
            <div key={uuidv4()}>{t}</div>
          ))}
        </div>
      </div>
    </BorderContainer>
  );
};

export default Plan;
