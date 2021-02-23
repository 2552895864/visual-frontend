import React, { useState, useRef } from "react";
import { PageContainer } from "@/components";
// import intl from "react-intl-universal";
import classnames from "classnames";
import styles from "./index.module.less";

const MxGoods = () => {
  return (
    <>
      <PageContainer className={classnames({})}>
        <div className={styles.map}></div>
        <div className={styles.layout}></div>
      </PageContainer>
    </>
  );
};

export default MxGoods;
