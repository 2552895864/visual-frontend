import React from "react";
import { Button } from "antd";
import { PageContainer } from "@/components";
import styles from "./index.module.less";

const PageOne = () => {
  return (
    <PageContainer>
      <div className={styles.text}>Page1</div>
      <Button type="primary">Test</Button>
    </PageContainer>
  );
};

export default PageOne;
