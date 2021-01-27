import React from "react";
import { Button } from "antd";
import intl from "react-intl-universal";
import { PageContainer } from "@/components";
import styles from "./index.module.less";

const PageOne = () => {
  return (
    <PageContainer>
      <div className={styles.text}>{intl.get("pageOneTitle")}</div>
      <div className={styles.text}>{intl.get("normal")}</div>
      <Button type="primary">Test</Button>
    </PageContainer>
  );
};

export default PageOne;
