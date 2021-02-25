import React from "react";
// import intl from "react-intl-universal";
import { PageContainer } from "@/components";
import Summarize from "./Summarize";
import SingleWindow from "./SingleWindow";
import Mechanism from "./Mechanism";
import WindowReport from "./WindowReport";
import Plan from "./Plan";
import WindowBuild from "./WindowBuild";
import styles from "./index.module.less";

const Intro = () => {
  return (
    <PageContainer title="湖北单一窗口">
      <div className={styles.intro}>
        <div className={styles.left}>
          <Summarize />
          <SingleWindow />
        </div>
        <div className={styles.right}>
          <div className={styles.rightTop}>
            <Mechanism />
            <WindowReport />
          </div>
          <div className={styles.rightBottom}>
            <Plan />
            <WindowBuild />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Intro;
