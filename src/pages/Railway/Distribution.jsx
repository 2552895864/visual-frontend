import React from "react";
import { ModuleContainer, BaseTable as Table } from "@/components";
import styles from "./Distribution.module.less";

const data = [];
for (let i = 0; i < 14; i++) {
  data.push({
    id: i,
    destination: `${i}马拉`,
    rate: "32.45%",
    count: "94,242,294",
    value: "1,423,854",
  });
}

const Distribution = ({ dataSource = data }) => {
  const columns = [
    {
      title: "目的站",
      dataIndex: "destination",
      key: "destination",
    },
    {
      title: "占比",
      dataIndex: "rate",
      key: "rate",
      textAlign: "right",
    },
    {
      title: "货运量",
      dataIndex: "count",
      key: "count",
      textAlign: "right",
    },
    {
      title: "货值",
      dataIndex: "value",
      key: "value",
      textAlign: "right",
    },
  ];
  return (
    <ModuleContainer
      className={styles.distribution}
      title="南北线目的站分布"
      titleEn="Distribution of destination stations of the North-South Line"
      contentPadding={[32, 0, 0, 0]}
    >
      <Table
        columns={columns}
        dataSource={dataSource}
        headerClassName={styles.tableHeader}
        rowKey="id"
        size={5}
        delay={1000}
      />
    </ModuleContainer>
  );
};

export default Distribution;
