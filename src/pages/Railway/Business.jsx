import React from "react";
import { ModuleContainer, BaseTable as Table } from "@/components";
import styles from "./Business.module.less";

const data = [];
for (let i = 0; i < 4; i++) {
  data.push({
    id: i,
    date: "2021-10-07",
    number: "3049230059284234",
    node: "满洲里",
    classesNumber: "A1234",
    duration: "26天",
  });
}
const Business = ({ dataSource = data }) => {
  const columns = [
    {
      title: "始发日期",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "货运单号",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "当前节点",
      dataIndex: "node",
      key: "node",
    },
    {
      title: "班次号",
      dataIndex: "classesNumber",
      key: "classesNumber",
    },
    {
      title: "累计耗时",
      dataIndex: "duration",
      key: "duration",
    },
  ];
  return (
    <ModuleContainer
      className={styles.business}
      title="当日业务情况"
      titleEn="Business of the Day"
      contentPadding={[19, 0, 0, 0]}
    >
      <Table
        columns={columns}
        dataSource={dataSource}
        headerClassName={styles.tableHeader}
        rowKey="id"
        size={4}
        delay={800}
      />
    </ModuleContainer>
  );
};

export default Business;
