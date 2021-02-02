import React from "react";
// import intl from "react-intl-universal";
// import { PageContainer, SquareGrid, Table } from "@/components";
import { PageContainer } from "@/components";
// import { CumulativeValue, ProgressBar } from "./modules";
import { EchartPie } from "./modules";
import styles from "./index.module.less";

const CebcPort = () => {
  return (
    <PageContainer>
      <div>
        <EchartPie className={styles.pie}></EchartPie>
      </div>
    </PageContainer>
  );
};

export default CebcPort;
