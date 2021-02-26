import React from "react";

import { ModuleContainer, Flag, BaseTable as Table } from "@/components";
import styles from "./Country.module.less";

const data = [
  { countryName: "瑞士", countryNameAbbr: "CHE", value: "23,442,324" },
  { countryName: "法国", countryNameAbbr: "FRA", value: "43,126,859" },
  { countryName: "美国", countryNameAbbr: "USA", value: "13,126,754" },
  { countryName: "日本", countryNameAbbr: "JPN", value: "31,126,595" },
  { countryName: "新加坡", countryNameAbbr: "SGP", value: "9,126,185" },
];

const Country = ({ dataSource = data }) => {
  const columns = [
    {
      title: "国旗",
      dataIndex: "countryNameAbbr",
      key: "countryNameAbbr",
      render: (value) => <Flag countryCode={value} />,
      width: "12%",
    },
    {
      title: "区域名称",
      dataIndex: "countryName",
      key: "countryName",
      render: (value) => <div className={styles.countryName}>{value}</div>,
      width: "70%",
    },
    {
      title: "货值",
      dataIndex: "value",
      key: "value",
      render: (value) => <div className={styles.value}>{value}</div>,
      textAlign: "right",
    },
  ];
  return (
    <ModuleContainer
      title="热门贸易国家/地区"
      titleEn="Hot trading countries/regions"
      className={styles.country}
      contentPadding={[10, 0, 0, 0]}
    >
      <Table
        columns={columns}
        dataSource={dataSource}
        showHeader={false}
        bordered={false}
        rowHeight="48px"
        tdPadding={0}
        rowKey="countryNameAbbr"
        size={5}
      />
    </ModuleContainer>
  );
};

export default Country;
