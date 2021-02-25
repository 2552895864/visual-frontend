import React from "react";
import intl from "react-intl-universal";
import Statistic from "./Statistic";
import styles from "./index.module.less";
const defaultData = {};
function SquareGrid({ data = defaultData }) {
  return (
    <div className={styles.container}>
      {Object.keys(data).length > 0 ? (
        <>
          <Statistic
            label={intl.get("cbecPort.totalImportOrders")}
            number={data.totalImportOrders}
            suffix={intl.get("cbecPort.votes")}
          />
          <Statistic
            label={intl.get("cbecPort.totalExportOrders")}
            number={data.totalExportOrders}
            suffix={intl.get("cbecPort.votes")}
          />
          <Statistic
            label={intl.get("cbecPort.totalImportValue")}
            number={data.totalImportValue}
            suffix={intl.get("cbecPort.tenThousandYuan")}
          />
          <Statistic
            label={intl.get("cbecPort.totalExportValue")}
            number={data.totalExportValue}
            suffix={intl.get("cbecPort.tenThousandYuan")}
          />
        </>
      ) : null}
    </div>
  );
}

export default SquareGrid;
