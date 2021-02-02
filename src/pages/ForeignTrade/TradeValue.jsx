import React from "react";
import { ModuleContainer } from "@/components";
import styles from "./TradeValue.module.less";

const TradeValue = () => {
  return (
    <ModuleContainer
      title="贸易货值详情"
      titleEn="Details of trade value"
      placement="right"
      className={styles.tradeValue}
    ></ModuleContainer>
  );
};

export default TradeValue;
