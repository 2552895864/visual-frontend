import React from "react";
import intl from "react-intl-universal";
import { PageContainer } from "@/components";
import { RadialBar, Area, HorizontalBar } from "@/components";

const PageTwo = () => {
  return (
    <PageContainer>
      <div style={{ color: "white" }}>{intl.get("pageTwoTitle")}</div>
      <RadialBar />
      <Area />
      <HorizontalBar />
    </PageContainer>
  );
};

export default PageTwo;
