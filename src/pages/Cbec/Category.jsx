import React from "react";
import { ModuleContainer, BaseTable as Table } from "@/components";
import styles from "./Category.module.less";

const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    id: i,
    goods: "欧乐B牙刷",
    country: "德国",
    count: "32,312,438",
  });
}
const Category = ({ dataSource = data }) => {
  const columns = [
    {
      title: "货物",
      dataIndex: "goods",
      key: "goods",
    },
    {
      title: "国家",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "单量",
      dataIndex: "count",
      key: "count",
    },
  ];
  return (
    <ModuleContainer
      title="进出口热销货物"
      titleEn="The number of declaration v"
      contentPadding={[28, 0, 0, 0]}
    >
      <Table
        columns={columns}
        dataSource={dataSource}
        bordered={false}
        headerClassName={styles.tableHeader}
        rowClassName={() => styles.row}
        rowKey="id"
        tdPadding={0}
        size={5}
      />
    </ModuleContainer>
  );
};

export default Category;
