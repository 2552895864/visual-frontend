import { useState } from "react";
import intl from "react-intl-universal";

const locales = {
  "en-US": require("@/locales/en.json"),
  "zh-CN": require("@/locales/zh.json"),
};

const useLocale = () => {
  const [lang, setLang] = useState("zh-CN");
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
