import React from "react";
import intl from "react-intl-universal";
import { PageContainer } from "@/components";
// import styles from "./index.module.less";

const ForeignTrade = () => {
  return (
    <PageContainer>
      <div style={{ color: "white" }}>{intl.get("foreignTrade.cbecData")}</div>
    </PageContainer>
  );
};

export default ForeignTrade;
