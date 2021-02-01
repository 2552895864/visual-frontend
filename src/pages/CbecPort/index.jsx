import React from "react";
// import intl from "react-intl-universal";
import { PageContainer, SquareGrid, Table } from "@/components";
import CumulativeValue from "./modules/CumulativeValue";
// import styles from "./index.module.less";

const CebcPort = () => {
  return (
    <PageContainer>
      <div>
        <CumulativeValue></CumulativeValue>
      </div>
    </PageContainer>
  );
};

export default CebcPort;
