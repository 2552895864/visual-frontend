import React, { Fragment, useState, useEffect } from "react";
import classNames from "classnames";
import { useSpring, animated } from "react-spring";
import { ModuleContainer } from "@/components";
import { CBEC_PROVINCE_RANK_DEFAULT_WIDTH } from "@/constants";
import RankRadio from "./RankRadio";
import styles from "./Rank.module.less";

const data = {
  count: {
    import: [
      { name: "武汉开城产业有限公司", value: 7138, rate: 1 },
      { name: "武汉美兰商务有限公司", value: 5783, rate: 0.86 },
      { name: "武汉动力国际贸易有限公司", value: 5235, rate: 0.83 },
      { name: "武汉上合电子商务信息科技", value: 5138, rate: 0.8 },
      { name: "武汉利郎电子商务有限公司", value: 4218, rate: 0.71 },
    ],
    export: [
      { name: "神州数码有限公司", value: 13203, rate: 1 },
      { name: "武汉赛天有限公司", value: 9331, rate: 0.86 },
      { name: "武汉天海国际贸易有限公司", value: 7731, rate: 0.83 },
      { name: "武汉汉商电子商务信息科技", value: 6533, rate: 0.8 },
      { name: "武汉爱河商务有限公司", value: 5783, rate: 0.71 },
    ],
  },
  value: {
    import: [
      { name: "武汉医疗联合有限公司", value: 14005, rate: 1 },
      { name: "武汉广汇国际贸易有限公司", value: 9001, rate: 0.86 },
      { name: "武汉爱知商务有限公司", value: 8783, rate: 0.83 },
      { name: "武汉柯蓝信息科技", value: 7138, rate: 0.8 },
      { name: "武汉天时达有限公司", value: 6355, rate: 0.71 },
    ],
    export: [
      { name: "武汉佳士健康产业有限公司", value: 9221, rate: 1 },
      { name: "武汉美郎电子商务信息科技", value: 8778, rate: 0.86 },
      { name: "武汉美郎商务有限公司", value: 7754, rate: 0.83 },
      { name: "武汉美郎电子商务有限公司", value: 6654, rate: 0.8 },
      { name: "武汉汇海国际贸易有限公司", value: 5235, rate: 0.71 },
    ],
  },
};

const RankItem = ({ dataSource: { name = "-", value, rate }, index }) => {
  const [barWidth, setBarWidth] = useState(0);
  const width = CBEC_PROVINCE_RANK_DEFAULT_WIDTH * rate;
  const columnClass = classNames(styles.column, {
    [styles.golden]: index % 2 === 0,
  });
  const titleAnimation = useSpring({
    from: { num: 0 },
    to: { num: value },
    delay: 400,
  });
  useEffect(() => {
    let timer = setTimeout(() => {
      setBarWidth(width);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [width]);
  return (
    <div className={styles.rankItem}>
      <div className={styles.name}>{name}</div>
      <div className={styles.bar}>
        <animated.div className={styles.num}>
          {titleAnimation.num.interpolate((x) => x.toFixed(0))}
        </animated.div>
        <div className={columnClass} style={{ width: barWidth }}></div>
      </div>
    </div>
  );
};

const Rank = () => {
  const [countData, setCountData] = useState([]);
  const [valueData, setValueData] = useState([]);
  const options = [
    {
      title: "申报单量TOP5企业,",
      titleEn: "The top 5 enterprises in the number of declaration",
      className: styles.count,
      getType: (type) => {
        setCountData(data.count[type]);
      },
      data: countData,
    },
    {
      title: "申报货值TOP5企业,",
      titleEn: "The top 5 enterprises in the declared value of goods",
      className: styles.value,
      getType: (type) => {
        setValueData(data.value[type]);
      },
      data: valueData,
    },
  ];

  return (
    <Fragment>
      {options.map((item) => (
        <ModuleContainer
          key={item.title}
          title={item.title}
          titleEn={item.titleEn}
          placement="right"
          className={item.className}
          extra={<RankRadio getType={item.getType} />}
        >
          {item.data.map((item, index) => (
            <RankItem key={item.name} dataSource={item} index={index} />
          ))}
        </ModuleContainer>
      ))}
    </Fragment>
  );
};

export default Rank;
