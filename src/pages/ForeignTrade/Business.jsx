import React from "react";
import { ModuleContainer } from "@/components";
import styles from "./Business.module.less";

const Business = () => {
  return (
    <ModuleContainer
      title="累积业务量"
      titleEn="Cumulative business volume"
      className={styles.business}
    ></ModuleContainer>
  );
};

export default Business;
