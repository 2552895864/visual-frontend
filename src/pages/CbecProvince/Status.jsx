import React, { useState, useEffect } from "react";
import classnames from "classnames";
import Slider from "react-slick";
import { ModuleContainer } from "@/components";

import arrow from "@/assets/cebcProvince/arrow.png";
// import useModel from "./reducer";
import styles from "./Status.module.less";

const statusList = [];
for (let i = 0; i < 10; i++) {
  statusList.push({
    id: i,
    type: "保税进口",
    enterprise: `武汉宏通详供应${i}`,
    status: "放行",
    num: `${i}094995290492938`,
    name: `博朗剃须刀套盒`,
    origin: "日本",
    startCountry: "中国",
    portName: "东湖综保",
  });
}

const ItemCard = ({
  item: { type, enterprise, portName, status },
  isHead = false,
  isHighlight = false,
}) => {
  const itemCardClass = classnames(styles.itemCardContainer, {
    [styles.itemHeadContainer]: isHead,
    [styles.highlight]: isHighlight,
  });
  return (
    <div className={itemCardClass}>
      <span>{type}</span>
      <span>{enterprise}</span>
      <span>{portName}</span>
      <span style={{ color: "#f1cb34" }}>{status}</span>
    </div>
  );
};
//滚动：动态生成
const Status = ({
  dataSource = statusList,
  setStatusInfo,
  setStatusItemMode,
}) => {
  const [topIndex, setTopIndex] = useState(0);
  const [arrowPosition, setArrowPosition] = useState("down");
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 8000,
    speed: 1500,
    beforeChange: () => {
      setStatusItemMode && setStatusItemMode("before");
      setArrowPosition("up");
    },
    afterChange: (index) => {
      setStatusItemMode && setStatusItemMode("after");
      setArrowPosition("down");
      setTopIndex(getNewTopIndex(index));
    },
  };
  const getNewTopIndex = (index) => {
    const newTopIndex =
      index + 2 === dataSource.length || index + 2 > dataSource.length
        ? index - dataSource.length
        : index;
    return newTopIndex;
  };
  const arrowClass = classnames(styles.arrow, {
    [styles.arrowUp]: arrowPosition === "up",
  });
  useEffect(() => {
    setStatusInfo(dataSource[topIndex + 2]);
  }, [dataSource, topIndex, setStatusInfo]);
  return (
    <ModuleContainer
      title="申报状态"
      titleEn="Import and export hot category"
      className={styles.status}
    >
      <ItemCard
        isHead={true}
        item={{
          type: "进口类型",
          enterprise: "申报企业",
          portName: "口岸名称",
          status: "状态",
        }}
      />
      <div className={styles.slider}>
        <Slider {...settings}>
          {dataSource.map((item, index) => (
            <ItemCard
              key={item.id}
              item={item}
              isHighlight={index === topIndex + 2}
            />
          ))}
        </Slider>
      </div>
      <div className={arrowClass}>
        <img src={arrow} alt="arrow" />
      </div>
    </ModuleContainer>
  );
};

export default Status;
