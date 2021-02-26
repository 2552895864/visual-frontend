import React from "react";
import { CircleFlag } from "react-circle-flags";
import { ModuleContainer, BaseTable as Table } from "@/components";
import styles from "./Country.module.less";

const data = [
  { countryName: "阿根廷", countryNameAbbr: "ag", value: "23,442,324" },
  { countryName: "巴西", countryNameAbbr: "br", value: "43,126,859" },
  { countryName: "德国", countryNameAbbr: "ge", value: "13,126,754" },
  { countryName: "希腊", countryNameAbbr: "gr", value: "31,126,595" },
  { countryName: "意大利", countryNameAbbr: "it", value: "9,126,185" },
];

const Country = ({ dataSource = data }) => {
  const columns = [
    {
      title: "国旗",
      dataIndex: "countryNameAbbr",
      key: "countryNameAbbr",
      render: (value) => (
        <CircleFlag
          countryCode={value}
          height="35"
          className={styles.countryIconContent}
        />
      ),
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
