const SquareGridData = {
  武邮快件: {
    totalImportOrders: 42234,
    totalExportOrders: 42234,
    totalImportValue: 3242493,
    totalExportValue: 2349724,
  },
  邮局海关: {
    totalImportOrders: Math.round(42234 * 0.88),
    totalExportOrders: Math.round(42234 * 0.88),
    totalImportValue: Math.round(3242493 * 0.88),
    totalExportValue: Math.round(2349724 * 0.88),
  },
  东湖综保: {
    totalImportOrders: Math.round(42234 * 1.11),
    totalExportOrders: Math.round(42234 * 1.11),
    totalImportValue: Math.round(3242493 * 1.11),
    totalExportValue: Math.round(2349724 * 1.11),
  },
};

const mockPie = [
  { name: "武邮快件", value: 666 },
  { name: "邮局海关", value: 181 },
  { name: "东湖综保", value: 153 },
];

const mockTable1 = {
  武邮快件: [
    {
      name: "索尼A7R4 全画幅微单",
      type: "进口",
      country: "德国",
      value: 1325357,
      srcIndex: "shuma",
    },
    {
      name: "欧乐B电动牙刷",
      type: "进口",
      country: "日本",
      value: 31325357,
      srcIndex: "priyongpin",
    },
    {
      name: "福特Focus RS",
      type: "进口",
      country: "美国",
      value: 23425357,
      srcIndex: "luntai",
    },
    {
      name: "海底捞火锅",
      type: "出口",
      country: "中本",
      value: 23425357,
      srcIndex: "pfood",
    },
  ],
  邮局海关: [
    {
      name: "索尼A7R4 全画幅微单",
      type: "进口",
      country: "德国",
      value: Math.round(1325357 * 0.88),
      srcIndex: "shuma",
    },
    {
      name: "欧乐B电动牙刷",
      type: "进口",
      country: "日本",
      value: Math.round(31325357 * 0.88),
      srcIndex: "priyongpin",
    },
    {
      name: "福特Focus RS",
      type: "进口",
      country: "美国",
      value: Math.round(23425357 * 0.88),
      srcIndex: "luntai",
    },
    {
      name: "海底捞火锅",
      type: "出口",
      country: "中本",
      value: Math.round(23425357 * 0.88),
      srcIndex: "pfood",
    },
  ],
  东湖综保: [
    {
      name: "索尼A7R4 全画幅微单",
      type: "进口",
      country: "德国",
      value: Math.round(1325357 * 1.11),
      srcIndex: "shuma",
    },
    {
      name: "欧乐B电动牙刷",
      type: "进口",
      country: "日本",
      value: Math.round(31325357 * 1.11),
      srcIndex: "priyongpin",
    },
    {
      name: "福特Focus RS",
      type: "进口",
      country: "美国",
      value: Math.round(23425357 * 1.11),
      srcIndex: "luntai",
    },
    {
      name: "海底捞火锅",
      type: "出口",
      country: "中本",
      value: Math.round(23425357 * 1.11),
      srcIndex: "pfood",
    },
  ],
};

const mockTable2 = {
  武邮快件: [
    {
      name: "索尼A7R4 全画幅微单",
      type: "进口",
      country: "德国",
      value: 1325357,
      srcIndex: "shuma",
    },
    {
      name: "欧乐B电动牙刷",
      type: "进口",
      country: "日本",
      value: 31325357,
      srcIndex: "priyongpin",
    },
    {
      name: "福特Focus RS",
      type: "进口",
      country: "美国",
      value: 23425357,
      srcIndex: "luntai",
    },
    {
      name: "海底捞火锅",
      type: "出口",
      country: "中本",
      value: 23425357,
      srcIndex: "pfood",
    },
  ],
  邮局海关: [
    {
      name: "索尼A7R4 全画幅微单",
      type: "进口",
      country: "德国",
      value: Math.round(1325357 * 0.88),
      srcIndex: "shuma",
    },
    {
      name: "欧乐B电动牙刷",
      type: "进口",
      country: "日本",
      value: Math.round(31325357 * 0.88),
      srcIndex: "priyongpin",
    },
    {
      name: "福特Focus RS",
      type: "进口",
      country: "美国",
      value: Math.round(23425357 * 0.88),
      srcIndex: "luntai",
    },
    {
      name: "海底捞火锅",
      type: "出口",
      country: "中本",
      value: Math.round(23425357 * 0.88),
      srcIndex: "pfood",
    },
  ],
  东湖综保: [
    {
      name: "索尼A7R4 全画幅微单",
      type: "进口",
      country: "德国",
      value: Math.round(1325357 * 1.11),
      srcIndex: "shuma",
    },
    {
      name: "欧乐B电动牙刷",
      type: "进口",
      country: "日本",
      value: Math.round(31325357 * 1.11),
      srcIndex: "priyongpin",
    },
    {
      name: "福特Focus RS",
      type: "进口",
      country: "美国",
      value: Math.round(23425357 * 1.11),
      srcIndex: "luntai",
    },
    {
      name: "海底捞火锅",
      type: "出口",
      country: "中本",
      value: Math.round(23425357 * 1.11),
      srcIndex: "pfood",
    },
  ],
};

const mockLine = {
  武邮快件: [
    { time: "1月", value: 33333, counts: 260 },
    { time: "2月", value: 35348, counts: 240 },
    { time: "3月", value: 26666, counts: 370 },
    { time: "4月", value: 29999, counts: 350 },
    { time: "5月", value: 34542, counts: 270 },
    { time: "6月", value: 38999, counts: 370 },
  ],
  邮局海关: [
    {
      time: "1月",
      value: Math.round(33333 * 0.88),
      counts: Math.round(260 * 0.88),
    },
    {
      time: "2月",
      value: Math.round(35348 * 0.88),
      counts: Math.round(240 * 0.88),
    },
    {
      time: "3月",
      value: Math.round(26666 * 0.88),
      counts: Math.round(370 * 0.88),
    },
    {
      time: "4月",
      value: Math.round(29999 * 0.88),
      counts: Math.round(350 * 0.88),
    },
    {
      time: "5月",
      value: Math.round(34542 * 0.88),
      counts: Math.round(270 * 0.88),
    },
    {
      time: "6月",
      value: Math.round(38999 * 0.88),
      counts: Math.round(370 * 0.88),
    },
  ],
  东湖综保: [
    {
      time: "1月",
      value: Math.round(33333 * 1.11),
      counts: Math.round(260 * 1.11),
    },
    {
      time: "2月",
      value: Math.round(35348 * 1.11),
      counts: Math.round(240 * 1.11),
    },
    {
      time: "3月",
      value: Math.round(26666 * 1.11),
      counts: Math.round(370 * 1.11),
    },
    {
      time: "4月",
      value: Math.round(29999 * 1.11),
      counts: Math.round(350 * 1.11),
    },
    {
      time: "5月",
      value: Math.round(34542 * 1.11),
      counts: Math.round(270 * 1.11),
    },
    {
      time: "6月",
      value: Math.round(38999 * 1.11),
      counts: Math.round(370 * 1.11),
    },
  ],
};

export { SquareGridData, mockPie, mockTable1, mockTable2, mockLine };
