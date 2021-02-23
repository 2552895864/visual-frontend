import React, { useState, useRef } from "react";
import { ModuleContainer, PageContainer, HorizontalBar } from "@/components";
import { OverView } from "./modules";
import pieData from "./mock/pie";
// import intl from "react-intl-universal";
import classnames from "classnames";
import styles from "./index.module.less";

const Security = () => {
  return (
    <>
      <div className={styles.track}>
        <div className={styles.light}></div>
      </div>
      <PageContainer className={styles.container}>
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
            <ModuleContainer
              key="安全威胁来源"
              title="安全威胁来源"
              titleEn="Sources of security threats"
              placement="left"
              className={styles.sources}
            >
              <HorizontalBar
                className={styles.bar}
                data={pieData}
                padding={[8, 0, 35, 60]}
                valueFormatter={(value) => value}
                dateFormatter={(value) => value}
                axisColor="rgba(254,244,235,0.6)"
                barColors={[
                  "l(180) 0:#84AAFF 1:#4979FF",
                  "l(180) 0:#9BEBFF 1:#00B4F7",
                ]}
              ></HorizontalBar>
            </ModuleContainer>
          </div>
          <div className={styles.middle}></div>
          <div className={styles.right}></div>
        </div>
      </PageContainer>
    </>
  );
};

export default Security;
