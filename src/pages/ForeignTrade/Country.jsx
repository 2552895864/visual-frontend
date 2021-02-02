import React from "react";
import { ModuleContainer } from "@/components";
import styles from "./Country.module.less";

const Country = () => {
  return (
    <ModuleContainer
      title="热门贸易国家"
      titleEn="Popular trading country"
      className={styles.country}
    ></ModuleContainer>
  );
};

export default Country;
