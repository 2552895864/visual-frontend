import React, { useState, useRef } from "react";
import { ModuleContainer, PageContainer } from "@/components";
import { OverView } from "./modules";
// import intl from "react-intl-universal";
import classnames from "classnames";
import styles from "./index.module.less";

const MxGoods = () => {
  return (
    <>
      <PageContainer className={classnames({})}>
        <div className={styles.map}></div>
        <div className={styles.layout}>
          <div className={styles.left}>
            <ModuleContainer
              key="安全动态数据总览"
              title="安全动态数据总览"
              titleEn="Dynamic overview of security data"
              placement="left"
              className={styles.overview}
            >
              <OverView></OverView>
            </ModuleContainer>
          </div>
          <div className={styles.middle}></div>
          <div className={styles.right}></div>
        </div>
      </PageContainer>
    </>
  );
};

export default MxGoods;
