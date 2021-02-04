import React from "react";
// import intl from "react-intl-universal";
import { PageContainer, Area, Table } from "@/components";
import { buildMultipleLines } from "@/utils/utils";
import { GoodsTable, Scan, Overview } from "./modules";
import { axisConfig, extra, multiAreaConfig } from "./options/area";
import mockAreaData from "./mock/area";
import styles from "./index.module.less";

const MxGoods = () => {
  return (
    <PageContainer>
      <div className={styles.map}></div>
      <div className={styles.layout}>
        <div className={styles.test}>
          <Overview></Overview>
          {/* <Table theme="blue"></Table> */}
          {/* <Area
            shape={{ line: "smooth", area: "smooth" }}
            axis={axisConfig}
            extra={extra}
            multipleLines={buildMultipleLines(mockAreaData, multiAreaConfig)}
          ></Area> */}
        </div>
      </div>
    </PageContainer>
  );
};

export default MxGoods;
