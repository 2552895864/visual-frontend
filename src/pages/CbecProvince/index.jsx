import React, { useState, Fragment } from "react";
// import intl from "react-intl-universal";
import { PageContainer } from "@/components";
import Status from "./Status";
import TrackInfo from "./TrackInfo";
import Statistics from "./Statistics";
import Rank from "./Rank";
import styles from "./index.module.less";

const Left = () => {
  const [statusInfo, setStatusInfo] = useState({});
  const [statusItemMode, setStatusItemMode] = useState("");
  return (
    <Fragment>
      <Status
        setStatusInfo={setStatusInfo}
        setStatusItemMode={setStatusItemMode}
      />
      <TrackInfo statusInfo={statusInfo} statusItemMode={statusItemMode} />
    </Fragment>
  );
};

const CbecProvince = () => {
  return (
    <PageContainer className={styles.coverPageContainer}>
      <div className={styles.cbecProvinceLayout}>
        <div className={styles.left}>
          <Left />
        </div>
        <div className={styles.middle}>
          <Statistics />
        </div>
        <div className={styles.right}>
          <Rank />
        </div>
      </div>
    </PageContainer>
  );
};

export default CbecProvince;
