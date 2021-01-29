import { useState } from "react";
import intl from "react-intl-universal";
import { LANG_ZH_CN_VALUE, LANG_EN_US_VALUE } from "@/constants";
const locales = {
  [LANG_EN_US_VALUE]: require("@/locales/en-US"),
  [LANG_ZH_CN_VALUE]: require("@/locales/zh-CN"),
};

const useLocale = () => {
  const [lang, setLang] = useState(LANG_ZH_CN_VALUE);
  intl.init({
    warningHandler: (msg, detail) => {
      //开发环境有
      console.log(`${msg} ${detail}`);
    },
    currentLocale: lang,
    locales,
  });
  return {
    lang,
    setLang,
  };
};

export default useLocale;
